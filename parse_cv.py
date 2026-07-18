import re
import json

def parse_cv(cv_text):
    data = {
        "personal_info": {},
        "profile": "",
        "experience": [],
        "education": [],
        "projects": [],
        "skills": {
            "technical": {},
            "marketing_creative": {},
            "soft": []
        },
        "languages": []
    }

    # --- Personal Info ---
    personal_info_match = re.search(
        r"^(?P<name>Youssef Sherif)\n"  # Name
        r"(?P<title>[^\n]+)\n"  # Title
        r"\s*\((?P<phone>\d{11})\) - (?P<email>[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\n"  # Phone and Email
        r"\s*(?P<linkedin>linkedin\.com/in/[a-zA-Z0-9-]+)\n"  # LinkedIn
        r"\s*(?P<location>[^\n]+)",  # Location
        cv_text, re.MULTILINE
    )
    if personal_info_match:
        data["personal_info"] = personal_info_match.groupdict()

    # --- Profile ---
    profile_match = re.search(r"Profile\n(.*?)\nExperience", cv_text, re.DOTALL)
    if profile_match:
        data["profile"] = profile_match.group(1).replace("\n", " ").strip()

    # --- Experience ---
    experience_full_section_match = re.search(r"Experience\n(.*?)(?:Education|Projects|Skills)", cv_text, re.DOTALL)
    if experience_full_section_match:
        experience_text = experience_full_section_match.group(1)
        
        # Split into individual job blocks more reliably
        # Each block starts with a Company Name, followed by Job Title | Period, then bullet points
        experience_blocks = re.split(
            r"\n(?=[A-Z][a-zA-Z].*?\n.*?\|.*?\w{3}\s\d{4})", experience_text.strip()
        )
        
        for block in experience_blocks:
            if not block.strip(): continue

            lines = [line.strip() for line in block.strip().split("\n") if line.strip()]
            if not lines: continue

            company = lines[0]
            title_period_line = lines[1]
            
            title_period_match = re.match(r"(.*?)\s*\|\s*(?P<period>\w{3}\s\d{4}\s*–\s*(?:Present|\w{3}\s\d{4}))", title_period_line)
            if title_period_match:
                title = title_period_match.group(1).strip()
                period = title_period_match.group("period").strip()
            else:
                title = title_period_line.strip()
                period = ""

            description_bullets = re.findall(r"•\s*(.*?)(?=\n•|$)", "\n".join(lines[2:]), re.DOTALL)
            description = " ".join([d.strip() for d in description_bullets])

            data["experience"].append({
                "title": title,
                "company": company,
                "period": period,
                "description": description,
                "skills": [] # Skills will be extracted from the general skills section
            })

    # --- Education ---
    education_match = re.search(r"Education\n(.*?)(?:Projects|Skills)", cv_text, re.DOTALL)
    if education_match:
        edu_line = education_match.group(1).strip()
        edu_match = re.match(r"(.*?)\s+(\w{3}\s\d{4}\s*–\s*\w{3}\s\d{4})", edu_line)
        if edu_match:
            data["education"].append({
                "degree": edu_match.group(1).strip().replace("|", "").strip(),
                "period": edu_match.group(2).strip()
            })

    # --- Projects ---
    projects_section = re.search(r"Projects\n(.*?)(?:Courses|Skills)", cv_text, re.DOTALL)
    if projects_section:
        # Split by project titles that are followed by technologies and a GitHub link
        project_blocks = re.split(r"\n\s*(?=[A-Za-z].*?:.*?\|.*?GitHub:)", projects_section.group(1).strip())
        for block in project_blocks:
            if not block.strip(): continue

            lines = [line.strip() for line in block.strip().split("\n") if line.strip()]
            if not lines: continue

            title_line = lines[0]
            github_match = re.search(r"\(GitHub:\s*(.*?)\)", title_line)
            github_link = github_match.group(1).strip() if github_match else "#"
            
            # Extract title and technologies before the GitHub link
            title_tech_raw = re.sub(r"\(GitHub:.*?\)", "", title_line).strip()
            title_tech_match = re.match(r"(.*?)\s*\|\s*(.*?)$", title_tech_raw)
            
            title = ""
            technologies = []
            if title_tech_match:
                title = title_tech_match.group(1).strip()
                technologies = [t.strip() for t in title_tech_match.group(2).split("·")]
            else:
                title = title_tech_raw.split("|")[0].strip() # Fallback

            description_bullets = re.findall(r"•\s*(.*?)(?=\n•|$)", "\n".join(lines[1:]), re.DOTALL)
            description = " ".join([d.strip() for d in description_bullets])

            data["projects"].append({
                "title": title,
                "description": description,
                "technologies": technologies,
                "link": "#", # Placeholder for now
                "github": github_link,
                "featured": True # All projects from CV are featured for now
            })

    # --- Courses ---
    courses_section = re.search(r"Courses\n(.*?)(?:Skills)", cv_text, re.DOTALL)
    if courses_section:
        course_bullets = re.findall(r"•\s*(.*?)(?=\n•|$)", courses_section.group(1))
        data["courses"] = [c.strip() for c in course_bullets]

    # --- Skills ---
    skills_section = re.search(r"Skills\n(.*?)(?:Languages|$)", cv_text, re.DOTALL)
    if skills_section:
        # Technical Skills
        technical_skills_match = re.search(r"Technical Skills\n(.*?)(?:Marketing & Creative Skills|Soft Skills|Languages|$)", skills_section.group(1), re.DOTALL)
        if technical_skills_match:
            tech_skills_raw = technical_skills_match.group(1).strip()
            tech_skill_categories = re.split(r"•\s*", tech_skills_raw)
            for category_block in tech_skill_categories:
                if ":" in category_block:
                    category_name, skills_str = category_block.split(":", 1)
                    data["skills"]["technical"][category_name.strip()] = [s.strip() for s in skills_str.split(",") if s.strip()]

        # Marketing & Creative Skills
        marketing_creative_skills_match = re.search(r"Marketing & Creative Skills\n(.*?)(?:Soft Skills|Languages|$)", skills_section.group(1), re.DOTALL)
        if marketing_creative_skills_match:
            marketing_skills_raw = marketing_creative_skills_match.group(1).strip()
            marketing_skill_categories = re.split(r"•\s*", marketing_skills_raw)
            for category_block in marketing_skill_categories:
                if ":" in category_block:
                    category_name, skills_str = category_block.split(":", 1)
                    data["skills"]["marketing_creative"][category_name.strip()] = [s.strip() for s in skills_str.split(",") if s.strip()]

        # Soft Skills
        soft_skills_match = re.search(r"Soft Skills\n(.*?)(?:Languages|$)", skills_section.group(1), re.DOTALL)
        if soft_skills_match:
            soft_skills_bullets = re.findall(r"•\s*(.*?)(?=\n•|$)", soft_skills_match.group(1))
            data["skills"]["soft"] = [s.strip() for s in soft_skills_bullets]

    # --- Languages ---
    languages_match = re.search(r"Languages\n(.*?)$", cv_text, re.DOTALL)
    if languages_match:
        language_bullets = re.findall(r"•\s*(.*?)(?=\n•|$)", languages_match.group(1))
        data["languages"] = [l.strip() for l in language_bullets]

    return data

# Read the CV content from the file
with open("/home/ubuntu/upload/YoussefSherifCV---.pdf.txt", "r") as f:
    cv_content = f.read()

# Parse the CV
parsed_data = parse_cv(cv_content)

# Output the parsed data (for debugging/verification)
print(json.dumps(parsed_data, indent=2))

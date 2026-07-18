import fitz
import os
import re

PDF_DIR = r"d:\youssef-portfolio-master\youssef-portfolio-master"
OUT_DIR = r"d:\youssef-portfolio-master\youssef-portfolio-master\client\public\certifications"

pdf_files = [
    "Microsoft Certified Power BI Data Analyst Associate (PL-300).pdf",
    "Foundations Data, Data, Everywhere.pdf",
    "Ask Questions to Make Data-Driven Decisions.pdf",
    "Prepare Data for Exploration.pdf",
    "Process Data from Dirty to Clean.pdf",
    "Share Data Through the Art of Visualization.pdf",
    "Introduction to SQL.pdf",
    "Delivering Quality Work with Agility.pdf",
]

for pdf_name in pdf_files:
    pdf_path = os.path.join(PDF_DIR, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"SKIP: {pdf_name} not found")
        continue

    clean_name = re.sub(r'[^a-zA-Z0-9]+', '-', pdf_name.replace('.pdf', '')).strip('-').lower()
    out_path = os.path.join(OUT_DIR, f"{clean_name}.png")

    doc = fitz.open(pdf_path)
    page = doc[0]
    pix = page.get_pixmap(dpi=200)
    pix.save(out_path)
    doc.close()
    print(f"OK: {pdf_name} -> {clean_name}.png")

print("Done!")

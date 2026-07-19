import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * DESIGN SYSTEM: Executive AI Command Suite
 * Theme: Dark Luxury (Apple × OpenAI × Porsche × Bloomberg Terminal × Leica)
 * 
 * Color Palette:
 * - Background: #080808 (Deep Black)
 * - Surface: #101010 (Elevated)
 * - Card: #171717 (Card Background)
 * - Text Primary: #F4F4F2 (Premium White)
 * - Accent Gold: #C8A96A (Luxury Primary)
 * - Accent Blue: #4C8BF5 (Executive Secondary)
 * 
 * Typography:
 * - Display: Sohne (Bold, Premium Headlines)
 * - Body: Inter (Clean, Professional)
 * - Mono: Fira Code (Technical)
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable={true}
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

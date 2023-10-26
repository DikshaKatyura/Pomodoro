import "./App.css";
import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import ThemeContextProvider from "./contextAPIs/ThemeContextProvider";
import TimerContextProvider from "./contextAPIs/TimerContextProvider";

function App() {
  return (
    <>
      <TimerContextProvider>
        <ThemeContextProvider>
          <SectionOne />
        </ThemeContextProvider>
      </TimerContextProvider>
      <SectionTwo />
    </>
  );
}

export default App;

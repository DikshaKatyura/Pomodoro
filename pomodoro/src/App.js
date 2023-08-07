import "./App.css";
import SectionOne from "./components/sections/SectionOne";
import SectionTwo from "./components/sections/SectionTwo";
import TimerContextProvider from "./contextAPIs/TimerContextProvider";

function App() {
  return (
    <>
      <TimerContextProvider>
        <SectionOne />
      </TimerContextProvider>
      <SectionTwo />
    </>
  );
}

export default App;

import classes from "./About.module.css";

const About = () => {
 
  return (
    <>
      <div className={classes.about} id="about">
        <div>
          <h1 className = 'text-rose'>What exactly is Kitchen Timer?</h1>
          <p>
            Kitchen Timer is a time management web application to increase your
            productivity by let you focus on your task on a set interval and
            remind you to take a break in-between. This will improve you mental
            and physical health. This Web App is based on a Time Management
            Technique known as{" "}
            <a className="text-rose" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" labelled="Read more about Pomodoro Technique">
              Pomodoro Technique
            </a>
            . It is developed by Francesco Cirillo in the late 1980s.
          </p>
        </div>
        <div>
          <h1 className = 'text-rose'>What is Pomodoro Technique?</h1>
          <p>
            Pomodoro Technique is a way to break your working times in
            intervals, typically 25 minutes in length, separated by short
            breaks. Each Intervals is known as Pomodoro.Here, you can set your
            intervals through setting tab.
          </p>
        </div>
        <div>
          <h1 className = 'text-rose'>How does this work?</h1>
          <ul>
            <li>Decide on the task to be done.</li>
            <li>
              Set the Pomodoro timer in the Settings (typically for 25 minutes).
            </li>
            <li>Work on the task.</li>
            <li>
              End work when the timer rings and take a short break (typically
              5–10 minutes,set this time in Settings).
            </li>
            <li>
              Go back to Step 2 and repeat until you complete four pomodoros.
            </li>
            <li>
              After four pomodoros are done, take a long break (typically 20 to
              30 minutes,set this time in Settings) instead of a short break.
              Once the long break is finished, return to step 2.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

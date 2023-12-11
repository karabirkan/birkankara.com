import ResumeCard from "../../components/ui/resume-card/ResumeCard";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.container}>
      <div className={classes.resume}>
        <ResumeCard />
      </div>
    </div>
  );
}

export default About;

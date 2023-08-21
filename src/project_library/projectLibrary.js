import NavBar from "./nav_bar/navBar";
import Section from "./section/Section";

const ProjectLibrary = () => {
  const descPaint = (
    <>
      <p>Paint made from scrach using C# in Windows forms app</p>
      <ul>
        <li>Copy-Paste images</li>
        <li>Open images</li>
        <li>Save images</li>
        <li>Multiple custom brushes</li>
      </ul>
    </>
  );
  const descPaintReact = (
    <>
      <p>Simplified React-based paint application.</p>
    </>
  );
  const descAscii = (
    <>
      <p>Writen in React,simple ascii generator with lists and multiple styles to select from.</p>
    </>
  );
  const desctodo = (
    <>
      <p>Uses local storage to save state of timers and names test site</p>
    </>
  );
  const desjsdocx = (
    <>
      <p>I've authored a comprehensive 189-page JavaScript course designed to take learners from a novice to an advanced level of proficiency. This carefully crafted course covers a wide range of topics, ensuring a solid foundation and gradual progression throughout the learning journey.</p>
    </>
  );
  const descWeightFinder = (
    <>
      <p>This is a simple application featuring an input field where you can type in a name. Once you provide a name, the application will display its corresponding weight.</p>
    </>
  );
  return (
    <>
      <NavBar />
      <Section
        title={"Paint"}
        desc={descPaint}
        gitlink={"https://github.com/Steropor/Paint"}
        hostlink={"/"}
        isWeb={false}
        imageUrl={"paint.png"}
      />
      <Section
        title={"AsciiWrite"}
        desc={descAscii}
        gitlink={"https://github.com/Steropor/AscsiiWrite"}
        hostlink={"/Ascii"}
        isWeb={true}
        imageUrl={"ascii.png"}
      />
      <Section
        title={"WeightFinder"}
        desc={descWeightFinder}
        gitlink={"https://github.com/Steropor/WeightFinder"}
        hostlink={"/WeightFinder"}
        isWeb={true}
        imageUrl={"weightfinder.png"}
      />
      <Section
        title={"ToDoList"}
        desc={desctodo}
        gitlink={"https://github.com/Steropor/ToDoList"}
        hostlink={"/ToDoList"}
        isWeb={true}
        imageUrl={"todolist.png"}
      />
      <Section
        title={"Js-Docx"}
        desc={desjsdocx}
        gitlink={"https://github.com/Steropor/Js-Docx"}
        hostlink={"https://docs.google.com/document/d/1J7xgvOsSanDLrv21YzRSGx1WH4Xpha484pX123faCGY/edit?usp=sharing"}
        isWeb={true}
        imageUrl={"Js-Docx.png"}
      />
            <Section
        title={"ReactPaint"}
        desc={descPaintReact}
        gitlink={"https://github.com/Steropor/ReactPaint"}
        hostlink={"/ReactPaint"}
        isWeb={true}
        imageUrl={"snek.png"}
      />
    </>
  );
};

export default ProjectLibrary;

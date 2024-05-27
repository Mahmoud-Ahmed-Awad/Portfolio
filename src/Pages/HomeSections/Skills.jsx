import Skill from "../../Components/Skill";

import HTMLLogo from "../../Assets/HTML.png";
import CSSLogo from "../../Assets/CSS.png";
import JavaScriptLogo from "../../Assets/JavaScript.png";
import ReactLogo from "../../Assets/React.png";
import ReduxLogo from "../../Assets/Redux.png";
import MongodbLogo from "../../Assets/Mongodb.png";
import ExpressLogo from "../../Assets/Express.png";
import NodeLogo from "../../Assets/Node.png";
import SassLogo from "../../Assets/Sass.png";
import BootstrapLogo from "../../Assets/Bootstrap.png";
import TailwindLogo from "../../Assets/Tailwind.png";
import SocketIoLogo from "../../Assets/SocketIo.png";

function Skills() {
  return (
    <section className="sm:p-10 pt-10 pb-20 bg-main items-center">
      <h1 className="text-3xl text-center font-extrabold text-white">
        My Skils
      </h1>
      <div className="flex flex-wrap gap-10 justify-center mt-3 sm:px-32">
        <Skill logo={HTMLLogo} title="HTML" />
        <Skill logo={CSSLogo} title="CSS" />
        <Skill logo={JavaScriptLogo} title="JavaScript" />
        <Skill logo={ReactLogo} title="React Js" />
        <Skill logo={ReduxLogo} title="Redux Js" />
        <Skill logo={MongodbLogo} title="Mongodb" />
        <Skill logo={ExpressLogo} title="Express Js" />
        <Skill logo={NodeLogo} title="Node Js" />
        <Skill logo={SassLogo} title="Sass" />
        <Skill logo={BootstrapLogo} title="Bootstrap" />
        <Skill logo={TailwindLogo} title="Tailwind" />
        <Skill logo={SocketIoLogo} title="Socket.io" />
      </div>
    </section>
  );
}

export default Skills;

import { RiReactjsLine } from "react-icons/ri";
import {
  SiMysql,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const Technologies = () => {
  return (
    <div id="tech" className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAngular className="text-7xl text-red-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNodedotjs className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiDocker className="text-7xl text-blue-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

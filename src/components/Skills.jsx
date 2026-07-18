// components/Skills.jsx
import { Cpu } from "lucide-react";
import jsLogo from "../assets/Stack/Unofficial_JavaScript_logo_2.svg";
import reactLogo from "../assets/Stack/React-icon.svg";
import cssLogo from "../assets/Stack/500px-Official_CSS_Logo.svg.png";
import bootstrapLogo from "../assets/Stack/Bootstrap_logo.svg";
import csharpLogo from "../assets/Stack/Logo_C_sharp.svg";
import javaLogo from "../assets/Stack/java-21.svg";
import mongodbLogo from "../assets/Stack/MongoDB_Logo.svg";
import mysqlLogo from "../assets/Stack/mysql-logo-svgrepo-com.svg";
import postgresqlLogo from "../assets/Stack/Postgresql_elephant.svg";
import sqlserverLogo from "../assets/Stack/Microsoft_SQL_Server_2025_icon.svg";
import sharepointLogo from "../assets/Stack/Microsoft_Office_SharePoint_(2019–2025).svg";
import gitLogo from "../assets/Stack/Git-logo.svg";
import githubLogo from "../assets/Stack/500px-Octicons-mark-github.svg.png";
import androidStudioLogo from "../assets/Stack/Android_Studio_icon_(2023).svg";
import powerAppsLogo from "../assets/Stack/Powerapps-logo.svg";
import powerAutomateLogo from "../assets/Stack/Microsoft_Power_Automate.svg";
import powerBiLogo from "../assets/Stack/New_Power_BI_Logo (1).svg";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "C#", logo: csharpLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "SQL Server", logo: sqlserverLogo },
      { name: "SharePoint", logo: sharepointLogo },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Android Studio", logo: androidStudioLogo },
      { name: "Power Apps", logo: powerAppsLogo },
      { name: "Power Automate", logo: powerAutomateLogo },
      { name: "Power BI", logo: powerBiLogo },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Cpu size={22} className="text-cyan-400" />
        <h2 className="text-3xl font-bold text-white text-center">
          Mi Stack Tecnológico
        </h2>
      </div>
      <p className="text-slate-400 text-center mb-12">
        Tecnologías y herramientas que utilizo para construir aplicaciones
        modernas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map(({ category, items }) => (
          <div
            key={category}
            className="group bg-slate-900/60 border border-slate-800 hover:border-cyan-400/30 hover:-translate-y-1 rounded-xl p-6 transition-all duration-300"
          >
            <h3 className="text-cyan-400 font-bold text-sm uppercase tracking-wide mb-4">
              {category}
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {items.map(({ name, logo }) => (
                <div key={name} className="flex flex-col items-center gap-1.5">
                  <div className="w-16 h-16 bg-slate-800/70 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-slate-800">
                    <img
                      src={logo}
                      alt={name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 text-center leading-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

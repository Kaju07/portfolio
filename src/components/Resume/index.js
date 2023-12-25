import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
      My Skills
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7">
      <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Language and Framework</div>
          <div className="ml-8 flex flex-col gap-6 mt-6ß">
            <BarGraph name={"JavaScript"} percent={80} />
            {/* JavaScript, MySQL, HTML, Groovy, CSS */}
            {/* NodeJS, ReactJS, Redux, Snowflake */}
            <BarGraph name={"ReactJS"} percent={75} />
            <BarGraph name={"Groovy"} percent={60} />
            <BarGraph name={"NodeJS"} percent={85} />
            <BarGraph name={"Redux"} percent={85} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"AWS"} percent={50} />
            <BarGraph name={"Snowflake"} percent={45} />
          </div>

       
        </div>
        {/* GIT, Jenkins, Octopus,Oracle SQL Developer, Teamcity, Putty, JFrog, Nagios, Log4j */}

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">Tools</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"Jenkins"} percent={75} />
            <BarGraph name={"Octopus"} percent={75} />
            <BarGraph name={"Oracle SQL Developer"} percent={70} />
            <BarGraph name={"Teamcity"} percent={80} />
            <BarGraph name={"Putty"} percent={85} />
        
          </div>

         
        </div>
        <a
            href={require("../../assets/files/portfolio.pdf")}
            download={"Dani's Resume"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
      </div>
    </div>
  );
}

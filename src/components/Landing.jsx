import FacebookIcon from "./partials/icons/FacebookIcon";
import GitHubIcon from "./partials/icons/GitHubIcon";
import InstagramIcon from "./partials/icons/InstagramIcon";
import LinkedInIcon from "./partials/icons/LinkedInIcon";
import XIcon from "./partials/icons/XIcon";
import About from "./partials/About";
import Experiences from "./partials/Experiences";
import Footer from "./partials/Footer";
import Intro from "./partials/Intro";
import LinkTo from "./partials/LinkTo";
import ScrollSpyNav from "./partials/ScrollSpyNav";
import Projects from "./partials/Projects";

export default function Landing() {
  return (
    <>      
      <div className="container py-lg-5 my-lg-5 py-sm-5 my-sm-5">

        <div className="row">
          <div className="col-lg-6 col-sm-12 p-lg-0 p-sm-2">
            <div className="container p-0">
              <About />
              <div className="navigation pt-4 my-5 pb-5">
                <ScrollSpyNav />
              </div>
              <div className="icons">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item bg-transparent border-0 pl-0 pr-4"><GitHubIcon size="25" fill="#94A3B8" /></li>
                  <li className="list-group-item bg-transparent border-0 px-0 pr-4"><FacebookIcon size="25" fill="#94A3B8" /></li>
                  <li className="list-group-item bg-transparent border-0 px-0 pr-4"><LinkedInIcon size="25" fill="#94A3B8" /></li>
                  <li className="list-group-item bg-transparent border-0 px-0 pr-4"><InstagramIcon size="25" fill="#94A3B8" /></li>
                  <li className="list-group-item bg-transparent border-0 px-0 pr-4"><XIcon size="25" fill="#94A3B8" /></li>
                </ul>
              </div>
            </div>
          </div>
          

          <div className="col-lg-6 col-sm-12 p-lg-0 p-sm-2">
            <div className="introduction">
              <Intro />
            </div>
            <div id="Experiences" className="experiences mt-5 pt-5">
              <Experiences />
              <LinkTo 
                link="/"
                title="View Full Résumé"
              />
            </div>
            <div id="Projects" className="experiences mt-5 pt-5">
              <Projects />
              <LinkTo 
                link="/"
                title="View Full Project Archive"
              />
            </div>

            <div id="Footer" className="footer my-3 secondary-color">
              <Footer />
            </div>
          </div>
        </div>

      </div>
    </>
  )
};
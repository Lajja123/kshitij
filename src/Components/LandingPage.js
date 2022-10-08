import React from "react";
import logo from "../Components/Images/logo.png";
import rocket from "../Components/Images/rocket.svg";
import "../Components/landingpage.css";
import Typewriter from "typewriter-effect";

function LandingPage() {
  return (
    <>
      <section id="main-section">
        <div className="section-head-content">
          <div className="leftbar-conent">
            <div className="left-elememt">
              <div className="element-content">
                <div className="left-logo">
                  <img src={logo} className="left-logo-indiv" />
                </div>
                <div className="circle-elemet">
                  <span className="info-span">V3.1</span>
                </div>
              </div>
              {/* <div className="span-content"></div> */}

              <h1 className="typewrite-content">
                Build For{""}
                <span
                  style={{ color: "#2443ac", fontWeight: "bold" }}
                  className="font-style"
                >
                  <Typewriter
                    id="element-primary-text"
                    options={{
                      strings: [
                        " Classic Application",
                        "Job & careers",
                        "Cloud Hosting",
                        "Customer Support",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <div className="left-paragraph">
                <p>
                  Start working with{" "}
                  <span className="color-blue-span">Landrick</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>

              <div className="left-buttons">
                <button type="button" className="demo-btn">
                  Veiw Demo
                </button>

                <button type="button" className="left-download">
                  Download Now
                </button>
              </div>
            </div>
          </div>
          <div className="rightbar-content">
            <div className="right-img">
              <img src={rocket} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;

import { Container, Row } from "react-bootstrap";
import Company_Img from "../../public/asset/img/company.png";
import Intern_Img from "../../public/asset/img/internship.png";

import Image from "next/image";
import About from "./About";

const Experience = () => {
  return (
    <section className="experience">
      <Container>
        <Row className="align-items-center">
          <About />
          <div id="experience">
            <h2>Experience</h2>

            <div className="timeline">
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <Image src={Company_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Full Time</div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">
                    Senior Software Developer
                  </div>
                  <div className="timeline__event__description">
                    <p>
                      Arcana Network <br />
                      Sept, 2024 - Present <br />
                      Bengaluru, Karnataka, India (Remote)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <Image src={Company_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Full Time</div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">
                    Senior Software Developer
                  </div>
                  <div className="timeline__event__description">
                    <p>
                      Comdex <br />
                      Apr, 2023 - Jun, 2024 <br />
                      Bengaluru, Karnataka, India (Remote)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <Image src={Company_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Full Time</div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">
                    Software Developer
                  </div>
                  <div className="timeline__event__description">
                    <p>
                      Rapid Innovation <br />
                      Oct, 2021 - Apr, 2023 <br />
                      Noida, Uttar Pradesh, India (Remote)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <Image src={Company_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Full Time</div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__title">
                    Full Stack Developer
                  </div>
                  <div className="timeline__event__description">
                    <p>
                      Techbae Pty Ltd <br />
                      Oct, 2020 - Oct, 2021 <br />
                      VIC 3012, Australia (Remote)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-2s timeline__event--type3">
                <div className="timeline__event__icon">
                  <Image src={Intern_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Internship</div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">
                    Junior Software Engineer
                  </div>
                  <div className="timeline__event__description">
                    <p>
                      Nmdsoft Software and Network Pvt Ltd
                      <br />
                      Sep, 2020 - Oct, 2020 <br />
                      Gurugram, Haryana, India (Remote)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div className="timeline__event__icon">
                  <Image src={Intern_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Intern Ship</div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">Summer Intern</div>
                  <div className="timeline__event__description">
                    <p>
                      KVCH <br />
                      Jun, 2019 - Aug, 2019 <br />
                      Noida, Uttar Pradesh, India (On-Site)
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp timeline__event--type3">
                <div className="timeline__event__icon">
                  <Image src={Intern_Img} alt="Experience Image" />
                </div>
                <div className="timeline__event__date">Intern Ship</div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title">Summer Intern</div>
                  <div className="timeline__event__description">
                    <p>
                      Microsoft Technology Associate <br />
                      Jun, 2018 - Aug, 2018 <br />
                      Lucknow, Uttar Pradesh, India (On-Site)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;

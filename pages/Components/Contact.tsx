import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home_Img from "../../public/asset/img/home.svg";
import Mail_Img from "../../public/asset/img/mail.svg";
import Call_Img from "../../public/asset/img/phone.svg";
import Telegram_Img from "../../public/asset/img/telegram.svg";
import Whatsapp_Img from "../../public/asset/img/whatsapp.svg";

const Contact = () => {
  const notify = () => toast("Message Sent Successfully!");

  const [state, handleSubmit] = useForm("mgebynkg");

  useEffect(() => {
    if (state?.succeeded) {
      notify();
      const myObject: any = document.getElementById("myForm");
      myObject ? myObject.reset() : "";
    }
  }, [state?.succeeded]);

  return (
    <Col lg={12}>
      <div className="contact wow slideInUp" id="contact">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <div className="d-flex flex-row align-items-center">
              <div className="contact-icon">
                <Image src={Home_Img} alt="Icon" />
              </div>
              <div className="text-start">
                <p>Address</p>
                <p>Manbazar, West Bengal, India</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-4 mb-4">
              <div className="contact-icon">
                <Image src={Call_Img} alt="Icon" />
              </div>
              <div className="text-start">
                <p>{`Let's Talk`}</p>
                <p>+91 9641867361</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="contact-icon">
                <Image src={Mail_Img} alt="Icon" />
              </div>
              <div className="text-start">
                <p>E-Mail</p>
                <p>charvai1997@gmail.com</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-4">
              <div className="contact-icon">
                <Image src={Whatsapp_Img} alt="Icon" />
              </div>
              <div className="text-start">
                <p>Whats App</p>
                <p>+91 9641867361</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="contact-icon">
                <Image src={Telegram_Img} alt="Icon" />
              </div>
              <div className="text-start">
                <p>Telegram</p>
                <p>+91 9641867361</p>
              </div>
            </div>
          </Col>
          <Col md={6} xl={7} className="">
            <ToastContainer />
            <div>
              <h2>Get In Touch</h2>

              <form id="myForm" onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      // value={formDetails.firstName}
                      placeholder="First Name"
                      // onChange={(e) =>
                      // 	onFormUpdate("firstName", e.target.value)
                      // }
                    />
                    <ValidationError
                      prefix="First Name"
                      field="firstName"
                      errors={state.errors}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      // value={formDetails.lasttName}
                      placeholder="Last Name"
                      // onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                    <ValidationError
                      prefix="Last Name"
                      field="lastName"
                      errors={state.errors}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      // value={formDetails.email}
                      placeholder="Email Address"
                      // onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      // value={formDetails.phone}
                      placeholder="Phone No."
                      // onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                    <ValidationError
                      prefix="Phone No"
                      field="phone"
                      errors={state.errors}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      // value={formDetails.message}
                      placeholder="Message"
                      // onChange={(e) =>
                      // 	onFormUpdate("message", e.target.value)
                      // }
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                      <span>{"Send"}</span>
                    </button>
                  </Col>
                  {/* {status.message && (
										<Col>
											<p
												className={
													status.success === false ? "danger" : "success"
												}>
												{status.message}
											</p>
										</Col>
									)} */}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Contact;

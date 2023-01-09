import React,{ useRef } from 'react'
import SendIcon from "../../public/send.svg"
import Image from 'next/image'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvvlor8', 'template_4zeywof', form.current, 'Tq_QVcze3KFpRrRya')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section className='contact section py-24 lg:py-40 px-5' id="contact">
      <div className="flex flex-col md:flex-row flex-[0_0_auto] lg:max-w-5xl lg:mx-auto items-start gap-10 w-full">
        <div className="flex flex-col mt-2 mb-8 gap-8 md:gap-32 w-full md:w-[50%]">
          <div className="flex flex-col items-start w-full gap-4">
            <h1 className="sectionTitle text-left mb-0">Get in Touch ✨</h1>
            <p className="text-xl text-titleColor">I’m always open to collaborate on a project or hear about an opportunity!</p>
            {/* <span className='sectionSubtitle'>Fill the form to make enquiries, or if you prefer, you can schedule a call with me.</span> */}

          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className='text-sm mb-0'>want to call me?</span>
              <a href="https://calendly.com/jayp09/30min" className='text-xl hover:underline hover:text-titleColorDark' target="_blank">Schedule a call with me</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className='text-sm mb-0'>Just want to email me?</span>
              <a href="mailto:panchalj272@gmail.com" className='text-xl hover:underline hover:text-titleColorDark' target="_blank">panchalj272@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="contactContent w-full md:w-[50%] p-4 md:p-8 rounded-2xl bg-containerColor">
          <form className="contactForm flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="name" className="contactFormInput"
              placeholder='Name'
            />

            <input 
              type="email" 
              name="email" className="contactFormInput"
              placeholder='Email'
            />

            <textarea 
              name="message"
              cols="30"
              rows="5" 
              className="contactFormInput resize-none"
              placeholder='Type your message'
              />
            <button className="button buttonFlex">
              Send Message
              <span className='buttonIcon'>
                <Image 
                  src={SendIcon}
                  alt="Send Icon"
                />
              </span>
            </button>
          </form>
        </div>

      </div>

      {/* <div className="contactContainer sectionContainer gridContainer">
        <div className="contactContent">
          <h3 className="contactTitle">Talk to me</h3>

          <div className="contactInfo">
            <div className='contactCard'>
              <i className='bx bx contactCardIcon'></i>

              <h3 className="contactCardTitle">Email</h3>
              <span className="contactCardData">panchalj272@gmail.com</span>

              <a 
                href="" 
                className="contactButton"
              >
                Write me {" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>

            <div className='contactCard'>
              <i className='bx bx contactCardIcon'></i>

              <h3 className="contactCardTitle">Whatsapp</h3>
              <span className="contactCardData">9892124258</span>

              <a 
                href="" 
                className="contactButton"
              >
                Write me {" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>

            <div className='contactCard'>
              <i className='bx bx contactCardIcon'></i>

              <h3 className="contactCardTitle">Email</h3>
              <span className="contactCardData">panchalj272@gmail.com</span>

              <a 
                href="" 
                className="contactButton"
              >
                Write me {" "}
                <i className="bx bx-right-arrow-alt contactButtonIcon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contactContent">
          <h3 className="contactTitle">Write me your project</h3>
        </div>
      </div> */}
    </section>
  )
}

export default Contact
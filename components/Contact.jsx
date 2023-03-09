import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkbxe8n",
        "template_ihrvx2e",
        this.form.current,
        "AGC5Umln9-uNz59rD"
      )

      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div
        id='contact'
        className='w-full h-screen  flex justify-center items-center p-4'
      >
        <form
          ref={this.form}
          onSubmit={this.sendEmail}
          className='flex flex-col max-w-[600px] mt-14 w-2/3'
        >
          <div className='pt-8 pb-2'>
            <p className='text-4xl mt-5  inline  text-[#3a81cd]'>CONTACT</p>
          </div>

          <input
            placeholder='Name'
            aria-label='name'
            className='border-2 bg-slate-200 border-gray-300 px-4 py-2 rounded-full'
            type='text'
            name='user_name'
          />

          <input
            placeholder='Email'
            aria-label='email'
            className='border-2 bg-slate-200 border-gray-300 px-4 py-2 rounded-full my-4'
            type='email'
            name='user_email'
          />

          <textarea
            placeholder='Message'
            aria-label='message'
            className='border-2 bg-slate-200 border-gray-300 rounded-lg px-4 py-2'
            name='message'
            rows='10'
          />
          <input
            aria-label='button'
            className='transition duration-300 ease-in-out w-full p-4 text-gray-100 mt-4 bg-[#3a81cd] hover:bg-cyan-600'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    );
  }
}

export default Contact;

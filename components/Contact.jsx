
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, this.form.current, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)


      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  render() {
    return (
      <div id='contact' className='w-full h-screen  flex justify-center items-center p-4'>
      <form ref={this.form} onSubmit={this.sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
                <p className='text-4xl font-bold inline  text-[#3a81cd]'>Contact</p>
                
           </div>
       
        <input placeholder='Name' className='border-2 border-gray-300 px-4 py-2 rounded-full' type="text" name="user_name" />
       
        <input placeholder='Email' className='border-2 border-gray-300 px-4 py-2 rounded-full my-4' type="email" name="user_email" />
       
        <textarea placeholder='Message' className='border-2 border-gray-300 rounded-lg px-4 py-2' name="message" rows="10" />
        <input className="transition duration-300 ease-in-out w-full p-4 text-gray-100 mt-4 bg-[#3a81cd] hover:bg-cyan-600" type="submit" value="Send" />
      </form>
      </div>
    );
  }
}

export default Contact;




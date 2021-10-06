import React, { useRef } from 'react';

import emailjs from 'emailjs-com';

import './Form.scss'

const Form = () => {
    const formRef = useRef();
    const messageRef = useRef();

    const sendEmail = (e) => {
        let { current: messageDom } = messageRef;
        if(!messageDom.value) messageDom.value = messageDom?.placeholder;
    
        // Do not commit with this line - holds important details
        emailjs.sendForm('gmail', 'template_f9ad2cz', e.target, 'user_rHCzwgdW41b4eGE02WzDn')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
    };

    const message = "Hi, we have a potential opportunity / with Company X / for a contract role / for a project. When are you free to dicuss this?";
    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <div className="input__wrap"> 
                <span>
                    <input type="text" placeholder="Name" name="name" />
                </span>
            </div>
            <div className="input__wrap"> 
                <span>
                    <input type="text"  placeholder="Company" name="company" />
                </span>
            </div>
            <div className="input__wrap"> 
                <span>
                    <input type="text" placeholder="Email Address" name="email"/>
                </span>
            </div>
            <div className="input__wrap"> 
                <span>
                    <input type="text" placeholder="Subject" name="subject"/>
                </span>
            </div>
            <div className="input__wrap"> 
                <span>
                    <label> 
                        Your Message
                        <textarea ref={messageRef} className="input__message" type="text"  placeholder={message} name="message" />
                    </label>
                </span>
            </div>
            <button type="submit" value="Send Messsage" >Submit</button>
        </form>
    )
}

export default Form;
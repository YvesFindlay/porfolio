import React, { useState, useEffect, useReducer, useRef } from 'react';

import Input from './Input';
import emailjs from 'emailjs-com';

import './Form.scss'

const emailReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.val, isValid: action.val.includes('@') }; // update our state
    }
    
      // Based on action type - we update our state:
    if (action.type === 'BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    
    return { value: '', isValid: false };
};

const reducer = (state, action) => {
    if (action.type === 'INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 1 };
    }
  
    if (action.type === 'BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 1 };
    }
  
    return { value: '', isValid: false };
};
  


const Form = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const formRef = useRef();
    const messageRef = useRef();
    const errorTextRef = useRef();

    const message = 'Hi, we have a potential opportunity / with Company X / for a contract role / for a project. When are you free to discuss this further?';

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: undefined,
    });
    
    const [nameState, dispatchName] = useReducer(reducer, {
        value: '',
        isValid: undefined,
    });

    const [subjectState, dispatchSubject] = useReducer(reducer, {
        value: "",
        isValid: undefined,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: nameIsValid } = nameState;
    const { isValid: subjectIsValid } = subjectState;

    const submitFormHandler = (evt) => {
        evt.preventDefault();

        if(formIsValid) {
            errorTextRef.current.innerText = "Message sent.";
            let { current: messageDom } = messageRef;
            if(!messageDom.value) messageDom.value = messageDom?.placeholder;
        
            // Do not commit with this line - holds important details
            // emailjs.sendForm('gmail', 'template_f9ad2cz', evt.target, 'user_rHCzwgdW41b4eGE02WzDn')
            //   .then((result) => {
            //       console.log(result.text);
            //   }, (error) => {
            //       console.log(error.text);
            // });
        } 

        console.log(emailState.isValid)

        if(!nameState.isValid){
            nameRef.current.invalidate();
        }

        if(!emailState.isValid){
            emailRef.current.invalidate();
        }

        if(!subjectState.isValid){
            subjectRef.current.invalidate();
        }

        if(!formIsValid){
           errorTextRef.current.innerText = "Please complete all mandatory fields.";
        }
    };


    const nameChangeHandler = (evt) => {
        dispatchName({ type: 'INPUT', val: evt.target.value });
        
        if(!nameState.isValid){
            nameRef.current.validate();
        }
    }

    const emailChangeHandler = (evt) => {
        dispatchEmail({ type: 'INPUT', val: evt.target.value });

        if(!emailState.isValid){
            emailRef.current.validate();
        }
    }

    const subjectChangeHandler = (evt) => {
        dispatchSubject({ type: 'INPUT', val: evt.target.value });

        if(!subjectIsValid){
            subjectRef.current.validate();
        } 
    };
    
    const validateNameHandler = (evt) => {
        dispatchName({ type: 'BLUR' });

        if(!nameIsValid && !evt.target.value){
            nameRef.current.invalidate();
        } 
    };

    const validateEmailHandler = (evt) => {
        dispatchEmail({ type: 'BLUR' });

        if(!emailState.isValid && !evt.target.value){
            emailRef.current.invalidate();
        }
    };

    const validateSubjectHandler = (evt) => {
        dispatchSubject({ type: 'BLUR' });

        if(!subjectState.isValid && !evt.target.value){
            subjectRef.current.invalidate();
        }
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
          setFormIsValid(emailIsValid && nameIsValid && subjectIsValid);
        }, 500);
    
        return () => {
          clearTimeout(debounce);
        };
      }, [emailIsValid, nameIsValid, subjectIsValid]);


    return (
        <form ref={formRef} onSubmit={submitFormHandler}>
             <p ref={errorTextRef} className="form__error-text"></p>
            <Input 
             onBlur={validateNameHandler} 
             onChange={nameChangeHandler}
             ref={nameRef}
             inputState={nameState}
             type="text" 
             placeholder="Name" 
             name="name"  
            />
            <Input 
             type="text" 
             placeholder="Company" 
             name="company"  
            />
            <Input 
             onBlur={validateEmailHandler} 
             onChange={emailChangeHandler}
             ref={emailRef}
             inputState={emailState}
             type="text" 
             placeholder="Email Address" 
             name="email"  
            />
            <Input 
             onBlur={validateSubjectHandler} 
             onChange={subjectChangeHandler} 
             ref={subjectRef}
             inputState={subjectState}
             type="text" 
             placeholder="Subject" 
             name="subject"  
            />
            <div className="input__wrap"> 
                <span>
                    <label> 
                        Your Message
                        <textarea ref={messageRef} className="input__message" type="text"  placeholder={message} name="message" />
                        <li className="line" />
                    </label>
                </span>
            </div> 
            <button type="submit" value="Send Messsage">Submit</button>
        </form>
    )
}

export default Form;
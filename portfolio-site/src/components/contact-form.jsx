
import React, { useState } from 'react';

function ContactForm() {

    const [errors, setErrors] = useState({});
    const [messageSent, setMessageSent] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const validationRules = {
		name: {
			rule: name => /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name) && name.length >= 3,
			message: "Please enter a valid name. It should contain at least 3 characters and only letters and spaces are allowed."
		},
		email: {
			rule: email => /\S+@\S+\.\S+/.test(email),
			message: "Please enter your email address in format: yourname@example.com"
		},
		message: {
			rule: (message) => message.length >= 3,
			message: "Your message should be 3 characters or more."
		}
	}

    const formValidate = () => {
        let isValid = true;
        let newErrors = {}

        for (const [field, {rule, message}] of Object.entries(validationRules)) {
			const val = formData[field]
			if (!rule(val)) {
				isValid = false
				newErrors[field] = message
			}
		}

        setErrors(newErrors);


        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if(!formValidate()){
            return false;
        }
        
        var frm = document.getElementById('contact-form');

        var xhttp;
        if (window.XMLHttpRequest) {
            // code for modern browsers
            xhttp = new XMLHttpRequest();
        } else {
            // code for old IE browsers
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var FD = new FormData(frm);

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;

                if(result === 'true'){
                    setMessageSent(true);

                    //clear form data 
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });

                    //set timer to hide success text
                    setTimeout(() => {
                        setMessageSent(false);
                    }, 5000);

                }else {
                    console.log("did not work: ", result);
                }
            }
        };
        
        xhttp.open("POST", "assets/email.php");
        xhttp.send(FD);
    };

    return (
        <form className='contact-form' id='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                {messageSent? <div className='success-text'>Thank you for contacting me! I'll be in touch shortly.</div>: null}
            </div>
            <div className='form-group'>
                {errors.name ? <div className="error-text" id="name-error">{errors.name}</div> : null}
                <input className='input-text' type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            </div>

            <div className='form-group'>
                {errors.email ? <div className="error-text" id="email-error">{errors.email}</div> : null}
                <input className='input-text' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className='form-group'>
                {errors.message ? <div className="error-text" id="message-error">{errors.message}</div> : null}
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
            </div>

            <button type="submit">Send</button>
      </form>
    )
}
  
export default ContactForm
  
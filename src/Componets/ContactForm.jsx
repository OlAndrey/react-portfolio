import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mgeqvzke");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="visuallyHidden">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
            />
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <label htmlFor="email" className="visuallyHidden">Email address</label>
            <input
                type="email"
                name="_replyto"
                id="email"
                placeholder="Email address"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" className="visuallyHidden">Message</label>
            <textarea
                name="message"
                placeholder="Message"
                required
                rows="7"
            ></textarea>
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className="button" type="submit" disabled={state.submitting}>
                Submit
            </button>
      </form>
    );
  }

export default ContactForm
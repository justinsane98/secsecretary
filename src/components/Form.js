import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import { motion} from 'framer-motion'
import data from '../data/data'

const duration = 0.5
const props = data.properties[1];
const item = {
  initial: {opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: duration*3
    },
  },
  exit: {
    opacity: 0,
  },
};

const formUrl = "https://justinshearer.us5.list-manage.com/subscribe/post?u=6632f26fcdf40d8319e2e9c9a&id=c1f3eb3ecc";

const MailchimpForm = ({ status, message, onValidated }) => {
    let email, note;
    const submit = () =>
      email &&
      note &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NOTE: note.value
      });
  
    return (
      <div>
        <div className="mb-2 text-white bg-pink-50">
            {status === "sending" && <p className="px-4 py-2">sending...</p>}
            {status === "error" && (
                <div
                className="px-4 py-2 bg-pink"
                dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                className="px-4 py-2"
                >Thanks for the note! I'll reach out as soon as I'm done wrangling all of these cats. </div>
            )}
        </div>

         <motion.div key={"textarea"} variants={item}>
            <textarea ref={node => (note = node)} className="font-serif text-xs 425px:text-base 768px:text-lg p-2 w-full h-32 shadow-default border-pink-dark border-2 focus:outline-none focus:border-pink bg-white-75 focus:bg-white"
                    placeholder="How can I help you?"
                    ></textarea>
        </motion.div>
        <motion.div key={"email"} variants={item}>
            <input ref={node => (email = node)} className="font-serif text-xs 425px:text-base 768px:text-lg  p-2 w-full shadow-default border-pink-dark border-2 focus:outline-none focus:border-pink bg-white-75 focus:bg-white" placeholder="What's your Email?"></input>
        </motion.div>
        <motion.div key={"send"} variants={item}>
            <button onClick={submit} className="font-display text-white text-xs 425px:text-base 768px:text-lg font-thin uppercase bg-pink py-2 px-4 mt-2 inline-block shadow-default border-pink border-2 text-white focus:bg-pink-dark active:bg-pink-light hover:bg-pink-light hover:text-white hover:cursor-pointer">{props.cta}</button>
        </motion.div>

      </div>
    );
  };
  
  const Form = () => {

      return (

          <MailchimpSubscribe
            url={formUrl}
            render={({ subscribe, status, message }) => (
              <MailchimpForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />

      );
  }
  

  export default Form;
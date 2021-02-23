import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import styles from './Contact.module.css'

export default function Contact() {

  const Name = useRef()
  const Email = useRef()
  const Message = useRef()
  const Subject = useRef()

  const resetForm = () => {
    document.getElementById("form").reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(Name.current.value)
    const emailInfo = {
      name: Name.current.value,
      email: Email.current.value,
      message: Message.current.value,
      subject: Subject.current.value
    }

    emailjs.send("service_stj7r1q","template_zu1sbtj", emailInfo, "user_MM9BdVr54ARVm3MCW0dgZ")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      resetForm()
    }, function(error) {
        console.log('FAILED...', error);
    });
  }

  return (
    <section id='section-contact' className={styles.contact}>
      <div>
        <h2><span>05.</span> Contact</h2>    
        <h3>Let's Talk</h3>
        <p>New projects, freelance inquiry or even a beer.</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit} id='form'>
        <div className={styles.formControl}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input id="name" className={styles.inputControl} type="text" placeholder="Enter your name" ref={Name} required />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input id="email" className={styles.inputControl} type="email" placeholder="Enter your email" ref={Email} required />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input id="subject" className={styles.inputControl}  type="text" placeholder="Enter your subject" ref={Subject} required />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" className={styles.inputControl} required  ref={Message} placeholder="Enter your message"/>
        </div>
        <button type="submit" className={styles.btnForm}>Send a message</button>
      </form>
    </section>
  )
}

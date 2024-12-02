import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'



const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "43a0a519-a9e8-4647-93a7-eb235bac328f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="col">
            <h3>send us a message <img src={msg_icon} alt="icon" /></h3>
            <p>Please fill in the fields below with your
             information and message, and we'll get back to you as 
             soon as possible. Your feedback is valuable to us, and
              we're committed to providing the best possible
               experience for our visitors.</p>
               <ul>
                <li><img src={mail_icon} alt="icon" />contact@yourwebsite.com</li>
                <li><img src={phone_icon} alt="icon" />+1 (555) 123-4567</li>
                <li><img src={location_icon} alt="icon" />1234 Elm Street, Springfield, Anytown,<br /> USA, 12345</li>
               </ul>

        </div>
        <div className="col">
          <form onSubmit={onSubmit} >
            <label >Enter Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name'
            required />
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Phone Number
            'required />
            <label>Write your Message</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message
            ' required></textarea>
            <button type='submit' className='btn dark-btn'>submit now <img src={arrow} alt="icon" /></button>

          </form>
          <span>{result}</span>
            
        </div>
      
    </div>
  )
}

export default Contact

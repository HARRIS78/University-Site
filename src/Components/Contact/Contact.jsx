import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5ee11646-e87d-45a9-bca2-927b3b2c938b");
  
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
        <div className="contact-col">
            <h3>Send us a maessage <img src={msg_icon} alt="" /></h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum delectus ex voluptas laboriosam dolorum nemo eligendi neque nesciunt. Unde, asperiores dolor voluptates quod vel eius sint rerum natus ad repellendus.
            </p>
            <ul>
            <li> <img src={mail_icon} alt="" />contact@harishrawat</li>
            <li> <img src={phone_icon} alt="" />+91 1234567890</li>
            <li> <img src={location_icon} alt="" />noida 62a near xyz building <br /> uttar pradesh 201309</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>

                <label>Write your mssgs here</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' >Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact

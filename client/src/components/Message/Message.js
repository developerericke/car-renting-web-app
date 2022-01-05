import React,{useRef} from "react";
import "./Message.css";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com'

const Message = () => {
  const textInput = useRef();
  const onTextFocus =() =>{ 
      textInput.current.focus();
  }
  const sentEmail=(e) =>{
      e.preventDefault();

      emailjs.sendForm('service_d8cw9wf',
      'template_0zo1eom',
      e.target,
      'user_G952580ZzYeciyIlcwCDC').then(res=>{
      alert('Message Sent Successfully');
      }).catch(err=> {console.log(err)
      alert("Something went wrong");
      });
  }
  return(
<div class="contactpic" id="contacts">
        <div className='anime' data-aos="fade-right" data-aos-delay="50">
        <img
        src="https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="car"
      />
            </div>
        <div className="apps">
        <form className="form" onSubmit={sentEmail}>
            <h1>Direct Message 📲</h1>
            <label >Name</label>
            <input type="text" name="name" placeholder="Name" required ref={textInput}></input>
            <label>Email</label>
            <input type="email"  name="user_email" placeholder="Email" required ref={textInput}></input>
            <label>Message</label>
            <textarea  name="message" row="4" placeholder="Input your Message" required ref={textInput}></textarea>
            <button onClick={onTextFocus} type="submit" value="Send" >Send Message</button>
        </form>
        </div>
        </div>
  )};

export default Message;

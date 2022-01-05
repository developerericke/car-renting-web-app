import React,{useState} from 'react'
import './Customer.css'
import "aos/dist/aos.css";

const helpline= [
    {   id : 1,
        img : 'https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA=',
        name : 'Grace White',
        contact : '0123437373',
        mail : 'ben@gmail.com'
    },
    {   id : 2,
        img : 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name : 'Bukayo Saka',
        contact : '714655688',
        mail : 'Saka@gmail.com'
    },
    {   id : 3,
        img : 'https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBsYWR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        name : 'Valentine Wanjiku',
        contact : '714565644',
        mail : 'Vale@gmail.com'
    },
];
const Customer = () => {
    const [cards,setCards] = useState(helpline);
    return (
        <div className="Customerservice">
            <h3>For enquiries, you can contact</h3>
            <h1>CUSTOMER SERVICE</h1>
            <div className="cus" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2500">
           {cards.map((project)=>{
               return(
                <Names key={helpline.id} {...project}/>
               );
           })}
        </div>
        <div class="custom-shape-divider-bottom-1641418353">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    )
}

const Names =(props)=>{
    const {id,img,name,contact,mail} = props;
    return(
             <div className="cuscards" key={id}>
                <img src={img} alt="image" width="30%" height="20%" />
                <h1>{name}</h1>
                <h2>{contact}</h2>
                <p>{mail}</p>
            </div>
    );
    }

export default Customer

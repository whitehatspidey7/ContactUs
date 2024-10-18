import React from 'react'
import Button from '../Button/Button'
import './Form.css'
import {useState} from 'react'
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import contact_img from '../../assets/contact_img.svg'
import './Form.css'

const Form = () => {
  
  

  const [ Name,setName] = useState("Sonu");
  const [email,setEmail] = useState("SPIDER-MAN@gmail.com");
  const [Comment,setComment] = useState("It's hero time !");
  
  const onviacallfunc =()=>{
    console.log("I am from Via Call");
  };

  const oncallusfunc = ()=>
  {
    console.log("I am from Call Us");
  };

  const onsubmit = (event) =>{
  
   event.preventDefault();
    console.log(event);
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setComment(event.target[2].value);
  };

  return (


    <div className='Container'>
    <div className='form'>
      
      <div className='Buttons'>
      <Button name='VIEW SUPPORT CHAT' icon={<MdMessage/>} func={onviacallfunc}/>
      <Button name='CALL US' icon={<IoCallSharp />} func={oncallusfunc}/>
      </div>

      <form onSubmit={onsubmit} className='Forms'>
        
        <div className='field'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name'/>
        </div>

        <div className='field'>
          <label htmlFor='name'>Email</label>
          <input type='text' name='email'/>
        </div>

        <div className='field'>
          <label htmlFor='name' className='comment'>Comment</label>
          <input type='text' name='comment'/>
        </div>

        <button type='submit' className='s'
        >Submit</button>
      </form>

    </div>

    <img src={contact_img} />

    <div className='output'>
     {"name : "+Name+ " email: " + email + " Comment: "+ Comment}
    </div>
    </div>
    
  )
}

export default Form;

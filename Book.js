import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { reserveTable } from '../store';
import './book.css';
const BookingPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState(1);


  // e.preventDefault();
    const handleSubmit = (e) => {
      const data1 =
      {
        name:name,
        email:email,
        date:date,
        time:time,
        guest:guest
      };
      axios.post('http://localhost:8080/post',data1);
      alert("Booking Complete")
    }
  

  return (
    <div className='he1'>
    <h2 style={{fontSize:"30px",color:"white", textAlign:"center"}}>Table Reservation</h2>
    <div className='bod9'>
    <form className="reservation-form">
      <div className='clr'>
      <div className="form-group">
      <label htmlFor="name">Name :-</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder='Full Name'
          onChange={(e) => setName(e.target.value)}
          required
        />
        
      </div>
      <div className="form-group">
        <label htmlFor="email">Email :- </label>
        <input
          type="email"
          id="email"
          placeholder='Email ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="date">Date :-<br/></label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="time">Time :-<br/></label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="guests"><br/>Guests:-</label>
        <input
          type="number"
          id="guests"
          value={guest}
          onChange={(e) => setGuest(parseInt(e.target.value))}
          min="1"
          max="10"
          required
        />
      </div>
    
      <div className="form-group">
        <button type="submit"  onClick={handleSubmit}>Reserve</button>
      </div>
      </div>
    </form>
  <br/><br/><br/><br/><br/><br/><br/>
    </div>
    </div>
  );
  };

export default BookingPage;

  



// <div className="form-group">
//   <label htmlFor="name">Search:-</label>
//   <input
//     type="search"
//     id="search"
//     value={search}
//     onChange={(e) => setSearch(e.target.value)}
//   />
  
// </div>
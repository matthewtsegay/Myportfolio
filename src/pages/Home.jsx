import React from "react";
import "../styles/home.css";


const Home = () => {
  return (
    <div className="container text-center">
      <h1>Hi, I'm Matyos Tsegay</h1>
      <h2>A Software Engineer & React Developer</h2>
      <p>Building modern and scalable web & mobile applications with React.jS, React Native AND DJANGO.</p>
      
      <div>
        <img src="/skills/python-svgrepo-com.svg" alt="python" style={{ width: '150px', height: '150px' }}/>
        <img src="/skills/javascript.svg" alt="javascript" style={{ width: '150px', height: '150px' }}/>
      </div>

      <h3>About Me</h3>
      <p>
        Passionate Software Engineer specializing in React.js and React Native.
        I build high-performance applications that offer great user experiences.
      </p>
      
       <div className="profile-container">
         <div className="profile-image-container">
           <img 
              src="/skills/0T5A4529.JPG"
              alt="Profile"
              className="profile-image ml-200px"
              style={{backgroundColor:'white',display:'center'}}
          />
        </div>
        <div className="profile-text">
           <h3>matyos tsegay</h3>
           <p>Web Developer</p>
        </div>
    </div>
      
      <h3>Skills</h3>
      <ul>
        <li><strong>Frontend:</strong> javascript,html,React.js, Redux, Tailwind CSS</li>
        <li><strong>Mobile:</strong> React Native, Expo</li>
        <li><strong>Backend:</strong> Django, REST APIs</li>
        <li><strong>Tools:</strong> Git, VS Code</li>
      </ul>

      <h3>Featured Projects</h3>
      <ul>
        <li>MatiApp – Customer Registration & Authentication (React Native)</li>
        <li>Online Book Rental System – Web-based Book Renting (React + Django)</li>
        <li>Restroom Booking System – Smart Restroom Reservation (React + Django)</li>
      </ul>
      <h3>Contact Me</h3>
      <p> Email: matyostsegay@gmail.com</p>
      <p> LinkedIn: linkedin.com/Matyos tsegay</p>
      <p> github: linkedin.com/Matyos tsegay</p>
      <button className="btn-primary">Hire Me</button>
    </div>
  );
};

export default Home;


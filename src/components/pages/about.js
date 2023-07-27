import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column"
      style={{ background: "url(" + profilePicture + ") no-repeat", backgroundSize: "cover", backgroundPosition: "center"
      }}>
      </div>
      <div className="right-column">
        My Name is Alex Berry and I am learning to Code. 
        This is my first website made with React with the help of the Code to Success Utah Summer Program. 
        This is my second Website as well as my second summer in the Code to Success Program.
        I am interested in Coding/Programming as well as working with the components of a computer. 
        I have shown interest in computers for a couple years. 
        I finished my Freshman year of High School and I am moving into my Softmore year where I will take more classes to learn about coding and computer components. 
        I am very excited to see how I can improve over time and what projects I will make throughout my life. 
        If you wish to see my HTML/CSS website made in my first year of the Code to Success Program, visit <a href="insert.neocities.org">insert.neocities.org</a>
      </div>
    </div>
  );
}
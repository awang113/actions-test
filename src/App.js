import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import SDKButton from './Components/SDKButton';
import SectionHeader from './Components/SectionHeader';
import APIButton from './Components/APIButton';
import MoreButton from './Components/MoreButton';
import ExpertButton from './Components/ExpertButton';
import CourseButton from './Components/CourseButton';
import thumbnail1 from './thumbnail1.jpg';
import thumbnail2 from './thumbnail2.jpg';
import thumbnail3 from './thumbnail3.jpeg';
import dogs from './dogs.jpeg';
import dwayne from './dwayne.jpg';
import selena from './selena.jpeg';

function App() {
  const whatsnew = "https://www2.microstrategy.com/producthelp/Current/Readme/en-us/content/whats_new.htm";
  return (
    <div className="whole">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <div className="headers">
        <Navbar />
        <div className="welcome">
          <h1 id="headerwelcome">Welcome to MicroStrategy Developer</h1>
          <button onClick={function () { window.location = whatsnew }} id="whatsnew">
            What's New in 2021
          </button>
        </div>
      </div>
      <div className="app">
        <SectionHeader name="SDK Tools" desc="We offer a rich array of SDKs to help you customize, extend, integrate, and embed the power and functionality of MicroStrategy analytics into your Web and Mobile applications." />
        <div className="buttons">
          <SDKButton name="REST API" link="https://github.microstrategy.com/pages/mshaffer/mstr-docs/" desc="A RESTful application designed to help developers build data-driven client applications quickly and easily." color="blue"/>
          <SDKButton name="Embedding SDK" link="https://lw.microstrategy.com/msdz/MSDL/GARelease_Current/docs/projects/EmbeddingSDK/default.htm" desc="Quickly integrate a MicroStrategy dossier into a web application with functionality such as controlling navigation, retrieving, and applying files." color="orange"/>
          <SDKButton name="Python SDK" link="https://www2.microstrategy.com/producthelp/Current/mstrio-py/" desc="not much text" color="green"/>
          <SDKButton name="Mobile SDK" color="purple"/>
          <SDKButton name="Visualization SDK" color="pink"/>
          <SDKButton name="Library SDK" color="lightblue"/>
          <SDKButton name="Data Connector SDK" color="red"/>
          <SDKButton name="Library Mobile SDK" color="yellow"/>
          <SDKButton name="Web SDK" color="brown"/>
        </div>
        <SectionHeader name="API References" desc="Test out our most popular workflows!" />
        <div className="buttons">
          <APIButton name="REST API" link="https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/" color="blue"/>
          <APIButton name="Library SDK" color="lightblue"/>
          <APIButton name="Visualization SDK" color="pink"/>
          <APIButton name="Data Connector SDK" color="red"/>
          <APIButton name="Mobile SDK" color="purple"/>
          <APIButton name="Identity SDK" color="gold"/>
        </div>
        <SectionHeader name="Courses" desc="Learn more about how to use our SDK products through our community videos!" />
        <div className="buttons">
          <CourseButton name="Pfizer Success Spotlight" desc="January 17, 2021" link="https://www.microstrategy.com/en/resources/events/world-2021/on-demand/pfizer-success-spotlight" src={thumbnail1}/>
          <CourseButton name="Embedding SDK" desc="March 2, 2015" link="https://www.microstrategy.com/en/business-intelligence/video/overview-of-the-microstrategy-embedded-analytics-platform" src={thumbnail2}/>
          <CourseButton name="Embedding Dossiers onto Web Applications" desc="April 6, 2020" link="https://www.microstrategy.com/en/resources/events/world-2021/on-demand/embedding-dossiers-onto-web-applications" src={thumbnail3}/>
        </div>
        <MoreButton name="See more courses" link=""/>
        <SectionHeader name="Talk to an expert" desc="Browse our directory of developer experts recognized by MicroStrategy for their skills." />
        <div className="buttons">
          <ExpertButton name="Nahia Colunga" desc="MicroStrategy Consultant" src={dogs} link=""/>
          <ExpertButton name="Christopher Longoria" desc="MicroStrategy Consultant" src={dwayne} link=""/>
          <ExpertButton name="Herse Hedman" desc="MicroStrategy Consultant" src={selena} link=""/>
        </div>
        <MoreButton name="See more experts"/>
      </div>
    </div>
  );
}

export default App;

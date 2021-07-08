import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import SDKButton from './Components/SDKButton';
import SectionHeader from './Components/SectionHeader';
import APIButton from './Components/APIButton';
import MoreButton from './Components/MoreButton';
import ExpertButton from './Components/ExpertButton';

function App() {
  const whatsnew = "https://www2.microstrategy.com/producthelp/Current/Readme/en-us/content/whats_new.htm";
  return (
    <div className="whole">
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
          <SDKButton name="REST API" link="https://github.microstrategy.com/pages/mshaffer/mstr-docs/" desc="A RESTful application designed to help developers build data-driven client applications quickly and easily." color="orange"/>
          <SDKButton name="Embedding SDK" link="https://lw.microstrategy.com/msdz/MSDL/GARelease_Current/docs/projects/EmbeddingSDK/default.htm" desc="Quickly integrate a MicroStrategy dossier into a web application with functionality such as controlling navigation, retrieving, and applying files." color="blue"/>
          <SDKButton name="Python SDK" link="https://www2.microstrategy.com/producthelp/Current/mstrio-py/" desc="not much text" color="#000000"/>
          <SDKButton name="Mobile SDK" />
          <SDKButton name="Visualization SDK" />
          <SDKButton name="Library SDK" />
          <SDKButton name="Data Connector SDK" />
          <SDKButton name="Library Mobile SDK" />
          <SDKButton name="Web SDK" />
        </div>
        <SectionHeader name="API References" desc="Test out our most popular workflows!" />
        <div className="buttons">
          <APIButton name="REST API" link="https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#/" />
          <APIButton name="Library SDK" />
          <APIButton name="Visualization SDK" />
          <APIButton name="Data Connector SDK" />
          <APIButton name="Mobile SDK" />
          <APIButton name="Identity SDK" />
        </div>
        <SectionHeader name="Courses" desc="Learn more about how to use our SDK products through our community videos!" />
        <MoreButton name="See more courses" />
        <SectionHeader name="Talk to an expert" desc="Browse our directory of developer experts recognized by MicroStrategy for their skills." />
        <div className="buttons">
          <ExpertButton name="Nahia Colunga" desc="MicroStrategy Consultant" src="dogs_1280p_0.jpeg" link=""/>
          <ExpertButton name="Christopher Longoria" desc="MicroStrategy Consultant" link=""/>
          <ExpertButton name="Herse Hedman" desc="MicroStrategy Consultant" link=""/>
        </div>
        <MoreButton name="See more experts"/>
      </div>
    </div>
  );
}

export default App;

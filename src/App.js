import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import SDKButton from './Components/SDKButton';
import SectionHeader from './Components/SectionHeader';
import APIButton from './Components/APIButton';

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
          <SDKButton name="REST API" link="https://www2.microstrategy.com/producthelp/Current/RESTSDK/Content/topics/REST_API/REST_API.htm" desc="A RESTful application designed to help developers build data-driven client applications quickly and easily." />
          <SDKButton name="Embedding SDK" />
          <SDKButton name="Python SDK" />
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
        <SectionHeader name="Talk to an expert" desc="Browse our directory of developer experts recognized by MicroStrategy for their skills." />
      </div>
    </div>
  );
}

export default App;

//import profile from "./profile";
import React from 'react';
import ReactDOM from 'react-dom';
import Adress from './profile/Adress';
import ProfileName from './profile/ProfileName';
import ProfilePhoto from './profile/ProfilPhoto';
import  './App.css'
const Main = () => {
    return <div>
    <ProfileName/>
    <ProfilePhoto/>
    <Adress/>
    </div>
}
export default Main;
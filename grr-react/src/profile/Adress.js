import React from "react";

const Country = () => <h1>Tunisia</h1>
const City = () =><h3>Sousse</h3>
const Street = () =><h3>Sahloul</h3>

const Adress = () => {
    return<div>
        <Country/>
        <City/>
        <Street/>
    </div>
}
export default Adress;
"use client";

import { useState } from "react";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ChildStateComponent from "./ChildStateComponent";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";
import ContextExamples from "./context/ContextExamples";
import ZustandExamples from "./zustand/ZustandExamples";



const alertMyName = () => alert("My name is Daoud Sherkawi");
const alertSample = () => alert("Sample from parent");

export default function Lab4(){
    const [counter, setCounter] = useState(0);
    return (
        <div id="wd-lab4">
            <h1>Welcome to Lab 4</h1>
            <ClickEvent />
            <PassingDataOnEvent />
            <CounterBroken />
            <PassingFunctions message="Hello from parent!" theFunction={(message) => alert(message)} nameFunction={alertMyName} theOtherFunction={alertSample} />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ProfileForm />
            <ParentStateComponent />
            <ChildStateComponent counter={counter} setCounter={setCounter} />
            <PropDrilling />
            <UrlEncoding />
            <ContextExamples />
            <ZustandExamples />
        </div>

    );
}
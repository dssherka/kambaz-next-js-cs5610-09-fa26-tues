"use client";

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



const alertMyName = () => alert("My name is Daoud Sherkawi");
const alertSample = () => alert("Sample from parent");

export default function Lab4(){
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
            <ChildStateComponent  />
        </div>

    );
}
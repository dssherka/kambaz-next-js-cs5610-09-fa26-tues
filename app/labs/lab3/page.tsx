import BooleanVariables from "./BooleanVariables";
import VariablesAndConstants from "./VariablesandConstants";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import NullUndefined from "./NullUndefined";

export default function Lab3(){
    return (
        <div id="wd-lab3">
            <h1>Welcome to Lab 3</h1>
            <h2> Learning JavaScript </h2>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <NullUndefined />
        </div>
    );
}
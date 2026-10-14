export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let numberVariable2 = 456;
  let stringVariable = "Hello World!";
  let stringVariable2 = "Web Development is fun!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let isString2 = typeof stringVariable2;
  let isNumber2 = typeof numberVariable2;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      numberVariable2 = {numberVariable2}
      <br/>
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      stringVariable2 = {stringVariable2}
      <br/>
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br/>
      isString2 = {isString2}
      <br />
      isNumber2 = {isNumber2}
      <br />
      sampleCount = {sampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
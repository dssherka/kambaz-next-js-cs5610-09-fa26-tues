export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const divide = (a: number, b: number) => a / b;
  const square = (a: number) => a * a;
  const fourTimesFive = multiply(4, 5);
  const square9 = square(9);
  console.log(square9);
  console.log(fourTimesFive);
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive}
      <br />
      square9 = {square9}
      <br/>
      multiply(4, 5) = {multiply(4, 5)}
      <br />
      divide(20, 4) = {divide(20, 4)}
      <hr />
    </div>
  );
}
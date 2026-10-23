import BoxDemo from "./BoxDemo";
import BoxModelDemo from "./BoxModelDemo";
import NestingOrderDemo from "./NestingOrderDemo";
import CardDemo from "./CardDemo";

export default function Children() {
  return (
    <div id="wd-children">
      <h2>Composing Styles with Children</h2>
      <BoxDemo />
      <BoxModelDemo />
      <NestingOrderDemo />
      <CardDemo />
    </div>
  );
}

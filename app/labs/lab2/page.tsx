import React from "react";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";


export default function Lab2() {
  return (
    <>
      <div id="wd-lab2">
          <h2>Lab 2 - Cascading Style Sheets</h2>
          <h3>Styling with the STYLE attribute</h3>
          <p>
              Style attribute allows configuring look and feel right on the
              element. Although it&apos;s very convenient it is considered bad
              practice and you should avoid using the style attribute
          </p>
          <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
              This paragraph is styled with the style attribute, using a purple
              background and white text.
          </p>
          <br />
          <p style={{ backgroundColor: "green", color: "yellow" }}>
              I am currently doing this part of the assignment in Snell at October 5th 3:17PM.
          </p>
      </div>
      <div id="wd-css-id-selectors">
              <h3>ID selectors</h3>
              <p id="wd-id-selector-1">
                  Instead of changing the look and feel of all the
                  elements of the same name, e.g., P, we can refer to a
                  specific element by its ID
              </p>
              <p id="wd-id-selector-2">
                  Here&apos;s another paragraph using a different ID and a
                  different look and feel
              </p>
              <p id="wd-ai-id-selector">
                  This paragraph has its own ID and its own look and feel
              </p>
              <p id="wd-id-selector-3">Not sure whether I should cook or order out tonight.
                Must think more about this.
              </p>
          </div>
        <div id="wd-css-class-selectors">
  <h3>Class selectors</h3>
  <p className="wd-class-selector">
    Instead of using IDs to refer to elements, you can use an
    element&apos;s CLASS attribute
  </p>
  <h4 className="wd-class-selector">
    This heading has same style as paragraph above
  </h4>
  <p className="wd-ai-class-selector">
    This paragraph uses its own class for a different look and feel
  </p>
  <h4 className="wd-ai-class-selector">
    This heading shares the class of the paragraph above
  </h4>
  <p className="wd-your-class">NH is great for hiking when the foliage is colorful.</p>
  <h4 className="wd-your-class">Hiking is great!</h4>
</div>


<div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph&apos;s red background is referenced as
        <br />
        .selector-2 .selector3
        <br />
        meaning the descendant of some ancestor.
        <br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
          <br />
          <span className="wd-selector-5">
            This is still a bit confusing but I
            can figure it out.
          </span>
        </span>
        <br />
        <span className="wd-ai-selector-5">
          This span is a descendant of selector-1 and selector-3
        </span>
        <br />
        You can combine these relationships to create specific
        styles depending on the document structure
      </p>
    </div>
  </div>
</div>

<div id="wd-ai-specificity">
  <h3>Specificity conflict</h3>
  <blockquote id="wd-ai-conflict" className="wd-ai-conflict">
    Tag, class, and id all set background-color here. The id should win.
  </blockquote>
</div>

<div id="wd-ai-cascade-demo">
  <h3>Cascade demo</h3>
  <p id="wd-ai-cascade" className="wd-ai-cascade">
    This paragraph is matched by a tag rule, a class rule, and an id rule.
    The id rule should win.
  </p>
</div>
<ForegroundColors />
<BackgroundColors />
<Borders />

    </>

  );
}
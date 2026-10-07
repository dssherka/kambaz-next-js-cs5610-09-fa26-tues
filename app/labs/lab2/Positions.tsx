export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Nudged
          </div>
        </div>
        <div className="wd-dimension-rectangle wd-bg-color-green wd-fg-color-white wd-pos-relative-nudge-up-left">
          Rectangle, this geometrically is a square but a square can never be a rectangle.
        </div>
      </div>
    </div>
  );
}s
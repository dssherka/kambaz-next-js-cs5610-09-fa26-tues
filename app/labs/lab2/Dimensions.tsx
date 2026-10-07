export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-dimension-wide-short">
          This box is set to exactly 120px wide and 60px tall no matter how long this sentence is.
        </div>
      </div>
      <div className="wd-dimension-rectangle wd-bg-color-green wd-fg-color-white">Rectangle, this geometrically is a square but a square can
        never be a rectangle.
      </div>
    </div>
  );
}
export default function HeadingTags() {
  return (
    <>
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.
    </div>
    <div id="Daoud Sherkawi">
        <h4>Daoud Sherkawi</h4>
        Hi, my name is Daoud Sherkawi. I am an align masters CS student at Northeastern University.
        I am in my last year and a hobby of mine is that I train <span id="wd-daoud-inline-span">MMA</span>.
    </div>
    <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        This section covers a second pass through heading tags to compare structure.
        <h5>What I built</h5>
        A small outline showing how h4, h5, and h6 nest under each other.
        <h6>Next step</h6>
        Review the rendered sizes in the browser and adjust spacing as needed.
    </div>
    </>


  );
}
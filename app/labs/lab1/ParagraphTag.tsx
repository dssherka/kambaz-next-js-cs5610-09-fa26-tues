export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>

      <p id="wd-p-your-1">
        I am from Indiana as well a first generation Palestininan-American. I moved to Boston fall of 25 and have fallen in love with the city's beauty and architecture.
        The public tranist system was a culture shock as I am used to cars. It is very useful as driving in the city is a nightmare.
      </p>

      <p id="wd-p-your-2">
        What I hope to learn from this course is to understand how to build web applications
        in order to better my ability to create and build meaningful projects that could potentially assist people, specifically in the healthcare field.

      </p>

      <p id="wd-ai-p">
        Wrapping text in a paragraph tag creates vertical spacing because
        browsers apply a default top and bottom margin to the p element. That
        margin is what pushes separate paragraphs apart on the page, instead
        of letting the browser collapse them into one continuous block of text.
      </p>

    </div>
  );
}
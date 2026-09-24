function HighlightedParagraph({
  text = "This paragraph is highlighted using component props.",
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <p
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.5rem 0.75rem",
      }}
    >
      {text}
    </p>
  );
}

export default function HighlightedParagraphLab() {
  return (
    <div id="wd-highlighted-paragraph">
      <h3>Highlighted Paragraph</h3>
      <HighlightedParagraph text="Default highlight: light yellow background, orange border." />
      <HighlightedParagraph
        text="Custom props: light blue background, navy border, thicker width, more rounding."
        backgroundColor="lightblue"
        borderColor="navy"
        borderWidth={4}
        borderRadius={16}
      />
      <HighlightedParagraph
        text="Another variation: misty rose background, crimson border, square corners."
        backgroundColor="#ffe4e1"
        borderColor="crimson"
        borderWidth="3px"
        borderRadius="0px"
      />

      <HighlightedParagraph
        text="I am from Fishers, Indiana. I am second year masters student at Northeastern
        and one of my hobbies is that I train and compete in Mixed Martial Arts."
        backgroundColor="#4fa15f"
        borderColor="#8f4fa1"
        borderWidth="4px"
        borderRadius="12px"
      />

      <HighlightedParagraph
        text="Props let the same component render with different colors."
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      />
    </div>
  );
}
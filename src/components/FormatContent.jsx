import React from "react";

const FormatContent = ({ content }) => {
  if (typeof content === "string") {
    return (
      <p
        className="mb-4 text-justify"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  if (typeof content === "object" && content !== null) {
    switch (content.type) {
      case "ul":
        return (
          <ul className="mb-4 text-justify">
            {Array.isArray(content.items) &&
              content.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ul>
        );
      case "ol":
        return (
          <ol className="mb-4 text-justify">
            {Array.isArray(content.items) &&
              content.items.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
          </ol>
        );
      case "blockquote":
        return (
          <blockquote
            className="mb-4 text-justify blockquote"
            dangerouslySetInnerHTML={{ __html: content.text }}
          />
        );
      default:
        return null;
    }
  }

  return null;
};

export default FormatContent;

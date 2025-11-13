import React from "react";

const VerticalList = ({
  count = 5, // Default: 5 items
  containerStyles = {},
  textStyles = {},
  headerStyles = {},
  headerText = "List Header",
}) => {
  return (
    <div className="vlist"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
        fontFamily: "Arial, sans-serif",
        maxHeight:0,
        ...containerStyles, 
      }}
    >
      {/* Header */}
      <h3
        style={{
          margin: "0 0 16px 0",
          paddingBottom: "8px",
          borderBottom: "1px solid #eee",
          ...headerStyles, // Spread custom header styles
        }}
      >
        {headerText}
      </h3>

      {/* List */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {Array(count)
          .fill()
          .map((_, i) => (
            <li
              key={i}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #f0f0f0",
                ...textStyles, // Spread custom text styles
              }}
            >
              Item {i + 1}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default VerticalList;
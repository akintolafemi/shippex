export const colorPrimary = "#2F50C1";
export const colorWhite = "#FFFFFF";
export const colorDisabledBtn = "#EAE7F2"
export const colorDisabledTitle = "#A7A3B3"

function convertToRgba(color: string, alpha = 1) {
  if (!color) return "#000";
  // Regular expressions to check for rgb(a) strings
  const rgbaPattern =
    /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(\d*(?:\.\d+)?))?\)$/;

  // Check if the input is already an rgb(a) string
  const rgbaMatch = color?.match(rgbaPattern);

  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1], 10);
    const g = parseInt(rgbaMatch[2], 10);
    const b = parseInt(rgbaMatch[3], 10);
    // Use the provided alpha or default to 1 if not present
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // If not rgb(a), assume it's a hex color
  // Remove the leading '#' if present
  color = color?.replace(/^#/, "");

  // Check for shorthand hex code and expand it
  if (color.length === 3) {
    color = color
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Parse the hex values to get red, green, and blue components
  const bigint = parseInt(color, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export default {
  colorPrimary,
  colorWhite,
  colorDisabledBtn,
  colorDisabledTitle,
  light: {
    text: "#000",
    background: "#fff",
    screenGb: "#fff",
    inputBG: "#F4F2F8",
    757281: "#757281"
  },
  dark: {
    text: "#fff",
    background: "#000",
    screenGb: "#000",
    inputBG: "#F4F2F8",
    757281: "#757281"
  },
  status: {
    rejected: "#D12030",
    canceled: "#58536E",
    received: "#2F50C1",
    delivered: "#208D28",
    "on hold": "#DB7E21",
    putaway: "#DB7E21",
    lost: "#D12030"
  },convertToRgba
};

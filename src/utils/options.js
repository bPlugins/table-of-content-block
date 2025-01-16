import { __ } from "@wordpress/i18n";
export const themes = [
  { label: "Default", value: "default" },
  { label: "Slide", value: "slide" },
  { label: "Timeline", value: "timeline" },
  { label: "List", value: "list" },
];

export const htmlTags = [
  { label: "H1", value: "h1" },
  { label: "H2", value: "h2" },
  { label: "H3", value: "h3" },
  { label: "H4", value: "h4" },
  { label: "H5", value: "h5" },
  { label: "H6", value: "h6" },
  { label: "div", value: "div" },
];

export const bullets = [
  { label: "Circle", value: "fa-solid fa-circle" },
  {
    label: "Dot Circle",
    value: "fa-solid fa-circle-dot",
  },
  {
    label: "Squire",
    value: "fa-solid fa-square-full",
  },
  {
    label: "Circle",
    value: "fa-regular fa-circle",
  },
  {
    label: "Dot Circle",
    value: "fa-regular fa-circle-dot",
  },
];

export const markups = [
  { label: "Numbers", value: "decimal" },
  { label: "Bullets", value: "disc" },
];

export const colorOptions = [
  { name: "Orange", color: "#F57C00" },
  { name: "Purple", color: "#9C27B0" },
  { name: "Gray", color: "#9E9E9E" },
  { name: "Cyan", color: "#00BCD4" },
  { name: "Pink", color: "#E91E63" },
  { name: "Lime", color: "#CDDC39" },
  { name: "Brown", color: "#795548" },
];

export const generalStyleTabs = [
  { name: "general", title: __("General", "b-blocks") },
  { name: "style", title: __("Style", "b-blocks") },
  {name:"advanced", title:__("Advanced", "b-blocks")}
];

// global.css.ts
import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  background: vars.color.contentBackground,
  color: vars.color.text,
  fontFamily: "system-ui, sans-serif",
});

globalStyle("body", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  overflow: "hidden",
});

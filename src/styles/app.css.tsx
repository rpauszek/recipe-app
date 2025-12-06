import { style } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

export const app = style({
  display: "flex",
  height: "100vh",
  overflow: "hidden",
});

export const sidebar = style({
  display: "flex",
  flexDirection: "column",
  width: "288px",
  background: vars.color.background,
  borderRight: `1px solid ${vars.color.text}`,
});

export const sidebarFooter = style({
  borderTop: `1px solid ${vars.color.text}`,
  padding: "0.75rem",
});

export const content = style({
  flex: 1,
  overflowY: "auto",
  padding: "2rem",
  background: vars.color.backgroundSecondary,
});

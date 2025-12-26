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
  background: vars.sidebar.background,
  boxShadow: `3px 0 8px ${vars.sidebar.shadow}`,
  zIndex: 1,
});

export const sidebarFooter = style({
  padding: "0.75rem",
});

export const content = style({
  flex: 1,
  overflowY: "auto",
  marginInline: "20px",
});

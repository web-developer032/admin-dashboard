import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function setDefaultColorTheme(colorMode) {
  const className = "dark";
  const bodyClass = window.document.body.classList;

  colorMode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
}

export function getUserDefinedTheme() {
  let colorTheme = localStorage.getItem("color-theme");
  const defaultTheme =
    (colorTheme && JSON.parse(colorTheme)) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  return defaultTheme;
}

export const routes = {
  home: "/",
  couples: "/couples",
  chart: "/chart",
  vendors: "/vendors",
  calendar: "/calendar",
  profile: "/profile",
  formElements: "/forms/form-elements",
  formLayout: "/forms/form-layout",
  settings: "/settings",
  tables: "/tables",
  uiAlerts: "/ui/alerts",
  uiButtons: "/ui/buttons",

  authSignin: "/auth/signin",
  authSignup: "/auth/signup",
};

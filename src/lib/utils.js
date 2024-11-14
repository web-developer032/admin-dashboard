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
  const defaultTheme =
    JSON.parse(localStorage.getItem("color-theme") || "") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  return defaultTheme;
}

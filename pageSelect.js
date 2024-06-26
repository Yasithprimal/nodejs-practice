import { log } from "node:console";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Home from "./pages/home.js";
import NotFound from "./pages/not-found.js";
import { URL } from "node:url";

export const pageSelect = (url, res) => {
  const urlParams = new URL(`http://localhost:4000${url}`);
  log(urlParams.searchParams);

  if (url === "/") {
    res.end(Home());
  } else if (url === "/about") {
    res.end(About());
  } else if (url === "/contact") {
    res.end(Contact());
  } else {
    res.end(NotFound());
  }
};

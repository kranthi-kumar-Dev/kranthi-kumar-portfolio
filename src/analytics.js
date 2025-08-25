import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-HGX99S1W98";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page_path: window.location.pathname });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};

import { subDomainList } from "./constant";

export const getApps = () => { 
    const subDomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) =>app.main);
    if (subDomain === "") return mainApp.app;

    const apps = subDomainList.find((app) => subDomain === app.sundomain);

    return apps ? apps.app : mainApp.app;
}

export const getSubDomain = (location) => {
    const locationParts = location.split(".");
    const isLocalHost = locationParts.slice(-1)[0] === "localhost";
    const sliceTill = isLocalHost ? -1 : -2;
    return locationParts.slice(0, sliceTill).join("");
};
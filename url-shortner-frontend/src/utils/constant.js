import AppRouter, { SubDomainRouter } from "../AppRouter";

export const subDomainList = [
    {sundomain:"www",app: AppRouter, main: true},
    {sundomain:"url",app: SubDomainRouter, main: false},
];
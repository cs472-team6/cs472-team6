import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import Component from "../models/Component";
import { Gradients } from "./utils";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    
    ['Footer',
      new Component('Footer', Footer, FooterOptions, FooterPreview, {
      userName: 'Kartik Bansal',
      home: 'URL1',
      aboutUs: 'URL2',
      contact: 'URL3',
      linkedIn: 'URL4',
      twitter: 'URL5',
      instagram: 'URL6'})]
    
]);

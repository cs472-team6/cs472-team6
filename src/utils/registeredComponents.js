import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import Component from "../models/Component";
import { Gradients } from "./utils";
import CtaSection from "../components/CtaSection/CtaSection";
import CtaSectionOptions from "../components/CtaSection/CtaSectionOptions";
import CtaSectionPreview from "../components/CtaSection/CtaSectionPreview.png"

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})]
    ['CtaSection', new Component('CtaSection', CtaSection, CtaSectionOptions, CtaSectionPreview, {link: 'www.google.com', word1: 'See the impoact of good, conversion-oriented design on your business.', word2: "Let's Work Together"})]
]);
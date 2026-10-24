"use strict";

import Slider from "./modules/slider";
import Video from "./modules/video";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next').switchSlide();
    const video = new Video('.play', '.overlay').init();
});
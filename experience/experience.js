import { Application } from "pixi.js";

import Sizes from "./utils/sizes";
import Time from "./utils/time";

export default class Experience {
    static instance;
    constructor(canvas) {
        if (Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas = canvas;

        this.app = new Application();


        //utils
        this.time = new Time();
        this.sizes = new Sizes();
        //objects
        this.renderer = new Renderer();

        this.world = new World();

        this.sizes.on("resize", ()=> {
            this.resize();
        })

        this.time.on("update", ()=> {
            this.update();
        })
    }

    resize() {
        this.renderer.resize();
    }

    update() {
        this.renderer.update();
    }
}
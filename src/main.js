import { Application } from "pixi.js";

(async () => {
    const app = new Application();

    await app.init({
        resizeTo: window,
    })

    document.body.appendChild(app.canvas);
})();
import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "loadingImage",
            assets:
            {
                "loading image" : "load-image.jpg",
            }
        },
        {
            name : "splash-screen",
            assets:
            {
                "foregroundImage": 'slot-fighter-foreground-dynamic.png',
                "backgroundImage": 'slot-fighter-background-dynamic.jpg',
            }
        },
    ]
}
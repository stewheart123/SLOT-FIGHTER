import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "loadingImage",
            assets:
            {
                "loading image" : "clampy.png",
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
        {
            name : "game-screen",
            assets:
            {
                "fighterAnimation" : 'mai-sprites.json',
                "fighterSprites" : 'mai-sprites.png',
                "stageOneBackground" : 'stage-1-background.jpg',
                "symbolH": 'symbol-H.jpg',
                "symbolJ": 'symbol-J.jpg',
                "symbolK": 'symbol-K.jpg',
                "symbolKE": 'symbol-KE.jpg',
                "symbolL": 'symbol-L.jpg',
                "symbolO": 'symbol-O.jpg',
                "symbolR": 'symbol-R.jpg',
                "symbolRT": 'symbol-RT.jpg',
                "symbolS": 'symbol-S.jpg',
                "symbolST": 'symbol-ST.jpg',
                "symbolT": 'symbol-T.jpg',
                "symbolW": 'symbol-W.jpg',
            }
        }
    ]
}
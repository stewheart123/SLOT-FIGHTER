import { IStep } from "./IStep";
import { Signal } from "signals";
import { Sprite, Container, Graphics, Text, AnimatedSprite, Assets } from "pixi.js";
import appProps from "../models/App";
import liveComponents from "../models/LiveComponents";

export class StepSplashScreen implements IStep {
  public isComplete = false;

  public async start(signal: Signal<any>): Promise<void> {
    const splashContainer = new Container();
    const foregroundFighter = Sprite.from("foregroundImage");
    foregroundFighter.width = appProps.theApp.screen.width;
    foregroundFighter.height = appProps.theApp.screen.height;
    const backgroundImage = Sprite.from("backgroundImage");
    backgroundImage.width = appProps.theApp.screen.width;
    backgroundImage.height = appProps.theApp.screen.width;
    splashContainer.addChild(backgroundImage);
    splashContainer.addChild(foregroundFighter);

    // foreground animation
    const startY = foregroundFighter.y;
    const amplitude = 2;
    const frequency = 0.05;
    let time = 0;
    let animationOn = true;
    // Animation loop
    appProps.theApp.ticker.add(() => {
      if (animationOn) {
        time += appProps.theApp.ticker.deltaTime;
        // Calculate the new Y position based on the time and amplitude
        const newY = startY + Math.sin(time * frequency) * amplitude;
        foregroundFighter.y = newY;
      }
    });

    const buttonContainer = new Container();
    const insertCoinButton = new Graphics();
    insertCoinButton.lineStyle(4, 0x000000, 6);
    insertCoinButton.beginFill(0xff7a00, 1);
    insertCoinButton.drawRect(0, 0, 250, 50);
    insertCoinButton.endFill();
    insertCoinButton.interactive = true;
    insertCoinButton.cursor = "pointer";
    insertCoinButton.on("pointerdown", insertCoin);

    buttonContainer.addChild(insertCoinButton);

    buttonContainer.x = appProps.theApp.screen.width / 2 - 125;
    buttonContainer.y = appProps.theApp.screen.height / 1.5;
    const buttonText = new Text("INSERT COIN", {
      fontFamily: "Bayon",
      fontSize: 36,
      fill: 0x000000, // black color
    });
    // Set the anchor of the text to center
    buttonText.anchor.set(0.5);

    const titleContainer = new Container();
    const titleSlotBackground = new Graphics();

    titleSlotBackground.beginFill(0x000000, 1);
    titleSlotBackground.drawRect(0, 0, 210, 88);
    titleSlotBackground.endFill();

    const titleSlot = new Text("SLOT", {
      fontFamily: "Tourney",
      fontSize: 80,
      fill: 0xffffff,
    });
    const titleFighter = new Text("FIGHTER", {
      fontFamily: "Permanent Marker",
      fontSize: 80,
      fill: 0xff5c00,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
    });
    titleSlot.position.x = 10;
    titleFighter.position.set(titleFighter.width / 1.85, -10);
    titleSlotBackground.addChild(titleSlot);
    titleContainer.addChild(titleSlotBackground);
    titleContainer.addChild(titleFighter);
    titleContainer.pivot.set(1, 1);
    titleContainer.position.set(
      appProps.theApp.screen.width / 2 - titleSlotBackground.width,
      appProps.theApp.screen.height / 2 - titleSlotBackground.height / 8
    );

    buttonText.x = buttonContainer.width / 2;
    buttonText.y = buttonContainer.height / 2;

    insertCoinButton.addChild(buttonText);
    insertCoinButton.visible = false;
    const flashDuration = 50;
    let isObjectVisible = false;
    let elapsedTime = 0;
    // Flashing animation loop for button
    appProps.theApp.ticker.add((delta) => {
      if (animationOn) {
        elapsedTime += delta;
        if (elapsedTime >= flashDuration) {
          isObjectVisible = !isObjectVisible;
          insertCoinButton.visible = isObjectVisible;
          elapsedTime = 0;
        }
      }
    });

    const creditsText = new Text("CREDITS 00", {
      fontFamily: "Bayon",
      fontSize: 36,
      fill: 0xffffff, // black color
    });
    // Set the anchor of the text to center
    creditsText.anchor.set(1, 0);

    // Calculate the center position within the container
    creditsText.x = appProps.theApp.screen.width;
    creditsText.y = 0;

    splashContainer.addChild(titleContainer);
    splashContainer.addChild(buttonContainer);
    splashContainer.addChild(creditsText);

    //animation test
    const sheet = await Assets.load('fighterAnimation');
    const animatedSprite = new AnimatedSprite(sheet.animations['tile']);
    animatedSprite.width = 200;
    animatedSprite.height = 200;
    animatedSprite.position.set( animatedSprite.width, animatedSprite.height);
    animatedSprite.anchor.set(0.5, 0.5);
    animatedSprite.scale.set(2);
    animatedSprite.loop = true;
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.play();
    splashContainer.addChild(animatedSprite);
    
    //end of test - move to new state / sequence

    appProps.theApp.stage.addChild(splashContainer);
    liveComponents.splashScreen = splashContainer;
    function insertCoin() {
      console.log("coin inserted");
      animationOn = false;
      insertCoinButton.visible = true;
      creditsText.text = "CREDITS 01";
    }

    //place the dispatch inside a button event
    this.isComplete = true;
    signal.dispatch();
  }
}

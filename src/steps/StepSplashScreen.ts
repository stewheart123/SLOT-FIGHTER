import { IStep } from "./IStep";
import { Signal } from "signals";
import { Sprite, Container, Graphics, Text } from "pixi.js";
import appProps from "../models/App";
import liveComponents from "../models/LiveComponents";

export class StepSplashScreen implements IStep {
  public isComplete = false;

  public start(signal: Signal<any>): void {
    const splashContainer = new Container();
    const aSprite = Sprite.from("foregroundImage");
    aSprite.width = appProps.theApp.screen.width;
    aSprite.height = appProps.theApp.screen.height;
    const backgroundImage = Sprite.from("backgroundImage");
    backgroundImage.width = appProps.theApp.screen.width;
    backgroundImage.height = appProps.theApp.screen.width;
    splashContainer.addChild(backgroundImage);
    splashContainer.addChild(aSprite);

    const buttonContainer = new Container();
    const insertCoinButton = new Graphics();
    insertCoinButton.lineStyle(6, 0x000000, 6);
    insertCoinButton.beginFill(0xff7a00, 1);
    insertCoinButton.drawRect(0, 0, 300, 100);
    insertCoinButton.endFill();
    insertCoinButton.interactive = true;

    buttonContainer.addChild(insertCoinButton);

    buttonContainer.x = appProps.theApp.screen.width / 2 - 150;
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
    titleFighter.position.set( titleFighter.width / 1.85, -10);
    titleSlotBackground.addChild(titleSlot);
    titleContainer.addChild(titleSlotBackground);
    titleContainer.addChild(titleFighter);
    titleContainer.pivot.set(1, 1);
    titleContainer.position.set(
      appProps.theApp.screen.width / 2 - titleSlotBackground.width,
      appProps.theApp.screen.height / 2 - titleSlotBackground.height / 8
    );

    // Calculate the center position within the container
    buttonText.x = buttonContainer.width / 2;
    buttonText.y = buttonContainer.height / 2;

    insertCoinButton.addChild(buttonText);

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
    appProps.theApp.stage.addChild(splashContainer);
    liveComponents.splashScreen = splashContainer;

    //place the dispatch inside a button event
    this.isComplete = true;
    signal.dispatch();
  }
}

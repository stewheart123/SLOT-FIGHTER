import { Application, Sprite, TextStyle, Text } from 'pixi.js';
import { Bank} from './models/bank';
import { InitialiseGameState } from './states/InitialiseGameState';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: window.innerWidth,
	height: window.innerHeight
});

const clampy: Sprite = Sprite.from("clampy.png");
const initialiseGameState: InitialiseGameState = new InitialiseGameState();
let bank :Bank = new Bank();
bank.balance = initialiseGameState.addCredit();
const txtStyle: TextStyle = new TextStyle({
	fontSize: 50,
	fill: 0xffffff,
});
const text :Text = new Text("Bank Balance", txtStyle);
text.text = "test";



clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);
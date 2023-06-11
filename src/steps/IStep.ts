import { Signal } from "signals";

export interface IStep {
    start( signal:Signal) : void;
}
import {CmdDomExec} from "../toolbox/CmdDomExec";

export class BaseField {
    constructor(key, tag, value, placeholder) {
        this._key = key;
        this._tag = tag;
        this._value = value;
        this._placeholder = placeholder;
    }

    get key() {
        return this._key;
    }

    get tag() {
        return this._tag;
    }

    get value() {
        return this._value;
    }

    get placeholder() {
        return this._placeholder;
    }

    get actions() {
        return [new CmdDomExec()]
    }
}
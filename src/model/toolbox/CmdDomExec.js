import {CmdDefault} from "./CmdDefault";


export class CmdDomExec extends CmdDefault {
    constructor(name, iconClass, cmd = null) {
        super(name, iconClass);
        this.addFireListener(() => document.execCommand(cmd || name))
    }
}
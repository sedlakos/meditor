export class CmdsManager {

    constructor(actions) {
        this._cmds = actions;
    }

    get cmds() {
        return this._cmds;
    }

    getCmd(name) {
        return this._cmds[name] || null
    }

    fireCmd(name) {
        this._cmds[name] && this._cmds[name].fire()
    }
}
export class CmdDefault {

    onFire = []

    constructor(name, iconClass = 'fa fa-?') {
        this._name = name;
        this._iconClass = iconClass;
    }

    get iconClass() {
        return this._iconClass;
    }

    get name() {
        return this._name;
    }

    fire = () => {
        this.onFire.length && this.onFire.forEach((callback) => callback())
    }

    addFireListener = (onFire) => {
        this.onFire.push(onFire)
    }
}
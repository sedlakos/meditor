export class TimeLock {
    timeout = null;
    locked = false;

    lock = (time) => {
        this.locked = true
        this.timeout && clearTimeout(this.timeout)
        this.timeout = setTimeout(this.unlock, time)
    }

    unlock = () => {
        this.locked = false
    }

    isLocked = () => {
        return this.locked
    }
}
export class BlockContainer {

    constructor(blocks = []) {
        this.fields = blocks;
    }

    addField(field, after = null) {
        this.fields.push(field)
    }

    swapFields(idx1, idx2) {
        let tmp = this.fields[idx1]
        this.fields[idx1] = this.fields[idx2]
        this.fields[idx2] = tmp
    }

    getField(idx) {
        return this.fields[idx]
    }

}
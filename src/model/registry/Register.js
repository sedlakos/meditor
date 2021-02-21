export class Register {
    static map = {}
    static searchMap = []

    static register = (key, label, component, props = {}) => {
        this.map[key] = {
            component,
            props
        }
        this.searchMap.push({key, label})
    }

    static getComponent = (key) => {
        return this.map[key]['component']
    }

    static searchKey = (search) => {
        return this.searchMap.filter(({label}) => {
            return label.startsWith(search)
        })
    }
}
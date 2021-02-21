class Register {
    static map = {}
    static searchMap = []

    static register = (key, label, component) => {
        this.map[key] = component
        this.searchMap.push({key, label})
    }

    static getComponent = (key) => {
        return this.map[key]['component']
    }

    static searchKey = (search) => {
        return this.searchMap.filter((itm) => {
            return itm.startsWith(search)
        })
    }
}
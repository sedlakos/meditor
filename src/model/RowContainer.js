import {Container} from 'unstated'

export class RowContainer extends Container {
    state = {}

    constructor(props) {
        super();
        console.log(props)
        this.state = props
    }


}
import * as React from "react";
import {Registry} from "react-registry";

export class ContainerField extends React.Component {

    constructor(props) {
        super(props);
        this.tag = props.tag || 'p'
        this.state = {html: this.props.html}
        this.ref = React.createRef()
    }

    onChange = (e) => this.setState({html: e.target.value})
    onFocus = () => this.props.onFieldUpdate({selected: true})


    render() {
        return <div className={'row'}>
            <div className={'col-6'}>
                this is col 1
            </div>
            <div className={'col-6'}>
                this is col 2
            </div>
        </div>
    }
}

Registry.register(ContainerField,{id: 'container', registry: 'fields'})
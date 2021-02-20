import * as React from "react";
import {Registry} from "react-registry";
import EditorRow from "../editor/EditorRow";

export class ContainerField extends React.Component {

    constructor(props) {
        super(props);
        this.tag = props.tag || 'p'
        this.state = {html: this.props.html}
        this.ref = React.createRef()
    }

    render() {
        return <div className={'row'}>
            {this.props.rows.map((row) => {
                return <div className={'col-6'}>
                    {row.items.map((item) => {
                        return <>
                            <EditorRow {...item} />
                        </>
                    })}
                </div>
            })}
        </div>
    }
}

Registry.register(ContainerField, {id: 'container', registry: 'fields'})
import * as React from "react";
import {connect} from "react-redux";
import * as actions from '../reducers/EditorActions'

export class A extends React.Component  {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props, this.state)
        return <></>
    }
}

function mapStateToProps(state, ownProps) {
    return state
}

const ConnectedNode = connect(mapStateToProps, actions)(A)
export default ConnectedNode
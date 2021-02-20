import * as React from "react";
import ContentEditable from "react-contenteditable";
import {Registry} from "react-registry";

export class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.tag = props.tag || 'p'
        this.state = {html: this.props.html}
        this.ref = React.createRef()
    }

    onChange = (e) => this.setState({html: e.target.value})
    onFocus = () => this.props.onFieldUpdate({selected: true})

    actionBold = () => console.log("BOLD")
    actionItalic = () => console.log("ITALIC")


    // onSelect = (e) => console.log(window.getSelection()?.getRangeAt(0).toString())

    render() {
        return <ContentEditable
            onChange={this.onChange}
            onBlur={this.props.onBlur}
            onFocus={this.onFocus}
            onSelectCapture={this.onSelect}
            tagName={this.tag}
            ref={this.ref}
            html={this.state.html}/>;
    }
}

Registry.register(TextField,{id: 'text', registry: 'fields'})
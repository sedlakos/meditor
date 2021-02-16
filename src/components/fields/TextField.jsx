import * as React from "react";

export class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.tag = props.tag || 'p'
        this.setState({target: {value: null}})
        this.emitChange = this.emitChange.bind(this)
        this.ref = React.createRef()
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.html !== this.getDOMNode().innerHTML;
    }

    emitChange() {
        console.log(this)
        var html = this.ref.current.innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {

            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }

    render() {
        var TAG = this.tag
        return <TAG
            onInput={this.emitChange}
            onBlur={this.emitChange}
            ref={this.ref}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}/>;
    }
}
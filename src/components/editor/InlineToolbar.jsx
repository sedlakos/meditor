import * as React from "react";

export class EditorRow extends React.Component {
    render() {
        return <div className={'me-block-wrapper'}>{this.props.children}</div>;
    }
}
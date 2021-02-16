import * as React from "react";

export class AddRowDivider extends React.Component{
    render() {
        return <div tabIndex="-1" className="block-editor-block-list__insertion-point is-vertical"
                    style="width: 807px; height: 28px;">
            <div className="block-editor-block-list__insertion-point-indicator"></div>
            <div className="block-editor-block-list__insertion-point-inserter">
                <div className="components-dropdown block-editor-inserter">
                    <button type="button" aria-haspopup="true" aria-expanded="false"
                            className="components-button block-editor-inserter__toggle has-icon" aria-label="Add block">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"
                             aria-hidden="true" focusable="false">
                            <path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>;
    }
}
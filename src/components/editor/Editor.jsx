import * as React from "react";
import styled from "styled-components";
import EditorRow from "./EditorRow";
import {Subscribe} from "unstated";
import {EditorContainer} from "../../model/EditorContainer";

const StyledBlock = styled.div`
    position: relative;
`

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blocks: props.blocks
        }
    }

    render() {
        return <Subscribe to={[EditorContainer]}>
            {editor => (
                editor.state.items.map((field, idx) => {
                    return <EditorRow key={idx}
                                      {...field}/>
                })
            )}
        </Subscribe>;
    }
}
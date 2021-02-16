import * as React from "react";
import {TextField} from "../fields/TextField";
import {AddRowDivider} from "../ui/AddRowDivider";
import styled from "styled-components";
import {InlineToolbar} from "./InlineToolbar";

const StyledBlock = styled.div`
    position: relative;
`

export class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: 2}
    }

    render() {
        return <>
            {this.props.blocks.map((block, idx) => {
                return <>
                    <StyledBlock key={idx}>
                        {this.state.selected === idx &&
                        <InlineToolbar actions={['remove', 'up', 'down', ...block.actions]}/>}
                        <TextField html={block.placeholder} tag={block.tag}/>
                    </StyledBlock>
                    <AddRowDivider/>
                </>
            })}
        </>;
    }
}
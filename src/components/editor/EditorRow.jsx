import * as React from "react";
import {AddRowDivider} from "../ui/AddRowDivider";
import styled from "styled-components";
import {InlineToolbar} from "./InlineToolbar";
import onClickOutside from "react-onclickoutside";
import {Registered} from "react-registry";

const StyledBlock = styled.div`
    position: relative;
    outline: ${props => props.selected && '-webkit-focus-ring-color auto 1px'};
`

class EditorRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: false}
        this.wrapperRef = React.createRef();
        this.storedFocused = null
    }

    onUpdateField = (update) => {
        this.setState(update)
    }

    onBlur = (e) => {
        this.storedFocused = e.target
    }

    restoreFocus = () => {
        this.state.selected &&
        this.storedFocused &&
        this.storedFocused.focus()
    }

    handleClickOutside = evt => {
        this.setState({selected: false})
    };

    render() {
        return <>
            <StyledBlock ref={this.wrapperRef} onClick={this.restoreFocus} selected={this.state.selected}>
                {/*<Provider inject={[new RowContainer(this.props)]}>*/}
                {this.state.selected &&
                <InlineToolbar
                    actions={this.props.actions}/>}
                <Registered id={this.props.field}
                            registry={'fields'}
                            onFieldUpdate={this.onUpdateField}
                            onBlur={this.onBlur}
                            {...this.props}
                />
                {/*</Provider>*/}
            </StyledBlock>
            <AddRowDivider/>
        </>;
    }
}

export default onClickOutside(EditorRow)
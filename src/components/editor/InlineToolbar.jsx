import * as React from "react";
import styled from 'styled-components'


const StyledInlineToolbar = styled.div`
  /* Adapt the colors based on primary prop */
  position: absolute;
  left: ${props => props.left ? props.left : 0};
  top: ${props => props.top ? props.top : 0};
  font-size: 1em;
  border-radius: 3px;
  z-index: 500;
`;

export class InlineToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
        }
        this.ref = React.createRef()
    }

    componentDidMount() {
        this.setState({height: -this.ref.current.offsetHeight})
    }

    render() {
        return <StyledInlineToolbar left={this.state.height + 'px'}
                                    top={(this.state.height - 5) + 'px'}
                                    ref={this.ref}>
            {this.props.actions.map((action, idx) => {
                if (action === 'remove')
                    return <button className={'btn btn-sm btn-outline-danger ml-1'} key={idx}>
                        <span className={'fa fa-trash-alt'}></span>
                    </button>
                if (action === 'up')
                    return <button className={'btn btn-sm btn-outline-info ml-1'} key={idx}>
                        <span className={'fa fa-angle-up'}></span>
                    </button>
                if (action === 'down')
                    return <button className={'btn btn-sm btn-outline-info ml-1'} key={idx}>
                        <span className={'fa fa-angle-down'}></span>
                    </button>
                if (action === 'bold')
                    return <button className={'btn btn-sm btn-outline-info ml-1'} key={idx}>
                        <span className={'fa fa-bold'}></span>
                    </button>
                if (action === 'italic')
                    return <button className={'btn btn-sm btn-outline-info ml-1'} key={idx}>
                        <span className={'fa fa-italic'}></span>
                    </button>
            })}
        </StyledInlineToolbar>;
    }
}
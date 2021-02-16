import * as React from "react";
import styled from "styled-components";

const StyledRowDivider = styled.div`
    width: 100%;
    height: 28px;
`

export class AddRowDivider extends React.Component {
    render() {
        return <StyledRowDivider>
            <div>
                {/*<hr />*/}
                {/*<button>*/}
                {/*    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img"*/}
                {/*         aria-hidden="true" focusable="false">*/}
                {/*        <path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path>*/}
                {/*    </svg>*/}
                {/*</button>*/}
            </div>
        </StyledRowDivider>;
    }
}


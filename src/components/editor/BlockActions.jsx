import * as React from "react";

const Button = ({children, ...props}) => {
    return <button {...props} aria-pressed={false} className={'btn btn-sm btn-outline-info ml-1'}> {children}</button>;
}


export const ActionButton = ({action, ...props}) => {
    const Remove = (props) => <Button {...props}><span className={'fa fa-trash-alt'}/></Button>;
    const MoveUp = () => <Button><span className={'fa fa-angle-up'}/></Button>;
    const MoveDown = () => <Button><span className={'fa fa-angle-down'}/></Button>;

    const Bold = () => <Button><span className={'fa fa-bold'}/></Button>;
    const Italic = () => <Button><span className={'fa fa-italic'}/></Button>;

    // return <Component />
    return <Button onClick={action.fire}><span className={action.iconClass}/></Button>
};
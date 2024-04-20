import * as React from 'react';

interface IButtonProps {
    text: string,
    color : string,
    width : string,
    background : string,
    disabled : boolean,
    onClick: () => void
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return (
    <div className={"w-"+props.width}>
        <button className={"bg-"+props.background+"-500 hover:bg-"+props.background+"-700 text-"+props.color+" font-bold py-3 px-6 mr-1 mb-1 border border-"+props.background+"-700 rounded outline-none focus:outline-none"} type="button" onClick={props.onClick} disabled={props.disabled}>
            {props.text}
        </button>
    </div>
  );
};

export default Button;

import * as React from 'react';

interface ITextAreaProps {
    id: string,
    label: string,
    name: string,
    value: string,
    rows: number,
    placeholder: string,
    autoComplete: 'off' | 'on',
    disabled: boolean,
    onChange: (e: React.ChangeEvent<any> | React.ChangeEvent) => void;
}

const TextArea: React.FunctionComponent<ITextAreaProps> = (props) => {
  return (
    <>
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={props.id}>{props.label}</label>
     <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none" id={props.id} rows={props.rows} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} autoComplete={props.autoComplete} disabled={props.disabled}></textarea>
    </>
  );
};

export default TextArea;

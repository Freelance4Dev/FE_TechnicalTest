import * as React from 'react';

interface ITextInputProps {
    id: string,
    label: string,
    type: string,
    name: string,
    value: string,
    placeholder: string,
    messageError: string,
    autoComplete: 'off'|'on',
    disabled: boolean,
    onChange: (e: React.ChangeEvent<any> | React.ChangeEvent) => void;
}

const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  return (
    <>
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={props.id}>{props.label}</label>
      <input className={"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" + (props.type === 'file' ? "relative m-0 min-w-0 flex-auto cursor-pointer bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" : "")} id={props.id} type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} autoComplete={props.autoComplete} disabled={props.disabled}/>
    </>
  );
};

export default TextInput;

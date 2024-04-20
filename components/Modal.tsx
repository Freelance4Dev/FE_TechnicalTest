import * as React from 'react';

interface IModalProps {
     isVisible: boolean,
     onClose: () => void,
     children?: React.ReactNode
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
  if(!props.isVisible) return null;

  const handleClose=(e: any)=>{
    if(e.target.id==="wrapper") props.onClose;
  }
  return (
     <div className="fixed inset-0 bg-black z-50 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={(e)=>handleClose(e)}>
       <div className="md:w-[600px] w-[90%] mx-auto flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={props.onClose}>X</button>
        <div className="bg-white p-2 rounded">{props.children}</div>
       </div>
     </div>
  );
};

export default Modal;

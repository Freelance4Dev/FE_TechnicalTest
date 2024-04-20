import * as React from 'react';
import { useRouter } from 'next/router'
import { signIn } from "next-auth/react"
import { FiLogIn, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import TextInput from "@/components/TextInput";
import { toast } from "react-toastify";

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const router =  useRouter()
    const [states, setStates] = React.useState({
            email: "",
            password: ""
            });

    const onChange=(e: React.ChangeEvent<any>) =>{
        const { name, value, type, checked } = e.target;
        setStates({ ...states, [name]: value });
    };

  
    const handleAuth=async(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault();
        signIn("credentials", {
            ...states,
            redirect : false,
            callbackUrl: "/"
        }).then(response =>{
            if (response?.ok) {
                router.push("/send_email")
            } else {
              toast("You are not Authorized !", { type: 'error'})
            }
        })
        .catch(err=>console.log(err))
    }
    return (
        <main className='bg-gray-100 min-h-screen'>
              <div className="flex justify-center items-center p-4 bg-gray-100 h-screen">
                <div className="lg:w-1/3 bg-white align-middle rounded-lg border p-8 shadow">
                  <form className="w-full" onSubmit={(e)=>handleAuth(e)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <TextInput label="Email Address" id="grid-email" type="text" name="email" value={states.email || ''} onChange={onChange} placeholder="Email Address" autoComplete="off" disabled={false} messageError="Please fill out this field."/>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <TextInput label="Password" id="grid-password" type="password" name="password" value={states.password || ''} onChange={onChange} placeholder="Password" autoComplete="off" disabled={false} messageError="Please fill out this field."/>
                    </div>
                    <div className="text-center lg:text-left">
                      <button type="submit" className="flex justify-between items-center inline-block rounded bg-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-gray-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" data-te-ripple-init data-te-ripple-color="light" onClick={(e)=>handleAuth(e)}>Login<FiLogIn size={20} className="pl-1"/></button>
                    </div>
                  </form>
                </div>
    
              </div>
        </main>
      );
};

export default Login;

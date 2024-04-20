import * as React from 'react';
import { useRouter } from "next/router";
import { dataRoutes } from "@/routes/routes";
import { RxAvatar } from "react-icons/rx";
import { FiUser, FiLogOut, FiChevronDown } from "react-icons/fi";
import { signOut, useSession } from 'next-auth/react'
import { toast } from "react-toastify";
import { requestFuncPost } from "@/pages/api/request";

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const router = useRouter();
  const { data: session } = useSession()
  const [open, setOpen] = React.useState(false);
  const handleLogout=()=> {
    if (!window.confirm(`Anda yakin ingin keluar ?`))
        return;
        //data: any,endpoint: string
        requestFuncPost({email:session?.user?.email},'logout').then((res)=>{
        if(res.success){
          signOut()
        }else{
          toast(res.message, { type: 'error' })
        }
      })
      .catch((e)=> console.log(e));
  };

  return (
    <div className='flex justify-between p-4 pt-4 bg-white border shadow items-center'>
       {dataRoutes.filter(o => o.path === router.asPath).map(({name,path}) => {
                return (
                  <div key={path}>
                    <label className="block uppercase tracking-wide text-gray-700 text-base font-bold">{name}</label>
                  </div>
                );
            })}
            
           

        {dataRoutes.filter(o => o.side === false).map(({path, name, profile, icon}) => {
              
               return (
                  <div className="relative inline-block text-left" key={path}>
                    <div>
                      <button type="button" onClick={() => setOpen(!open)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <span className="hidden md:block">{session?.user?.name}</span> {icon}
                        <div className={"transition-transform duration-100 "+(open === true ? "rotate-180": "rotate-0")}>
                          <FiChevronDown size={20}/>
                        </div>
                      </button>
                    </div>
                      
                    <div className={"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none " +(open === true ? "block": "hidden")} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                      <div className="py-1" role="none">
                        <button className="flex justify-between items-center text-red-700 font-semibold block px-4 py-2 text-sm w-full text-start" role="menuitem" tabIndex={-1} id="menu-item-1" onClick={()=>handleLogout()}>Logout <FiLogOut size={20}/></button>
                      </div>
                    </div>
                  </div>
                );
            })}
    </div>
  );
};

export default Header;

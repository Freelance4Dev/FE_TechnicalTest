import * as React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from 'next/image'
import { dataRoutes } from "@/routes/routes";
import { FiChevronRight } from "react-icons/fi";
const Logo = 'https://lautan-natural-krimerindo.com/wp-content/uploads/2020/09/non-dairy-creamer-toll-manufacturing-lautan-natural-krimerindo-cropped-icon-pt-lautan-natural-krimerindo-lnk.png';

interface ISideBarProps {
    children?: React.ReactNode
}

const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
    const router = useRouter();
    const showHeader = (router.pathname === '/login' || router.pathname === '/_error') ? false : true;
    const [toggle, setCollapse] = React.useState(true);
  
    function handletoggle() {
      setCollapse(!toggle);
    };
    return (
        <div className='flex'>
          
          {showHeader &&
            
            <div className={"fixed h-max-screen z-10 p-4 bg-orange-500 border-r-[1px] flex flex-col justify-between border-white shadow "  + ( toggle === true ? "w-80" : "w-20" ) +" transition-all duration-300 relative max-sm:w-20"}>
              <div className={"flex flex-col max-sm:items-center "+ (toggle === true? "items-start" : "items-center")}>
                   <div className='cursor-pointer p-1 rounded-lg inline-block flex justify-center' onClick={()=>handletoggle()}>
                        <div className="flex items-center justify-center mr-3 p-3 rounded-lg inline-block bg-gray-100 bg-opacity-20 text-white">
                            <FiChevronRight size={20} className={"transition-transform duration-300 max-sm:rotate-0 "+(toggle === true ? "rotate-180": "rotate-0")}/>
                        </div>
                            {toggle===true? <Image src={Logo} alt="MyMobirent Logo" className="block max-sm:hidden w-auto h-auto" width={95} height={50} priority/>:null}
                    </div>
                      {dataRoutes.map(({path, name, side, icon}) => {
                          return (
                            <React.Fragment key={path}>
                              {side===false? null:
                                <>
                                  <Link href={path} className="flex flex-row w-full items-center">
                                      <div className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 mr-3 p-3 rounded-lg inline-block ${router.asPath === path && 'bg-purple-800 text-white'}`}>
                                        {icon}
                                      </div>
                                      {toggle === true? <span className="block max-sm:hidden text-white font-bold">{name}</span> : null}
                                  </Link>
                                  <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                                </>
                              }
                          </React.Fragment>
                          );
                      })}
                </div>
            </div>
            }
            <main className="w-full">{props.children}</main>
        </div>
      );
};

export default SideBar;

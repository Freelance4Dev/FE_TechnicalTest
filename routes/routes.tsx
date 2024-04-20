import { RxSketchLogo, RxDashboard, RxLayers, RxAvatar, RxLockClosed } from "react-icons/rx";
import { HiOutlineBell } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const dataRoutes = [
  {
    path: "/send_email",
    name: "Send Email",
    side: true,
    profile : false,
    auth: false,
    user: true,
    icon:  <FiSend size={20}/>,
  },
  {
    path: "/profile",
    name: "Profile",
    side: false,
    profile : true,
    auth: false,
    user: true,
    icon: <RxAvatar size={20}/>,
  },
];

export {dataRoutes};

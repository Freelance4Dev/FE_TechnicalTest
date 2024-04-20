import * as React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { FiLogIn } from "react-icons/fi";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import { requestFuncGet, requestFuncPost } from "@/pages/api/request";
import { useSession } from 'next-auth/react';
import { toast } from "react-toastify";



interface ISendEmailProps {
}
//design calendar di sini
const SendEmail: React.FunctionComponent<ISendEmailProps> = (props) => {
    const { data: session } = useSession()
    const [visible, setVisible] = React.useState(false);
    const [states, setStates] = React.useState({
        email: "",
        date: "",
        description: ""
        });

    const now = new Date();


  const [eventsData, setEventsData] = React.useState([] as any);


      React.useEffect(()=>{
       handleCalendar()
      },[])

      const handleCalendar=()=> {
            //data: any,endpoint: string
            requestFuncGet('getListCalendar').then((res)=>{
              if(res.success){
                const dataRes: any[] = [];
                res.data.map((i: any)=>{
                    let result={
                        id:i._id,
                        title:i.email,
                        start: new Date(i.date),
                        end: new Date(i.date),
                    }
                    dataRes.push(result);

                })

                setEventsData(dataRes)
            }else{
              toast(res.message, { type: 'error' })
            }
          })
          .catch((e)=> console.log(e));
      };

    const localizer = momentLocalizer(moment);

    const onChange=(e: React.ChangeEvent<any>) =>{
        const { name, value, type, checked } = e.target;
        setStates({ ...states, [name]: value });
    };

    const handleOnClick=()=>{
       setVisible(true);
    }
    const handleSave=()=>{
        requestFuncPost({email:states.email,date:states.date,description:states.description},'addEmailToCalendar')
        .then((res)=>{
            if(res.success){
              let result={
                id:res.data._id,
                title:res.data.email,
                start: new Date(res.data.date),
                end: new Date(res.data.date),
            }
                setEventsData((oldArray: any) => [...oldArray,result] );
                setVisible(false);
                setStates({ email: "", date: "", description: "" });
                toast(res.message, { type: 'success' })
            }else{
              toast(res.message, { type: 'error' })
            }
          })
          .catch((e)=> console.log(e));
     }

  return (
<div className="grid md:grid-cols-1 rounded-lg">
    <div className="overflow-x-auto m-4  rounded-lg">
        <div className="w-full flex flex-col m-auto p-4 inline-block align-middle bg-white text-black justify-between">
       <div className="place-self-end">
       <Button color={"white"} width={"4"} background={"cyan"} text={"Create"} disabled={false} onClick={()=>handleOnClick()}/>
       </div>
            <div className="h-96 overflow-auto border rounded-lg">
            <Calendar
            views={["month", "work_week", "week", "day", "agenda", ]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
            />
            </div>
        </div>
    </div>

    <Modal isVisible={visible} onClose={()=>setVisible(false)}>
    <div className="w-full bg-white content-start pt-4 pb-4">
      <label className='text-lg font-bold'>Create</label>
    </div>
    <div className="flex flex-col justify-center items-center p-4 bg-gray-100">
                  <form className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <TextInput label="Email" id="grid-email" type="text" name="email" value={states.email || ''} onChange={onChange} placeholder="Email" autoComplete="off" disabled={false} messageError="Please fill out this field."/>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <TextInput label="Date" id="grid-password" type="date" name="date" value={states.date || ''} onChange={onChange} placeholder="Date" autoComplete="off" disabled={false} messageError="Please fill out this field."/>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <TextArea label="Description" id="grid-description" rows={3} name="description" value={states.description || ''} onChange={onChange} placeholder="Description" autoComplete="off" disabled={false}/>
                    </div>
                    <div className="place-self-end">
                    <Button color={"white"} width={"4"} background={"cyan"} text={"Submit"} disabled={false} onClick={()=>handleSave()}/>
                    </div>
                  </form>

              </div>
    </Modal>

</div>
);
};

export default SendEmail;

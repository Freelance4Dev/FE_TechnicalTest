import * as React from 'react';
import { requestFuncGet } from "@/pages/api/request";
import SendEmail from '@/layouts/SendEmail';

interface ISend_EmailProps {
}

const Send_Email: React.FunctionComponent<ISend_EmailProps> = (props) => {
    
    return (
        <>
        <SendEmail/>
        </>
      );
};

export default Send_Email;

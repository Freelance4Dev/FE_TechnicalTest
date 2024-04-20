import SendEmail from "@/pages/send_email";
import { GetSessionParams, getSession } from 'next-auth/react'


export default function Home() {
  return (
    <SendEmail/>
  );
}
export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}

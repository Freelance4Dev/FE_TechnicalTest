import NextAuth,{AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
const url = "http://localhost:3300/"

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: { label: "Username", type: "text", placeholder: "Username" },
            password: { label: "Password", type: "password", placeholder: "Password" }
          },
        async authorize(credentials: any, req) {
            const { email, password } = credentials
            const res = await fetch(url+"login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const response = await res.json();
            if(response.success){
                return response.data
            } else {
                return null
            }
        },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, session, user }: any) {
      if (trigger === 'update' && session) {
        if (typeof session.name === 'string') {
          token.name = session.name || '';
        }
        if (typeof session.email === 'string') {
          token.email = session.email || '';
        }
      }
        return ({...token,...user});
      },
    async session({ session, token, user }: any) {
        session.user = token;
        return session;
    },
  },
  session:{
    strategy: "jwt"
  },
  pages: {
      signIn: '/login',
  },
}

export default NextAuth(authOptions)
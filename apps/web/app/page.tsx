import {client} from '@repo/db/client';


export default async function Home() {

  const user = await client.user.findFirst();
  return (
    <div>
      <h1>Welcome to the BMS Web App!</h1>
      <p>Hello, {user?.username}!</p>
    </div>
  )
}
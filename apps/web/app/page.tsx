import { client } from "@repo/db/config";


export default async function Home() {
  const users = await client.user.findMany();
  return (
    <div>
      Hello there
      <br/>
      Hurray
      <br/>

      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export const dynamic = 'force-dynamic'
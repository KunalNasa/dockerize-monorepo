import { client } from "@repo/db/config";


export default async function Home() {
  const users = await client.user.findMany();
  return (
    <div>
      cvkcvjk
      {JSON.stringify(users)}
    </div>
  );
}

export const dynamic = 'force-dynamic'
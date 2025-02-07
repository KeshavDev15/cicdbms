
import {client} from "@repo/db/client";




export default async function Home() {
  const user = await client.user.findFirst();
  return (
    <div>
      Username:
      <h1>Hello {user?.username}</h1>
      Password:
      <h1>Hello {user?.password}</h1>
    </div>
  );
}

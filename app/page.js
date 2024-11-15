"use server"
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/auth/signin");

  return (
    <main>
        <p>Home Page</p> 
    </main>
  );
}

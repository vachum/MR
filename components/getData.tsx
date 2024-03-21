"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Service from "./service";
import UserService from "./userService";

export default function GetData({ user }: { user: boolean }) {
  const price = useQuery(api.price.get);
  return (
    <main className="w-full  justify-center items-center grid  grid-cols-1 lg:grid-cols-3 gap-4 p-8">
      {price?.map(({ _id, price, service, text, tag }) => (
        <div key={_id} className="">
          {user ? (
            <UserService title={service} text={text} price={price} tag={tag} />
          ) : (
            <Service
              serviceId={_id}
              title={service}
              text={text}
              price={price}
              tag={tag}
            />
          )}
        </div>
      ))}
    </main>
  );
}

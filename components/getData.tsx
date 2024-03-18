"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Service from "./service";

export default function GetData() {
  const price = useQuery(api.price.get);
  return (
    <main className="w-full grid grid-cols-3 gap-4 p-8">
      {price?.map(({ _id, price, service, text, tag }) => (
        <div key={_id} className="">
          <Service
            serviceId={_id}
            title={service}
            text={text}
            price={price}
            tag={tag}
          />
        </div>
      ))}
    </main>
  );
}

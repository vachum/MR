"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";

export const CreateTask = () => {
  const [serviceState, setServiceState] = useState("");
  const [textState, setTextState] = useState("");
  const [tagState, setTagState] = useState("");
  const [priceState, setPriceState] = useState(0);

  const insertService = useMutation(api.data.insertData);

  return (
    <div className="px-8 py-8 bg-neutral-200 h-full flex flex-col ">
      <form
        className="flex flex-col gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          await insertService({
            price: priceState,
            service: serviceState,
            text: textState,
            tag: tagState,
          });
        }}
      >
        <h1 className="text-2xl font-bold pb-4">Přidat službu</h1>
        <Label>Název</Label>
        <Input
          type="text"
          placeholder="Název"
          onChange={(e: any) => {
            setServiceState(e.target.value);
          }}
        />
        <Label>Popis</Label>
        <Textarea
          placeholder="Popis"
          onChange={(e: any) => {
            setTextState(e.target.value);
          }}
        />
        <Label>Cena</Label>
        <Input
          type="text"
          placeholder="Cena"
          onChange={(e: any) => {
            setPriceState(parseInt(e.target.value));
          }}
        />
        <Label>Tag</Label>
        <Select
          onValueChange={(e: any) => {
            setTagState(e);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Sleva">Sleva</SelectItem>
            <SelectItem value="Nový">Nový</SelectItem>
          </SelectContent>
        </Select>
        <Button>Přidat</Button>
      </form>
    </div>
  );
};

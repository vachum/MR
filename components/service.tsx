import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MdCreate, MdDelete } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { useQuery, useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";

interface serviceProps {
  serviceId: any;
  title: string;
  text: string;
  price: number;
  tag: string;
}
const Service = ({ serviceId, title, text, price, tag }: serviceProps) => {
  const deleteService = useMutation(api.deleteData.deleteData);
  const updateService = useMutation(api.updateData.replaceData);

  const [priceState, setPriceState] = useState(0);
  const [textState, setTextState] = useState("");
  const [serviceState, setServiceState] = useState("");
  const [tagState, setTagState] = useState("");
  return (
    <Card>
      <Badge className="w-[5em] flex justify-center items-center m-4">
        {tag}
      </Badge>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
        <p>{price}Kč</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>
            <Button className="mr-2 bg-gray-800">
              <MdCreate size={22} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="pb-4">Upravit</DialogTitle>
              <DialogDescription>
                <div className="flex flex-col gap-4">
                  <Label>Název</Label>
                  <Input
                    type="text"
                    defaultValue={title}
                    placeholder="service"
                    onChange={(e: any) => {
                      setServiceState(e.target.value);
                    }}
                  />
                  <Label>Popis</Label>
                  <Textarea
                    placeholder="service"
                    defaultValue={text}
                    onChange={(e: any) => {
                      setTextState(e.target.value);
                    }}
                  />
                  <Label>Cena</Label>
                  <Input
                    type="text"
                    defaultValue={price}
                    placeholder="price"
                    onChange={(e: any) => {
                      setPriceState(parseInt(e.target.value));
                    }}
                  />
                  <Label>Tag</Label>
                  <Select
                    defaultValue={tag}
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
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogClose asChild>
              <Button
                onClick={async (e) => {
                  await updateService({
                    id: serviceId,
                    price: priceState === 0 ? price : priceState,
                    service: serviceState === "" ? title : serviceState,
                    text: textState === "" ? text : textState,
                    tag: tagState === "" ? tag : tagState,
                  });
                }}
              >
                Upravit
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>

        <Button
          variant={"destructive"}
          onClick={async (e) => {
            e.preventDefault();
            await deleteService({ id: serviceId });
          }}
        >
          <MdDelete size={22} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Service;

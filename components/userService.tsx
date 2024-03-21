import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

interface serviceProps {
  title: string;
  text: string;
  price: number;
  tag: string;
}
const UserService = ({ title, text, price, tag }: serviceProps) => {
  return (
    <Card>
      <Badge className="w-[5em] flex justify-center items-center m-4">
        {tag}
      </Badge>
      <CardHeader>
        <h2 className="font-bold text-2xl">{title}</h2>
      </CardHeader>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardFooter>
        <h4 className="font-bold text-lg">{price} Kč</h4>
      </CardFooter>
    </Card>
  );
};

export default UserService;

import Image from "next/image";
import aboutImg from "../app/imgs/MS-2.jpg";
import { Button } from "./ui/button";
import { MdChevronRight } from "react-icons/md";
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-16">
      <Image src={aboutImg} />
      <div className=" lg:pr-40 grid gap-4 p-4 pb-8">
        <h3 className=" font-bold text-3xl">O nás</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id delectus
          atque tempora molestiae? Tempora quae repellendus, delectus laborum
          quasi ullam aspernatur deserunt rerum earum numquam. Quos provident
          exercitationem rem totam?
        </p>
        <Button className="w-32 mt-10 flex justify-center items-center gap-6">
          Služby <MdChevronRight size={21} />
        </Button>
      </div>
    </div>
  );
};

export default About;

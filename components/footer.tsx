import { MdLocalPhone, MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-primary px-32 py-16 flex justify-between">
      <h4 className="font-black text-neutral-100">MS</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid gap-2">
          <p className="font-bold text-neutral-200">Kontakty</p>
          <div className="flex gap-2 items-center text-neutral-300">
            <MdLocalPhone />
            777 888 999
          </div>
          <div className="flex gap-2 items-center text-neutral-300">
            <MdEmail />
            example@email.com
          </div>
        </div>
        <div className="text-neutral-200">
          <p className="font-bold text-neutral-200">Adresa</p>
          <p>Praha</p>
          <p>Anděl 33</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

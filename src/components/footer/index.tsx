import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="flex justify-items-center w-full ">
      <div className="container w-full flex flex-col md:flex-row justify-center items-center md:justify-between xl:px-40">
        <Logo />
        <div className="text-[#666666] mt-2 md:mt-0">
          <p>&lt; Projeto por Diogo Louvo Pievan /&gt;</p>
          <p>Todos os direitos reservados © 2025</p>
        </div>
      </div>
    </footer>
  );
};

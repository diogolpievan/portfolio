import { FaGithub } from "react-icons/fa";
import { ProfileLink } from "../profile-link";
import { Button } from "../ui/button";
import { BiLogoGmail } from "react-icons/bi";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoWhatsapp } from "react-icons/io5";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container flex flex-col lg:flex-row gap-0 justify-center items-center px-10 py-36 lg:min-h-dvh"
    >
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="font-bold text-3xl lg:text-5xl">Vamos nos Conectar</h1>
        <p>
          Envie sua mensagem agora mesmo e receba meu retorno diretamente no seu
          e-mail ou whatszapp.
        </p>
        <a
          href="https://w.app/axd85z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="py-7 duration-700 font-bold btn text-xl ">
            Entre em Contato
          </Button>
        </a>

        <div className="flex items-center justify-center text-center gap-4">
          <ProfileLink
            icon={BiLogoGmail}
            url="mailto:diogo.pievan@gmail.com"
            size={46}
          />
          <ProfileLink
            icon={IoLogoWhatsapp}
            url="https://w.app/axd85z"
            size={46}
          />
          <ProfileLink
            icon={LiaLinkedin}
            url="https://www.linkedin.com/in/diogolpievan/"
            size={52}
          />
          <ProfileLink
            icon={FaGithub}
            url="https://github.com/diogolpievan"
            size={46}
          />
        </div>
      </div>
    </section>
  );
};

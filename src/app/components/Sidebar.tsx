import Link from "next/link";
import { FaFigma, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {

  const links = ["#projects", "#about", "/contact", "/blog", "/resume"];
  const socials = [
    {
      icon: <FaLinkedin key="linkedin" />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <FaGithub key="github" />,
      link: "https://github.com/",
    },
    {
      icon: <FaXTwitter key="twitter" />,
      link: "https://x.com/",
    },
    {
      icon: <FaFigma key="figma" />,
      link: "https://www.figma.com/",
    },
  ];

  return (

    <aside className="flex hover:text-sky-500 fixed flex-col h-screen ml-6 w-48 ">
      <Link href="/" className="text-slate-100 text-4xl mt-10">M<span className="text-emerald-500 font-bold">AA</span>B</Link>
      <nav className="flex flex-col gap-10 mt-10">
      {links.map((link, index) =>(
          <Link key={index} href={link} className="group capitalize text-slate-100 hover:text-sky-500 flex items-center  gap-1 text-xl w-fit ">
          <MdSubdirectoryArrowRight className="group-hover:visible invisible" />{link.slice(1,)}
        </Link>
      ))}
      </nav>
      <div className="flex mt-auto mb-10 ml-6 flex-col gap-6">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:text-sky-400 text-2xl">
            {social.icon}
          </a>
        ))}
      </div>

    </aside>
  );
}

export default Sidebar;


import { pdf2word,qrgen,img2text } from "../assets";

export const tools = [
    {
      name: "PDF to Word",
      description:"Easily convert PDF files into editable Microsoft Word documents, preserving the original layout and formatting, for seamless editing and modification.",
      image: pdf2word,
      link: "pdf2word"
    },
    {
      name: "Image to Text",
      description:"Extract text from images or scanned documents using OCR technology to convert it into editable and searchable text, facilitating efficient handling, editing, and storage of textual information.",
      image: img2text,
      link: "img2text"

    },
    {
      name: "QR Code Generator",
      description:"Generate custom QR codes effortlessly to share various types of information and make it easy for users to scan and decode using smartphones or QR code scanners.",
      image: qrgen,
      link: "qrgen"
    },
  ];


export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];

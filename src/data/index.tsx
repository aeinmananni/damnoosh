import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import type { LinksType } from '../models';

export const LINK_ITEMS: LinksType[] = [
  { id: 1, label: 'Home', link: '/', icon: <AiFillHome /> },
  { id: 2, label: 'Blog', link: 'blog', icon: <FaRegNewspaper /> },
  { id: 3, label: 'Contact Us', link: 'contact-us', icon: <MdContactPhone /> },
  { id: 4, label: 'About Us', link: 'about-us', icon: <AiOutlineInfoCircle /> },
];

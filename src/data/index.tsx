import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import granit_image from '../images/GranitImages.jpg';
import stone_image1 from '../images/stone-image1.jpg';
import stone_image2 from '../images/stone-image2.jpg';
import stone_image3 from '../images/stone-image3.jpg';
import stone_image4 from '../images/stone-image4.jpg';
import stone_image5 from '../images/stone-image5.jpg';
import stone_image6 from '../images/stone-image6.jpg';
import stone_image7 from '../images/stone-image7.jpg';
import Categoires_image1 from '../images/stone-categories-images/categories-image1.jpg';
import type { LinksType, StoneImagesType, StoneCategorisType } from '../models';

export const LINK_ITEMS: LinksType[] = [
  { id: 1, label: 'Home', link: '/', icon: <AiFillHome /> },
  { id: 2, label: 'Blog', link: 'blog', icon: <FaRegNewspaper /> },
  { id: 3, label: 'Contact Us', link: 'contact-us', icon: <MdContactPhone /> },
  { id: 4, label: 'About Us', link: 'about-us', icon: <AiOutlineInfoCircle /> },
];

export const STONE_IMAGE_ITEMS: StoneImagesType[] = [
  { id: 1, image: granit_image, alt: '#1' },
  { id: 2, image: stone_image1, alt: '#1' },
  { id: 3, image: stone_image2, alt: '#1' },
  { id: 4, image: stone_image3, alt: '#1' },
  { id: 5, image: stone_image4, alt: '#1' },
  { id: 6, image: stone_image5, alt: '#1' },
  { id: 7, image: stone_image6, alt: '#1' },
  { id: 8, image: stone_image7, alt: '#1' },
];

export const STONE_CATEGORIES_ITEMS: StoneCategorisType[] = [
  { id: 1, image: Categoires_image1, text: 'decorativeStones' },
  { id: 2, image: Categoires_image1, text: 'decorativeStones' },
  { id: 3, image: Categoires_image1, text: 'decorativeStones' },
];

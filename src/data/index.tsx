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
import image1_club from '../images/customer-club-join-image/image1-club.jpg';
import image2_club from '../images/customer-club-join-image/image2-club.jpg';
import image3_club from '../images/customer-club-join-image/image3-club.jpg';
import image4_club from '../images/customer-club-join-image/image4-club.jpg';
import image5_club from '../images/customer-club-join-image/image5-club.jpg';
import image6_club from '../images/customer-club-join-image/image6-club.jpg';
import image7_club from '../images/customer-club-join-image/image7-club.jpg';
import type { LinksType, StoneImagesType, StoneCategorisType, ProjectsSampleType } from '../models';

export const LINK_ITEMS: LinksType[] = [
  { id: 1, label: 'Home', link: '/', icon: <AiFillHome /> },
  { id: 2, label: 'Blog', link: 'blog', icon: <FaRegNewspaper /> },
  { id: 3, label: 'Contact Us', link: 'contact-us', icon: <MdContactPhone /> },
  { id: 4, label: 'About Us', link: 'about-us', icon: <AiOutlineInfoCircle /> },
];

export const STONE_IMAGE_ITEMS: StoneImagesType[] = [
  { id: 1, image: granit_image },
  { id: 2, image: stone_image1 },
  { id: 3, image: stone_image2 },
  { id: 4, image: stone_image3 },
  { id: 5, image: stone_image4 },
  { id: 6, image: stone_image5 },
  { id: 7, image: stone_image6 },
  { id: 8, image: stone_image7 },
];

export const STONE_CATEGORIES_ITEMS: StoneCategorisType[] = [
  { id: 1, image: Categoires_image1, text: 'decorativeStones' },
  { id: 2, image: Categoires_image1, text: 'decorativeStones' },
  { id: 3, image: Categoires_image1, text: 'decorativeStones' },
];

export const PROJECTS_SAMPLE: ProjectsSampleType[] = [
  {
    id: 1,
    image: granit_image,
    projectName: {
      en: 'Royal Tower Renovation',
      ar: 'تجديد برج رويال',
      de: 'Renovierung des Royal Towers',
    },
    location: {
      en: 'London, United Kingdom',
      ar: 'لندن، المملكة المتحدة',
      de: 'London, Vereinigtes Königreich',
    },
    stoneType: {
      en: 'White Marble',
      ar: 'رخام أبيض',
      de: 'Weißer Marmor',
    },
    description: {
      en: 'Renovation of a luxury tower with elegant white marble.',
      ar: 'تجديد برج فاخر باستخدام الرخام الأبيض الأنيق.',
      de: 'Renovierung eines Luxusturms mit elegantem weißem Marmor.',
    },
  },
  {
    id: 2,
    image: granit_image,
    projectName: {
      en: 'Palm Resort Expansion',
      ar: 'توسعة منتجع بالم',
      de: 'Erweiterung des Palm Resorts',
    },
    location: {
      en: 'Dubai, United Arab Emirates',
      ar: 'دبي، الإمارات العربية المتحدة',
      de: 'Dubai, Vereinigte Arabische Emirate',
    },
    stoneType: {
      en: 'Golden Travertine',
      ar: 'ترافرتين ذهبي',
      de: 'Goldener Travertin',
    },
    description: {
      en: 'Resort expansion featuring golden travertine in pool and lobby.',
      ar: 'توسعة المنتجع باستخدام الترافرتين الذهبي في المسبح والردهة.',
      de: 'Resort-Erweiterung mit goldenem Travertin in Pool und Lobby.',
    },
  },
  {
    id: 3,
    image: granit_image,
    projectName: {
      en: 'Berlin Central Plaza',
      ar: 'ساحة برلين المركزية',
      de: 'Berliner Zentralplatz',
    },
    location: {
      en: 'Berlin, Germany',
      ar: 'برلين، ألمانيا',
      de: 'Berlin, Deutschland',
    },
    stoneType: {
      en: 'Black Granite',
      ar: 'غرانيت أسود',
      de: 'Schwarzer Granit',
    },
    description: {
      en: 'Public square restored with durable black granite flooring.',
      ar: 'ساحة عامة تم ترميمها باستخدام أرضيات الغرانيت الأسود المتين.',
      de: 'Öffentlicher Platz mit strapazierfähigem schwarzem Granit restauriert.',
    },
  },
  {
    id: 4,
    image: granit_image,
    projectName: {
      en: 'Westminster Business Center',
      ar: 'مركز الأعمال في وستمنستر',
      de: 'Westminster Business Center',
    },
    location: {
      en: 'London, United Kingdom',
      ar: 'لندن، المملكة المتحدة',
      de: 'London, Vereinigtes Königreich',
    },
    stoneType: {
      en: 'Beige Limestone',
      ar: 'حجر جيري بيج',
      de: 'Beiger Kalkstein',
    },
    description: {
      en: 'Modern business center designed with natural beige limestone.',
      ar: 'مركز أعمال حديث مصمم باستخدام الحجر الجيري البيج الطبيعي.',
      de: 'Modernes Geschäftsgebäude mit natürlichem beigem Kalkstein gestaltet.',
    },
  },
];

export const CUSTOMER_CLUB_GALLARY: StoneImagesType[] = [
  { id: 1, image: image1_club },
  { id: 2, image: image2_club },
  { id: 3, image: image3_club },
  { id: 7, image: image7_club },
  { id: 4, image: image4_club },
  { id: 5, image: image5_club },
  { id: 6, image: image6_club },
];

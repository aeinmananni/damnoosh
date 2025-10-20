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
import WhatsUpImage from "../images/whatsapp_1400855.png";
import intagramImage from "../images/instagram_4923005.png";
import phoneImage from "../images/telephone_4982273.png";
import emailImage from "../images/email-image.png";
import addressImage from "../images/address_1295130.png";
import type {
  LinksType,
  StoneImagesType,
  StoneCategorisType,
  ProjectsSampleType,
  CommentsType,
  BlogType,
  ContactType,
} from "../models";
import blogImage1 from "../images/qulity-image1.jpg";
import blogImage2 from "../images/blog-image2.jpg";
import blogImage3 from "../images/blog-image3.jpg";
import blogImage4 from "../images/blog-image4.jpg";

export const LINK_ITEMS: LinksType[] = [
  { id: 1, label: "Home", link: "/", icon: <AiFillHome /> },
  { id: 2, label: "Blog", link: "blog", icon: <FaRegNewspaper /> },
  { id: 3, label: "Contact Us", link: "contact-us", icon: <MdContactPhone /> },
  { id: 4, label: "About Us", link: "about-us", icon: <AiOutlineInfoCircle /> },
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
  { id: 1, image: Categoires_image1, text: "decorativeStones" },
  { id: 2, image: Categoires_image1, text: "decorativeStones" },
  { id: 3, image: Categoires_image1, text: "decorativeStones" },
];

export const PROJECTS_SAMPLE: ProjectsSampleType[] = [
  {
    id: 1,
    image: granit_image,
    projectName: {
      en: "Royal Tower Renovation",
      ar: "تجديد برج رويال",
      de: "Renovierung des Royal Towers",
    },
    location: {
      en: "London, United Kingdom",
      ar: "لندن، المملكة المتحدة",
      de: "London, Vereinigtes Königreich",
    },
    stoneType: {
      en: "White Marble",
      ar: "رخام أبيض",
      de: "Weißer Marmor",
    },
    description: {
      en: "Renovation of a luxury tower with elegant white marble.",
      ar: "تجديد برج فاخر باستخدام الرخام الأبيض الأنيق.",
      de: "Renovierung eines Luxusturms mit elegantem weißem Marmor.",
    },
  },
  {
    id: 2,
    image: granit_image,
    projectName: {
      en: "Palm Resort Expansion",
      ar: "توسعة منتجع بالم",
      de: "Erweiterung des Palm Resorts",
    },
    location: {
      en: "Dubai, United Arab Emirates",
      ar: "دبي، الإمارات العربية المتحدة",
      de: "Dubai, Vereinigte Arabische Emirate",
    },
    stoneType: {
      en: "Golden Travertine",
      ar: "ترافرتين ذهبي",
      de: "Goldener Travertin",
    },
    description: {
      en: "Resort expansion featuring golden travertine in pool and lobby.",
      ar: "توسعة المنتجع باستخدام الترافرتين الذهبي في المسبح والردهة.",
      de: "Resort-Erweiterung mit goldenem Travertin in Pool und Lobby.",
    },
  },
  {
    id: 3,
    image: granit_image,
    projectName: {
      en: "Berlin Central Plaza",
      ar: "ساحة برلين المركزية",
      de: "Berliner Zentralplatz",
    },
    location: {
      en: "Berlin, Germany",
      ar: "برلين، ألمانيا",
      de: "Berlin, Deutschland",
    },
    stoneType: {
      en: "Black Granite",
      ar: "غرانيت أسود",
      de: "Schwarzer Granit",
    },
    description: {
      en: "Public square restored with durable black granite flooring.",
      ar: "ساحة عامة تم ترميمها باستخدام أرضيات الغرانيت الأسود المتين.",
      de: "Öffentlicher Platz mit strapazierfähigem schwarzem Granit restauriert.",
    },
  },
  {
    id: 4,
    image: granit_image,
    projectName: {
      en: "Westminster Business Center",
      ar: "مركز الأعمال في وستمنستر",
      de: "Westminster Business Center",
    },
    location: {
      en: "London, United Kingdom",
      ar: "لندن، المملكة المتحدة",
      de: "London, Vereinigtes Königreich",
    },
    stoneType: {
      en: "Beige Limestone",
      ar: "حجر جيري بيج",
      de: "Beiger Kalkstein",
    },
    description: {
      en: "Modern business center designed with natural beige limestone.",
      ar: "مركز أعمال حديث مصمم باستخدام الحجر الجيري البيج الطبيعي.",
      de: "Modernes Geschäftsgebäude mit natürlichem beigem Kalkstein gestaltet.",
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

export const COMMENTS_ITEM: CommentsType[] = [
  { id: 1, name: "James", text: "Great service and beautiful stone quality!" },
  {
    id: 2,
    name: "Olivia",
    text: "The design team was very professional and creative.",
  },
  {
    id: 3,
    name: "William",
    text: "Fast delivery and amazing customer support.",
  },
  { id: 4, name: "Emma", text: "Excellent craftsmanship and elegant finish!" },
  {
    id: 5,
    name: "Michael",
    text: "The marble we ordered looks stunning in our new lobby.",
  },
  {
    id: 6,
    name: "Sophia",
    text: "Very satisfied with the attention to detail and precision cutting.",
  },
  {
    id: 7,
    name: "Benjamin",
    text: "High-quality materials and professional installation team.",
  },
  {
    id: 8,
    name: "Isabella",
    text: "Our villa looks luxurious thanks to the natural stones we chose.",
  },
  {
    id: 9,
    name: "Lucas",
    text: "Responsive team and great communication throughout the project.",
  },
  {
    id: 10,
    name: "Mia",
    text: "They delivered earlier than expected without compromising quality.",
  },
  {
    id: 11,
    name: "Henry",
    text: "The granite surface is durable and easy to maintain.",
  },
  {
    id: 12,
    name: "Amelia",
    text: "We received excellent design suggestions that matched our vision.",
  },
  {
    id: 13,
    name: "Alexander",
    text: "Friendly staff and high professionalism in all stages.",
  },
  {
    id: 14,
    name: "Charlotte",
    text: "The patterns and colors of the stones are absolutely beautiful.",
  },
  {
    id: 15,
    name: "Daniel",
    text: "Our hotel entrance now feels premium and inviting.",
  },
  {
    id: 16,
    name: "Evelyn",
    text: "Smooth transaction and transparent pricing from the start.",
  },
  {
    id: 17,
    name: "Matthew",
    text: "The best stone supplier we’ve worked with so far!",
  },
  {
    id: 18,
    name: "Harper",
    text: "They customized the stone cuts perfectly for our interior walls.",
  },
  {
    id: 19,
    name: "Joseph",
    text: "Strongly recommend for anyone looking for elegant natural stones.",
  },
  {
    id: 20,
    name: "Abigail",
    text: "Our terrace looks incredible after the renovation with their stones.",
  },
];

export const BLOG_ITEMS: BlogType[] = [
  {
    id: 1,
    image: blogImage1,
    title: {
      ar: `التعرف على الحجر الفاخر وطريقة إنتاج الحجر عالي الجودة لتصميم وواجهات المباني المقدمة`,
      de: `Erkennung von hochwertigem Stein und Herstellung von Qualitätsstein für Architektur und FassadengestaltungEinleitung`,
      en: `EUnderstanding Premium Stone and How to Produce High-Quality Stone for Building Design and Facades Introduction`,
    },
    exp: {
      ar: `اختيار الحجر المناسب وإنتاجه بشكل قياسي هما عاملان حاسمان في تحديد المظهر النهائي، والمتانة، وتكاليف الصيانة للواجهة أو التصميم الداخلي.
الحجر الجيد لا يمنح فقط مظهراً جمالياً راقياً، بل يضمن أيضًا مقاومة للعوامل الجوية، وامتصاصاً منخفضاً للماء، وثباتاً في اللون، وسهولة في التركيب.
فيما يلي سنستعرض خطوة بخطوة خصائص الحجر الجيد، وطرق فحص الجودة، ومراحل الإنتاج، وأهم النصائح للتركيب والصيانة.`,
      de: `Die Auswahl des richtigen Steins und seine standardisierte Produktion sind zwei entscheidende Faktoren, die das endgültige Erscheinungsbild, die Haltbarkeit und die Wartungskosten einer Fassade oder Innenraumgestaltung bestimmen.
Ein hochwertiger Stein bietet nicht nur eine bessere Ästhetik, sondern auch Witterungsbeständigkeit, geringe Wasseraufnahme, Farbkonstanz und einfache Installation.
Im Folgenden werden wir Schritt für Schritt die Merkmale eines guten Steins, die Methoden zur Qualitätsprüfung, die Produktionsphasen sowie Tipps zur Installation und Pflege erläutern.`,
      en: `Choosing the right stone and ensuring its proper production are two decisive factors that influence the final appearance, durability, and maintenance costs of a façade or interior design. A high-quality stone not only enhances visual appeal but also guarantees resistance to weather conditions, low water absorption, color stability, and ease of installation.
In the following, we will step by step explore the characteristics of good stone, quality inspection methods, production stages, and key tips for installation and maintenance.`,
    },
  },
  {
    id: 2,
    image: blogImage2,
    title: {
      ar: `الخصائص التقنية`,
      de: `Technische Eigenschaften`,
      en: `Technical Features`,
    },
    exp: {
      ar: `امتصاص منخفض للماء: يجب أن يتميز الحجر المناسب للواجهات بامتصاص منخفض للماء (عادة أقل من نسبة معينة حسب نوع الحجر). الامتصاص العالي للماء يؤدي إلى التجمّد، وتكوّن الأملاح، وتقشّر السطح.

قوة ضغط وانحناء عالية: يجب أن يكون الحجر قادرًا على تحمّل الأوزان والضغوط البيئية.

الكثافة والتجانس: الحجر الأكثر كثافة أقل عرضة للتشقق ويعطي قطعًا أكثر انتظامًا.

مقاومة للتجمّد والذوبان: ضرورية خصوصاً في المناطق الباردة.

مقاومة للتآكل والخدش: مهمة للأرضيات والأماكن ذات الحركة الكثيفة.

ثبات اللون ضد الأشعة فوق البنفسجية: يجب أن يحتفظ الحجر بلونه عند التعرض لأشعة الشمس.`,
      de: `Geringe Wasseraufnahme: Ein geeigneter Fassadenstein sollte eine geringe Wasseraufnahme aufweisen (bei Außenanwendungen in der Regel unter einem bestimmten Prozentsatz, je nach Steinart). Eine hohe Wasseraufnahme führt zu Frostschäden, Ausblühungen und Abplatzungen.

Hohe Druck- und Biegefestigkeit: Der Stein muss in der Lage sein, Gewicht und Umwelteinflüsse zu widerstehen.

Dichte und Homogenität: Dichtere Steine brechen seltener und lassen sich gleichmäßiger schneiden.

Frostbeständigkeit: Besonders wichtig in kalten Klimazonen.

Widerstand gegen Abrieb und Kratzer: Wichtig für Bodenbeläge und stark frequentierte Bereiche.

Farbstabilität unter UV-Strahlung: Der Stein sollte bei Sonneneinstrahlung nur minimale Farbveränderungen aufweisen.`,
      en: `Low Water Absorption: A suitable façade stone should have low water absorption (for exterior applications, usually below a certain percentage depending on the type of stone). High water absorption can lead to freezing, efflorescence, and surface flaking.

High Compressive and Flexural Strength: The stone must be able to withstand weight and environmental pressures.

Density and Uniformity: Denser stones are less likely to crack or break and provide smoother, more consistent cuts.

Frost Resistance: Particularly important in cold climates.

Resistance to Abrasion and Scratching: Essential for flooring and high-traffic areas.

Color Stability under UV Exposure: The stone should show minimal color change when exposed to sunlight.`,
    },
  },
  {
    id: 3,
    image: blogImage3,
    title: {
      ar: `لاختبارات والطرق البسيطة لتقييم جودة الحجر أثناء أخذ العينات`,
      de: `Einfache Tests und Methoden zur Bewertung der Steinqualität während der Probenahme`,
      en: `Simple Tests and Methods for Evaluating Stone Quality During Sampling`,
    },
    exp: {
      ar: `اختبار امتصاص الماء: وزن العينة الجافة، ثم نقعها وإعادة وزنها؛ الفرق في الوزن بالنسبة للوزن الأصلي يدل على نسبة امتصاص الماء.

اختبار الصدمة / المطرقة: التحقق مما إذا كان الحجر يتشقق أو يتكسر عند الضرب الخفيف.

اختبار الحمض (لبعض الاستخدامات): وضع حمض ضعيف وملاحظة التفاعل — بعض الأحجار (مثل الحجر الجيري أو الترافرتين) تتفاعل مع الحمض.

مراقبة الشقوق والعروق الكاذبة: الشقوق المخفية أو العروق الطرية قد تسبب مشاكل مع مرور الوقت.

فحص السطح وانتظام القطع: التأكد من أن القطع ناعمة والحواف سليمة.`,
      de: `Wasseraufnahme-Test: Das trockene Muster wiegen, dann einweichen und erneut wiegen; die Gewichtsdifferenz zeigt den Prozentsatz der Wasseraufnahme.

Schlag- bzw. Hammer-Test: Überprüfen, ob der Stein bei leichtem Schlag Risse bekommt oder zerbricht.

Säure-Test (für bestimmte Anwendungen): Eine schwache Säure auftragen und die Reaktion beobachten — einige Steine (z. B. Kalkstein oder Travertin) reagieren mit Säure.

Beobachtung von Rissen und falschen Adern: Verborgene Risse oder weiche Adern können im Laufe der Zeit Probleme verursachen.

Überprüfung der Oberflächen- und Schnittgleichmäßigkeit: Sicherstellen, dass die Schnitte glatt sind und die Kanten unbeschädigt bleiben.`,
      en: `Water Absorption Test: Weigh the dry sample, then soak it and weigh it again; the weight difference relative to the original shows the percentage of water absorption.

Impact/Hammer Test: Check whether the stone cracks or breaks when struck lightly.

Acid Test (for specific uses): Apply a weak acid and observe any reaction — some stones (like limestone or travertine) react with acid.

Observation of Fissures and False Veins: Hidden cracks or soft veins can cause problems over time.

Surface and Cut Uniformity Check: Make sure the cuts are smooth and edges are intact.`,
    },
  },
  {
    id: 4,
    image: blogImage4,
    title: {
      ar: `نصائح لتركيب الحجر في الواجهة`,
      de: `Hinweise zur Steinmontage an Fassaden`,
      en: `Stone Installation Tips for Facades`,
    },
    exp: {
      ar: `التركيب الصحيح لا يقل أهمية عن جودة الحجر نفسه:

اختيار القاعدة المناسبة: يجب أن تكون القاعدة جافة ومستوية وثابتة، سواء للتركيب بالغراء أو بالأنظمة الميكانيكية.

أنظمة التركيب:

التركيب الميكانيكي (المسامير والحوامل): أكثر أمانًا للواجهات الخارجية أو الأحجار الثقيلة.

التركيب بالغراء أو الملاط: مناسب للأحجار الخفيفة أو للاستخدامات الداخلية.

نظام الواجهة المهوّاة: شائع في العمارة الحديثة، يسمح بالتهوية ويقلل انتقال الحرارة.

الفواصل والعزل: استخدام الملفات والرغوة المناسبة لمنع تسرب الماء. يجب تنفيذ الفواصل بشكل صحيح مع مراعاة فواصل التمدد.

التسوية والمحاذاة: يجب أن يكون التركيب دقيقًا لضمان استقامة الصفوف ومظهر احترافي للواجهة النهائية.

التحكم في الوزن والمسافات بين التوصيلات: مهم خصوصًا في الأحجار الكبيرة والطويلة.`,
      de: `Die richtige Montage ist genauso wichtig wie die Qualität des Steins selbst:

Auswahl des richtigen Untergrunds: Ein trockener, ebener und stabiler Untergrund ist erforderlich – entweder für Klebe- oder mechanische Befestigung.

Montagesysteme:

Mechanische Befestigung (Anker, Halterungen): Sicherer für Außenfassaden und schwere Steine.

Kleb- oder Mörtelmontage: Geeignet für leichtere Steine oder Innenanwendungen.

Hinterlüftete Fassade: Beliebt bei modernen Fassaden; ermöglicht Belüftung und reduziert Wärmeübertragung.

Fugen und Abdichtung: Verwendung geeigneter Profile und Schaumstoffe zur Vermeidung von Wassereindringung. Richtige Verfugung und Dehnungsfugen sind wichtig.

Ausrichtung und Ebenheit: Die Montage muss präzise erfolgen, damit die Reihen gerade bleiben und ein professionelles Erscheinungsbild entsteht.

Kontrolle von Gewicht und Fugenabständen: Besonders wichtig bei großen oder hohen Steinplatten.`,
      en: `Proper installation is just as important as the quality of the stone itself:

Choosing the Right Substrate: Use a dry, flat, and stable base for adhesive or mechanical stone fixing.

Installation Systems:

Mechanical Fixing (anchors, brackets): Safer for exterior façades and heavy stones.

Adhesive/Mortar Fixing: Suitable for lightweight stones or interior applications.

Ventilated Façade System: Popular in modern architecture; allows ventilation and reduces heat transfer.

Joints and Sealing: Use proper profiles and foam to prevent water infiltration. Ensure correct joint sealing and expansion gaps.

Leveling and Surface Alignment: Installation must be precise to keep rows straight and achieve a professional appearance.

Weight and Connection Spacing Control: Especially important for large or tall stone panels.`,
    },
  },
];

export const CONTACT_ITEMS: ContactType[] = [
  { id: 1, image: WhatsUpImage, text: "WhatsUp", info: "WhatsUp Link" },
  {
    id: 2,
    image: intagramImage,
    text: "Instagram",
    info: "https://samasang.com",
  },
  {
    id: 3,
    image: phoneImage,
    text: "Phone",
    info: "+971 4 123 4567",
  },
  {
    id: 4,
    image: emailImage,
    text: "Email",
    info: "contact@samasang.com",
  },
  {
    id: 5,
    image: addressImage,
    text: "Address",
    info: "Business Bay St., No.123, Example Tower, 8th Floor, Dubai, United Arab Emirates",
  },
];
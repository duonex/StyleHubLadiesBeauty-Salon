import type { SalonInfo, SalonService, GoogleReview, ServicePackage, SalonCategoryMeta, BridalPackage } from '../types/salon';
import threadingImg from "../assets/service-images/threading.jpg";
import BabyCutImg from "../assets/service-images/BabyCut.jpg";
import DoraImg from "../assets/service-images/dora.jpg";
import mushroomcutImg from "../assets/service-images/mushroomcut.jpg";
import upperlipthreading from "../assets/service-images/upperlipthreading.jpg";
import facethreadingimg from "../assets/service-images/facethreading.jpg";
import ucutimg from "../assets/service-images/ucut.jpg";
import Layercutimg from "../assets/service-images/Layercut.jpg";
import StraightCutImg from "../assets/service-images/StraightCut.jpg";
import StepCutImg from "../assets/service-images/StepCut.jpg";
import FeatherCutImg from "../assets/service-images/FeatherCut.jpg";
import FringeBangsImg from "../assets/service-images/FringeBangs.jpg";
import cleanupfaceImg from "../assets/service-images/cleanup.jpg";
import GoldfacialImg from "../assets/service-images/Goldfacial.jpg";
import DtanImg from "../assets/service-images/d-tan.jpg";
import WhiteningFacialImg from "../assets/service-images/WhiteningFacial.jpg";
import pedicareImg from "../assets/service-images/pedicare.jpg";
import FruitFacialImg from "../assets/service-images/FruitFacial.jpg";
import daimondfaceImg from "../assets/service-images/daimondface.jpg";
import PapayaFacialImg from "../assets/service-images/PapayaFacial.jpg";
import WineFacialImg from "../assets/service-images/WineFacial.jpg";
import HerbalFacial from "../assets/service-images/HerbalFacial.jpg";
import medicareImg from "../assets/service-images/medicare.jpg";
import PearlFacialImg from "../assets/service-images/PearlFacial.jpg";
import BridalAdvanceFacialImg from "../assets/service-images/BridalAdvanceFacial.jpg";
import GoldAdvanceFacialImg from "../assets/service-images/GoldAdvanceFacial.jpg";
import BridalNormalFacialImg from "../assets/service-images/BridalNormalFacial.jpg";
import DtanfaceImg from "../assets/service-images/d-tanface.jpg";
import dtanhandImg from "../assets/service-images/D-tanhand.jpg";
import underarmsImg from "../assets/service-images/D-tanunderarms.jpg";
import tanbackneckImg from "../assets/service-images/D-tanbackneck.jpg";
import dtanleg from "../assets/service-images/d-tanleg.jpg";
import underarmswaxImg from "../assets/service-images/underlipswax.png";
import facewaxImg from "../assets/service-images/facewax.jpg";
import fullbodywaxImg from "../assets/service-images/fullbodywax.png";
import handhalfImg from "../assets/service-images/Handhalf.png";
import legfullwaxImg from "../assets/service-images/fulllegwax.png";
import fullhandwaxImg from "../assets/service-images/fullhandwax.jpg";
import backneckwaxImg from "../assets/service-images/backneckwax.png";
import underlipwaxImg from "../assets/service-images/underlipswax.png";
import leghalfwaxImg from "../assets/service-images/halflegwax.jpg";
import StraighteningHairImg from "../assets/service-images/StraighteningHair.jpg";
import blastdryhairImg from "../assets/service-images/blastdryhair.png";
import CurlingHairImg from "../assets/service-images/CurlingHair.png";
import bleachfaceImg from "../assets/service-images/bleachface.png";
import bleachhandImg from "../assets/service-images/bleachhand.png";
import bleachlegImg from "../assets/service-images/bleachleg.png";
import bleachunderarmsImg from "../assets/service-images/bleachunderarms.png";
import bleachbackneckImg from "../assets/service-images/bleachbackneck.png";
import HydraFacialImg from "../assets/service-images/HydraFacial.jpg";
import koreanskinImg from "../assets/service-images/koreanskin.png";
import facialtreatmentImg from "../assets/service-images/facialtreatment.jpg";
import HdmakeupImg from "../assets/service-images/hdmakeup.png";
import waterproofmakeupImg from "../assets/service-images/waterproofmakeup.png";
import sareedrapingImg from "../assets/service-images/sareedrapingimag.jpg";
import airbrushImg from "../assets/service-images/airbursh.png";
import boxdropingImg from "../assets/service-images/sareedraping.jpg";
import normalmakeupImg from "../assets/service-images/nomralmakeup.jpg";
import PleatingsareeImg from "../assets/service-images/Pleatingsaree.png";
import hairspaImg from "../assets/service-images/hairspa.png";
import antihairspaImg from "../assets/service-images/antihairspa.png";
import antiDandruffImg from "../assets/service-images/antiDandruff.png";
import hairgrowthImg from "../assets/service-images/hairgrowth.png";
import KeratinHairImg from "../assets/service-images/KeratinHair.png";
import StraighteningHairImg1 from "../assets/service-images/StraighteningHair.png";
import smoothingHairImg from "../assets/service-images/smoothingHair.jpg";
import BotoxhairImg from "../assets/service-images/Botoxhair.jpg";
import NanoBlasfaHair from "../assets/service-images/nanohair.png";
import blackhennaImg from "../assets/service-images/blackhenna.png";
import normalhennaImg from "../assets/service-images/normalhenna.png";
import creamColouringImg from "../assets/service-images/creamColouring.png";
import haircolouringImg from "../assets/service-images/haircolouring.png";
import HotOilMassageImg from "../assets/service-images/HotOilMassage.png";
import dandrufftreatmentImg from "../assets/service-images/dandrufftreatment.png";
import hairgrowthtreatmentImg from "../assets/service-images/grwoothtreatment.png";
import HairExtensionImg from "../assets/service-images/HairExtension.png";
import EarcobeImg from "../assets/service-images/Earcobe.png";
import liceremoveImg from "../assets/service-images/liceremove.png";

// 6 Signature Bridal Studio Package Images
import bridalNonHdImg from "../assets/bridal-studio-images/non-hd-bridal.jpg";
import bridalHdImg from "../assets/bridal-studio-images/hd-bridal.jpg";
import bridalUltraHdImg from "../assets/bridal-studio-images/ultra-hd-muhurtham.jpg";
import bridalGlassSkinImg from "../assets/bridal-studio-images/glass-skin-bridal.jpg";
import bridalAirbrushImg from "../assets/bridal-studio-images/airbrush-bridal.jpg";
import bridalWaterproofImg from "../assets/bridal-studio-images/waterproof-bridal.jpg";










export const SALON_INFO: SalonInfo = {
  name: "Style Hub Ladies Beauty Salon",
  category: "Beauty Parlour & Bridal Studio",
  rating: 5.0,
  reviewCount: 41,
  address: {
    line1: "Pothys Nagar",
    plaza: "Mah Plaza",
    road: "Nagercoil Road",
    area: "KTC Nagar",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    pincode: "627011",
    full: "Pothys Nagar, Mah Plaza, Nagercoil Road, KTC Nagar, Tirunelveli, Tamil Nadu 627011"
  },
  phone: "09488676151",
  phoneDisplay: "094886 76151",
  whatsappNumber: "919488676151",
  social: {
    instagram: "https://www.instagram.com/stylehub_ladies_beauty_salon/",
    facebook: "https://www.facebook.com/stylehubladiesbeautysalon/",
    whatsapp: "https://wa.me/919488676151?text=Hello%20Style%20Hub%20Ladies%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20pricing."
  },
  hours: {
    display: "Open Daily · Closes 8:00 PM",
    openTime: "09:30 AM",
    closeTime: "08:00 PM",
    days: "Monday – Sunday"
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Style+Hub+Ladies+Beauty+Salon+Mah+plaza+nagarcoil+road+KTC+Nagar+Tirunelveli"
};

// 18 Official Categories Metadata (Arranged in descending order of popularity / frequency of use)
export const SALON_CATEGORIES: SalonCategoryMeta[] = [
  {
    id: 'threading',
    name: 'Threading',
    order: 1,
    description: 'Organic cotton precision threading for sharp arched brows, upper lip & full face.',
    icon: 'Eye',
    image: threadingImg,
    count: 3,
  },
  {
    id: 'hair-cut',
    name: 'Hair Cut',
    order: 2,
    description: 'Designer straight, U-cut, multi-layer, step cut, fringe/bangs & feather cuts.',
    icon: 'Scissors',
    image:StepCutImg,
    count: 6,
  },
  {
    id: 'facial-service',
    name: 'Facial Service',
    order: 3,
    description: 'Comprehensive clean-up, fruit, wine, gold, diamond, bridal facials, pedi & medi care.',
    icon: 'Gem',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    count: 15,
  },
  {
    id: 'wax',
    name: 'Wax',
    order: 4,
    description: 'Smooth honey & Rica peel waxing for lip, arms, legs, face, back & full body.',
    icon: 'Feather',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    count: 9,
  },
  {
    id: 'd-tan',
    name: 'D-Tan',
    order: 5,
    description: 'Deep tan reversal & lactic enzyme polishing across face, limbs, back & under arms.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    count: 5,
  },
  {
    id: 'hair-wash-blow-dry',
    name: 'Hair Wash + Blow Dry',
    order: 6,
    description: 'Deep cleansing shampoo & conditioning paired with blast dry, straightening or curls.',
    icon: 'Wind',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    count: 3,
  },
  {
    id: 'bleach',
    name: 'Bleach',
    order: 7,
    description: 'Gentle oxy & herbal skin lightening for face, hands, legs, back neck & under arms.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b9e07897?q=80&w=800&auto=format&fit=crop',
    count: 5,
  },
  {
    id: 'facial',
    name: 'Facial',
    order: 8,
    description: 'Specialist clinical facials, hydra facial & luminous Korean glass skin glow.',
    icon: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1512290903671-17adc82f0590?q=80&w=800&auto=format&fit=crop',
    count: 3,
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    order: 9,
    description: 'Normal, HD, waterproof & airbrush bridal makeup with master saree pleating & draping.',
    icon: 'Crown',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    count: 7,
  },
  {
    id: 'spa',
    name: 'Spa',
    order: 10,
    description: 'Deep conditioning hair spa, anti hair fall, anti dandruff & hair growth rituals.',
    icon: 'Flower2',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    count: 4,
  },
  {
    id: 'hair-straightening',
    name: 'Hair Straightening',
    order: 11,
    description: 'Permanent straightening, silk smoothing, keratin protein, botox & nano blasfa.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
    count: 5,
  },
  {
    id: 'hair-dye',
    name: 'Hair Dye',
    order: 12,
    description: 'Pure organic herbal henna, black henna, ammonia-free cream & global hair colouring.',
    icon: 'Palette',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    count: 4,
  },
  {
    id: 'massage',
    name: 'Massage',
    order: 13,
    description: 'Nourishing botanical hot oil scalp & head tension relief massage.',
    icon: 'Heart',
    image: HotOilMassageImg,
    count: 1,
  },
  {
    id: 'treatment',
    name: 'Treatment',
    order: 14,
    description: 'Targeted clinical anti-dandruff & folicle-stimulating hair growth therapy.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    count: 2,
  },
  {
    id: 'kids',
    name: 'Kids',
    order: 15,
    description: 'Gentle, friendly & quick baby cuts, mushroom cuts & Dora styling for little girls.',
    icon: 'Smile',
    image: BabyCutImg,
    count: 3,
  },
  {
    id: 'hair-extension',
    name: 'Hair Extension',
    order: 16,
    description: '100% natural human hair extensions for instant volume, length & bridal styling.',
    icon: 'Crown',
    image: HairExtensionImg,
    count: 1,
  },
  {
    id: 'ear-cobe',
    name: 'Ear Cobe',
    order: 17,
    description: 'Specialized earlobe care, cosmetic repair & supportive ear cobe aesthetic service.',
    icon: 'HeartHandshake',
    image: EarcobeImg,
    count: 1,
  },
  {
    id: 'lice-remove',
    name: 'Lice Remove',
    order: 18,
    description: 'Hygienic, gentle & thorough scalp sanitization and lice removal treatment.',
    icon: 'CheckCircle2',
    image:liceremoveImg,
    count: 1,
  }
];

// Service Popularity Map (Higher score = higher usage frequency / popular demand)
// Based on actual salon appointment and walk-in frequency
export const SERVICE_POPULARITY: Record<string, number> = {
  // 1. Threading (Daily essentials - highest frequency in salon)
  "threading-eyebrow": 99,
  "threading-upper-lip": 98,
  "threading-face-thread": 94,

  // 2. Hair Cut (Daily/weekly high volume)
  "haircut-u-cut": 97,
  "haircut-layer-cut": 96,
  "haircut-straight-cut": 93,
  "haircut-step-cut": 84,
  "haircut-feather-cut": 79,
  "haircut-fringe-bangs": 53,

  // 3. Facials & Clean-Up (Very high demand)
  "facial-clean-up": 95,
  "facial-gold": 88,
  "facial-hydra": 87,
  "facial-korean-glass": 80,
  "facial-dtan-facial": 77,
  "facial-whitening": 71,
  "facial-pedi-care": 65,
  "facial-fruit": 61,
  "facial-diamond": 56,
  "facial-papaya": 50,
  "facial-wine": 47,
  "facial-herbal": 46,
  "facial-medi-care": 42,
  "facial-pearl": 39,
  "facial-treatment": 36,
  "facial-bridal-advance": 33,
  "facial-gold-advance": 32,
  "facial-bridal-normal": 24,

  // 4. Waxing (Regular bi-weekly/monthly grooming)
  "wax-under-arms": 92,
  "wax-hand-full": 86,
  "wax-leg-full": 81,
  "wax-leg-half": 62,
  "wax-hand-half": 60,
  "wax-face": 48,
  "wax-upper-lip": 38,
  "wax-full-body": 37,
  "wax-back-neck": 31,

  // 5. D-Tan (Frequent tan reversal)
  "dtan-face": 91,
  "dtan-hand": 70,
  "dtan-under-arms": 55,
  "dtan-back-neck": 45,
  "dtan-leg": 35,

  // 6. Hair Wash + Blow Dry (Quick daily/event styling)
  "wash-blast-dry": 90,
  "wash-straightening": 72,
  "wash-curling": 59,

  // 7. Bleach (Regular glow & bridal)
  "bleach-face": 89,
  "bleach-hand": 68,
  "bleach-under-arms": 54,
  "bleach-back-neck": 44,
  "bleach-leg": 34,

  // 8. Bridal Makeup (Signature weddings & events)
  "bridal-hd-makeup": 85,
  "bridal-waterproof-makeup": 78,
  "bridal-saree-draping": 76,
  "bridal-airbrush": 63,
  "bridal-normal-makeup": 57,
  "bridal-box-folding": 30,
  "bridal-fluffy-pleating-hanging": 26,

  // 9. Hair Straightening & Keratin
  "straightening-keratin": 82,
  "straightening-permanent": 75,
  "straightening-smoothing": 69,
  "straightening-botox": 58,
  "straightening-nano-blasfa": 40,

  // 10. Spa
  "spa-hair-spa": 83,
  "spa-anti-hair-fall": 66,
  "spa-anti-dandruff": 52,
  "spa-hair-growth": 41,

  // 11. Hair Dye
  "dye-normal-henna": 74,
  "dye-black-henna": 64,
  "dye-cream-colouring": 51,
  "dye-hair-colouring": 43,

  // 12. Massage & Scalp Treatments
  "massage-hot-oil": 73,
  "treatment-dandruff": 67,
  "treatment-hair-growth": 49,

  // 13. Kids
  "kids-baby-cut": 28,
  "kids-dora-cut": 25,
  "kids-mushroom-cut": 22,

  // 14. Least Frequently Used / Specialized / Niche Services
  "hair-extension-service": 18,
  "ear-cobe-service": 14,
  "lice-remove-treatment": 10,
};

// All 18 Official Categories & Their Exact Services (78 Services Total - Prices on Inquiry via Call/WhatsApp)
const RAW_SALON_SERVICES: SalonService[] = [
  // ==========================================
  // 1. Massage (1 Service)
  // ==========================================
  {
    id: "massage-hot-oil",
    name: "Hot Oil Massage",
    category: "massage",
    categoryName: "Massage",
    description: "Therapeutic warm herbal oil scalp massage with acupressure points to boost circulation, relax the mind, and strengthen hair roots.",
    duration: "30 - 45 mins",
    popular: true,
    tag: "Scalp Therapy",
    image: HotOilMassageImg,
    features: ["Warm Ayurvedic botanical oil blend", "Acupressure head & shoulder tension release", "Deep root nourishment & follicle stimulation", "Warm steam towel infusion"]
  },

  // ==========================================
  // 2. Treatment (2 Services)
  // ==========================================
  {
    id: "treatment-dandruff",
    name: "Dandruff Treatment",
    category: "treatment",
    categoryName: "Treatment",
    description: "Intensive anti-microbial scalp purification treatment that eliminates flaking, soothes irritation, and restores optimal scalp pH balance.",
    duration: "45 - 60 mins",
    popular: true,
    tag: "Scalp Care",
    image: dandrufftreatmentImg,
    features: ["Anti-fungal zinc pyrithione & tea tree scrub", "High-frequency scalp stimulation", "Cooling anti-dandruff serum infusion", "Prevents scalp itchiness & recurrence"]
  },
  {
    id: "treatment-hair-growth",
    name: "Hair Growth Treatment",
    category: "treatment",
    categoryName: "Treatment",
    description: "Advanced peptide & botanical root therapy designed to awaken dormant follicles, reduce excessive hair shedding, and encourage thicker hair growth.",
    duration: "60 mins",
    tag: "Density Booster",
    image: hairgrowthtreatmentImg,
    features: ["Biotin & amino peptide booster serum", "Micro-circulation thermal scalp steam", "Follicle strength massage", "Strengthens hair shaft against breakage"]
  },

  // ==========================================
  // 3. Hair Straightening (5 Services)
  // ==========================================
  {
    id: "straightening-permanent",
    name: "Straightening",
    category: "hair-straightening",
    categoryName: "Hair Straightening",
    description: "Permanent structural hair straightening that transforms wavy, unruly hair into glossy, pin-straight, ultra-sleek locks with long-lasting finish.",
    duration: "3 - 4 hours",
    popular: true,
    tag: "Permanent Sleek",
    image: StraighteningHairImg1,
    features: ["L'Oréal X-Tenso / Matrix formula", "Pin-straight mirror shine finish", "Complete humidity resistant seal", "Post-treatment nourishing mask included"]
  },
  {
    id: "straightening-smoothing",
    name: "Smoothing",
    category: "hair-straightening",
    categoryName: "Hair Straightening",
    description: "Gentle hair smoothing treatment that softens wild textures, removes frizzy flyaways, and retains natural movement with silky softness.",
    duration: "2.5 - 3 hours",
    tag: "Silky Soft",
    image: smoothingHairImg,
    features: ["Natural soft movement with zero frizz", "Infused with deep conditioning lipids", "Manageable wash-and-wear daily hair", "Ideal for dry or textured waves"]
  },
  {
    id: "straightening-keratin",
    name: "Keratin",
    category: "hair-straightening",
    categoryName: "Hair Straightening",
    description: "Premium hydrolysed keratin protein infusion that repairs porous hair damage, closes cuticle scales, and delivers up to 90% frizz reduction.",
    duration: "2.5 - 3.5 hours",
    popular: true,
    tag: "Protein Infusion",
    image: KeratinHairImg,
    features: ["Hydrolysed Brazilian keratin protein", "Restores chemically stressed hair", "Glass-like reflective shine & bounce", "Lasts 3 to 5 months with proper care"]
  },
  {
    id: "straightening-botox",
    name: "Botox",
    category: "hair-straightening",
    categoryName: "Hair Straightening",
    description: "Deep anti-aging capillary botox treatment that plumps thinning hair fibers, seals split ends, and injects intense hydration without harsh chemicals.",
    duration: "2 - 3 hours",
    tag: "Hair Rejuvenation",
    image: BotoxhairImg,
    features: ["Hyaluronic acid & collagen complex", "Repairs split ends & brittle fibers", "Lightweight, bouncy & voluminous", "Zero formaldehyde or burning fumes"]
  },
  {
    id: "straightening-nano-blasfa",
    name: "Nano Blasfa",
    category: "hair-straightening",
    categoryName: "Hair Straightening",
    description: "State-of-the-art nanotechnology organic bio-straightening formulation that aligns internal hair bonds for extreme gloss, softness, and durability.",
    duration: "3 - 4 hours",
    tag: "Advanced Nanotech",
    image: NanoBlasfaHair,
    features: ["Nano-molecular particle penetration", "100% Organic amino acid base", "Maximum straightness with zero damage", "Suitable for all hair types & colors"]
  },

  // ==========================================
  // 4. Hair Dye (4 Services)
  // ==========================================
  {
    id: "dye-normal-henna",
    name: "Normal Henna",
    category: "hair-dye",
    categoryName: "Hair Dye",
    description: "100% natural, chemical-free Rajasthani organic henna paste that cools the scalp, strengthens roots, and imparts a rich reddish-copper tint.",
    duration: "60 - 90 mins",
    popular: true,
    tag: "100% Natural",
    image: normalhennaImg,
    features: ["Pure triple-filtered Rajasthani henna", "Natural conditioning and scalp cooling", "Safe for sensitive skin & pregnancy", "Adds body and natural highlights"]
  },
  {
    id: "dye-black-henna",
    name: "Black Henna",
    category: "hair-dye",
    categoryName: "Hair Dye",
    description: "Traditional herbal indigo & henna combination that covers stubborn gray hairs with an organic, natural deep black shade.",
    duration: "60 - 90 mins",
    tag: "Herbal Gray Cover",
    image: blackhennaImg,
    features: ["Herbal indigo & henna leaf extracts", "Natural black tone without harsh chemicals", "Imparts high shine to dull strands", "Gentle on sensitive scalp"]
  },
  {
    id: "dye-cream-colouring",
    name: "Cream Colouring",
    category: "hair-dye",
    categoryName: "Hair Dye",
    description: "Ammonia-free rich cream hair color touch-up providing 100% seamless gray coverage and lasting multidimensional shine.",
    duration: "45 - 60 mins",
    tag: "Ammonia Free",
    image: creamColouringImg,
    features: ["L'Oréal INOA ammonia-free formulation", "100% Root & hairline gray coverage", "Infused with nourishing argan oil", "Non-drip gentle cream application"]
  },
  {
    id: "dye-hair-colouring",
    name: "Hair Colouring",
    category: "hair-dye",
    categoryName: "Hair Dye",
    description: "Full global hair coloring, fashionable balayage, or vibrant tone enhancements tailored to complement your skin tone by senior colorists.",
    duration: "90 - 120 mins",
    popular: true,
    tag: "Global Color",
    image: haircolouringImg,
    features: ["Curated international fashion shades", "Customized undertone consultation", "Color-lock gloss treatment finish", "Zero damage gentle oxidants"]
  },

  // ==========================================
  // 5. Hair Cut (6 Services)
  // ==========================================
  {
    id: "haircut-straight-cut",
    name: "Straight Cut",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Clean, even blunt straight haircut that removes split ends, thickens bottom edges, and creates a crisp uniform baseline.",
    duration: "25 - 30 mins",
    tag: "Classic Trim",
    image: StraightCutImg,
    features: ["Precision baseline trimming", "Removes split and damaged ends", "Complimentary hair combing & blast dry", "Clean straight edge symmetry"]
  },
  {
    id: "haircut-u-cut",
    name: "U Cut",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Graceful curved U-shape perimeter cut that creates soft rounded ends, enhancing natural flow and making ponytails look fuller.",
    duration: "30 mins",
    tag: "Soft Curve",
    image: ucutimg,
    features: ["Symmetrical parabolic U-line", "Subtle end texturizing", "Maintains maximum length with fresh shape", "Ideal for long & medium hair"]
  },
  {
    id: "haircut-layer-cut",
    name: "Layer Cut",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Multi-tiered dynamic layering designed to remove excess bulk, create effortless movement, and enhance natural hair volume.",
    duration: "40 - 50 mins",
    popular: true,
    tag: "Volume & Flow",
    image: Layercutimg,
    features: ["Customized face-framing cascading layers", "Enhances natural waves & bounce", "Removes weight from heavy hair", "Styled with blowout finish"]
  },
  {
    id: "haircut-step-cut",
    name: "Step Cut",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Distinct stepped tiered levels that add dramatic separation, texture, and visual density to straight and wavy hair textures.",
    duration: "35 - 45 mins",
    tag: "Tiered Styling",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    features: ["Bold stepped level graduation", "Adds immediate lift & fullness", "Looks spectacular when blow dried or curled", "Expert scissor sculpting"]
  },
  {
    id: "haircut-fringe-bangs",
    name: "Fringe / Bangs",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Customized forehead fringe, curtain bangs, or side-swept wisps cut to accentuate your eyes and flatter your face shape.",
    duration: "15 - 20 mins",
    tag: "Face Framing",
    image: FringeBangsImg,
    features: ["Curtain bangs, Korean wispy or blunt fringe", "Tailored to your forehead proportions", "Quick instant style refresh", "Blow dry styling included"]
  },
  {
    id: "haircut-feather-cut",
    name: "Feather Cut",
    category: "hair-cut",
    categoryName: "Hair Cut",
    description: "Soft feather-light outward texturizing that creates an ethereal, airy, beautifully flicked finish around the shoulders.",
    duration: "40 - 50 mins",
    popular: true,
    tag: "Airy Feathers",
    image: FeatherCutImg,
    features: ["Delicate feather-razor texturizing", "Outward flicked blow dry styling", "Lightweight, soft, and feminine", "Adds dimension to medium-long hair"]
  },

  // ==========================================
  // 6. Kids (3 Services)
  // ==========================================
  {
    id: "kids-baby-cut",
    name: "Baby Cut",
    category: "kids",
    categoryName: "Kids",
    description: "Extra gentle, patient, and hygienic haircut for infants and toddlers in a warm, child-friendly environment by caring female staff.",
    duration: "20 - 30 mins",
    popular: true,
    tag: "Gentle Care",
    image: BabyCutImg,
    features: ["Sanitized, baby-safe rounded shears", "Patient & soothing female stylists", "Quick, tear-free experience", "Cute styling finish with hair accessory"]
  },
  {
    id: "kids-mushroom-cut",
    name: "Mushroom Cut",
    category: "kids",
    categoryName: "Kids",
    description: "Cute, classic mushroom bowl haircut with smooth rounded contours that keeps kids comfortable, tidy, and looking adorable.",
    duration: "20 - 30 mins",
    tag: "Adorable Classic",
    image:mushroomcutImg,
    features: ["Clean rounded mushroom fringe & perimeter", "Low maintenance for school and play", "Even, neat graduation", "Gentle styling"]
  },
  {
    id: "kids-dora-cut",
    name: "Dora Cut",
    category: "kids",
    categoryName: "Kids",
    description: "Iconic charming short bob cut with playful front bangs tailored for young girls who love the cheerful Dora the Explorer look.",
    duration: "25 - 30 mins",
    popular: true,
    tag: "Kids Favorite",
    image:  DoraImg,
    features: ["Classic short bob with straight forehead bangs", "Easy to brush and maintain daily", "Fun and comfortable for active girls", "Finished with a complimentary hair clip"]
  },

  // ==========================================
  // 7. Threading (3 Services)
  // ==========================================
  {
    id: "threading-eyebrow",
    name: "Eyebrow",
    category: "threading",
    categoryName: "Threading",
    description: "Precision organic anti-bacterial cotton thread shaping tailored to enhance your facial symmetry with clean, defined, perfect arches.",
    duration: "10 - 15 mins",
    popular: true,
    tag: "Everyday Essential",
    image: threadingImg,
    features: ["100% Organic cotton thread", "Accurate brow mapping for facial symmetry", "Calming rose water & aloe vera gel application", "Gentle on sensitive skin"]
  },
  {
    id: "threading-upper-lip",
    name: "Upper Lip",
    category: "threading",
    categoryName: "Threading",
    description: "Quick, hygienic upper lip hair removal that leaves your lip contour ultra-smooth and makeup-ready.",
    duration: "5 - 10 mins",
    tag: "Smooth Contour",
    image: upperlipthreading,
    features: ["Quick and virtually painless technique", "Removes finest peach fuzz", "Post-threading soothing astringent", "Smooth lipstick finish"]
  },
  {
    id: "threading-face-thread",
    name: "Face Thread",
    category: "threading",
    categoryName: "Threading",
    description: "Complete full face threading covering forehead, chin, sideburns, and cheeks for a porcelain-smooth, hair-free complexion.",
    duration: "25 - 35 mins",
    popular: true,
    tag: "Full Face Smooth",
    image: facethreadingimg,
    features: ["Covers forehead, cheeks, chin & jawline", "Exfoliates dead surface cells", "Creates seamless base for makeup", "Cooling cucumber gel massage"]
  },

  // ==========================================
  // 8. Bleach (5 Services)
  // ==========================================
  {
    id: "bleach-face",
    name: "Face",
    category: "bleach",
    categoryName: "Bleach",
    description: "Herbal gold & oxy facial bleach that instantly lightens fine facial hair to match your skin tone while giving an immediate bright glow.",
    duration: "20 - 25 mins",
    popular: true,
    tag: "Instant Radiance",
    image: bleachfaceImg,
    features: ["Gentle ammonia-free herbal formulation", "Golden radiance boost", "Lightens dark facial fuzz", "Soothing post-bleach cooling pack"]
  },
  {
    id: "bleach-hand",
    name: "Hand",
    category: "bleach",
    categoryName: "Bleach",
    description: "Skin lightening and polishing bleach for hands and arms, reducing discoloration and creating an even golden skin tone.",
    duration: "25 - 30 mins",
    tag: "Even Tone",
    image: bleachhandImg,
    features: ["Full hand & arm coverage", "Reduces sun discoloration", "Leaves skin soft and luminous", "Gentle moisturizer finish"]
  },
  {
    id: "bleach-leg",
    name: "Leg",
    category: "bleach",
    categoryName: "Bleach",
    description: "Radiance boosting bleach for legs, fading uneven patches and giving legs a smooth, glowing, polished appearance.",
    duration: "30 - 35 mins",
    tag: "Glowing Legs",
    image: bleachlegImg,
    features: ["Thorough leg skin coverage", "Brightens dull surface skin", "Softens rough skin texture", "Soothing botanical pack"]
  },
  {
    id: "bleach-back-neck",
    name: "Back Neck",
    category: "bleach",
    categoryName: "Bleach",
    description: "Targeted bleach treatment for the back of the neck to lighten sun hyperpigmentation and blend seamlessly with bridal or party blouses.",
    duration: "20 mins",
    tag: "Blouse Ready",
    image: bleachbackneckImg,
    features: ["Fades dark neck pigmentation", "Perfect for deep-back blouses", "Quick brightening action", "Gentle on sensitive neck skin"]
  },
  {
    id: "bleach-under-arms",
    name: "Under Arms",
    category: "bleach",
    categoryName: "Bleach",
    description: "Specialized gentle underarm skin lightening bleach designed to diminish darkness and restore confidence for sleeveless wear.",
    duration: "15 - 20 mins",
    tag: "Underarm Care",
    image: bleachunderarmsImg,
    features: ["Sensitive skin bleach formulation", "Reduces friction darkness", "Quick 15-min application", "Hydrating soothing finish"]
  },

  // ==========================================
  // 9. D-Tan (5 Services)
  // ==========================================
  {
    id: "dtan-face",
    name: "Face",
    category: "d-tan",
    categoryName: "D-Tan",
    description: "Enzyme and milk protein deep de-tan pack that draws out sun tan, pollution impurities, and dark spots from facial skin.",
    duration: "30 mins",
    popular: true,
    tag: "Tan Reversal",
    image: DtanfaceImg,
    features: ["Kojic acid & milk enzyme de-tan pack", "Instantly lifts stubborn sun tan", "Restores natural skin complexion", "SPF 50 protective barrier finish"]
  },
  {
    id: "dtan-hand",
    name: "Hand",
    category: "d-tan",
    categoryName: "D-Tan",
    description: "Therapeutic hand and arm de-tan therapy that reverses driver tan and outdoor sun exposure, leaving hands silky and fair.",
    duration: "30 - 40 mins",
    tag: "Hand Brightening",
    image: dtanhandImg,
    features: ["Exfoliating lactic walnut scrub", "Deep brightening clay mask", "Reverses harsh sleeve tanning", "Hydrating massage finish"]
  },
  {
    id: "dtan-leg",
    name: "Leg",
    category: "d-tan",
    categoryName: "D-Tan",
    description: "Comprehensive leg de-tan scrub and pack to eliminate footwear tan lines and deep-seated environmental tanning.",
    duration: "35 - 45 mins",
    tag: "Leg Rejuvenation",
    image: dtanleg,
    features: ["Erases slipper & sandal tan marks", "Deep pore exfoliation", "Evens out knee discoloration", "Rich moisture lock"]
  },
  {
    id: "dtan-back-neck",
    name: "Back Neck",
    category: "d-tan",
    categoryName: "D-Tan",
    description: "Intensive dark patch correction and de-tanning pack specifically formulated for the back of the neck and upper shoulders.",
    duration: "25 mins",
    tag: "Neck Clarity",
    image: tanbackneckImg,
    features: ["Targeted pigmentation lighten", "Exfoliates dead cellular buildup", "Smooth even tone for party wear", "Cooling botanical rinse"]
  },
  {
    id: "dtan-under-arms",
    name: "Under Arms",
    category: "d-tan",
    categoryName: "D-Tan",
    description: "Gentle non-abrasive de-tan exfoliation and brightening pack for underarms to reverse hyperpigmentation and sweat discoloration.",
    duration: "20 mins",
    tag: "Clear & Confident",
    image: underarmsImg,
    features: ["Natural fruit enzyme lightening", "Gentle for sensitive skin", "Controls odor and dark patches", "Post-treatment calming gel"]
  },

  // ==========================================
  // 10. Wax (9 Services)
  // ==========================================
  {
    id: "wax-upper-lip",
    name: "Upper Lip",
    category: "wax",
    categoryName: "Wax",
    description: "Gentle strip-free peel-off waxing for the upper lip, removing root-level hair smoothly with minimal sensitivity.",
    duration: "10 mins",
    tag: "Smooth Lip",
    image: underlipwaxImg,
    features: ["Italian Rica peel-off wax", "Pulls hair directly from root", "Zero redness or skin peeling", "Soothes with aloe lotion"]
  },
  {
    id: "wax-under-arms",
    name: "Under Arms",
    category: "wax",
    categoryName: "Wax",
    description: "Hygienic, fast, and thorough underarm waxing that keeps skin clean, smooth, and stubble-free for weeks.",
    duration: "15 mins",
    popular: true,
    tag: "Hygiene Must",
    image:underarmswaxImg,
    features: ["Single-use hygienic spatulas", "Rica sensitive wax option", "Reduces ingrown hairs", "Smooth skin for 3-4 weeks"]
  },
  {
    id: "wax-face",
    name: "Face",
    category: "wax",
    categoryName: "Wax",
    description: "Delicate facial wax designed for sensitive female skin, cleanly removing peach fuzz from cheeks, chin, and sideburns.",
    duration: "25 - 30 mins",
    tag: "Facial Glow",
    image:facewaxImg,
    features: ["Hypoallergenic low-heat wax", "Silky flawless makeup foundation base", "No stubble regrowth", "Includes soothing ice-pack care"]
  },
  {
    id: "wax-back-neck",
    name: "Back Neck",
    category: "wax",
    categoryName: "Wax",
    description: "Clean hairline and back neck waxing for a neat, elegant, hair-free look when wearing updos, buns, and sarees.",
    duration: "15 mins",
    tag: "Clean Hairline",
    image: backneckwaxImg,
    features: ["Neat neckline definition", "Smooth skin for traditional attire", "Fast & painless technique", "Post-wax chamomile soothing"]
  },
  {
    id: "wax-hand-half",
    name: "Hand Half",
    category: "wax",
    categoryName: "Wax",
    description: "Half-arm waxing (fingers to elbows) removing fine and coarse hair smoothly for soft, radiant arms.",
    duration: "20 mins",
    tag: "Quick Wax",
    image: handhalfImg,
    features: ["Organic honey wax / Rica wax", "Removes dead skin & tan", "Silky soft finish", "Post-wax hydrator"]
  },
  {
    id: "wax-hand-full",
    name: "Hand Full",
    category: "wax",
    categoryName: "Wax",
    description: "Complete full-arm waxing from fingertips to shoulders with soothing lotion massage for velvety smooth arms.",
    duration: "30 mins",
    popular: true,
    tag: "Full Arms",
    image: fullhandwaxImg,
    features: ["Fingertips to shoulders complete coverage", "Removes dead epithelial buildup", "Soft regrowth over time", "Refreshing post-wax massage"]
  },
  {
    id: "wax-leg-half",
    name: "Leg Half",
    category: "wax",
    categoryName: "Wax",
    description: "Lower leg waxing from toes to knees, leaving calves and shins ultra-smooth, bright, and touchably soft.",
    duration: "25 mins",
    tag: "Silky Calves",
    image: leghalfwaxImg,
    features: ["Lower leg & toes grooming", "Thorough root extraction", "Removes dry flaky skin", "Silky smooth feel"]
  },
  {
    id: "wax-leg-full",
    name: "Leg Full",
    category: "wax",
    categoryName: "Wax",
    description: "Full-length leg waxing from toes to thighs for totally hair-free, silky, and glowing legs ready for any outfit.",
    duration: "45 mins",
    popular: true,
    tag: "Flawless Legs",
    image: legfullwaxImg,
    features: ["Complete toe-to-thigh coverage", "Rica chocolate / white chocolate wax", "Delays hair regrowth", "Hydrating tea tree finish"]
  },
  {
    id: "wax-full-body",
    name: "Full Body Wax",
    category: "wax",
    categoryName: "Wax",
    description: "Comprehensive head-to-toe full body waxing package for complete smoothness, radiance, and pre-bridal preparation.",
    duration: "90 - 120 mins",
    popular: true,
    tag: "Pre-Bridal Luxury",
    image: fullbodywaxImg,
    features: ["Full arms, full legs, underarms, stomach & back", "Premium Italian Rica wax formulation", "Ultimate pre-wedding smoothness", "Deep post-wax soothing body oil"]
  },

  // ==========================================
  // 11. Hair Wash + Blow Dry (3 Services)
  // ==========================================
  {
    id: "wash-blast-dry",
    name: "Shampoo + Conditioner + Blast Dry",
    category: "hair-wash-blow-dry",
    categoryName: "Hair Wash + Blow Dry",
    description: "Refreshing scalp shampoo with nourishing conditioner followed by high-speed blast drying for clean, lightweight, airy hair.",
    duration: "30 mins",
    popular: true,
    tag: "Daily Fresh",
    image: blastdryhairImg,
    features: ["Clarifying salon shampoo cleanse", "Moisture-replenishing conditioner", "Scalp acupressure wash", "Quick ionic blast dry"]
  },
  {
    id: "wash-straightening",
    name: "Shampoo + Conditioner + Straightening",
    category: "hair-wash-blow-dry",
    categoryName: "Hair Wash + Blow Dry",
    description: "Complete salon wash and conditioning ritual finished with professional ceramic iron straightening for sleek, glossy, mirror-finish hair.",
    duration: "45 - 60 mins",
    tag: "Glossy Sleek",
    image: StraighteningHairImg,
    features: ["Deep cleanse & conditioner mask", "Heat-defense protective serum shield", "Precision ceramic flat iron sleek finish", "Frizz control up to next wash"]
  },
  {
    id: "wash-curling",
    name: "Shampoo + Conditioner + Curling",
    category: "hair-wash-blow-dry",
    categoryName: "Hair Wash + Blow Dry",
    description: "Invigorating hair wash and moisture conditioning styled with Hollywood glam curls, romantic beach waves, or bouncy party ringlets.",
    duration: "45 - 60 mins",
    popular: true,
    tag: "Bouncy Curls",
    image: CurlingHairImg,
    features: ["Volumizing wash & conditioner", "Thermal heat protection serum", "Defined curling wand / tong styling", "Flexible-hold shine setting mist"]
  },

  // ==========================================
  // 12. Spa (4 Services)
  // ==========================================
  {
    id: "spa-hair-spa",
    name: "Hair Spa",
    category: "spa",
    categoryName: "Spa",
    description: "Classic revitalizing hair spa treatment featuring deep cream conditioning, scalp massage, and micro-steam infusion for soft, shiny tresses.",
    duration: "45 - 60 mins",
    popular: true,
    tag: "Deep Conditioning",
    image: hairspaImg,
    features: ["L'Oréal Mythic Oil / Argan hair mask", "Relaxing 20-min scalp massage", "Warm ozone micro-steam penetration", "Restores silky bounce & manageability"]
  },
  {
    id: "spa-anti-hair-fall",
    name: "Anti Hair Fall Spa",
    category: "spa",
    categoryName: "Spa",
    description: "Fortifying botanical spa enriched with aminexil, ginseng, and pro-keratin to strengthen root anchorage and arrest hair thinning.",
    duration: "60 mins",
    popular: true,
    tag: "Root Strengthening",
    image: antihairspaImg,
    features: ["Root fortifying serum ampoule", "Anti-breakage lipid conditioning", "Acupressure root stimulation", "Reduces seasonal shedding"]
  },
  {
    id: "spa-anti-dandruff",
    name: "Anti Dandruff Spa",
    category: "spa",
    categoryName: "Spa",
    description: "Purifying spa combining exfoliating tea-tree scalp peeling with soothing hydration to banish dandruff flakes and restore comfort.",
    duration: "55 - 60 mins",
    tag: "Scalp Purification",
    image: antiDandruffImg,
    features: ["Exfoliating anti-flake scalp scrub", "Tea tree & climbazole formula", "Soothes redness and persistent itch", "Leaves scalp clean and light"]
  },
  {
    id: "spa-hair-growth",
    name: "Hair Growth Spa",
    category: "spa",
    categoryName: "Spa",
    description: "Intensive rejuvenation spa packed with stem-cell peptides, rosemary extracts, and vitamins to stimulate new baby hair development.",
    duration: "60 - 75 mins",
    tag: "Growth Accelerator",
    image: hairgrowthImg,
    features: ["Rosemary & peptide growth concentrate", "High-frequency thermal micro-steam", "Stimulates micro-capillary flow", "Strengthens new hair fibers"]
  },

  // ==========================================
  // 13. Facial (3 Services)
  // ==========================================
  {
    id: "facial-treatment",
    name: "Facial Treatment",
    category: "facial",
    categoryName: "Facial",
    description: "Personalized clinical facial treatment targeting specific skin concerns like active acne, uneven pigmentation, or dehydration with dermacare actives.",
    duration: "60 mins",
    popular: true,
    tag: "Targeted Dermacare",
    image: facialtreatmentImg,
    features: ["Skin diagnosis by certified therapist", "Ultrasonic deep pore extraction", "Targeted corrective active serums", "Custom rubberized alginate peel mask"]
  },
  {
    id: "facial-hydra",
    name: "Hydra Facial",
    category: "facial",
    categoryName: "Facial",
    description: "Celebrity multi-step hydra-dermabrasion technology that deeply cleanses, extracts sebum pores, and infuses intense hyaluronic acid hydration.",
    duration: "60 - 75 mins",
    popular: true,
    tag: "Celebrity Glow",
    image: HydraFacialImg,
    features: ["Vortex vacuum pore suction & extraction", "Hyaluronic acid & antioxidant infusion", "Instant glassy hydration with zero downtime", "Visible pore minimization & glow"]
  },
  {
    id: "facial-korean-glass",
    name: "Korean Glass Skin Glow Facial",
    category: "facial",
    categoryName: "Facial",
    description: "Signature 7-step Korean glass skin brightening ritual delivering an ultra-dewy, translucent, poreless, and reflective porcelain complexion.",
    duration: "75 mins",
    popular: true,
    tag: "Translucent Glow",
    image: koreanskinImg,
    features: ["Korean rice enzyme double cleanse", "Polyhydroxy acid gentle radiance peel", "Centella Asiatica & peptide infusion", "Cryo-globe lymphatic drainage massage"]
  },

  // ==========================================
  // 14. Bridal Makeup (7 Services)
  // ==========================================
  {
    id: "bridal-normal-makeup",
    name: "Normal Makeup",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Classic professional makeup application for family functions, engagement ceremonies, and festive celebrations with natural elegance.",
    duration: "45 - 60 mins",
    tag: "Event Glamour",
    image: normalmakeupImg,
    features: ["Tone-matched premium cosmetic base", "Subtle eye enhancement & eyeliner", "Soft contouring and cheek flush", "Long-stay setting mist"]
  },
  {
    id: "bridal-hd-makeup",
    name: "HD Makeup",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "High-Definition camera-ready bridal makeup featuring ultra-fine micro pigments that look naturally flawless under 4K video and harsh flashlights.",
    duration: "90 - 120 mins",
    popular: true,
    tag: "4K Camera Ready",
    image: HdmakeupImg,
    features: ["M·A·C & Huda Beauty HD foundations", "Zero cakey or heavy finish", "Sculpted contour & luminous highlighter", "Includes premium eyelashes & lenses"]
  },
  {
    id: "bridal-waterproof-makeup",
    name: "Waterproof Makeup",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Ultra sweat-proof, tear-proof, and humidity-resistant bridal makeup formulation designed specifically for South Indian temple & Muhurtham weddings.",
    duration: "90 - 120 mins",
    popular: true,
    tag: "16-Hr Muhurtham Lock",
    image: waterproofmakeupImg,
    features: ["16-hour sweat & transfer-proof base", "Resistant to tears, humidity & ritual smoke", "Matte-velvet radiant finish", "Complete long-wear seal"]
  },
  {
    id: "bridal-airbrush",
    name: "Airbrush",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Master airbrush makeup sprayed with micro-fine mist for an unmatched porcelain, featherweight, poreless finish with 24-hour durability.",
    duration: "90 - 120 mins",
    popular: true,
    tag: "Royal Luxury",
    image: airbrushImg,
    features: ["Temptu Pro Airbrush compressor system", "Weightless, non-comedogenic silicone formula", "Flawless HD photo & 8K video capture", "Waterproof and smudge-free all day"]
  },
  {
    id: "bridal-saree-draping",
    name: "Saree Draping",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Master saree draping for Kanjeevaram silk, banarasi, georgette, and modern reception drapes with pin-point security and zero shifting.",
    duration: "20 - 30 mins",
    popular: true,
    tag: "Traditional Elegance",
    image: sareedrapingImg,
    features: ["Traditional South Indian, Gujarati, Bengali & Modern styles", "Secure concealed safety pinning", "Comfortable walking & sitting posture", "Crisp shoulder pallu alignment"]
  },
  {
    id: "bridal-box-folding",
    name: "Box Folding",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Precision pre-wedding saree box folding & steam pressing, ensuring your silk saree pleats remain crisp, compact, and ready for immediate wear.",
    duration: "30 mins",
    tag: "Crisp Pre-Pleat",
    image: boxdropingImg,
    features: ["Uniform razor-sharp pleat folding", "Protects delicate zari and silk threads", "Compact folding fits into bridal trousseau box", "Saves 30+ minutes on wedding morning"]
  },
  {
    id: "bridal-fluffy-pleating-hanging",
    name: "Fluffy Pleating + Saree Hanging",
    category: "bridal-makeup",
    categoryName: "Bridal Makeup",
    description: "Modern voluminous fluffy pleat styling with hanging silhouette setup for a grand, cinematic bridal entrance on your big day.",
    duration: "40 mins",
    tag: "Cinematic Silhouette",
    image: PleatingsareeImg,
    features: ["Voluminous fluffy pleating technique", "Architectural waist pleat formation", "Grand flared silhouette for photography", "Iron-pressed secure hanging structure"]
  },

  // ==========================================
  // 15. Facial Service (15 Services)
  // ==========================================
  {
    id: "facial-clean-up",
    name: "Clean Up",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Essential quick skin cleanup featuring deep cleansing, steam, blackhead removal, scrub, and refreshing pack for instant rejuvenation.",
    duration: "35 mins",
    popular: true,
    tag: "Essential Refresh",
    image: cleanupfaceImg,
    features: ["Deep pore cleansing & steaming", "Blackhead & whitehead extraction", "Gentle scrub exfoliation", "Skin-toning soothing pack"]
  },
  {
    id: "facial-herbal",
    name: "Herbal Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Ayurvedic herbal facial infused with neem, tulsi, and sandalwood to soothe sensitive skin, calm irritation, and restore natural harmony.",
    duration: "50 mins",
    tag: "Ayurvedic Care",
    image:HerbalFacial,
    features: ["100% Herbal botanical extracts", "Detoxifies congested skin pores", "Anti-inflammatory and cooling", "Safe for acne-prone & delicate skin"]
  },
  {
    id: "facial-dtan-facial",
    name: "D-Tan Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Intensive de-tan therapy facial utilizing active enzyme cleansers and milk peels to erase stubborn sun tanning and restore bright skin tone.",
    duration: "60 mins",
    popular: true,
    tag: "Tan Removal",
    image: DtanImg,
    features: ["Enzyme & lactic acid tan removal peel", "Brightens sun-darkened complexion", "Hydrates dry sun-damaged skin", "SPF 50 finishing shield"]
  },
  {
    id: "facial-fruit",
    name: "Fruit Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Nourishing facial enriched with natural fruit AHAs (apple, orange, banana) providing mild exfoliation, hydration, and youthful glow.",
    duration: "50 mins",
    tag: "Fruit Nutrition",
    image: FruitFacialImg,
    features: ["Natural fruit acid exfoliation", "Rich in antioxidant vitamins A & C", "Imparts a fresh rosy glow", "Suitable for all skin types"]
  },
  {
    id: "facial-papaya",
    name: "Papaya Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Targeted papain enzyme facial that breaks down pigmentation, lightens dark acne blemishes, and smooths uneven skin texture.",
    duration: "55 mins",
    tag: "Blemish Control",
    image: PapayaFacialImg,
    features: ["Active papain enzyme breakdown", "Fades dark spots and pigmentation", "Tightens open pores", "Smoothens rough skin texture"]
  },
  {
    id: "facial-wine",
    name: "Wine Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Luxury red grape & resveratrol anti-aging facial that stimulates collagen production, firms sagging skin, and delivers a radiant glow.",
    duration: "60 mins",
    popular: true,
    tag: "Anti-Aging Luxury",
    image: WineFacialImg,
    features: ["Red grape polyphenols & resveratrol", "Fights fine lines & free radical damage", "Improves skin elasticity & firmness", "Intense youthful luminosity"]
  },
  {
    id: "facial-gold",
    name: "Gold Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Iconic 24K Gold luxury facial with pure gold leaves and botanical oils, boosting skin radiance, micro-circulation, and bridal luminosity.",
    duration: "60 mins",
    popular: true,
    tag: "24K Gold Radiance",
    image: GoldfacialImg,
    features: ["24K Gold leaf foil application", "Stimulates cellular regeneration", "Immediate golden bridal shimmer", "Deep nourishing lymphatic massage"]
  },
  {
    id: "facial-diamond",
    name: "Diamond Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Micro-fine diamond crystal exfoliation facial that buffs away dead dull skin cells, purifies pores, and imparts diamond-like clarity.",
    duration: "60 mins",
    tag: "Diamond Clarity",
    image: daimondfaceImg,
    features: ["Diamond ash micro-dermabrasion", "Refines rough pores and texture", "Even skin tone with crystal brightness", "Revitalizing firming mask"]
  },
  {
    id: "facial-pearl",
    name: "Pearl Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Natural pearl powder facial rich in amino acids and minerals, designed to control oiliness, soothe skin, and produce a radiant pearl sheen.",
    duration: "55 mins",
    tag: "Pearl Whitening",
    image: PearlFacialImg,
    features: ["Real crushed pearl mineral powder", "Regulates excess sebum production", "Soothes sun damage and dark spots", "Produces milky pearlescent glow"]
  },
  {
    id: "facial-whitening",
    name: "Whitening Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Dermatologically formulated brightening facial with glutathione, arbutin, and vitamin C to fade stubborn pigmentation and brighten complexion.",
    duration: "60 mins",
    popular: true,
    tag: "Skin Brightening",
    image: WhiteningFacialImg,
    features: ["Glutathione & Alpha-Arbutin actives", "Blocks melanin overproduction", "Fades acne marks & dark patches", "Instantly visibly brighter tone"]
  },
  {
    id: "facial-bridal-normal",
    name: "Bridal Normal Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Complete pre-bridal facial ritual curated to deeply cleanse, hydrate, and prepare the bride's skin 1 to 2 weeks before wedding ceremonies.",
    duration: "75 mins",
    tag: "Pre-Bridal Base",
    image: BridalNormalFacialImg,
    features: ["Multi-step pre-bridal skin therapy", "Relieves pre-wedding stress & dullness", "Plumps skin with moisture barrier", "Ensures seamless long-lasting makeup"]
  },
  {
    id: "facial-bridal-advance",
    name: "Bridal Advance Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Premium advanced bridal facial integrating ultrasonic serum infusion, oxygen blast, and luxury masks for an unforgettable Muhurtham glow.",
    duration: "90 mins",
    popular: true,
    tag: "Royal Muhurtham Glow",
    image:BridalAdvanceFacialImg,
    features: ["Oxygen dome infusion therapy", "Neck & decolletage radiance treatment", "24K Gold & hyaluronic double masking", "Sculpting lymphatic face lifting massage"]
  },
  {
    id: "facial-gold-advance",
    name: "Gold Advance Facial",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Ultimate high-potency gold facial combining 24K gold foil therapy with peptide serums and thermo-herb cooling mask for royal luminosity.",
    duration: "90 mins",
    popular: true,
    tag: "Imperial Gold",
    image: GoldAdvanceFacialImg,
    features: ["Double gold leaf collagen infusion", "Ultrasonic deep dermis delivery", "High-frequency acne & texture smoothing", "Long-lasting radiant luster"]
  },
  {
    id: "facial-pedi-care",
    name: "Pedi Care",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Luxurious foot pedicure treatment with warm floral mineral soak, dead skin callus buffing, aromatic salt scrub, and relaxing foot massage.",
    duration: "45 mins",
    popular: true,
    tag: "Foot Rejuvenation",
    image: pedicareImg,
    features: ["Warm antiseptic floral foot bath", "Callus & cracked heel smoothing", "Dead Sea salt lavender scrub", "Reflexology foot massage & nail grooming"]
  },
  {
    id: "facial-medi-care",
    name: "Medi Care",
    category: "facial-service",
    categoryName: "Facial Service",
    description: "Intensive medical-grade hand and nail manicure care targeting rough cuticles, brittle nails, tan removal, and deep moisture therapy.",
    duration: "40 mins",
    tag: "Hand & Nail Care",
    image: medicareImg,
    features: ["Almond cream cuticle hydration", "Nail shaping, buffing & enamel application", "Brightening hand scrub & pack", "Tension-relief hand & wrist massage"]
  },

  // ==========================================
  // 16. Lice Remove (1 Service)
  // ==========================================
  {
    id: "lice-remove-treatment",
    name: "Lice Removal",
    category: "lice-remove",
    categoryName: "Lice Remove",
    description: "Hygienic, pesticide-free, and thorough manual lice and nit eradication treatment in a discreet, compassionate, and private environment.",
    duration: "60 - 90 mins",
    popular: true,
    tag: "Hygienic Eradication",
    image: liceremoveImg,
    features: ["Natural non-toxic botanical oil suffocation", "Micro-grooved professional nit comb clearance", "Scalp antiseptic wash & blow dry", "100% Confidential, clean & hygienic care"]
  },

  // ==========================================
  // 17. Ear Cobe (1 Service)
  // ==========================================
  {
    id: "ear-cobe-service",
    name: "Ear Cobe",
    category: "ear-cobe",
    categoryName: "Ear Cobe",
    description: "Specialized cosmetic ear lobe support, hole reduction assistance, and ear cobe care for stretched or sensitive piercings.",
    duration: "20 - 30 mins",
    tag: "Cosmetic Ear Care",
    image: EarcobeImg,
    features: ["Disinfected hygienic medical implements", "Gentle support for stretched earlobes", "Allows comfortable wearing of heavy bridal earrings", "Safe, non-surgical cosmetic care"]
  },

  // ==========================================
  // 18. Hair Extension (1 Service)
  // ==========================================
  {
    id: "hair-extension-service",
    name: "Hair Extension",
    category: "hair-extension",
    categoryName: "Hair Extension",
    description: "Premium 100% natural Remy human hair extensions seamlessly blended for dramatic length, voluminous density, and opulent bridal hairstyles.",
    duration: "60 - 120 mins",
    popular: true,
    tag: "Instant Length & Volume",
    image: HairExtensionImg,
    features: ["100% Remy natural human hair strands", "Clip-in, micro-ring & tape-in options", "Color-matched and heat styleable", "Perfect for bridal braids & grand updos"]
  }
];

export const SALON_SERVICES: SalonService[] = RAW_SALON_SERVICES.map((s) => ({
  ...s,
  popularity: SERVICE_POPULARITY[s.id] ?? (s.popular ? 80 : 45),
}));

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Kavitha Rajan",
    rating: 5,
    timeAgo: "2 weeks ago",
    content: "Friendly staff, excellent and perfect service. I visited Style Hub for my sister's wedding pre-bridal package. The facials and hair styling were out of this world! They take their time and ensure complete satisfaction.",
    serviceMentioned: "Bridal Package & Facial",
    verified: true
  },
  {
    id: "rev-2",
    author: "Deepa Subramanian",
    rating: 5,
    timeAgo: "1 month ago",
    content: "Good service. Friendly. Just go for it❤️ The haircut and styling they gave me transformed my look completely. Super neat salon, peaceful atmosphere and very clean tools.",
    serviceMentioned: "Haircut & Blow Dry",
    verified: true
  },
  {
    id: "rev-3",
    author: "Priya Murugan",
    rating: 5,
    timeAgo: "3 weeks ago",
    content: "Great place for hairstyle and makeup, amazing service, and friendly staff. Best ladies parlour in Tirunelveli! They listened to exactly what I wanted for my engagement look and delivered flawlessly.",
    serviceMentioned: "Make-up & Hairstyling",
    verified: true
  },
  {
    id: "rev-4",
    author: "Anitha Selvam",
    rating: 5,
    timeAgo: "1 month ago",
    content: "Exceptional experience at Mah Plaza branch. Eyebrow threading was completely painless and the foot pedicure was pure heaven. Truly a 5-star standard parlour in KTC Nagar.",
    serviceMentioned: "Pedicure & Eyebrow Threading",
    verified: true
  },
  {
    id: "rev-5",
    author: "Meenakshi Sundaram",
    rating: 5,
    timeAgo: "2 months ago",
    content: "I took the 24K Gold facial and de-tan package before Diwali. All staff are so polite, skilled and welcoming. Worth every single rupee. 100% recommended for every woman in Tirunelveli!",
    serviceMentioned: "24K Gold Facial & De-tan",
    verified: true
  },
  {
    id: "rev-6",
    author: "Sangeetha K.",
    rating: 5,
    timeAgo: "2 weeks ago",
    content: "Wonderful experience! The staff is very patient and attentive. Did my hydra facial and hair spa here, my skin feels glowing and rejuvenated. Tirunelveli's most hygienic ladies salon.",
    serviceMentioned: "Hydra Facial & Hair Spa",
    verified: true
  },
  {
    id: "rev-7",
    author: "Revathi Chandran",
    rating: 5,
    timeAgo: "3 weeks ago",
    content: "Very satisfied with their saree draping and makeup for my daughter's wedding reception. Timely, professional and courteous. Highly recommend Style Hub at Mah Plaza, KTC Nagar.",
    serviceMentioned: "Saree Draping & Reception Makeup",
    verified: true
  },
  {
    id: "rev-8",
    author: "Nivetha Bala",
    rating: 5,
    timeAgo: "1 month ago",
    content: "The best hair smoothening and botox treatment in town! My hair was frizzy and dull, now it feels like silk. Super clean parlour, peaceful ambience and very reasonable prices.",
    serviceMentioned: "Hair Botox & Smoothening",
    verified: true
  }
];

export const SALON_PACKAGES: ServicePackage[] = [
  {
    id: "royal-bridal",
    title: "Royal Muhurtham & Bridal Suite",
    subtitle: "Complete Bridal Glamour & Pre-Wedding Radiance",
    badge: "Most Popular",
    duration: "Full Day / 2 Sessions",
    servicesIncluded: [
      "HD / Airbrush Waterproof Bridal Makeup",
      "Traditional South Indian Braiding & Floral Jada",
      "Pre-Bridal 24K Gold Facial & Neck Glow",
      "Full Body Rica Waxing & De-Tan Therapy",
      "Deluxe Manicure & Pedicure with Nail Art",
      "Professional Saree Draping & Jewelry Setting"
    ],
    description: "Designed for the bride who wants absolute perfection. Our master stylists craft a radiant look tailored to your skin tone and bridal attire.",
    popular: true,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "beauty-glow",
    title: "Pre-Bridal & Festive Glow Care",
    subtitle: "Complete Head-to-Toe Beauty & Skin Rejuvenation",
    badge: "Festive Favorite",
    duration: "2 Hours",
    servicesIncluded: [
      "Deep Cleansing 24K Gold Hydra Facial",
      "De-Tan Enzyme Brightening Pack",
      "Moroccan Argan Hair Protein Treatment & Scalp Wash",
      "Deluxe Pedicure & Classic Manicure with Nail Buffing"
    ],
    description: "Restore natural luminosity and revitalize your skin and hair with this comprehensive salon beauty ritual.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "glam-makeover",
    title: "Party Glow & Hair Makeover",
    subtitle: "Ready for Any Celebration or Festivity",
    duration: "1.5 Hours",
    servicesIncluded: [
      "Designer Haircut + Volumizing Blowout",
      "Party Glam Makeup with Waterproof Eyeliner",
      "Eyebrow Threading & Upper Lip Cleanse",
      "Fruit Enzyme Instant Glow Facial"
    ],
    description: "The ideal quick transformation for family functions, festivals, and evening parties in Tirunelveli.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "non-hd-makeup",
    name: "Non HD Makeup",
    badge: "Essential Classic",
    tagline: "Natural, elegant coverage for intimate ceremonies & betrothals",
    duration: "2 - 2.5 Hours",
    inclusions: [
      "Makeup",
      "Hairstyle",
      "Saree Draping"
    ],
    description: "A graceful, lightweight traditional makeover focusing on natural skin enhancement, soft ethnic eye styling, and secure silk saree draping.",
    image: bridalNonHdImg
  },
  {
    id: "hd-makeup",
    name: "HD Makeup",
    badge: "Most Popular",
    popular: true,
    tagline: "High-definition camera-ready finish with complete accessories",
    duration: "3 - 3.5 Hours",
    inclusions: [
      "Makeup",
      "Saree Draping",
      "Hairstyle",
      "Hair Accessories",
      "Lenses",
      "Lashes",
      "Jewellery Set"
    ],
    description: "Designed for brilliant studio and stage illumination. Provides a seamless HD base, defined lashes, eye enhancement lenses, and curated bridal jewelry.",
    image: bridalHdImg
  },
  {
    id: "ultra-hd-makeup",
    name: "Ultra HD Makeup",
    badge: "4K Muhurtham Choice",
    popular: true,
    tagline: "Micro-fine second-skin radiance with authentic veni fixing",
    duration: "3.5 - 4 Hours",
    inclusions: [
      "Makeup",
      "Saree Draping",
      "Hairstyle",
      "Hair Accessories",
      "Lens",
      "Lashes",
      "Premium Jewellery Set",
      "Veni Fixing"
    ],
    description: "The gold standard for South Indian wedding ceremonies. Features micro-fine 4K skin blending, fresh fragrant veni fixing, and royal temple jewelry styling.",
    image: bridalUltraHdImg
  },
  {
    id: "glass-skin-makeup",
    name: "Glass Skin Makeup",
    badge: "Dewy Radiance",
    tagline: "Hydration-infused Korean glass finish with pre-prep sheet mask",
    duration: "3 - 3.5 Hours",
    inclusions: [
      "Sheet Mask",
      "Makeup",
      "Saree Draping",
      "Hairstyle",
      "Lens",
      "Lashes",
      "Premium Jewellery"
    ],
    description: "Infuses deep pre-makeup hydration via active sheet masks to achieve a luminous, mirror-like dewy finish that catches every glimmer of light.",
    image: bridalGlassSkinImg
  },
  {
    id: "airbrush-makeup",
    name: "Airbrush Makeup",
    badge: "Celebrity Luxury",
    tagline: "Silicone micro-mist featherweight finish with 24H staying power",
    duration: "4 Hours",
    inclusions: [
      "Premium Look",
      "Saree Draping",
      "Makeup",
      "Hairstyle",
      "Lens",
      "Lashes",
      "Veni Fixing",
      "Premium Jewellery Set"
    ],
    description: "Applied via professional micro-mist airbrush technology for an utterly poreless, featherweight, humidity-resistant veil that endures day and night.",
    image: bridalAirbrushImg
  },
  {
    id: "waterproof-makeup",
    name: "Waterproof Makeup",
    badge: "100% Tear & Sweat Proof",
    tagline: "All-weather smudge-proof perfection with luxury hair extensions",
    duration: "4 Hours",
    inclusions: [
      "Saree Draping",
      "Hairstyle",
      "Hair Extension",
      "Lens",
      "Lashes",
      "Premium Jewellery Set"
    ],
    description: "Formulated with specialized lock-in polymers to withstand tears, humidity, and intense stage lights, paired with voluminous natural hair extensions.",
    image: bridalWaterproofImg
  }
];


export const SALON_FAQS = [
  {
    q: "Do I need to book an appointment before visiting?",
    a: "While walk-ins are warmly welcomed, we strongly recommend booking an appointment via our website or WhatsApp (+91 94886 76151) to ensure zero waiting time and dedicated attention from our senior stylists."
  },
  {
    q: "What are your operating hours?",
    a: "Style Hub is open daily Monday through Sunday from 9:30 AM and closes promptly at 8:00 PM. Last service bookings are accepted by 7:15 PM."
  },
  {
    q: "Do you offer pre-bridal trials for makeup and hair?",
    a: "Yes! We offer customized bridal consultations and trial sessions so you can test shades, hairstyles, and saree draping styles before your special day."
  },
  {
    q: "What products and hygiene standards do you follow?",
    a: "We strictly use premium, dermatologically tested, international beauty brands (L'Oréal, MAC, Huda Beauty, Rica, Cheryl's, Lotus Professional). All our metal implements are sterilized between clients, and single-use disposable kits are used for waxing and pedicures."
  },
  {
    q: "Where exactly are you located in Tirunelveli?",
    a: "We are conveniently located at Mah Plaza, Pothys Nagar, on Nagercoil Road, KTC Nagar, Tirunelveli, Tamil Nadu 627011. There is convenient parking available right outside the plaza."
  }
];

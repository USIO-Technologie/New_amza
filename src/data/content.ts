import {
  AirVent,
  Building2,
  Droplets,
  FireExtinguisher,
  Fuel,
  Hammer,
  Package,
  SunMedium,
  Wrench,
  Award,
  Users,
  Clock,
  Shield,
  type LucideIcon,
} from 'lucide-react';

// Toutes les données du site sont centralisées ici : remplacez textes et photos librement.

const unsplash = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;

export const company = {
  name: 'New Amza',
  legalName: 'New Amza Construction',
  tagline: 'Quincaillerie • Construction • Maintenance',
  since: 2003,
  phone: '+243 999 945 234',
  phoneHref: 'tel:+243999945234',
  whatsappHref: 'https://wa.me/243999945234',
  email: 'newamzacons@gmail.com',
  address: '46, Avenue Tombalbaye',
  city: 'Commune de la Gombe, Kinshasa',
  country: 'République Démocratique du Congo',
  hours: 'Lun-Ven : 8h00 - 16h30 | Sam : 9h00 - 13h00',
  hoursLines: ['Lundi - Vendredi : 8h00 - 16h30', 'Samedi : 9h00 - 13h00', 'Dimanche : Fermé'],
  facebook: 'https://www.facebook.com/new.amza',
  mapQuery: '46 Avenue Tombalbaye, Gombe, Kinshasa',
};

export const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#produits', label: 'Produits' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
];

export const images = {
  hero: unsplash('1429497419816-9ca5cfb4571a', 1920, 1280),
  about: unsplash('1541888946425-d81bb19240f5', 900, 1100),
  aboutSecondary: unsplash('1616401784845-180882ba9ba8', 500, 400),
};

export type QuoteSubject = 'materiaux' | 'construction' | 'renovation' | 'installation' | 'maintenance' | 'autre';

export const quoteSubjects: { value: QuoteSubject; label: string }[] = [
  { value: 'materiaux', label: 'Achat de matériaux / quincaillerie' },
  { value: 'construction', label: 'Construction neuve' },
  { value: 'renovation', label: 'Rénovation' },
  { value: 'installation', label: 'Électricité, solaire ou climatisation' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'autre', label: 'Autre' },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Projets réalisés' },
  { value: 20, suffix: '+', label: "Années d'expérience" },
  { value: 98, suffix: '%', label: 'Clients satisfaits' },
  { value: 7, suffix: '', label: 'Univers produits' },
];

export const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Award,
    title: 'Qualité',
    description: 'Des produits sélectionnés pour leur fiabilité et leur durabilité.',
  },
  {
    icon: Users,
    title: 'Conseil expert',
    description: 'Notre équipe vous oriente vers les solutions adaptées à votre projet.',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description: 'Un large stock disponible pour ne jamais retarder vos chantiers.',
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Matériel conforme et solutions anti-incendie pour protéger vos biens.',
  },
];

export const services: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  subject: QuoteSubject;
}[] = [
  {
    icon: Package,
    title: 'Quincaillerie & matériaux',
    subtitle: "L'une des plus grandes de la RD Congo",
    description:
      'Matériaux de construction, sanitaire, électricité, énergie solaire, groupes électrogènes, climatisation et outillage : tout sous un même toit.',
    features: ['Matériaux de construction', 'Sanitaire', 'Électricité & solaire', 'Outillage'],
    image: unsplash('1616401784845-180882ba9ba8'),
    subject: 'materiaux',
  },
  {
    icon: Building2,
    title: 'Construction',
    subtitle: 'Bâtiment neuf et rénovation',
    description:
      'Maisons, immeubles, bâtiments commerciaux, extensions et rénovations complètes. Nous gérons votre projet de A à Z.',
    features: ['Gros œuvre', 'Second œuvre', 'Finitions', 'Coordination métiers'],
    image: unsplash('1587582423116-ec07293f0395'),
    subject: 'construction',
  },
  {
    icon: Wrench,
    title: 'Installation & maintenance',
    subtitle: 'Énergie, froid et sécurité',
    description:
      "Installation et entretien de vos équipements électriques, solaires, de climatisation et de sécurité incendie. Interventions rapides.",
    features: ['Électricité & solaire', 'Groupes électrogènes', 'Climatisation', 'Anti-incendie'],
    image: unsplash('1621905251189-08b45d6a269e'),
    subject: 'installation',
  },
];

export const productCategories: { id: string; label: string; icon?: LucideIcon }[] = [
  { id: 'tous', label: 'Tous' },
  { id: 'materiaux', label: 'Matériaux de construction', icon: Building2 },
  { id: 'sanitaire', label: 'Sanitaire', icon: Droplets },
  { id: 'electricite', label: 'Électricité & solaire', icon: SunMedium },
  { id: 'energie', label: 'Groupes électrogènes', icon: Fuel },
  { id: 'climatisation', label: 'Climatisation', icon: AirVent },
  { id: 'incendie', label: 'Anti-incendie', icon: FireExtinguisher },
  { id: 'outillage', label: 'Outillage & quincaillerie', icon: Hammer },
];

// Photos indicatives : à remplacer par vos propres photos produits.
// Sans image, la carte affiche l'icône de la catégorie.
export const products: { id: number; name: string; category: string; description: string; image?: string }[] = [
  {
    id: 1,
    name: 'Ciment, sable & agrégats',
    category: 'materiaux',
    description: 'Tout le nécessaire pour vos fondations, dalles et maçonneries.',
    image: unsplash('1504307651254-35680f356dfd', 600, 450),
  },
  {
    id: 2,
    name: 'Fers à béton & profilés',
    category: 'materiaux',
    description: 'Fers, tôles et profilés métalliques pour structures et toitures.',
    image: unsplash('1504917595217-d4dc5ebe6122', 600, 450),
  },
  {
    id: 3,
    name: 'Sanitaires & céramique',
    category: 'sanitaire',
    description: 'WC, lavabos, douches, baignoires et carrelage.',
    image: unsplash('1584622650111-993a426fbf0a', 600, 450),
  },
  {
    id: 4,
    name: 'Robinetterie & plomberie',
    category: 'sanitaire',
    description: 'Mitigeurs, tuyauterie et accessoires de plomberie.',
    image: unsplash('1542013936693-884638332954', 600, 450),
  },
  {
    id: 5,
    name: 'Panneaux solaires',
    category: 'electricite',
    description: 'Panneaux, batteries et onduleurs pour une énergie autonome.',
    image: unsplash('1509391366360-2e959784a276', 600, 450),
  },
  {
    id: 6,
    name: 'Matériel électrique',
    category: 'electricite',
    description: 'Câbles, disjoncteurs, tableaux et appareillage.',
    image: unsplash('1635335874521-7987db781153', 600, 450),
  },
  {
    id: 7,
    name: 'Groupes électrogènes',
    category: 'energie',
    description: 'Groupes diesel et essence pour particuliers et professionnels.',
  },
  {
    id: 8,
    name: 'Climatiseurs',
    category: 'climatisation',
    description: 'Splits, climatiseurs muraux et solutions pour bureaux.',
  },
  {
    id: 9,
    name: 'Extincteurs & détection',
    category: 'incendie',
    description: "Extincteurs, détecteurs de fumée et matériel de sécurité incendie.",
  },
  {
    id: 10,
    name: 'Outillage électroportatif',
    category: 'outillage',
    description: 'Perceuses, meuleuses et scies pour les professionnels.',
    image: unsplash('1572981779307-38b8cabb2407', 600, 450),
  },
  {
    id: 11,
    name: 'Outillage à main',
    category: 'outillage',
    description: 'Marteaux, pinces, clés, mètres et toute la quincaillerie.',
    image: unsplash('1567361808960-dec9cb578182', 600, 450),
  },
  {
    id: 12,
    name: 'Peinture & finition',
    category: 'outillage',
    description: 'Peintures intérieures, façades et accessoires.',
    image: unsplash('1562259949-e8e7689d7828', 600, 450),
  },
];

// Projets indicatifs : à remplacer par vos vraies réalisations.
export const projects = [
  {
    id: 1,
    title: 'Immeuble résidentiel',
    category: 'Résidentiel',
    description: 'Immeuble de logements avec parkings et espaces communs.',
    image: unsplash('1508450859948-4e04fabaa4ea', 1000, 1000),
    duration: '18 mois',
    year: '2023',
    surface: '3 500 m²',
  },
  {
    id: 2,
    title: 'Galerie commerciale',
    category: 'Commercial',
    description: "Construction d'un espace commercial moderne avec 25 boutiques.",
    image: unsplash('1519567241046-7f570eee3ce6', 800, 600),
    duration: '24 mois',
    year: '2022',
    surface: '5 200 m²',
  },
  {
    id: 3,
    title: 'Villa contemporaine',
    category: 'Résidentiel',
    description: 'Villa moderne avec piscine et aménagements extérieurs.',
    image: unsplash('1628744448840-55bdb2497bd4', 800, 600),
    duration: '12 mois',
    year: '2023',
    surface: '250 m²',
  },
  {
    id: 4,
    title: 'Plateau de bureaux',
    category: 'Tertiaire',
    description: 'Aménagement de bureaux avec électricité, climatisation et sécurité incendie.',
    image: unsplash('1497366811353-6870744d04b2', 800, 600),
    duration: '6 mois',
    year: '2022',
    surface: '1 200 m²',
  },
  {
    id: 5,
    title: 'École primaire',
    category: 'Public',
    description: "Construction d'une école primaire avec équipements sportifs.",
    image: unsplash('1580582932707-520aed937b7b', 800, 600),
    duration: '15 mois',
    year: '2023',
    surface: '1 800 m²',
  },
  {
    id: 6,
    title: 'Installation solaire',
    category: 'Énergie',
    description: "Fourniture et pose d'une installation solaire avec stockage sur batteries.",
    image: unsplash('1508514177221-188b1cf16e9d', 800, 600),
    duration: '1 mois',
    year: '2024',
    surface: '60 kWc',
  },
];

// Avis indicatifs : à remplacer par de vrais avis clients (Facebook, Google...).
export const testimonials = [
  {
    id: 1,
    name: 'Grace M.',
    role: 'Particulier',
    company: 'Construction de maison',
    content:
      "New Amza a réalisé la construction de ma maison avec un professionnalisme remarquable. Respect des délais, qualité irréprochable et équipe très à l'écoute.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Patrick K.',
    role: 'Directeur',
    company: 'Entreprise de BTP',
    content:
      "Nous achetons nos matériaux chez New Amza depuis des années. Stock toujours disponible, bons conseils et service impeccable.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah L.',
    role: 'Architecte',
    company: "Cabinet d'architecture",
    content:
      "Un partenaire fiable pour mes chantiers : sanitaire, électricité, finitions… je trouve tout au même endroit, avec des produits de qualité.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Jean-Paul M.',
    role: 'Gestionnaire',
    company: "Immeuble de bureaux",
    content:
      "Installation de nos climatiseurs et de notre système anti-incendie, puis maintenance régulière : un service réactif et de qualité.",
    rating: 5,
  },
  {
    id: 5,
    name: 'Christelle I.',
    role: 'Commerçante',
    company: 'Commerce',
    content:
      "Grâce à l'installation solaire et au groupe électrogène fournis par New Amza, mon activité ne s'arrête plus lors des coupures.",
    rating: 5,
  },
];

export const commitments = [
  'Large stock disponible',
  'Conseil technique',
  'Livraison sur chantier',
  'Produits de marques reconnues',
];

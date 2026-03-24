// Product Images
import imgAarmax from '../assets/product_images/AARMAX.jpeg';
import imgAartop from '../assets/product_images/AARTOP.jpeg';
import imgAarufix from '../assets/product_images/AARUFIX.jpeg';
import imgAaruside from '../assets/product_images/AARUSIDE.jpeg';
import imgAshoot from '../assets/product_images/ASHOOT.jpeg';
import imgGrowShield from '../assets/product_images/GROW SHIELD.jpeg';
import imgAaruvex from '../assets/product_images/AARUVEX.jpeg';
import imgAarunil from '../assets/product_images/AARUNIL.jpeg';
import imgAsur from '../assets/product_images/ASUR.jpeg';
import imgAarlux from '../assets/product_images/AARLUX.jpeg';
import imgAarguard from '../assets/product_images/AARGUARD.jpeg';
import imgShoor from '../assets/product_images/SHOOR.jpeg';
import imgAarusTablet from '../assets/product_images/AARUS TABLET.jpeg';
import imgAgPotash from '../assets/product_images/AG POTASH.png';
import imgAllSpecial from '../assets/product_images/ALL SPECIAL.png';
import imgKandaSpecial from '../assets/product_images/KANDA SPECIAL.png';
import imgSilicon from '../assets/product_images/SILICON.png';
import imgUmeed from '../assets/product_images/UMEED.jpeg';
import imgGannaSpecial from '../assets/product_images/GANNA SPECIAL.png';
import imgGreenMagic from '../assets/product_images/GREEN MAGIC.png';
import imgPlantEnergy from '../assets/product_images/PLANT ENERGY.png';
import imgPlantPower from '../assets/product_images/PLANT POWER.png';
import imgProm from '../assets/product_images/PROM.png';
import imgQuickEnergy from '../assets/product_images/QUICK ENERGY.png';
import imgShoot from '../assets/product_images/SHOOT.jpeg';
import imgZincDanedar from '../assets/product_images/ZINC DANEDAR.png';
import imgZenko from '../assets/product_images/ZENKO.png';

export const products = [
  // Featured Products
  { id: 1, name: "AARMAX", category: "Plant Growth Promoter", subcategory: "featured",
    image: imgAarmax, badge: "Bestseller",
    description: "Powerful branch developer based on new metabolism technology. Develops new branches and provides essential nutritional elements.",
    tagline: "Powerful Branch Developer", packing: "100 gm", dose: "10 gm per 15 litres of Water" },
  { id: 2, name: "AARTOP", category: "Crop Protection", subcategory: "featured",
    image: imgAartop, badge: "Popular",
    description: "Biological Fungal Controller based on sterile filtration process. Broad spectrum fungal controller for root rot, ring spot, blights.",
    tagline: "Biological Fungal Controller", packing: "100 gm", dose: "20 gm in 15 Ltr. of Water" },
  { id: 3, name: "AARUFIX", category: "Crop Protection", subcategory: "featured",
    image: imgAarufix, badge: "New",
    description: "3-in-1 Kit (Aarlux, Aaruvex, Asur). Controls Thrips, Virus, and Promotes plant growth and immunity.",
    tagline: "Control Thrips and Virus, Promote Growth", packing: "100 ml (3 Nos.)", dose: "10 ml in 15 Ltr. from each" },
  { id: 4, name: "AARUSIDE", category: "Crop Protection", subcategory: "featured",
    image: imgAaruside, badge: null,
    description: "Bio-organized insect repellent. Fast-absorbing and long-lasting controller for outer larvae, shoot borers, and ball insects.",
    tagline: "Outer Larvae and Shoot Borer Controller", packing: "10 gm", dose: "10 gm in 15 ltr. of Water" },
  { id: 5, name: "ASHOOT", category: "Crop Protection", subcategory: "featured",
    image: imgAshoot, badge: "Recommended",
    description: "Nano-technology based unique ajwain leaf insect repellent. Excellent results against all types of larvae, fruit and branch borers.",
    tagline: "Special for All Larvae and Borers", packing: "7ml x 5 Inj. & 50 ml", dose: "5-7 ml in 15 ltr. of Water" },
  { id: 6, name: "GROW SHIELD", category: "Soil Health", subcategory: "featured",
    image: imgGrowShield, badge: null,
    description: "New technology-based biological product. Stimulates strong root development, improves nutrient absorption, and broad-spectrum fungal control.",
    tagline: "Root Health Improver", packing: "1 kg (500gm+500gm)", dose: "1 kg per acre via drip/foliar" },

  // All Products
  { id: 7, name: "AARUSIDE", category: "Crop Protection",
    image: imgAaruside,
    description: "Bio-organized insect repellent. Fast-absorbing and long-lasting controller for outer larvae, shoot borers, and ball insects.",
    tagline: "Outer Larvae and Shoot Borer Controller", packing: "10 gm", dose: "10 gm in 15 ltr. of Water" },
  { id: 8, name: "AARUVEX", category: "Crop Protection",
    image: imgAaruvex,
    description: "Unique preparation of plant proteins that protects against Yellow Vein Mosaic and Leaf Curl Virus by boosting immunity.",
    tagline: "Virus Controller", packing: "50 ml", dose: "10 ml in 15 Lit. of Water" },
  { id: 9, name: "AARUNIL", category: "Crop Protection",
    image: imgAarunil,
    description: "Extremely effective white grub management. Works systematically and through absorption to paralyze soil insects.",
    tagline: "White Grub Controller", packing: "100 ml", dose: "20 ml in 15 ltr. or 200 ml per acre drip" },
  { id: 10, name: "GROW SHIELD", category: "Soil Health",
    image: imgGrowShield,
    description: "Stimulates strong root development, improves nutrient absorption, and works as a broad-spectrum fungal controller.",
    tagline: "Root Health Improver", packing: "1 kg (500g+500g)", dose: "1 kg per acre" },
  { id: 11, name: "AARGAURD", category: "Crop Protection",
    image: imgAarguard,
    description: "Systemic next-generation insecticide highly recommended for Whitefly, Aphid, and Jassid control.",
    tagline: "Whitefly, Aphid, Jassid Controller", packing: "100 ml & 250 ml", dose: "20 ml in 15 ltr. of Water" },
  { id: 12, name: "SHOOR", category: "Crop Protection",
    image: imgShoor,
    description: "Bio-organized systemic insecticide extremely effective on Thrips and Mites with rapid knockdown action.",
    tagline: "Special for Thrips and Mites", packing: "250ml, 500ml & 1L", dose: "20 ml in 15 ltr. of Water" },
  { id: 13, name: "ASUR", category: "Crop Protection",
    image: imgAsur,
    description: "Bio-organized insecticide working fast on Thrips and Mites. Contains carbonic substances with maximum insecticidal properties.",
    tagline: "Special for Thrips and Mites", packing: "10 ml Injection & 100 ml", dose: "10 ml in 15 ltr. of Water" },
  { id: 14, name: "AARLUX", category: "Plant Growth Promoter",
    image: imgAarlux,
    description: "Contains high quality nano enzymes and carbonic phenol. Boosts plant growth, flower expansion, and crop yield effectively.",
    tagline: "Growth, Flowering and Yield Booster", packing: "5 ml Inj. / 100 ml", dose: "5 ml or 10 ml in 15 ltr. Water" },
  { id: 15, name: "UMEED+", category: "Plant Growth Promoter",
    image: imgUmeed,
    description: "Pure biological product with naturally occurring growth hormones. Provides uniform growth with more flowers and fruits.",
    tagline: "Protein Vitamin Liquid", packing: "1 ltr. & 5 ltr.", dose: "5 ltr per Acre or 30 ml / 15 L" },
  { id: 16, name: "AARUS TABLET", category: "Nutrient Solutions",
    image: imgAarusTablet,
    description: "Effervescent tablet containing Zinc, Phosphorus, Potassium, and Humic substances to increase root health.",
    tagline: "Natural Zinc and NPK", packing: "10 tab. x 1", dose: "1 tab. in 15 ltr. of Water" },
  { id: 17, name: "SHOOT", category: "Crop Protection",
    image: imgShoot,
    description: "Nano-technology based unique ajwain leaf insect repellent. Excellent results against fruit and stem borers.",
    tagline: "Larva Controller", packing: "250ml, 500ml & 1L", dose: "20 ml in 15 ltr. of Water" },
  { id: 18, name: "PLANT POWER", category: "Plant Growth Promoter",
    image: imgPlantPower,
    description: "Helps in nitrogen stabilization and beneficial micro-organisms production. Made from Salicylic and Folic acid.",
    tagline: "Nitrogen Stabilization", packing: "10 kg", dose: "10 kg per acre" },
  { id: 19, name: "ZENKO", category: "Nutrient Solutions",
    image: imgZenko,
    description: "Zinc 12% EDTA chelated micro-nutrient fertilizer. 100% water-soluble for robust growth and filling zinc deficiency.",
    tagline: "Zinc 12% EDTA", packing: "10 tab. x 1", dose: "1 tab. in 15 ltr. of Water" },

  // Additional products from image catalog
  { id: 20, name: "QUICK ENERGY", category: "Nutrient Solutions",
    image: imgQuickEnergy,
    description: "Essential micro-nutrients playing a key role in activating chemical processes, fruit setting, and disease resistance.",
    tagline: "Micro-nutrient Booster", packing: "20 Lit", dose: "20 Lit Per acre" },
  { id: 21, name: "ALL SPECIAL", category: "Nutrient Solutions",
    image: imgAllSpecial,
    description: "Granular fertilizer that increases organic carbon and provides necessary nutrients. Excellent for vegetables.",
    tagline: "All Crop Specialized Blend", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 22, name: "KANDA SPECIAL", category: "Nutrient Solutions",
    image: imgKandaSpecial,
    description: "Biological granular fertilizer. Increases root development, organic carbon, and disease resistance for Onions.",
    tagline: "Specialized Onion Formula", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 23, name: "PLANT ENERGY", category: "Plant Growth Promoter",
    image: imgPlantEnergy,
    description: "High-quality Bentonite granules with Humic Acid and Fulvic Marine Algae for robust growth and disease resistance.",
    tagline: "Plant Energy Protector", packing: "25 kg bag", dose: "50 kg per acre" },
  { id: 24, name: "PROM", category: "Soil Health",
    image: imgProm,
    description: "Phosphate Rich Organic Manure in granular form. Completely biological alternative to DAP fertilizer.",
    tagline: "Biological DAP Alternative", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 25, name: "POTASH", category: "Nutrient Solutions",
    image: imgAgPotash,
    description: "Biological potash alternative to chemical potash for crop strength and yield.",
    tagline: "Biological Potash", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 26, name: "GANNA SPECIAL", category: "Nutrient Solutions",
    image: imgGannaSpecial,
    description: "Granular biological fertilizer for sugarcane. Increases organic carbon, maintains moisture, and boosts 20-25% production.",
    tagline: "Sugarcane Specializer", packing: "50 kg bag", dose: "100 to 150 kg per acre" },
  { id: 27, name: "ZINC DANEDAR", category: "Nutrient Solutions",
    image: imgZincDanedar,
    description: "Granular zinc sulphate (33% or 21%) with Sulphur for balanced development of plants.",
    tagline: "Granular Zinc Sulphate", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 28, name: "GREEN MAGIC", category: "Plant Growth Promoter",
    image: imgGreenMagic,
    description: "NPK plus micro-nutrients treasure. Improves soil structure, water retention, and accelerates growth with Auxin and Cytokinin.",
    tagline: "Nutrient Treasure", packing: "50 kg bag", dose: "100 kg per acre" },
  { id: 29, name: "SILICON", category: "Soil Health",
    image: imgSilicon,
    description: "Strengthens the Cell Wall of plants, reducing attacks from Fungus and Pests. Used as Basal dose.",
    tagline: "Crop Structure Fortifier", packing: "50 kg bag", dose: "25 kg to 50 kg per acre" },
];

export const productCategories = [
  { id: 1, title: "Plant Growth Promoter", icon: "🌱",
    description: "Boost cell division, root development, and flowering for maximum yield potential.",
    color: "#2E7D32", bg: "#E8F5E9" },
  { id: 2, title: "Crop Protection", icon: "🛡️",
    description: "Comprehensive solutions against pests, fungi, and diseases.",
    color: "#E65100", bg: "#FFF3E0" },
  { id: 3, title: "Nutrient Solutions", icon: "💧",
    description: "Complete micro and macro nutrient blends for healthy, high-performing crops.",
    color: "#1565C0", bg: "#E3F2FD" },
  { id: 4, title: "Soil Health", icon: "🌍",
    description: "Organic and mineral products to restore and sustain soil vitality.",
    color: "#6D4C41", bg: "#EFEBE9" },
];

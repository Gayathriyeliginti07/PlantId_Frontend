import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export function PremiumResults({ onBack, onNewAnalysis }) {
  const [expandedCard, setExpandedCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const mixedTrees = [
    {
      id: '1',
      commonName: 'Baobab',
      scientificName: 'Adansonia digitata',
      family: 'Malvaceae',
      habitat: 'Dry African savannas',
      country: 'Madagascar / Africa',
      description: 'Iconic tree with massive trunk storing thousands of liters of water.',
      image: 'https://www.flowersofindia.net/catalog/slides/Baobab.jpg'
    },
    {
      id: '2',
      commonName: 'Banyan',
      scientificName: 'Ficus benghalensis',
      family: 'Moraceae',
      habitat: 'Tropical forests',
      country: 'India',
      description: 'National tree of India known for aerial roots forming new trunks.',
      image: 'https://plantly.io/wp-content/uploads/2020/10/Banyan_tree_Ficus_benghalensis_leaf__ripe_figs_in_Secunderabad_AP_W_IMG_6633.jpg'
    },
    // ... additional entries
    {
      id: "3",
      commonName: "Giant Sequoia (General Sherman)",
      scientificName: "Sequoiadendron giganteum",
      family: "Cupressaceae",
      habitat: "Montane coniferous forests",
      country: "United States (California)",
      description: "One of the largest (by volume) tree species on Earth, with enormous trunks.",
      confidence: 97,
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Grizzly_Giant_Mariposa_Grove.jpg",
      funFact: "General Sherman, a giant sequoia, is the largest known living single-stem tree by volume."
    },
    {
      id: "4",
      commonName: "Coast Redwood (Hyperion)",
      scientificName: "Sequoia sempervirens",
      family: "Cupressaceae",
      habitat: "Foggy coastal forests",
      country: "United States (California)",
      description: "World's tallest trees; rely on coastal fog for moisture during dry seasons.",
      confidence: 96,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/US_199_Redwood_Highway.jpg",
      funFact: "Hyperion is the tallest known living tree, measured at over 115 meters."
    },
    {
      id: "5",
      commonName: "Methuselah (Bristlecone Pine)",
      scientificName: "Pinus longaeva",
      family: "Pinaceae",
      habitat: "High-elevation rocky slopes",
      country: "United States (California/Nevada)",
      description: "Among the oldest living trees in the world — extremely slow-growing and long-lived.",
      confidence: 94,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsiffANRN-XOagLMiNXffI9iioqWBxqiOU1A&s.jpg",
      funFact: "Some bristlecone pines are over 4,800 years old, making them the oldest known non-clonal trees."
    },
    {
      id: "6",
      commonName: "Bodhi Tree",
      scientificName: "Ficus religiosa",
      family: "Moraceae",
      habitat: "Tropical and subtropical areas by rivers",
      country: "India / Nepal",
      description: "Sacred fig under which Siddhartha Gautama attained enlightenment; venerated in Buddhism.",
      confidence: 93,
      image: "https://showbageecha.com/wp-content/uploads/2025/02/Ficus-bs.jpg",
      funFact: "A cutting of the original Bodhi Tree is preserved at the Mahabodhi Temple in Bodh Gaya, India."
    },
    {
      id: "7",
      commonName: "Neem",
      scientificName: "Azadirachta indica",
      family: "Meliaceae",
      habitat: "Dry and semi-arid tropical regions",
      country: "India / South Asia",
      description: "Multipurpose medicinal and shade tree widely used in traditional medicine and agroforestry.",
      confidence: 92,
      image: "https://th.bing.com/th/id/R.ab37189629160473bfbdc77954edffa0?rik=H3R6M0%2bvsdrO%2bg&riu=http%3a%2f%2fd2seqvvyy3b8p2.cloudfront.net%2f7480637fe14f5d0d2c7efce6b7e1bd9a.jpg&ehk=9%2fZSm%2fuNW8GbWrPlk%2bmi4%2b2%2fY4U%2fwImzYA%2bmYSYWOCM%3d&risl=&pid=ImgRaw&r=0",
      funFact: "Neem has antibacterial, antifungal, and insect-repelling properties; many products are derived from it."
    },
    {
      id: "8",
      commonName: "Mango",
      scientificName: "Mangifera indica",
      family: "Anacardiaceae",
      habitat: "Tropical coastal and inland areas",
      country: "India / Southeast Asia",
      description: "Beloved fruit tree cultivated for sweet mangoes and important in many cultures.",
      confidence: 91,
      image: "https://tse1.mm.bing.net/th/id/OIP.tZxaI5KW1ALxMYXrCqvTMAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Mango is known as the 'king of fruits' in many parts of Asia and has been cultivated for thousands of years."
    },
    {
      id: "9",
      commonName: "Olive Tree",
      scientificName: "Olea europaea",
      family: "Oleaceae",
      habitat: "Mediterranean climates",
      country: "Mediterranean region (Greece, Spain, Italy)",
      description: "Long-lived tree cultivated for oil and fruit; central to Mediterranean culture and cuisine.",
      confidence: 90,
      image: "https://th.bing.com/th/id/OSK.HERORmfD1iA3DCg79uu2RLN353_8iSRtdwxcjerWNWdY4KA?w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM",
      funFact: "Some olive trees are centuries old and still produce fruit; olive branches are symbols of peace."
    },
    {
      id: "10",
      commonName: "Ginkgo",
      scientificName: "Ginkgo biloba",
      family: "Ginkgoaceae",
      habitat: "Temperate regions; adaptable to urban areas",
      country: "China (cultivated worldwide)",
      description: "Living fossil with no close living relatives; distinctive fan-shaped leaves that turn golden in autumn.",
      confidence: 92,
      image: "https://tse2.mm.bing.net/th/id/OIP.jPxRNtbgowaMD0NEeTdu-QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Ginkgo trees survived the atomic blast in Hiroshima and are still alive today near the blast site."
    },
    {
      id: "11",
      commonName: "Cherry Blossom (Sakura)",
      scientificName: "Prunus serrulata",
      family: "Rosaceae",
      habitat: "Temperate forests and parks",
      country: "Japan",
      description: "Cultural symbol of spring in Japan; celebrated with hanami (flower-viewing) festivals.",
      confidence: 89,
      image: "https://tse2.mm.bing.net/th/id/OIP.ZjyZFjXUQnRk7x9u8v92_QHaE9?w=1024&h=685&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Cherry blossoms symbolize the fleeting nature of life due to their short blooming period."
    },
    {
      id: "12",
      commonName: "Coconut Palm",
      scientificName: "Cocos nucifera",
      family: "Arecaceae",
      habitat: "Coastal tropical regions",
      country: "Tropical regions worldwide",
      description: "Iconic palm producing coconuts used for food, oil, fiber, and building materials.",
      confidence: 90,
      image: "https://tse1.mm.bing.net/th/id/OIP.wxAdJvsCKGcwHWd9lpb24AHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Every part of a coconut tree is useful: food, shelter, fibers, fuel—truly a multipurpose species."
    },
    {
      id: "13",
      commonName: "Kapok",
      scientificName: "Ceiba pentandra",
      family: "Malvaceae",
      habitat: "Tropical rainforests",
      country: "Central & South America, West Africa, Southeast Asia",
      description: "Tall emergent tree with buttress roots; seed pods filled with silky kapok fiber.",
      confidence: 88,
      image: "https://tse1.mm.bing.net/th/id/OIP.9r0gXCvnX9_jkYIQAAq1hwHaJY?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Kapok fibers were historically used for stuffing life jackets and mattresses due to buoyancy."
    },
    {
      id: "14",
      commonName: "Jacaranda",
      scientificName: "Jacaranda mimosifolia",
      family: "Bignoniaceae",
      habitat: "Subtropical to tropical regions, urban plantings",
      country: "South America (Brazil), widely planted globally",
      description: "Known for its striking purple-blue trumpet-shaped flower displays in spring.",
      confidence: 86,
      image: "https://tse2.mm.bing.net/th/id/OIP.fuG2UzLGC_yFmW4mKfLvQwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Cities worldwide celebrate jacaranda season with vibrant purple canopies lining streets."
    },
    {
      id: "15",
      commonName: "Kapok (Ceiba)",
      scientificName: "Ceiba pentandra",
      family: "Malvaceae",
      habitat: "Tropical rainforests",
      country: "Neotropics, Africa, Asia",
      description: "Large emergent rainforest tree with showy flowers and enormous buttress roots.",
      confidence: 85,
      image: "https://th.bing.com/th/id/OSK.HEROGw99Nirs7J6uX7fI1CMqZlnlZcInAKhpIHua0ZjQfx8?w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM",
      funFact: "In many indigenous cultures, the ceiba is considered a sacred 'world tree'."
    },
    {
      id: "16",
      commonName: "Sandalwood",
      scientificName: "Santalum album",
      family: "Santalaceae",
      habitat: "Dry tropical forests",
      country: "India, Southeast Asia",
      description: "Valued for fragrant heartwood used in perfumery, incense, and carved objects.",
      confidence: 87,
      image: "https://tse2.mm.bing.net/th/id/OIP.BWFfPiKDbAuOt0fLogajjgHaFp?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Sandalwood requires careful management because high demand has caused overharvesting in places."
    },
    {
      id: "17",
      commonName: "American Chestnut",
      scientificName: "Castanea dentata",
      family: "Fagaceae",
      habitat: "Temperate deciduous forests",
      country: "North America (Eastern USA)",
      description: "Once dominant in eastern US forests before chestnut blight decimated populations.",
      confidence: 84,
      image: "https://th.bing.com/th/id/OIP.Sl_Xk9FnT9SVFg1uK1cEqQHaFS?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      funFact: "Efforts continue to develop blight-resistant American chestnut trees through breeding and biotech."
    },
    {
      id: "18",
      commonName: "Sugar Maple",
      scientificName: "Acer saccharum",
      family: "Sapindaceae",
      habitat: "Temperate hardwood forests",
      country: "North America (Canada & USA)",
      description: "Famous for brilliant autumn color and maple syrup production from its sap.",
      confidence: 90,
      image: "https://th.bing.com/th/id/OIP.WpzBQrZPNNvUd1EZWFNJrAHaGh?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "It takes about 40 liters of maple sap to make 1 liter of maple syrup (varies by species)."
    },
    {
      id: "19",
      commonName: "Red Maple",
      scientificName: "Acer rubrum",
      family: "Sapindaceae",
      habitat: "Wetlands and upland areas",
      country: "Eastern North America",
      description: "Versatile tree with bright red fall color and adaptability to many soils.",
      confidence: 88,
      image: "https://tse2.mm.bing.net/th/id/OIP.8cPhXJqmYjMOItHlbsAHeAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3",
      funFact: "Despite its name, red maple leaves appear in various shades including orange and yellow."
    },
    {
      id: "20",
      commonName: "Olive (Ancient trees)",
      scientificName: "Olea europaea",
      family: "Oleaceae",
      habitat: "Mediterranean climate",
      country: "Mediterranean Basin",
      description: "Millennia-old cultivated trees providing oil and fruit; culturally and economically central.",
      confidence: 89,
      image: "https://th.bing.com/th/id/OIP.lRzV-LzPU1tJhlaDINL4jgHaIi?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Some olive trees are estimated to be over 2,000 years old and still bear fruit."
    },
    {
      id: "21",
      commonName: "Fig (Ficus)",
      scientificName: "Ficus carica (and others)",
      family: "Moraceae",
      habitat: "Mediterranean and subtropical climates",
      country: "Mediterranean, Middle East",
      description: "Important fruit tree with many species; some figs have complex mutualisms with fig wasps.",
      confidence: 86,
      image: "https://th.bing.com/th/id/OIP.MSj45cY8BNfG_zOU-9derQHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Many fig species have unique fig-wasp pollinators that complete essential parts of their life cycle."
    },
    {
      id: "22",
      commonName: "Tulip Tree (Liriodendron)",
      scientificName: "Liriodendron tulipifera",
      family: "Magnoliaceae",
      habitat: "Temperate forests",
      country: "Eastern North America",
      description: "Tall native hardwood with distinctive tulip-shaped flowers and straight trunk.",
      confidence: 82,
      image: "https://th.bing.com/th/id/OIP.defHf7meaPrPJ01DLwtnfwHaFX?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Tulip trees can reach great heights and were historically used for shipbuilding and furniture."
    },
    {
      id: "23",
      commonName: "Black Pine",
      scientificName: "Pinus nigra",
      family: "Pinaceae",
      habitat: "Mediterranean, mountainous regions",
      country: "Europe, Mediterranean",
      description: "Resilient pine used in reforestation and ornamentally in urban plantings.",
      confidence: 80,
      image: "https://th.bing.com/th/id/OIP.dTPwYJDJxGsAwsJxqfrdogHaFQ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Black pines tolerate poor soils and are commonly used to stabilize slopes."
    },
    {
      id: "24",
      commonName: "Australian Eucalyptus",
      scientificName: "Eucalyptus spp.",
      family: "Myrtaceae",
      habitat: "Varied — forests to woodlands",
      country: "Australia (widely planted elsewhere)",
      description: "Diverse genus; many species are rapid-growing and important for timber and oil.",
      confidence: 88,
      image: "https://tse2.mm.bing.net/th/id/OIP.r4o_OGOwUg7e3lmGVMWVBQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Some eucalyptus species are adapted to fire and sprout vigorously after burns."
    },
    {
      id: "25",
      commonName: "Silver Birch",
      scientificName: "Betula pendula",
      family: "Betulaceae",
      habitat: "Temperate woodlands and open areas",
      country: "Europe and Asia",
      description: "Graceful tree with white peeling bark and delicate leaves; common in northern landscapes.",
      confidence: 78,
      image: "https://tse4.mm.bing.net/th/id/OIP.PIpIdbN0ENylzZJtEPR4NgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Birch sap has been harvested and consumed in some cultures as a seasonal tonic."
    },
    {
      id: "26",
      commonName: "Plane Tree (London Plane)",
      scientificName: "Platanus × acerifolia",
      family: "Platanaceae",
      habitat: "Urban environments, riverbanks",
      country: "Cultivated widely (Europe/UK)",
      description: "Tolerant urban street tree with patchy bark and broad canopy used in city plantings.",
      confidence: 79,
      image: "https://th.bing.com/th/id/OIP.7hMxXT-8cHi7VYInlyU6lQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      funFact: "The London plane is a hybrid noted for its tolerance to pollution and compacted soils."
    },
    {
      id: "27",
      commonName: "Cedar of Lebanon",
      scientificName: "Cedrus libani",
      family: "Pinaceae",
      habitat: "Montane Mediterranean forests",
      country: "Lebanon, Eastern Mediterranean",
      description: "Ancient and symbolic tree used historically in shipbuilding and temple construction.",
      confidence: 85,
      image: "https://tse3.mm.bing.net/th/id/OIP.Z_L1E3kz5O8vt64RZouddQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Cedars of Lebanon are national symbols and are featured on Lebanon's flag."
    },
    {
      id: "28",
      commonName: "Yew",
      scientificName: "Taxus baccata",
      family: "Taxaceae",
      habitat: "Temperate woodlands and churchyards",
      country: "Europe, Asia",
      description: "Long-lived evergreen historically planted in churchyards; contains compounds used in medicine.",
      confidence: 83,
      image: "https://d2seqvvyy3b8p2.cloudfront.net/f889d5eee35a4a7028505b5cdb36e43d.jpg",
      funFact: "Yew trees contain chemicals used to make cancer drugs like paclitaxel (from related species)."
    },
    {
      id: "29",
      commonName: "Seagrape",
      scientificName: "Coccoloba uvifera",
      family: "Polygonaceae",
      habitat: "Coastal dunes and beaches",
      country: "Caribbean, Central America",
      description: "Salt-tolerant coastal shrub/tree producing grape-like clusters of fruit.",
      confidence: 75,
      image: "https://tramil.net/sites/default/files/coccolobayuviferajllftk.jpg",
      funFact: "Seagrape fruit can be eaten raw or made into jams and jellies in local communities."
    },
    {
      id: "30",
      commonName: "Bael (Aegle marmelos)",
      scientificName: "Aegle marmelos",
      family: "Rutaceae",
      habitat: "Dry tropical regions",
      country: "India, Southeast Asia",
      description: "Sacred and medicinal tree in South Asia; fruits used in traditional medicine and rituals.",
      confidence: 81,
      image: "https://i0.wp.com/theseedvine.com.au/wp-content/uploads/2020/08/Aegle-marmelos-Bael-Indian-3.jpg?w=1440&ssl=1",
      funFact: "Bael fruit and leaves have long been used in Ayurvedic remedies."
    },
    {
      id: "31",
      commonName: "Sakura (Wild Cherry)",
      scientificName: "Prunus spp.",
      family: "Rosaceae",
      habitat: "Temperate woodlands and parks",
      country: "Japan & temperate zones",
      description: "Various cherry species celebrated for spring blossom festivals and ephemeral beauty.",
      confidence: 84,
      image: "https://tse3.mm.bing.net/th/id/OIP.PimiTw6Uspl8eky_PySGsAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Hanami (flower viewing) has been celebrated in Japan for over a thousand years."
    },
    {
      id: "32",
      commonName: "Teak",
      scientificName: "Tectona grandis",
      family: "Lamiaceae",
      habitat: "Tropical deciduous forests",
      country: "South & Southeast Asia",
      description: "Valuable hardwood prized for durable timber used in furniture and shipbuilding.",
      confidence: 86,
      image: "https://tse2.mm.bing.net/th/id/OIP.xknbhq-EMFnJeC6HQFWzYQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Teak wood is naturally resistant to rot and pests, making it ideal for outdoor furniture."
    },
    {
      id: "33",
      commonName: "Dragon Blood Tree",
      scientificName: "Dracaena cinnabari",
      family: "Asparagaceae",
      habitat: "Rocky slopes and arid climates",
      country: "Socotra (Yemen)",
      description: "Striking umbrella-shaped tree that produces red sap historically used as dye and medicine.",
      confidence: 80,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Araucaria_en_Parque_Nacional_Conguillio.jpg/1200px-Araucaria_en_Parque_Nacional_Conguillio.jpg",
      funFact: "The dragon's blood resin has been used historically as a dye, medicine, and varnish."
    },
    {
      id: "34",
      commonName: "Monkey Puzzle",
      scientificName: "Araucaria araucana",
      family: "Araucariaceae",
      habitat: "Temperate forests",
      country: "Chile & Argentina",
      description: "Ancient-looking evergreen with unique spiny branches and edible seeds (piñones).",
      confidence: 77,
      image: "https://th.bing.com/th/id/OIP.vi9llmCBI05F1hCVFKYRnwHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Monkey puzzle trees are slow-growing and were once planted as curiosities in Victorian gardens."
    },
    {
      id: "35",
      commonName: "Neem (Azadirachta indica)",
      scientificName: "Azadirachta indica",
      family: "Meliaceae",
      habitat: "Dry tropical forests and urban plantings",
      country: "India & South Asia",
      description: "Widely used medicinal tree with insecticidal and therapeutic properties.",
      confidence: 90,
      image: "https://c8.alamy.com/comp/T7M1XD/azadirachta-indica-commonly-known-as-neem-nimtree-or-indian-lilac-T7M1XD.jpg",
      funFact: "Neem extracts are used in organic agriculture as natural pesticides."
    },
    {
      id: "36",
      commonName: "Tulip Poplar",
      scientificName: "Liriodendron tulipifera",
      family: "Magnoliaceae",
      habitat: "Eastern North American forests",
      country: "United States",
      description: "Large, straight-trunk hardwood with showy tulip-like flowers; valued timber tree.",
      confidence: 76,
      image: "https://tse2.mm.bing.net/th/id/OIP.DcfzmXk9Fe4H0Qgdv1OeJgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Native American tribes used the wood for dugout canoes."
    },
    {
      id: "37",
      commonName: "Cork Oak",
      scientificName: "Quercus suber",
      family: "Fagaceae",
      habitat: "Mediterranean woodlands",
      country: "Portugal, Spain, North Africa",
      description: "Source of cork used for bottle stoppers and insulation; bark regenerates after harvesting.",
      confidence: 82,
      image: "https://th.bing.com/th/id/OIP.L_Pd6FEMtKrq902kl8zrkQHaJ4?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Harvesting cork does not kill the tree; the bark can be sustainably harvested every 9–12 years."
    },
    {
      id: "38",
      commonName: "Kapok (Ceiba pentandra)",
      scientificName: "Ceiba pentandra",
      family: "Malvaceae",
      habitat: "Tropical rainforests",
      country: "Central & South America, Africa, Asia",
      description: "Tall emergent rainforest tree with buttress roots and fluffy seed fibers (kapok).",
      confidence: 79,
      image: "https://tse4.mm.bing.net/th/id/OIP.YI5_qnKXk_yCdsO9AtUrhgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Kapok fiber is lightweight and was used historically as stuffing for life preservers."
    },
    {
      id: "39",
      commonName: "Black Locust",
      scientificName: "Robinia pseudoacacia",
      family: "Fabaceae",
      habitat: "Temperate open woodlands and disturbed sites",
      country: "Native to eastern North America (widespread)",
      description: "Fast-growing hardwood used for durable posts; can fix nitrogen in soils.",
      confidence: 75,
      image: "https://th.bing.com/th/id/OSK.HERO3Yspkw7T1m8aisISoCx_6D4ihDC9lJ4U2W1kJgs9i8Y?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Black locust wood is rot-resistant and often used for fence posts and decking."
    },
    {
      id: "40",
      commonName: "Date Palm",
      scientificName: "Phoenix dactylifera",
      family: "Arecaceae",
      habitat: "Desert oases and irrigated fields",
      country: "Middle East, North Africa",
      description: "Important fruit tree producing dates; central to desert agriculture and culture.",
      confidence: 88,
      image: "https://tse2.mm.bing.net/th/id/OIP.dlu4G67m4eB2cxkDGz0dJwHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Date palms have been cultivated for thousands of years and are a staple food in many arid regions."
    },
    {
      id: "41",
      commonName: "Cacao Tree",
      scientificName: "Theobroma cacao",
      family: "Malvaceae",
      habitat: "Humid tropical understories",
      country: "Amazon region, West Africa (cultivated)",
      description: "Source of cocoa beans used to make chocolate; grows best under shade.",
      confidence: 83,
      image: "https://tse3.mm.bing.net/th/id/OIP.4EQ7H-YJDRRiOPVwBp6R1QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Cacao was used as currency in some ancient Mesoamerican civilizations."
    },
    {
      id: "42",
      commonName: "Kapok / Silk Cotton (regional)",
      scientificName: "Bombax ceiba",
      family: "Malvaceae",
      habitat: "Tropical and subtropical forests",
      country: "Asia",
      description: "Showy red flowers and large trunk; silk cotton is used as fiber in some regions.",
      confidence: 74,
      image: "https://th.bing.com/th/id/OIP.vPQSk2Z434SudBf2km_JmAHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Bombax ceiba is often planted near temples and used in traditional practices."
    },
    {
      id: "43",
      commonName: "Strangler Fig",
      scientificName: "Ficus spp.",
      family: "Moraceae",
      habitat: "Tropical rainforests",
      country: "Worldwide tropics",
      description: "Starts as an epiphyte and eventually envelops host trees, forming massive structures.",
      confidence: 85,
      image: "https://tse4.mm.bing.net/th/id/OIP.aQN__ltZBZEi3_VYJ63BxgHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Strangler figs can create hollow internal spaces where wildlife may shelter."
    },
    {
      id: "44",
      commonName: "Soursop (Graviola)",
      scientificName: "Annona muricata",
      family: "Annonaceae",
      habitat: "Tropical lowland forests and orchards",
      country: "Central & South America, Caribbean",
      description: "Tropical fruit tree producing large, soft green fruits with tangy flavor.",
      confidence: 72,
      image: "https://th.bing.com/th/id/OIP.Xu8Y-O5TtlZ8tTkzJiYzpQHaE6?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Soursop fruit and extracts are used in traditional medicine in many cultures."
    },
    {
      id: "45",
      commonName: "Cinnamon Tree",
      scientificName: "Cinnamomum verum",
      family: "Lauraceae",
      habitat: "Tropical evergreen forests",
      country: "Sri Lanka, South Asia",
      description: "Source of true cinnamon spice harvested from inner bark; aromatic and valuable.",
      confidence: 80,
      image: "https://live.staticflickr.com/676/23072527882_efc4a9ee60_b.jpg",
      funFact: "True cinnamon (C. verum) is distinct from cassia, a similar but different spice."
    },
    {
      id: "46",
      commonName: "Sandalwood (Santalum album)",
      scientificName: "Santalum album",
      family: "Santalaceae",
      habitat: "Dry deciduous forests",
      country: "India, Indonesia",
      description: "Fragrant heartwood prized in perfumery, ritual, and carvings; slow-growing and valuable.",
      confidence: 81,
      image: "https://th.bing.com/th/id/OIP.xUNI6XibGoeWuZqFWKmWkwHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Because of high demand, some sandalwood species are under conservation pressure."
    },
    {
      id: "47",
      commonName: "Kapok (Ceiba insignis)",
      scientificName: "Ceiba insignis",
      family: "Malvaceae",
      habitat: "Neotropical forests",
      country: "South America",
      description: "Large, showy tree with bright flowers and characteristic fluffy seed fibers.",
      confidence: 73,
      image: "https://thumbs.dreamstime.com/z/ceiba-insignis-white-floss-silk-tree-species-flowering-plant-family-malvaceae-barcelona-spain-feb-ceiba-282031871.jpg?w=576",
      funFact: "Different ceiba species are culturally important across the Americas and Africa."
    },
    {
      id: "48",
      commonName: "Black Olive (Wild Olive)",
      scientificName: "Olea europaea var. sylvestris",
      family: "Oleaceae",
      habitat: "Mediterranean woodlands",
      country: "Mediterranean Basin",
      description: "Wild relatives of cultivated olive; important for genetic diversity and resilience.",
      confidence: 70,
      image: "https://3.bp.blogspot.com/-b8jDUyzVfuc/Un5cC5eH55I/AAAAAAAAAaI/9LQedX-gX7Q/s1600/566+Olea+europaea+var.+sylvestris.JPG",
      funFact: "Wild olives are useful for breeding programs to improve disease resistance in cultivated varieties."
    },
    {
      id: "49",
      commonName: "Citrus (Pomelo / Orange relatives)",
      scientificName: "Citrus spp.",
      family: "Rutaceae",
      habitat: "Subtropical orchards",
      country: "Southeast Asia (origins)",
      description: "Group of fruit trees cultivated globally: oranges, lemons, pomelos, and mandarins.",
      confidence: 85,
      image: "https://tse3.mm.bing.net/th/id/OIP.xKROuXhlcsAZMiSgA02QdQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      funFact: "Citrus diversity began in Southeast Asia and spread worldwide with human cultivation."
    },
    {
      id: "50",
      commonName: "Dragonfruit / Pitaya",
      scientificName: "Hylocereus undatus (cactus vine)",
      family: "Cactaceae",
      habitat: "Tropical & subtropical dry forests and cultivated trellises",
      country: "Central & South America; widely cultivated in SE Asia",
      description: "Climbing cactus producing striking pink fruits with sweet white flesh; grown on trellises.",
      confidence: 74,
      image: "https://www.shokuzai-miru.net/files/user/images/feature/feature20171031_127_5-850x566.jpg",
      funFact: "Dragonfruit is grown commercially on trellises and is known for its ornamental flowers."
    },{
    id: '51',
    commonName: 'Mango Tree',
    scientificName: 'Mangifera indica',
    family: 'Anacardiaceae',
    habitat: 'Tropical & subtropical regions',
    country: 'India',
    description: 'Famous fruit-bearing tree, cultivated globally in warm regions.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.wTutl3GBNGct337w-s8AqgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '52',
    commonName: 'Ginkgo',
    scientificName: 'Ginkgo biloba',
    family: 'Ginkgoaceae',
    habitat: 'Urban parks, temperate forests',
    country: 'China',
    description: 'Living fossil tree with fan-shaped leaves, used medicinally.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.ZkI5vrFpTQDwPVAqFLh_fgHaFo?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '53',
    commonName: 'Baobab',
    scientificName: 'Adansonia digitata',
    family: 'Malvaceae',
    habitat: 'Dry African savannas',
    country: 'Madagascar / Africa',
    description: 'Iconic tree with massive trunk storing thousands of liters of water.',
    image: 'https://c8.alamy.com/comp/C0615E/african-baobab-adansonia-digitata-makgadikgadi-salt-pan-region-makgadikgadi-C0615E.jpg'
  },
  {
    id: '54',
    commonName: 'Banyan',
    scientificName: 'Ficus benghalensis',
    family: 'Moraceae',
    habitat: 'Tropical forests',
    country: 'India',
    description: 'National tree of India known for aerial roots forming new trunks.',
    image: 'https://th.bing.com/th/id/OIP.zBXf1V89dg9KhcHxQcrnSQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '55',
    commonName: 'Redwood',
    scientificName: 'Sequoia sempervirens',
    family: 'Cupressaceae',
    habitat: 'Coastal California',
    country: 'United States',
    description: 'Tallest tree species, reaching heights over 300 feet.',
    image: 'https://www.wilsonbrosgardens.com/assets/images/sequoia-sempervirens-inmans-select-redwood-20.jpg'
  },
  {
    id: '56',
    commonName: 'Sequoia',
    scientificName: 'Sequoiadendron giganteum',
    family: 'Cupressaceae',
    habitat: 'Sierra Nevada Mountains',
    country: 'United States',
    description: 'Largest tree species by volume, found in California.',
    image: 'https://i.redd.it/xclipbddgv611.jpg'
  },
  {
    id: '57',
    commonName: 'Douglas Fir',
    scientificName: 'Pseudotsuga menziesii',
    family: 'Pinaceae',
    habitat: 'North American forests',
    country: 'United States / Canada',
    description: 'Valuable timber tree, known for its height and straight trunk.',
    image: 'https://i.etsystatic.com/14792178/r/il/9a74b0/2524941537/il_fullxfull.2524941537_c61j.jpg'
  },
  {
    id: '58',
    commonName: 'Eucalyptus',
    scientificName: 'Eucalyptus globulus',
    family: 'Myrtaceae',
    habitat: 'Australian forests',
    country: 'Australia',
    description: 'Fast-growing tree known for its aromatic leaves.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.7dqRIhwbc1a-huQzDew74gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '59',
    commonName: 'Maple',
    scientificName: 'Acer spp.',
    family: 'Sapindaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Known for its distinctive leaves and sap used to make syrup.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.DYEmywZDCUT5oTqvZLNBAgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '60',
    commonName: 'Cherry Blossom',
    scientificName: 'Prunus serrulata',
    family: 'Rosaceae',
    habitat: 'Temperate regions',
    country: 'Japan',
    description: 'Famous for its beautiful springtime flowers.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.15dnC1kpskeqd9_8eaADAAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '61',
    commonName: 'Olive Tree',
    scientificName: 'Olea europaea',
    family: 'Oleaceae',
    habitat: 'Mediterranean regions',
    country: 'Greece',
    description: 'Ancient tree known for its fruit and oil.',
    image: 'https://th.bing.com/th/id/OSK.HERORmfD1iA3DCg79uu2RLN353_8iSRtdwxcjerWNWdY4KA?w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM'
  },
  {
    id: '62',
    commonName: 'Coconut Palm',
    scientificName: 'Cocos nucifera',
    family: 'Arecaceae',
    habitat: 'Tropical coastal areas',
    country: 'Various',
    description: 'Provides coconuts, a versatile and valuable resource.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.wxAdJvsCKGcwHWd9lpb24AHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '63',
    commonName: 'Cypress',
    scientificName: 'Cupressus sempervirens',
    family: 'Cupressaceae',
    habitat: 'Mediterranean regions',
    country: 'Italy',
    description: 'Tall, slender tree often found in cemeteries and gardens.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.-lQlXSsta0aVv99lC-X_bgHaLG?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '64',
    commonName: 'Palm Tree',
    scientificName: 'Arecaceae family',
    family: 'Arecaceae',
    habitat: 'Tropical and subtropical regions',
    country: 'Various',
    description: 'Iconic tropical tree with a tall, unbranched stem.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.CSGUcUsZvKC1jcC-GVaa7wHaLH?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '65',
    commonName: 'Pine Tree',
    scientificName: 'Pinus spp.',
    family: 'Pinaceae',
    habitat: 'Various regions',
    country: 'Various',
    description: 'Coniferous tree known for its long, slender needles.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.kpQJ017oY1rwqzPMlTGFWwHaEs?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '66',
    commonName: 'Birch Tree',
    scientificName: 'Betula spp.',
    family: 'Betulaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Deciduous tree with distinctive white bark.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.2eVgvU3QEwbXfQcVDeU-tQHaL7?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '67',
    commonName: 'Ash Tree',
    scientificName: 'Fraxinus spp.',
    family: 'Oleaceae',
    habitat: 'Various regions',
    country: 'Various',
    description: 'Deciduous tree known for its strong wood.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.36_hoMudxkW1JqEhtShmhgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '68',
    commonName: 'Willow Tree',
    scientificName: 'Salix spp.',
    family: 'Salicaceae',
    habitat: 'Wetlands and riverbanks',
    country: 'Various',
    description: 'Deciduous tree with long, narrow leaves.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.F6NGw97bFtOzQ4w-Dv-MZgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '69',
    commonName: 'Hazel Tree',
    scientificName: 'Corylus avellana',
    family: 'Betulaceae',
    habitat: 'Woodlands and hedgerows',
    country: 'Various',
    description: 'Deciduous tree known for its edible nuts.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.ege8PjdGlrLy52rUNjNaAQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '70',
    commonName: 'Chestnut Tree',
    scientificName: 'Castanea spp.',
    family: 'Fagaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Deciduous tree known for its edible nuts.',
    image: 'https://th.bing.com/th/id/OIP.Sl_Xk9FnT9SVFg1uK1cEqQHaFS?w=250&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
  },
  {
    id: '71',
    commonName: 'Walnut Tree',
    scientificName: 'Juglans spp.',
    family: 'Juglandaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Deciduous tree known for its edible nuts.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.DxabsmUWWyp2stTK21xTbAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '72',
    commonName: 'Almond Tree',
    scientificName: 'Prunus dulcis',
    family: 'Rosaceae',
    habitat: 'Mediterranean regions',
    country: 'Various',
    description: 'Small tree known for its edible nuts.',
    image: 'https://c8.alamy.com/comp/AD7AJF/green-almonds-fruit-on-an-almond-tree-costa-blanca-spain-AD7AJF.jpg'
  },
  {
    id: '73',
    commonName: 'Peach Tree',
    scientificName: 'Prunus persica',
    family: 'Rosaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Small tree known for its edible fruits.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.hwOs63ca3V54lYvVNLQZagHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '74',
    commonName: 'Plum Tree',
    scientificName: 'Prunus domestica',
    family: 'Rosaceae',
    habitat: 'Temperate regions',
    country: 'Various',
    description: 'Small tree known for its edible fruits.',
    image: 'https://cdn.pixabay.com/photo/2017/04/09/22/15/new-plum-leaves-2217071_960_720.jpg'
  },
  {
  id: '74',
  commonName: 'Plum Tree',
  scientificName: 'Prunus domestica',
  family: 'Rosaceae',
  habitat: 'Temperate regions',
  country: 'Various',
  description: 'Small tree known for its sweet, edible fruits.',
  image: 'https://static.vecteezy.com/system/resources/previews/055/503/861/non_2x/ripe-purple-plums-on-a-tree-branch-with-green-leaves-in-sunlight-photo.jpg'
},
{
  id: '75',
  commonName: 'Apple Tree',
  scientificName: 'Malus domestica',
  family: 'Rosaceae',
  habitat: 'Temperate regions',
  country: 'Various',
  description: 'Widely cultivated tree producing apples, a staple fruit worldwide.',
  image: 'https://www.thespruce.com/thmb/LKeSW6Q_ZnOf5OZYH49yoAEBpes=/2128x1409/filters:fill(auto,1)/apple-tree-closeup-big-59430cd45f9b58d58aba34a1.jpg'
},
{
  id: '76',
  commonName: 'Pear Tree',
  scientificName: 'Pyrus communis',
  family: 'Rosaceae',
  habitat: 'Temperate regions',
  country: 'Various',
  description: 'Tree producing sweet, juicy pears, commonly grown in orchards.',
  image: 'https://www.planetnatural.com/wp-content/uploads/2023/10/Pear-Tree.jpg'
},
{
  id: '77',
  commonName: 'Apricot Tree',
  scientificName: 'Prunus armeniaca',
  family: 'Rosaceae',
  habitat: 'Temperate regions',
  country: 'Central Asia',
  description: 'Fruit tree with small orange apricots, often grown in warm climates.',
  image: 'https://c8.alamy.com/comp/EBT1BK/apricot-tree-prunus-armeniaca-goldrich-prunus-armeniaca-goldrich-cultivar-EBT1BK.jpg'
},
{
  id: '78',
  commonName: 'Fig Tree',
  scientificName: 'Ficus carica',
  family: 'Moraceae',
  habitat: 'Mediterranean regions',
  country: 'Middle East',
  description: 'Tree producing sweet figs, one of the earliest cultivated fruits.',
  image: 'https://tse3.mm.bing.net/th/id/OIP.ZMfY1NZMsZG5GqGKFHSzIgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '79',
  commonName: 'Pomegranate Tree',
  scientificName: 'Punica granatum',
  family: 'Lythraceae',
  habitat: 'Mediterranean regions',
  country: 'Iran / India',
  description: 'Small tree bearing red, juicy pomegranates.',
  image: 'https://tse3.mm.bing.net/th/id/OIP.BXtv2rIRQMHQ44FgBcFoDgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '80',
  commonName: 'Orange Tree',
  scientificName: 'Citrus sinensis',
  family: 'Rutaceae',
  habitat: 'Tropical & subtropical regions',
  country: 'China',
  description: 'Citrus tree famous for sweet oranges.',
  image: 'https://tse2.mm.bing.net/th/id/OIP.8cPhXJqmYjMOItHlbsAHeAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3&o=7&rm=3'
},
{
  id: '81',
  commonName: 'Lemon Tree',
  scientificName: 'Citrus limon',
  family: 'Rutaceae',
  habitat: 'Tropical & subtropical regions',
  country: 'India',
  description: 'Small tree producing sour lemons used in cuisine worldwide.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.5FcpG8Udb6q9Y0BPW4kIogHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '82',
  commonName: 'Olive Tree',
  scientificName: 'Olea europaea',
  family: 'Oleaceae',
  habitat: 'Mediterranean regions',
  country: 'Greece',
  description: 'Ancient tree known for its edible fruit and oil.',
  image: 'https://www.planetnatural.com/wp-content/uploads/2023/08/Focus-shot-of-Koroneiki-olives.jpg'
},
{
  id: '83',
  commonName: 'Avocado Tree',
  scientificName: 'Persea americana',
  family: 'Lauraceae',
  habitat: 'Tropical & subtropical regions',
  country: 'Mexico',
  description: 'Tree producing creamy green avocados.',
  image: 'https://www.planetnatural.com/wp-content/uploads/2023/09/Field-with-avocado-tree.jpg'
},
{
  id: '84',
  commonName: 'Cacao Tree',
  scientificName: 'Theobroma cacao',
  family: 'Malvaceae',
  habitat: 'Tropical rainforests',
  country: 'South America',
  description: 'Source of cocoa beans for chocolate production.',
  image: 'https://tse3.mm.bing.net/th/id/OIP.yHWuonaxDVXmTwFCrEinjAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '85',
  commonName: 'Coffee Tree',
  scientificName: 'Coffea arabica',
  family: 'Rubiaceae',
  habitat: 'Tropical regions',
  country: 'Ethiopia',
  description: 'Produces coffee beans, one of the most popular beverages.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.pwUhznUQlKjiFJYMlT4STwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '86',
  commonName: 'Cashew Tree',
  scientificName: 'Anacardium occidentale',
  family: 'Anacardiaceae',
  habitat: 'Tropical regions',
  country: 'Brazil',
  description: 'Tree that produces cashew nuts and cashew apples.',
  image: 'https://cdn.pixabay.com/photo/2015/07/22/15/45/cashew-nut-855733_640.jpg'
},
{
  id: '87',
  commonName: 'Nutmeg Tree',
  scientificName: 'Myristica fragrans',
  family: 'Myristicaceae',
  habitat: 'Tropical rainforests',
  country: 'Indonesia',
  description: 'Source of nutmeg spice, with aromatic seeds.',
  image: 'https://c8.alamy.com/comp/2A8DX46/nutmeg-tree-peradeniya-botanical-gardens-kandy-central-province-sri-lanka-2A8DX46.jpg'
},
{
  id: '88',
  commonName: 'Kapok Tree',
  scientificName: 'Ceiba pentandra',
  family: 'Malvaceae',
  habitat: 'Tropical rainforests',
  country: 'Central & South America',
  description: 'Large tropical tree known for cotton-like fibers in seed pods.',
  image: 'https://cdn.britannica.com/15/141215-050-3159F117/Kapok-tree.jpg'
},
{
  id: '89',
  commonName: 'Teak Tree',
  scientificName: 'Tectona grandis',
  family: 'Lamiaceae',
  habitat: 'Tropical forests',
  country: 'India / Southeast Asia',
  description: 'Valuable timber tree used in furniture and construction.',
  image: 'https://tse1.mm.bing.net/th/id/OIP.fLnu3kWTexG_nUzmm5L3JQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '90',
  commonName: 'Mahogany',
  scientificName: 'Swietenia macrophylla',
  family: 'Meliaceae',
  habitat: 'Tropical forests',
  country: 'Central & South America',
  description: 'Hardwood tree known for reddish timber.',
  image: 'https://c8.alamy.com/comp/C043X3/african-mahogany-tree-at-kirstenbosch-in-cape-town-C043X3.jpg'
},
{
  id: '91',
  commonName: 'Red Maple',
  scientificName: 'Acer rubrum',
  family: 'Sapindaceae',
  habitat: 'Wetlands, swamps',
  country: 'North America',
  description: 'Deciduous tree with brilliant red autumn foliage.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.RAMStngEZJco0PSipF8acwHaI_?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '92',
  commonName: 'Sugar Maple',
  scientificName: 'Acer saccharum',
  family: 'Sapindaceae',
  habitat: 'Temperate forests',
  country: 'Canada / USA',
  description: 'Source of maple syrup, famous for orange autumn leaves.',
  image: 'https://sbvpa.org/wp-content/uploads/2021/04/Sugar-Maple.jpg'
},
{
  id: '93',
  commonName: 'Silver Birch',
  scientificName: 'Betula pendula',
  family: 'Betulaceae',
  habitat: 'Temperate regions',
  country: 'Europe / Asia',
  description: 'Deciduous tree with striking white bark and delicate leaves.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.IKV-eRS6kAN6UiOM96n1ugHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '94',
  commonName: 'Japanese Maple',
  scientificName: 'Acer palmatum',
  family: 'Sapindaceae',
  habitat: 'Gardens, temperate forests',
  country: 'Japan',
  description: 'Ornamental tree with delicate, colorful leaves.',
  image: 'https://tse1.mm.bing.net/th/id/OIP.rRSuLBWd_AEKD7d7N5gmJwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '95',
  commonName: 'Acacia',
  scientificName: 'Acacia spp.',
  family: 'Fabaceae',
  habitat: 'Savannas, arid regions',
  country: 'Africa / Australia',
  description: 'Tree with feathery leaves, some species produce gum arabic.',
  image: 'https://www.planetnatural.com/wp-content/uploads/2023/10/Field-with-acacia-tree-1536x864.jpg'
},
{
  id: '96',
  commonName: 'Jacaranda',
  scientificName: 'Jacaranda mimosifolia',
  family: 'Bignoniaceae',
  habitat: 'Tropical & subtropical regions',
  country: 'South America',
  description: 'Ornamental tree with striking purple-blue flowers.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.sxuJuOcgBL95F19VL4lK7gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '97',
  commonName: 'Royal Poinciana',
  scientificName: 'Delonix regia',
  family: 'Fabaceae',
  habitat: 'Tropical regions',
  country: 'Madagascar',
  description: 'Flamboyant tree with bright red flowers.',
  image: 'https://tse2.mm.bing.net/th/id/OIP.cSFT9Hv7Nxy2BdeTxYdd2QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '98',
  commonName: 'Kapok Silk Tree',
  scientificName: 'Ceiba speciosa',
  family: 'Malvaceae',
  habitat: 'Tropical regions',
  country: 'South America',
  description: 'Decorative tree with showy pink flowers.',
  image: 'https://www.thespruce.com/thmb/hDZii2bHH1eKAxeQjtykjpPOD_k=/3872x2544/filters:no_upscale():max_bytes(150000):strip_icc()/growing-persian-silk-trees-albizia-julibrissin-5094178-04-127ded764375430daa8ac9fe9d3a9453.jpg'
},
{
  id: '99',
  commonName: 'Neem',
  scientificName: 'Azadirachta indica',
  family: 'Meliaceae',
  habitat: 'Tropical & subtropical regions',
  country: 'India',
  description: 'Medicinal tree with wide-ranging therapeutic uses.',
  image: 'https://tse3.mm.bing.net/th/id/OIP.dc4R5mrXTh7WntrTmrwiXwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3'
},
{
  id: '100',
  commonName: 'Teakwood',
  scientificName: 'Tectona grandis',
  family: 'Lamiaceae',
  habitat: 'Tropical forests',
  country: 'India / Myanmar',
  description: 'Large hardwood tree prized for furniture and construction.',
  image: 'https://tse4.mm.bing.net/th/id/OIP.wuzhjlLyPcpmWHSy2lJ6BwHaFg?w=1588&h=1180&rs=1&pid=ImgDetMain&o=7&rm=3'
}



  ];

  const filteredTrees = mixedTrees.filter(
    (tree) =>
      tree.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tree.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="p-4 space-y-4">
        <Button onClick={onBack} variant="ghost" className="flex items-center gap-2">
          <ArrowLeft /> Back
        </Button>
        <h2 className="text-2xl font-bold text-center">Global Plants Collection</h2>

        {/* Centered search bar with clear button */}
        <div className="flex justify-center mt-4 gap-2">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          {searchQuery && (
            <Button onClick={() => setSearchQuery("")} variant="secondary" className="px-3">
              Clear
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredTrees.length > 0 ? (
            filteredTrees.map((tree) => (
              <Card key={tree.id} onClick={() => setExpandedCard(tree.id)} className="cursor-pointer">
                <CardHeader>
                  <CardTitle>{tree.commonName}</CardTitle>
                  <CardDescription>{tree.scientificName}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ImageWithFallback src={tree.image} alt={tree.commonName} className="w-full h-48 object-cover rounded" />
                  <p className="mt-2 text-sm">{tree.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 mt-4">No results found</p>
          )}
        </div>

        {expandedCard && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              {mixedTrees.filter(t => t.id === expandedCard).map(tree => (
                <div key={tree.id}>
                  <h3 className="text-xl font-semibold mb-2">{tree.commonName}</h3>
                  <p><strong>Scientific Name:</strong> {tree.scientificName}</p>
                  <p><strong>Family:</strong> {tree.family}</p>
                  <p><strong>Habitat:</strong> {tree.habitat}</p>
                  <p><strong>Country:</strong> {tree.country}</p>
                  <p className="mt-2">{tree.description}</p>
                </div>
              ))}
              <div className="flex justify-end gap-2 mt-4">
                <Button onClick={() => setExpandedCard(null)} variant="secondary">Close</Button>
                <Button onClick={onNewAnalysis}>New Analysis</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

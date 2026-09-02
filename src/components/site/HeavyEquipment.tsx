import { useState, useMemo } from "react";
import {
  Truck,
  Wrench,
  Maximize2,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Building2,
  HardHat,
  Cpu,
  Layers,
  Search,
  X,
} from "lucide-react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import imgAsphaltPaver from "@/assets/equipment/asphalt-paver.jpg";
import imgBoomTruck from "@/assets/equipment/boom-truck.jpg";
import imgConcreteMixer from "@/assets/equipment/concrete-mixer.jpg";
import imgCrane from "@/assets/equipment/crane.jpg";
import imgDumpTruck from "@/assets/equipment/dump-truck.jpg";
import imgExcavator from "@/assets/equipment/excavator.jpg";
import imgExcavatorWithJackhammer from "@/assets/equipment/excavator-with-jackhammer.jpg";
import imgForklift from "@/assets/equipment/forklift.jpg";
import imgJackhammerLoader from "@/assets/equipment/jackhammer-loader.jpg";
import imgJcbBackhoe from "@/assets/equipment/jcb-backhoe.jpg";
import imgManlift from "@/assets/equipment/manlift.jpg";
import imgRoadRoller from "@/assets/equipment/road-roller.jpg";
import imgScissorLift from "@/assets/equipment/scissor-lift.jpg";
import imgTelehandler from "@/assets/equipment/telehandler.jpg";
import imgWaterTanker from "@/assets/equipment/water-tanker.jpg";
import imgDieselTankerTruck from "@/assets/equipment/diesel-tanker-truck.jpg";
import imgWheelLoader from "@/assets/equipment/wheel-loader.jpg";
import imgAngleGrinder from "@/assets/equipment/angle-grinder.jpg";
import imgDrillMachine from "@/assets/equipment/drill-machine.jpg";
import imgJackHammerPneumatic from "@/assets/equipment/jack-hammer-pneumatic.jpg";
import imgPlateCompactor from "@/assets/equipment/plate-compactor.jpg";
import imgJumpingJackCompactor from "@/assets/equipment/jumping-jack-compactor.jpg";
import imgGen100Kva from "@/assets/equipment/generator-100kva.png";
import imgGen400Kva from "@/assets/equipment/generator-400kva.png";
import imgGen500Kva from "@/assets/equipment/generator-500kva.png";
import imgBobcatLoader from "@/assets/equipment/bobcat-loader.jpg";
import imgAirCompressor from "@/assets/equipment/air-compressor.jpg";

export const heavyEquipmentList = [
  // Group 1: Lifting & Cranes (6 items)
  {
    id: "crane",
    num: "01",
    name: "Crane",
    category: "Heavy Lifting",
    img: imgCrane,
    summary: "Mobile hydraulic truck crane for heavy structural steel erection, vessel lifting, and plant maintenance.",
    description: "Heavy mobile hydraulic truck crane designed for high-tonnage lifting operations in refineries, power plants, and construction sites. Features multi-stage hydraulic boom extension, outrigger stabilization, and certified rigging equipment.",
    specs: "Mobile Hydraulic Truck Crane | Multi-Stage Boom | Heavy Outriggers",
    highlights: [
      "Heavy Structural Erection & Vessel Lifting",
      "Third-Party Certified Crane & Operator",
      "Precision Load Indicator & Safety Systems",
      "Available for Short & Long Term Fleet Rental",
    ],
  },
  {
    id: "boom-truck",
    num: "02",
    name: "Boom Truck",
    category: "Lifting & Transport",
    img: imgBoomTruck,
    summary: "Versatile boom truck equipped with hydraulic crane for material lifting, transport, and site logistics.",
    description: "Multi-functional boom truck combining heavy payload transport with a hydraulic telescopic crane boom. Ideal for loading, transporting, and unloading heavy machinery, structural steel, pipes, and site materials across Dammam and KSA.",
    specs: "Telescopic Crane Boom | Heavy Flatbed Carrier | Certified Slinging Gear",
    highlights: [
      "Dual Material Transport & Crane Lifting",
      "Short & Long Range Telescopic Reach",
      "Ideal for Pipe & Steel Structure Logistics",
      "Certified Mobile Crane Operator Included",
    ],
  },
  {
    id: "telehandler",
    num: "03",
    name: "Telehandler",
    category: "Material Handling",
    img: imgTelehandler,
    summary: "Telescopic handler for reach lifting, high-level pallet placement, and versatile site material distribution.",
    description: "Heavy-duty telescopic handler (telehandler) combining the reach of a crane with the utility of a forklift. Capable of lifting heavy palletized loads, steel beams, and equipment to upper building floors and scaffolding decks.",
    specs: "Telescopic Reach Boom | 4x4 Rough Terrain Chassis | Fork & Bucket Attachments",
    highlights: [
      "Extended Forward & Vertical Reach Capability",
      "Rough Terrain 4x4 Off-Road Drive",
      "Quick Swapping Forks, Buckets & Hooks",
      "High Load Stability at Extended Heights",
    ],
  },
  {
    id: "forklift",
    num: "04",
    name: "Forklift",
    category: "Material Handling",
    img: imgForklift,
    summary: "Industrial forklift (diesel/electric) for warehouse material handling, pallet loading, and site logistics.",
    description: "Reliable industrial forklift available in various lifting capacities. Ideal for loading/unloading cargo trucks, warehouse pallet management, pipe yard handling, and site material movement.",
    specs: "Heavy Capacity Lift Mast | Solid Pneumatic Tires | Side Shifter",
    highlights: [
      "Warehouse Pallet & Material Stacking",
      "High Ergonomics & Precise Mast Controls",
      "Indoor Electric & Outdoor Rough Terrain Diesel",
      "Regularly Maintained Fleet with Safety Certs",
    ],
  },
  {
    id: "manlift",
    num: "05",
    name: "Articulating Boom Lift",
    category: "Aerial Access",
    img: imgManlift,
    summary: "Articulated boom lift for safe elevated high-access work, structural inspection, and E&I installation.",
    description: "High-reach articulated boom lift providing safe aerial platform access to elevated work areas. Essential for high-rise steel structure assembly, E&I cable tray installation, piping inspection, and exterior facility maintenance.",
    specs: "Articulated & Telescopic Boom | High Working Height Platform | 360° Rotation",
    highlights: [
      "High-Altitude Aerial Platform Access",
      "Articulated Over-and-Away Reach Capability",
      "Emergency Lowering & Anti-Crush Safety Systems",
      "Diesel Rough Terrain & Electric Indoor Options",
    ],
  },
  {
    id: "scissor-lift",
    num: "06",
    name: "Rough Terrain Scissor Lift",
    category: "Aerial Access",
    img: imgScissorLift,
    summary: "Electric & rough-terrain scissor lift for vertical indoor/outdoor elevation, ceiling fit-outs, and maintenance.",
    description: "Compact vertical rough terrain scissor lift offering a wide working platform and high weight capacity for workers and tools. Perfect for ceiling lighting installation, ducting, warehouse maintenance, and interior fit-outs.",
    specs: "Vertical Hydraulic Scissor Mechanism | Extendable Deck | Rough Terrain Tires",
    highlights: [
      "Spacious Aerial Platform for Workers & Tools",
      "Smooth Vertical Elevation & Extension Deck",
      "Heavy Duty Rough Terrain Drive & Outriggers",
      "Complies with Strict OSHA Overhead Safety Standards",
    ],
  },

  // Group 2: Earthmoving (5 items)
  {
    id: "excavator-with-jackhammer",
    num: "07",
    name: "Excavator with Jack Hammer",
    category: "Earthmoving & Demolition",
    img: imgExcavatorWithJackhammer,
    summary: "Heavy hydraulic crawler excavator outfitted with high-impact hydraulic breaker / jackhammer attachment for rock breaking & demolition.",
    description: "Heavy-duty crawler excavator equipped with a heavy hydraulic jackhammer attachment. Engineered for high-impact rock fracturing, reinforced concrete demolition, trenching in hard rock formations, and heavy civil excavation across Saudi Arabia.",
    specs: "Heavy Duty Crawler Excavator | High-Impact Energy Hydraulic Breaker Attachment | Reinforced Booms",
    highlights: [
      "Heavy Rock Fracturing & Hard Strata Excavation",
      "Reinforced Concrete Structure & Foundation Demolition",
      "Trenching & Pipeline Channeling in Solid Rock",
      "Supplied with Certified Operator & On-Site Support",
    ],
  },
  {
    id: "heavy-crawler-excavator",
    num: "08",
    name: "Heavy Crawler Excavator",
    category: "Earthmoving",
    img: imgExcavator,
    summary: "Heavy hydraulic crawler excavator for deep civil excavation, trenching, bulk earthworks, and site leveling.",
    description: "High-performance hydraulic crawler excavator engineered for heavy earthmoving, deep trench excavation, foundation digging, and quarry operations. Features heavy-duty digging bucket, high breakout force, and certified operator.",
    specs: "Heavy Duty Crawler Tracks | High Capacity Digging Bucket | High Breakout Force",
    highlights: [
      "Deep Civil Foundation & Pipeline Trenching",
      "High Output Breakout Force for Heavy Digging",
      "Supplied with Third-Party Certified Operator",
      "Ideal for Site Clearing & Mass Earthworks",
    ],
  },
  {
    id: "wheel-loader",
    num: "09",
    name: "Wheel Loader",
    category: "Earthmoving",
    img: imgWheelLoader,
    summary: "Heavy wheel loader for aggregate loading, site stockpiling, bulk material movement, and earthmoving.",
    description: "High-capacity front wheel loader engineered for fast loading of dump trucks, stockpiling aggregates, gravel, and large-scale site earthmoving operations in quarries, plants, and construction zones.",
    specs: "Large Bucket Capacity | Heavy Articulated Steering | High Breakout Force",
    highlights: [
      "Bulk Material Stockpiling & Dump Truck Loading",
      "High Capacity Heavy Front Bucket",
      "Articulated Steering for Tight Site Turning",
      "High Output Power for Heavy Civil Contracts",
    ],
  },
  {
    id: "jcb-backhoe",
    num: "10",
    name: "JCB Super Backhoe Loader",
    category: "Earthmoving",
    img: imgJcbBackhoe,
    summary: "Multi-purpose JCB super backhoe loader for heavy digging, loading, backfilling, and site earthworks.",
    description: "Versatile JCB super backhoe loader combining a heavy front loading bucket with a powerful rear excavator arm. The ultimate multi-task machine for site backfilling, trenching, material loading, and utility line excavation.",
    specs: "4x4 All-Wheel Drive | Heavy Front Loader Bucket & Rear Backhoe Digging Arm",
    highlights: [
      "Versatile Digging, Loading & Backfilling",
      "Compact Footprint for Urban & Industrial Sites",
      "Quick Attachments for Buckets & Forks",
      "Experienced Certified Operator Supplied",
    ],
  },
  {
    id: "skid-steer-bobcat",
    num: "11",
    name: "Skid Steer Loader (Bobcat)",
    category: "Earthmoving",
    img: imgBobcatLoader,
    summary: "Versatile skid steer loader with auger drilling & bucket attachments for compact site earthworks and material handling.",
    description: "Compact skid steer loader (Bobcat) outfitted with high-torque auger drilling attachment and front bucket. Ideal for foundation post-hole drilling, tight space site cleanup, grading, and utility excavation.",
    specs: "High Torque Auger Attachment | Compact Footprint | Quick Attach Bucket System",
    highlights: [
      "Auger Drilling for Foundation Posts & Fencing",
      "Compact Zero-Turn Footprint for Narrow Sites",
      "High Utility Swappable Front Attachments",
      "Fast Site Grading & Material Clearing",
    ],
  },

  // Group 3: Transport & Hauling (4 items)
  {
    id: "dump-truck",
    num: "12",
    name: "Dump Truck",
    category: "Hauling & Earthmoving",
    img: imgDumpTruck,
    summary: "Heavy tipper dump truck for earthworks, site clearance, gravel hauling, and debris transport.",
    description: "Robust heavy-duty tipper dump truck engineered for rugged site conditions. Essential for earthmoving excavation, hauling aggregate, sand, sub-base material, and removing demolition rubble from industrial sites.",
    specs: "Heavy Capacity Tipper Body | Multi-Axle Off-Road Chassis",
    highlights: [
      "Bulk Material & Soil Earthworks Hauling",
      "Demolition Debris & Site Clearance Transport",
      "Heavy Hydraulic Tipping System",
      "Rugged Off-Road Construction Site Capability",
    ],
  },
  {
    id: "diesel-tanker-truck",
    num: "13",
    name: "Diesel Tanker Truck",
    category: "Transport & Hauling",
    img: imgDieselTankerTruck,
    summary: "Heavy fuel and diesel tanker truck for site equipment refueling, plant fuel supply, and liquid transport.",
    description: "Certified heavy fuel diesel tanker truck equipped with high-flow fuel discharge pump, meter, and safety grounding systems. Designed for site machinery refueling, diesel generator fuel replenishment, and industrial plant logistics across KSA.",
    specs: "Certified Fuel Tank Body | High-Flow Fuel Pump & Meter | Safety Hazard Signage",
    highlights: [
      "Continuous On-Site Heavy Machinery Refueling",
      "Diesel Generator Fuel Replenishment Logistics",
      "High-Flow Metered Fuel Discharge Pump",
      "Saudi Civil Defense & Aramco Safety Compliant",
    ],
  },
  {
    id: "water-tanker-truck",
    num: "14",
    name: "Water Tanker Truck",
    category: "Transport & Hauling",
    img: imgWaterTanker,
    summary: "Heavy water tanker truck for site dust suppression, compaction water supply, utility flushing, and washing.",
    description: "High-capacity water tanker truck equipped with rear spray bars and water pump systems. Essential for site dust suppression, supplying water for soil compaction rollers, pipe hydrostatic testing, and site utility washing.",
    specs: "High Capacity Water Tank | Rear Water Sprayer Bar | Auxiliary Water Pump",
    highlights: [
      "Construction Site Dust Suppression & Spraying",
      "Water Supply for Compactor Rollers & Earthworks",
      "Pipeline Hydrostatic Testing Water Supply",
      "Reliable Tanker Fleet for Daily Site Service",
    ],
  },
  {
    id: "concrete-mixer",
    num: "15",
    name: "Concrete Mixer",
    category: "Concrete & Civil",
    img: imgConcreteMixer,
    summary: "Heavy transit concrete mixer truck for ready-mix concrete transport and industrial foundation pouring.",
    description: "High-capacity concrete transit mixer truck built for heavy civil construction projects. Ensures continuous concrete agitation and timely delivery from batching plants to industrial foundations, equipment pads, and structural slabs.",
    specs: "Heavy Transit Mixer Drum | Multi-Axle Chassis | Fast Discharge System",
    highlights: [
      "Ready-Mix Concrete Transit & On-Site Pouring",
      "Uniform Concrete Agitation & Temperature Control",
      "Ideal for Heavy Structural Foundations & Slabs",
      "Complies with Municipal & Aramco Civil Specs",
    ],
  },

  // Group 4: Power Generators & Compression (4 items)
  {
    id: "generator-100kva",
    num: "16",
    name: "100 kVA Caterpillar Diesel Generator",
    category: "Power Generation",
    img: imgGen100Kva,
    summary: "Heavy-duty 100 kVA Caterpillar soundproof diesel generator unit for site power, plant operations, and backup electricity.",
    description: "Industrial-grade 100 kVA Caterpillar silent diesel generator unit engineered for continuous site prime power and emergency backup. Features sound attenuated acoustic canopy, automatic main transfer switch (ATS) compatibility, and fuel-efficient CAT engine.",
    specs: "100 kVA Prime Power Rating | Caterpillar Diesel Engine | Soundproof Acoustic Canopy",
    highlights: [
      "Continuous Construction Site & Plant Power",
      "Low Noise Weatherproof Acoustic Enclosure",
      "Automatic Transfer Switch (ATS) Ready",
      "Certified Operation & 24/7 On-Site Support",
    ],
  },
  {
    id: "generator-400kva",
    num: "17",
    name: "400 kVA Caterpillar Diesel Generator",
    category: "Power Generation",
    img: imgGen400Kva,
    summary: "High-capacity 400 kVA Caterpillar industrial diesel generator for major project sites, refineries, and plant power.",
    description: "High-capacity 400 kVA Caterpillar diesel generator unit providing reliable heavy-duty power for major industrial contracts, camp infrastructure, dewatering plants, and structural welding stations across KSA.",
    specs: "400 kVA Heavy Prime Power Rating | CAT Heavy Industrial Engine | High Fuel Efficiency",
    highlights: [
      "Heavy Industrial Plant & Main Site Power",
      "Multi-Voltage Power Output Control Panel",
      "Heavy Duty Base Fuel Tank for Extended Runtime",
      "Fully Serviced Fleet with Rapid Deployment",
    ],
  },
  {
    id: "generator-500kva",
    num: "18",
    name: "500 kVA Caterpillar Diesel Generator",
    category: "Power Generation",
    img: imgGen500Kva,
    summary: "Heavy-duty 500 kVA Caterpillar diesel generator unit for massive industrial plants, turnarounds, and mega project sites.",
    description: "Ultra heavy-duty 500 kVA Caterpillar diesel generator station designed for heavy continuous load operations. Essential for powering large construction camps, heavy machinery plants, concrete batching facilities, and industrial shutdown operations.",
    specs: "500 kVA Ultra Heavy Prime Power Rating | Advanced Digital Control Panel | CAT Turbo Diesel Engine",
    highlights: [
      "Mega Construction Site & Industrial Shutdown Power",
      "Heavy Continuous Electrical Load Bearing",
      "Advanced CAT Digital Monitor & Safety Shutdowns",
      "Complete Distribution Box & Cable Accessories Option",
    ],
  },
  {
    id: "portable-air-compressor",
    num: "19",
    name: "Portable Diesel Air Compressor",
    category: "Power Generation",
    img: imgAirCompressor,
    summary: "Heavy-duty portable diesel air compressor station for pneumatic jackhammers, sandblasting, and site pressure testing.",
    description: "Heavy-duty towable diesel air compressor engineered for continuous high-pressure compressed air supply. Used for powering pneumatic breakers, sandblasting rigs, pipeline pressure testing, and industrial cleaning.",
    specs: "High CFM Air Delivery | Heavy Duty Diesel Engine | Towable Trailer Chassis",
    highlights: [
      "High Pressure Compressed Air for Pneumatic Tools",
      "Pipeline Hydrostatic & Pressure Testing Air Supply",
      "Heavy Duty Weatherproof Acoustic Enclosure",
      "Rapid Site Towing & Deployment Across KSA",
    ],
  },

  // Group 5: Compaction & Paving (4 items)
  {
    id: "asphalt-paver",
    num: "20",
    name: "Asphalt Paver",
    category: "Paving & Roadwork",
    img: imgAsphaltPaver,
    summary: "Heavy-duty asphalt paver machine for road construction, highway surfacing, and facility paving.",
    description: "High-precision asphalt paver available for short-term and long-term rental across Saudi Arabia. Designed for seamless asphalt distribution, paving highways, industrial plant access roads, and commercial parking lots with strict surface smoothness control.",
    specs: "Heavy Duty Crawler / Rubber Track Paver | Precise Screed Width Control",
    highlights: [
      "Highway & Industrial Access Road Paving",
      "Automatic Grade & Slope Control Systems",
      "High Laydown Capacity for Continuous Operations",
      "Operator Certified with Full Maintenance Support",
    ],
  },
  {
    id: "road-roller",
    num: "21",
    name: "Road Roller",
    category: "Compaction",
    img: imgRoadRoller,
    summary: "Heavy vibratory road roller for asphalt compaction, sub-base leveling, and soil stabilization.",
    description: "Heavy-duty single/double drum vibratory compactor road roller. Ensures maximum soil compaction density, sub-grade stabilization, and smooth finish on asphalt roads, parking lots, and industrial plant foundations.",
    specs: "Vibratory Steel Drum | Heavy Static Linear Load | High Compaction Force",
    highlights: [
      "Sub-Base Soil & Gravel Layer Compaction",
      "Asphalt Surface Smooth Finishing & Sealing",
      "Adjustable Frequency Vibratory Drum",
      "Essential for Roadwork & Plant Foundation Civils",
    ],
  },
  {
    id: "plate-compactor",
    num: "22",
    name: "Plate Compactor",
    category: "Compaction",
    img: imgPlateCompactor,
    summary: "Vibratory plate compactor for soil, sand, asphalt patch, and paver base compaction in confined spaces.",
    description: "Heavy-duty walk-behind vibratory plate compactor. Designed for compacting granular soil, sand, asphalt patch repairs, trench bases, and interlocking paver installations in tight footprints.",
    specs: "High Centrifugal Compaction Force | Heavy Steel Base Plate | Folding Handle",
    highlights: [
      "Granular Soil, Sand & Asphalt Patch Compaction",
      "Narrow Footprint for Pipe Trenches & Sidewalks",
      "Vibration Damped Guide Handle",
      "Reliable Four-Stroke Engine Unit",
    ],
  },
  {
    id: "jumping-jack-compactor",
    num: "23",
    name: "Jumping Jack Compactor",
    category: "Compaction",
    img: imgJumpingJackCompactor,
    summary: "Heavy-duty rammer / jumping jack compactor for trench backfill compaction and high-cohesive soil compaction.",
    description: "High-impact jumping jack rammer compactor. Specifically built for deep trench backfill compaction, cohesive clay soil compaction, and narrow footing excavations requiring deep impact force.",
    specs: "High Stroke Impact Force | Heavy Polyurethane Bellows | Protective Engine Frame",
    highlights: [
      "Deep Trench Backfill Soil Compaction",
      "Cohesive Clay & Silt High-Impact Ramming",
      "Narrow Shoe Width for Tight Pipe Trenches",
      "Heavy Guard Frame for Jobsite Durability",
    ],
  },

  // Group 6: Demolition & Tools (4 items)
  {
    id: "jackhammer-loader",
    num: "24",
    name: "Jackhammer (Backhoe Attachment)",
    category: "Demolition & Breaking",
    img: imgJackhammerLoader,
    summary: "Heavy backhoe loader equipped with hydraulic breaker attachment for concrete breaking and trench cutting.",
    description: "Heavy backhoe tractor outfitted with a high-impact hydraulic breaker / jackhammer attachment. Built for breaking reinforced concrete slabs, rock excavation, pavement demolition, and utility trenching.",
    specs: "High Impact Energy Hydraulic Breaker | Multi-Angle Positioning",
    highlights: [
      "Reinforced Concrete Slab & Pavement Demolition",
      "High-Frequency Impact Breaking Energy",
      "Integrated Backhoe Loader Versatility",
      "Fast Site Demolition & Trench Excavation",
    ],
  },
  {
    id: "jack-hammer-pneumatic",
    num: "25",
    name: "Jack Hammer (Demolition Breaker)",
    category: "Power Tools",
    img: imgJackHammerPneumatic,
    summary: "Heavy-duty electric/pneumatic demolition jackhammer breaker for slab breaking and concrete removal.",
    description: "Handheld heavy-duty demolition jackhammer breaker with chisel bits. Engineered for breaking concrete floors, foundation walls, asphalt pavements, and hard rock trenching where heavy machinery cannot reach.",
    specs: "High Joules Impact Energy | Anti-Vibration Handles | Point & Flat Chisels",
    highlights: [
      "Concrete Floor & Foundation Demolition",
      "Confined Space Slab & Wall Breaking",
      "Vibration Damped Ergonomic Handles",
      "Includes Bull Point & Flat Chisel Bits",
    ],
  },
  {
    id: "angle-grinder",
    num: "26",
    name: "Angle Grinder & Tools",
    category: "Power Tools",
    img: imgAngleGrinder,
    summary: "Heavy-duty electric angle grinder with cutting & grinding discs for metal fabrication and pipe cutting.",
    description: "Professional industrial electric angle grinder equipped with heavy-duty side handle, guard, and premium cutting/grinding discs. Used for structural steel beveling, weld seam grinding, and pipe cutting.",
    specs: "High RPM Industrial Electric Motor | Adjustable Guard & Side Handle",
    highlights: [
      "Structural Steel Beveling & Weld Seam Grinding",
      "Heavy Metal & Pipe Section Cutting",
      "Ergonomic Vibration Reduction Handle",
      "Supplied with Full Disc Set & Safety Guards",
    ],
  },
  {
    id: "drill-machine",
    num: "27",
    name: "Drill Machine",
    category: "Power Tools",
    img: imgDrillMachine,
    summary: "Professional rotary impact drill machine for concrete anchor drilling, steel fitting, and civil installation.",
    description: "Heavy-duty industrial impact drill machine built for drilling anchor holes in reinforced concrete, masonry walls, and structural steel sections. Features variable speed trigger and auxiliary depth gauge handle.",
    specs: "High Torque Impact Motor | Keyed/Keyless Chuck | Auxiliary Depth Handle",
    highlights: [
      "Concrete Anchor & Chemical Bolt Drilling",
      "Steel Plate & Structural Section Drilling",
      "Variable Speed & Forward/Reverse Control",
      "Heavy-Duty Industrial Grade Construction",
    ],
  },
];

const ITEMS_PER_PAGE = 8;

export function HeavyEquipment() {
  const [selectedEquipment, setSelectedEquipment] = useState<typeof heavyEquipmentList[0] | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEquipment = useMemo(() => {
    return heavyEquipmentList.filter((e) => {
      let matchesTab = true;
      if (activeTab === "lifting") {
        matchesTab =
          e.category.toLowerCase().includes("lifting") ||
          e.category.toLowerCase().includes("handling") ||
          e.category.toLowerCase().includes("aerial");
      } else if (activeTab === "earthmoving") {
        matchesTab = e.category.toLowerCase().includes("earthmoving");
      } else if (activeTab === "hauling") {
        matchesTab =
          e.category.toLowerCase().includes("hauling") ||
          e.category.toLowerCase().includes("services") ||
          e.category.toLowerCase().includes("concrete") ||
          e.category.toLowerCase().includes("transport");
      } else if (activeTab === "power") {
        matchesTab = e.category === "Power Generation";
      } else if (activeTab === "compaction") {
        matchesTab =
          e.category.toLowerCase().includes("compaction") ||
          e.category.toLowerCase().includes("paving");
      } else if (activeTab === "tools") {
        matchesTab =
          e.category === "Power Tools" ||
          e.category.toLowerCase().includes("demolition") ||
          e.category.toLowerCase().includes("breaking");
      }

      const matchesSearch =
        e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const totalPages = Math.ceil(filteredEquipment.length / ITEMS_PER_PAGE);
  const paginatedEquipment = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEquipment.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEquipment, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const section = document.getElementById("equipment");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Section id="equipment" tone="navy" className="bg-slate-950 text-white border-t border-slate-800 py-12 sm:py-20">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative">
        <SectionHeading
          eyebrow="Fleet & Equipment"
          title="Heavy Equipment Rental & Availability"
          intro="ARZAQ EXPRESS Est. maintains a comprehensive fleet of heavy equipment, diesel generators, earthmoving machinery, lifting cranes, compaction rollers, and power tools for immediate project deployment across KSA."
          invert
        />

        {/* Mobile Horizontal Scrollable Tabs & Search Bar */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-4 items-center w-full">
          <Tabs
            defaultValue="all"
            onValueChange={(val) => {
              setActiveTab(val);
              setCurrentPage(1);
            }}
            className="w-full max-w-4xl"
          >
            <div className="overflow-x-auto pb-1 w-full flex justify-start sm:justify-center">
              <TabsList className="flex w-max sm:w-full bg-slate-900 p-1.5 border border-slate-800 rounded-xl gap-1">
                <TabsTrigger value="all" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  All ({heavyEquipmentList.length})
                </TabsTrigger>
                <TabsTrigger value="lifting" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Lifting & Cranes
                </TabsTrigger>
                <TabsTrigger value="earthmoving" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Earthmoving
                </TabsTrigger>
                <TabsTrigger value="hauling" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Transport & Hauling
                </TabsTrigger>
                <TabsTrigger value="power" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Power Generators
                </TabsTrigger>
                <TabsTrigger value="compaction" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Compaction & Paving
                </TabsTrigger>
                <TabsTrigger value="tools" className="text-xs font-bold px-3 py-2 rounded-lg shrink-0 data-[state=active]:bg-amber-600 data-[state=active]:text-white">
                  Demolition & Tools
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 w-full max-w-4xl">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search heavy equipment fleet..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-9 pr-8 bg-slate-900 border-slate-800 text-white placeholder:text-slate-400 text-sm h-11 sm:h-10 rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCurrentPage(1);
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="text-xs text-slate-400 text-right sm:text-left px-1">
              Showing <span className="text-amber-400 font-bold">{paginatedEquipment.length}</span> of{" "}
              <span className="text-white font-bold">{filteredEquipment.length}</span> Items
            </div>
          </div>
        </div>

        {/* Equipment Responsive Cards Grid */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {paginatedEquipment.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.1}>
              <Card className="h-full border-slate-800 bg-slate-900 text-white hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl group flex flex-col justify-between overflow-hidden rounded-2xl">
                {/* Equipment Photo Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-3 flex items-center justify-center border-b border-slate-800">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <Badge className="absolute top-2.5 left-2.5 bg-slate-950/90 text-amber-400 border border-amber-500/30 text-[0.65rem] uppercase tracking-wider font-bold">
                    #{item.num} · {item.category}
                  </Badge>
                </div>

                <CardHeader className="pb-2 pt-4 px-5">
                  <CardTitle className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-slate-300 line-clamp-3 leading-relaxed mt-1">
                    {item.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="py-2 px-5">
                  <div className="flex items-center gap-1.5 text-[0.7rem] text-amber-400 font-semibold bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{item.specs}</span>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-4 px-5">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedEquipment(item)}
                        className="w-full justify-between border-slate-800 bg-slate-950 text-slate-200 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors text-xs font-semibold h-11 sm:h-9 rounded-xl"
                      >
                        <span>View Specifications</span>
                        <Maximize2 className="h-3.5 w-3.5" />
                      </Button>
                    </DialogTrigger>

                    {selectedEquipment && (
                      <DialogContent className="max-w-[92vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-950 border-slate-800 text-white p-4 sm:p-6 rounded-2xl">
                        <DialogHeader className="text-left">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-amber-500/40 text-amber-400 bg-amber-500/10 text-xs font-bold">
                              #{selectedEquipment.num} · {selectedEquipment.category}
                            </Badge>
                            <span className="text-xs text-slate-400">ARZAQ EXPRESS Est. Heavy Equipment Rental & Availability</span>
                          </div>
                          <DialogTitle className="text-lg sm:text-2xl font-bold text-amber-400 mt-2">
                            {selectedEquipment.name}
                          </DialogTitle>
                          <DialogDescription className="text-slate-300 text-xs sm:text-sm">
                            Heavy Equipment Operational Specifications & Scope
                          </DialogDescription>
                        </DialogHeader>

                        {/* Equipment Photo inside Modal */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white p-4 sm:p-6 border border-slate-800 my-2 flex items-center justify-center">
                          <img
                            src={selectedEquipment.img}
                            alt={selectedEquipment.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {/* Description & Technical Specs */}
                        <div className="space-y-3 py-2">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                              Equipment Overview & Scope
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
                              {selectedEquipment.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                              Technical Configuration & Capacity
                            </h4>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/30">
                              <Cpu className="h-4 w-4 text-amber-400 shrink-0" />
                              <span className="font-semibold leading-snug">{selectedEquipment.specs}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                              Key Capabilities & Operational Features
                            </h4>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {selectedEquipment.highlights.map((h, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 bg-slate-900 p-2.5 rounded-md border border-slate-800">
                                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-slate-800">
                          <Button
                            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold gap-2 h-11 sm:h-10 rounded-xl"
                            asChild
                          >
                            <a href="#contact">
                              <PhoneCall className="h-4 w-4" />
                              <span>Inquire / Book {selectedEquipment.name}</span>
                            </a>
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    )}
                  </Dialog>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Touch-Friendly Grid Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12 overflow-x-auto py-2">
            <Pagination>
              <PaginationContent className="gap-1 sm:gap-2">
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-40 text-slate-500 h-10 px-3 text-xs" : "cursor-pointer text-white hover:text-amber-400 h-10 px-3 text-xs"}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        isActive={currentPage === pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={
                          currentPage === pageNum
                            ? "cursor-pointer font-bold bg-amber-600 text-white border-amber-600 h-10 w-10 text-xs rounded-lg"
                            : "cursor-pointer text-slate-300 hover:text-white hover:bg-slate-900 border-slate-800 h-10 w-10 text-xs rounded-lg"
                        }
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-40 text-slate-500 h-10 px-3 text-xs" : "cursor-pointer text-white hover:text-amber-400 h-10 px-3 text-xs"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </Section>
  );
}

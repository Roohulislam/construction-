import img1 from '../assets/projects/Construction of residential facility for forest department officials  create me image.jpg';
import img2 from "../assets/projects/Construction of district administrative headquarters  create me image.jpg"
import img3 from "../assets/projects/Construction of GPS Kikriala, GPS Masina Batangi, GPS Banota, GPS Riala Sialkot, GPS Seri Banda Sarrar Chamiali create me image.jpg"
import img4 from "../assets/projects/Construction of government middle and primary schools give image for pakistan.jpg"
import img5 from "../assets/projects/Construction of government girls high school  create me image for pakistan.jpg"
import img6 from "../assets/projects/Construction of police station facility create me image for pakistan.jpg"
import img7 from "../assets/projects/Reconstruction of basic health unit create me image for pakistan.jpg"
import img8 from "../assets/projects/Construction of multiple government buildings.jpg"
import img9 from "../assets/projects/Construction of multiple government buildings  give me simple image in pakistan.jpg"
import img10 from "../assets/projects/Construction of multiple buildings for forest department  give me simple image pakistan view.jpg"
import img11 from "../assets/projects/Construction of administrative buildings for forest department  create simple image for pakistan.jpg"
import img12 from "../assets/projects/Construction of primary and middle schools  create me image for pakistan.jpg"
import img13 from "../assets/projects/Construction of multiple educational buildings create me for pakistan.jpg"
import img14 from "../assets/projects/Road improvement and black topping project covering 9km section  craete me image for pakistan.jpg"
import img15 from "../assets/projects/New road construction in mountainous terrain create me an image f;or pakistan.jpg"

export const projectCategories = {
  buildings: {
    title: "Building Construction Projects",
    description: "Our extensive portfolio includes government buildings, educational institutions, and residential projects across Khyber Pakhtunkhwa.",
    projects: [
      {
        id: 1,
        title: "Residence of DGO Gailes Near Shahzada Masjid",
        client: "DFO Gailes Forest Division Abbottabad",
        location: "Abbottabad",
        cost: "20.33 Million PKR",
        image: img1,
        details: "Construction of residential facility for forest department officials"
      },
      {
        id: 2,
        title: "District Secretariat Shangla at Alpuri",
        client: "Executive Engineer Health Shangla at Alpuri",
        location: "Alpuri, Shangla",
        cost: "25.01 Million PKR",
        image: img2,
        details: "Construction of district administrative headquarters"
      },
      {
        id: 3,
        title: "Multiple School Constructions (5 Schools)",
        client: "Deputy Director (Reconstruction) PERRA Shangla",
        location: "Various locations in Shangla",
        cost: "34.191 Million PKR",
        image: img3,
        details: "Construction of GPS Kikriala, GPS Masina Batangi, GPS Banota, GPS Riala Sialkot, GPS Seri Banda Sarrar Chamiali"
      },
      {
        id: 4,
        title: "GMS Shahtoot & GGPS Ranyal",
        client: "Deputy Director W&S Department Shangla",
        location: "Shangla District",
        cost: "16.715 Million PKR",
        image: img4,
        details: "Construction of government middle and primary schools"
      },
      {
        id: 5,
        title: "GGHS Aloch",
        client: "Deputy Director (Reconstruction) PERRA Shangla",
        location: "Shangla District",
        cost: "12.10 Million PKR",
        image: img5,
        details: "Construction of government girls high school"
      },
      {
        id: 6,
        title: "Police Post Karora Shangla",
        client: "Deputy Director (Reconstruction) PERRA Shangla",
        location: "Karora, Shangla",
        cost: "4.787 Million PKR",
        image: img6,
        details: "Construction of police station facility"
      },
      {
        id: 7,
        title: "Reconstruction of BHU Maira",
        client: "Community Uplift Program",
        location: "Maira, Shangla",
        cost: "31.90 Million PKR",
        image: img7,
        details: "Reconstruction of basic health unit"
      },
      {
        id: 8,
        title: "4 Buildings in District Battagram",
        client: "SDO, C&W Division Battagram",
        location: "Battagram District",
        cost: "13.10 Million PKR",
        image: img8,
        details: "Construction of multiple government buildings"
      },
      {
        id: 9,
        title: "4 Buildings in District Mansehra",
        client: "SDO, C&W Division Mansehra",
        location: "Mansehra District",
        cost: "21.700 Million PKR",
        image: img9,
        details: "Construction of multiple government buildings"
      },
      {
        id: 10,
        title: "District Shangla Forest Buildings",
        client: "Deputy Director W&S Department Shangla",
        location: "Shangla District",
        cost: "68.602 Million PKR",
        image: img10,
        details: "Construction of multiple buildings for forest department"
      },
      {
        id: 11,
        title: "Governance Buildings (Forest Department) Abbottabad Package #1",
        client: "Deputy Director W&S Department Abbottabad",
        location: "Abbottabad",
        cost: "50.132 Million PKR",
        image: img11,
        details: "Construction of administrative buildings for forest department"
      },
      {
        id: 12,
        title: "GPS Bar Batkote & GMS Bar Batkote",
        client: "Deputy Director W&S Department Shangla",
        location: "Bar Batkote, Shangla",
        cost: "18.993 Million PKR",
        image: img12,
        details: "Construction of primary and middle schools"
      },
      {
        id: 13,
        title: "Educational Facilities in District Shangla",
        client: "Deputy Director W&S Department Shangla",
        location: "Shangla District",
        cost: "24.384 Million PKR",
        image: img13,
        details: "Construction of multiple educational buildings"
      }
    ]
  },
  roads: {
    title: "Road Construction Projects",
    description: "Specialized in road improvement and construction projects in challenging terrains of Khyber Pakhtunkhwa.",
    projects: [
      {
        id: 1,
        title: "Improvement and Black Topping of Road From Karora Donal Shahpur Ambella",
        client: "Deputy Director (Reconstruction) PERRA Shangla",
        location: "Contract-2 (9-18 KM), Shangla",
        cost: "67.356 Million PKR",
        image: img14,
        details: "Road improvement and black topping project covering 9km section"
      },
      {
        id: 2,
        title: "Construction of Kormang Road",
        client: "XEN C&W Deptt: Shangla",
        location: "Shangla District",
        cost: "15.397 Million PKR",
        image: img15,
        details: "New road construction in mountainous terrain"
      }
    ]
  }
};

export const projectTabs = [
  { id: 'buildings', title: 'Building Projects' },
  { id: 'roads', title: 'Road Projects' }
];
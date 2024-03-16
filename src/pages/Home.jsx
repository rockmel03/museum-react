import React from "react";
import {
  Audio,
  Container,
  Footer,
  Header,
  Hero,
  Information,
  PinSec,
  Video,
} from "../components/Index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const infoData = [
  {
    id: "intro",
    heading: "",
    image: "",
    title: "(0) Introduction",
    description: [
      ` The title of the work itself speaks of a Resurgence of the Homeland, a rebirth, but in this case, in a new form under a riverist national state project, in contrast to the concept of a grand homeland proclaimed by Artigas, under a federal, inclusive, and intercultural model, representative of rights, territorial sovereignty, and identity sovereignty. It also represents the people as a temporal rather than spatial identity, a concept rooted in the indigenous peoples such as the Charrúa and Guarani, from which he drew inspiration. In this work filled with foundational images of the nation, different layers of symbolism are present.`,
    ],
  },
  {
    id: "historical",
    heading: "HISTORICAL CONTEXT",
    image: "",
    title: "(5)",
    description: [
      `At the time of the arrival of the Spaniards in the Río de la Plata in the 16th century, the Charrúas occupied the area between the Paraná River and the Uruguay River. Later, persecuted in their settlements in Santa Fe, they moved towards the Banda Oriental and are associated with the tribes of present-day Uruguay.`,
      `The Charrúa were an ethnic group living on the northern bank of the Río de la Plata. They were the indigenous people encountered by the first European explorers in the region. The pressure of European colonization made them migrate northward, away from the coasts. During the colonial period, they merged with other indigenous peoples comprising the Charrúa macro-ethnic group, with whom they had a direct kinship, thus forming a single cultural unit.`,
    ],
  },
  {
    id: "author",
    heading: "JUAN MANUEL BLANES",
    image: "./author.webp",
    title: "(7) Author",
    description: [
      `(Montevideo, 1830 - Pisa, 1901) Uruguayan painter. In all his works, within the academicism of historical reconstructions and unlike European romantic painters, he sought intimate national values.`,
      `Considered one of the greatest artists of his country, Juan Manuel Blanes's academic work constitutes an important link between Uruguayan painting of the 19th century and that of the 20th century. Between 1860 and 1864, he studied in Paris, Rome, and Florence, acquiring a refined academic technique, primarily oriented towards naturalism.`,
    ],
  },
  {
    id: "initiative",
    heading: "OUR INITIATIVE",
    image: "",
    title: "(8)",
    description: [
      `Our proposal aims to provide training to museum and art space agents across the country to approach works of art as generators of dialogues and debates situated in the here and now, and in connection with the reality of museum visitors.`,
      `For this, we rely on analysis, reflection, and dialogue from different contemporary, critical, and decolonial perspectives. We also draw support from various examples of mediation, different museum narratives, and trends in education linked to these. All of this with the primary goal of working practically on various strategies and methodologies to approach and empathize with audiences`,
    ],
  },
];

const Home = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".loader", {
      duration: 1,
      delay: 2,
      display: "none",
      y: "-100%",
      ease: "power1.inOut",
    });
    tl.from("nav", {
      y: "-100",
      duration: 0.5,
    });
    tl.from(".hero__top-heading h1", {
      y: 110,
      duration: 0.6,
      stagger: 0.2,
    });
    tl.from(".hero__img-overlay", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <main>
      <Container className={`container`}>
        <Header />
        <Hero />
        <Information {...infoData[0]} />
        <Audio />
        <PinSec />
        <Information {...infoData[1]} />
        <Video />
        <Information {...infoData[2]} />
        <Information {...infoData[3]} />
        <Footer />
      </Container>
    </main>
  );
};

export default Home;

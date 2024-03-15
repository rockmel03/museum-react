import React from "react";
import ShowInfo from "./templets/ShowInfo";

const Historical = () => {
  return (
    <section data-scroll className="historical-context">
      <div className="min-h-[60vh] p-5 flex flex-col justify-end">
        <div className="historical__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            HISTORICAL
          </h1>
        </div>
        <div className="historical__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            CONTEXT
          </h1>
        </div>
      </div>
      <ShowInfo
        title={`(5)`}
        discription={[
          `At the time of the arrival of the Spaniards in the Río de la Plata
        in the 16th century, the Charrúas occupied the area between the
        Paraná River and the Uruguay River. Later, persecuted in their
        settlements in Santa Fe, they moved towards the Banda Oriental and
        are associated with the tribes of present-day Uruguay.`,
          `The Charrúa
            were an ethnic group living on the northern bank of the Río de la
            Plata. They were the indigenous people encountered by the first
            European explorers in the region. The pressure of European
            colonization made them migrate northward, away from the coasts.
            During the colonial period, they merged with other indigenous
            peoples comprising the Charrúa macro-ethnic group, with whom they
            had a direct kinship, thus forming a single cultural unit.`,
        ]}
      />
      <div
        data-scroll
        className="historical-img__overlay w-full h-[90vh] overflow-hidden"
      >
        <img
          data-scroll
          data-scroll-speed="0.2"
          src="/img4.webp"
          alt=""
          className="h-full w-full object-cover object-center scale-120"
        />
      </div>
    </section>
  );
};

export default Historical;

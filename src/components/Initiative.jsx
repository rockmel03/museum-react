import React from "react";
import ShowInfo from "./templets/ShowInfo";

const Initiative = () => {
  return (
    <section>
      <div className="min-h-[60vh] p-5 flex flex-col justify-end">
        <div className="initiative__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            OUR
          </h1>
        </div>
        <div className="initiative__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            INITIATIVE
          </h1>
        </div>
      </div>
      <ShowInfo
        title={`(8)
        `}
        discription={[
          `Our proposal aims to provide training to museum and art space agents across the country to approach works of art as generators of dialogues and debates situated in the here and now, and in connection with the reality of museum visitors.`,
          `For this, we rely on analysis, reflection, and dialogue from different contemporary, critical, and decolonial perspectives. We also draw support from various examples of mediation, different museum narratives, and trends in education linked to these. All of this with the primary goal of working practically on various strategies and methodologies to approach and empathize with audiences`,
        ]}
      />
    </section>
  );
};

export default Initiative;

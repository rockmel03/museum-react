import React from "react";
import ShowInfo from "./templets/ShowInfo";

const Author = () => {
  return (
    <section>
      <div className="min-h-[60vh] p-5 flex flex-col justify-end">
        <div className="author__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            JUAN
          </h1>
        </div>
        <div className="author__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            MANUEL
          </h1>
        </div>
        <div className="author__heading overflow-hidden">
          <h1 className="text-[9vw] font-medium leading-[7.5vw] tracking-tighter">
            BLANES
          </h1>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-[40%] ">
          <img
            src="/author.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ShowInfo
        title={`(7) Author`}
        discription={[
          `(Montevideo, 1830 - Pisa, 1901) Uruguayan painter. In all his works, within the academicism of historical reconstructions and unlike European romantic painters, he sought intimate national values.`,
          `Considered one of the greatest artists of his country, Juan Manuel Blanes's academic work constitutes an important link between Uruguayan painting of the 19th century and that of the 20th century. Between 1860 and 1864, he studied in Paris, Rome, and Florence, acquiring a refined academic technique, primarily oriented towards naturalism.`,
        ]}
      />
    </section>
  );
};

export default Author;

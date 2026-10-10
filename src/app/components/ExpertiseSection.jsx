import { expertiseContent } from "../constants";

const ExpertiseSection = () => {
  const leftColumn = expertiseContent.slice(0, 6);
  const rightColumn = expertiseContent.slice(6);

  return (
    <section className="content-wrapper">
      <div className="grid grid-cols-1 gap-5  px-6  lg:grid-cols-[30%_1fr] lg:gap-10 lg:px-14 lg:py-8">
        {/* Heading */}
        <h1 className="flex flex-row gap-2 text-[30px] leading-[1.35] text-black-primary lg:flex-col lg:gap-0 lg:text-[40px]">
          <span>Our areas of</span>
          <em className="text-text-strong">expertise</em>
        </h1>

        {/* Expertise columns */}
        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:gap-x-20">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col">
              {column.map((item, index) => (
                <div
                  key={item}
                  className={`flex min-h-18 items-center py-5 font-sans text-sm uppercase tracking-[0.12em] text-black-primary  ${
                    index !== column.length - 1
                      ? "border-b border-[#eee9e2]"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

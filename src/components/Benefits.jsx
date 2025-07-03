const BASE_URL = import.meta.env.VITE_API_URL;

const Benefits = ({ data }) => {
  return (
    <section className="lg:pt-[60px] lg:pb-[60px] container">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">Benefits</h2>
      <div className="grid grid-cols-5 gap-[20px]">
        {data?.benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between border border-[var(--c-gray-200)] rounded-[8px] px-[15px] py-[20px]"
          >
            <h3 className="font-semibold text-xl mb-[20px]">{item.title}</h3>
            <p className="mb-[20px]">{item.description}</p>
            {item?.image && (
              <img
                src={`${BASE_URL}${item?.image?.url}`}
                className="h-[60px] object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;

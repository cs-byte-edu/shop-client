import { FeatureCard } from "./FeatureCard";

const FeaturedProducts = ({ data }) => {
  return (
    <section className="container lg:py-[70px]">
      <h2 className="lg:text-3xl font-semibold mb-[20px]">
        {data?.section_heading}
      </h2>
      <div className="flex gap-[20px]">
        {data?.categories?.map((item) => (
          <FeatureCard
            key={item.id + item.name}
            category={{ name: item.name, description: item.description }}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

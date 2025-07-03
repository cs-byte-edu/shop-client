export const FeatureCard = ({ category }) => {
  // console.log("category: ", category);
  return (
    <div className="lg:py-[20px] flex-[1_1_25%] py-[16px] px-[20px] rounded-[4px] nth-[1]:bg-[var(--c-blue-30)] nth-[2]:bg-[var(--c-red-10)] nth-[3]:bg-[var(--c-green-50)] nth-[4]:bg-[var(--c-purple-30)]">
      <h3 className="text-2xl font-semibold mb-[10px]">{category.name}</h3>
      <p>{category.description}</p>
    </div>
  );
};

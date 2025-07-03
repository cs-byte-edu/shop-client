const PageAbout = () => {
  return (
    <section className="lg:pt-[60px] lg:pb-[60px] container">
      <section className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to Our Shop — your go-to destination for high-quality,
          hand-picked products that blend style, value, and convenience.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Founded in 2020, Our Shop was born out of a passion for helping
            people discover everyday essentials and lifestyle accessories at
            fair prices. We believe shopping should be simple, affordable, and
            enjoyable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is dedicated to curating a wide selection of trusted brands
            and unique finds that meet our strict quality standards.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-bold mb-6 text-center">What We Value</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Quality</h4>
            <p className="text-gray-600">
              We carefully select and test every product to ensure the highest
              quality.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Trust</h4>
            <p className="text-gray-600">
              Our customers come first. We aim to earn your trust with honest
              service and support.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
            <p className="text-gray-600">
              We support ethical sourcing and work toward reducing our
              environmental footprint.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PageAbout;

import PricingCard from '../molecules/PricingCard';

const PricingSection = () => {
  const plans = [
    {
      title: "Free Plan",
      price: "Free",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices"
      ]
    },
    {
      title: "Standard Plan",
      price: "$9 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere"
      ],
      highlight: true
    },
    {
      title: "Premium Plan",
      price: "$12 / mo",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's choose the package that is best for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
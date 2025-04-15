import FeatureItem from '../molecules/FeatureItem';

const FeaturesSection = () => {
  const features = [
    {
      iconName: 'check',
      title: 'Powerful online protection',
      description: 'Secure your data with military-grade encryption'
    },
    {
      iconName: 'check',
      title: 'Internet without borders',
      description: 'Access content from anywhere in the world'
    },
    {
      iconName: 'check',
      title: 'Supercharged VPN',
      description: 'Get lightning-fast connection speeds'
    },
    {
      iconName: 'check',
      title: 'No specific time limits',
      description: 'Use our service 24/7 without restrictions'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <Image
              src="/features.jpg"
              alt="Feature Illustration"
              width={500}
              height={400}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Provide Many Features You Can Use
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our features designed to enhance your online experience
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  iconName={feature.iconName}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
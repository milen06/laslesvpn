import Image from 'next/image';
import Button from '../atoms/Button';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Konten Teks */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Want anything to be easy with{' '}
              <span className="text-red-500">LaslesVPN</span>.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md">
              Provide a network for all your needs with ease and fun using LaslesVPN. 
              Discover interesting features from us.
            </p>

            <Button 
              variant="primary"
              className="px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-red-600/50"
            >
              Get Started
            </Button>
          </div>

          {/* Gambar Hero */}
          <div className="md:w-1/2">
            <div className="relative w-full h-80 md:h-96">
              <Image
                src="/hero.jpg"
                alt="VPN Illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
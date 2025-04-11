import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white container mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>LaslesVPN - Secure and Easy VPN Service</title>
        <meta name="description" content="Provide a network for all your needs with ease and fun using LaslesVPN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* nav items*/}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="LaslesVPN Logo" className="w-10 h-9 mr-0" />
        </div>
        <div className="text-xl font-bold text-red-500 object-left">Lasles<b>VPN</b></div>
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 transation duration-300">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transation duration-300">Pricing</a>
          <a href="#testimoni" className="text-gray-600 hover:text-gray-900 transation duration-300">Testimonials</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hidden md:block text-gray-600 hover:text-gray-900 font-medium">Sign In</a>
          <a href="#" className="bg-white text-red-500 border-2 border-red-500 px-6 py-1 rounded-full font-medium hover:bg-red-500 hover:text-white hover:border-red-600 transition-colors duration-300">Sign Up</a>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Want anything to be easy with <span className="text-black-500 font-extrabold">LaslesVPN</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-md">
              Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg 
                  shadow-lg shadow-red-500/50 hover:shadow-red-600/50 
                  animate-pulse hover:animate-none transition-all cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/hero.jpg" alt="VPN Illustration" className="w-full" />
          </div>
        </div>
      </main>

      <section className="bg-white py-12 shadow-lg rounded-xl mx-6 md:mx-16 lg:mx-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="mr-2 flex items-center">
                <img src="/users.jpg" alt="LaslesVPN Logo" className="w-12 h-10" />
              </div>
              <div className="text-2xl font-bold text-gray-900">90+</div>
              <div className="text-gray-600">Users</div>
            </div>
            <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="mr-2 flex items-center">
                <img src="/loc.jpg" alt="LaslesVPN Logo" className="w-12 h-10" />
              </div>
              <div className="text-2xl font-bold text-gray-900">30+</div>
              <div className="text-gray-600">Locations</div>
            </div>
            <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="mr-2 flex items-center">
               <img src="/server.jpg" alt="LaslesVPN Logo" className="w-12 h-10" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Servers</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img 
                src="/pict2.jpg" 
                alt="Feature Illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>

           <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Provide Many Features You Can Use
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>

            <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Powerful online protection.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                <span className="text-gray-700">Internet without borders.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                <span className="text-gray-700">Supercharged VPN</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                <span className="text-gray-700">No specific time limits.</span>
            </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Pricing Plans Section */}
<section id="pricing" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto px-6 max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Let's choose the package that is best for you and explore it happily and cheerfully.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Free Plan */}
      <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
        <div className="mb-8">
          <img src="/pict3.jpg" alt="Free Plan" className="w-50 h-50 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Free Plan</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Encrypted Connection</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">No Traffic Logs</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Works on All Devices</span>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-13">Free <span className="text-gray-500 text-base font-normal"></span></p>
          <button className="w-full bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white py-3 rounded-full font-medium transition duration-300">
            Select
          </button>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
        <div className="mb-8">
          <img src="/pict3.jpg" alt="Standard Plan" className="w-50 h-50 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Standard Plan</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Encrypted Connection</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Yes Traffic Logs</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Works on All Devices</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Connect Anywhere</span>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4">$9 <span className="text-gray-500 text-base font-normal">/ mo</span></p>
          <button className="w-full bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white py-3 rounded-full font-medium transition duration-300">
            Select
          </button>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
        <div className="mb-8">
          <img src="/pict3.jpg" alt="Premium Plan" className="w-50 h-50 mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Plan</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Unlimited Bandwidth</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Encrypted Connection</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Yes Traffic Logs</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Works on All Devices</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Connect Anywhere</span>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-gray-900 mb-4">$12 <span className="text-gray-500 text-base font-normal">/ mo</span></p>
          <button className="w-full bg-white text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white py-3 rounded-full font-medium transition duration-300">
            Select
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Global Network Section */}
<section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto px-6 max-w-6xl text-center">
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Huge Global Network <br />
        <span className="text-red-500">of Fast VPN</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        See <strong className="text-red-500">LaslesVPN</strong> everywhere to make it easier for you when you move locations.
      </p>
    </div>

    {/* World Map Image - Clean Version */}
    <div className="max-w-4xl mx-auto mb-16">
      <img 
        src="/maps.jpg" 
        alt="Global VPN Network Coverage" 
        className="w-full h-auto"
      />
    </div>

    {/* Partner Logos - Optional */}
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      <img src="/netflix.jpg" alt="Netflix" className="h-13 opacity-60 hover:opacity-100 transition-opacity" />
      <img src="/reddit.jpg" alt="Netflix" className="h-13 opacity-60 hover:opacity-100 transition-opacity" />
      <img src="/spotify.jpg" alt="Spotify" className="h-13 opacity-60 hover:opacity-100 transition-opacity" />
      <img src="/amazon.jpg" alt="Amazon" className="h-13 opacity-60 hover:opacity-100 transition-opacity" />
      <img src="/discord.jpg" alt="Netflix" className="h-13 opacity-60 hover:opacity-100 transition-opacity" />
    </div>
  </div>
</section>

<section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Happy Customers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div id="testimoni" className="grid md:grid-cols-3 gap-6 mb-16 px-4 sm:px-6 lg:px-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4 bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Viezh Robert"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Viezh Robert</h2>
                  <p className="text-gray-500 text-sm">Warsaw, Poland</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">4.5</span>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700">
              "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4 bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Yessica Christy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Yessica Christy</h2>
                  <p className="text-gray-500 text-sm">Shanxi, China</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">4.5</span>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700">
              "I like it because I like to travel far and still can connect with high speed."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4 bg-white p-8 rounded-xl shadow-sm transition-all duration-300 border-2 border-transparent hover:border-red-500 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/75.jpg" 
                    alt="Kim Young Jou"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Kim Young Jou</h2>
                  <p className="text-gray-500 text-sm">Seoul, South Korea</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-1">4.5</span>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700">
              "This is very unusual for my business that currently requires a virtual private network that has high security."
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Subscribe Now for Get Special Features!
          </h3>
          <p className="text-gray-600 mb-6">
            Let's subscribe with us and find the fun.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-lg 
                  shadow-lg shadow-red-500/50 hover:shadow-red-600/50 
                  animate-pulse hover:animate-none transition-all cursor-pointer">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>

    <footer className="bg-white-900 text-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Lasles<b>VPN</b></h2>
            <p className="text-gray-400 mb-6">
              LasiesVPN is a private virtual network that has unique features and has high security.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Download</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Server</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Countries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Engage Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Engage</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">LasiesVPN ?</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Earn Money Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Earn Money</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Affiliate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Become Partner</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>©2020LasiesVPN</p>
        </div>
      </div>
    </footer>
</div>
  );
}
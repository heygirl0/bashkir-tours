import {RevealOnScroll} from '../RevealOnScroll';
import backgroundImage from '../../assets/backgroundImage.jpg';
export const Home = () => {
    return (
    <section
              id="home" 
              className={`bg-[url('${backgroundImage}')] bg-cover bg-center min-h-screen flex items-center justify-center relative`}
              >
                <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">B A S H K O R T O S T A N</h1>
                    <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Experience the magic of Bashkortostan!
                     From breathtaking landscapes and majestic mountains to rich cultural heritage,
                     our tours immerse you in the heart of this stunning region.
                     Discover ancient traditions, savor delicious local cuisine, and explore hidden gems. 
                     Your adventure awaits! Ждем вас!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#View Tours" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Tours
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover: bg-blue-500/10">
                        Contact Us
                        </a>

                    </div>
                </div>
                </RevealOnScroll>
              </section>
              );
}
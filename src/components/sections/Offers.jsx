import {RevealOnScroll} from '../RevealOnScroll';
export const About = () => {

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Our Offer</h2>
            <p className="text-blue-160 mb-6">
            We are your guides to the enchanting beauty of Bashkortostan.
             With us, you'll explore the uncharted, be awed by the might of nature, and find peace away from the urban hustle.
             For 13 years, we have been creating unforgettable travel experiences for our guests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Excursions and Recreation</h3>
                    <div className="flex-wrap gap-2">
                    <p className="text-gray-300 mb-6">
                    <strong className="text-blue-200 mb-6">For those who prefer</strong> active leisure, we provide excursions to the picturesque locations of Bashkortostan,
                    hiking in the mountains, cycling, and visits to nature reserves.
                    You can immerse yourself in the beauty of nature, and our experienced guides will
                    not only help you uncover all the secrets of the region but also organize a rich program.
            </p> 
            </div>
            </div>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Comfort and Relaxation</h3>
                    <div className="flex-wrap gap-2">
                    <p className="text-gray-300 mb-6">
                    <strong className="text-blue-200 mb-6">If you wish to rest</strong> and unwind, our tours include accommodation in comfortable hotels
                     and resorts where you can enjoy tranquility and seclusion. We also offer spa treatments,
                      massages, and other services that will help you recharge and regain energy after a busy day.
            </p> 
            </div>
                </div>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Adventure Tours</h3>
                    <div className="flex-w-wrap gap-2">
                    <p className="text-gray-300 mb-6">
                    <strong className="text-blue-200 mb-6">For those seeking excitement,</strong> we provide adventure tours that
                     can include activities such as rock climbing, white-water rafting, or paragliding,
                      allowing you to experience the thrill of Bashkortostan's breathtaking landscapes from
                       different perspectives. Our guides ensure safety while providing you with an unforgettable adrenaline rush.
            </p> 
            </div>
            </div>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cultural Experiences</h3>
                    <div className="flex-wrap gap-2">
                    <p className="text-gray-300 mb-6">
                    <strong className="text-blue-200 mb-6">In addition to outdoor activities,</strong> we offer immersive cultural experiences that allow you to explore
                     the rich history and traditions of Bashkortostan. You can participate
                      in local festivals, taste traditional cuisine, and visit historical sites, enhancing
                       your understanding of the region's unique heritage.
            </p> 
            </div>
            </div>
                </div>
            </div>
            </RevealOnScroll>
    </section>
    );
}
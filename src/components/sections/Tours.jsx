import Pic from '../../assets/photo1.jpg';
import Pic2 from '../../assets/photo2.jpg';
import Pic3 from '../../assets/photo3.jpg';
import Pic4 from '../../assets/photo4.jpg';
import Pic5 from '../../assets/photo5.jpg';
import Pic6 from '../../assets/photo6.jpg';
import {RevealOnScroll} from '../RevealOnScroll';
export const Tours = () => {

    return <section id="tours" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Recommended Tours</h2>
        <div className="flex flex-wrap justify-between py-20 gap-7">
    <div className="w-1/4 text-center "> 
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> <strong>Aigir Rocks</strong></p><img src={Pic} alt="Описание 1" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
    </div>
    <div className="w-1/4 text-center">
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center" ><strong>Zyuratkul Ridge</strong></p><img src={Pic2} alt="Описание 2" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
    </div>
    <div className="w-1/4 text-center">
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"> <strong>Mayardak</strong></p><img src={Pic3} alt="Описание 3" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
    </div>
    <div className="w-1/4 text-center "> 
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"><strong>Inzer Pinnacles</strong></p><img src={Pic4} alt="Описание 1" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
    </div>
    <div className="w-1/4 text-center">
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"><strong>Ay River Cliffs</strong></p><img src={Pic5} alt="Описание 2" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
    </div>
    <div className="w-1/4 text-center "> 
        <p className="text-2xl mb-2 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"><strong>Shulgan-Tash Cave</strong></p><img src={Pic6} alt="Описание 1" style ={{ border:'2px solid blue', borderRadius: '5px', padding: '5px'}} className="w-full border hover:-translate-y-1 transition-all"  />
        </div>
</div>
        </div>
        </RevealOnScroll>
    </section>

}
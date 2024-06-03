import Image from 'next/image';
import Button from './Button'; // Assuming Button.tsx is in the same directory

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex ">
        {/* Left Span */}
        <div className="md:justify-start lg:justify-start items-center md:items-start lg:items-start text-center md:text-left lg:text-left w-full md:w-1/2 lg:w-1/2 text-white justify-between items-center">
          <div className='flex flex-col'>
            <div className=' px-4 md:px-1 lg:px-6 py-3 lg:py-8 mt-8 md:mt-20 lg:mt-40 md:ml-16 lg:ml-28'>
              <h1 className="text-black font-bold text-[30px] md:text-[4vw] lg:text-[4vw] font-bold mb-2 leading-none">Make The Best Financial Decisions</h1>
              <p className="text-gray-500 text-[17px] text-lg mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laborum quisquam vitae in fugiat dio dolorum natus distinctio minus nemo velit.</p>
              <div className="flex space-x-4 justify-center md:justify-start lg:justify-start">
                {/* Adjusted Button classes */}
                <Button text="Get Started -->" className="bg-black text-white border border-black rounded-md px-4 py-2" />
                <Button text="Watch Video" iconSrc="/assets/icons/watchVideo.svg" className="flex items-center text-black" />
              </div>
            </div>
            <div className=' md:hidden lg:block px-10 sm:px-15 md:px-15 lg:px-20 pt-5 md:pt-8 lg:pt-8'>
              <Image src="/assets/images/herosectionleft.svg" alt="herosectionleft" width={600} height={400} className="mt-6 w-full object-cover"/>
            </div>
          </div>
        </div>
        
        {/* Right Span */}
        <div className="hidden md:block lg:block md:w-1/2 lg:w-1/2 text-white flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <Image src="/assets/images/herosectionright.svg" alt="herosectionright" width={1600} height={800} />
        </div> 
      </div>
    </>
  );
};

export default HeroSection;

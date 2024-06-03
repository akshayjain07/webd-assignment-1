import Image from 'next/image';
import phoneImage from '../public/assets/images/apple-logo.svg'; // Ensure you have the phone mockup image in your public directory

const GetStarted = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-black text-white p-8 lg:p-16">
      <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl font-bold mb-4">Ready To Get Started?</h1>
        <p className="mb-8">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.</p>
        <button className="bg-white text-black py-2 px-6 rounded-full flex items-center mx-auto lg:mx-0">
          {/* <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
            <path d="M16.365 1.43c-.944.108-2.083.688-2.745 1.52-.6.73-1.12 1.91-.92 3.02.94.043 2.074-.59 2.724-1.49.632-.789 1.115-1.904.941-3.05zM20.408 8.35c-1.516-1.89-3.675-1.986-4.573-1.986-1.014 0-1.935.573-2.727.573-.83 0-1.735-.558-2.87-.558-2.21 0-4.512 1.634-4.512 4.826 0 1.908.7 3.883 1.563 5.168.743 1.122 1.68 2.384 2.924 2.336.922-.039 1.271-.607 2.675-.607 1.4 0 1.707.607 2.726.585 1.128-.022 1.835-1.11 2.526-2.24.83-1.28 1.17-2.52 1.19-2.584-.026-.014-2.267-.88-2.292-3.478-.022-2.209 1.748-3.253 1.828-3.306-.994-1.442-2.566-1.608-3.116-1.608zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
          </svg> */}
          Download App
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Image src={phoneImage} alt="App Preview" className="max-w-xs md:max-w-md" />
      </div>
    </div>
  );
};

export default GetStarted;

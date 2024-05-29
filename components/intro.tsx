import { CMS_NAME } from "../lib/constants";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center">
            <img src="/assets/shared/SecureAGILogo-512x512.jpg" alt="SecureAGI Logo" className="w-full h-full rounded" />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          SecureAGI
        </h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Security is the core towards AGI
      </h4>
    </section>
  );
};

export default Intro;

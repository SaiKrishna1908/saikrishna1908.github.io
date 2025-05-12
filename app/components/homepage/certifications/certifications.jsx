import React from 'react';
import Image from "next/image";
import { certifications } from '@/utils/data/certfications';
import GlowCard from "../../helper/glow-card";
import Link from 'next/link';

const Certifications = () => {
  return (
    <section id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* <div className="py-8">
        <div>
          <div className="flex flex-row flex-wrap gap-6">
            {
              certifications.map(certification => (
                <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex items-center gap-x-8 px-2 py-2">
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {certification.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {certification.organization}
                        </p>
                      </div>
                    </div>

                  </div>
                  <div className="flex justify-center  mt-2 mb-8 lg:mt-4">
                    <Link
                      className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                      role="button"
                      href="#{certification.credentialLink}"
                      target='_blank'
                    >
                      <span>Credentials</span>
                    </Link>
                  </div>
                </GlowCard>
              ))
            }
          </div>
        </div>
      </div> */}


      <div className="py-8">

        <div>
          <div className="flex flex-col gap-6">
            {
              certifications.map(certification => (
                <GlowCard key={certification.id} identifier={`certification-${certification.id}`}>
                  <a href={certification.credentialLink} target="_blank">
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex items-center gap-x-8 px-3 py-2">
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certification.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {certification.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </GlowCard>
              ))
            }
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
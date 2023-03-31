import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/cover.png'
import logo from '@/images/logo.png'
function Testimonial() {
  return (
    <div className="relative mx-auto -mt-16 h-48 w-48 overflow-hidden rounded-full bg-black md:float-right md:h-72 md:w-72 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 object-contain w-full h-full"
              src={logo}
              alt=""
              sizes="(min-width: 1024px) 12rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/3 z-10 rounded-br-6xl bg-[#E91c8F] xl:bg-gradient-to-l from-[#E91C8F]  to-black mix-blend-multiply text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-32">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 flex w-64 mx-auto shadow-xl rounded-xl bg-slate-600 md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="pt-16 bg-white lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-extrabold font-display text-slate-900 sm:text-6xl">
             Unlocking your potentials in Tech.
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Register for out first edition Tech Training Scholarship and access the oppurtunity to learn a wide range of IT skill
             {/* A comprehensive training session crafted to help you become a professional in the tech industry */}
            </p>
            <div className="flex gap-4 mt-8">
              <Button href="#free-chapters" color="red">
               Register Now
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

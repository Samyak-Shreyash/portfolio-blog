import React from 'react'
import AboutCoverSection from '@/src/components/About/AboutCoverSection';
import Link from 'next/link';
import Skills from '@/src/components/About/Skills';

const Page = () => {
  return (
    <>
    <AboutCoverSection />
    <Skills />
    <h2 className='mt-8 font-semibold text-2xl self-start mx-20 text-dark'>
    Have a project in mind? Reach out to me 📞 from <Link href="/contact" className='!underline'>here</Link> and let's make it happen. 
    </h2>
    </>
  )
}

export default Page;
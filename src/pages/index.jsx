import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
// import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
// import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
// import { Testimonial } from '@/components/Testimonial'
// import { Testimonials } from '@/components/Testimonials'
// import avatarImage1 from '@/images/avatars/avatar-1.png'
// import avatarImage2 from '@/images/avatars/avatar-2.png'
// import Enroll from '@/components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
         Expectoo Academy
        </title>
        <meta
          name="description"
          content="Tech Traning for Everyone "
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Resources />
      <FreeChapters />
      <Author />
      <Footer />
    </div>
  )
}

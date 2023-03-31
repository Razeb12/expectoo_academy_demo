import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="text-4xl font-bold tracking-tight font-display text-slate-900">
          “Tech Training for Everyone” is a comprehensive training Scholarship
          that helps anyone learn the skills needed to design and develop
          websites, apps, and other tech projects.
        </p>
        <p className="mt-4">
          From absolute beginners to experienced professionals, this course is
          designed to teach you the necessary skills needed to make a successful
          career in tech.
        </p>
        <p className="mt-4">
          You’ll learn how to create a website from scratch using HTML, CSS, and
          JavaScript, design mobile apps with React Native, and create
          interactive webpages with React.js. You’ll also learn about the
          fundamentals of web hosting, server-side programming, and UI/UX.
        </p>

        <ul role="list" className="mt-8 space-y-3">
          {[
            'Learn to create websites from scratch using HTML, CSS, and JavaScript',
            'Design mobile apps with Flutter',
            'Hands-on projects and practical exercises to test your knowledge',
            'Learn how to use modern development tools like Git and Node.js',
            'Learn the fundamentals of UX/UI design',
            'Create secure websites using industry best practices'
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="flex-none w-8 h-8 fill-[#E91C8F]" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Throughout the session, you’ll be given hands-on projects to complete
          and practical exercises to test your knowledge. By the end of the
          session, you’ll have all the skills you need for a successful career
          in tech.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-[#E91C8F]"
          >
          Enroll now to get started
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}

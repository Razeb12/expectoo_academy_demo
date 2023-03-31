import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'

export function FreeChapters() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="bg-gradient-to-l from-[#E91C8F]  to-black mix-blend-multiply scroll-mt-14 sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid items-end grid-cols-1 py-20 gap-y-12 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          {/* <Pattern className="absolute left-0 w-full -top-32 sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" /> */}
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-white font-display sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight text-blue-200">
              Enter your email address and get started 
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Start your enrollment Process
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="relative z-10 w-full px-4 py-2 text-base text-white bg-transparent appearance-none peer placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 border rounded-md border-white/20 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="white"
                className="w-full mt-4 sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free chapters
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  )
}

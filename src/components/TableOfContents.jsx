import { Container } from "@/components/Container";
import { Expandable } from "@/components/Expandable";
import { SectionHeading } from "@/components/SectionHeading";

const tableOfContents = {
  Categories: {
    Technology: 1,
    "E-commerce": 2,
    Healthcare: 3,
    Finance: 4,
    Gaming: 5,
    Education: 6,
    "Real Estate": 7,
    "Marketing and advertising": 8
  }
};

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Table of contents
        </SectionHeading>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the industries you can work in.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          With our comprehensive and tailored course outline you're sure to get
          jobs into the top 3% tech companies in the following.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-6 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 1)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-[#E91C8F]"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  );
}

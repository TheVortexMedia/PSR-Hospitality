import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(to bottom, #f8fafc, #e2e8f0)",
      }}
    >
      <div className="w-[98%] md:w-9/12 mx-auto">
        {/* Section Header */}
        <div className=" md:text-left text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-light mb-4 italic"
            style={{ color: "#214280" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0">
            Find answers to common questions about our catering services, menu
            options, and booking process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4"
          defaultValue="item-1"
        >
          <AccordionItem
            value="item-1"
            className="border-b border-[#214280]/25 px-3 md:px-6 py-1"
          >
            <AccordionTrigger
              className="text-left font-medium hover:no-underline text-sm md:text-base"
              style={{ color: "#214280" }}
            >
              What types of events do you cater to?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-xs md:text-[15px]">
              <p className="mb-3 leading-5.5">
                We provide catering services for college fests, cultural meets,
                corporate gatherings, sports events, family celebrations, and
                private parties of all sizes.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-b border-[#214280]/25 px-3 md:px-6 py-1"
          >
            <AccordionTrigger
              className="text-left font-medium hover:no-underline text-sm md:text-base"
              style={{ color: "#214280" }}
            >
              Do you offer both vegetarian and non-vegetarian options?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-xs md:text-[15px]">
              <p className="mb-3 leading-5.5">
                Yes, our menu includes a wide range of vegetarian, vegan, and
                non-vegetarian dishes prepared with fresh ingredients and
                authentic flavors.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-b border-[#214280]/25 px-3 md:px-6 py-1"
          >
            <AccordionTrigger
              className="text-left font-medium hover:no-underline text-sm md:text-base"
              style={{ color: "#214280" }}
            >
              Can the menu be customized for my event?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-xs md:text-[15px]">
              <p className="mb-3 leading-5.5">
                Absolutely. We offer flexible menu packages that can be tailored
                to match your theme, dietary preferences, and budget.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-b border-[#214280]/25 px-3 md:px-6 py-1"
          >
            <AccordionTrigger
              className="text-left font-medium hover:no-underline text-sm md:text-base"
              style={{ color: "#214280" }}
            >
              How far in advance should I book your services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed pt-2 text-xs md:text-[15px]">
              <p className="mb-3 leading-5.5">
                For large events, we recommend booking at least two weeks in
                advance. Smaller gatherings can often be accommodated with
                shorter notice, depending on availability.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border-b border-[#214280]/25 px-3 md:px-6 py-1"
          >
            <AccordionTrigger
              className="text-left font-medium hover:no-underline text-sm md:text-base"
              style={{ color: "#214280" }}
            >
              Do you handle setup and service as well?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pt-2 text-xs md:text-[15px]">
              <p className="mb-3 leading-5.5 ">
                Yes, our team manages everything from setup to serving, ensuring
                a smooth and hassle-free catering experience for you and your
                guests.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqItems } from "@/json/faq";

type FaqProps = {
  className?: string;
};

const Faq = ({ className }: FaqProps) => {
  return (
    <Card className={`${className}`}>
      <CardHeader className="">
        <CardTitle className="text-white text-xl md:text-2xl">FAQ</CardTitle>
      </CardHeader>
      <CardContent className=" ">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`} className="">
              <AccordionTrigger className="">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default Faq;

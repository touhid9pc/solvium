import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import DownArrow from "@/assets/icons/down-arrow.svg";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "relative mb-4 rounded-xl overflow-hidden bg-[#202022]",
        className
      )}
      {...props}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0))",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Inner content container */}
      <div className="relative z-10 rounded-xl">{children}</div>
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          " focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-base md:text-xl font-medium transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180  px-4 text-white",
          className
        )}
        {...props}
      >
        {children}
        <img src={DownArrow} alt="down-arrow" className="w-4 h-4" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base md:text-xl px-4 bg-[#202022]"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

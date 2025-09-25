// components/contact-support.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const handleSendMessage = () => {
    console.log("Message sent!");
  };

  return (
    <Card className={`p-4 md:p-6 ${className}`}>
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-white text-xl md:text-2xl">
          Contact support
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-4">
          <div>
            <p className="text-base md:text-xl text-white mb-2">Subject</p>
            <Input
              className="w-full bg-neutral-800 border-none text-white placeholder-neutral-500 h-10 text-lg"
              placeholder="Brief description of your issue"
            />
          </div>
          <div>
            <p className="text-base md:text-xl text-white mb-2">Message</p>
            <Textarea
              className="w-full bg-neutral-800 border-none text-white placeholder-neutral-500"
              placeholder="Brief description of your issue"
            />
          </div>
        </div>
        <Button
          onClick={handleSendMessage}
          disabled
          className="w-full mt-6 font-semibold h-10"
        >
          Send Message
        </Button>
        <p className=" text-white mt-2">
          We typically respond within 24 hours.
        </p>
      </CardContent>
    </Card>
  );
}

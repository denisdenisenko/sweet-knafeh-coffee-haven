import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ההודעה נשלחה!",
      description: "נחזור אליך בהקדם האפשרי.",
    });
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">צור קשר</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">שם</label>
              <Input id="name" placeholder="השם שלך" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">אימייל</label>
              <Input id="email" type="email" placeholder="האימייל שלך" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">הודעה</label>
              <Textarea id="message" placeholder="כיצד נוכל לעזור?" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">שלח הודעה</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
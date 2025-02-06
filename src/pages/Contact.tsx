
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
    <div className="min-h-screen bg-background dark:bg-primary-dark transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">צור קשר</h1>
        <div className="max-w-2xl mx-auto glass-morphism p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80 dark:text-foreground/70">שם</label>
              <Input id="name" placeholder="השם שלך" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80 dark:text-foreground/70">אימייל</label>
              <Input id="email" type="email" placeholder="האימייל שלך" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80 dark:text-foreground/70">הודעה</label>
              <Textarea id="message" placeholder="כיצד נוכל לעזור?" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full hover-lift">שלח הודעה</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

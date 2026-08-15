import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919076269629"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}

export default WhatsAppFloat;

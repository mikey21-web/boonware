import Link from "next/link";
import { Utensils, Bot, ShoppingCart, Check, type LucideIcon } from "lucide-react";
import PageShell from "@/components/PageShell";

interface Bundle {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  included: string[];
  href: string;
  popular?: boolean;
}

const bundles: Bundle[] = [
  {
    icon: Utensils,
    title: "Restaurant Automation Bundle",
    description: "Complete restaurant digitization from QR-based ordering to real-time kitchen coordination and POS billing.",
    price: "Starting at ₹54,999",
    included: [
      "QR Code Menu & Ordering System",
      "Kitchen Display System",
      "POS Integration",
      "Inventory Management",
      "Customer Analytics",
      "Staff Management Portal",
    ],
    href: "/bundles/restaurant",
  },
  {
    icon: Bot,
    title: "AI/ML Bundle",
    description: "Enhance your platform with intelligent features like recommendations, sentiment analysis, and smart chatbots.",
    price: "Starting at ₹79,999",
    included: [
      "Smart Recommendation Engine",
      "Sentiment Analysis",
      "Intelligent Chatbot",
      "Predictive Analytics",
      "Custom AI Model Training",
      "API Integrations",
    ],
    href: "/bundles/ai-ml",
    popular: true,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Bundle",
    description: "Launch and scale a complete multi-role marketplace with user, seller, driver, and admin systems.",
    price: "Starting at ₹74,999",
    included: [
      "Multi-vendor Marketplace",
      "User Mobile App",
      "Seller Dashboard",
      "Delivery Management",
      "Admin Panel",
      "Payment Gateway Integration",
    ],
    href: "/bundles/ecommerce",
  },
];

export default function BundlesPage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Service <span className="text-gradient">Bundles</span>
              </h1>
              <div className="w-24 h-1 gradient-border mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete solutions designed for specific industries and use cases. Each bundle includes
                everything you need to transform your business operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bundles.map((bundle) => {
                const Icon = bundle.icon;
                return (
                  <div
                    key={bundle.href}
                    className={`rounded-lg border bg-card text-card-foreground shadow-sm relative hover:shadow-xl transition-shadow ${
                      bundle.popular ? "ring-2 ring-primary dark:ring-primary/70" : ""
                    }`}
                  >
                    {bundle.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary text-primary-foreground">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col space-y-1.5 p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <Icon className="w-12 h-12 text-primary-light" />
                      </div>
                      <h3 className="font-semibold tracking-tight text-2xl">{bundle.title}</h3>
                      <p className="text-muted-foreground text-lg">{bundle.description}</p>
                      <div className="text-3xl font-bold text-primary-light mt-4">{bundle.price}</div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-foreground">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {bundle.included.map((item) => (
                            <li key={item} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <Link
                          href={bundle.href}
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        >
                          Learn More
                        </Link>
                        <Link
                          href="/appointment"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                        >
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Our Bundles?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold tracking-tight text-xl">Complete Solutions</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">
                    Each bundle includes everything you need - from frontend to backend, mobile apps to
                    admin panels.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold tracking-tight text-xl">Faster Deployment</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">
                    Pre-designed solutions mean faster time to market, typically 50% faster than custom
                    development.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold tracking-tight text-xl">Cost Effective</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">
                    Bundled pricing offers significant savings compared to individual service components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Need a Custom Bundle?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don&apos;t see exactly what you need? We can create a custom bundle tailored to your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
              >
                Discuss Custom Bundle
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

import Link from "next/link";
import { ArrowRight, Check, ShoppingCart } from "lucide-react";
import PageShell from "@/components/PageShell";

const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2";

const outlineButtonClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2";

const systemComponents = [
  "Multi-vendor Marketplace",
  "Customer Mobile App",
  "Seller Dashboard",
  "Delivery Management System",
  "Admin Control Panel",
  "Payment Gateway Integration",
  "Inventory Management",
  "Order Tracking System",
];

const keyBenefits = [
  "Complete marketplace in 4-6 weeks",
  "Multi-vendor support",
  "Real-time order tracking",
  "Automated payment processing",
  "Scalable architecture",
  "Mobile-first design",
];

const howItWorksSteps = [
  "Sellers register and list products",
  "Customers browse and place orders",
  "Payment processed securely",
  "Order assigned to delivery partner",
  "Real-time tracking for all parties",
  "Automated notifications and updates",
];

interface PricingBundle {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const pricingBundles: PricingBundle[] = [
  {
    title: "Starter Bundle",
    price: "₹74,999",
    features: [
      "User Website – Mobile-first responsive design",
      "Android PWA App – Low-cost app-like experience",
      "Basic Admin Panel – Manage products/orders",
      "Seller Dashboard – Track stock and receive orders",
      "1 Month Support – Bug fixes, deployment help",
    ],
  },
  {
    title: "Growth Bundle",
    price: "₹94,999",
    features: [
      "All Starter Bundle features",
      "iOS & Android Native Apps – Published on App Stores",
      "Delivery Partner Panel – Assign and manage deliveries",
      "Master Admin Dashboard – Global control + analytics",
      "6 Months Support – Stability & performance assurance",
    ],
  },
  {
    title: "Pro Bundle + AI",
    price: "₹1,49,999",
    features: [
      "All Growth Bundle features",
      "Recommender System – Personalized shopping",
      "Sentiment Analysis – Understand user feedback",
      "Chatbot – Automate support",
      "WhatsApp Integration – Real-time query resolution",
    ],
    popular: true,
  },
];

export default function EcommerceBundlePage() {
  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <ShoppingCart className="w-16 h-16 text-primary-light" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                E-Commerce Bundle
              </h1>
              <div className="w-24 h-1 gradient-border mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Launch and scale a complete multi-role marketplace with user, seller, driver, and
                admin systems.
              </p>
              <div className="text-4xl font-bold text-primary-light mb-8">
                Starting at ₹74,999
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/appointment" className={primaryButtonClasses}>
                  Book Appointment
                </Link>
                <Link href="/contact" className={outlineButtonClasses}>
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              System Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemComponents.map((component) => (
                <div
                  key={component}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm text-center"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-primary-light" />
                    </div>
                    <h3 className="font-semibold text-foreground">{component}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyBenefits.map((benefit) => (
                <div key={benefit} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6">
                    <div className="flex items-start">
                      <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
            <div className="space-y-6">
              {howItWorksSteps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                      <div className="p-6">
                        <p className="text-foreground">{step}</p>
                      </div>
                    </div>
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="flex-shrink-0 ml-6">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Pricing Bundles
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingBundles.map((bundle) => (
                <div
                  key={bundle.title}
                  className={`rounded-lg border text-card-foreground shadow-sm flex hover:shadow-xl text-center bg-card transition-shadow ${
                    bundle.popular ? "ring-2 ring-primary dark:ring-primary/70" : ""
                  }`}
                >
                  {bundle.popular && (
                    <div className="relative -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-600 text-white">
                          Most Popular
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-8 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">🛒</span>
                        <h3 className="font-semibold tracking-tight text-2xl">{bundle.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="text-4xl font-bold text-primary-light mb-4">
                        {bundle.price}
                      </div>
                      <ul className="space-y-3">
                        {bundle.features.map((feature) => (
                          <div
                            key={feature}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-background text-foreground"
                          >
                            <li className="flex items-start text-foreground justify-start">
                              <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          </div>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/appointment" className={primaryButtonClasses}>
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free consultation to discuss your requirements and get a custom quote.
            </p>
            <div className="text-2xl font-bold text-blue-600 mb-8">Starting at ₹74,999</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment" className={primaryButtonClasses}>
                Book Free Appointment
              </Link>
              <Link href="/contact" className={outlineButtonClasses}>
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

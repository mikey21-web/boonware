"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  ArrowDown,
  PhoneCall,
  Cpu,
  Users,
  Check,
  X,
  TrendingUp,
  Star,
  Phone,
  Target,
} from "lucide-react";
import PageShell from "@/components/PageShell";

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const pricingFeatures = [
  "Natural conversation AI",
  "Real-time analytics",
  "CRM integration",
  "Indian language support",
];

const enterpriseFeatures = [
  "Dedicated account manager",
  "Custom AI training",
  "White-label options",
  "SLA guarantee",
];

const comparisonRows = [
  { feature: "Cost per minute", ai: "₹6-8", human: "₹12-15" },
  { feature: "Availability", ai: "24/7", human: "Limited shifts" },
  { feature: "Scalability", ai: "100+ concurrent", human: "Limited by team" },
  { feature: "Training time", ai: "Minutes to update", human: "Weeks onboarding" },
  { feature: "Consistency", ai: "Always on-script", human: "Variable performance" },
  { feature: "Setup cost", ai: "Minimal", human: "High (hiring/training)" },
];

export default function AICallingAgentPage() {
  const [minutes, setMinutes] = useState(10000);

  const humanCost = minutes * 12;
  const aiCost = minutes * 8;
  const savings = humanCost - aiCost;
  const pct = humanCost > 0 ? Math.round((savings / humanCost) * 100) : 0;
  const tier =
    minutes <= 50000 ? "Starter Tier" : minutes <= 100000 ? "Growth Tier" : "Scale Tier";
  const formatINR = (value: number) => `₹${value.toLocaleString("en-IN")}`;

  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_0%,transparent_50%)] opacity-[0.05]" />
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              AI-Powered Business Communication
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-accent-dark bg-clip-text text-transparent leading-tight">
              AI Calling Agents for Scalable, Cost-Efficient Outreach
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Replace expensive call centers with AI-powered agents that talk naturally, 24/7.
              Save up to 70% on calling costs while scaling to thousands of concurrent calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="#pricing"
                className={`${buttonBase} h-11 rounded-md bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold`}
              >
                Get Started
                <ArrowDown className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/appointment"
                className={`${buttonBase} font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 py-4 text-lg`}
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Book Demo Call
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">70%</div>
                <div className="text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Concurrent Calls</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI vs Human Agents?</h2>
              <p className="text-lg text-muted-foreground">
                Compare the advantages of AI-powered calling agents
              </p>
            </div>
            <div className="rounded-lg text-card-foreground backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl overflow-hidden border-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-6 font-semibold">Feature</th>
                      <th className="text-center p-6 font-semibold text-primary">
                        <div className="flex items-center justify-center gap-2">
                          <Cpu className="w-5 h-5" />
                          AI Calling Agent
                        </div>
                      </th>
                      <th className="text-center p-6 font-semibold text-muted-foreground">
                        <div className="flex items-center justify-center gap-2">
                          <Users className="w-5 h-5" />
                          Human Calling Agent
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.feature} className="border-b">
                        <td className="p-6 font-medium">{row.feature}</td>
                        <td className="p-6 text-center">
                          <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                            <Check className="w-5 h-5" />
                            {row.ai}
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          <div className="flex items-center justify-center gap-2 text-destructive">
                            <X className="w-5 h-5" />
                            {row.human}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculate Your Savings</h2>
              <p className="text-lg text-muted-foreground">
                See how much you can save by switching to AI calling agents
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-sm p-8 border-2">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium mb-3">Monthly Calling Minutes</label>
                  <input
                    type="range"
                    min={0}
                    max={250000}
                    step={1000}
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                    aria-label="Monthly Calling Minutes"
                  />
                  <div className="mt-2 text-sm text-muted-foreground">
                    {formatINR(minutes)} minutes
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-3">
                      {tier}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      Save {formatINR(savings)} ({pct}%)
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-destructive/10 rounded-lg">
                    <span className="font-medium">Human Agents:</span>
                    <span className="font-bold text-destructive">{formatINR(humanCost)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="font-medium">AI Agents:</span>
                    <span className="font-bold text-primary">{formatINR(aiCost)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{formatINR(savings)}</div>
                    <div className="text-muted-foreground">Monthly Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Tiers</h2>
              <p className="text-lg text-muted-foreground">Choose the plan that scales with your business</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg bg-card text-card-foreground shadow-sm relative h-full border-2 group hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="flex flex-col space-y-1.5 p-6 text-center">
                  <h3 className="font-semibold tracking-tight text-xl mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-primary">
                    ₹8<span className="text-sm text-muted-foreground">/min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">0 - 50,000 minutes/month</p>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                  <button
                    type="button"
                    className={`${buttonBase} rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mt-6`}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>

              <div className="rounded-lg bg-card text-card-foreground relative h-full border-2 group hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border-primary shadow-lg scale-105">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-primary text-primary-foreground">
                    Most Popular
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 p-6 text-center">
                  <h3 className="font-semibold tracking-tight text-xl mb-2">Growth</h3>
                  <div className="text-3xl font-bold text-primary">
                    ₹7<span className="text-sm text-muted-foreground">/min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">50,001 - 100,000 minutes/month</p>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                  <button
                    type="button"
                    className={`${buttonBase} rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6`}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>

              <div className="rounded-lg bg-card text-card-foreground shadow-sm relative h-full border-2 group hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <div className="flex flex-col space-y-1.5 p-6 text-center">
                  <h3 className="font-semibold tracking-tight text-xl mb-2">Scale</h3>
                  <div className="text-3xl font-bold text-primary">
                    ₹6<span className="text-sm text-muted-foreground">/min</span>
                  </div>
                  <p className="text-sm text-muted-foreground">100,001 - 250,000 minutes/month</p>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  {pricingFeatures.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                  <button
                    type="button"
                    className={`${buttonBase} rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full mt-6`}
                  >
                    Book a Demo
                  </button>
                </div>
              </div>

              <div className="rounded-lg bg-card text-card-foreground shadow-sm relative group hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border-2 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex flex-col space-y-1.5 p-6 text-center">
                  <h3 className="font-semibold tracking-tight text-xl mb-2">Enterprise</h3>
                  <div className="text-2xl font-bold">Custom Pricing</div>
                  <p className="text-sm text-muted-foreground">250k+ minutes/month</p>
                </div>
                <div className="p-6 pt-0 space-y-3">
                  {enterpriseFeatures.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                  <a
                    href="https://wa.me/918291393581?text=Hi%20I%20am%20interested%20in%20the%20Enterprise%20AI%20Calling%20Agent%20Plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBase} rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full mt-6`}
                  >
                    Contact Sales on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                Ready to scale your outreach with <span className="text-gradient">AI</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses already saving costs and scaling their operations with
                our AI calling agents.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/appointment"
                className={`${buttonBase} font-medium text-primary-foreground h-11 rounded-md px-12 py-6 text-lg bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Your Free Consultation
              </Link>
              <Link
                href="/contact"
                className={`${buttonBase} font-medium border bg-background h-11 rounded-md px-12 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300`}
              >
                <Target className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

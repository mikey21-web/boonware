"use client";

import { useState, type FormEvent } from "react";
import { Calendar, CircleCheckBig } from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PROJECT_TYPES = [
  "Web Development",
  "AI & Automation",
  "Mobile Applications",
  "E-Commerce Solutions",
  "Chatbots & AI Assistants",
  "Custom Software",
  "Graphic Design",
  "Digital Marketing",
  "Other",
];

const SERVICES = [
  "Web Development",
  "AI & Automation",
  "AI Calling Agent",
  "Chatbots & AI Assistants",
  "E-Commerce Solutions",
  "Mobile Applications",
  "Custom Software",
  "Graphic Design",
  "Digital Marketing",
];

const BUDGET_RANGES = [
  { value: "under-25k", label: "Under ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-100k", label: "₹50,000 - ₹1,00,000" },
  { value: "100k-250k", label: "₹1,00,000 - ₹2,50,000" },
  { value: "250k-500k", label: "₹2,50,000 - ₹5,00,000" },
  { value: "above-500k", label: "Above ₹5,00,000" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP (Rush project)" },
  { value: "1-month", label: "Within 1 month" },
  { value: "2-3-months", label: "2-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "6-months-plus", label: "6+ months" },
  { value: "flexible", label: "Flexible" },
];

const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
];

const inputClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

const projectTypeSelectClass =
  "w-full p-3 border border-border rounded-lg bg-background dark:bg-slate-900 text-foreground";

const selectClass =
  "w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background dark:bg-slate-900";

const textareaClass =
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const serviceButtonClass =
  "p-3 rounded-lg border text-sm font-medium transition-all bg-card text-foreground border-border hover:border-primary dark:bg-slate-900";

const timeButtonClass =
  "p-2 rounded border text-sm transition-all bg-card text-foreground border-border hover:border-primary";

export default function AppointmentPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (services.length === 0 || !time) {
      setError("Please select at least one service and a preferred time.");
      return;
    }
    setSubmitted(true);
    setError(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setProjectType("");
    setServices([]);
    setBudget("");
    setTimeline("");
    setDescription("");
    setDate("");
    setTime("");
  };

  return (
    <PageShell>
      <div className="min-h-screen bg-background">
        <section className="py-16 lg:py-24 bg-background pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Book Your <span className="text-gradient">Consultation</span>
              </h1>
              <div className="w-24 h-1 gradient-border mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Schedule a free 15-minute consultation to discuss your project requirements and
                explore how we can help transform your business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-lg border text-card-foreground shadow-sm p-8 bg-card">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Personal Details</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            required
                            placeholder=" e.g., +91 9876543210 (include country code) "
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <Input
                            type="text"
                            placeholder="Your company name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Project Type *
                          </label>
                          <select
                            required
                            className={projectTypeSelectClass}
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                          >
                            <option value="">Select project type</option>
                            {PROJECT_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-4">
                          Services Interested In *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {SERVICES.map((service) => (
                            <button
                              key={service}
                              type="button"
                              aria-pressed={services.includes(service)}
                              onClick={() => toggleService(service)}
                              className={`${serviceButtonClass} ${
                                services.includes(service)
                                  ? "bg-primary border-primary text-white"
                                  : ""
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Project Budget Range
                          </label>
                          <select
                            className={selectClass}
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                          >
                            <option value="">Select budget range</option>
                            {BUDGET_RANGES.map((range) => (
                              <option key={range.value} value={range.value}>
                                {range.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Project Timeline
                          </label>
                          <select
                            className={selectClass}
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                          >
                            <option value="">Select timeline</option>
                            {TIMELINES.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Project Description
                        </label>
                        <Textarea
                          rows={4}
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className={textareaClass}
                        />
                      </div>
                      {submitted && (
                        <div className="rounded-md border border-primary/20 bg-primary/10 p-4 text-sm text-foreground">
                          Thank you! We&apos;ll contact you to confirm your consultation.
                        </div>
                      )}
                      {error && (
                        <div className="rounded-md border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                          {error}
                        </div>
                      )}
                      <Button
                        type="submit"
                        className="h-10 px-4 py-6 w-full bg-primary hover:bg-primary-dark text-white text-lg"
                      >
                        Book Consultation
                      </Button>
                    </form>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-lg border text-card-foreground shadow-sm p-6 bg-card border-primary/20">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      Select Date & Time
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          required
                          min={today}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Time *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {TIME_SLOTS.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              aria-pressed={time === slot}
                              onClick={() => setTime(slot)}
                              className={`${timeButtonClass} ${
                                time === slot ? "bg-primary border-primary text-white" : ""
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-gradient-to-br from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 border-primary/20">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CircleCheckBig className="w-5 h-5 text-primary" />
                      What to Expect
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        15-minute free consultation call
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        Discussion of your project requirements
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        Technical feasibility assessment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        Detailed project proposal within 48 hours
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                        No commitment required
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddEnquiry } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Country } from "../backend.d";

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: Country | "";
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "",
  message: "",
};

const countryOptions = [
  { value: Country.australia, label: "🇦🇺 Australia" },
  { value: Country.canada, label: "🇨🇦 Canada" },
  { value: Country.usa, label: "🇺🇸 USA" },
  { value: Country.uk, label: "🇬🇧 United Kingdom" },
  { value: Country.europe, label: "🇪🇺 Europe" },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending, isError, error } = useAddEnquiry();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.country) return;

    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country as Country,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
          toast.success(
            "Enquiry submitted successfully! We'll contact you within 24 hours.",
          );
        },
        onError: () => {
          toast.error(
            "Something went wrong. Please try again or call us directly.",
          );
        },
      },
    );
  };

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-max">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-grotesk font-semibold tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Start Your Journey
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full mx-auto mb-6" />
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-grotesk leading-relaxed">
            Ready to study abroad? Send us your enquiry and our expert
            consultants will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-grotesk font-semibold text-white mb-1">
                    Office Address
                  </h4>
                  <p className="text-white/60 font-grotesk text-sm leading-relaxed">
                    #36, New Durga Nagar,
                    <br />
                    Ambala City, Haryana, India
                    <br />
                    Postcode: 134003
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-grotesk font-semibold text-white mb-1">
                    Phone Number
                  </h4>
                  <a
                    href="tel:+919215330275"
                    className="text-white/60 hover:text-gold font-grotesk text-sm transition-colors"
                  >
                    +91 92153 30275
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-grotesk font-semibold text-white mb-1">
                    Email Address
                  </h4>
                  <a
                    href="mailto:dakshinternational169@gmail.com"
                    className="text-white/60 hover:text-gold font-grotesk text-sm transition-colors break-all"
                  >
                    dakshinternational169@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map card */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="p-4 border-b border-white/10">
                <h4 className="font-grotesk font-semibold text-white text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  Daksh International — Ambala City
                </h4>
              </div>
              <div className="aspect-video bg-navy-mid relative overflow-hidden">
                <iframe
                  title="Daksh International Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.8!2d76.7794!3d30.3780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIyJzQwLjgiTiA3NsKwNDYnNDUuOCJF!5e0!3m2!1sen!2sin!4v1"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90"
                />
              </div>
              <div className="p-3 bg-gold/5">
                <p className="text-white/50 font-grotesk text-xs text-center">
                  #36, New Durga Nagar, Ambala City, Haryana 134003
                </p>
              </div>
            </div>

            {/* Business hours */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-grotesk font-semibold text-white text-sm mb-3">
                Business Hours
              </h4>
              <div className="space-y-1.5 text-sm font-grotesk">
                <div className="flex justify-between text-white/60">
                  <span>Monday – Saturday</span>
                  <span className="text-gold font-semibold">
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Sunday</span>
                  <span className="text-white/40">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-navy-lg p-6 md:p-8">
              <h3 className="font-display font-bold text-navy text-2xl mb-2">
                Free Consultation Request
              </h3>
              <p className="text-muted-foreground font-grotesk text-sm mb-6">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {/* Success State */}
              {submitted && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-green-800 font-grotesk font-semibold text-sm">
                      Enquiry Submitted!
                    </p>
                    <p className="text-green-600 font-grotesk text-sm mt-0.5">
                      Thank you! Our team will contact you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {isError && (
                <div
                  data-ocid="contact.error_state"
                  className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-red-800 font-grotesk font-semibold text-sm">
                      Submission Failed
                    </p>
                    <p className="text-red-600 font-grotesk text-sm mt-0.5">
                      {error instanceof Error
                        ? error.message
                        : "Please try again or call us directly."}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <Label
                    htmlFor="name"
                    className="text-navy font-grotesk font-medium text-sm mb-1.5 block"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    data-ocid="contact.input"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="border-navy/20 focus:border-gold focus:ring-gold/20 font-grotesk"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="email"
                    className="text-navy font-grotesk font-medium text-sm mb-1.5 block"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    data-ocid="contact.email_input"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="border-navy/20 focus:border-gold focus:ring-gold/20 font-grotesk"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-navy font-grotesk font-medium text-sm mb-1.5 block"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    data-ocid="contact.phone_input"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="border-navy/20 focus:border-gold focus:ring-gold/20 font-grotesk"
                  />
                </div>

                {/* Country */}
                <div>
                  <Label
                    htmlFor="country"
                    className="text-navy font-grotesk font-medium text-sm mb-1.5 block"
                  >
                    Country of Interest <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={form.country}
                    onValueChange={(val) => handleChange("country", val)}
                    required
                  >
                    <SelectTrigger
                      id="country"
                      data-ocid="contact.select"
                      className="border-navy/20 focus:border-gold font-grotesk"
                    >
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryOptions.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="font-grotesk"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="message"
                    className="text-navy font-grotesk font-medium text-sm mb-1.5 block"
                  >
                    Message / Query
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.textarea"
                    placeholder="Tell us about your academic background, preferred courses, or any specific questions..."
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    className="border-navy/20 focus:border-gold focus:ring-gold/20 font-grotesk resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={
                    isPending ||
                    !form.name ||
                    !form.email ||
                    !form.phone ||
                    !form.country
                  }
                  className="w-full bg-gold hover:bg-gold-light text-navy font-grotesk font-bold text-base h-12 rounded-xl shadow-gold transition-all duration-200"
                >
                  {isPending ? (
                    <>
                      <Loader2
                        data-ocid="contact.loading_state"
                        className="w-4 h-4 mr-2 animate-spin"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Enquiry
                    </>
                  )}
                </Button>

                <p className="text-muted-foreground font-grotesk text-xs text-center mt-2">
                  By submitting, you agree to be contacted by our team regarding
                  your enquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

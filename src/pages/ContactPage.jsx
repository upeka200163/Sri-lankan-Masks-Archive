import { useState } from "react";
import Accordion from "../components/common/Accordion";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Sparkles, 
  BookOpen, 
  Globe2, 
  ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: ""
  });

  const faqs = [
    {
      question: "Why is Vel Kaduru timber specifically chosen for mask carving?",
      answer:
        "Vel Kaduru (Nux vomica) is exceptionally lightweight yet structurally durable. It contains a natural bitter sap that repels termites and wood-boring insects, while offering a smooth grain that enables master carvers to chisel delicate micro-expressions without splintering."
    },
    {
      question: "What differentiates the Sanni Yakuma healing cycle from Kolam theatre?",
      answer:
        "Daha Ata Sanniya is a sacred, night-long psychotherapeutic healing ritual where eighteen specific disease-demons are summoned, cross-examined, and pacified to cure ailments. In contrast, Kolam is traditional coastal folk theatre centered around royal courts, comedic sketches, and biting sociopolitical satire."
    },
    {
      question: "What is the historical significance of mounting Naga Raksha above entryways?",
      answer:
        "In Southern Sri Lankan folklore, Naga Raksha serves as a ferocious threshold guardian. Interweaving the imagery of over twenty hooded cobras, it is believed to neutralize negative energy, avert the 'evil eye' (As-waha), and welcome prosperity into the sanctuary of the home."
    },
    {
      question: "Are authentic mineral pigments still utilized in contemporary creations?",
      answer:
        "Master workshops across Ambalangoda preserve original recipes using Makulu clay base primers, charcoal soot, gamboge plant resins, and crushed ocean coral alongside refined acrylics for long-term conservation."
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-600/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Cultural Liaison & Archives
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-100 tracking-tight">
          CONNECT WITH THE <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-500 to-red-500">
            HERITAGE ARCHIVE
          </span>
        </h1>
        <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed">
          Inquire about artisan carving residencies, academic research on coastal ritual dramas, or consult our archive curatorial team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form Section */}
        <div className="lg:col-span-7 bg-stone-900/60 backdrop-blur-md border border-stone-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-stone-800 pb-5 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-100">Send an Inquiry</h2>
              <p className="text-stone-400 text-xs mt-1">Direct communication with our traditional conservation desk.</p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-500 font-mono bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-800/30">
              <ShieldCheck className="w-4 h-4" /> Secure Form
            </div>
          </div>

          {submitted ? (
            <div className="py-16 text-center bg-stone-950/60 border border-amber-500/30 rounded-2xl flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4 text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-stone-100">Dispatch Received</h3>
              <p className="text-stone-400 text-sm mt-2 max-w-sm leading-relaxed">
                Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Your inquiry has been routed to the archival curators. We typically reply within 24 to 48 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", inquiryType: "General Inquiry", subject: "", message: "" });
                }}
                className="mt-8 px-6 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl transition-all"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. elena@curator.org"
                    className="w-full bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2 uppercase tracking-wider">
                    Inquiry Nature
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                  >
                    <option value="General Inquiry">General Curatorial Inquiry</option>
                    <option value="Academic Research">Academic & Ethno-Historical Research</option>
                    <option value="Master Workshop">Woodcarving Workshop Registration</option>
                    <option value="Artifact Preservation">Artifact Appraisal & Restoration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2 uppercase tracking-wider">
                    Subject Heading
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Sanni Ritual Pigments Question"
                    className="w-full bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-2 uppercase tracking-wider">
                  Detailed Inquiry Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline your inquiry regarding the carving stages, historical lineages, or ceremonial dance repertoire..."
                  className="w-full bg-stone-950/80 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-950/50 hover:shadow-amber-900/40 active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-pulse">Transmitting Dispatch...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Transmit Inquiry to Archival Team
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Informational & FAQ Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Info Tile */}
          <div className="bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-amber-500 font-bold">
              Heritage Center Coordinates
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-amber-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block font-medium">Archival Location</span>
                  <p className="text-sm font-semibold text-stone-200 mt-0.5">
                    Main Street, Ambalangoda, Southern Province, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-amber-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block font-medium">Digital Correspondence</span>
                  <p className="text-sm font-semibold text-stone-200 mt-0.5">
                    curator@masksofsrilanka.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-amber-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 block font-medium">Workshop Operating Hours</span>
                  <p className="text-sm font-semibold text-stone-200 mt-0.5">
                    Tuesday – Sunday: 09:00 AM – 05:30 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Assistance Card */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-amber-950/30 to-stone-950 border border-amber-900/30 flex items-start gap-4">
            <BookOpen className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-sm font-bold text-stone-200">Scholarly & Museum Inquiries</h4>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Researchers seeking high-resolution 3D scans or field interview transcripts on the Ariyapala lineage may request open access directly via our curatorial desk.
              </p>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-stone-900/60 border border-stone-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">
              Curatorial Index
            </span>
            <h3 className="text-xl font-bold text-stone-100 mb-5">Frequently Answered Queries</h3>
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
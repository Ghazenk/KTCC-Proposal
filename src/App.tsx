/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import ghazen from './assets/ghazen.jpeg'
import aman from './assets/aman.jpeg'
import mairaj from './assets/mairaj.jpeg'
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight,
  Mail,
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  ShieldCheck, 
  Layers, 
  Zap, 
  Activity, 
  Users, 
  Heart,
  Star,
  Smartphone, 
  Database, 
  Clock, 
  CheckCircle,
  ClipboardList,
  Cpu,
  Map
} from "lucide-react";

// Reusable Components
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  key?: React.Key;
}

const FadeIn = ({ children, delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.98 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

type Section = "home" | "motivation" | "overview" | "methodology" | "features" | "planning" | "engineering" | "references" | "contact";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  const SectionCard = ({ icon, title, desc, target, delay = 0 }: { icon: ReactNode, title: string, desc: string, target: Section, delay?: number }) => (
    <motion.button 
      onClick={() => setActiveSection(target)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card-simple text-left group w-full h-full flex flex-col p-8 md:p-10 relative overflow-hidden active:scale-95 transition-transform"
    >
      <div className="mb-6 text-primary p-4 bg-primary/5 w-fit rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors tracking-tight break-words">{title}</h3>
      <p className="text-[10px] sm:text-xs md:text-sm text-secondary font-medium leading-relaxed flex-grow line-clamp-4">{desc}</p>
      <div className="mt-6 flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
        Enter Module <ArrowUpRight size={14} />
      </div>
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center p-4 md:p-12 mb-0">
      {/* 1. Header Navigation */}
      <nav className="w-full max-w-6xl flex items-center justify-between mb-12 md:mb-20 px-6">
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => setActiveSection("home")}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-[0_8px_30px_rgba(175,0,69,0.2)] group-hover:rotate-6 transition-transform">
            <Heart size={28} fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-3xl tracking-tighter leading-none text-on-surface">KTCC</span>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-1">Life Stream System</span>
          </div>
        </div>
        
        {activeSection !== "home" && (
          <button 
            onClick={() => setActiveSection("home")}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-widest bg-surface-lowest px-6 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm border border-black/[0.03]"
          >
            <ArrowLeft size={16} /> Dashboard
          </button>
        )}
      </nav>

      {/* 2. Main Content */}
      <main className="w-full max-w-6xl flex-grow px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <FadeIn key="home">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 items-start">
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(175,0,69,0.4)]"></span>
                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Project Proposal 2026</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-8 leading-[0.9] text-on-surface">
                    KTCC: Smart <br />
                    <span className="text-surface-lowest-on relative inline-block">
                      Management.
                      <motion.span 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="absolute bottom-2 left-0 h-1 md:h-2 bg-primary/10 -z-10"
                      />
                    </span>
                  </h1>
                  <p className="text-secondary text-sm md:text-lg max-w-2xl font-medium leading-relaxed mb-6 md:mb-10 border-l-2 border-primary/20 pl-4 md:pl-6">
                    A clinical ecosystem for Kech Thalassemia Care Center, bridging the gap with offline-first donor matching.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-8 py-8 border-y border-secondary">
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-secondary uppercase tracking-widest">Center</p>
                      <p className="font-bold text-xs">KTCC Turbat</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-secondary uppercase tracking-widest">Supervisor</p>
                      <p className="font-bold text-xs truncate">Sir Muhammad Asim</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] font-black text-secondary uppercase tracking-widest">Session</p>
                      <p className="font-bold text-xs">2023–2026</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 self-start w-full">
                  <div className="glass-card p-8 rounded-[2.5rem] md:rounded-[3rem]">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-secondary">Project Core Team</h4>
                    <div className="space-y-6 w-full">
                      {/* Team Member 1: Leader */}
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=1109193@stud.uot.edu.pk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Email Ghazen Khalid"
                        className="flex items-center gap-4 group hover:bg-black/[0.02] p-4 rounded-3xl transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white transition-all group-hover:border-primary shadow-sm flex-shrink-0 aspect-square">
                          <img 
                            src={ghazen} 
                            alt="Ghazen Khalid" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex flex-col min-w-0 flex-grow">
                          <span className="font-bold text-sm tracking-tight truncate">Ghazen Khalid</span>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-widest truncate">Head of Design</span>
                          <span className="text-[9px] font-mono text-secondary/60 mt-0.5">ID: 1109193</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                          <Mail size={16} />
                        </div>
                      </a>
                      
                      {/* Team Member 2: Aman */}
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=1110325@stud.uot.edu.pk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Email Aman"
                        className="flex items-center gap-4 group hover:bg-black/[0.02] p-4 rounded-3xl transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white transition-all group-hover:border-primary shadow-sm flex-shrink-0 aspect-square">
                          <img 
                            src={aman} 
                            alt="Aman" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex flex-col min-w-0 flex-grow">
                          <span className="font-bold text-sm tracking-tight truncate">Aman</span>
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest truncate">Dev Lead</span>
                          <span className="text-[9px] font-mono text-secondary/60 mt-0.5">ID: 1110325</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                          <Mail size={16} />
                        </div>
                      </a>

                      {/* Team Member 3: Mairaj */}
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=1109159@stud.uot.edu.pk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Email Mairaj Javed"
                        className="flex items-center gap-4 group hover:bg-black/[0.02] p-4 rounded-3xl transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white transition-all group-hover:border-primary shadow-sm flex-shrink-0 aspect-square">
                          <img 
                            src="/mairaj.jpeg" 
                            alt="Mairaj Javed" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                        <div className="flex flex-col min-w-0 flex-grow">
                          <span className="font-bold text-sm tracking-tight truncate">Mairaj Javed</span>
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest truncate">Data Expert</span>
                          <span className="text-[9px] font-mono text-secondary/60 mt-0.5">ID: 1109159</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                          <Mail size={16} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <SectionCard 
                  icon={<ShieldCheck size={20} />}
                  title="Motivation"
                  desc="From handwritten registers to digital lives: understanding the emotional and operational core of why KTCC needs digitisation now."
                  target="motivation"
                  delay={0.1}
                />
                <SectionCard 
                  icon={<BookOpen size={20} />}
                  title="Overview"
                  desc="Addressing the critical Thalassemia care gap in Kech through specialised medical tracking and reliability-based donor matching."
                  target="overview"
                  delay={0.2}
                />
                <SectionCard 
                  icon={<Activity size={20} />}
                  title="Methodology"
                  desc="A robust four-stage development cycle: from Figma prototyping to modular Flutter implementation and center-wide evaluation."
                  target="methodology"
                  delay={0.3}
                />
                <SectionCard 
                  icon={<Zap size={20} />}
                  title="Features"
                  desc="Explore 10 field-proven capabilities including reliability ranking, offline-first sync engine, and native Balochi language support."
                  target="features"
                  delay={0.4}
                />
                <SectionCard 
                  icon={<ClipboardList size={20} />}
                  title="Roadmap"
                  desc="Complete strategic execution timeline starting June 1, 2026, mapping research, agile development, and final center handover."
                  target="planning"
                  delay={0.5}
                />
                <SectionCard 
                  icon={<Cpu size={20} />}
                  title="Engineering"
                  desc="The technical backbone: Flutter architecture, Isar local database, and Supabase cloud sync engineered for resilient healthcare."
                  target="engineering"
                  delay={0.6}
                />
                <SectionCard 
                  icon={<Map size={20} />}
                  title="References"
                  desc="Scientific backing and academic research references supporting the clinical significance and impact of digital Thalassemia care."
                  target="references"
                  delay={0.7}
                />
                <SectionCard 
                  icon={<Heart size={20} />}
                  title="Contact"
                  desc="Connect with the Project Core Team for technical inquiries, pilot data access, or organizational healthcare collaboration."
                  target="contact"
                  delay={0.8}
                />
              </div>
            </FadeIn>
          )}

          {/* 1. Motivation Section */}
          {activeSection === "motivation" && (
            <FadeIn key="motivation">
              <div className="max-w-3xl mx-auto py-6 md:py-10">
                <span className="text-secondary font-black text-5xl md:text-7xl absolute -top-10 -left-6 md:-left-10 opacity-20 pointer-events-none">01</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-8 md:mb-12 leading-tight">Handwritten registers <br className="hidden sm:block"/> and children's lives.</h2>
                <div className="p-6 sm:p-8 md:p-14 bg-surface-low rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border-l-[8px] md:border-l-[16px] border-primary mb-10 md:mb-16 shadow-sm font-medium italic text-lg sm:text-xl md:text-2xl leading-relaxed text-on-surface">
                  "We encountered a center managing more than 25,000 donors using paper registers. Staff manually search through pages, dialing numbers one after another... Any delay in finding a donor directly affects survival."
                </div>
                <div className="space-y-6 md:space-y-10 text-secondary text-base md:text-xl leading-relaxed">
                  <p>
                    KTCC performs ~35 blood transfusions daily without any software. For children with Thalassemia, blood is not a luxury—it is life, required every two weeks.
                  </p>
                  <p className="p-6 md:p-8 bg-primary/[0.03] border border-primary/10 rounded-2xl md:rounded-3xl italic text-on-surface text-sm sm:text-base md:text-xl">
                    "We are not creating what is appealing in a demo, we have been creating what will be reached by a staff member at two in the morning when the internet may not be operating."
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 2. Overview Section */}
          {activeSection === "overview" && (
            <FadeIn key="overview">
              <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">The Significance</h2>
                  <p className="text-secondary text-sm md:text-lg leading-relaxed font-medium">
                    NGOs like KTCC bridge the gap where government infrastructure fails. Our system focuses on <strong className="text-primary">operational usability</strong>. It isn't just about looks; it's about reliable matching and tracking that existing apps ignore.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                  <div className="card-simple p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 text-primary tracking-tighter">Problem Breakdown</h3>
                    <ul className="space-y-4 md:space-y-6">
                      <li className="flex gap-4 text-sm md:text-base font-bold text-secondary group"><CheckCircle size={22} className="text-primary shrink-0"/> No staff management dashboard.</li>
                      <li className="flex gap-4 text-sm md:text-base font-bold text-secondary group"><CheckCircle size={22} className="text-primary shrink-0"/> Zero offline functionality.</li>
                      <li className="flex gap-4 text-sm md:text-base font-bold text-secondary group"><CheckCircle size={22} className="text-primary shrink-0"/> No reliability-based donor ranking.</li>
                      <li className="flex gap-4 text-sm md:text-base font-bold text-secondary group"><CheckCircle size={22} className="text-primary shrink-0"/> High friction in emergency routing.</li>
                    </ul>
                  </div>
                  <div className="card-simple p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-black mb-8 tracking-tighter text-on-surface">The Solution</h3>
                    <p className="text-sm md:text-lg text-secondary leading-relaxed font-medium">
                      Our Flutter app digitizes handwritten registers into a structured Isar database, ranking donors by reliability (Green/Yellow/Red tiers) to optimize calling strategy and save time.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 3. Methodology Section */}
          {activeSection === "methodology" && (
            <FadeIn key="methodology">
               <div className="max-w-5xl mx-auto py-10">
                <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">System Methodology.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                  {[
                    { title: "Design", text: "Figma prototyping to map real-world center workflows before code.", icon: <Layers size={24}/> },
                    { title: "Implementation", text: "Modular development covering Auth, Donor, and Emergency hubs.", icon: <Cpu size={24}/> },
                    { title: "Testing", text: "Internal unit tests + integration sync testing under network failure.", icon: <ShieldCheck size={24}/> },
                    { title: "Evaluation", text: "Measuring adoption and search time reduction (Target: < 2 mins).", icon: <Activity size={24}/> }
                  ].map((item, i) => (
                    <div key={i} className="card-simple flex flex-col group hover:border-primary/30 transition-all">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-xl mb-3 tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs text-secondary leading-relaxed font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-surface-low rounded-[3rem] p-10 md:p-16 border border-secondary shadow-sm">
                  <h3 className="text-3xl font-black mb-14 flex items-center gap-4 tracking-tighter">
                    <Zap className="text-primary" size={32} /> Implementation Pipeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {[
                      { t: "Auth & Role Manager", d: "Granular permissions for Staff, Admin, Donors, and Patients." },
                      { t: "Donor Engine", d: "19-question screening + reliability score calculator." },
                      { t: "Patient Registry", d: "Transfusion scheduling with guardian Patient ID linking." },
                      { t: "Blood Inventory", d: "Freshness labeling and 25% threshold alerts." },
                      { t: "Emergency Module", d: "Priority override search with TMC escalation tracking." },
                      { t: "Offline Sync Engine", d: "Isar-to-Supabase conflict resolution rules." },
                      { t: "Hybrid Notifications", d: "Batched alerts with SMS/WhatsApp fallback chains." },
                      { t: "Balochi Integration", d: "Full native Arabic typeface support for local dialects." }
                    ].map((mod, i) => (
                      <div key={i} className="flex gap-5 group">
                        <div className="text-primary font-black text-xs opacity-30 group-hover:opacity-100 transition-opacity tracking-tighter mt-1">0{i+1}</div>
                        <div>
                          <h5 className="font-bold text-base mb-2 leading-tight tracking-tight group-hover:text-primary transition-colors">{mod.t}</h5>
                          <p className="text-xs text-secondary leading-relaxed font-medium">{mod.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 4. Features Section */}
          {activeSection === "features" && (
            <FadeIn key="features">
              <div className="max-w-5xl mx-auto py-6 md:py-10">
                <div className="text-center mb-8 md:mb-16 px-4">
                  <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Core Capabilities</span>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 tracking-tight">System Ecosystem.</h2>
                  <p className="text-secondary max-w-xl mx-auto text-sm font-medium leading-relaxed">Every feature is designed for field-proven reliability, addressing the unique challenges of healthcare in rural regions in Balochistan.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-20 px-2 sm:px-0">
                  {[
                    { t: "Reliability Ranking", d: "Green (reliable), Yellow (mixed), Red (new/unreliable) tiers for donor calls.", icon: <Star size={20}/> },
                    { t: "Offline-First Sync", d: "Works without internet; syncs conflict resolution when back online.", icon: <Database size={20}/> },
                    { t: "Honest State Tracking", d: "Tracks states like 'Confirmed', 'No-show', and 'Came but not used'.", icon: <Clock size={20}/> },
                    { t: "Guardian Alert Hub", d: "Guardian logins to monitor child's schedules and receive reminders.", icon: <ShieldCheck size={20}/> },
                    { t: "Emergency Escalation", d: "Priority override for emergency routing with TMC escalation logging.", icon: <Zap size={20}/> },
                    { t: "Medical Cooldowns", d: "Gender-aware tracking (3mo for Male, 6mo for Female donors).", icon: <Activity size={20}/> },
                    { t: "Inventory Freshness", d: "Tracks 'Camp Blood' vs 'Standard' and freshness degradation.", icon: <CheckCircle size={20}/> },
                    { t: "Hard-core Privacy", d: "Contact details of female donors restricted to Founder/Manager only.", icon: <Users size={20}/> },
                    { t: "Balochi Language Support", d: "Full Arabic typeface interface for local Pakistani users.", icon: <Map size={20}/> },
                    { t: "Donor Recognition", d: "Visual counter showing times blood was utilized for real kids.", icon: <Heart size={20}/> }
                  ].map((f, i) => (
                    <div key={i} className="premium-card group relative overflow-hidden p-6 sm:p-10">
                       <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity text-primary">
                         {f.icon}
                       </div>
                       <span className="text-2xl sm:text-4xl font-black text-surface-low mb-3 sm:mb-4 block leading-none tracking-tighter">{(i+1).toString().padStart(2, '0')}</span>
                       <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 tracking-tight group-hover:text-primary transition-colors">{f.t}</h4>
                       <p className="text-xs sm:text-sm text-secondary leading-relaxed font-medium">{f.d}</p>
                    </div>
                  ))}
                </div>

                {/* HIGH-END CTA SECTION */}
                <div className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-on-surface p-10 md:p-24 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
                  <div className="relative z-10 space-y-10">
                    <h3 className="text-4xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                      Ready to modernize <br />
                      <span className="text-primary-container">Thalassemia care?</span>
                    </h3>
                    <p className="text-slate-400 text-sm md:text-xl max-w-xl mx-auto font-medium">
                      Join us in digitizing KTCC. Our system is built for resilience, scale, and saving lives in the most critical moments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <button 
                        onClick={() => setActiveSection("contact")}
                        className="gloss-accent px-10 md:px-12 py-5 md:py-6 rounded-full text-white font-bold text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:scale-105 w-full sm:w-auto"
                      >
                        Contact Team <ArrowRight size={20} />
                      </button>
                      <button 
                        onClick={() => setActiveSection("home")}
                        className="px-10 md:px-12 py-5 md:py-6 rounded-full border border-white/20 text-white font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
                      >
                        Back to Dashboard
                      </button>
                    </div>
                    
                    <div className="pt-16 md:pt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10">
                       {[
                         { name: "Ghazen Khalid", email: "1109193@stud.uot.edu.pk", role: "UI Architect" },
                         { name: "Aman", email: "1110325@stud.uot.edu.pk", role: "Dev Lead" },
                         { name: "Mairaj Javed", email: "1109159@stud.uot.edu.pk", role: "Data Expert" }
                       ].map((contact, i) => (
                         <div key={i} className="group/email flex flex-col items-center">
                           <p className="text-[10px] font-black text-primary-container uppercase tracking-widest mb-1">{contact.role}</p>
                           <h5 className="text-white font-bold text-xl mb-3">{contact.name}</h5>
                           <a 
                             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="text-xs md:text-sm text-white font-mono py-3 px-6 rounded-full border border-white/10 hover:border-primary-container hover:bg-primary-container/20 transition-all bg-white/5 backdrop-blur-md flex items-center gap-3 shadow-lg group-hover/email:scale-105"
                           >
                             <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white shrink-0">
                               <Mail size={14} />
                             </div>
                             {contact.email}
                           </a>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 8. Contact Section */}
          {activeSection === "contact" && (
            <FadeIn key="contact">
               <div className="max-w-4xl mx-auto py-10 lg:py-20 px-4">
                  <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                      <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Get In Touch</span>
                      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-on-surface">Let's build <br/> the future.</h2>
                      <p className="text-secondary text-base md:text-lg leading-relaxed mb-10 font-medium">
                        Have questions about our methodology or interested in the pilot phase? Reach out to the team directly.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="flex items-center gap-5">
                           <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm"><Heart size={28}/></div>
                           <div>
                             <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Project Lead</p>
                             <p className="text-lg font-bold text-on-surface">Ghazen Khalid</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-5">
                           <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm"><Map size={28}/></div>
                           <div>
                             <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Location</p>
                             <p className="text-lg font-bold text-on-surface">University of Turbat, Kech</p>
                           </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="premium-card !p-10">
                       {formStatus === "success" ? (
                         <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 text-center">
                           <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                             <CheckCircle size={40} />
                           </div>
                           <h3 className="text-2xl font-black text-on-surface">Message Sent!</h3>
                           <p className="text-secondary font-medium">Thank you for reaching out. We'll get back to you soon.</p>
                           <button 
                             onClick={() => setFormStatus("idle")}
                             className="text-xs font-black text-primary underline tracking-widest uppercase mt-4"
                           >
                             Send another message
                           </button>
                         </div>
                       ) : (
                         <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                              <label className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3 block">Your Name</label>
                              <input 
                                type="text" 
                                placeholder="Khalid Mansoor" 
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full bg-surface border-none rounded-2xl px-6 py-5 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-30 text-on-surface ${errors.name ? "ring-2 ring-red-500/50" : ""}`} 
                              />
                              {errors.name && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.name}</p>}
                            </div>
                            <div>
                              <label className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3 block">Email Address</label>
                              <input 
                                type="email" 
                                placeholder="khalid@example.com" 
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full bg-surface border-none rounded-2xl px-6 py-5 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-30 text-on-surface ${errors.email ? "ring-2 ring-red-500/50" : ""}`} 
                              />
                              {errors.email && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.email}</p>}
                            </div>
                            <div>
                              <label className="text-[10px] font-black uppercase tracking-widest text-secondary mb-3 block">Message</label>
                              <textarea 
                                rows={4} 
                                placeholder="How can we help?" 
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={`w-full bg-surface border-none rounded-2xl px-6 py-5 text-sm font-bold focus:ring-2 focus:ring-primary outline-none transition-all placeholder:opacity-30 resize-none text-on-surface ${errors.message ? "ring-2 ring-red-500/50" : ""}`}
                              ></textarea>
                              {errors.message && <p className="text-[10px] text-red-500 font-bold mt-2 uppercase tracking-widest">{errors.message}</p>}
                            </div>
                            <button 
                              type="submit"
                              disabled={formStatus === "submitting"}
                              className="gloss-accent w-full py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                              {formStatus === "submitting" ? "Sending..." : "Send Message"}
                            </button>
                         </form>
                       )}
                    </div>
                  </div>
               </div>
            </FadeIn>
          )}

          {/* 5. Planning Section */}
          {activeSection === "planning" && (
            <FadeIn key="planning">
              <div className="max-w-5xl mx-auto py-10 lg:py-20 px-4">
                <div className="text-center mb-16 px-4">
                  <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Execution Schedule</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Development Roadmap.</h2>
                    <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-12 p-8 md:p-10 bg-on-surface text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-5 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary-container shadow-inner border border-white/10">
                          <Clock size={28} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-black text-primary-container uppercase tracking-widest opacity-70">Start Date</p>
                          <p className="text-xl font-black">June 1, 2026</p>
                        </div>
                      </div>
                      <div className="w-full md:w-px h-px md:h-12 bg-white/10 relative z-10"></div>
                      <div className="flex items-center gap-5 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary-container shadow-inner border border-white/10">
                          <Zap size={28} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-black text-primary-container uppercase tracking-widest opacity-70">Total Duration</p>
                          <p className="text-xl font-black">16 Full Weeks</p>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-[3rem] border border-secondary shadow-2xl bg-white mb-10">
                  <table className="w-full text-left text-sm font-medium">
                    <thead className="bg-surface-low text-primary font-black uppercase text-[10px] tracking-widest border-b border-secondary">
                      <tr>
                        <th className="px-10 py-8 text-center">Weeks</th>
                        <th className="px-10 py-8">Phase / Task</th>
                        <th className="px-10 py-8">Timeline (2026)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary/30">
                      {[
                        { w_count: "01 – 04", p: "UI Design (Figma)", w: "June 01 – June 28" },
                        { w_count: "05 – 08", p: "Auth & Role Module", w: "June 29 – July 26" },
                        { w_count: "09 – 12", p: "Donor/Patient Core", w: "July 27 – Aug 23" },
                        { w_count: "13 – 16", p: "Offline Sync Logic", w: "Aug 24 – Sep 20" },
                        { w_count: "Final", p: "KTCC Handover", w: "Sep 21, 2026" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-primary/[0.02] transition-colors group">
                          <td className="px-10 py-10 font-mono text-primary font-bold text-xs text-center">
                             #{row.w_count}
                          </td>
                          <td className="px-10 py-10">
                            <div className="flex items-center gap-4">
                              <span className="w-2.5 h-2.5 rounded-full bg-secondary group-hover:bg-primary transition-colors"></span>
                              <span className="font-black text-on-surface text-lg tracking-tight group-hover:text-primary transition-colors">{row.p}</span>
                            </div>
                          </td>
                          <td className="px-10 py-10 font-black text-secondary group-hover:text-primary transition-colors text-sm tracking-tighter italic">
                            {row.w}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 6. Engineering Section */}
          {activeSection === "engineering" && (
            <FadeIn key="engineering">
              <div className="max-w-5xl mx-auto py-10 space-y-20">
                 <div className="text-center">
                     <span className="text-primary font-black uppercase text-xs tracking-[0.4em] mb-4 block">System Architecture</span>
                     <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-on-surface">Architecture Overview.</h2>
                     
                     {/* Visual Architecture Diagram */}
                     <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center mb-20 px-4">
                       <div className="p-8 bg-surface-lowest rounded-[2.5rem] border border-black/[0.05] shadow-sm group hover:border-primary/20 transition-all flex flex-col items-center">
                         <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                           <Users size={24}/>
                         </div>
                         <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-center">Access Layer</h4>
                         <p className="text-[10px] text-secondary mt-2 font-bold leading-tight text-center">Staff, Donors, Patients</p>
                       </div>
                       <div className="hidden md:flex justify-center flex-col items-center gap-2 opacity-20">
                         <div className="w-full h-px bg-on-surface"></div>
                         <ArrowRight size={24}/>
                       </div>
                    <div className="p-8 sm:p-10 bg-primary text-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(175,0,69,0.3)] md:col-span-1 border-4 border-white scale-100 md:scale-110 relative group">
                         <Cpu className="mx-auto mb-4 group-hover:rotate-12 transition-transform" size={40}/>
                         <h4 className="font-black text-sm uppercase tracking-widest text-center">Logic Hub</h4>
                         <p className="text-[11px] opacity-80 mt-2 font-black text-center">Flutter Engine</p>
                         <div className="absolute -inset-1 border border-primary/20 rounded-[3.25rem] scale-105 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       </div>
                       <div className="hidden md:flex justify-center flex-col items-center gap-2 opacity-20">
                         <div className="w-full h-px bg-on-surface"></div>
                         <ArrowRight size={24}/>
                       </div>
                       <div className="grid grid-cols-1 gap-4">
                          <div className="p-5 sm:p-6 bg-surface-lowest rounded-3xl border border-black/[0.05] text-center group hover:border-primary/20 transition-all shadow-sm">
                            <Database size={20} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-tight text-on-surface">Isar Storage</span>
                          </div>
                          <div className="p-5 sm:p-6 bg-surface-lowest rounded-3xl border border-black/[0.05] text-center group hover:border-primary/20 transition-all shadow-sm">
                            <Zap size={20} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-tight text-on-surface">Supabase Sync</span>
                          </div>
                       </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-10 text-left">
                        <div className="p-10 bg-surface-low rounded-[3rem] border border-secondary group hover:border-primary/20 transition-all">
                           <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm"><Database size={28} /></div>
                             <h4 className="font-black text-xl uppercase tracking-widest leading-none text-on-surface">Local-First Persistence</h4>
                           </div>
                           <p className="text-sm md:text-base text-secondary font-medium mb-8 leading-relaxed">
                             We utilize the <strong>Isar Database</strong> for all local state. It provides zero-cost queries on low-end hardware, enabling search and booking to function during Turbat's frequent connectivity outages.
                           </p>
                           <div className="flex flex-wrap gap-3">
                              <span className="px-4 py-2 bg-white text-[10px] font-black rounded-xl border border-secondary tracking-widest group-hover:border-primary/30 transition-colors shadow-sm">TEXT RECORDS</span>
                              <span className="px-4 py-2 bg-white text-[10px] font-black rounded-xl border border-secondary tracking-widest group-hover:border-primary/30 transition-colors shadow-sm">LAZY-LOAD BINARIES</span>
                           </div>
                        </div>
                        <div className="p-10 bg-surface-low rounded-[3rem] border border-secondary group hover:border-primary/20 transition-all">
                           <div className="flex items-center gap-4 mb-6">
                             <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm"><Zap size={28} /></div>
                             <h4 className="font-black text-xl uppercase tracking-widest leading-none text-on-surface">Dispute Resolution</h4>
                           </div>
                           <p className="text-sm md:text-base text-secondary font-medium mb-8 leading-relaxed">
                             Cloud synchronization via <strong>Supabase</strong> PostgreSQL. The system employs deterministic rules to resolve incompatible offline entries based on patient priority tiers.
                           </p>
                           <div className="flex flex-wrap gap-3">
                              <span className="px-4 py-2 bg-white text-[10px] font-black rounded-xl border border-secondary tracking-widest group-hover:border-primary/30 transition-colors shadow-sm">AUTOMATIC SYNC</span>
                              <span className="px-4 py-2 bg-white text-[10px] font-black rounded-xl border border-secondary tracking-widest group-hover:border-primary/30 transition-colors shadow-sm">JWT SECURITY</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 pt-16 border-t border-secondary">
                    <div className="space-y-8">
                      <h3 className="text-3xl font-black mb-10 tracking-tighter text-on-surface">Operational Hardware</h3>
                      <div className="p-8 bg-surface-low rounded-[2.5rem] flex items-center gap-8 border border-secondary group hover:border-primary/30 transition-all shadow-sm">
                         <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><Smartphone size={32}/></div>
                         <div>
                           <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Testing Units</p>
                           <span className="text-lg font-bold text-on-surface">Standard Android devices</span>
                           <p className="text-xs text-secondary font-medium mt-1 italic">Center-available hardware focus.</p>
                         </div>
                      </div>
                      <div className="p-8 bg-surface-low rounded-[2.5rem] flex items-center gap-8 border border-secondary group hover:border-primary/30 transition-all shadow-sm">
                         <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all"><Zap size={32}/></div>
                         <div>
                           <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Notification Layer</p>
                           <span className="text-lg font-bold text-on-surface">Local Hybrid SMS Gateway</span>
                           <p className="text-xs text-secondary font-medium mt-1 italic">Resilient alerting chains.</p>
                         </div>
                      </div>
                    </div>
                    <div>
                       <h3 className="text-3xl font-black mb-10 tracking-tighter text-on-surface">Development Stack</h3>
                       <div className="grid grid-cols-2 gap-4">
                         {["Flutter SDK", "Isar DB", "Supabase", "GitHub", "VS Code", "Figma", "Firebase CM"].map(s => (
                           <div key={s} className="px-6 py-6 bg-white border border-secondary text-xs font-black uppercase tracking-widest rounded-[2rem] text-center shadow-sm hover:shadow-lg hover:border-primary/20 transition-all text-on-surface group cursor-default">
                             {s}
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
              </div>
            </FadeIn>
          )}

          {/* 7. References Section */}
          {activeSection === "references" && (
            <FadeIn key="references">
               <div className="max-w-3xl mx-auto py-10 lg:py-20">
                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter text-on-surface">Academic References.</h2>
                <div className="space-y-8 text-sm md:text-base text-secondary italic border-l-4 border-primary/20 pl-8 md:pl-12 py-6">
                   <p>[1] World Health Organization, "the global burden of disease: 2004 update," WHO Press, Geneva, 2008.</p>
                   <p>[2] S. Ansari et al., "Thalassemia in Balochistan: Prevalence and distribution," Pakistan Journal of Medical Sciences, 2012.</p>
                   <p>[3] Pakistan Thalassemia Welfare Society, Annual Report, Karachi, 2022.</p>
                   <p>[4] Internal research summary: Comparison of 8 applications, Team KTCC, 2026.</p>
                   <p>[5] Google LLC, Flutter Documentation, 2024.</p>
                   <p>[6] Isar Database Contributors, Documentation, 2024.</p>
                   <p>[7] Supabase Inc., Supabase Documentation, 2024.</p>
                </div>
              </div>
            </FadeIn>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <footer className="w-full max-w-6xl mt-12 md:mt-16 pt-12 md:pt-16 border-t border-secondary overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 px-6">
           <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary shadow-lg shadow-primary/20"></div>
                <span className="font-black text-2xl tracking-tighter text-on-surface">KTCC</span>
              </div>
              <p className="text-xs font-bold text-secondary uppercase tracking-[.25em] max-w-xs leading-relaxed opacity-70">
                A digital safety net for the Kech community. Built for Turbat, Balochistan.
              </p>
           </div>
           
           <div className="flex flex-col md:items-end gap-8">
              <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-secondary">
                <button onClick={() => setActiveSection("home")} className="hover:text-primary transition-colors">DASHBOARD</button>
                <button onClick={() => setActiveSection("methodology")} className="hover:text-primary transition-colors">PROCESS</button>
                <button onClick={() => setActiveSection("references")} className="hover:text-primary transition-colors">REFERENCES</button>
              </div>
              <p className="text-[10px] font-black text-primary py-3 px-8 bg-primary/5 rounded-full uppercase tracking-[0.4em] border border-primary/10 shadow-sm">
                © 2026 UNIVERSITY OF TURBAT
              </p>
           </div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
           <span className="text-[12vw] md:text-[8vw] font-black text-surface-low select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap opacity-20 block leading-none">
             VITAL STREAM
           </span>
        </div>
      </footer>
    </div>
  );
}

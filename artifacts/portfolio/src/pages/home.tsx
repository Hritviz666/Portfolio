import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Code2,
  Database,
  BrainCircuit,
  TerminalSquare,
  Network,
  Send,
  User,
  MessageSquare,
  Download
} from "lucide-react";
import { 
  SiPython, 
  SiCplusplus, 
  SiPostgresql, 
  SiScikitlearn, 
  SiPytorch, 
  SiNumpy, 
  SiPandas, 
  SiHuggingface, 
  SiFastapi, 
  SiStreamlit,
  SiDocker,
  SiRender,
  SiPowerbi
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground font-sans overflow-x-hidden">
      
      {/* HEADER / NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tight text-primary">
            HM<span className="text-foreground">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-foreground transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <section className="min-h-[70vh] flex flex-col justify-center relative">
          {/* Decorative background element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BrainCircuit className="w-4 h-4" />
              <span>ML/AI Engineer & Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-[1.1]">
              Building <span className="text-primary">intelligent systems</span> from the ground up.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm Hritviz Manral, an Information Technology student at IIIT Una focused on Machine Learning, Generative AI, and Software Engineering. I enjoy building end-to-end AI systems—from model development and experimentation to deployment and user-facing applications. My goal is to create technology that transforms data into meaningful insights and real-world impact.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download="HritvizManral_Resume.pdf"
                data-testid="link-download-resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors border border-border"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a href="https://github.com/Hritviz666" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/hritvizmanral" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT & EDUCATION */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              I enjoy building intelligent systems that bridge the gap between data and decision-making.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              My interests span Machine Learning, Generative AI, Multi-Agent Systems, and Scalable Software Engineering. I am particularly fascinated by how modern AI systems can be combined with strong software architecture to solve meaningful real-world problems.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              When I'm not building projects, you'll usually find me learning new technologies, solving algorithmic challenges, or exploring the latest developments in AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["AI/ML", "Generative AI", "Deep Learning", "Software Engineering", "Competitive Programming", "System Design"].map((interest) => (
                <span key={interest} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                  {interest}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hritvizmanral66@gmail.com" className="hover:text-foreground transition-colors">hritvizmanral66@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91-9557633091</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-display font-bold mb-2">Education</h2>
            
            <div className="relative pl-8 border-l border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                <h3 className="text-lg font-bold text-foreground">B.Tech Information Technology</h3>
                <p className="text-primary font-medium text-sm mb-1">IIIT Una • 2024–Present</p>
                <p className="text-muted-foreground text-sm">CGPA: 8.93</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-muted" />
                <h3 className="text-lg font-bold text-foreground">Senior Secondary</h3>
                <p className="text-muted-foreground font-medium text-sm mb-1">DAV Public School • 2022–23</p>
                <p className="text-muted-foreground text-sm">95.0%</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-muted" />
                <h3 className="text-lg font-bold text-foreground">Secondary</h3>
                <p className="text-muted-foreground font-medium text-sm mb-1">Heritage Academy • 2020–21</p>
                <p className="text-muted-foreground text-sm">96.4%</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-2">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg">Tools and technologies I use to build systems.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<TerminalSquare className="w-6 h-6 text-primary" />}
              title="Languages"
              items={["Python", "C/C++", "PostgreSQL"]}
              delay={0.1}
            />
            <SkillCard 
              icon={<BrainCircuit className="w-6 h-6 text-primary" />}
              title="ML / Deep Learning"
              items={["Scikit-learn", "PyTorch", "NumPy", "Pandas", "HuggingFace"]}
              delay={0.2}
            />
            <SkillCard 
              icon={<Network className="w-6 h-6 text-primary" />}
              title="GenAI & Agents"
              items={["LangChain", "LangGraph", "Prompt Engineering"]}
              delay={0.3}
            />
            <SkillCard 
              icon={<Code2 className="w-6 h-6 text-primary" />}
              title="CS Fundamentals"
              items={["OOP", "Data Structures & Algorithms", "Operating Systems", "Computer Networks", "DBMS", "Competitive Programming"]}
              delay={0.4}
            />
            <SkillCard 
              icon={<Database className="w-6 h-6 text-primary" />}
              title="Web & Tools"
              items={["FastAPI", "Streamlit", "Docker", "Render", "Git", "Power BI", "MS Excel"]}
              delay={0.5}
            />
          </div>

          {/* Tech Stack Marquee (Static layout representation) */}
          <div className="pt-8 border-t border-border flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <SiPython className="w-8 h-8 hover:text-[#3776AB] transition-colors" />
            <SiCplusplus className="w-8 h-8 hover:text-[#00599C] transition-colors" />
            <SiPostgresql className="w-8 h-8 hover:text-[#4169E1] transition-colors" />
            <SiScikitlearn className="w-8 h-8 hover:text-[#F7931E] transition-colors" />
            <SiPytorch className="w-8 h-8 hover:text-[#EE4C2C] transition-colors" />
            <SiPandas className="w-8 h-8 hover:text-[#150458] transition-colors" />
            <SiHuggingface className="w-8 h-8 hover:text-[#FFD21E] transition-colors" />
            <SiFastapi className="w-8 h-8 hover:text-[#009688] transition-colors" />
            <SiStreamlit className="w-8 h-8 hover:text-[#FF4B4B] transition-colors" />
            <SiDocker className="w-8 h-8 hover:text-[#2496ED] transition-colors" />
            <SiRender className="w-8 h-8 hover:text-[#46E3B7] transition-colors" />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-2">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Real pipelines, tangible results.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="Eleware"
              subtitle="Student Dropout Prediction System"
              date="Oct–Dec 2025"
              description="Built an end-to-end ML pipeline on 10,000+ records with a stacked ensemble (RandomForest, LightGBM, CatBoost, XGBoost) achieving ROC-AUC 95% and F1 90%. Optuna hyperparameter tuning minimized false negatives. Served via FastAPI and MongoDB Atlas."
              tags={["Python", "MongoDB", "FastAPI", "Model Stacking", "Optuna", "scikit-learn"]}
              delay={0.1}
            />
            
            <ProjectCard 
              title="AI Research Assistant"
              subtitle="Multi-Agent Research Platform"
              date="Apr 2026"
              description="Multi-agent AI pipeline using 3 specialized agents (Researcher, Summarizer, Report Writer) running sequentially. Integrates Tavily Search for real-time web retrieval and OpenAI GPT-4o-mini for inference. FastAPI backend with Streamlit frontend."
              tags={["CrewAI", "GPT-4o-mini", "Tavily", "FastAPI", "Streamlit", "Python"]}
              delay={0.2}
            />
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-2">Milestones</h2>
            <p className="text-muted-foreground text-lg">Competitive programming & hackathons.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AchievementCard 
              title="500+ CP Problems Solved"
              description="Consistent problem solving across LeetCode, Codeforces, and CodeChef (2024–present)."
              delay={0.1}
            />
            <AchievementCard 
              title="Algo University DP Camp"
              description="Selected from 4,000 shortlisted out of 40,000+ applicants; secured a top 1,000 finish (Apr 2026)."
              delay={0.2}
            />
            <AchievementCard 
              title="Hackathon Finalist"
              description="National-level hackathon at IIIT Gwalior (Apr 2026)."
              delay={0.3}
            />
            <AchievementCard 
              title="CodeChef 2-Star"
              description="Achieved 2-Star rating on CodeChef (2026)."
              delay={0.4}
            />
          </div>
        </section>
        
        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-2">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">Have a project, opportunity, or question? Send a message.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 flex flex-col gap-6"
            >
              <div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently open to internships, research collaborations, and interesting side projects in ML/AI and backend engineering.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a href="mailto:hritvizmanral66@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  hritvizmanral66@gmail.com
                </a>
                <a href="tel:+919557633091" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </span>
                  +91 95576 33091
                </a>
                <a href="https://github.com/Hritviz666" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Github className="w-4 h-4 text-primary" />
                  </span>
                  github.com/Hritviz666
                </a>
                <a href="https://linkedin.com/in/hritvizmanral" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </span>
                  linkedin.com/in/hritvizmanral
                </a>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-border mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Hritviz Manral. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="https://github.com/Hritviz666" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/hritvizmanral" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="mailto:hritvizmanral66@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </footer>

      </main>
    </div>
  );
}

function SkillCard({ icon, title, items, delay }: { icon: React.ReactNode, title: string, items: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-card border border-border rounded-xl shadow-sm hover:border-primary/30 transition-colors"
    >
      <div className="mb-4 p-3 bg-background inline-block rounded-lg border border-border">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-4 text-foreground">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, subtitle, date, description, tags, delay }: { title: string, subtitle: string, date: string, description: string, tags: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl overflow-hidden"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-1">{title}</h3>
            <p className="text-primary text-sm font-medium">{subtitle}</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 border border-border rounded">{date}</span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AchievementCard({ title, description, delay }: { title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl"
    >
      <div className="p-2 bg-primary/10 text-primary rounded border border-primary/20 shrink-0 mt-0.5">
        <Code2 className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:hritvizmanral66@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const inputClass =
    "w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            data-testid="input-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className={`${inputClass} pl-10`}
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
          <input
            data-testid="input-email"
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            className={`${inputClass} pl-10`}
          />
        </div>
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
        <textarea
          data-testid="input-message"
          name="message"
          placeholder="What's on your mind?"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputClass} pl-10 resize-none`}
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          data-testid="button-submit"
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
        {sent && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-primary font-medium"
          >
            Email client opened — message ready to send.
          </motion.span>
        )}
      </div>
    </form>
  );
}

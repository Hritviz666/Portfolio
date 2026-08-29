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
  Download,
  Award,
  BookOpen,
  ExternalLink
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
            <a href="#certifications" className="hover:text-foreground transition-colors">Certifications</a>
            <a href="#achievements" className="hover:text-foreground transition-colors">Achievements</a>
            <a href="#involvement" className="hover:text-foreground transition-colors">Involvement</a>
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
              <span>B.Tech IT Student | Generative AI | Machine Learning  </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-[1.1]">
              Transforming <span className="text-primary">Complex Problems</span> into AI Solutions.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I'm Hritviz Manral, a B.Tech Information Technology student at IIIT Una passionate about Generative AI, Machine Learning, and Software Engineering. I build hands on AI systems using LLMs, Multi-Agent Systems, RAG, and end to end ML pipelines, with a strong focus on scalable applications for real world problems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                View My Work
              </a>
              <a
                href="/Hritviz_Manral_Resume.pdf"
                download="Hritviz_Manral_Resume.pdf"
                data-testid="link-download-resume"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors border border-border"
              >
                <Download className="w-4 h-4" />
                Hritviz_Manral_Resume
              </a>
              <a href="https://github.com/Hritviz666" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/Hritviz" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
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
              I enjoy building intelligent systems that turn complex problems into practical, scalable AI applications.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              My interests lies in Generative AI, Machine Learning, Multi-Agent Systems, RAG, and Software Engineering. I enjoy combining modern AI techniques with strong software architecture to build reliable systems for real world use cases.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              When I'm not building projects, you'll usually find me learning new technologies, solving algorithmic challenges, or exploring the latest developments in AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Generative AI", "Machine Learning", "Multi-Agent Systems", "RAG", "Competitive Programming", "DSA].map((interest) => (
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
              items={["Python", "C/C++", "SQL (MySQL, PostgreSQL)"]}
              delay={0.1}
            />
            <SkillCard 
              icon={<BrainCircuit className="w-6 h-6 text-primary" />}
              title="ML / Deep Learning"
              items={["Scikit-learn", "PyTorch", "NumPy", "Pandas", "Transformers (HuggingFace)"]}
              delay={0.2}
            />
            <SkillCard 
              icon={<Network className="w-6 h-6 text-primary" />}
              title="GenAI & Agents"
              items={["LangChain", "LangGraph", "CrewAI", "LlamaIndex", "ChromaDB", "Prompt Engineering", "RAG"]}
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
              title="Web / Backend"
              items={["FastAPI", "Streamlit", "REST APIs"]}
              delay={0.5}
            />
            <SkillCard 
              icon={<TerminalSquare className="w-6 h-6 text-primary" />}
              title="Tools & Platforms"
              items={["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Render", "Power BI", "MS Excel"]}
              delay={0.6}
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
              date="Oct 2025 – Dec 2025"
              description="Built an end-to-end ML pipeline trained on 10,000+ student records using a stacked ensemble of RandomForest, LightGBM, CatBoost and XGBoost. Achieved 95% ROC-AUC and 90% F1 through Optuna hyperparameter optimization, with FastAPI REST APIs and MongoDB Atlas for real-time prediction serving."
              tags={["Python", "FastAPI", "MongoDB", "Scikit-learn", "Optuna", "XGBoost"]}
              link="https://github.com/Hritviz666/Student-Dropout-Prediction"
              delay={0.1}
            />
            
            <ProjectCard 
              title="AI Research Assistant"
              subtitle="Multi-Agent Research Platform"
              date="Mar 2026"
              description="Engineered a multi-agent research workflow using CrewAI with Researcher, Summarizer and Report Writer agents. Integrated Tavily Search with GPT-4o-mini for real-time web retrieval and factual report generation, with a FastAPI backend, Streamlit frontend, structured reports and PDF export."
              tags={["CrewAI", "GPT-4o-mini", "Tavily", "FastAPI", "Streamlit", "Python"]}
              link="https://github.com/Hritviz666/Research-Assistant"
              delay={0.2}
            />

            <ProjectCard 
              title="FormSaathi"
              subtitle="Multimodal AI Agent for Indian Government Forms"
              date="May 2026 – Jul 2026"
              description="Built a multimodal AI system combining YOLOv8 and OCR for Indian government and banking forms. Fine-tuned YOLOv8 on 2,000+ annotated fields across 9 form types, achieving mAP@0.5 = 0.806, and designed a hallucination-resistant RAG pipeline using GPT-4o-mini, LlamaIndex and ChromaDB."
              tags={["YOLOv8", "GPT-4o-mini", "LlamaIndex", "ChromaDB", "FastAPI", "OCR"]}
              link="https://github.com/Hritviz666/Form-Saathi"
              delay={0.3}
            />
          </div>
        </section>

        {/* CERTIFICATIONS & COURSES */}
        <section id="certifications" className="space-y-12 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-2">Certifications & Courses</h2>
            <p className="text-muted-foreground text-lg">Learning that shaped my technical foundation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertCard
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              title="Complete Data Science, ML, DL & NLP Bootcamp"
              issuer="Udemy"
              description="End-to-end bootcamp covering Data Science, Machine Learning, Deep Learning, and Natural Language Processing with hands-on Python projects."
              tags={["Python", "ML", "Deep Learning", "NLP", "Data Science"]}
              delay={0.1}
            />
            <CertCard
              icon={<Award className="w-5 h-5 text-primary" />}
              title="Algo University — Dynamic Programming Camp"
              issuer="Algo University"
              date="Apr 2026"
              description="Selected among 4,000 shortlisted from 40,000+ applicants. Completed the intensive DP camp and earned a certificate as a top 1,000 finisher."
              tags={["Dynamic Programming", "Algorithms", "Competitive Programming"]}
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
              title="500+ Algorithmic Problems Solved"
              description="Solved 500+ problems across LeetCode, Codeforces and CodeChef."
              delay={0.1}
            />
            <AchievementCard 
              title="CodeChef 2-Star"
              description="Achieved a 2-Star rating on CodeChef."
              delay={0.2}
            />
            <AchievementCard 
              title="National-Level Hackathon Finalist"
              description="Finalist at the National-Level Hackathon conducted by IIIT Gwalior."
              delay={0.3}
            />
            <AchievementCard 
              title="Algo University DP Camp"
              description="Selected among 4,000 candidates from 40,000+ applicants and finished in the Top 1,000."
              delay={0.4}
            />
          </div>
        </section>
        
        {/* POSITIONS OF RESPONSIBILITY */}
        <section id="involvement" className="space-y-10 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold mb-2">Involvement</h2>
            <p className="text-muted-foreground text-lg">Positions of responsibility.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4 p-6 bg-background border border-border rounded-xl"
          >
            <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-lg shrink-0 mt-0.5">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-bold text-foreground mb-1">Member, Force – The Coding Club</h4>
              <p className="text-primary text-sm font-medium mb-1">IIIT Una · 2024–Present</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Contribute to coding culture through competitive programming activities, technical events, peer learning sessions, workshops, contests, and technical initiatives.</p>
            </div>
          </motion.div>
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
                  I'm open to internships, AI/ML opportunities, and interesting projects involving Generative AI, Machine Learning, and Software Engineering.
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
                <a href="https://linkedin.com/in/Hritviz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                  <span className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </span>
                  linkedin.com/in/Hritviz
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
            <a href="www.linkedin.com/in/hritvizmanral" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
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

function ProjectCard({ title, subtitle, date, description, tags, link, delay }: { title: string, subtitle: string, date: string, description: string, tags: string[], link: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col p-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title inline-flex items-center gap-2 text-2xl font-display font-bold text-foreground mb-1 hover:text-primary transition-colors"
            >
              {title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity" />
            </a>
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

function CertCard({
  icon,
  title,
  issuer,
  date,
  description,
  tags,
  link,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  tags: string[];
  link?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay }}
      className="group relative flex flex-col gap-4 p-6 bg-background border border-border rounded-xl hover:border-primary/40 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-primary/10 border border-primary/20 rounded-lg shrink-0 mt-0.5">
            {icon}
          </div>
          <div>
            <h3 className="font-display font-bold text-foreground leading-snug mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-medium">{issuer}</span>
              {date && (
                <>
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground font-mono text-xs">{date}</span>
                </>
              )}
            </div>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="relative z-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md border border-border/50">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

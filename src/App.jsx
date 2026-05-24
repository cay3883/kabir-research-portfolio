import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Filter,
  Layers3,
  Lock,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

// Portfolio for Muhammad Kabir Aliyu
// Add your real image as /public/muhammad-kabir.png.
// Research participants are intentionally anonymised for ethics and privacy.

const profileImage = "/muhammad-kabir.png";
const portfolioUrl = "https://aliyu-portfolio.netlify.app/";

const featuredCaseStudies = [
  {
    id: 1,
    type: "AI UX Research",
    tag: "AI + Mobile Security",
    title: "Mobile Phone Security and AI Feature Research",
    summary:
      "An end-to-end study exploring device security anxiety, AI trust, data privacy, and user expectations for AI-powered protection on smartphones.",
    methods: ["Recruitment", "In-depth interviews", "Persona synthesis", "Thematic analysis"],
    role: "Led recruitment, moderation, synthesis, reporting, and product recommendations for the Nigeria research stream.",
    impact:
      "Converted sensitive user stories into anonymised themes around theft anxiety, biometric trust, device tracking, data control, and AI assistant safety.",
    outcome: "Insights shaped AI security thinking and future feature opportunity areas.",
    metric: "End-to-end study",
    ethics:
      "No participant names, photos, private quotes, or sensitive personal stories are published. Only grouped insights are shown.",
  },
  {
    id: 2,
    type: "Device Launch Research",
    tag: "TECNO Camon 40",
    title: "TECNO Camon 40 AI Launch and Market Feedback Study",
    summary:
      "A mixed field research project combining focus groups, device testing, user follow-ups, promoter feedback, and market observation to identify selling points.",
    methods: ["20-person FGD", "Follow-up calls", "Market visits", "Promoter feedback"],
    role: "Facilitated sessions, trained participants, supervised testing, created call guides, and reported product positioning insights.",
    impact:
      "Helped identify the top selling points for the device, including AI feature appeal and market-facing product narratives.",
    outcome: "Insights supported product positioning, sales training, and promoter messaging.",
    metric: "20 FGD users",
    ethics:
      "Research output is described at business and product level only, without participant identity disclosure.",
  },
  {
    id: 3,
    type: "AI Product Research",
    tag: "Camon 50 + AI Agents",
    title: "Camon 50, AI Agents, and Feature Marketability Research",
    summary:
      "A product research stream covering Camon 50 feature evaluation, AI agent marketability, office staff feedback, and promoter interviews.",
    methods: ["12 IDIs", "35-feature analysis", "Promoter interviews", "Staff interviews"],
    role: "Moderated interviews, analysed feature desirability, compared marketability signals, and contributed to final reporting.",
    impact:
      "Helped product teams understand which AI and device features had stronger local appeal and clearer selling potential.",
    outcome: "Research supported feature prioritisation and market-facing communication.",
    metric: "35 features analysed",
    ethics:
      "Only high-level project structure and anonymised research contribution are shown publicly.",
  },
  {
    id: 4,
    type: "Research Ops",
    tag: "Team Systems",
    title: "Research Operations, Requirements Review, and Team Enablement",
    summary:
      "A research operations effort covering weekly user requirement reviews, template improvement, team reporting discipline, recruitment support, and team coordination.",
    methods: ["Workflow design", "Weekly reviews", "Requirement triage", "Stakeholder reporting"],
    role: "Created review rhythm, tracked requirements, supported team handover, and helped build the AI Product team in Nigeria.",
    impact:
      "Improved reporting consistency, team productivity, research documentation, and cross-functional access to insights.",
    outcome: "A repeatable operating rhythm for research quality and team accountability.",
    metric: "40% faster collection",
    ethics:
      "Internal documents, private team materials, and confidential product files are not published.",
  },
];

const projectArchive = [
  {
    category: "AI Product Research",
    title: "AI Education Survey and Home Feedback Research",
    period: "2025",
    scope: "9 parent-child IDIs, home feedback research, application drawback analysis, and product report writing.",
    methods: ["Parent-child IDIs", "Home feedback", "Report synthesis"],
    impact: "Highlighted user pain points and application drawbacks that could guide education-focused AI product improvement.",
  },
  {
    category: "AI Product Research",
    title: "AI Agents Survey",
    period: "2025",
    scope: "Interviews with 8 promoters and 5 office staff members to understand marketable AI features and communication angles.",
    methods: ["Promoter interviews", "Office staff interviews", "Feature desirability analysis"],
    impact: "Identified the AI agent features with stronger market-facing potential for device positioning.",
  },
  {
    category: "AI Product Research",
    title: "AI Medical Consultation Research",
    period: "2025",
    scope: "Explored user attitudes, concerns, and adoption expectations around AI-assisted medical consultation in Nigeria.",
    methods: ["User interviews", "Survey guide", "Thematic analysis"],
    impact: "Surfaced trust, usefulness, and risk themes for AI service design in sensitive contexts.",
  },
  {
    category: "AI Product Research",
    title: "AI Emailing Assistance Survey",
    period: "2025",
    scope: "Studied how users perceive AI support for writing, editing, and sending emails on mobile devices.",
    methods: ["Survey design", "User feedback", "Insight reporting"],
    impact: "Helped clarify practical productivity use cases for AI writing support.",
  },
  {
    category: "Device Launch Research",
    title: "Camon 50 Feature Evaluation",
    period: "2025",
    scope: "Moderated 12 IDIs and analysed 35 features to identify key selling points and user-facing value.",
    methods: ["12 IDIs", "Feature analysis", "Final report contribution"],
    impact: "Supported product and marketing teams with clearer feature prioritisation evidence.",
  },
  {
    category: "Device Launch Research",
    title: "TECNO Camon 40 Callback Study",
    period: "2025",
    scope: "Created a callback survey guide, called 104 users, and reported findings from 34 completed responses.",
    methods: ["Callback survey", "Phone interviews", "Insight synthesis"],
    impact: "Identified features that influenced device purchase and post-purchase experience.",
  },
  {
    category: "Device Launch Research",
    title: "Camon 40 Market Visit and Sales Feedback",
    period: "2025",
    scope: "Market visits to understand device performance, promoter narratives, AI feature appeal, and competitor positioning.",
    methods: ["Market observation", "Promoter conversations", "Competitor review"],
    impact: "Linked field sales feedback to product positioning and training needs.",
  },
  {
    category: "Training and Enablement",
    title: "AI Feature Training for Promoters and Users",
    period: "2025",
    scope: "Delivered AI feature training across CV promoter training, Lagos Xclub event, and MTN Campus event.",
    methods: ["Training delivery", "Feature demonstration", "Stakeholder support"],
    impact: "Improved AI feature understanding among promoters and event participants.",
  },
  {
    category: "Market Research",
    title: "Countrywide Promoter Survey",
    period: "2025",
    scope: "A large survey of 1,194 promoters across Nigeria to understand smartphone purchase drivers and market signals.",
    methods: ["Survey design", "Quantitative analysis", "Market reporting"],
    impact: "Provided broad market intelligence on what Nigerian buyers consider when purchasing devices.",
  },
  {
    category: "Market Research",
    title: "Online Vendor Research in Abuja and Kaduna",
    period: "2024",
    scope: "Out-of-state research covering recruitment, logistics, interviews, and reporting for online vendor behaviour.",
    methods: ["Recruitment", "Field logistics", "In-depth interviews", "Reporting"],
    impact: "Generated insight into digital vendor behaviour, commercial pain points, and mobile needs outside Lagos.",
  },
  {
    category: "Market Research",
    title: "Payment Gateway Research in Nigeria",
    period: "2025",
    scope: "Research into top payment gateways and user/business expectations around mobile payment flows.",
    methods: ["Survey research", "Competitive review", "Insight reporting"],
    impact: "Supported understanding of payment behaviour and digital transaction needs in Nigeria.",
  },
  {
    category: "Market Research",
    title: "Credit Direct and EasyBuy Research",
    period: "2025",
    scope: "Interviews with credit promoters and users to compare financing experiences, friction points, and service gaps.",
    methods: ["Promoter interviews", "User interview", "Comparative analysis"],
    impact: "Generated recommendations to improve financing service experience and user understanding.",
  },
  {
    category: "Gaming and Performance",
    title: "Gaming Community Research in Nigeria",
    period: "2024 - 2025",
    scope: "Explored gaming behaviour, device expectations, and feature needs through gamer interviews and recruitment support.",
    methods: ["Gamer interviews", "Survey recruitment", "Scenario analysis"],
    impact: "Helped the team understand gaming use cases, user requirements, and device performance expectations.",
  },
  {
    category: "Gaming and Performance",
    title: "Device Testing, Bugs, Heating, and Compatibility Studies",
    period: "2025",
    scope: "Tested devices for gaming, heating, app compatibility, Google Lens availability, WhatsApp issues, and performance weaknesses.",
    methods: ["Device stress testing", "Bug reporting", "Scenario testing"],
    impact: "Escalated product issues and improvement points to testing and product teams.",
  },
  {
    category: "Research Ops",
    title: "User Requirement Identification and Review System",
    period: "2024 - 2025",
    scope: "Submitted user requirements, coordinated weekly review sessions, and helped route accepted requirements to product channels.",
    methods: ["Requirement writing", "Weekly reviews", "Triage", "Documentation"],
    impact: "Contributed directly to team KPI delivery and improved visibility of local user needs.",
  },
  {
    category: "Research Ops",
    title: "KOL Review Reporting System",
    period: "2024",
    scope: "Produced 20 KOL review reports capturing pain points, recommendations, positive notes, and product opportunities.",
    methods: ["KOL review", "Content analysis", "Report writing"],
    impact: "Turned public market voices into structured intelligence for product and brand teams.",
  },
];

const skills = [
  "Qualitative interviewing",
  "Focus group moderation",
  "Ethnographic field studies",
  "Contextual inquiry",
  "Survey design",
  "Usability evaluation",
  "Competitor benchmarking",
  "Persona synthesis",
  "Research reporting",
  "Stakeholder storytelling",
  "Research operations",
  "Training facilitation",
  "SPSS",
  "Figma",
  "Canva",
  "MS Office Suite",
];

const timeline = [
  {
    year: "2025 - Present",
    title: "Senior AI Product Department - Transsion Holdings",
    body: "Leading Nigeria research work across AI product studies, mobile security, AI education, AI agents, Camon device research, team coordination, and training.",
  },
  {
    year: "2024 - 2025",
    title: "Senior User Research Specialist - Transsion Holdings",
    body: "Delivered user requirements, KOL reviews, online vendor studies, gaming research, device testing, market studies, and research reports.",
  },
  {
    year: "2022 - 2023",
    title: "UX Researcher & Product Designer - C Insights Africa",
    body: "Improved onboarding research protocol and helped translate research findings into user-centred product and content decisions.",
  },
  {
    year: "2016 - 2017",
    title: "Civil Society and Youth Leadership - AIESEC",
    body: "Built early leadership experience in youth mobilisation, civic education, logistics, facilitation, and stakeholder engagement.",
  },
];

const process = [
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Frame the decision",
    body: "I clarify the product, market, or stakeholder decision the research must support before choosing methods.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Recruit responsibly",
    body: "I define participant criteria, screen carefully, manage logistics, and protect participant privacy.",
  },
  {
    icon: <Microscope className="h-5 w-5" />,
    title: "Collect field evidence",
    body: "I combine IDIs, FGDs, surveys, market visits, device tests, callbacks, and contextual observation.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Synthesize patterns",
    body: "I turn messy evidence into themes, personas, requirements, feature opportunities, and market narratives.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Drive action",
    body: "I package insights into reports, training inputs, stakeholder briefs, and product recommendations.",
  },
];

const stats = [
  { label: "Research experience", value: "3+ yrs" },
  { label: "Promoter survey reach", value: "1,194" },
  { label: "Feature analysis", value: "35" },
  { label: "KOL reports", value: "20" },
];

const filters = ["All", "AI UX Research", "Device Launch Research", "AI Product Research", "Research Ops"];
const projectFilters = ["All", ...Array.from(new Set(projectArchive.map((item) => item.category)))];


function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SectionLabel({ eyebrow, title, body }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl"
      >
        {title}
      </motion.h2>
      {body && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base leading-8 text-slate-600"
        >
          {body}
        </motion.p>
      )}
    </div>
  );
}

export default function ResearchPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -90]);

  const visibleCases = useMemo(() => {
    if (activeFilter === "All") return featuredCaseStudies;
    return featuredCaseStudies.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  const visibleProjects = useMemo(() => {
    if (activeProjectFilter === "All") return projectArchive;
    return projectArchive.filter((item) => item.category === activeProjectFilter);
  }, [activeProjectFilter]);

  const navItems = ["Work", "Projects", "Process", "Ethics", "Experience", "Contact"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7fbff] text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute right-[-8%] top-[12%] h-[34rem] w-[34rem] rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-violet-200/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-cyan-900/10">
              MK
            </span>
            <span>
              <span className="block text-sm font-black leading-none">Muhammad Kabir Aliyu</span>
              <span className="text-xs font-medium text-slate-500">AI & UX Researcher</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href={portfolioUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:bg-cyan-600 lg:flex"
          >
            Live Portfolio <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-2xl border border-slate-200 bg-white p-3 lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-24">
        <motion.div style={{ y: heroY }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-bold text-cyan-700 shadow-sm"
          >
            <Sparkles className="h-4 w-4" /> AI product research, mobile UX, and emerging market insight
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.8 }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-7xl lg:text-8xl"
          >
            I turn field evidence into product clarity.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            I am Muhammad Kabir Aliyu, an applied AI and UX researcher based in Lagos, Nigeria. My work covers AI product research, smartphone launch studies, field interviews, surveys, device testing, market intelligence, and research operations for product teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1"
            >
              View case studies <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 py-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <Layers3 className="h-4 w-4" /> View all projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white bg-white/70 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
                <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.85 }}
          className="relative"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-cyan-300/40 via-blue-300/30 to-violet-300/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white/80 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900">
              <img
                src={profileImage}
                alt="Muhammad Kabir Aliyu"
                className="h-[34rem] w-full object-cover object-center opacity-95"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
                <p className="text-sm font-semibold text-cyan-200">Research focus</p>
                <p className="mt-2 text-2xl font-black">Human-AI interaction, mobile UX, fintech-adjacent behaviours, and emerging market product research.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 border-y border-slate-200 bg-white/75 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-5 lg:px-8">
          {["AI Product Research", "Device Launch Studies", "Field Interviews", "Market Research", "Research Ops", "Training"].map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-bold text-slate-600 shadow-sm">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionLabel
          eyebrow="Featured case studies"
          title="Case studies built for hiring managers and product leaders."
          body="Each case study highlights the problem, method, role, product value, and ethical handling. Sensitive user details are intentionally removed."
        />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm">
            <Filter className="h-4 w-4" /> Filter
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-bold transition",
                activeFilter === filter
                  ? "border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleCases.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/10"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-cyan-100/70 transition group-hover:bg-cyan-200" />
              <div className="relative">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                    {item.tag}
                  </span>
                  <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white">{item.metric}</span>
                </div>
                <h3 className="text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.summary}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="mb-3 text-sm font-black text-slate-950">Methods</p>
                    <div className="grid gap-2">
                      {item.methods.map((method) => (
                        <span key={method} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-cyan-500" /> {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <p className="mb-3 text-sm font-black text-slate-950">Outcome</p>
                    <p className="text-sm leading-6 text-slate-600">{item.outcome}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-5">
                  <p className="text-sm font-black text-slate-950">My role</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.role}</p>
                </div>
                <div className="mt-3 rounded-3xl border border-cyan-100 bg-cyan-50 p-5">
                  <p className="text-sm font-black text-cyan-900">Impact</p>
                  <p className="mt-2 text-sm leading-6 text-cyan-900/75">{item.impact}</p>
                </div>
                <div className="mt-3 flex items-start gap-3 rounded-3xl border border-amber-100 bg-amber-50 p-5">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <p className="text-sm leading-6 text-amber-900"><span className="font-black">Ethics note:</span> {item.ethics}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel
            eyebrow="Project archive"
            title="A broader view of research projects I have worked on."
            body="This section gives recruiters a quick scan of the range of projects, methods, and product value across AI, mobile UX, market research, training, device testing, and research operations."
          />

          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-bold transition",
                  activeProjectFilter === filter
                    ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.04, 0.3) }}
                className="rounded-[2rem] border border-slate-200 bg-[#f7fbff] p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
                    {project.category}
                  </span>
                  <span className="text-xs font-black text-slate-400">{project.period}</span>
                </div>
                <h3 className="text-xl font-black leading-tight text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.scope}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.methods.map((method) => (
                    <span key={method} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500">
                      {method}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Product value</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{project.impact}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 bg-slate-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">My process</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">A practical research system for messy, real-world questions.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              I combine structured planning with field flexibility, then package insights in a way product, marketing, sales, and leadership teams can use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/30">
                  {step.icon}
                </div>
                <p className="text-lg font-black">{step.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.body}</p>
                <p className="mt-5 text-xs font-black text-cyan-300">0{index + 1}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="ethics" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-900/5"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Research ethics</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Insight without exposing people.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              My public portfolio is designed to show research thinking without publishing raw participant identities, private stories, sensitive screenshots, or confidential company materials.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Anonymised personas", "Participants are described by behaviour patterns and needs, not public identity."],
              ["Grouped evidence", "Sensitive stories are converted into themes, opportunity areas, and product implications."],
              ["Confidentiality by design", "Internal documents, unreleased product details, and private research artefacts are excluded."],
              ["Clear research value", "Every public case study focuses on decision impact, method choice, constraints, and learnings."],
            ].map(([title, body], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <Eye className="h-5 w-5" />
                </div>
                <p className="text-lg font-black text-slate-950">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel
            eyebrow="Experience"
            title="A researcher shaped by product, fieldwork, and communication."
            body="My background sits at the intersection of AI product research, mobile product behaviour, market intelligence, team operations, and evidence-based communication."
          />

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2.5rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10">
              <Brain className="h-10 w-10 text-cyan-300" />
              <h3 className="mt-6 text-2xl font-black">Core strengths</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2.5rem] border border-slate-200 bg-[#f7fbff] p-6">
              <div className="absolute bottom-8 left-10 top-8 w-px bg-slate-200" />
              <div className="grid gap-5">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative ml-8 rounded-[2rem] bg-white p-6 shadow-lg shadow-slate-900/5"
                  >
                    <span className="absolute -left-10 top-7 grid h-5 w-5 place-items-center rounded-full border-4 border-[#f7fbff] bg-cyan-500" />
                    <p className="text-sm font-black text-cyan-600">{item.year}</p>
                    <h3 className="mt-2 text-xl font-black text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 sm:p-12 lg:p-16">
          <div className="absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[-8rem] h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Let us talk</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Need research that gives your product team direction?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                I am open to UX research, AI product research, mobile UX, market studies, research operations, and research communication opportunities across emerging markets.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <a href="mailto:aliyukmohammad@gmail.com" className="mb-4 flex items-center gap-3 rounded-2xl bg-white p-4 text-slate-950 transition hover:-translate-y-1">
                <Mail className="h-5 w-5 text-cyan-600" />
                <span className="font-black">aliyukmohammad@gmail.com</span>
              </a>
              <a href="tel:+2347063183883" className="mb-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition hover:-translate-y-1 hover:bg-white/15">
                <Phone className="h-5 w-5 text-cyan-300" />
                <span className="font-bold">+234 706 318 3883</span>
              </a>
              <a href="https://linkedin.com/in/mohammadkabiraliyu" target="_blank" rel="noreferrer" className="mb-4 flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white transition hover:-translate-y-1 hover:bg-white/15">
                <LinkedinIcon className="h-5 w-5 text-cyan-300" />
                <span className="font-bold">linkedin.com/in/mohammadkabiraliyu</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span className="font-bold">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-slate-200 bg-white px-5 py-8 text-center text-sm font-semibold text-slate-500">
        <p>© 2026 Muhammad Kabir Aliyu. Built as an ethical UX research portfolio.</p>
      </footer>
    </main>
  );
}

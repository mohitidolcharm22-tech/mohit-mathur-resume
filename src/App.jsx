import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaBars,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaServer,
  FaTasks,
  FaTimes,
} from 'react-icons/fa'
import {
  SiCypress,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiRailway,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import './App.css'

const profile = {
  name: 'Mohit Mathur',
  role: 'Senior Lead Engineer',
  location: 'Pune, India',
  mail: 'mohitidol_mathur@yahoo.com',
  phone: '+91 80875 89387',
  summary:
    'Senior Lead Engineer with strong expertise in scalable frontend applications, reusable component ecosystems, and enterprise-grade UI platforms. Proficient in React.js, TypeScript, JavaScript, Storybook, Node.js APIs, SQL, Docker, CI/CD workflows, SonarQube, and monorepo architecture. Proven in leading teams, owning end-to-end SDLC delivery, driving Agile execution, mentoring developers, conducting high-impact code reviews, and delivering stakeholder demos. Adept at translating business and design goals into maintainable, high-quality solutions that improve usability, performance, and delivery speed. Open to Senior Lead Developer, Technical Lead, Senior Software Engineer, Engineering Lead, and Solution Architect opportunities.',
}

const milestones = [
  {
    id: 'brac',
    period: '2026',
    project: 'BRAC Bank Design System',
    domain: 'Banking & Finance',
    role: 'Senior Lead Developer',
    duration: '2.5 months',
    vibe: 'Built from scratch',
    highlights: [
      'Created a reusable, prop-driven component library based on Figma.',
      'Enabled Storybook-driven adoption for fast experimentation and QA.',
      'Owned versioning and package release flow using Changesets.',
    ],
    tech: ['React', 'TypeScript', 'Storybook', 'CI/CD', 'Monorepo'],
  },
  {
    id: 'sirius',
    period: '2022 - 2025',
    project: 'BMS SIRIUS',
    domain: 'Life Science',
    role: 'Senior Lead Developer',
    duration: '3 years',
    vibe: 'Long-haul product evolution',
    highlights: [
      'Led UI development for user management and product configuration.',
      'Contributed to APIs in Node.js while driving end-of-sprint demos.',
      'Acted as Scrum Master and supported regression readiness.',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'REST', 'Docker'],
  },
  {
    id: 'ciena',
    period: '2021',
    project: 'Ciena Planner Plus',
    domain: 'Telecom',
    role: 'Senior Developer',
    duration: '11 months',
    vibe: 'Precision execution',
    highlights: [
      'Implemented grid and canvas workflows for planning experiences.',
      'Shipped login modernization and design settings enhancements.',
      'Wrote unit tests and resolved critical bugs under sprint pressure.',
    ],
    tech: ['React', 'TypeScript', 'Micro Frontend', 'Jest'],
  },
  {
    id: 'globant',
    period: '2019 - 2021',
    project: 'Parks and Studios (Globant)',
    domain: 'Theme Parks & Studios',
    role: 'Senior Software Developer',
    duration: '2 years',
    vibe: 'Media-rich platform engineering',
    highlights: [
      'Built dynamic interfaces with React and JavaScript.',
      'Optimized performance with lazy loading and code splitting.',
      'Delivered responsive experiences across multiple device classes.',
    ],
    tech: ['React', 'JavaScript', 'PHP', 'Performance'],
  },
  {
    id: 'persistent',
    period: '2017 - 2019',
    project: 'Persistent Systems',
    domain: 'NGO',
    role: 'Module Lead',
    duration: '2 years',
    vibe: 'Systems and ownership',
    highlights: [
      'Delivered NGO management modules for donations and events.',
      'Improved data integrity and optimized backend performance.',
      'Coordinated feature implementation with stakeholder feedback.',
    ],
    tech: ['PHP', 'HTML/CSS', 'SQL', 'Agile'],
  },
  {
    id: 'xento-entrata',
    period: 'Oct 2012 - Apr 2017',
    project: 'Xento / Entrata Experience',
    domain: 'Real Estate & HRMS',
    role: 'Software Engineer',
    duration: '4 years 7 months',
    vibe: 'HRMS platform engineering',
    highlights: [
      'Crafted a comprehensive HRMS platform using PHP to support diverse organizational needs.',
      'Implemented employee management, payroll processing, leave tracking, and performance evaluation modules.',
      'Integrated secure data storage and efficient retrieval flows to streamline HR operations and improve workforce productivity.',
    ],
    tech: ['PHP', 'HRMS', 'Payroll', 'Employee Management', 'Performance'],
  },
]

const skillRadar = [
  {
    title: 'Frontend Core',
    icon: <FaReact />,
    score: 96,
    stack: ['React', 'Next.js', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Design Systems',
    icon: <SiStorybook />,
    score: 94,
    stack: ['Storybook', 'Reusable Components', 'Tokens', 'Accessibility'],
  },
  {
    title: 'Delivery Engine',
    icon: <FaTasks />,
    score: 92,
    stack: ['Scrum', 'Sprint Demos', 'Mentoring', 'Code Reviews'],
  },
  {
    title: 'Platform & APIs',
    icon: <FaServer />,
    score: 87,
    stack: ['Node.js', 'REST', 'GraphQL', 'Docker'],
  },
]

const toolbelt = [
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Storybook', icon: <SiStorybook /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Railway', icon: <SiRailway /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Cypress', icon: <SiCypress /> },
  { name: 'GitHub', icon: <FaGithub /> },
]

const domains = [
  { title: 'Banking and Finance', websiteUrl: '' },
  { title: 'Life Science', websiteUrl: '' },
  { title: 'Education', websiteUrl: '' },
  { title: 'Real Estate', websiteUrl: '' },
  { title: 'NGO', websiteUrl: '' },
  { title: 'Theme Parks and Studios', websiteUrl: '' },
  { title: 'Telecom', websiteUrl: '' },
]

const education = [
  {
    degree: 'Masters in Computers',
    university: 'Pune University',
    period: '2011 – 2013',
  },
  {
    degree: 'Bachelor of Computers',
    university: 'Pune University',
    period: '2007 – 2010',
  },
]

const achievements = [
  'Delivered a custom design system within 2 months, enabling reusable component adoption and faster frontend delivery.',
  'Led a delivery team of 2 developers and 1 QA engineer across sprint planning, implementation, reviews, testing, and releases.',
  'Contributed to a life sciences configuration platform for 3 years, supporting multiple enterprise modules across configuration, user management, settings, equipment, and display workflows.',
  'Improved engineering quality through code reviews, reusable components, regression testing, unit testing, and SonarQube-driven quality practices.',
  'Enhanced frontend maintainability and performance using reusable architecture, micro-frontend concepts, lazy loading, code splitting, and responsive UI design.',
]

const awards = [
  {
    title: 'AI Prompt VIBE Winner',
    detail: 'Apr 2026 - Awarded by Brillio Technologies Pvt. Ltd.',
  },
  {
    title: 'High Impact Team',
    detail: 'Apr 2025 - Awarded by Veena Belavadi Nagaraju.',
  },
  {
    title: 'Best All Rounder Award',
    detail: 'Recognized for consistent ownership, team contribution, and delivery excellence.',
  },
  {
    title: 'Pat on Back (Multiple Times)',
    detail: 'Received multiple spot recognitions for going above and beyond in project execution.',
  },
  {
    title: 'BJS Appreciation at Persistent',
    detail:
      'Awarded by BJS for developing the application in quick time at Persistent.',
  },
]

function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm Mohit's resume assistant. Ask me anything about his background, skills, or experience!",
    },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, open])

  const respond = useCallback((query) => {
    const q = query.toLowerCase().trim()

    // ── Greetings / small talk ──────────────────────────────────────────
    if (/^(hi|hello|hey|howdy|good (morning|evening|afternoon)|sup|yo)\b/.test(q)) {
      return `Hello! I'm Mohit's resume assistant. You can ask me about his skills, experience, projects, education, awards, or how to contact him.`
    }
    if (/thank|thanks|cheers|appreciate/.test(q)) {
      return `You're welcome! Feel free to ask anything else about Mohit.`
    }
    if (/\b(help|what can you (do|answer)|topics|commands)\b/.test(q)) {
      return `I can answer questions about Mohit's: profile & summary, current role, skills & tech stack, career experience, projects & domains, key achievements, education, awards, and contact details. Just ask naturally!`
    }
    if (/\b(bye|goodbye|see you|cya)\b/.test(q)) {
      return `Goodbye! Feel free to come back if you have more questions about Mohit.`
    }

    // ── Identity ────────────────────────────────────────────────────────
    if (/who (is|are) (mohit|he|this)|tell me about (mohit|him|yourself)/.test(q) || /^(about mohit|about him)$/.test(q)) {
      return `${profile.name} is a ${profile.role} based in ${profile.location}. ${profile.summary}`
    }
    if (/\b(name)\b/.test(q)) {
      return `His full name is ${profile.name}.`
    }

    // ── Role / current position ─────────────────────────────────────────
    if (/current (role|job|position|title|work)|what (does he do|is his role|is his job|is his title|is he doing)/.test(q) ||
        /\b(designation|role|title|position)\b/.test(q)) {
      return `Mohit's current role is ${profile.role}.`
    }

    // ── Location ────────────────────────────────────────────────────────
    if (/where (is|does) (he|mohit)|location|city|based|live/.test(q)) {
      return `Mohit is based in ${profile.location}.`
    }

    // ── Contact ─────────────────────────────────────────────────────────
    if (/\b(email|e-mail|mail)\b/.test(q)) {
      return `Mohit's email address is ${profile.mail}.`
    }
    if (/\b(phone|mobile|number|call)\b/.test(q)) {
      return `Mohit's phone number is ${profile.phone}.`
    }
    if (/\b(contact|reach|connect|hire|get in touch)\b/.test(q)) {
      return `You can reach Mohit at:\n• Email: ${profile.mail}\n• Phone: ${profile.phone}\n• LinkedIn: linkedin.com/in/mohit-mathur-5586465b\n• GitHub: github.com/mohitidolcharm22-tech`
    }
    if (/linkedin/.test(q)) {
      return `Mohit's LinkedIn profile: https://www.linkedin.com/in/mohit-mathur-5586465b/`
    }
    if (/github/.test(q)) {
      return `Mohit's GitHub: https://github.com/mohitidolcharm22-tech`
    }
    if (/\b(resume|cv|download)\b/.test(q)) {
      return `You can download Mohit's resume directly from the Connect section of this page.`
    }

    // ── Summary / overview ──────────────────────────────────────────────
    if (/summary|overview|profile|introduce|tell me more|describe (him|mohit)|bio/.test(q)) {
      return profile.summary
    }

    // ── Years of experience ─────────────────────────────────────────────
    if (/how (many|long)|years (of experience|experience|in|working)|total experience/.test(q)) {
      return `Mohit has 13+ years of professional experience (Oct 2012 – present), with 7+ years focused on React and modern frontend engineering.`
    }

    // ── Availability / open to work ─────────────────────────────────────
    if (/available|open to work|looking for|job|opportunity|hire|hiring|freelance/.test(q)) {
      return `Mohit is open to Senior Lead Developer, Technical Lead, Senior Software Engineer, Engineering Lead, and Solution Architect opportunities.`
    }

    // ── Skills / tech stack ─────────────────────────────────────────────
    if (/\b(react)\b/.test(q)) {
      return `React is Mohit's primary frontend framework. He has 7+ years building scalable React applications, design systems, micro-frontends, and component libraries.`
    }
    if (/\b(typescript|ts)\b/.test(q)) {
      return `TypeScript is a core part of Mohit's stack. He uses it across all modern projects for type safety, better DX, and maintainability.`
    }
    if (/\b(node(\.js)?|backend|api)\b/.test(q)) {
      return `Mohit has contributed to backend APIs using Node.js and has hands-on experience with REST and GraphQL.`
    }
    if (/\b(docker)\b/.test(q)) {
      return `Mohit uses Docker for containerization and has worked with it in production environments on the BMS SIRIUS project.`
    }
    if (/\b(graphql)\b/.test(q)) {
      return `Mohit has used GraphQL extensively in the BMS SIRIUS project alongside REST APIs.`
    }
    if (/\b(storybook|design system|component library)\b/.test(q)) {
      return `Mohit built a full design system from scratch for BRAC Bank using React, TypeScript, and Storybook — completed in just 2.5 months. Design Systems is his #2 capability area at 94% confidence.`
    }
    if (/\b(next\.?js)\b/.test(q)) {
      return `Next.js is part of Mohit's toolbelt for full-stack React applications with server-side rendering.`
    }
    if (/\b(tailwind)\b/.test(q)) {
      return `Tailwind CSS is in Mohit's toolbelt for utility-first styling.`
    }
    if (/\b(jest|testing|unit test)\b/.test(q)) {
      return `Mohit writes unit tests using Jest and end-to-end tests using Cypress. Testing discipline is part of his delivery quality practice.`
    }
    if (/\b(cypress|e2e|end.to.end)\b/.test(q)) {
      return `Mohit uses Cypress for end-to-end testing as part of his quality-driven delivery approach.`
    }
    if (/\b(sonarqube|code quality|quality)\b/.test(q)) {
      return `Mohit enforces code quality using SonarQube-driven practices, code reviews, and regression testing standards.`
    }
    if (/\b(agile|scrum|sprint|scrum master)\b/.test(q)) {
      return `Mohit is SAFe Scrum Certified and has acted as Scrum Master. He leads sprint planning, demos, reviews, and retrospectives.`
    }
    if (/\b(ci\/cd|cicd|pipeline|devops)\b/.test(q)) {
      return `Mohit has worked with CI/CD pipelines, Changesets for package versioning, and monorepo architecture.`
    }
    if (/\b(monorepo|changeset|nx|turborepo)\b/.test(q)) {
      return `Mohit has experience with monorepo architecture and used Changesets for versioning the BRAC Bank design system packages.`
    }
    if (/skill|tech|stack|technology|technologies|framework|tool|language|proficien|expert/.test(q)) {
      const tools = toolbelt.map((t) => t.name).join(', ')
      const areas = skillRadar.map((s) => `${s.title} (${s.score}%)`).join(', ')
      return `Mohit's capability areas: ${areas}.\n\nFull toolbelt: ${tools}.`
    }

    // ── Career / experience ─────────────────────────────────────────────
    if (/brac|brac bank/.test(q)) {
      const m = milestones.find((x) => x.id === 'brac')
      return `At BRAC Bank (2026), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/sirius|bms/.test(q)) {
      const m = milestones.find((x) => x.id === 'sirius')
      return `At BMS SIRIUS (2022–2025), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/ciena/.test(q)) {
      const m = milestones.find((x) => x.id === 'ciena')
      return `At Ciena (2021), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/globant|parks|studio/.test(q)) {
      const m = milestones.find((x) => x.id === 'globant')
      return `At Globant / Parks and Studios (2019–2021), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/persistent/.test(q)) {
      const m = milestones.find((x) => x.id === 'persistent')
      return `At Persistent Systems (2017–2019), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/xento|entrata|hrms/.test(q)) {
      const m = milestones.find((x) => x.id === 'xento-entrata')
      return `At Xento / Entrata (2012–2017), Mohit served as ${m.role} for ${m.duration}. He ${m.highlights.join(' ')}`
    }
    if (/career|experience|work history|previous job|past (role|job|work)|milestone|employer/.test(q)) {
      const list = milestones.map((m) => `${m.domain} — ${m.role} (${m.period})`).join('\n• ')
      return `Mohit's career timeline:\n• ${list}`
    }
    if (/\b(latest|current|recent|last) (company|employer|job|project|role|work)\b/.test(q)) {
      const m = milestones[0]
      return `Mohit's most recent engagement is ${m.project} in the ${m.domain} space as ${m.role} (${m.period}).`
    }
    if (/first job|earliest|started (career|working)/.test(q)) {
      const m = milestones[milestones.length - 1]
      return `Mohit started his career at ${m.project} as ${m.role} from ${m.period}.`
    }

    // ── Projects / domains ──────────────────────────────────────────────
    if (/banking|finance|brac/.test(q)) {
      return `Mohit worked in the Banking & Finance domain at BRAC Bank, building a reusable design system from scratch.`
    }
    if (/life science|pharma|biomedical/.test(q)) {
      return `Mohit spent 3 years on a Life Science configuration platform (BMS SIRIUS), supporting enterprise modules across configuration, user management, equipment, and display workflows.`
    }
    if (/telecom|ciena|network|planner/.test(q)) {
      return `Mohit worked in the Telecom domain at Ciena on the Planner Plus product, implementing grid/canvas workflows and modernizing the login experience.`
    }
    if (/real estate|entrata|hrms|xento/.test(q)) {
      return `Mohit built a comprehensive HRMS platform for the Real Estate & HRMS domain, covering payroll, employee management, and leave tracking.`
    }
    if (/ngo|nonprofit|donation/.test(q)) {
      return `Mohit developed NGO management modules at Persistent Systems covering donations, events, and data integrity.`
    }
    if (/theme park|entertainment|globant/.test(q)) {
      return `Mohit worked on media-rich platform engineering for a Theme Parks & Studios client at Globant, optimizing performance and responsiveness.`
    }
    if (/project|domain|industry|sector|client/.test(q)) {
      const list = domains.map((d) => d.title).join(', ')
      return `Mohit has domain experience across: ${list}.`
    }

    // ── Achievements ────────────────────────────────────────────────────
    if (/achiev|accomplish|impact|highlight|deliver/.test(q)) {
      return `Key achievements:\n• ${achievements.join('\n• ')}`
    }

    // ── Awards ──────────────────────────────────────────────────────────
    if (/award|recogni|apprecation|honor|won|winner|prize/.test(q)) {
      const list = awards
        .filter((a) => a.title.toLowerCase() !== 'appreciation')
        .map((a) => `${a.title} — ${a.detail}`)
        .join('\n• ')
      return `Mohit's awards & recognitions:\n• ${list}`
    }

    // ── Education ───────────────────────────────────────────────────────
    if (/educat|degree|university|college|study|studies|qualif|masters?|bachelor|pune/.test(q)) {
      const list = education.map((e) => `${e.degree}, ${e.university} (${e.period})`).join('\n• ')
      return `Mohit's academic background:\n• ${list}`
    }

    // ── Leadership / soft skills ────────────────────────────────────────
    if (/lead|manag|mentor|team|people|coach/.test(q)) {
      return `Mohit led a delivery team of 2 developers and 1 QA engineer, handling sprint planning, code reviews, demos, and mentoring. He is SAFe Scrum Certified and experienced as Scrum Master.`
    }
    if (/communicat|present|stakeholder|demo/.test(q)) {
      return `Mohit regularly delivers end-of-sprint demos and stakeholder presentations, and is recognized for translating business goals into technical solutions.`
    }
    if (/certif|certified|safe|scrum/.test(q)) {
      return `Mohit holds a SAFe Scrum Certification and has acted as Scrum Master on multiple projects.`
    }

    // ── Micro-frontend / architecture ───────────────────────────────────
    if (/micro.?frontend|architecture|micro frontend/.test(q)) {
      return `Mohit has hands-on experience with micro-frontend architecture, implementing module federation patterns to improve frontend maintainability and team scalability.`
    }
    if (/perform|optim|lazy load|code split/.test(q)) {
      return `Mohit enhanced frontend performance using lazy loading, code splitting, reusable architecture, and responsive UI design — delivering measurable speed improvements.`
    }

    return 'This information is not available.'
  }, [])

  const send = () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setMessages((prev) => [...prev, { from: 'user', text: userMsg }])
    setInput('')
    setTimeout(() => {
      const reply = respond(userMsg)
      setMessages((prev) => [...prev, { from: 'bot', text: reply }])
    }, 320)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') send()
  }

  return (
    <div className="chatbot-wrap">
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span>Resume Assistant</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Mohit…"
              aria-label="Chat input"
            />
            <button type="button" onClick={send}>
              Send
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        className={`chatbot-trigger ${open ? 'active' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open resume chatbot"
      >
        💬
      </button>
    </div>
  )
}

function App() {
  const [activeId, setActiveId] = useState('brac')
  const [speakMode, setSpeakMode] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [mascotProgress, setMascotProgress] = useState(0)
  const [currentSection, setCurrentSection] = useState('top')
  const lastSpokenRef = useRef('')

  const activeMilestone = useMemo(
    () => milestones.find((item) => item.id === activeId) ?? milestones[0],
    [activeId],
  )

  const years = milestones.length
  const mascotLeft = 6 + mascotProgress * 0.88
  const visibleAwards = useMemo(
    () => awards.filter((award) => award.title.toLowerCase() !== 'appreciation'),
    [],
  )

  const getNarrationForSection = useCallback(
    (sectionId) => {
      if (sectionId === 'top') {
        return `Welcome to Mohit Mathur interactive resume website. ${profile.role}. ${profile.summary}`
      }

      if (sectionId === 'journey') {
        const highlightPreview = activeMilestone.highlights.slice(0, 2).join(' ')
        return `Career journey section. Current focus is ${activeMilestone.project}, as ${activeMilestone.role}. ${highlightPreview}`
      }

      if (sectionId === 'skills') {
        const skillsSummary = skillRadar
          .map((skill) => `${skill.title} at ${skill.score} percent confidence`)
          .join(', ')
        return `Capability map section. ${skillsSummary}.`
      }

      if (sectionId === 'projects') {
        const domainSummary = domains.map((domain) => domain.title).join(', ')
        return `Projects and domains section. Experience includes ${domainSummary}.`
      }

      if (sectionId === 'connect') {
        return `Contact section. You can reach Mohit by email at ${profile.mail}, by phone, or by downloading the resume.`
      }

      if (sectionId === 'achievements') {
        return `Key achievements section. ${achievements.join(' ')}`
      }

      if (sectionId === 'education') {
        const eduSummary = education
          .map((e) => `${e.degree} from ${e.university}, ${e.period}`)
          .join('. ')
        return `Education section. ${eduSummary}.`
      }

      if (sectionId === 'awards') {
        const awardSummary = visibleAwards.map((award) => award.title).join(', ')
        return `Awards section. Recognitions include ${awardSummary}.`
      }

      return ''
    },
    [activeMilestone, visibleAwards],
  )

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight || 1
      const progress = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100))
      setMascotProgress(progress)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['top', 'journey', 'skills', 'projects', 'connect']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visible.length) {
          return
        }

        const nextId = visible[0].target.id
        setCurrentSection(nextId)

        if (!speakMode || !window.speechSynthesis) {
          return
        }

        const text = getNarrationForSection(nextId)
        if (!text || lastSpokenRef.current === nextId) {
          return
        }

        lastSpokenRef.current = nextId
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 1
        utterance.pitch = 1
        window.speechSynthesis.speak(utterance)
      },
      {
        threshold: [0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [getNarrationForSection, speakMode])

  useEffect(() => {
    if (speakMode || !window.speechSynthesis) {
      return
    }
    window.speechSynthesis.cancel()
  }, [speakMode])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!speakMode || !window.speechSynthesis) {
      return
    }

    const text = getNarrationForSection(currentSection)
    if (!text) {
      return
    }

    lastSpokenRef.current = currentSection
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  }, [currentSection, getNarrationForSection, speakMode])

  return (
    <>
      <button
        type="button"
        className={`speak-toggle ${speakMode ? 'enabled' : ''}`}
        onClick={() => setSpeakMode((prev) => !prev)}
      >
        {speakMode ? 'Speak Mode: On' : 'Speak Mode: Off'}
      </button>

      <header className="site-nav">
        <div className="content-wrap nav-inner">
          <a href="#top" className="brand" onClick={() => setIsNavOpen(false)}>
            Home
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            aria-controls="site-nav-links"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {isNavOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
          <nav id="site-nav-links" className={isNavOpen ? 'open' : ''}>
            <a href="#journey" onClick={() => setIsNavOpen(false)}>
              Journey
            </a>
            <a href="#projects" onClick={() => setIsNavOpen(false)}>
              Projects
            </a>
            <a href="#skills" onClick={() => setIsNavOpen(false)}>
              Skills
            </a>
            <a href="#education" onClick={() => setIsNavOpen(false)}>
              Education
            </a>
            <a href="#achievements" onClick={() => setIsNavOpen(false)}>
              Achievements
            </a>
            <a href="#awards" onClick={() => setIsNavOpen(false)}>
              Awards
            </a>
            <a href="#connect" onClick={() => setIsNavOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-wrap" id="top">
          <motion.div
            className="halo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          />

          <div className="content-wrap hero-grid">
            <motion.div
              className="intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow">Interactive Career Deck</p>
              <h1>{profile.name}</h1>
              <h2>{profile.role}</h2>
              <p className="summary">{profile.summary}</p>
            </motion.div>

            <div className="hero-side">
              <motion.aside
                className="quick-stats"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.25 }}
              >
                <h3>Launch Metrics</h3>
                <div className="metric-grid">
                  <article>
                    <p>7+</p>
                    <span>Years in engineering</span>
                  </article>
                  <article>
                    <p>3+</p>
                    <span>Years in BMS SIRIUS</span>
                  </article>
                  <article>
                    <p>2.5</p>
                    <span>Months to ship design system</span>
                  </article>
                  <article>
                    <p>3</p>
                    <span>Cross-functional team members led</span>
                  </article>
                </div>
              </motion.aside>

              <motion.div
                className="hero-cta-panel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <div className="pill-row">
                  <span>{profile.location}</span>
                  <span>{years} flagship projects</span>
                  <span>Safe Scrum Certified</span>
                </div>
                <div className="hero-actions">
                  <a href="#journey">Explore Journey</a>
                  <a href="#connect">Reach Out</a>
                  <a href="/Resume_Mohit_mathur.docx" download="Resume_Mohit_mathur.docx">
                    Download Resume
                  </a>
                </div>

                <div className="social-links" aria-label="Professional links">
                  <a
                    href="https://www.linkedin.com/in/mohit-mathur-5586465b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin aria-hidden="true" /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/mohitidolcharm22-tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub aria-hidden="true" /> GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="journey" id="journey">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Career Timeline</p>
              <h3>Tap any milestone to inspect mission details</h3>
            </header>

            <div className="timeline-layout">
              <ul className="timeline-list">
                {milestones.map((item, index) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={item.id === activeId ? 'active' : ''}
                      onClick={() => setActiveId(item.id)}
                    >
                      <span>{item.period}</span>
                      <strong>{item.domain}</strong>
                      <small>{item.role}</small>
                      <em>
                        Step {index + 1} <FaArrowRight aria-hidden="true" />
                      </em>
                    </button>
                  </li>
                ))}
              </ul>

              <motion.article
                className="milestone-detail"
                key={activeMilestone.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="tag">{activeMilestone.vibe}</p>
                <h4>{activeMilestone.domain}</h4>
                <p className="meta">
                  {activeMilestone.role} | {activeMilestone.duration}
                </p>
                <ul>
                  {activeMilestone.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {activeMilestone.tech.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="skillscape" id="skills">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Capability Map</p>
              <h3>Where leadership meets hands-on code</h3>
            </header>

            <div className="skill-grid">
              {skillRadar.map((skill, index) => (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="skill-title">
                    <span>{skill.icon}</span>
                    <h4>{skill.title}</h4>
                  </div>
                  <p className="score">{skill.score}% confidence</p>
                  <div className="meter">
                    <motion.i
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                  <div className="chips">
                    {skill.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="toolbelt">
              {toolbelt.map((tool) => (
                <span key={tool.name}>
                  {tool.icon}
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Projects</p>
              <h3>Domain Experience Across Industries</h3>
            </header>

            <p className="projects-note">
              Add each website URL below when you want visitors to directly access
              your domain-specific work.
            </p>

            <div className="projects-grid">
              {domains.map((domain) => (
                <article key={domain.title}>
                  <h4>{domain.title}</h4>
                  {domain.websiteUrl ? (
                    <a href={domain.websiteUrl} target="_blank" rel="noreferrer">
                      Access Website
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="achievements" id="achievements">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Impact</p>
              <h3>Key Achievements</h3>
            </header>

            <ul className="achievements-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="education" id="education">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Education</p>
              <h3>Academic Background</h3>
            </header>

            <div className="education-grid">
              {education.map((item) => (
                <article key={item.degree}>
                  <h4>{item.degree}</h4>
                  <p className="edu-uni">{item.university}</p>
                  <p className="edu-period">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="awards" id="awards">
          <div className="content-wrap">
            <header>
              <p className="eyebrow">Awards</p>
              <h3>Recognition and Appreciation</h3>
            </header>

            <div className="awards-grid">
              {visibleAwards.map((award) => (
                <article key={award.title}>
                  <h4>{award.title}</h4>
                  <p>{award.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="connect" id="connect">
          <div className="content-wrap">
            <h3>Let's Build Something Impactful</h3>
            <p>
              Available for frontend leadership, design system architecture, and
              product modernization engagements.
            </p>
            <div>
              <a href={`mailto:${profile.mail}`}>{profile.mail}</a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
              <a href="/Resume_Mohit_mathur.docx" download="Resume_Mohit_mathur.docx">
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="mascot-layer" aria-hidden="true">
        <div className="walkway" />
        <div className="mascot-wrapper" style={{ left: `${mascotLeft}%` }}>
          <div className={`retro-mascot ${speakMode ? 'talking' : ''}`}>
            <span className="head" />
            <span className="body" />
            <span className="leg leg-1" />
            <span className="leg leg-2" />
          </div>
          <p className="speech-chip">Guide: {currentSection}</p>
        </div>
      </div>

      <ChatBot />
    </>
  )
}

export default App

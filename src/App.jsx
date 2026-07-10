import { useState, useEffect } from 'react'

const NAV = [
  { id: 'projects', label: 'projects' },
  { id: 'timeline', label: 'hackathons' },
  { id: 'stack', label: 'stack' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]

const PROJECTS = [
  {
    name: 'DeadZone',
    status: 'TOP 30 — CONFLUENCE 2.0',
    statusColor: 'text-signal border-signal/40',
    tag: null,
    desc: 'Crowdsourced telecom signal-intelligence PWA. Users log dead zones in real time, and the system builds live coverage heatmaps and reroutes around weak signal.',
    stack: ['Leaflet', 'FastAPI', 'Supabase / PostGIS', 'XGBoost', 'OpenRouteService'],
  },
  {
    name: 'KisanSetu',
    status: 'TOP 3 — BEST GIRLS TEAM',
    statusColor: 'text-alert border-alert/40',
    tag: null,
    desc: 'Fertilizer distribution tracking platform with three role-based dashboards — government, dealer, farmer — plus QR-verified handoffs and AI anomaly detection to catch diversion.',
    stack: ['React', 'FastAPI', 'Supabase', 'QR verification', 'Anomaly detection'],
  },
  {
    name: 'Nexora',
    status: 'TOP 2 — B.L.I.T.Z',
    statusColor: 'text-signal border-signal/40',
    tag: null,
    desc: 'Nexora is a focus analytics dashboard that calculates resilience score, escape time, and rabbit hole incidents from daily activity entries, then visualizes trends and streaks.',
    stack: ['React + Vite', 'Recharts', 'Supabase REST API'],

  },
    {
    name: 'AI Powered Digital Wallet',
    status: 'TOP 10 — INNOVGENIUS',
    statusColor: 'text-signal border-signal/40',
    tag: null ,
    desc: 'Send and receive money between users, Transaction statement and history, AI chatbot powered by OpenAI for financial queries, KYC verification with document upload, Multi-page dashboard interface, User onboarding flow.',
    stack: [ 'HTML', 'CSS', 'JavaScript', 'Backend: Python', 'FastAPI', 'AI Integration: OpenAI API (chatbot assistant)', 'Document Handling: KYC document upload', 'Database: PostgreSQL' ],
  },
    {
    name: 'FixLoop',
    status: 'BUILT',
    statusColor: 'text-dim border-line',
    tag: null,
    desc: 'Citizens report civic issues (potholes, garbage, broken infrastructure, etc.) with a photo,Gemini Vision reads the photo and classifies/verifies the issue automatically — no manual tagging needed,If a report sits unresolved past a threshold, it auto-escalates up the chain of authority rather than just sitting in a queue,For repeat-offender cases (same issue reported multiple times, ignored), it can auto-generate an RTI (Right to Information) draft — turning citizen frustration into an actual actionable legal request.',
    stack: ['Gemini Vision', 'PostGIS', 'Escalation engine'],
  },
  {
    name: 'Hospital Management System',
    status: 'Colloquium 2025',
    statusColor: 'text-dim border-line',
    tag: null ,
    desc: 'Hospital management platform with a shared backend architecture and role-based access — reused and refined across four separate hackathons.Doctor management and scheduling, Bed availability and allocation, Patient records and appointments, Prescriptions management, Emergency handling, Reports generation, AI assistant for hospital staff.Patient registration and login, Book and manage appointments, Ambulance booking, Bed booking and billing, Medical history form, Consent form management, City-wise hospital search, Prescription viewing, Profile management.',
    stack: ['Supabase (RLS)', 'React', 'FastAPI'],
  },
  
  {
    name: 'Smart Canteen System',
    status: 'BUILT',
    statusColor: 'text-dim border-line',
    tag: null,
    desc: 'Canteen ordering and queue-management system — lets students pre-order food and skip the physical line, with live order status tracking.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Backend: Python', 'FastAPI', 'Database: PostgreSQL'],
  },
  {
    name: 'Library System',
    status: 'BUILT ',
    statusColor: 'text-dim border-line',
    tag: null,
    desc: 'Library seat booking app with QR check-in and automated anti-hoarding re-verification timers, plus a librarian dashboard for oversight.',
    stack: ['QR check-in', 'Automated timers'],
  },


]

const TIMELINE = [
  { event: 'B.L.I.T.Z', org: 'IEEE SFIT', result: 'Top 2', detail: 'Role: Team Leader', tone: 'high' },
  { event: 'Hack The Matrix', org: 'IPEC Indraprastha Engineering College', result: 'Top 7 Overall . Top 3 Best Girl Team', detail: "Role: Team Leader", tone: 'high' },
  { event: 'InnovGenius Ideathon × TCS', org: "ACM TCET", result: 'Top 10', detail: "Role: Team Leader", tone: 'high' },
  { event: 'PromptWars x Global Prompt Challenge', org: "DEVENGERS", result: 'Top 13', detail: "Indiviual", tone: 'high' },
  { event: 'Confluence 2.0 - Beyond The Edge of Possibility', org: 'SRM Institute of Science and Technology', result: 'Top 30', detail: "Role: Team Leader", tone: 'high' },
  { event: 'Bharat Academix CodeQuest', org: 'Bharat Academix', result: 'Made it to the 2nd round', detail: "Role: Team Leader", tone: 'high' },
  { event: 'HackArena 2.0 – Online Zonals', org: 'Indraprastha Institute of Information Technology (IIIT), Delhi', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  { event: 'WebForge - A Smart Campus Webathon', org: 'Manipal University (MU), Jaipur', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  { event: 'AIRAVAT 3.0 – 24 Hour National AI-Hackathon', org: 'Sardar Patel Institute of Technology (SPIT), Mumbai', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  { event: 'Prakalp 4.0 - Sankraman', org: 'Fr. Conceicao Rodrigues College of Engineering (FRCRCE), Bandra', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  { event: 'Elevate 2026', org: 'Noida Institute of Engineering And Technology (NIET), Greater Noida', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  { event: 'Colloquium 2026 SFIT', org: 'SFIT', result: 'Participated', detail: "Role: Team Leader" , tone: 'mid' },
  { event: 'SIH 2025', org:'Ministry of Educations Innovation Cell (MIC)', result: 'Participated', detail: "Role: Team Leader", tone: 'mid' },
  
]

const STACK = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet'] },
  { group: 'Backend', items: ['FastAPI', 'Node.js', 'Express'] },
  { group: 'Data & ML', items: ['Supabase / PostGIS', 'XGBoost', 'YOLOv8', 'Google Earth Engine'] },
  { group: 'Tooling', items: ['Git', 'Vercel', 'Render'] },
]

const SEMESTERS = [
  { sem: 'Sem 1', cgpa: 8.83 },
  { sem: 'Sem 2', cgpa: 9.45 },
  { sem: 'Sem 3', cgpa: 9.18 },
  { sem: 'Sem 4', cgpa: 9.19 },
]

function useOnScreen() {
  const [visible, setVisible] = useState({})
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.id]: true }))
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return visible
}

function Reveal({ id, children, className = '' }) {
  const visible = useOnScreen()
  const shown = visible[id]
  return (
    <div
      id={id}
      data-reveal
      className={`${className} transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  )
}

function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs text-dim border border-line px-2 py-1">{n}</span>
      <span className="font-mono text-xs tracking-[0.3em] text-dim uppercase">{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-void text-ink font-sans selection:bg-signal selection:text-void">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-line bg-void/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono font-bold text-sm tracking-wide">
            <span className="text-signal">$</span> shravani<span className="cursor-blink text-signal">_</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide text-dim">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-signal transition-colors">
                ./{n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden font-mono text-xs border border-line px-3 py-1.5 text-dim"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-line bg-void px-6 py-4 flex flex-col gap-4 font-mono text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)} className="text-dim hover:text-signal">
                ./{n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 grid-scan grid-scan-fade opacity-60" />
        <div className="absolute left-0 right-0 top-16 h-full overflow-hidden pointer-events-none">
          <div className="scan-line absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-36 md:pb-40">
          <div className="font-mono text-xs text-dim mb-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-signal" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
             I love hackathons, coding, debate, and public speaking.
          </div>

          <h1 className="font-mono font-mono-tight font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Shravani Chaudhari
          </h1>
          <p className="text-lg md:text-xl text-dim max-w-2xl mb-3">
            Full-stack developer building geospatial and ML-backed systems —
            <span className="text-ink"> signal intelligence, civic tech, and agri-supply tracking.</span>
          </p>
          <p className="font-mono text-sm text-dim max-w-2xl mb-10">
            B.Tech IT, St. Francis Institute of Technology, Mumbai — Class of 2028.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="font-mono text-sm bg-signal text-void px-5 py-3 font-semibold hover:bg-scan transition-colors"
            >
              view_projects()
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border border-line px-5 py-3 hover:border-signal hover:text-signal transition-colors"
            >
              get_in_touch()
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal id="rev-projects-label">
            <SectionLabel n="01">Projects</SectionLabel>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <Reveal id={`proj-${i}`} key={p.name}>
                <div className="border border-line p-6 h-full flex flex-col card-hover bg-panel/40">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-mono font-bold text-xl">{p.name}</h3>
                    <span className={`font-mono text-[10px] tracking-wide border px-2 py-1 whitespace-nowrap ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-dim mb-4">{p.tag}</div>
                  <p className="text-sm text-ink/90 mb-5 leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[11px] text-dim border border-line px-2 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="border-t border-line bg-panel/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal id="rev-timeline-label">
            <SectionLabel n="02">Hackathon timeline</SectionLabel>
          </Reveal>

          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 md:left-2 top-2 bottom-2 w-px bg-line" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => {
                const dotClass =
                  t.tone === 'high' ? 'bg-signal border-signal' : t.tone === 'mid' ? 'bg-scan border-scan' : 'bg-void border-dim'
                const resultClass = t.tone === 'high' ? 'text-signal' : t.tone === 'mid' ? 'text-scan' : 'text-dim'
                return (
                  <Reveal id={`tl-${i}`} key={i}>
                    <div className="relative">
                      <div className={`absolute -left-6 md:-left-10 top-1.5 h-3 w-3 rounded-full border-2 ${dotClass}`} />
                      {t.org && <div className="font-mono text-xs text-dim mb-1">{t.org}</div>}
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="font-mono font-bold text-base md:text-lg">{t.event}</h4>
                        <span className={`font-mono text-xs ${resultClass}`}>{t.result}</span>
                      </div>
                      {t.detail && <p className="text-sm text-dim mt-1">{t.detail}</p>}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal id="rev-stack-label">
            <SectionLabel n="03">Stack</SectionLabel>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STACK.map((s, i) => (
              <Reveal id={`stack-${i}`} key={s.group}>
                <div className="border border-line p-5 h-full bg-panel/30">
                  <div className="font-mono text-xs text-scan tracking-widest uppercase mb-4">{s.group}</div>
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="font-mono text-sm text-ink/90">
                        <span className="text-dim mr-2">›</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-line bg-panel/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal id="rev-edu-label">
            <SectionLabel n="04">Education</SectionLabel>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal id="edu-sfit">
              <div className="border border-line p-6 bg-panel/30 h-full">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-mono font-bold text-lg">SFIT, Mumbai</h4>
                  <span className="font-mono text-xs text-dim">2024 — 2028</span>
                </div>
                <p className="font-mono text-xs text-dim mb-6">B.Tech, Information Technology</p>
                <div className="space-y-3">
                  {SEMESTERS.map((s) => (
                    <div key={s.sem} className="flex items-center gap-3">
                      <span className="font-mono text-xs text-dim w-14">{s.sem}</span>
                      <div className="flex-1 h-2 bg-line/60 relative overflow-hidden">
                        <div
                          className="h-full bg-signal"
                          style={{ width: `${(s.cgpa / 10) * 100}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-ink w-10 text-right">{s.cgpa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal id="edu-school">
              <div className="flex flex-col gap-6 h-full">
                <div className="border border-line p-6 bg-panel/30 flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="font-mono font-bold text-base">Narayana Junior College, Borivali</h4>
                  </div>
                  <p className="font-mono text-xs text-dim mb-4">HSC (12th)</p>
                  <div className="flex gap-6">
                    <div>
                      <div className="font-mono text-2xl font-bold text-signal">81%</div>
                      <div className="font-mono text-[11px] text-dim">HSC boards</div>
                    </div>
                    <div>
                      <div className="font-mono text-2xl font-bold text-scan">94%</div>
                      <div className="font-mono text-[11px] text-dim">MHT-CET percentile</div>
                    </div>
                  </div>
                </div>
                <div className="border border-line p-6 bg-panel/30 flex-1">
                  <h4 className="font-mono font-bold text-base mb-1">Ryan International School, Kandivali</h4>
                  <p className="font-mono text-xs text-dim mb-4">10th, CBSE</p>
                  <div className="font-mono text-2xl font-bold text-alert">93%</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal id="rev-contact-label">
            <SectionLabel n="05">Contact</SectionLabel>
          </Reveal>

          <Reveal id="contact-body">
            <div className="max-w-2xl">
              <p className="text-lg text-ink/90 mb-10">
                Open to internships, hackathon teams, and interesting problems in geospatial or ML systems.
                Reach out . 
              </p>
              <div className="flex flex-col gap-4 font-mono text-sm">
                <a
                  href="mailto:shravaniii2619@gmail.com"
                  className="flex items-center gap-4 border border-line px-5 py-4 hover:border-signal hover:text-signal transition-colors group"
                >
                  <span className="text-dim group-hover:text-signal">email</span>
                  <span className="flex-1">shravaniii2619@gmail.com</span>
                  <span className="text-dim">→</span>
                </a>
                <a
                  href="https://github.com/shravaniii2606"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-line px-5 py-4 hover:border-signal hover:text-signal transition-colors group"
                >
                  <span className="text-dim group-hover:text-signal">github</span>
                  <span className="flex-1">github.com/shravaniii2606</span>
                  <span className="text-dim">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shravani-chaudhari"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-line px-5 py-4 hover:border-signal hover:text-signal transition-colors group"
                >
                  <span className="text-dim group-hover:text-signal">linkedin</span>
                  <span className="flex-1">linkedin.com/in/shravani-chaudhari</span>
                  <span className="text-dim">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[11px] text-dim">
          <span>© {new Date().getFullYear()} Shravani Chaudhari</span>
         
        </div>
      </footer>
    </div>
  )
}

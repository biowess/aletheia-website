import { useEffect, useState } from 'react';
import { DocsSidebar } from '../components/layout/DocsSidebar';
import { DOCS_SECTIONS } from '../constants/docs';
import { CodeBlock, DataTable, ExternalLink, PageHeader, Badge } from '../components/ui';
import SEO from '../components/SEO';
import { track } from '../lib/analytics';

const TREE_CODE = `aletheia/
│
├── launcher.py                  # Unified bootstrapper - single entry point
│
├── backend/                     # Python / FastAPI server
│   ├── main.py                  # App factory, lifespan, CORS, route registration
│   ├── requirements.txt
│   ├── .env.example             # Environment variable template
│   └── app/
│       ├── core/
│       │   ├── config.py        # pydantic-settings Settings class
│       │   ├── database.py      # Async SQLAlchemy engine, session factory, init_db()
│       │   └── logging.py       # loguru configuration
│       ├── models/              # SQLAlchemy ORM models
│       │   ├── case.py          # Case (JSON columns for clinical sections)
│       │   ├── report_version.py
│       │   ├── follow_up_entry.py
│       │   ├── evidence_cache.py
│       │   └── app_settings.py
│       ├── schemas/             # Pydantic request/response schemas
│       ├── api/
│       │   ├── router.py        # API v1 router aggregator
│       │   └── routes/          # cases, follow_ups, reasoning, export, admin
│       ├── services/            # Business logic layer
│       │   ├── case_service.py
│       │   ├── reasoning_service.py   # 10-stage orchestration facade
│       │   ├── pubmed_client.py       # NCBI E-utilities async client
│       │   ├── evidence_cache_service.py
│       │   ├── pdf_export_service.py
│       │   └── pptx_export_service.py
│       └── reasoning/
│           ├── prompts.py       # Structured prompt assembly
│           ├── parser.py        # JSON extraction + json-repair
│           ├── preprocessing.py # Deterministic lab/exam heuristics
│           ├── certainty.py     # Certainty policy enforcement
│           ├── grounding.py     # Gemini search grounding service
│           └── providers/       # AI provider abstraction (GeminiProvider)
│
└── frontend/                    # React 19 / TypeScript SPA
    └── src/
        ├── App.tsx              # React Router shell
        ├── pages/               # CasebookPage, NewCasePage, CaseWorkspacePage, SettingsPage
        ├── components/
        │   ├── layout/          # AppShell, WorkspaceSplitPane, ClinicalInputPanel
        │   ├── report/          # ReportRenderer, ReportVersionList, ConfidenceBar, etc.
        │   ├── timeline/        # TimelinePanel, TimelineEntry, AddFollowUpModal
        │   ├── forms/           # AnamnesisForm, PhysicalExamForm, LaboratoryForm, MorphologicalForm
        │   ├── casebook/        # CaseCard, EmptyState
        │   └── ui/              # Spinner, Toast, SplashScreen, ErrorBanner, LoadingSkeleton
        ├── stores/              # Zustand + Immer: caseStore, reportStore, settingsStore, uiStore
        ├── api/                 # Typed fetch wrappers: cases, reasoning, export, followUps, settings
        └── types/               # TypeScript interfaces for all domain entities`;

const FLOW_CODE = `     Browser (React SPA)
       → Zustand Store
         → API Client (/api/v1)
           → Vite Dev Proxy
             → FastAPI Router
               → Service Layer
                 → SQLAlchemy AsyncSession
                 → Google Gemini API
                 → NCBI PubMed E-utilities`;

const TEST_CODE = `# Activate the virtual environment first
source backend/.venv/bin/activate   # macOS / Linux
# or: backend\\.venv\\Scripts\\activate   # Windows

# Install dev dependencies
pip install -r backend/requirements-dev.txt

# Run all tests
cd backend && pytest

# Run a specific test file
pytest tests/test_pubmed_client.py -v

# Run with coverage report
pytest --cov=app --cov-report=html`;

const FRONTEND_BUILD = `cd frontend
npm run build
# Output: frontend/dist/

# Preview the production build locally
npm run preview`;

const BACKEND_BUILD = `cd backend
source .venv/bin/activate
pip install gunicorn

gunicorn main:app \\
  -k uvicorn.workers.UvicornWorker \\
  --workers 4 \\
  --bind 0.0.0.0:8000 \\
  --access-logfile - \\
  --error-logfile -`;

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = DOCS_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(DOCS_SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(DOCS_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      track('Docs Section View', { section: activeSection });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-clinical-bg flex flex-col font-sans">
      <SEO 
        title="Documentation — Aletheia"
        description="Technical documentation for Aletheia: architecture, API reference, technology stack, design system, and production build instructions."
        canonical="https://biowess.github.io/aletheia-website/docs"
      />
      
      <PageHeader 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Documentation' }
        ]}
        title="Documentation"
        className="bg-white"
      />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <DocsSidebar activeSection={activeSection} />
        
        <div className="flex-1 min-w-0 pb-24 prose prose-clinical max-w-none prose-a:text-[#244B73]">
          
          {/* Overview */}
          <section id="overview" className="scroll-mt-24 mb-16">
            <div className="mb-8">
              <Badge variant="mono">v0.1 — Source Available</Badge>
            </div>
            <p className="text-[16px] leading-[1.7] text-clinical-slate mb-6">
              Students routinely juggle heterogeneous data, simulated patient history, physical examination findings, laboratory panels, haematological morphology, and imaging results. This fragmentation introduces risk: relevant findings get overlooked, evidence retrieval is inconsistent, and diagnostic reasoning is not reproducible across simulated encounters.
            </p>
            <p className="text-[16px] leading-[1.7] text-clinical-slate">
              <strong>Aletheia: Educational Workstation</strong> consolidates all simulated clinical inputs into a single structured workspace and delegates synthesis to a purpose-built AI reasoning pipeline powered by <strong>Google Gemini</strong>. It returns a fully structured, versioned, and citation-verified differential diagnosis report within a single session, no cloud account required, no data leaving your machine.
            </p>
            <p className="text-[16px] leading-[1.7] text-clinical-slate mt-6">
              Designed strictly for medical students, research fellows, and academic departments evaluating AI-assisted diagnostic reasoning in an educational setting. Available as a standalone desktop application or deployed locally as a web application.
            </p>
          </section>

          {/* Architecture */}
          <section id="architecture" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Architecture</h2>
            <div className="mb-6 not-prose">
              <CodeBlock language="bash" code={TREE_CODE} />
            </div>
            <p>
              Aletheia follows a monorepo structure separating the Python/FastAPI backend from the React/TypeScript frontend. The <code>launcher.py</code> acts as the unified entry point, bootstrapping the environment, managing dependencies, and orchestrating the parallel start of both the ASGI server and the Vite development server.
            </p>
          </section>

          {/* Request Flow */}
          <section id="request-flow" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Request Flow</h2>
            <div className="mb-6 not-prose">
              <CodeBlock language="text" code={FLOW_CODE} />
            </div>
          </section>

          {/* Technology Stack */}
          <section id="technology-stack" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Technology Stack</h2>
            <div className="mb-6 not-prose">
              <DataTable 
                headers={['Layer', 'Technology', 'Role']}
                rows={[
                  ['Bootstrapper', <span className="font-mono text-[#162C41] text-[13px]">Python 3.11+ (launcher.py)</span>, 'Environment validation, venv, npm install, port resolution, process supervision'],
                  ['Web Framework', <span className="font-mono text-[#162C41] text-[13px]">FastAPI ≥ 0.111</span>, 'Async ASGI framework, OpenAPI generation, Pydantic integration'],
                  ['ASGI Server', <span className="font-mono text-[#162C41] text-[13px]">Uvicorn[standard] ≥ 0.29</span>, 'Production ASGI server with uvloop and httptools'],
                  ['ORM', <span className="font-mono text-[#162C41] text-[13px]">SQLAlchemy 2.0 (async)</span>, 'AsyncSession, Mapped columns, async query execution'],
                  ['DB Driver', <span className="font-mono text-[#162C41] text-[13px]">aiosqlite ≥ 0.20</span>, 'Non-blocking asyncio-compatible SQLite driver'],
                  ['Data Validation', <span className="font-mono text-[#162C41] text-[13px]">Pydantic v2</span>, 'All request/response bodies, DTOs, settings'],
                  ['Configuration', <span className="font-mono text-[#162C41] text-[13px]">pydantic-settings ≥ 2.0</span>, 'Type-safe .env management'],
                  ['LLM Provider', <span className="font-mono text-[#162C41] text-[13px]">google-genai ≥ 1.0</span>, 'Gemini inference + search grounding'],
                  ['HTTP Client', <span className="font-mono text-[#162C41] text-[13px]">httpx ≥ 0.27</span>, 'Async client for PubMed E-utilities'],
                  ['Retry Logic', <span className="font-mono text-[#162C41] text-[13px]">tenacity ≥ 8.0</span>, 'Exponential back-off for API calls'],
                  ['PDF Export', <span className="font-mono text-[#162C41] text-[13px]">ReportLab ≥ 4.0</span>, 'Structured clinical PDF with custom typography'],
                  ['PPTX Export', <span className="font-mono text-[#162C41] text-[13px]">python-pptx ≥ 0.6.23</span>, 'PowerPoint report export'],
                  ['Logging', <span className="font-mono text-[#162C41] text-[13px]">loguru ≥ 0.7</span>, 'Structured logging with rotation and gzip compression'],
                  ['JSON Repair', <span className="font-mono text-[#162C41] text-[13px]">json-repair ≥ 0.30</span>, 'Fault-tolerant LLM JSON output recovery'],
                  ['Frontend Framework', <span className="font-mono text-[#162C41] text-[13px]">React 19 + TypeScript</span>, 'SPA'],
                  ['Build Tool', <span className="font-mono text-[#162C41] text-[13px]">Vite</span>, 'Dev server with API proxy, production build'],
                  ['Styling', <span className="font-mono text-[#162C41] text-[13px]">Tailwind CSS</span>, 'Semantic design token system (clinical.* namespaces)'],
                  ['State Management', <span className="font-mono text-[#162C41] text-[13px]">Zustand + Immer</span>, 'Global domain state with mutation-style updates'],
                  ['Animation', <span className="font-mono text-[#162C41] text-[13px]">Framer Motion 12</span>, 'Splash screen, panel reveals, physics-based transitions'],
                  ['UI Font', <span className="font-mono text-[#162C41] text-[13px]">IBM Plex Sans</span>, 'Clinical, serious tone'],
                  ['Report Font', <span className="font-mono text-[#162C41] text-[13px]">EB Garamond</span>, 'Editorial, scholarly report rendering'],
                ]}
              />
            </div>
          </section>

          {/* API Reference */}
          <section id="api-reference" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">API Reference</h2>
            <div className="mb-4 not-prose">
              <DataTable 
                headers={[]}
                rows={[
                  [<span className="font-semibold">Swagger UI</span>, <ExternalLink href="http://localhost:8000/docs">http://localhost:8000/docs</ExternalLink>],
                  [<span className="font-semibold">ReDoc</span>, <ExternalLink href="http://localhost:8000/redoc">http://localhost:8000/redoc</ExternalLink>],
                  [<span className="font-semibold">OpenAPI JSON</span>, <ExternalLink href="http://localhost:8000/openapi.json">http://localhost:8000/openapi.json</ExternalLink>],
                  [<span className="font-semibold">Health Check</span>, <span className="font-mono text-[#244B73]">http://localhost:8000/api/health</span>],
                ]}
              />
            </div>
            <p className="text-sm italic text-clinical-slate">
              Note: API documentation is auto-generated by FastAPI at runtime. Run the backend to access live docs.
            </p>
          </section>

          {/* Design System */}
          <section id="design-system" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Design System</h2>
            <p className="mb-6">
              Aletheia uses a canonical brand palette designed for educational precision and focus. The design philosophy: <strong>academic, elegant, precise, restrained.</strong> No rounded pills, no neon gradients, no startup aesthetic. Every component is designed to feel like a precision instrument.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Color Palette</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 not-prose">
              {[
                { token: '--aletheia-navy', hex: '#162C41', usage: 'Primary text, headings, interactive states' },
                { token: '--aletheia-slate', hex: '#4F606F', usage: 'Secondary text, subheadings' },
                { token: '--bg-primary', hex: '#F5F8FB', usage: 'Page background' },
                { token: '--border-default', hex: '#D7E2EC', usage: 'Default borders and dividers' },
                { token: '--state-stable', hex: '#3E6B61', usage: 'Stable diagnostic state indicator' },
                { token: '--state-evolving', hex: '#C58A2B', usage: 'Evolving diagnostic state indicator' },
                { token: '--confidence-high', hex: '#244B73', usage: 'High-confidence differential display' },
              ].map((color, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-clinical-border rounded bg-white">
                  <div className="w-5 h-5 rounded-sm shrink-0 shadow-sm border border-black/10 mt-1" style={{ backgroundColor: color.hex }} />
                  <div>
                    <div className="font-mono text-[13px] font-medium text-clinical-navy">{color.token}</div>
                    <div className="font-mono text-[12px] text-clinical-slate mb-1">{color.hex}</div>
                    <div className="text-[13px] text-clinical-slate">{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">Typography Scale</h3>
            <div className="mb-8 not-prose">
              <DataTable 
                headers={['Role', 'Family', 'Sample']}
                rows={[
                  ['UI Default', <span className="font-mono text-[#162C41] text-[13px]">IBM Plex Sans</span>, <span className="font-sans text-[#162C41]">Clinical precision workspace</span>],
                  ['Code & Tokens', <span className="font-mono text-[#162C41] text-[13px]">IBM Plex Mono</span>, <span className="font-mono text-[#162C41]">const state = active;</span>],
                  ['Report Render', <span className="font-mono text-[#162C41] text-[13px]">EB Garamond</span>, <span className="font-serif text-[#162C41] text-[16px]">Evaluation of the patient reveals...</span>],
                ]}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-clinical-navy">Border Radius</h3>
                <ul className="list-none pl-0 m-0 space-y-2">
                  <li className="flex items-center justify-between p-3 bg-white border border-clinical-border rounded">
                    <span className="text-sm text-clinical-slate">Default</span>
                    <span className="text-[13px] font-mono text-clinical-navy">0.25rem (4px)</span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-white border border-clinical-border rounded-sm">
                    <span className="text-sm text-clinical-slate">Small</span>
                    <span className="text-[13px] font-mono text-clinical-navy">0.125rem (2px)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-clinical-navy">Motion Tokens</h3>
                <ul className="list-none pl-0 m-0 space-y-2">
                  <li className="flex items-center justify-between p-3 bg-white border border-clinical-border rounded">
                    <span className="text-sm text-clinical-slate">Hover / Fast</span>
                    <span className="text-[13px] font-mono text-clinical-navy">150ms ease-out</span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-white border border-clinical-border rounded">
                    <span className="text-sm text-clinical-slate">Panel Transition</span>
                    <span className="text-[13px] font-mono text-clinical-navy">300ms cubic-bezier</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Running Tests */}
          <section id="running-tests" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Running Tests</h2>
            <div className="mb-6 not-prose">
              <CodeBlock language="bash" code={TEST_CODE} />
            </div>
          </section>

          {/* Production Build */}
          <section id="production-build" className="scroll-mt-24 mb-16">
            <h2 className="text-[20px] sm:text-2xl font-semibold mb-6">Production Build</h2>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="mb-6 not-prose">
              <CodeBlock language="bash" code={FRONTEND_BUILD} />
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Backend (with Gunicorn)</h3>
            <div className="mb-6 not-prose">
              <CodeBlock language="bash" code={BACKEND_BUILD} />
            </div>
            <div className="bg-clinical-warning-light border border-[#FDE047] text-clinical-warning px-4 py-3 rounded not-prose">
              <span className="font-semibold">⚠️ Warning:</span> Remove the <code>--reload</code> flag for production. Use Gunicorn for process supervision instead.
            </div>
          </section>

        </div>
      </main>

    </div>
  );
}

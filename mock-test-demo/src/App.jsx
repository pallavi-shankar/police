import React, { useEffect, useMemo, useState } from "react";
import image2 from "./assets/image2.png";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Code2,
  Database,
  FileText,
  Filter,
  GraduationCap,
  Landmark,
  LibraryBig,
  Menu,
  Monitor,
  Network,
  Play,
  Search,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  UserRound,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const categories = [
  {
    id: "technology",
    name: "Technology",
    description:
      "Programming, computer science, databases, networking and modern technology.",
    icon: Code2,
    tests: 84,
    learners: "18.4K",
    children: [
      {
        id: "it",
        name: "Information Technology",
        description:
          "Explore core IT subjects and professional technologies.",
        icon: Monitor,
        children: [
          {
            id: "programming",
            name: "Programming Languages",
            description:
              "Practice programming fundamentals and language-specific concepts.",
            icon: Code2,
            children: [
              {
                id: "cpp",
                name: "C++ Programming",
                description:
                  "C++ fundamentals, OOP, pointers, memory management and STL.",
                icon: Code2,
              },
              {
                id: "java",
                name: "Java Programming",
                description:
                  "Core Java, OOP, collections, exceptions and multithreading.",
                icon: Code2,
              },
              {
                id: "python",
                name: "Python Programming",
                description:
                  "Python syntax, data structures, functions and problem solving.",
                icon: Code2,
              },
            ],
          },
          {
            id: "database",
            name: "Database & SQL",
            description: "Database fundamentals, DBMS concepts and SQL.",
            icon: Database,
            children: [
              {
                id: "sql",
                name: "SQL",
                description:
                  "Queries, joins, functions and relational database concepts.",
                icon: Database,
              },
              {
                id: "dbms",
                name: "DBMS",
                description:
                  "Normalization, transactions and database architecture.",
                icon: Database,
              },
            ],
          },
          {
            id: "networking",
            name: "Computer Networks",
            description:
              "Networking fundamentals, protocols, routing and security.",
            icon: Network,
            children: [
              {
                id: "network-fundamentals",
                name: "Networking Fundamentals",
                description:
                  "OSI, TCP/IP, routing, switching and network protocols.",
                icon: Network,
              },
            ],
          },
        ],
      },
      {
        id: "computer-science",
        name: "Computer Science",
        description:
          "Algorithms, operating systems and computer fundamentals.",
        icon: Brain,
        children: [
          {
            id: "dsa",
            name: "Data Structures & Algorithms",
            description:
              "Arrays, linked lists, trees, graphs and algorithms.",
            icon: Brain,
          },
          {
            id: "os",
            name: "Operating Systems",
            description:
              "Processes, threads, memory, scheduling and file systems.",
            icon: Monitor,
          },
        ],
      },
    ],
  },

  {
    id: "government",
    name: "Government Exams",
    description:
      "Structured preparation for major government recruitment examinations.",
    icon: Landmark,
    tests: 126,
    learners: "31.2K",
    children: [
      {
        id: "police",
        name: "Police Recruitment",
        description:
          "Prepare for Police Constable and Sub Inspector recruitment.",
        icon: ShieldCheck,
        children: [
          {
            id: "constable",
            name: "Police Constable",
            description:
              "General knowledge, reasoning, aptitude and recruitment preparation.",
            icon: ShieldCheck,
          },
          {
            id: "si",
            name: "Sub Inspector",
            description:
              "Advanced preparation for Sub Inspector examinations.",
            icon: ShieldCheck,
          },
        ],
      },
      {
        id: "civil",
        name: "Civil Services",
        description:
          "Civil services and public administration examinations.",
        icon: Landmark,
        children: [
          {
            id: "upsc",
            name: "UPSC",
            description:
              "General studies and preliminary examination preparation.",
            icon: Landmark,
          },
          {
            id: "statepsc",
            name: "State PSC",
            description:
              "Preparation for State Public Service Commission examinations.",
            icon: Landmark,
          },
        ],
      },
    ],
  },

  {
    id: "banking",
    name: "Banking & Finance",
    description:
      "Quantitative aptitude, reasoning, English and banking awareness.",
    icon: BarChart3,
    tests: 72,
    learners: "14.7K",
    children: [
      {
        id: "bank-exams",
        name: "Bank Recruitment Exams",
        description:
          "Preparation paths for leading banking examinations.",
        icon: BarChart3,
        children: [
          {
            id: "ibps",
            name: "IBPS",
            description:
              "IBPS PO and Clerk practice examinations.",
            icon: BarChart3,
          },
          {
            id: "sbi",
            name: "SBI",
            description:
              "SBI PO and Clerk preparation.",
            icon: BarChart3,
          },
        ],
      },
    ],
  },

  {
    id: "engineering",
    name: "Engineering",
    description:
      "Technical and entrance examination preparation for engineering students.",
    icon: GraduationCap,
    tests: 98,
    learners: "22.1K",
    children: [
      {
        id: "entrance",
        name: "Engineering Entrance",
        description:
          "Competitive engineering entrance examinations.",
        icon: GraduationCap,
        children: [
          {
            id: "jee",
            name: "JEE",
            description:
              "Physics, chemistry and mathematics mock examinations.",
            icon: GraduationCap,
          },
          {
            id: "gate",
            name: "GATE",
            description:
              "Technical GATE preparation and practice tests.",
            icon: GraduationCap,
          },
        ],
      },
    ],
  },
];

const questions = [
  {
    question:
      "Which feature of C++ allows multiple functions to have the same name but different parameters?",
    options: [
      "Encapsulation",
      "Function Overloading",
      "Inheritance",
      "Abstraction",
    ],
    answer: 1,
  },
  {
    question:
      "Which operator is used to access members through a pointer in C++?",
    options: [".", "::", "->", "&"],
    answer: 2,
  },
  {
    question:
      "Which of the following is NOT an object-oriented programming principle?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Compilation",
      "Polymorphism",
    ],
    answer: 2,
  },
  {
    question:
      "What is the default access modifier for members of a C++ class?",
    options: ["Public", "Private", "Protected", "Internal"],
    answer: 1,
  },
  {
    question:
      "Which keyword dynamically allocates memory in C++?",
    options: ["malloc", "create", "new", "alloc"],
    answer: 2,
  },
  {
    question:
      "Which STL container follows Last-In-First-Out behavior?",
    options: ["Queue", "Vector", "Stack", "Map"],
    answer: 2,
  },
  {
    question: "What does STL stand for?",
    options: [
      "Standard Type Library",
      "Standard Template Library",
      "System Template Language",
      "Structured Type Library",
    ],
    answer: 1,
  },
  {
    question:
      "Which concept allows one class to acquire properties of another class?",
    options: [
      "Inheritance",
      "Abstraction",
      "Overloading",
      "Compilation",
    ],
    answer: 0,
  },
  {
    question:
      "Which header is commonly used for input and output operations in C++?",
    options: ["<stdio.h>", "<iostream>", "<input>", "<stream.h>"],
    answer: 1,
  },
  {
    question:
      "Which keyword prevents a variable from being modified after initialization?",
    options: ["static", "final", "const", "fixed"],
    answer: 2,
  },
];

const studyMaterials = [
  {
    title: "Fundamentals & Core Concepts",
    type: "Study Guide",
    duration: "18 min",
    description:
      "Review the important fundamentals and core concepts required for this examination.",
  },
  {
    title: "Important Topics",
    type: "Chapter",
    duration: "24 min",
    description:
      "Understand important concepts and frequently tested examination topics.",
  },
  {
    title: "Quick Revision Notes",
    type: "Revision",
    duration: "15 min",
    description:
      "Revise important definitions, formulas, concepts and key points.",
  },
  {
    title: "Practice Questions",
    type: "Practice",
    duration: "20 min",
    description:
      "Practice selected questions before attempting the full mock examination.",
  },
];

/* =========================================================
   APP
========================================================= */

export default function App() {
  const [page, setPage] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [path, setPath] = useState([]);
  const [currentItems, setCurrentItems] = useState(categories);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const goHome = () => {
    setPage("home");
    setPath([]);
    setCurrentItems(categories);
    setSelectedTopic(null);
    setMobileMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const explore = () => {
    setPage("explorer");
    setPath([]);
    setCurrentItems(categories);
    setSearch("");
    setMobileMenu(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectItem = (item) => {
    if (item.children?.length) {
      setPath((old) => [...old, item]);
      setCurrentItems(item.children);
      setSearch("");
      return;
    }

    setSelectedTopic(item);
    setPage("details");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigatePath = (index) => {
    if (index === -1) {
      setPath([]);
      setCurrentItems(categories);
      return;
    }

    const newPath = path.slice(0, index + 1);

    setPath(newPath);
    setCurrentItems(newPath[index]?.children || []);
  };

  const filteredItems = useMemo(() => {
    const value = search.toLowerCase().trim();

    return currentItems.filter((item) => {
      return (
        item.name.toLowerCase().includes(value) ||
        item.description?.toLowerCase().includes(value)
      );
    });
  }, [currentItems, search, filter]);

  if (page === "exam") {
    return (
      <Exam
        topic={selectedTopic}
        onBack={() => {
          setPage("details");
          window.scrollTo({ top: 0 });
        }}
        onComplete={() => {
          setPage("result");
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  if (page === "result") {
    return (
      <Result
        topic={selectedTopic}
        onHome={goHome}
        onExplore={explore}
        onRetry={() => {
          setPage("exam");
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-slate-900">
      <Navbar
        goHome={goHome}
        explore={explore}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      {page === "home" && <Home explore={explore} />}

      {page === "explorer" && (
        <Explorer
          items={filteredItems}
          path={path}
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          selectItem={selectItem}
          navigatePath={navigatePath}
          goBack={() => {
            if (!path.length) {
              goHome();
            } else {
              navigatePath(path.length - 2);
            }
          }}
        />
      )}

      {page === "details" && (
        <TestDetails
          topic={selectedTopic}
          goBack={explore}
          startTest={() => {
            setPage("exam");
            window.scrollTo({ top: 0 });
          }}
        />
      )}
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar({
  goHome,
  explore,
  mobileMenu,
  setMobileMenu,
}) {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">

          <button
            onClick={goHome}
            className="flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#123C73] text-white shadow-lg">
              <Brain size={23} />

              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#D5A021]" />
            </div>

            <div className="text-left">
              <div className="text-xl font-black tracking-tight text-[#0B2A52]">
                Exam
                <span className="text-[#D5A021]">
                  Sphere
                </span>
              </div>

              <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-slate-400">
                Learn • Practice • Excel
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <NavButton onClick={goHome}>
              Home
            </NavButton>

            <NavButton onClick={explore}>
              Mock Tests
            </NavButton>

            <NavButton onClick={explore}>
              Study Material
            </NavButton>

            <NavButton onClick={explore}>
              Categories
            </NavButton>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="flex h-11 items-center gap-2 rounded-xl px-4 text-sm font-bold text-[#123C73] transition hover:bg-blue-50">
              <UserRound size={17} />
              Student Login
            </button>

            <button
              onClick={() =>
                alert(
                  "Admin dashboard will be connected with Admin.jsx"
                )
              }
              className="flex h-11 items-center gap-2 rounded-xl bg-[#D5A021] px-5 text-sm font-black text-white shadow-lg transition hover:bg-[#BD8916]"
            >
              Admin
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-xl p-2 text-[#123C73] md:hidden"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {mobileMenu && (
        <div className="fixed inset-x-0 top-[76px] z-40 border-b bg-white p-5 shadow-xl md:hidden">
          <MobileButton
            text="Home"
            onClick={goHome}
          />

          <MobileButton
            text="Mock Tests"
            onClick={explore}
          />

          <MobileButton
            text="Study Material"
            onClick={explore}
          />

          <MobileButton
            text="Categories"
            onClick={explore}
          />

          <MobileButton
            text="Admin"
            gold
            onClick={() =>
              alert("Admin dashboard will be connected next")
            }
          />
        </div>
      )}
    </>
  );
}

function NavButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-bold text-slate-600 transition hover:text-[#123C73]"
    >
      {children}
    </button>
  );
}

function MobileButton({ text, onClick, gold }) {
  return (
    <button
      onClick={onClick}
      className={`mb-2 w-full rounded-xl px-4 py-3 text-left text-sm font-bold ${
        gold
          ? "bg-[#D5A021] text-white"
          : "text-slate-700 hover:bg-slate-50"
      }`}
    >
      {text}
    </button>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home({ explore }) {
  return (
    <>
      {/* HERO */}

      <section
        className="relative min-h-[700px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        {/* subtle overall overlay */}
        <div className="absolute inset-0 bg-[#071E3D]/10" />

        {/* strong left gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182F]/95 via-[#08294F]/75 to-transparent" />

        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06182F]/50 to-transparent" />

        {/* gold glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D5A021]/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 lg:px-8">

          <div className="max-w-[690px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7C45D]/35 bg-[#071E3D]/40 px-4 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#F5D36B] backdrop-blur-md">
              <GraduationCap size={16} />
              Your journey to success starts here
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-[72px]">
              Prepare smarter.

              <span className="block text-[#F0C453]">
                Perform better.
              </span>

              <span className="block">
                Achieve more.
              </span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base font-medium leading-8 text-blue-100 sm:text-lg">
              A complete learning and mock examination
              platform designed to help you prepare,
              practice and measure your progress with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <button
                onClick={explore}
                className="group flex h-14 items-center gap-3 rounded-xl bg-[#D5A021] px-7 text-sm font-black text-white shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:bg-[#E2AE2A]"
              >
                Explore Mock Tests

                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={explore}
                className="flex h-14 items-center gap-3 rounded-xl border border-white/35 bg-[#071E3D]/30 px-7 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/15"
              >
                <BookOpen size={19} />
                Explore Study Material
              </button>
            </div>

            <div className="mt-12 grid max-w-[650px] grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">

              <HeroStat
                value="10K+"
                label="Practice Questions"
              />

              <HeroStat
                value="350+"
                label="Mock Tests"
              />

              <HeroStat
                value="50K+"
                label="Learners"
              />

              <HeroStat
                value="25+"
                label="Categories"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">

          <Trust
            icon={BookOpen}
            number="Structured"
            label="Study Material"
          />

          <Trust
            icon={FileText}
            number="350+"
            label="Mock Tests"
          />

          <Trust
            icon={Clock3}
            number="Anytime"
            label="Practice Access"
          />

          <Trust
            icon={BarChart3}
            number="Detailed"
            label="Performance Analysis"
          />
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <SectionHeading
          eyebrow="Explore preparation"
          title="One platform. Multiple possibilities."
          description="Explore structured learning paths across different examinations, subjects and professional skills."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => (
            <HomeCategory
              key={category.id}
              category={category}
              index={index}
              explore={explore}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={explore}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#123C73] px-7 py-3.5 text-sm font-black text-[#123C73] transition hover:bg-[#123C73] hover:text-white"
          >
            View All Categories
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="border-y border-slate-200 bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <SectionHeading
            eyebrow="Simple & effective"
            title="A smarter way to prepare."
            description="Everything is organized to take you from learning to examination readiness."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <Process
              number="01"
              icon={Target}
              title="Choose Your Goal"
              text="Select the examination, category or subject you want to prepare for."
            />

            <Process
              number="02"
              icon={LibraryBig}
              title="Study"
              text="Learn using organized study material before attempting the test."
            />

            <Process
              number="03"
              icon={Timer}
              title="Practice"
              text="Attempt realistic mock examinations with timers and question navigation."
            />

            <Process
              number="04"
              icon={BarChart3}
              title="Improve"
              text="Analyze your results and identify the areas that need more preparation."
            />
          </div>
        </div>
      </section>

      {/* PREPARATION FEATURES */}

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D5A021]">
              Complete preparation
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-[#0B2A52] sm:text-4xl">
              Everything required for serious exam preparation.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-500">
              Study important concepts, practice
              questions, attempt realistic mock tests
              and understand your performance from one
              simple platform.
            </p>

            <button
              onClick={explore}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#123C73] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#0B2A52]"
            >
              Start Preparing
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <FeatureBox
              icon={BookOpen}
              title="Study Material"
              text="Organized learning resources before every examination."
            />

            <FeatureBox
              icon={Timer}
              title="Real Exam Feel"
              text="Timed tests designed to simulate actual examination conditions."
            />

            <FeatureBox
              icon={Target}
              title="Question Practice"
              text="Practice questions across multiple topics and difficulty levels."
            />

            <FeatureBox
              icon={BarChart3}
              title="Performance Analysis"
              text="Understand your strengths, weaknesses and overall progress."
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] bg-[#123C73] px-6 py-16 text-center shadow-2xl shadow-blue-100">

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#D5A021]/20 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D5A021] text-white">
              <GraduationCap size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Ready to test your preparation?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
              Explore our preparation paths and experience
              a complete mock examination designed to help
              you perform better.
            </p>

            <button
              onClick={explore}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D5A021] px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#BD8916]"
            >
              Explore Mock Tests
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* =========================================================
   HOME COMPONENTS
========================================================= */

function HeroStat({ value, label }) {
  return (
    <div>
      <p className="text-xl font-black text-[#F0C453]">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-blue-100">
        {label}
      </p>
    </div>
  );
}

function Trust({
  icon: Icon,
  number,
  label,
}) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-7">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF6DA] text-[#D5A021]">
        <Icon size={19} />
      </div>

      <div>
        <p className="text-sm font-black text-[#123C73]">
          {number}
        </p>

        <p className="text-xs text-slate-400">
          {label}
        </p>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D5A021]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2A52] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function HomeCategory({
  category,
  index,
  explore,
}) {
  const Icon = category.icon;

  const styles = [
    "bg-[#EAF2FB] text-[#123C73]",
    "bg-[#FFF6DA] text-[#A5760D]",
    "bg-emerald-50 text-emerald-700",
    "bg-sky-50 text-sky-700",
  ];

  return (
    <button
      onClick={explore}
      className="group rounded-[24px] border border-slate-200 bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#D8BE71] hover:shadow-xl"
    >

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
          styles[index % styles.length]
        }`}
      >
        <Icon size={25} />
      </div>

      <h3 className="mt-6 text-lg font-black text-[#0B2A52]">
        {category.name}
      </h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {category.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">

        <div>
          <p className="text-sm font-black text-[#123C73]">
            {category.tests} Tests
          </p>

          <p className="text-xs text-slate-400">
            {category.learners} learners
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123C73] text-white transition group-hover:bg-[#D5A021]">
          <ArrowRight size={17} />
        </div>
      </div>
    </button>
  );
}

function Process({
  number,
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="relative rounded-[24px] border border-slate-200 bg-[#FAFBFD] p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <span className="absolute right-5 top-4 text-4xl font-black text-[#E8EEF5]">
        {number}
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123C73] text-white">
        <Icon size={21} />
      </div>

      <h3 className="mt-6 font-black text-[#0B2A52]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function FeatureBox({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF6DA] text-[#D5A021]">
        <Icon size={20} />
      </div>

      <h3 className="mt-4 font-black text-[#0B2A52]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>
    </div>
  );
}

/* =========================================================
   EXPLORER
========================================================= */

function Explorer({
  items,
  path,
  search,
  setSearch,
  filter,
  setFilter,
  selectItem,
  navigatePath,
  goBack,
}) {
  return (
    <main className="min-h-screen">

      <section className="bg-[#123C73]">

        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

          <button
            onClick={goBack}
            className="mb-7 flex items-center gap-2 text-sm font-bold text-blue-200 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-bold text-blue-300">

            <button
              onClick={() => navigatePath(-1)}
              className="hover:text-[#F0C453]"
            >
              All Categories
            </button>

            {path.map((item, index) => (
              <React.Fragment key={item.id}>

                <ChevronRight size={13} />

                <button
                  onClick={() => navigatePath(index)}
                  className={
                    index === path.length - 1
                      ? "text-[#F0C453]"
                      : "hover:text-white"
                  }
                >
                  {item.name}
                </button>
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F0C453]">
            Find your preparation path
          </p>

          <h1 className="mt-3 text-4xl font-black text-white">
            {path.length
              ? path[path.length - 1].name
              : "Explore Mock Tests"}
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-blue-200">
            {path.length
              ? path[path.length - 1].description
              : "Navigate through categories and subjects to find the exact preparation path for your examination."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-9 lg:px-8">

        <div className="flex flex-col gap-3 rounded-2xl border bg-white p-3 shadow-sm md:flex-row">

          <div className="relative flex-1">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search categories, subjects or tests..."
              className="h-12 w-full rounded-xl bg-[#F7F9FC] pl-12 pr-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-[#123C73]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">

            <Filter
              size={17}
              className="mx-2 shrink-0 text-slate-400"
            />

            {[
              "All",
              "Popular",
              "Free",
              "Beginner",
              "Intermediate",
              "Advanced",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  setFilter(item)
                }
                className={`h-10 shrink-0 rounded-xl px-4 text-xs font-black ${
                  filter === item
                    ? "bg-[#123C73] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item, index) => (
            <ExplorerCard
              key={item.id}
              item={item}
              index={index}
              onClick={() =>
                selectItem(item)
              }
            />
          ))}
        </div>

        {items.length === 0 && (
          <div className="py-24 text-center">

            <Search
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-5 text-xl font-black text-[#0B2A52]">
              No results found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function ExplorerCard({
  item,
  index,
  onClick,
}) {
  const Icon = item.icon || BookOpen;

  const folder = item.children?.length > 0;

  const colors = [
    "bg-[#EAF2FB] text-[#123C73]",
    "bg-[#FFF6DA] text-[#A5760D]",
    "bg-emerald-50 text-emerald-700",
  ];

  return (
    <button
      onClick={onClick}
      className="group rounded-[24px] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#D5A021] hover:shadow-xl"
    >

      <div className="flex items-start justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            colors[index % colors.length]
          }`}
        >
          <Icon size={25} />
        </div>

        <span className="rounded-full bg-[#FFF6DA] px-3 py-1 text-[9px] font-black uppercase text-[#9A7115]">
          {folder
            ? `${item.children.length} Sections`
            : "Mock Tests"}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black text-[#0B2A52]">
        {item.name}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
        {item.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t pt-5">

        <span className="text-xs font-bold text-slate-400">
          {folder
            ? "Explore section"
            : "View preparation"}
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123C73] text-white transition group-hover:bg-[#D5A021]">
          <ArrowRight size={16} />
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   TEST DETAILS
========================================================= */

function TestDetails({
  topic,
  goBack,
  startTest,
}) {
  const currentTopic =
    topic || {
      name: "Mock Examination",
      description:
        "Complete examination preparation.",
    };

  return (
    <main className="min-h-screen pb-20">

      <section className="bg-[#123C73] text-white">

        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

          <button
            onClick={goBack}
            className="flex items-center gap-2 text-sm font-bold text-blue-200 hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Tests
          </button>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_350px]">

            <div>

              <span className="rounded-full bg-[#D5A021]/20 px-4 py-2 text-xs font-black text-[#F6D875]">
                MOCK TEST SERIES
              </span>

              <h1 className="mt-6 text-4xl font-black sm:text-5xl">
                {currentTopic.name}
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-blue-200">
                {currentTopic.description} Review the
                recommended preparation material before
                attempting this examination.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <DetailTag
                  icon={CircleHelp}
                  text="10 Questions"
                />

                <DetailTag
                  icon={Clock3}
                  text="10 Minutes"
                />

                <DetailTag
                  icon={Award}
                  text="100 Marks"
                />

                <DetailTag
                  icon={BarChart3}
                  text="Intermediate"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">

              <p className="text-xs font-black uppercase text-blue-200">
                Preparation Readiness
              </p>

              <div className="mt-3 flex justify-between">

                <p className="text-3xl font-black">
                  75%
                </p>

                <span className="rounded-full bg-[#D5A021] px-3 py-1 text-xs font-black">
                  GOOD
                </span>
              </div>

              <div className="mt-4 h-2 rounded-full bg-white/20">
                <div className="h-full w-3/4 rounded-full bg-[#E6B83E]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_340px] lg:px-8">

        <div>

          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D5A021]">
            Recommended Preparation
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#0B2A52]">
            Study before you attempt
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Complete the recommended learning material
            before starting your mock examination.
          </p>

          <div className="mt-7 space-y-4">

            {studyMaterials.map((material, index) => (
              <Material
                key={material.title}
                material={material}
                defaultCompleted={index < 3}
              />
            ))}
          </div>
        </div>

        <aside>

          <div className="sticky top-28 rounded-[26px] border bg-white p-6 shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF6DA] text-[#D5A021]">
              <ShieldCheck size={24} />
            </div>

            <h3 className="mt-5 text-xl font-black text-[#0B2A52]">
              Ready for the challenge?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Once started, the examination timer will
              begin automatically.
            </p>

            <div className="my-6 space-y-3 border-y py-5">

              <Rule text="10 questions" />
              <Rule text="10 minute countdown timer" />
              <Rule text="Question navigation palette" />
              <Rule text="Mark questions for review" />
              <Rule text="Detailed performance result" />
            </div>

            <button
              onClick={startTest}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D5A021] py-4 text-sm font-black text-white transition hover:bg-[#BD8916]"
            >
              <Play
                size={17}
                fill="currentColor"
              />

              Start Mock Test

              <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}

function DetailTag({
  icon: Icon,
  text,
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-bold">

      <Icon
        size={15}
        className="text-[#F0C453]"
      />

      {text}
    </div>
  );
}

function Material({
  material,
  defaultCompleted,
}) {
  const [completed, setCompleted] =
    useState(defaultCompleted);

  return (
    <div className="flex flex-col gap-5 rounded-[22px] border bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center">

      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
          completed
            ? "bg-emerald-50 text-emerald-600"
            : "bg-[#EAF2FB] text-[#123C73]"
        }`}
      >
        {completed ? (
          <CheckCircle2 />
        ) : (
          <BookOpen />
        )}
      </div>

      <div className="flex-1">

        <h3 className="font-black text-[#0B2A52]">
          {material.title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {material.description}
        </p>

        <p className="mt-2 text-xs font-bold text-slate-400">
          {material.type} • {material.duration}
        </p>
      </div>

      <button
        onClick={() => setCompleted(true)}
        className={`rounded-xl px-4 py-2.5 text-xs font-black ${
          completed
            ? "bg-slate-100 text-slate-500"
            : "bg-[#123C73] text-white"
        }`}
      >
        {completed
          ? "Review"
          : "Study Now"}
      </button>
    </div>
  );
}

function Rule({ text }) {
  return (
    <div className="flex gap-3 text-xs font-semibold text-slate-600">

      <CheckCircle2
        size={16}
        className="shrink-0 text-[#D5A021]"
      />

      {text}
    </div>
  );
}

/* =========================================================
   EXAM
========================================================= */

function Exam({
  topic,
  onBack,
  onComplete,
}) {
  const [current, setCurrent] =
    useState(0);

  const [answers, setAnswers] =
    useState({});

  const [review, setReview] =
    useState([]);

  const [seconds, setSeconds] =
    useState(600);

  const [submitModal, setSubmitModal] =
    useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((old) =>
        old > 0 ? old - 1 : 0
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onComplete();
    }
  }, [seconds, onComplete]);

  const question = questions[current];

  const answered =
    Object.keys(answers).length;

  const minutes = String(
    Math.floor(seconds / 60)
  ).padStart(2, "0");

  const secs = String(
    seconds % 60
  ).padStart(2, "0");

  const toggleReview = () => {
    setReview((old) =>
      old.includes(current)
        ? old.filter(
            (number) =>
              number !== current
          )
        : [...old, current]
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB]">

      <header className="sticky top-0 z-40 bg-[#123C73]">

        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-5">

          <div className="flex items-center gap-4">

            <button
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white"
            >
              <ArrowLeft size={18} />
            </button>

            <div>

              <p className="text-sm font-black text-white">
                {topic?.name ||
                  "Mock Examination"}
              </p>

              <p className="text-[10px] text-blue-200">
                MOCK EXAMINATION • 100 MARKS
              </p>
            </div>
          </div>

          <div
            className={`rounded-xl px-4 py-2 font-mono font-black ${
              seconds < 120
                ? "bg-red-600 text-white"
                : "bg-white text-[#123C73]"
            }`}
          >
            {minutes}:{secs}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] gap-6 px-5 py-6 lg:grid-cols-[1fr_320px]">

        <section className="overflow-hidden rounded-[24px] border bg-white">

          <div className="flex justify-between border-b px-6 py-5">

            <p className="text-xs font-black text-[#123C73]">
              QUESTION {current + 1} OF{" "}
              {questions.length}
            </p>

            <span className="rounded-full bg-[#FFF6DA] px-3 py-1 text-xs font-black text-[#9A7115]">
              +10 MARKS
            </span>
          </div>

          <div className="p-6 sm:p-9">

            <h2 className="text-xl font-bold leading-8 text-[#0B2A52] sm:text-2xl">
              {question.question}
            </h2>

            <div className="mt-8 space-y-3">

              {question.options.map(
                (option, index) => {
                  const selected =
                    answers[current] === index;

                  return (
                    <button
                      key={option}
                      onClick={() =>
                        setAnswers((old) => ({
                          ...old,
                          [current]: index,
                        }))
                      }
                      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        selected
                          ? "border-[#123C73] bg-[#EDF4FC]"
                          : "border-slate-200 hover:border-[#D5A021]"
                      }`}
                    >

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                          selected
                            ? "bg-[#123C73] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {String.fromCharCode(
                          65 + index
                        )}
                      </div>

                      <span className="text-sm font-semibold">
                        {option}
                      </span>

                      {selected && (
                        <Check
                          size={18}
                          className="ml-auto text-[#D5A021]"
                        />
                      )}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t bg-slate-50 p-5 sm:flex-row sm:justify-between">

            <button
              onClick={toggleReview}
              className={`rounded-xl px-4 py-3 text-xs font-black ${
                review.includes(current)
                  ? "bg-[#FFF1C4] text-[#8A6513]"
                  : "border bg-white"
              }`}
            >
              {review.includes(current)
                ? "Marked for Review"
                : "Mark for Review"}
            </button>

            <div className="flex gap-3">

              <button
                disabled={current === 0}
                onClick={() =>
                  setCurrent((old) => old - 1)
                }
                className="rounded-xl border bg-white px-5 py-3 text-xs font-black disabled:opacity-30"
              >
                Previous
              </button>

              {current < questions.length - 1 ? (

                <button
                  onClick={() =>
                    setCurrent((old) => old + 1)
                  }
                  className="rounded-xl bg-[#123C73] px-5 py-3 text-xs font-black text-white"
                >
                  Save & Next
                </button>

              ) : (

                <button
                  onClick={() =>
                    setSubmitModal(true)
                  }
                  className="rounded-xl bg-[#D5A021] px-5 py-3 text-xs font-black text-white"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </section>

        <aside>

          <div className="rounded-[24px] border bg-white p-5">

            <h3 className="font-black text-[#0B2A52]">
              Question Palette
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Select a question to navigate.
            </p>

            <div className="mt-5 grid grid-cols-5 gap-2">

              {questions.map((_, index) => {
                const isAnswered =
                  answers[index] !== undefined;

                const isReview =
                  review.includes(index);

                const isCurrent =
                  current === index;

                let style =
                  "bg-slate-100 text-slate-500";

                if (isAnswered) {
                  style =
                    "bg-emerald-600 text-white";
                }

                if (isReview) {
                  style =
                    "bg-[#D5A021] text-white";
                }

                if (isCurrent) {
                  style =
                    "bg-[#123C73] text-white ring-2 ring-[#D5A021] ring-offset-2";
                }

                return (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrent(index)
                    }
                    className={`aspect-square rounded-xl text-xs font-black ${style}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 space-y-2 border-t pt-5">

              <Legend
                color="bg-emerald-600"
                text={`Answered (${answered})`}
              />

              <Legend
                color="bg-[#D5A021]"
                text={`Review (${review.length})`}
              />

              <Legend
                color="bg-slate-200"
                text={`Not Answered (${
                  questions.length - answered
                })`}
              />
            </div>
          </div>

          <button
            onClick={() =>
              setSubmitModal(true)
            }
            className="mt-5 w-full rounded-xl bg-[#D5A021] py-4 font-black text-white shadow-lg transition hover:bg-[#BD8916]"
          >
            Submit Examination
          </button>
        </aside>
      </div>

      {submitModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#07182D]/70 p-5 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-[26px] bg-white p-7 shadow-2xl">

            <CircleHelp
              size={35}
              className="text-[#D5A021]"
            />

            <h2 className="mt-5 text-2xl font-black text-[#0B2A52]">
              Submit examination?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              You answered{" "}
              <strong>{answered}</strong>{" "}
              of{" "}
              <strong>{questions.length}</strong>{" "}
              questions.
            </p>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Answered
                </span>

                <strong className="text-emerald-600">
                  {answered}
                </strong>
              </div>

              <div className="mt-2 flex justify-between text-sm">
                <span className="text-slate-500">
                  Not Answered
                </span>

                <strong>
                  {questions.length - answered}
                </strong>
              </div>

              <div className="mt-2 flex justify-between text-sm">
                <span className="text-slate-500">
                  Marked Review
                </span>

                <strong className="text-[#D5A021]">
                  {review.length}
                </strong>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">

              <button
                onClick={() =>
                  setSubmitModal(false)
                }
                className="rounded-xl border py-3 text-sm font-black"
              >
                Continue Test
              </button>

              <button
                onClick={onComplete}
                className="rounded-xl bg-[#123C73] py-3 text-sm font-black text-white"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Legend({ color, text }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

      <span
        className={`h-3 w-3 rounded ${color}`}
      />

      {text}
    </div>
  );
}

/* =========================================================
   RESULT
========================================================= */

function Result({
  topic,
  onHome,
  onExplore,
  onRetry,
}) {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">

      <section className="bg-[#123C73] px-5 pb-24 pt-16 text-center text-white">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#D5A021] shadow-xl">
          <Trophy size={38} />
        </div>

        <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-[#F2D477]">
          Examination Completed
        </p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          Excellent Performance!
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-blue-200">
          You successfully completed the{" "}
          {topic?.name || "mock examination"}.
        </p>
      </section>

      <main className="mx-auto max-w-5xl px-5 pb-20">

        <div className="-mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <ResultStat
            icon={Award}
            label="Score"
            value="80/100"
          />

          <ResultStat
            icon={Target}
            label="Accuracy"
            value="80%"
          />

          <ResultStat
            icon={CheckCircle2}
            label="Correct"
            value="8"
          />

          <ResultStat
            icon={Clock3}
            label="Time Used"
            value="07:42"
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <MiniResult
            label="Correct Answers"
            value="8"
            type="good"
          />

          <MiniResult
            label="Incorrect Answers"
            value="2"
            type="bad"
          />

          <MiniResult
            label="Skipped"
            value="0"
            type="neutral"
          />
        </div>

        <div className="mt-8 rounded-[26px] border bg-white p-7">

          <p className="text-xs font-black uppercase tracking-[0.15em] text-[#D5A021]">
            Performance Analysis
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#0B2A52]">
            Your Performance Breakdown
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Review your performance across different
            areas and identify where you can improve.
          </p>

          <div className="mt-8 space-y-6">

            <Performance
              label="Fundamentals"
              value={92}
            />

            <Performance
              label="Core Concepts"
              value={85}
            />

            <Performance
              label="Advanced Topics"
              value={68}
            />

            <Performance
              label="Problem Solving"
              value={76}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          <button
            onClick={onRetry}
            className="rounded-xl bg-[#D5A021] px-7 py-3.5 text-sm font-black text-white transition hover:bg-[#BD8916]"
          >
            Retake Test
          </button>

          <button
            onClick={onExplore}
            className="rounded-xl bg-[#123C73] px-7 py-3.5 text-sm font-black text-white"
          >
            Explore More Tests
          </button>

          <button
            onClick={onHome}
            className="rounded-xl border bg-white px-7 py-3.5 text-sm font-black text-[#123C73]"
          >
            Back Home
          </button>
        </div>
      </main>
    </div>
  );
}

function ResultStat({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-[22px] border bg-white p-5 shadow-lg">

      <div className="flex justify-between">

        <div>
          <p className="text-xs font-bold text-slate-400">
            {label}
          </p>

          <p className="mt-1 text-2xl font-black text-[#0B2A52]">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF6DA] text-[#D5A021]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

function MiniResult({
  label,
  value,
  type,
}) {
  let style =
    "bg-slate-50 text-slate-700";

  if (type === "good") {
    style =
      "bg-emerald-50 text-emerald-700";
  }

  if (type === "bad") {
    style =
      "bg-red-50 text-red-600";
  }

  return (
    <div
      className={`rounded-2xl p-5 ${style}`}
    >
      <p className="text-xs font-bold opacity-70">
        {label}
      </p>

      <p className="mt-1 text-3xl font-black">
        {value}
      </p>
    </div>
  );
}

function Performance({
  label,
  value,
}) {
  return (
    <div>

      <div className="flex justify-between">

        <span className="font-bold text-slate-700">
          {label}
        </span>

        <span className="font-black text-[#123C73]">
          {value}%
        </span>
      </div>

      <div className="mt-3 h-2.5 rounded-full bg-slate-100">

        <div
          style={{
            width: `${value}%`,
          }}
          className="h-full rounded-full bg-gradient-to-r from-[#123C73] to-[#D5A021]"
        />
      </div>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t-4 border-[#D5A021] bg-[#0B2A52] px-5 py-12 text-white">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Brain size={22} />
          </div>

          <div>

            <p className="text-lg font-black">
              Exam
              <span className="text-[#F0C453]">
                Sphere
              </span>
            </p>

            <p className="text-xs text-blue-300">
              Learn • Practice • Excel
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-bold text-blue-200">

          <button>
            Mock Tests
          </button>

          <button>
            Study Material
          </button>

          <button>
            Categories
          </button>

          <button>
            Contact
          </button>
        </div>

        <p className="text-xs text-blue-300">
          © 2026 ExamSphere.
        </p>
      </div>
    </footer>
  );
}
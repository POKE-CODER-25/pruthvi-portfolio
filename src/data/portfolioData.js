export const portfolioData = {
  identity: {
    name: 'R. Pruthvi Adithya Raj',
    role: 'AI Product Builder - Generative AI Developer - Creative Systems Designer',
    location: 'Andhra Pradesh, India',
    email: 'adithyarajatp@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pruthvi-ai-developer',
    linkedinLabel: 'linkedin.com/in/pruthvi-ai-developer',
    github: 'https://github.com/POKE-CODER-25',
    githubLabel: 'github.com/POKE-CODER-25',
    liveProject: 'https://pokemon-draft-arena-d21a7.web.app/',
    liveProjectLabel: 'pokemon-draft-arena-d21a7.web.app',
    liveProjectTitle: 'POKÉMON DRAFT ARENA',
  },
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Workflow', href: '#ai-workflow' },
    { label: 'Projects', href: '#projects' },
    { label: 'Goals', href: '#goals' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    kicker: 'AI + multiplayer product developer',
    title: 'Building AI Products and Multiplayer Games',
    subtitle:
      'I create interactive web apps, AI-powered platforms, and real-time multiplayer games using modern technologies like React, Firebase, and AI tools.',
    actions: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Download Resume', href: '/resume.pdf', variant: 'secondary', external: true },
      { label: 'Contact Me', href: '#contact', variant: 'ghost' },
    ],
    stats: [
      { value: 'AI', label: 'Developer' },
      { value: 'Game', label: 'Developer' },
      { value: '6', label: 'Major Projects' },
      { value: 'Firebase', label: 'Powered' },
    ],
  },
  about: {
    title: 'About Me',
    body:
      'I’m Pruthvi, an AI and Game Developer focused on building interactive digital experiences. My work combines artificial intelligence, multiplayer systems, modern web technologies, and creative game design to create products that are both technically challenging and enjoyable to use. From AI-powered learning platforms to real-time multiplayer games, I enjoy turning ambitious ideas into polished, deployable projects.',
  },
  skills: [
    {
      title: 'AI & GenAI',
      items: ['Generative AI', 'Prompt Engineering', 'AI Workflow Design'],
    },
    {
      title: 'Frontend',
      items: ['React.js', 'JavaScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Infra',
      items: ['Firebase Auth', 'Firestore', 'Firebase Hosting', 'Cloud Deployment'],
    },
    {
      title: 'Creative Systems',
      items: [
        'UI/UX Thinking',
        'Product Ideation',
        'Gamification',
        'Interactive Experience Design',
        'Git/GitHub',
      ],
    },
  ],
  aiWorkflow: {
    title: 'AI Development Workflow',
    subtitle: 'How I build products using modern AI engineering systems.',
    cards: [
      {
        title: 'Ideation',
        description: 'Turning raw concepts into structured product plans.',
      },
      {
        title: 'Codex Development',
        description: 'Using OpenAI Codex to accelerate implementation, debugging, UI creation, and workflow execution.',
      },
      {
        title: 'Iterative Product Design',
        description: 'Rapid testing, redesign, optimization, and feature evolution.',
      },
      {
        title: 'Deployment Pipeline',
        description: 'GitHub, Vercel, Firebase, and production-ready delivery.',
      },
      {
        title: 'AI-Augmented Learning',
        description: 'Learning faster through experimentation, prototyping, and real-world projects.',
      },
    ],
  },
  githubActivity: {
    title: 'GitHub Activity',
    subtitle: 'Build signals across active repositories, live products, experiments, and deployment-ready work.',
    stats: [
      { label: 'Active Repositories', value: 10, suffix: '+' },
      { label: 'Live Projects', value: 4, suffix: '+' },
      { label: 'AI Product Experiments', value: 5, suffix: '+' },
      { label: 'Deployment Ready Projects', value: 4, suffix: '+' },
    ],
  },
  portfolioStats: {
    title: 'Portfolio Stats',
    subtitle: 'A compact snapshot of projects, certifications, AI tooling, and build momentum.',
    stats: [
      { label: 'Live Projects', value: 4, suffix: '+' },
      { label: 'Infosys Certifications', value: 6, suffix: '+' },
      { label: 'AI Models Used', value: 10, suffix: '+' },
      { label: 'Development Hours', value: 300, suffix: '+' },
    ],
  },
  projects: [
    {
      title: 'Volt Sensei',
      subtitle: 'AI-Powered JEE Learning Platform',
      category: 'AI EdTech',
      status: 'Live',
      stack: ['React.js', 'Firebase', 'Tailwind CSS', 'Generative AI'],
      description:
        'Volt Sensei is an AI-powered JEE learning platform that helps students learn Physics, Chemistry, and Mathematics through interactive AI Senseis, quizzes, formula tools, dashboards, 3D models, and visual learning experiences.',
      links: [
        { label: 'Live Demo', href: 'https://volt-sensei.web.app' },
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/VOLT_SENSEI' },
      ],
      screenshots: [
        { src: '/projects/volt-sensei.png', fallbackSrc: '/assets/projects/volt-home.png', label: 'Overview' },
        { src: '/assets/projects/volt-bots.png', label: 'AI Bots' },
        { src: '/assets/projects/volt-3dmodels.png', label: '3D Models' },
        { src: '/assets/projects/volt-quiz.png', label: 'Quiz' },
        { src: '/assets/projects/volt-xp.png', label: 'XP' },
      ],
      featured: true,
      accent: 'from-cyan-300/25 via-blue-300/15 to-violet-300/20',
    },
    {
      title: 'Pokémon Draft Arena',
      subtitle: 'Multiplayer Strategy Battle Game',
      category: 'Multiplayer Game',
      status: 'Live',
      stack: ['React.js', 'Firebase', 'Realtime Multiplayer', 'Game Systems'],
      description:
        'Pokémon Draft Arena is a real-time multiplayer strategy game where two trainers create private rooms, draft hidden teams from randomized Pokémon pools, and compete through a score-based battle system. It includes hidden drafting, category-based pools, team previews, battle simulation, type-advantage scoring, match results, and Firebase-powered state management.',
      links: [
        { label: 'Live Demo', href: 'https://pokemon-draft-arena-d21a7.web.app/' },
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/POKEMON_BATTLE_ARENA' },
      ],
      screenshots: [
        { src: '/assets/projects/Battle_Arena/pokemon-draft-arena-1.png', label: 'Battle Arena' },
        { src: '/assets/projects/Battle_Arena/pokemon-draft-arena-2.png', label: 'Room Setup' },
        { src: '/assets/projects/Battle_Arena/pokemon-draft-arena-3.png', label: 'Team Draft' },
        { src: '/assets/projects/Battle_Arena/pokemon-draft-arena-4.png', label: 'Team Preview' },
        { src: '/assets/projects/Battle_Arena/pokemon-draft-arena-5.png', label: 'Battle Results' },
      ],
      hideScreenshotTabs: true,
      accent: 'from-violet-300/25 via-blue-300/15 to-cyan-300/20',
    },
    {
      title: 'ResumeForge',
      subtitle: 'AI-Assisted Resume Builder and Analyzer',
      category: 'Live Web Application',
      status: 'Live & Deployed',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Firebase Hosting', 'JavaScript', 'PDF Processing', 'DOCX Processing', 'Local Storage'],
      description:
        'ResumeForge is an AI-assisted resume builder and resume analysis platform designed to help students and job seekers create stronger resumes. It includes a resume builder, resume health report, upload and analysis workflow, improvement suggestions, live preview, resume editor, PDF and DOCX export, and local data persistence.',
      links: [
        { label: 'Live Demo', href: 'https://resume-forge-25.web.app/' },
        { label: 'GitHub Repository', href: 'https://github.com/POKE-CODER-25/ResumeForge' },
      ],
      screenshots: [
        { src: '/assets/projects/ResumeForge/resumeforge-1.png', label: 'Resume Builder' },
        { src: '/assets/projects/ResumeForge/resumeforge-2.png', label: 'Health Report' },
        { src: '/assets/projects/ResumeForge/resumeforge-3.png', label: 'Upload Analysis' },
        { src: '/assets/projects/ResumeForge/resumeforge-4.png', label: 'Live Preview' },
        { src: '/assets/projects/ResumeForge/resumeforge-5.png', label: 'Export Tools' },
      ],
      hideScreenshotTabs: true,
      accent: 'from-violet-300/25 via-blue-300/15 to-cyan-300/20',
    },
    {
      title: 'Volt Interview',
      subtitle: 'AI Voice Interview Simulator',
      category: 'AI Interview Prep',
      status: 'Live & Deployed',
      stack: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Firebase Authentication',
        'Firebase Hosting',
        'Browser Speech Recognition API',
        'Browser Speech Synthesis API',
      ],
      description:
        'Volt Interview is a browser-based voice interview simulator that helps students and developers practice realistic HR, Technical, and Project interviews. It includes Resume Interview and Student Interview modes, resume-aware and answer-aware questioning, voice input, spoken interviewer prompts, and recruiter-style performance reports.',
      links: [
        { label: 'Live Demo', href: 'https://volt-interview.web.app/' },
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/volt-interview' },
      ],
      screenshots: [
        { src: '/assets/projects/Volt_Interview/volt_interview1.png', label: 'Home Page' },
        { src: '/assets/projects/Volt_Interview/volt_interview2.png', label: 'Setup Page' },
        { src: '/assets/projects/Volt_Interview/volt_interview3.png', label: 'Resume Focus' },
        { src: '/assets/projects/Volt_Interview/volt_interview4.png', label: 'Interview Page' },
        { src: '/assets/projects/Volt_Interview/volt_interview5.png', label: 'Results Page' },
      ],
      hideScreenshotTabs: true,
      accent: 'from-violet-300/25 via-blue-300/15 to-cyan-300/20',
    },
    {
      title: 'Healthy Minds',
      subtitle: 'AI Fitness Transformation Platform',
      category: 'AI Fitness',
      status: 'In Development',
      stack: ['React Native / React', 'Firebase', 'Generative AI'],
      description:
        'Healthy Minds is an AI fitness transformation platform designed to create personalized fitness paths, nutrition guidance, progress tracking, and workout learning experiences.',
      links: [
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/Healthy-Minds' },
        { label: 'In Development', comingSoon: true },
      ],
      screenshots: [{ src: '/projects/healthy-minds.png', label: 'Product Preview' }],
      accent: 'from-cyan-300/20 via-blue-300/10 to-pink-300/20',
    },
    {
      title: "King's Guess",
      subtitle: 'Multiplayer Social Deduction Game',
      category: 'Multiplayer Game',
      status: 'In Development',
      stack: ['React.js', 'Firebase', 'Realtime Multiplayer', 'Game Logic'],
      description:
        "King’s Guess is a multiplayer social deduction game inspired by classic hidden-role gameplay, featuring private rooms, secret roles, turn-based guessing, scoring, reconnect logic, and real-time Firebase gameplay.",
      links: [
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/Kings-Guess' },
        { label: 'In Development', comingSoon: true },
      ],
      screenshots: [{ src: '/projects/kings-guess.png', label: 'Game Preview' }],
      accent: 'from-violet-300/25 via-cyan-300/10 to-blue-300/20',
    },
  ],
  certifications: [
    {
      title: 'Prompt Engineering for Developers',
      issuer: 'Infosys Springboard',
      category: 'AI',
      file: '/assets/certificates/prompt.pdf',
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Infosys Springboard',
      category: 'AI',
      file: '/assets/certificates/GenAI.pdf',
    },
    {
      title: 'Cloud Computing Essentials',
      issuer: 'Infosys Springboard',
      category: 'Cloud',
      file: '/assets/certificates/CLOUD COMPUTING REPORT.pdf',
    },
    {
      title: 'GitHub & Version Control',
      issuer: 'Infosys Springboard',
      category: 'Git',
      file: '/assets/certificates/Git.pdf',
    },
    {
      title: 'GitHub Foundation Report',
      issuer: 'Infosys Springboard',
      category: 'Git',
      file: '/assets/certificates/GITHUB Report.pdf',
    },
    {
      title: 'AI First Software Engineering',
      issuer: 'Infosys Springboard',
      category: 'AI',
      file: '/assets/certificates/AISE.pdf',
    },
    {
      title: 'Natural Language Processing',
      issuer: 'Infosys Springboard',
      category: 'NLP',
      file: '/assets/certificates/NLP.pdf',
    },
    {
      title: 'Data Science',
      issuer: 'Infosys Springboard',
      category: 'Data',
      file: '/assets/certificates/DataScience.pdf',
    },
    {
      title: 'Python Programming',
      issuer: 'Infosys Springboard',
      category: 'Python',
      file: '/assets/certificates/PYTHON REPORT.pdf',
    },
  ],
  achievements: [
    'Built and deployed Volt Sensei as first live AI project',
    'Created a project-focused AI developer resume',
    'Completed 9 Infosys Springboard certifications',
    'Started AI Fitness App and multiplayer game projects',
    'Building a long-term portfolio as a personal brand',
  ],
  goals: {
    title: 'Career Goals',
    body:
      'I am building toward product-grade AI systems that feel useful, fast, and memorable: learning copilots, creative tools, multiplayer experiments, and recruiter-ready engineering work.',
    targetAreas: [
      { number: '01', title: 'GenAI Builder', description: 'Ship practical copilots, prompt systems, and AI workflows.' },
      { number: '02', title: 'EdTech AI Systems', description: 'Create adaptive learning products around speed, clarity, and motivation.' },
      { number: '03', title: 'Creative AI Products', description: 'Blend AI, design, and interaction into memorable user experiences.' },
      { number: '04', title: 'Multiplayer Experiences', description: 'Build real-time systems with social mechanics and polished gameplay loops.' },
      { number: '05', title: 'Product Engineering Internships', description: 'Contribute to teams shipping reliable user-facing software.' },
    ],
  },
  futureVision: {
    title: 'Future Vision',
    subtitle: 'A focused roadmap from AI product building to founder-level systems.',
    stages: [
      { label: 'Current Stage', title: 'AI Product Builder' },
      { label: 'Next', title: 'Full Stack AI Systems' },
      { label: 'Next', title: 'GenAI Applications' },
      { label: 'Next', title: 'Multiplayer Platform Development' },
      { label: 'Next', title: 'Product Engineering' },
      { label: 'Final', title: 'AI Startup Founder' },
    ],
  },
}

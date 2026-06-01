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
    liveProject: 'https://volt-sensei.web.app',
    liveProjectLabel: 'volt-sensei.web.app',
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
    kicker: 'AI builder with product instincts',
    title: 'Building AI-powered worlds and experiences.',
    subtitle:
      'I am an AI-focused developer passionate about creating real-world generative AI products, interactive learning systems, creative apps, and multiplayer experiences.',
    actions: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Download Resume', href: '/resume.pdf', variant: 'secondary', external: true },
      { label: 'Contact Me', href: '#contact', variant: 'ghost' },
    ],
    stats: [
      { value: '01', label: 'Live AI product' },
      { value: '09', label: 'Certifications' },
      { value: '03', label: 'Product tracks' },
    ],
  },
  about: {
    title: 'About Me',
    body:
      'I started as a student exploring AI and gradually moved from learning tools to building real products. My first major live project is Volt Sensei, an AI-powered JEE learning platform. I enjoy combining AI, design, gamification, anime-inspired experiences, and interactive systems. My goal is to become an AI product builder who creates useful and memorable digital experiences.',
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
      { label: 'Active Repositories', value: 4 },
      { label: 'Live Projects', value: 1 },
      { label: 'AI Product Experiments', value: 3 },
      { label: 'Deployment Ready Projects', value: 2 },
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
      status: 'Live',
      stack: ['React.js', 'Firebase', 'Tailwind CSS', 'Generative AI'],
      description:
        'A live AI-powered JEE learning platform with AI quizzes, XP gamification, formula sections, Firebase authentication, 3D educational models, and interactive learning experiences.',
      links: [
        { label: 'Live Demo', href: 'https://volt-sensei.web.app' },
        { label: 'GitHub', href: 'https://github.com/POKE-CODER-25/VOLT_SENSEI' },
      ],
      screenshots: [
        { src: '/assets/projects/volt-home.png', label: 'Home' },
        { src: '/assets/projects/volt-bots.png', label: 'AI Bots' },
        { src: '/assets/projects/volt-3dmodels.png', label: '3D Models' },
        { src: '/assets/projects/volt-quiz.png', label: 'Quiz' },
        { src: '/assets/projects/volt-xp.png', label: 'XP' },
      ],
      featured: true,
      accent: 'from-cyan-300/25 via-blue-300/15 to-violet-300/20',
    },
    {
      title: 'AI Fitness Transformation App',
      subtitle: 'Mobile-first AI Fitness Companion',
      status: 'In Development',
      stack: ['React Native / React', 'Firebase', 'Generative AI'],
      description:
        'A mobile-first AI fitness companion with body transformation paths, tracking systems, discipline mechanics, streaks, and personalized fitness experiences.',
      links: [{ label: 'Preview Status', comingSoon: true }],
      accent: 'from-cyan-300/20 via-blue-300/10 to-pink-300/20',
    },
    {
      title: "King's Guess",
      subtitle: 'Multiplayer Social Strategy Game',
      status: 'In Development',
      stack: ['React.js', 'Firebase Realtime DB', 'WebSockets'],
      description:
        'A multiplayer social strategy game with friends-only rooms, hidden roles, role-swapping mechanics, cartoonish visuals, and real-time gameplay systems.',
      links: [{ label: 'Preview Status', comingSoon: true }],
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

/**
 * Centralized Course Data
 * All content extracted from the PDF and reference website
 */

export const courseData = {
  // Basic Course Information
  basic: {
    title: "Master Digital Marketing & AI for Business Owners",
    subtitle: "The 3-Month Cohort Program to 10X Your Business Growth",
    description:
      "Transform your business with cutting-edge digital marketing strategies and AI tools. Learn from industry experts and implement real-world solutions tailored to your business niche.",
    duration: "3 Months Cohort Program",
    weeklyCommitment: "6 hours/week",
    totalHours: "40-50 hours",
    rating: "9.6/10",
    expertise: "14+ Years of Industry Expertise",
    preRequisite: "No pre-requisite required",
  },

  // Statistics
  stats: [
    {
      icon: "⭐",
      value: "9.6/10",
      label: "Program Rating",
      description: "Highly rated by students",
    },
    {
      icon: "👥",
      value: "500+",
      label: "Successful Graduates",
      description: "Students who transformed their business",
    },
    {
      icon: "🎓",
      value: "14+",
      label: "Years of Expertise",
      description: "Industry experience in digital marketing",
    },
  ],

  // Why Choose This Program
  advantages: [
    {
      id: 1,
      title: "80:20 Practical Approach",
      description:
        "80% Practical and 20% Theory model for industry-rich experience. Multiple meta accounts are given to handle and learn niche-specific approaches.",
      icon: "⚙️",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
    },
    {
      id: 2,
      title: "1:1 Doubt Solving & Consultation",
      description:
        "Personalized knowledge tailored for your business niche. Whenever you need our help, we are just a call away.",
      icon: "💬",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      id: 3,
      title: "Expert Instructors",
      description:
        "Learn from seasoned Digital Marketers and Industry veterans with 14+ years of expertise.",
      icon: "👨‍🏫",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      id: 4,
      title: "Secret Strategies",
      description:
        "Get to learn some of the best strategies that BOOSTS YOUR BUSINESS to 10X.",
      icon: "🚀",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
    },
    {
      id: 5,
      title: "Industry Approved Curriculum",
      description:
        "Courses designed and developed by top industry professionals. Learn from scratch or choose Core/Advanced module based on expertise.",
      icon: "📚",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
    },
    {
      id: 6,
      title: "Hands-On Training",
      description:
        "Work on real industry case studies and live projects. You cannot master without doing.",
      icon: "🛠️",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
    },
  ],

  // Curriculum Modules
  curriculum: [
    {
      id: 1,
      title: "Fundamentals of Digital Marketing",
      icon: "📊",
      topics: [
        "Setting marketing objectives",
        "Market & Competitor Research",
        "Understanding the marketing funnel & customer journey",
        "Identifying target audience segments",
        "Creating a Buyer Persona",
        "Developing a value proposition",
        "Understanding Media: Paid, Shared, Owned, and Earned",
        "Overview of digital marketing channels",
      ],
      learningOutcome:
        "Gain a comprehensive understanding of digital marketing fundamentals and develop essential skills to create an effective digital marketing plan and go-to-market framework.",
      projects: [
        "Create a content calendar for a real business and produce social media content using AI Tools",
        "Create social media progress report to senior marketing management",
      ],
    },
    {
      id: 2,
      title: "SEO Fundamentals",
      icon: "🔍",
      topics: [
        "SEO Basics: Google updates & ranking analysis",
        "Content & Technical SEO: Optimization & off-page tactics",
        "Link Building: Fundamentals, internal linking & backlink",
        "SEO Mistakes & Google Penalties",
        "AI & SEO: Keyword research, content structure & meta optimization",
        "Stay updated with SEO",
        "Manual Actions & Google Penalties",
        "Ranking Analysis",
        "Introduction to Technical SEO",
      ],
      learningOutcome:
        "Build a strong foundation in SEO with proactive strategies, conduct ranking analysis, optimize content for search engines, and gain in-depth knowledge of technical SEO.",
      projects: ["Keyword mapping audit of a website"],
    },
    {
      id: 3,
      title: "Social Media Marketing",
      icon: "📱",
      topics: [
        "Fundamentals of Social Media Marketing",
        "Company-wise content strategy",
        "B2C vs B2B strategies",
        "Channel-wise content strategy",
        "Content Marketing using AI: Idea generation, content creation & automation",
        "Understanding the algorithms of different channels",
        "Metrics for Social Media Marketing",
        "Case studies from B2C brands",
        "Content formats on social media",
        "Marketing on YouTube, LinkedIn, Instagram, Twitter",
      ],
      learningOutcome:
        "Explore key social media platforms, develop effective content strategies, create engaging content, and leverage user-generated content for growth.",
      projects: [
        "Create a content calendar for a real business and produce social media content using AI Tools",
        "Create social media progress report to senior marketing management",
      ],
    },
    {
      id: 4,
      title: "Persuasive Copywriting",
      icon: "✍️",
      topics: [
        "Crafting attention-grabbing headlines and subheadings",
        "Writing clear and persuasive copy that communicates value propositions",
        "Utilizing persuasive language and storytelling techniques",
        "Optimizing copy based on different elements: time/audience",
        "Setting goals and objectives of Landing Page",
        "Aligning landing page goals with overall campaign objectives",
        "Optimizing page navigation and structure",
        "Framework for Ideal LP/Elements of Ideal LP",
        "Analyzing and optimizing ad visuals, headlines, and copywriting",
        "Testing and iterating ad variations",
        "How to set up briefs for designers and freelancers",
        "How to build Brand guidelines",
      ],
      learningOutcome:
        "Master the art of crafting compelling ad headlines and descriptions that drive engagement. Learn tools to make persuasive copies quicker and master A/B testing.",
      projects: ["Build a value proposition"],
    },
    {
      id: 5,
      title: "Marketing on Google",
      icon: "🔴",
      topics: [
        "Setting up Google Webmaster Tool",
        "Understanding Campaign types and structure",
        "Exploring different keyword match types and their impact",
        "Types of Search Ads",
        "Crafting compelling ad headlines and descriptions",
        "Understanding bidding options and strategies for maximum ROI",
        "Creating search campaign structure from scratch",
        "Campaign tracking and performance management",
        "Exploring various types of Audiences in Google Ads",
        "The Art of Display & Discovery Advertising",
        "Mastering Video Advertising on YouTube",
        "UAC Campaigns: Unleash the Power of Automation",
      ],
      learningOutcome:
        "Gain advanced understanding of Google Ads including Search, Display, Video, and UAC campaigns. Learn campaign structures, keyword match types, bidding strategies, and audience targeting.",
      projects: [
        "Create a Google Ads account structure for a global e-commerce brand, which should encompass Search, YouTube, and Discovery campaigns",
      ],
    },
    {
      id: 6,
      title: "Marketing on Facebook",
      icon: "👍",
      topics: [
        "Overview of Facebook Ads",
        "Understanding the Objectives, Metrics to track, Buying Type & Facebook Algorithm",
        "Exploring various types of Audiences in Facebook Ads Manager",
        "Bid Strategies: CBO VS ABO and FB Funnel",
        "Understanding all the ad platforms and placements",
        "Types of Facebook Ads: Static, Carousel, Video, etc",
        "Setting up your Facebook Ad Account for Scale & Success",
        "Learn to determine ROAS accurately",
        "Dashboard ROAS VS Realized ROAS",
        "Campaign Performance analysis and optimization",
        "Ad automation: RevealBot/Madgicx",
        "Automation Possibilities and Martech Stacks",
        "Rule Automation, Creative Automation Platforms",
        "Email Automation, Omni-Channel Messaging + Tools",
      ],
      learningOutcome:
        "Understand Facebook Ads audience types, bid strategies, and the Facebook Funnel for campaign optimization. Learn to calculate ROAS and analyze campaign performance.",
      projects: [
        "Set up a Facebook Ads account for a company and create campaigns, Audiences, creatives, and ad copies",
      ],
    },
    {
      id: 7,
      title: "Marketing on LinkedIn & Other Platforms",
      icon: "💼",
      topics: [
        "Types of LinkedIn Ads & targeting options",
        "Setting up Ads: Accounts, billing & payments",
        "Audience Insights: Research & targeting strategies",
        "Lead Gen Forms: Build custom audiences",
        "Tracking & Analytics: Metrics, performance & conversion optimization",
        "Retargeting & Lookalike Audiences",
        "Programmatic Ads & Alternative Networks: Quora, Buysell, Carbon, Hyper, Omni",
        "Apple Search Ads & Amazon Ads Optimization",
        "Native Advertising: Taboola, Outbrain & Yahoo",
        "Quora Ads: Drive traffic & build brand authority",
      ],
      learningOutcome:
        "Master LinkedIn Ads for professional advertising and captivate audiences through native advertising platforms such as Taboola, Outbrain, and Yahoo.",
      projects: ["Prepare a LinkedIn marketing plan for an Edtech company"],
    },
    {
      id: 8,
      title: "Conversion Tracking",
      icon: "📈",
      topics: [
        "Tracking Conversions: Importance & event implementation",
        "Cookies & FLOC: Campaign builder insights",
        "GA4 & Analytics: Dashboard, funnel paths & attribution",
        "User Behavior Analysis: Life cycle, cohorts & KPIs",
        "Web & App Tracking: Google Analytics, Mixpanel & Matomo",
        "Heatmaps & Session Recording: Microsoft Clarity & Hotjar",
        "GTM & E-Commerce Tracking",
      ],
      learningOutcome:
        "Possess advanced knowledge of conversion tracking and analytics. Understand the importance of conversion tracking, cookies, FLoC, and various attribution models.",
      projects: ["Set up GA 4 and create various useful reports for your business"],
    },
    {
      id: 9,
      title: "Basic to Advanced CRO",
      icon: "🎯",
      topics: [
        "Understanding conversions and the fundamentals of CRO",
        "The CRO Process: Observe, Ideate, Test, Deploy",
        "Deep dive into each of the components of the CRO Process",
        "Observe: Heuristic analysis, Quantitative data, Qualitative data",
        "Ideate: Idea, Hypothesis, Prioritization",
        "Test: Delivery, Measurement",
        "Deploy: Decision making, Statistics, Shipment Best practices",
        "CRO Checklist",
      ],
      learningOutcome:
        "Master the essentials of Conversion Rate Optimization. Understand the CRO process and gain insights into best practices with a practical CRO checklist.",
      projects: [
        "List down 10 hypotheses based on observations",
        "Prioritize based on ICE framework",
        "Decide type of test",
        "Create a timeline",
        "Complete the CRO loop by executing 3 tests",
      ],
    },
    {
      id: 10,
      title: "Media Planning",
      icon: "📺",
      topics: [
        "Fundamentals of Media Planning",
        "Understanding media objectives and strategy",
        "Media mix decision: Traditional vs Digital",
        "Budget allocation across different channels",
        "Media buying: Direct, Programmatic, Real-Time Bidding",
        "Media scheduling",
        "Media Evaluation Metrics & KPIs",
        "Understanding Ad frauds and brand safety",
        "Case studies and real-life media planning scenarios",
      ],
      learningOutcome:
        "Gain a fresh perspective on media planning with understanding of audience types, bid strategies, and Facebook Funnel for campaign optimization.",
      projects: ["Set up GA 4 and create various useful reports for your business"],
    },
    {
      id: 11,
      title: "Dashboard",
      icon: "📊",
      topics: [
        "Introduction to Data Visualization and its Techniques",
        "Types of Charts/Representations",
        "Data Studio: Introductions, Building Blocks, Data Sources",
        "Types of Data Connectors",
        "Pull data via multiple filters",
        "Live Case Work: Preparing a live dashboard with a real-time problem statement",
      ],
      learningOutcome:
        "Learn how to extract data from campaigns and visualize the data derived from those. Take data-driven decisions and optimize your campaigns.",
      projects: ["Build a dashboard on Data Studio"],
    },
    {
      id: 12,
      title: "Attribution",
      icon: "🔗",
      topics: [
        "Why Attribution Is Needed?",
        "View Through & Click Through",
        "What Questions Can MTA Answer?",
        "Last Touch, First Touch, Linear, Time Decay, Position-Based, U-Shaped, V-Shaped Attribution",
        "How To Make Google Analytics Attribution Project?",
        "How To Interpret The Data In GA?",
        "Designing A Custom Attribution Model For Your Business In GA (B2B & B2C)",
        "Attribution Algorithms: What Goes Into Building An Attribution Tool?",
      ],
      learningOutcome:
        "Grasp the importance of attribution and comprehend viewthrough, click-through, and Multi-Touch Attribution (MTA) concepts. Explore various Google Analytics attribution models.",
      projects: ["Create a custom attribution model"],
    },
    {
      id: 13,
      title: "Email & WhatsApp Marketing + Marketing Automation",
      icon: "📧",
      topics: [
        "Why is Email Marketing important?",
        "Who are the big players winning it?",
        "Email Marketing Best Practices",
        "Top 10 Tips to Keep in Mind to Leverage More from Email Marketing",
        "Key Metrics to Focus on for Email Marketing",
        "WhatsApp Marketing and its Journey so far",
        "Why is WhatsApp Marketing a double-edged sword?",
        "10 Things you should know before trying out WA Marketing",
        "Metrics and Consumer Journey Crafting via Email and WA marketing in blend",
        "Live Case Study solve: Dashboard walkthrough via one platform",
      ],
      learningOutcome:
        "Grasp Email Marketing's significance, industry insights, and best practices. Navigate WhatsApp Marketing's complexities and learn to blend Email and WhatsApp Marketing.",
      projects: [
        "Build an email and WhatsApp marketing campaign and automate using Zapier",
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "AI-Powered Social Media Content Strategy",
      description:
        "Create a content calendar and produce social media content using AI tools, followed by a progress report for senior management.",
      modules: ["Module 1", "Module 3"],
      difficulty: "Beginner",
      duration: "2 weeks",
    },
    {
      id: 2,
      title: "Comprehensive SEO Audit & Keyword Mapping",
      description:
        "Perform a detailed keyword mapping audit for a real website, focusing on content and technical SEO best practices.",
      modules: ["Module 2"],
      difficulty: "Intermediate",
      duration: "3 weeks",
    },
    {
      id: 3,
      title: "Google Ads Campaign Structure for E-commerce",
      description:
        "Design a complete Google Ads account structure for a global e-commerce brand, including Search, YouTube, and Discovery campaigns.",
      modules: ["Module 5"],
      difficulty: "Intermediate",
      duration: "2 weeks",
    },
    {
      id: 4,
      title: "Meta Ads Account Setup & Optimization",
      description:
        "Set up a Facebook Ads account from scratch, including campaigns, audiences, creatives, and ad copies, with a focus on ROAS calculation.",
      modules: ["Module 6"],
      difficulty: "Intermediate",
      duration: "3 weeks",
    },
    {
      id: 5,
      title: "LinkedIn Marketing Plan for B2B",
      description:
        "Prepare a detailed LinkedIn marketing plan for a B2B company (e.g., Edtech), utilizing various ad types and targeting options.",
      modules: ["Module 7"],
      difficulty: "Advanced",
      duration: "2 weeks",
    },
    {
      id: 6,
      title: "GA4 Implementation & Custom Reporting",
      description:
        "Set up Google Analytics 4 (GA4) for a business and create various useful, custom reports for data-driven decision-making.",
      modules: ["Module 8", "Module 10"],
      difficulty: "Intermediate",
      duration: "2 weeks",
    },
    {
      id: 7,
      title: "Conversion Rate Optimization (CRO) Loop",
      description:
        "Complete a full CRO loop: list 10 hypotheses, prioritize using the ICE framework, decide on test types, and execute 3 tests.",
      modules: ["Module 9"],
      difficulty: "Advanced",
      duration: "4 weeks",
    },
    {
      id: 8,
      title: "Marketing Automation with Zapier",
      description:
        "Build an email and WhatsApp marketing campaign and automate the workflow using Zapier or similar tools.",
      modules: ["Module 13"],
      difficulty: "Beginner",
      duration: "1 week",
    },
  ],

  // Testimonials & Case Studies
  testimonials: [
    {
      id: 1,
      type: "case-study",
      name: "Sara Kapoor",
      company: "Sara Fashion House (Mumbai)",
      businessType: "Women's Boutique",
      quote:
        "I had no clue about digital ads. After this course, I run my own Instagram campaigns and sell out my inventory weekly!",
      result: "300% increase in online sales within 2 months",
      details: [
        "Gained 5,000+ organic Instagram followers",
        "Converted 1 in 4 DM queries into purchases",
        "Learned: Instagram Reels marketing, Facebook Ads, WhatsApp Business automation, Website setup",
      ],
      image: "👩‍💼",
    },
    {
      id: 2,
      type: "case-study",
      name: "Adi Solanki",
      company: "RK Tiles & Infra",
      businessType: "Building Materials Supplier (B2B)",
      quote:
        "Now I get inquiries from architects directly—something I never thought possible for a vendor like me.",
      result: "Acquired 4 new institutional buyers in 45 days",
      details: [
        "Reduced dependency on offline referrals",
        "Ranked on Google Maps for 'construction tiles Mumbai'",
        "Implemented: LinkedIn page, InMail ads, Google My Business, Landing page",
      ],
      image: "👨‍💼",
    },
    {
      id: 3,
      type: "case-study",
      name: "Priya Jadhav",
      company: "Fit With Ayesha",
      businessType: "Personal Wellness Coaching",
      quote:
        "I thought marketing meant hiring an agency. This course taught me I could do it all with the right tools.",
      result: "Gained 1200+ Instagram leads in 3 months",
      details: [
        "Started charging ₹1,499/month for group programs",
        "Built a consistent personal brand across platforms",
        "Used: ChatGPT, Canva, Instagram Ads, Lead forms",
      ],
      image: "👩‍⚕️",
    },
    {
      id: 4,
      type: "testimonial",
      name: "Aarti Jain",
      company: "Urbanweaves Apparel",
      role: "Co-Founder",
      businessType: "E-commerce Business",
      quote:
        "Before taking this course, we relied heavily on marketplaces. Now, with SEO and Instagram ads, we've built our own loyal customer base.",
      result: "60% jump in website traffic within 3 months",
      image: "👩‍💼",
    },
    {
      id: 5,
      type: "testimonial",
      name: "Ramesh Patel",
      company: "Skyline Properties",
      role: "Marketing Head",
      businessType: "Real Estate Firm",
      quote:
        "Thanks to the Facebook ad strategies we learned, we now generate 30+ qualified property leads per week.",
      result: "Full control of marketing with qualified leads",
      image: "👨‍💼",
    },
    {
      id: 6,
      type: "testimonial",
      name: "Neha Mehta",
      company: "Spark Academy",
      role: "Founder",
      businessType: "Tuition & Coaching Class",
      quote:
        "Our batch size doubled within 2 months after implementing Google My Business optimization and Instagram engagement strategies.",
      result: "Doubled student base locally",
      image: "👩‍🏫",
    },
    {
      id: 7,
      type: "testimonial",
      name: "Nikhil Sharma",
      company: "Freelance Career Coach",
      role: "Career Coach",
      businessType: "Freelancer / Consultant",
      quote:
        "As a career coach, I used to rely on word-of-mouth. After applying the personal branding and LinkedIn techniques, I now get consistent client inquiries online.",
      result: "Consistent online client inquiries",
      image: "👨‍💼",
    },
    {
      id: 8,
      type: "testimonial",
      name: "Pooja Thakkar",
      company: "Digital Academy",
      role: "Co-Founder",
      businessType: "EdTech or Online Course Provider",
      quote:
        "We implemented funnel strategies and lead magnets taught in the course and our course signups went up by 200% in 6 months.",
      result: "200% increase in course signups in 6 months",
      image: "👩‍💼",
    },
  ],

  // Who Should Enroll
  targetAudience: [
    {
      id: 1,
      title: "Entrepreneurs & Business Owners",
      description: "Learn to grow your business online and attract more customers.",
      icon: "🚀",
      industries: [
        "E-commerce",
        "Retail",
        "Local Services",
        "Real Estate",
        "Restaurants",
      ],
    },
    {
      id: 2,
      title: "Freelancers & Creators",
      description:
        "Master digital tools to monetize your content and land global clients.",
      icon: "💻",
      industries: ["Consultants", "Content Creators", "Agencies", "Coaches"],
    },
    {
      id: 3,
      title: "Marketing Professionals",
      description:
        "Upskill with the latest digital marketing strategies and AI tools.",
      icon: "📊",
      industries: ["Marketing Teams", "Digital Agencies", "In-house Teams"],
    },
    {
      id: 4,
      title: "Startup Founders",
      description:
        "Build a strong digital presence and acquire customers efficiently.",
      icon: "🎯",
      industries: ["Tech Startups", "SaaS", "EdTech", "FinTech"],
    },
  ],

  // Industry Applications
  industryApplications: [
    {
      id: 1,
      industry: "Retail & E-commerce",
      application:
        "Run targeted ads, improve product SEO, leverage influencer marketing, and create seasonal campaigns.",
      benefit:
        "Drives traffic, increases sales, and improves product visibility on platforms like Google, Facebook, and Instagram.",
    },
    {
      id: 2,
      industry: "Local Service-Based Businesses",
      application:
        "Google My Business optimization, local SEO, WhatsApp promotions, customer reviews.",
      benefit: "Increases bookings and walk-ins from local searchers.",
    },
    {
      id: 3,
      industry: "Real Estate Agencies",
      application:
        "Facebook lead ads, YouTube property walkthroughs, Google Ads for keywords like 'flats in Mira Road'.",
      benefit:
        "Generates verified buyer/seller leads and builds trust through social proof.",
    },
    {
      id: 4,
      industry: "Educational Institutions & EdTech Startups",
      application:
        "SEO blogs, Instagram reels, webinars, YouTube videos, lead magnets.",
      benefit:
        "Attracts student enrollment and increases course signups through brand awareness.",
    },
    {
      id: 5,
      industry: "Healthcare & Wellness Providers",
      application:
        "Informational blogs, patient testimonials, Google Ads, Instagram Q&As.",
      benefit:
        "Builds credibility and draws patients through trust-driven digital presence.",
    },
    {
      id: 6,
      industry: "Restaurants, Cafes & Cloud Kitchens",
      application:
        "Zomato/Swiggy marketing, Instagram posts, influencer tastings, Google reviews.",
      benefit:
        "Encourages online orders and in-person visits through social engagement.",
    },
    {
      id: 7,
      industry: "Freelancers & Consultants",
      application:
        "LinkedIn presence, portfolio websites, client testimonials, Instagram promotions.",
      benefit: "Builds personal brand and attracts quality clients.",
    },
    {
      id: 8,
      industry: "Startups & Small-Scale Manufacturers",
      application:
        "Instagram shops, Shopify SEO, influencer tie-ups, email marketing.",
      benefit: "Boosts D2C (Direct-to-Consumer) sales and helps reach niche markets.",
    },
    {
      id: 9,
      industry: "Tourism & Travel Operators",
      application:
        "Travel blogs, YouTube vlogs, paid ads during peak seasons, remarketing.",
      benefit: "Helps secure tour bookings and stand out in a competitive space.",
    },
    {
      id: 10,
      industry: "Event Planners & Wedding Vendors",
      application:
        "Pinterest marketing, reels showcasing past events, Instagram paid promotions.",
      benefit: "Builds visual credibility and generates bridal/family event leads.",
    },
    {
      id: 11,
      industry: "NGOs and Social Enterprises",
      application:
        "Storytelling through content marketing, email drives, crowdfunding campaigns.",
      benefit:
        "Raises awareness, drives donations, and finds volunteers.",
    },
    {
      id: 12,
      industry: "Coaching Centers & Tuition Classes",
      application:
        "Local SEO, YouTube demo lectures, testimonials, Google reviews.",
      benefit:
        "Attracts local students and builds authority through online presence.",
    },
  ],

  // Tools & Technologies
  tools: [
    {
      category: "SEO & Analytics",
      items: [
        { name: "SEMrush", icon: "🔍" },
        { name: "Ahrefs", icon: "🔗" },
        { name: "Google Insights", icon: "📊" },
        { name: "GA4 (Google Analytics)", icon: "📈" },
        { name: "Microsoft Clarity", icon: "👁️" },
        { name: "Hotjar", icon: "🔥" },
      ],
    },
    {
      category: "AI & Content Creation",
      items: [
        { name: "ChatGPT", icon: "🤖" },
        { name: "DeepSeek", icon: "🧠" },
        { name: "Grok", icon: "⚡" },
      ],
    },
    {
      category: "Advertising Platforms",
      items: [
        { name: "Meta (Facebook/Instagram)", icon: "👍" },
        { name: "Google Ads", icon: "🔴" },
        { name: "LinkedIn Ads", icon: "💼" },
      ],
    },
    {
      category: "Marketing Automation",
      items: [
        { name: "RevealBot", icon: "🤖" },
        { name: "Madgicx", icon: "✨" },
        { name: "Zapier", icon: "⚙️" },
      ],
    },
    {
      category: "Data & Visualization",
      items: [
        { name: "Data Studio (Looker)", icon: "📊" },
        { name: "Google Calendar", icon: "📅" },
      ],
    },
  ],

  // Learning Path (8 Steps)
  learningPath: [
    {
      step: 1,
      title: "Learn Through Case Studies",
      description:
        "Start with real-world case studies to understand how successful businesses apply digital marketing strategies.",
      icon: "📚",
    },
    {
      step: 2,
      title: "Undergo Hands-On Training",
      description:
        "Get practical, hands-on training with industry experts who share real-world knowledge from live projects.",
      icon: "🛠️",
    },
    {
      step: 3,
      title: "Live Projects",
      description:
        "Work on live projects that mirror real business challenges and scenarios you'll encounter in your career.",
      icon: "🎯",
    },
    {
      step: 4,
      title: "In-Class Assessment & Feedback",
      description:
        "Receive detailed feedback on your assignments and assessments to ensure continuous improvement.",
      icon: "✅",
    },
    {
      step: 5,
      title: "Perform Assignments",
      description:
        "Complete assignments that reinforce your learning and build a portfolio of work.",
      icon: "📝",
    },
    {
      step: 6,
      title: "Business Niche Based Consultation",
      description:
        "Get personalized consultation tailored to your specific business niche and challenges.",
      icon: "💬",
    },
    {
      step: 7,
      title: "Updates on Latest Trends & Tools",
      description:
        "Stay updated with the latest trends, tools, and technologies in digital marketing and AI.",
      icon: "📡",
    },
    {
      step: 8,
      title: "Business Specific Problem Solving",
      description:
        "Apply your learning to solve specific business problems and implement real strategies.",
      icon: "🚀",
    },
  ],

  // FAQs
  faqs: [
    {
      id: 1,
      question: "Who is this course specifically designed for?",
      answer:
        "This course is designed for business owners, entrepreneurs, freelancers, consultants, and anyone looking to master digital marketing and AI strategies to grow their business. No prior digital marketing experience is required.",
    },
    {
      id: 2,
      question: "What is the duration and time commitment for the program?",
      answer:
        "The program is a 3-month cohort program requiring 6 hours per week commitment, totaling 40-50 learning hours. You can attend sessions in our Learning Space or online, whichever suits you best.",
    },
    {
      id: 3,
      question: "What is the learning format?",
      answer:
        "We offer a hybrid Learning Space + Online training pattern. Trainers conduct live sessions from our Learning Spaces, which are live-streamed for online participants. All sessions are recorded for later viewing.",
    },
    {
      id: 4,
      question: "Do I need prior digital marketing experience?",
      answer:
        "No pre-requisite is required. Whether you're a complete beginner or have some experience, you can choose between Core or Advanced modules based on your current expertise level.",
    },
    {
      id: 5,
      question: "What kind of support or consultation is provided?",
      answer:
        "We provide 1:1 doubt-solving sessions and lifetime consultation. Whenever you need help, our team is just a call away. We also offer business niche-based and specific problem-solving consultation.",
    },
    {
      id: 6,
      question: "What tools and technologies will I master?",
      answer:
        "You'll learn industry-standard tools including SEMrush, Ahrefs, ChatGPT, GA4, Meta Ads, Google Ads, LinkedIn Ads, Data Studio, and many more. All tools are selected based on current industry needs.",
    },
    {
      id: 7,
      question: "What certifications will I receive?",
      answer:
        "Upon completion, you'll receive internationally recognized certifications in Digital Marketing, Digital Analytics, and Social Media Specialist.",
    },
    {
      id: 8,
      question: "How will this course help my business?",
      answer:
        "Based on our case studies, students have achieved 300% increase in online sales, 60% jump in website traffic, and significant lead generation improvements. The course teaches strategies specifically tailored to your business niche.",
    },
  ],

  // Contact Information
  contact: {
    phone: ["+91 788-83-83-788", "+91 84-889-889-84", "+91 806-27-85-870"],
    email: "contact@cinutedigital.com",
    website: "www.cinutedigital.com",
    address: {
      headOffice:
        "Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai, Maharashtra 401107",
      studyCenter:
        "SHOP NO 7, Laxmi palace, opposite Vidhyavardhini Degree Engineering College, Gurunanak Nagar, Vasai West, Maharashtra 401202",
    },
  },

  // SEO Metadata
  seo: {
    title:
      "Master Digital Marketing & AI for Business Owners | 10X Your Growth - Cinute Digital",
    description:
      "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners. Learn SEO, paid ads (Google/Meta), CRO, and marketing automation to 10X your business.",
    keywords: [
      "Digital Marketing for Business Owners",
      "AI for Business Growth",
      "Digital Marketing Course",
      "SEO for Business",
      "Facebook Ads Training",
      "Google Ads Course",
      "Marketing Automation",
      "Business Growth Strategy",
      "Digital Marketing Training",
      "AI Marketing Tools",
    ],
  },
};

export type CourseData = typeof courseData;

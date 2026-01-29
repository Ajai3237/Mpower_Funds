import { FaArrowRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import { icons } from "./icons";
import { images } from "./images";
import { BsChatLeftText } from "react-icons/bs";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";

export const llcData = {
  menu: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blogs" },
    { name: "Partner with us", path: "/partner" },
    { name: "Contact", path: "/contact" },
  ],

  navLast: { name: "Call Us", number: "+18773863006" },

  navLogo: icons.navLogo,
  flag: icons.flag,

  FooterData: {
    // copyrite: "©2025 Mpowerfunds. All rights reserved.",
    disclaimer:
      "Disclaimer: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    footerLogo: icons.footerLogo,
    subTitle: "Pre-Approved for funding in 90 seconds with our AI platform.",
    socialLink: [
      {
        path: "https://www.facebook.com/profile.php?id=61577156846044",
        icon: FaFacebookF,
      },
      { path: "https://www.instagram.com/mpowerfunds/", icon: FaInstagram },
      {
        path: "https://www.linkedin.com/company/mpowerfunds-llc/",
        icon: FaLinkedinIn,
      },
    ],
    quickLinks: [
      { path: "/about", name: "about" },
      { path: "/help", name: "Help Center" },
      { path: "/blogs", name: "blogs" },
      { path: "/partner", name: "partner with us" },
    ],
    legal: [
      { path: "/privacy", name: "Privacy policy" },
      { path: "/terms", name: "Terms & conditions" },
      { path: "/refund-policy", name: "Refund policy" },
    ],
    address: {
      address:
        "2219 Rimland Drive, Suite 301, Bellingham, Washington 98226 USA",
      tel: "+1-877-3863-006",
      mail: "info@mpowerfunds.com",
    },
  },

  HompageData: {
    banner: {
      heading: "Pre-Approved for funding in 90 seconds with our AI platform.",
      description:
        "Mpower Funds helps small businesses access the capital they need to grow. We connect you with trusted lenders, flexible funding options, and fast approvals — so you can focus on running your business, not worrying about cash flow.",
      button: [
        {
          label: "Book Your Free Funding Call",
          path: "https://calendly.com/mpowerfunds-support",
          icon: FaArrowRight,
        },
        { label: "Free AI Coach", path: "", icon: FaArrowRight },
      ],
      bannerSlides: [
        { label: "0% Interest Credit Cards", image: images.loanCard3 },
        { label: "Business Term Loan", image: images.loanCard4 },
        { label: "SBA Loans", image: images.loanCard5 },
        { label: "Personal Term Loan", image: images.loanCard1 },
        { label: "Business Bridge Loan", image: images.loanCard2 },
        //repeat
        { label: "0% Interest Credit Cards", image: images.loanCard3 },
        { label: "Business Term Loan", image: images.loanCard4 },
        { label: "SBA Loans", image: images.loanCard5 },
        { label: "Personal Term Loan", image: images.loanCard1 },
        { label: "Business Bridge Loan", image: images.loanCard2 },
      ],
      aiCoach: {
        heading: "Get Personalized Guidance from Our AI Business Coach",
        points: [
          "Instant guidance on MPower loan products",
          "Real-time support for client conversations",
          "Smart recommendations tailored to your deals",
          " Ready in 24 hours — no setup, no cost, Free 24x7 - 365",
        ],
        freeStamp: images.freeStamp,
        description:
          "Share a few basic details, and our intelligent assistant will guide you with the best options tailored to your needs",
        form: [
          {
            label: "First Name",
            name: "first_name",
            type: "text",
            placeholder: "",
          },
          {
            label: "Last Name",
            name: "last_name",
            type: "text",
            placeholder: "",
          },
          { label: "Email", name: "email", type: "email", placeholder: "" },
          {
            label: "Phone No.",
            name: "phone",
            type: "number",
            placeholder: "",
          },
          {
            label: "Message.",
            name: "message",
            type: "textarea",
            placeholder: "",
          },
        ],
        aiLink:
          "https://services.leadconnectorhq.com/hooks/bd6KnSJLtqxtVU0Pxy6I/webhook-trigger/xl61MXfFPznJATj7hHk6",
      },
    },
    topServices: { heading: "Explore our key services", button: "Explore All" },

    servisesSlider: [
      {
        heading: "Pre-launch Funding",
        services: [
          {
            title: "0% Credit Card",
            description:
              "Access interest-free funds for a set period to manage early expenses. Ideal for short - term cash flow without paying high interest. ",
            image: images.card,
          },
          {
            title: "Unsecured Term Loan",
            description:
              "Borrow a fixed amount with no collateral required. Flexible terms for startups that need predictable payments.",
            image: images.slider2,
          },
          {
            title: "Home Equity Line of Credit",
            description:
              "Tap into your home’s equity to fund your business at lower rates. Borrow as needed and pay interest only on what you use.",
            image: images.slider3,
          },
        ],
      },
      {
        heading: "Business Funding",
        services: [
          {
            title: "Business Term Loan",
            description:
              "Borrow a fixed amount with predictable payments over time. Great for larger investments like expansion, equipment, or renovations.",
            image: images.btln,
          },
          {
            title: "SBA",
            description:
              "Government-backed loans with competitive rates and longer terms. Designed to help small businesses grow with lower risk. ",
            image: images.slider1,
          },
          {
            title: "Merchant Cash Advance ",
            description:
              "Grow your business with Merchant Cash Advance - repay as you earn!",
            image: images.prsnlLn,
          },
          {
            title: "0% Business Credit Card",
            description:
              "Use an interest-free period to cover everyday business expenses. Manage cash flow while building your business credit history.",
            image: images.othrLn,
          },
          {
            title: "Business Line of Credit",
            description:
              "Get flexible access to funds when you need them. Only pay interest on what you use — ideal for working capital.",
            image: images.loc,
          },
          {
            title: "Short Term Business Loan",
            description:
              "Fast funding with shorter repayment terms. Perfect for immediate needs like inventory, payroll, or emergencies.",
            image: images.bsln,
          },
        ],
      },
    ],
    joineUs: {
      heading: "Mpower Guarantee : We Don’t Get Paid, Until You Get Funded",
      description:
        "Get fast, flexible business funding solutions. With our AI-driven platform, you can get pre-approved for funding in just 90 seconds—simple, quick, and stress-free.",
    },
    joinusSlider: [
      {
        text: "mpowerfunds.ca made finding the right loan for my retail store so simple. I had three options within hours and secured funding the next day. Highly recommend!",
        image: images.prsn1,
        name: "Thomas C",
        role: "Toronto",
      },
      {
        text: "Compared to dealing with banks, this was a breeze. Quick, clear, and no pushy sales tactics — just the best deal for my business.",
        image: images.prsn2,
        name: "T Crook",
        role: "Vancouver",
      },
      {
        text: "I was surprised how simple it was to get a loan online with Mpower Funds. The process was smooth, quick, and stress-free!",
        image: images.prsn3,
        name: "Vincent K.",
        role: "small Business Owner",
      },
      {
        text: "When my business needed quick working capital, Mpower Funds’ business financing gave me the flexibility I needed. Great rates and fast funding!",
        image: images.prsn1,
        name: "Jose M.",
        role: "home user",
      },
      {
        text: "Mpower Funds helped me get a small personal loan fast. The approval was easy and the support team guided me through every step!",
        image: images.prsn2,
        name: "Aisha L.",
        role: "college Student",
      },
    ],
    setsApart: {
      heading: "What sets us apart",
      description:
        "When it comes to funding your business, we know you have choices. Here's why smart business owners trust MPowerFunds over other direct lenders:",
      buttonText: "Explore All",
      setsPoint: [
        {
          icon: icons.frame1,
          title: "Best Funding Guaranteed",
          text: "Get the best small business funding in the US — guaranteed. Compare top lenders, flexible rates, and fast approvals. MPowerFunds connects you to trusted financing options that fit your unique business needs.",
        },
        {
          icon: icons.frame2,
          title: "No Credit Impact",
          text: "Check your business loan eligibility with zero credit score impact. MPowerFunds uses a soft credit check, ensuring your credit stays safe while exploring the best business loan options available in the US.",
        },
        {
          icon: icons.frame3,
          title: "Credit Education",
          text: "Discover how to build and maintain strong business credit. MPowerFunds provides clear resources to understand credit scores, loan terms, and borrowing smartly. Make informed decisions and grow your business with confidence and transparency.",
        },
        {
          icon: icons.frame8,
          title: "All US States",
          text: "MPowerFunds offers business loans and merchant cash advances across all US provinces. No matter where you operate, access trusted lenders, fast approvals, and flexible funding options designed for small businesses in US.",
        },
        {
          icon: icons.frame5,
          title: "Savings Strategies",
          text: "Maximize your business savings with smart funding strategies. MPowerFunds helps you compare low-interest loans and repayment plans, ensuring you keep more cash on hand while growing your company confidently in the US.",
        },
      ],
      backPic: images.setsApart,
      backPicSmall: images.setsApart1,
    },
    steps: {
      heading: "Access your funding in 3 simple steps",
      description: "No Negative Impact to Your Credit to See If You Qualify",
      steps: [
        {
          title: "Apply Online ",
          step: "Check your eligibility in minutes with our simple, secure application form.",
        },
        {
          title: "Get Approved ",
          step: "Fast review and approval, often within hours.",
        },
        {
          title: "Receive Funds ",
          step: "99% of all type of funds are sent just 5 business days after signing.",
        },
      ],
      buttonText: "Apply Now",
      chatBoxData: [
        {
          icon: images.cht1,
          name: "Customer",
          text: "I want to get a loan for my business",
        },
        {
          icon: images.cht2,
          name: "Agent",
          text: "Hey! We’d love to help you get your loan.",
        },
      ],
      chatBoxLogo: images.mpowerfunds,
    },
    getInTouch: {
      heading: "Get your own personal consultation",
      description:
        "Connect with our trusted loan experts for a free, personalized consultation. Discover the best business loan options in the US. MPowerFunds helps you choose smarter funding solutions for your business growth.",
      customer: [
        { number: "3M", label: "Small businesses pre-approved for funding" },
        { number: "100+", label: "Funding Partners" },
      ],
      formHead: "Get in touch",

      formData: [
        {
          type: "text",
          name: "entry.13573750",
          placeholder: "First Name",
          icon: icons.user,
        },
        {
          type: "text",
          name: "entry.209386749",
          placeholder: "Last Name",
          icon: icons.user,
        },
        {
          type: "email",
          name: "entry.1135921128",
          placeholder: "Email",
          icon: icons.email,
        },
        {
          type: "number",
          name: "entry.1039033701",
          placeholder: "Mobile",
          icon: icons.phone,
        },
      ],


      formApi:
        "https://docs.google.com/forms/d/e/1FAIpQLSd_CHv0a-wEJMdfth9R7PyKG0VAbbMOorzegX4j677zkJA5yA/formResponse",


      formBtn: "Submit",
    },
    loanCalculator: {
      heading: "Calculate and confirm your loans",
      calCulatorText: "Loan Calculator",
      calculetorBtnText: "Loan Term",
      loanTerms: ["Yearly", "Monthly", "Weekly"],
      sliderConfigs: {
        Yearly: {
          loanAmount: {
            label: "Loan Amount",
            min: 1000,
            max: 100000,
            step: 1000,
            unit: "$",
          },
          interestRate: {
            label: "Interest Rate",
            min: 6,
            max: 15,
            step: 0.1,
            unit: "%",
          },
          loanDuration: {
            label: "Loan Duration",
            min: 1,
            max: 15,
            step: 1,
            unit: "Y",
            name: "Year(s)",
          },
        },
        Monthly: {
          loanAmount: {
            label: "Loan Amount",
            min: 1000,
            max: 50000,
            step: 500,
            unit: "$",
          },
          interestRate: {
            label: "Interest Rate",
            min: 10,
            max: 20,
            step: 0.1,
            unit: "%",
          },
          loanDuration: {
            label: "Loan Duration",
            min: 1,
            max: 12,
            step: 1,
            unit: "M",
            name: "Month(s)",
          },
        },
        Weekly: {
          loanAmount: {
            label: "Loan Amount",
            min: 1000,
            max: 10000,
            step: 100,
            unit: "$",
          },
          interestRate: {
            label: "Interest Rate",
            min: 15,
            max: 30,
            step: 0.1,
            unit: "%",
          },
          loanDuration: {
            label: "Loan Duration",
            min: 4,
            max: 52,
            step: 1,
            unit: "W",
            name: "Week(s)",
          },
        },
      },
      legandText: ["Principal Amount", "Interest Payable"],
      calculationText: [
        "EMI Amount (Principal + Interest)",
        "Interest Payable",
        "Loan Duration",
        "Your EMI Amount",
      ],
      unit: "$",
      buttonText: "Apply Now",
    },
  },

  newsData: {
    heading: "Mpower Daily",
    newsButton: "Explore All",
    path: "/blogs",
    newsData: [
      {
        image: images.blogImage,
        blogData: "blogTetails1",
        id: "mpfus001a",
        title:
          "How to Get Approved for a Business Loan in the US: 5 Expert Tips",
        news: "Securing a business loan can be one of the most transformative decisions for entrepreneurs across the United States. Whether you’re launching a startup, expanding an existing venture, or bridging short-term cash flow gaps, the process of getting loan approval requires preparation, strategy, and credibility. ",
      },
      {
        image: images.news2,
        title: "Best Low-Interest Small Business Loans in 2025: US Guide",
        news: "Compare the most competitive business loan rates this year and learn how to qualify for better terms.",
      },
      {
        image: images.news3,
        title:
          "Merchant Cash Advance vs. Business Line of Credit: What’s Right for You?",
        news: "Understand the pros and cons of merchant cash advances and lines of credit to make smart funding choices.",
      },
      // {
      //     image: images.news1,
      //     title: "The Top Robinhood lternatives in Canada",
      //     news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc..."
      // },
      // {
      //     image: images.news2,
      //     title: "Saskatchewan SAID Payment Dates in 2025",
      //     news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc..."
      // },
      // {
      //     image: images.news3,
      //     title: "Canada FPT Deposit Payment Dates 2025",
      //     news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc..."
      // },
    ],
  },

  aboutPageData: {
    banner: {
      heading: "Believing and achieving different",
      description:
        "At Mpower Funds, we believe in doing things differently — by putting people first. Our mission is to empower businesses and individuals by providing a seamless, expert-driven platform that simplifies capital acquisition, fosters growth, and meets evolving financial needs with precision. With thousands of loyal customers and expert financial consultants, we’re here to empower you to achieve more, grow faster, and succeed with confidence.",
      data: [
        { number: "3M", label: "Small businesses pre-approved for funding" },
        { number: "100+", label: "Funding Partners" },
      ],
      buttonText: "Apply Now",
      image: images.aboutBanner,
    },
    ourValues: {
      heading: "Our values",
      description:
        "Our values are built on transparency, trust, and growth. We connect businesses and individuals to funding with clear guidance, efficient solutions, and expert support. We believe in making capital accessible and empowering success with integrity.",
      buttonText: "Free AI Coach",
      setsPoint: [
        {
          icon: icons.frame1,
          title: "Best Funding Guaranteed",
          text: "Get the best small business funding in the US — guaranteed. Compare top lenders, flexible rates, and fast approvals. MPowerFunds connects you to trusted financing options that fit your unique business needs.",
        },
        {
          icon: icons.frame2,
          title: "No Credit Impact",
          text: "Check your business loan eligibility with zero credit score impact. MPowerFunds uses a soft credit check, ensuring your credit stays safe while exploring the best business loan options available in the US.",
        },
        {
          icon: icons.frame3,
          title: "Credit Education",
          text: "Discover how to build and maintain strong business credit. MPowerFunds provides clear resources to understand credit scores, loan terms, and borrowing smartly. Make informed decisions and grow your business with confidence and transparency.",
        },
        {
          icon: icons.frame8,
          title: "All US States",
          text: "MPowerFunds offers business loans and merchant cash advances across all US States. No matter where you operate, access trusted lenders, fast approvals, and flexible funding options designed for small businesses in US.",
        },
        {
          icon: icons.frame5,
          title: "Savings Strategies",
          text: "Maximize your business savings with smart funding strategies. MPowerFunds helps you compare low-interest loans and repayment plans, ensuring you keep more cash on hand while growing your company confidently in the US.",
        },
      ],
      backPic: images.aboutValueBackPic,
      // backPicSmall: images.setsApart1,
    },
    history: {
      heading: "Get your own personal consultation",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer.",
      historySlider: [
        {
          year: "1960",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "1970",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "1980",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "1990",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "2000",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "2010",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "2020",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "2030",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          year: "2040",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
    },
    ourTeam: {
      heading: "Our professional team",
      team: [
        {
          image: images.team1,
          name: "Joan Johnson",
          role: "Chief Technical Officer",
        },
        {
          image: images.team2,
          name: "Donnie Southern",
          role: "Head Of Operation",
        },
        {
          image: images.team5,
          name: "Alexandra Southern",
          role: "Loan Consultant",
        },
        { image: images.team4, name: "Jessica White", role: "Credit Manager" },
        { image: images.team3, name: "Daniel Finch", role: "PR Manager" },
      ],
    },
    success: {
      heading: "We Set Our Customers up for Success",
      subheading:
        "From fast approvals to flexible options, we’re here to help you grow confidently. Our AI-powered platform keeps funding simple, so you can stay focused on what really matters.",
      points: [
        { icon: icons.success1, text: "Easily access credit reports and data" },
        { icon: icons.success2, text: "90-Second automated underwriting" },
        { icon: icons.success3, text: "Click to send contracts" },
        { icon: icons.success4, text: "Automated revolving funding plans." },
        { icon: icons.success5, text: "AI analysis" },
        { icon: icons.success6, text: "Automated term loan platform" },
        { icon: icons.success7, text: "Text/email to play merchant" },
      ],
    },
    aiCoach: {
      heading: "Get Personalized Guidance from Our AI Business Coach",
      points: [
        "Instant guidance on MPower loan products",
        "Real-time support for client conversations",
        "Smart recommendations tailored to your deals",
        " Ready in 24 hours — no setup, no cost, Free 24x7 - 365",
      ],
      freeStamp: images.freeStamp,
      description:
        "Share a few basic details, and our intelligent assistant will guide you with the best options tailored to your needs",
      form: [
        {
          label: "First Name",
          name: "first_name",
          type: "text",
          placeholder: "",
        },
        {
          label: "Last Name",
          name: "last_name",
          type: "text",
          placeholder: "",
        },
        { label: "Email", name: "email", type: "email", placeholder: "" },
        { label: "Phone No.", name: "phone", type: "number", placeholder: "" },
        {
          label: "Message.",
          name: "message",
          type: "textarea",
          placeholder: "",
        },
      ],
      aiLink:
        "https://services.leadconnectorhq.com/hooks/bd6KnSJLtqxtVU0Pxy6I/webhook-trigger/xl61MXfFPznJATj7hHk6",
    },
  },

  loanPageData: {
    banner: {
      heading: "A personal loan for your personal needs",
      description:
        "You’re only 90 seconds away from knowing your best loan offers. Our AI driven fintech platform finds what’s best for you—no hidden steps, no guesswork.",
      buttonText: "Check Your Rate",
      rateValues: [
        { value: 1, label: " < 2000" },
        { value: 2, label: "2000 - 5000" },
        { value: 3, label: "5000 - 10000" },
        { value: 4, label: "10000 - 50000" },
        // { value: 1, label: "" },
      ],
      image: images.loanBannr,
    },
    banner2: [
      { icon: icons.loaIc1, label: "Borrow from $2,000 to $50,000" },
      { icon: icons.loaIc2, label: "Get your funds as soon as business day" },
      { icon: icons.loaIc3, label: "No prepayment penalties" },
    ],
    questionAnswear: {
      question: "Q: What makes a personal loan through Mpower different?",
      answear: "A: Your Experience",
      description:
        "Mpower Fund is the FIRST peer-to-peer personal loan lending platform in the US and Canada. This means that a personal loan through us comes from traditional investors and a unique group of real people choosing to invest in YOU.",
      mainImg: images.loanPic,
      leftImg: images.loanPic1,
      rightImg: images.loanPic2,
    },
    loanPoints: {
      heading: "We have got best personal loan for you",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
      buttonText: "Explore All",
      setsPoint: [
        {
          icon: icons.frame1,
          title: "Best Funding Guaranteed",
          text: "Get the best small business funding in the US — guaranteed. Compare top lenders, flexible rates, and fast approvals. MPowerFunds connects you to trusted financing options that fit your unique business needs.",
        },
        {
          icon: icons.frame2,
          title: "No Credit Impact",
          text: "Check your business loan eligibility with zero credit score impact. MPowerFunds uses a soft credit check, ensuring your credit stays safe while exploring the best business loan options available in the US.",
        },
        {
          icon: icons.frame3,
          title: "Credit Education",
          text: "Discover how to build and maintain strong business credit. MPowerFunds provides clear resources to understand credit scores, loan terms, and borrowing smartly. Make informed decisions and grow your business with confidence and transparency.",
        },
        {
          icon: icons.frame8,
          title: "All US States",
          text: "MPowerFunds offers business loans and merchant cash advances across all US states. No matter where you operate, access trusted lenders, fast approvals, and flexible funding options designed for small businesses in US.",
        },
        {
          icon: icons.frame5,
          title: "Savings Strategies",
          text: "Maximize your business savings with smart funding strategies. MPowerFunds helps you compare low-interest loans and repayment plans, ensuring you keep more cash on hand while growing your company confidently in the US.",
        },
      ],
      backPic: images.lnBck,
      backPic1: images.lnBck1,
      backPicSmall: images.lnBck2,
    },
    joinUs: {
      heading: "Mpower Guarantee : We Don’t Get Paid, Until You Get Funded",
      description:
        "Get fast, flexible business funding solutions. With our AI-driven platform, you can get pre-approved for funding in just 90 seconds—simple, quick, and stress-free.",
      joinusSlider: [
        {
          text: "mpowerfunds.ca made finding the right loan for my retail store so simple. I had three options within hours and secured funding the next day. Highly recommend!",
          image: images.prsn1,
          name: "Thomas C",
          role: "Toronto",
        },
        {
          text: "Compared to dealing with banks, this was a breeze. Quick, clear, and no pushy sales tactics — just the best deal for my business.",
          image: images.prsn2,
          name: "T Crook",
          role: "Vancouver",
        },
        {
          text: "I was surprised how simple it was to get a loan online with Mpower Funds. The process was smooth, quick, and stress-free!",
          image: images.prsn3,
          name: "Vincent K.",
          role: "small Business Owner",
        },
        {
          text: "When my business needed quick working capital, Mpower Funds’ business financing gave me the flexibility I needed. Great rates and fast funding!",
          image: images.prsn1,
          name: "Jose M.",
          role: "home user",
        },
        {
          text: "Mpower Funds helped me get a small personal loan fast. The approval was easy and the support team guided me through every step!",
          image: images.prsn2,
          name: "Aisha L.",
          role: "college Student",
        },
      ],
    },
    steps: {
      heading: "Access your funding in 3 simple steps",
      description: "No Negative Impact to Your Credit to See If You Qualify",
      steps: [
        {
          title: "Apply Online ",
          step: "Check your eligibility in minutes with our simple, secure application form.",
        },
        {
          title: "Get Approved ",
          step: "Fast review and approval, often within hours.",
        },
        {
          title: "Receive Funds ",
          step: "99% of all type of funds are sent just 5 business days after signing.",
        },
      ],
      buttonText: "Apply Now",
      chatBoxData: [
        {
          icon: images.cht1,
          name: "Customer",
          text: "I want to get a loan for my business",
        },
        {
          icon: images.cht2,
          name: "Agent",
          text: "Hey! We’d love to help you get your loan.",
        },
      ],
      chatBoxLogo: images.mpowerfunds,
    },
    loanFaq: {
      image: images.faqfrm,
      heading: "Questions? We’re here to help",
      description:
        "Got questions about your funding options or our process? Our team is ready to guide you every step of the way — reach out anytime!",
      qa: [
        {
          question: "What is Mpowerfunds?",
          answear:
            "Mpower is based on USA. MPower Funds LLC is a funding and financial empowerment firm dedicated to removing money as an obstacle for entrepreneurs. We connect businesses with the best funding opportunities to help them grow, innovate, and thrive.",
        },
        {
          question: "Is Mpowerfunds a lender or a loan marketplace?",
          answear:
            "MPower Funds is not a direct lender; it's a funding brokerage firm that works with multiple lenders to find the best financing options for its clients.We shop around to compare different funding sources and connect you with the most suitable loan or financial product based on your business needs, ensuring you get the best possible terms.",
        },
        {
          question: "What documents do I need to submit?",
          answear:
            "The document requirements are minimal. To get started, you'll need to submit an application form with basic information and business bank statements to initiate theprocess. ",
        },
        {
          question: "Can I apply with a low credit score?",
          answear:
            "Yes, you can apply with a low credit score. MPower Funds considers various factors beyond just your credit score, such as revenue and business stability, to determine your eligibility for funding.",
        },
        {
          question: "Will applying affect my credit score?",
          answear:
            "Yes, it may affect your credit score, but if you provide a recent credit report, we can request the lender to use it instead, so your score won't be impacted—though it's ultimately up to the lender.",
        },
      ],
    },
    checkLoan: {
      heading:
        "See what you can save with a personal loan through Mpower Funds",
      buttonText: "Check Your Rate",
      description: "Won’t affect your credit score",
    },
  },

  blogPage: {
    mainImg: images.blogPIc,
    bannerText: {
      tag: "Featured",
      text: "How to Get Approved for a Business Loan in the US: 5 Expert Tips",
      date: "October 10, 2025",
    },
    popularBlog: {
      heading: "Most Popular",
      popularNews: [
        {
          image: images.blogImage,
          blogData: "blogTetails1",
          id: "mpfus001a",
          title:
            "How to Get Approved for a Business Loan in the US: 5 Expert Tips",
          news: "Securing a business loan can be one of the most transformative decisions for entrepreneurs across the United States. Whether you’re launching a startup, expanding an existing venture, or bridging short-term cash flow gaps, the process of getting loan approval requires preparation, strategy, and credibility. ",
        },
        {
          image: images.news2,
          title: "Best Low-Interest Small Business Loans in 2025: US Guide",
          news: "Compare the most competitive business loan rates this year and learn how to qualify for better terms.",
        },
        {
          image: images.news3,
          title:
            "Merchant Cash Advance vs. Business Line of Credit: What’s Right for You?",
          news: "Understand the pros and cons of merchant cash advances and lines of credit to make smart funding choices.",
        },
      ],
    },
    checkLoan: {
      heading: "When The Bank Says No, Mpower Funds Says Yes.",
      buttonText: "Get Pre-Approved",
      description: "Won’t affect your credit score",
    },
    loansOnBlogPersonal: {
      heading: "Personal Loans",
      buttonText: "Explore All",
      personalLoans: [
        {
          name: "Personal Term Loan",
          mainImage: images.personalLoan,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "0% Interest Credit Cards",
          mainImage: images.blogPIc,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "SBA Loan",
          mainImage: images.personalLoan,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
      ],
    },
    loansOnBlogBusiness: {
      heading: "Business Loans",
      buttonText: "Explore All",
      personalLoans: [
        {
          name: "Line of Credit",
          mainImage: images.personalLoan,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "Term Loan",
          mainImage: images.blogPIc,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "Bridge Loan",
          mainImage: images.personalLoan,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "Equity Loan",
          mainImage: images.blogPIc,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "Cash Advance",
          mainImage: images.personalLoan,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
        {
          name: "SBA Loans",
          mainImage: images.blogPIc,
          tag: "Featured",
          heading:
            "It has survived not only five centuries, but also the leap into electronic typesetting",
          date: "August 20, 2022",
          blogs: [
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news1,
              title: "The Top Robinhood lternatives in Canada ",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news2,
              title: "Saskatchewan SAID Payment Dates in 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
            {
              image: images.news3,
              title: "Canada FPT Deposit Payment Dates 2025",
              news: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc...",
            },
          ],
          moreButton: "Explore All",
        },
      ],
    },
  },

  blogTetails: {
    // sidebar: {
    //   heading: "Table  of Contents",
    //   tableOfCondent: [
    //     "Introduction",
    //     "Definitions",
    //     "Information Collection and Use",
    //     "Types of Data Collected",
    //     "Tracking Cookies Data",
    //     "Introduction",
    //     "Definitions",
    //     "Information Collection and Use",
    //     "Types of Data Collected",
    //     "Tracking Cookies Data",
    //     "Introduction",
    //     "Definitions",
    //     "Information Collection and Use",
    //     "Types of Data Collected",
    //     "Tracking Cookies Data",
    //   ],
    //   topicHeading: "Topics",
    //   topics: [
    //     "#QuickLoan",
    //     "#safeloansecurity",
    //     "#eduloan",
    //     "personaldebt",
    //     "malware",
    //     "Android",
    //     "security",
    //     "Loan Security",
    //     "crime",
    //     "Cyberespionage ",
    //     "fakeloan",
    //     "Data breach",
    //     "defense",
    //     "Email malware",
    //     "#Business",
    //   ],
    // },
    postHeading: "Related Posts",
    relatedPost: [
      {
        image: images.blogImage,
        blogData: "blogTetails1",
        id: "mpfus001a",
        title: "How to Get Approved for a Business Loan in US: 5 Expert Tips",
        news: "Securing a business loan can be one of the most transformative decisions for entrepreneurs across the United States. Whether you’re launching a startup, expanding an existing venture, or bridging short-term cash flow gaps, the process of getting loan approval requires preparation, strategy, and credibility. ",
      },
      {
        image: images.news2,
        title: "Best Low-Interest Small Business Loans in 2025: US Guide",
        news: "Compare the most competitive business loan rates this year and learn how to qualify for better terms.",
      },
      {
        image: images.news3,
        title:
          "Merchant Cash Advance vs. Business Line of Credit: What’s Right for You?",
        news: "Understand the pros and cons of merchant cash advances and lines of credit to make smart funding choices.",
      },
    ],
  },

  contactPage: {
    heading: "Contact Mpower Funds",
    description:
      "We love taking questions. If you’re looking for something specific, we may have already answered it in our Help Center. Otherwise, send us your question by filling out the form below.",
    form: [
      {
        label: "First Name",
        name: "entry.524068504",
        type: "text",
      },
      {
        label: "Last Name",
        name: "entry.2096281041",
        type: "text",
      },
      {
        label: "Email",
        name: "entry.1384103743",
        type: "email",
      },
      {
        label: "Phone Number",
        name: "entry.1872181796",
        type: "number",
      },
      {
        label: "Message",
        name: "entry.1633726354",
        type: "textarea",
      },
    ],


    formApi:
      "https://docs.google.com/forms/d/e/1FAIpQLSfOFOTDZxkZaNbTB2cVKVJ3gzASZf7cN2Mm69NdJfor1rxaMQ/formResponse"
    ,

    buttonText: "Submit",
    cotactAddress: {
      heading: "Customer care",
      addressBox: [
        {
          heading: "For any query",
          contact: [
            {
              as: "",
              type: "",
              icon: BsChatLeftText,
              label: "Chat Now",
              path: "/",
            },
            {
              as: "link",
              type: "tel",
              icon: AiOutlineMobile,
              label: "+1-877-3863-006",
              path: "18773863006",
            },
          ],
        },
        {
          heading: "House of operation",
          contact: [
            {
              as: "",
              type: "",
              icon: CiClock2,
              label: "9am - 8pm MST (24x7 Virtual Assistance)",
              path: "/",
            },
          ],
        },
        // {
        //   heading: "Funding related query",
        //   contact: [
        //     {
        //       as: "link",
        //       type: "email",
        //       icon: AiOutlineMail,
        //       label: "info@mpowerfunds.com",
        //       path: "info@mpowerfunds.com",
        //     },
        //   ],
        // },
        {
          heading: "General query",
          contact: [
            {
              as: "link",
              type: "email",
              icon: AiOutlineMail,
              label: "info@mpowerfunds.com",
              path: "info@mpowerfunds.com",
            },
          ],
        },
        // {
        //   heading: "Partner with us",
        //   contact: [
        //     {
        //       as: "link",
        //       type: "email",
        //       icon: AiOutlineMail,
        //       label: "info@mpowerfunds.com",
        //       path: "info@mpowerfunds.com",
        //     },
        //   ],
        // },
        {
          heading: "Still have questions?",
          contact: [
            {
              as: "link",
              type: "",
              icon: AiOutlineMail,
              label: "Help Center",
              path: "/help",
            },
          ],
        },
      ],
    },
    locationSection: {
      heading: "Locate us",
      description:
        "Find our office easily on the map below and drop by during business hours — we look forward to meeting you!",
      mapLocation:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.3344847808335!2d-122.44544792369946!3d48.77355017132075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485a47cde3fffff%3A0x81151e57034cfbf5!2s2219%20Rimland%20Dr%20Suite%20301%2C%20Bellingham%2C%20WA%2098226%2C%20USA!5e1!3m2!1sen!2sin!4v1769591148450!5m2!1sen!2sin"

    },
    contactFaq: {
      image: images.faqfrm,
      heading: "General FAQs",
      description:
        "Got questions about your funding options or our process? Our team is ready to guide you every step of the way — reach out anytime!",
      qa: [
        {
          question: "What is Mpowerfunds?",
          answear:
            "Mpower is based on USA. MPower Funds LLC is a funding and financial empowerment firm dedicated to removing money as an obstacle for entrepreneurs. We connect businesses with the best funding opportunities to help them grow, innovate, and thrive.",
        },
        {
          question: "Is Mpowerfunds a lender or a loan marketplace?",
          answear:
            "MPower Funds is not a direct lender; it's a funding brokerage firm that works with multiple lenders to find the best financing options for its clients.We shop around to compare different funding sources and connect you with the most suitable loan or financial product based on your business needs, ensuring you get the best possible terms.",
        },
        {
          question: "What documents do I need to submit?",
          answear:
            "The document requirements are minimal. To get started, you'll need to submit an application form with basic information and business bank statements to initiate theprocess. ",
        },
        {
          question: "Can I apply with a low credit score?",
          answear:
            "Yes, you can apply with a low credit score. MPower Funds considers various factors beyond just your credit score, such as revenue and business stability, to determine your eligibility for funding.",
        },
        {
          question: "Will applying affect my credit score?",
          answear:
            "Yes, it may affect your credit score, but if you provide a recent credit report, we can request the lender to use it instead, so your score won't be impacted—though it's ultimately up to the lender.",
        },
      ],
    },
  },

  helpCenter: {
    banner: {
      heading: "Mpower Funds Help Center",
      description: "Hello! How can we help?",
      searchPlaceHolder: "Search by keyword",
      image: images.helpBanner,
    },
    applyBox: [
      {
        heading: "I'm an existing customer",
        description:
          "Get help with your personal loan, HELOC, HELoan, investments, credit card and more.",
        buttonText: "Apply Now",
      },
      {
        heading: "I'm new to MPowerFund",
        description: "Here are some articles to help",
        buttonText: "Apply Now",
      },
    ],
    faq: {
      heading: "Frequently asked questions",
      faqBox: [
        {
          heading: "About Mpower Funds",
          questionAnswear: [
            // {
            //     question: "How fast can you give me an approval? ",
            //     answear: "We can get you approved as soon as you provide us with the required documents. If you can get the documents to me within the next 24 hours, we can get you approved within the next hour. So basically, once we have all the documents, it takes 60 minutes to get approved.",
            // },
            // {
            //     question: "How fast do I get the funds? ",
            //     answear: "We can get the funds in your bank account within 5 working days.",
            // },
            // {
            //     question: "Are you a broker or lender?",
            //     answear: "We are not a broker or a lender. We have aggregated on our platform, over a 100 funders, these funders are banks, credit unions, private investors etc. who provide funds to you. So you can look at us as the Air BNB of funding.",
            // },
            // {
            //     question: "Can you tell me approximately if I can get approved looking at my basic details? ",
            //     answear: "Yes, once you fill the application form, we can let you know your preapproval amount.",
            // },
            {
              question: "What is Mpower Funds?",
              answear:
                "Mpower Funds is a financial empowerment platform serving entrepreneurs and small businesses across the United States. We connect clients with over 100+ trusted lenders—banks, credit unions, and private investors—to unlock growth and innovation.",
            },
            {
              question: "Are you a lender or broker?",
              answear:
                "We’re neither a traditional lender nor a broker. Mpower Funds uses AI-powered matching to connect you with the right funding options based on your business profile.",
            },
            {
              question: "Is my information secure?",
              answear:
                "Absolutely. Your data is protected through secure protocols and shared only with vetted lending partners—with your consent.",
            },
            {
              question: "Why do you need my Social Security Number (SSN)?",
              answear:
                "We don’t request it directly. Some lending partners may require it for verification and compliance purposes as part of their application process.",
            },
          ],
        },
        {
          heading: "Getting Started",
          questionAnswear: [
            // {
            //     question: "What are your service charges? ",
            //     answear: "Our services charges depend on the funders that we put in front of you. Service charges will be presented to you prior to the funding.",
            // },
            // {
            //     question: "Why would we choose you over our bank or lender? ",
            //     answear: "So we have no issues with you going to your bank or lender but with us, you would have access to a multitude of funders who want to do business with you and quite frankly at times, your bank may not want to do business with you or your bank may want you to provide extra documents like more tax returns, business plans, personal statements etc. which we may not require.",
            // },

            // {
            //     question: "What is the entire process that I will have to go through once I give my info? ",
            //     answear: "Once we get your filled application, we can get you the approval amount and if that’s acceptable to you, we will send the paperwork for you to sign and once we get that, you will get funded within 48 hours.",
            // },
            // {
            //     question: "What are your interest rates? ",
            //     answear: "We wont know till we actually process your application . Approximately from 7% to 25 %. Our interest rates vary on various factors and risk but rest assured because we are sourcing your funds from multiple lenders you will get the most competitive interest rates.",
            // },
            {
              question: "How did you get my contact info?",
              answear:
                "We reach out to businesses whose publicly available data indicates they might benefit from strategic funding. If you’d prefer not to be contacted, feel free to opt out.",
            },
            {
              question: "Do I qualify for funding?",
              answear: "Eligibility is determined by multiple factors:",
              points: [
                "Credit score",
                "Consistent monthly revenue",
                "Time in business",
                "Industry type",
                "Overall financial stability",
              ],
            },
            {
              question: "Can I get pre-approved with basic details?",
              answear:
                "Yes. After completing our initial application, you’ll receive a pre-approved funding amount—without impacting your credit score.",
            },
          ],
        },
        {
          heading: "Application & Approval Process",
          questionAnswear: [
            // {
            //     question: "Which city are u calling from?",
            //     answear: "Mpower Funds LLC is registered in the state of Wyoming and our offices are located in Bellingham, Washinton ( 2219 Rimland Drive, Suite 301, Bellingham, Washington 98226 USA)",
            // },
            // {
            //     question: "How can we check your credibility? ",
            //     answear: "We are a Company in good standing and our bankers are Chase Bank. We are a website with testimonials from existing customers and are on LinkedIn.",
            // },
            // {
            //     question: "How did you get my contact details? ",
            //     answear: "Because you are a business, we were able to get your information from the internet.",
            // },

            // {
            //     question: "Will my credit score be impacted? ",
            //     answear: "Because we are doing a soft pull on your credit, your credit score will not be impacted.",
            // },
            {
              question: "What does the full process look like?",
              answear: "",
              points: [
                "Complete our pre-qualification form (soft credit pull only)",
                "We review your business profile and issue a funding offer",
                "Accept and sign electronic documents",
                "Funds are disbursed within 24–48 hours after completion",
              ],
            },
            {
              question: "What documents will I need?",
              answear: "Typically:",
              points: [
                "Basic application form",
                "Recent business bank statements Additional documents may be requested based on the lender.",
              ],
            },
            {
              question: "How fast can I get approved?",
              answear:
                "If all documentation is submitted promptly, approval can be completed within 60 minutes—often on the same business day.",
            },
            {
              question: "When will I receive the funds?",
              answear:
                "Funds are generally received within 24–48 business hours of final approval. In rare cases, disbursement may take up to 5 business days.",
            },
            {
              question: "Will this affect my credit score?",
              answear:
                "No. Our initial process uses a soft credit pull. You’re also welcome to submit your own credit report if preferred.",
            },
          ],
        },
        {
          heading: "Funding Products & Fees",
          questionAnswear: [
            {
              question: "What types of funding do you offer?",
              answear:
                "We provide a wide range of business and personal financing solutions, including:",
              points: [
                "Business Term Loans",
                "Short-Term Business Loans",
                "Business Lines of Credit",
                "Business Bridge & Equity Loans",
                "Business Cash Advances",
                "SBA Loans",
                "0% Interest Business Credit Cards",
                "Personal Term Loans",
                "Pre-Launch Funding Options",
                "Home Equity Lines of Credit",
              ],
            },
            {
              question: "What are your interest rates?",
              answear:
                "Rates vary from 7% to 25%, depending on the lender’s assessment and your business profile. We always aim to secure the most competitive offers.",
            },
            {
              question: "Are there service charges?",
              answear:
                "Yes, in some cases. All fees will be fully disclosed before any agreement is signed.",
            },
          ],
        },
        {
          heading: "Partnerships & Referrals",
          questionAnswear: [
            {
              question: "Can I become a referral partner?",
              answear: "Yes! Please join by clicking the below link.",
              link: { path: "/partner", label: "Partner with us" },
            },
          ],
        },
      ],
    },
    support: {
      heading: "Need more support?",
      buttonText: "Contact us",
    },
  },

  applyNow: {
    navigation: {
      navbarIcon: icons.navLogo,
      navbarText: "Partner with us",
    },
    formArea: {
      disclaimer: "Your information is securely encrypted",
      lastLine: "No Impact to your credit score",
      formSteps: [
        {
          heading: "Business Information",
          description: "Provide your business details including website and LinkedIn profile.",
          selections: [
            { label: "Business Name", type: "text", value: "business_name", entry: "entry.2066090891" },
            { label: "Company Website", type: "text", value: "company_website", required: false, entry: "entry.599601747" },
            { label: "Do you have a LinkedIn profile?", type: "select", value: "linkedin", options: ["Yes", "No"], entry: "entry.1428055057" },
            { label: "LinkedIn URL", type: "text", value: "linkedin_link", conditionalOn: { field: "linkedin", value: "Yes" }, entry: "entry.193021748" },
          ],
        },
        {
          heading: "Business Type",
          description: "What is the legal structure of your business?",
          selections: [
            { label: "SoleProprietorship", value: "SoleProprietorship", entry: "entry.330020961" },
            { label: "Partnership", value: "Partnership", entry: "entry.330020961" },
            { label: "Corporation", value: "Corporation", entry: "entry.330020961" },
          ],
        },
        {
          heading: "How long have you been in business?",
          selections: [
            { type: "radio", value: "Less than a year", entry: "entry.1082256525" },
            { type: "radio", value: "Under 10 years", entry: "entry.1082256525" },
            { type: "radio", value: "Over 10 years", entry: "entry.1082256525" },
            { type: "radio", value: "I don't currently own a small business", entry: "entry.1082256525" },
          ],
        },
        {
          heading: "Average Monthly revenue?",
          selections: [
            { type: "number", value: "monthly_revenue", entry: "entry.962517849" },
          ],
        },
        {
          heading: "Select Funding amount",
          value: "funding_amount",
          entry: "entry.1927671412",
        },
        {
          heading: "Purpose of funding?",
          selections: [
            { value: "Business Expansion", entry: "entry.1713379237" },
            { value: "Pay Off Debts", entry: "entry.1713379237" },
            { value: "Paydown Taxes", entry: "entry.1713379237" },
            { value: "Repairs", entry: "entry.1713379237" },
            { value: "Cash Flow", entry: "entry.1713379237" },
            { value: "Other", entry: "entry.1713379237" },
          ],
        },
        {
          heading: "Timeline for Funds",
          selections: [
            { value: "Within 21 days", entry: "entry.132825131" },
            { value: "21 days to 45 days", entry: "entry.132825131" },
            { value: "45 days to 90 days", entry: "entry.132825131" },
            { value: "90 days plus", entry: "entry.132825131" },
          ],
        },
        {
          heading: "Date of birth",
          value: "date_of_birth",
          entry: "entry.1567828402",
        },
        {
          heading: "Residential address",
          selections: [
            { type: "textarea", value: "residencial_address", entry: "entry.1609861044" },
          ],
        },
        {
          heading: "Personal information",
          selections: [
            { label: "First Name", type: "text", value: "first_name", entry: "entry.152961478" },
            { label: "Last Name", type: "text", value: "last_name", entry: "entry.435348778" },
            { label: "Phone Number", type: "number", value: "phone", entry: "entry.821468735" },
            { label: "Email", type: "email", value: "email", entry: "entry.1638993936" },
          ],
        },
      ],

      afterApply: {
        heading: "Thank you for your patience.",
        description:
          "One of our team member will contact you very soon. Just relax yourself, you are now just one step behind to get your personal loan.",
        image: images.applyNowImg,
        buttonText: "Back to home",
      },
    },
    joinUs: {
      heading: "Mpower Guarantee : We Don’t Get Paid, Until You Get Funded",
      description:
        "Get fast, flexible business funding solutions. With our AI-driven platform, you can get pre-approved for funding in just 90 seconds—simple, quick, and stress-free.",
      joinusSlider: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn1,
          name: "Jose M.",
          role: "home user",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn2,
          name: "Aisha L.",
          role: "college Student",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn3,
          name: "Vincent K.",
          role: "small Business Owner",
        },
        //repeat
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn1,
          name: "Jose M.",
          role: "home user",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn2,
          name: "Aisha L.",
          role: "college Student",
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Ultrices neque lacus imperdiet fames sed tincidunt nunc integer. Facilisis in ullamcorper varius quam eu.",
          image: images.prsn3,
          name: "Vincent K.",
          role: "small Business Owner",
        },
      ],
    },
    formApi:
      "https://docs.google.com/forms/d/e/1FAIpQLSd7_NlNvjMjJjomOjPt3BE1gUZLq93AJvTt0Nb6vGaeTlcF0g/formResponse",
  },

  terms: {
    heading: "Your Agreement",
    // updtaeOn: "June 8, 2025",
    description: ` Welcome to MPower Funds LLC. By accessing our website and using our services, you agree to the following terms and conditions. These terms govern the use of our website and the provision of our financial services. If you do not agree to these terms, please refrain from using our website or services. Please read these Terms and Conditions ("Agreement") carefully before applying for a loan from MPowerFunds ("Company", "we", "us", or "our"). By using our website, mobile application, or availing any of our loan services, you ("Borrower", "you", "your") agree to comply with and be bound by these Terms.`,
    terms: [
      {
        heading: "Services Provided",
        description:
          "MPower Funds LLC provides professional services in financial empowerment, planning, and related services. ",
        conditions: [],
      },
      {
        heading: "Client Responsibilities",
        description: "As a client of MPower Funds LLC, you agree to :",
        conditions: [
          "Provide accurate and complete information necessary for the provision of our services.",
          "Promptly update any information provided to us, especially regarding financial and personal data.",
          "Cooperate with us to ensure that all required documents and information are submitted in a timely manner to enable us to perform services effectively.",
          "Acknowledge that you are responsible for reviewing all documents and confirming their accuracy before submission to any government authorities.",
        ],
      },
      {
        heading: "Payment Terms",
        description: "",
        conditions: [
          "You agree to pay the fees for our services as agreed upon in our service agreement. All payments are due according to the terms outlined in the agreement.",
          "We may charge additional fees for services outside the scope of the original agreement. Clients will be notified of any additional fees in advance.",
          "Payments can be made through credit cards, bank transfers, or other methods as outlined on our website.",
        ],
      },
      {
        heading: "Confidentiality",
        description:
          "MPower Funds LLC values your privacy and will make reasonable efforts to maintain the confidentiality of your personal and financial information. We will not disclose your information to third parties without your consent, except as required by law or to complete the services you have requested.",
        conditions: [],
      },
      {
        heading: "Use of Website",
        description: "",
        conditions: [
          "Intellectual Property: All content, graphics, logos, and services on the MPower Funds LLC website are the property of MPower Funds LLC or its licensors and are protected by copyright and trademark laws. You may not copy, modify, or distribute any content from our site without prior written consent.",
          "Website Usage: You agree to use our website for lawful purposes only. You are prohibited from using our website in any way that could damage, disable, or impair the site or interfere with the ability of other users to enjoy the site.",
        ],
      },
      {
        heading: "Limitation of Liability",
        description:
          "MPower Funds LLC is not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services or website. While we strive to provide accurate and timely services, we cannot guarantee the outcome of any service or advice provided.",
        conditions: [],
      },
      {
        heading: "Indemnification",
        description:
          "You agree to indemnify and hold MPower Funds LLC harmless from any claims, damages, losses, or liabilities (including legal fees) that arise from your use of our services or website, or from your violation of these terms and conditions.",
        conditions: [],
      },
      {
        heading: "Third-Party Links",
        description:
          "Our website may contain links to third-party websites for your convenience. These links are not endorsed by MPower Funds LLC, and we are not responsible for the content or privacy practices of these third-party sites. You visit third-party websites at your own risk.",
        conditions: [],
      },
      {
        heading: "Termination of Services",
        description:
          "MPower Funds LLC reserves the right to suspend or terminate services to any client at its discretion if there is a breach of these terms or if the client fails to comply with the agreed-upon terms of service. You may also terminate services at any time by notifying us, but fees may be due for services rendered up until the termination date.",
        conditions: [],
      },
      {
        heading: "Modifications to the Terms",
        description:
          "MPower Funds LLC reserves the right to modify these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date. By continuing to use our services after the changes are made, you accept the revised Terms & Conditions.",
        conditions: [],
      },
      {
        heading: "Dispute Resolution",
        description:
          "Any disputes related to these Terms & Conditions or our services will be resolved through binding arbitration in accordance with the laws of the state where MPower Funds LLC is located. By using our services, you agree to waive your right to participate in class-action lawsuits.",
        conditions: [],
      },
      {
        heading: "Eligibility",
        description: "To apply for a loan with MPowerFunds, you must:",
        conditions: [
          "Be a legal resident or citizen",
          "Be at least 18 years old (or the age of majority in your province/territory)",
          "Have a valid government-issued photo ID",
          "Provide accurate, complete, and verifiable information",
          "Meet our credit and risk assessment criteria",
        ],
      },
      {
        heading: "Loan Products",
        description:
          "We offer the following types of loans, subject to approval. (Loan amounts, interest rates, fees, and repayment terms vary based on the loan type, creditworthiness, and applicable provincial laws.):",
        conditions: [
          "Personal Loans",
          "Business Loans",
          "Debt Consolidation Loans",
          "Home Improvement Loans",
          "Auto Loans",
          "Emergency Loans",
          "Short-term and Long-term Loans",
        ],
      },
      {
        heading: "Application and Approval",
        conditions: [
          "All loan applications are subject to underwriting, verification, and approval.",
          "Providing false or misleading information may result in rejection or legal action.",
          "Approval and funding timelines may vary. We are not liable for delays caused by third-party verifications or banking institutions.",
        ],
      },
      {
        heading: "Interest Rates and Fees",
        conditions: [
          "Interest rates are determined based on your credit profile, loan type, and repayment duration.",
          "You will receive full disclosure of interest rates (APR), fees, and total loan cost prior to signing the loan agreement.",
          "Additional fees (e.g., late payment fees, prepayment penalties, NSF charges) may apply as specified in your loan contract.",
        ],
      },
      {
        heading: "Repayment Terms",
        conditions: [
          "Loan repayments are scheduled as per the agreed repayment plan outlined in your loan agreement.",
          "Payments can be made via direct debit, post-dated cheques, or other accepted methods.",
          "Missed or late payments may result in additional charges and impact your credit score.",
          "Early repayment or lump-sum payments may be allowed without penalties, subject to your contract terms.",
        ],
      },
      {
        heading: "Default and Collection",
        description:
          "You will be responsible for any legal or administrative costs incurred in the process. If you default on your loan (fail to pay as agreed), we reserve the right to:",
        conditions: [
          "Initiate internal or third-party collection efforts",
          "Report your account to credit bureaus",
          "Pursue legal remedies as permitted under US law",
        ],
      },
      {
        heading: "Credit Reporting",
        description: "By applying for a loan, you authorize us to:",
        conditions: [
          "Obtain your credit report from US credit bureaus",
          "Share your payment performance with these bureaus",
          "Use credit information for risk assessment and ongoing account management",
        ],
      },
      {
        heading: "Privacy and Data Use",
        description:
          "We collect, use, and protect your personal information in accordance with our Privacy Policy, which complies with federal and provincial privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA).",
        conditions: [],
      },
      {
        heading: "Limitation of Liability",
        description:
          "To the extent permitted by law, MPowerFunds shall not be liable for:",
        conditions: [
          "Indirect, incidental, or consequential damages",
          "Delays in loan processing due to third-party systems",
          "Any loss or damage resulting from your breach of these terms",
        ],
      },
      {
        heading: "Amendments",
        description:
          "We reserve the right to amend these Terms and Conditions at any time. Changes will be posted on our website with an updated effective date. Your continued use of our services constitutes acceptance of the updated terms.",
        conditions: [],
      },
      {
        heading: "Governing Law",
        description:
          "These Terms & Conditions are governed by and construed in accordance with the laws of the state in which MPower Funds LLC operates. Any legal actions related to these terms will be conducted within the jurisdiction of that state.",
        conditions: [],
      },
    ],
  },

  privacy: {
    heading: "Privacy Policy",
    description: `Welcome to MPower Funds LLC. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website:www.mpowerfunds.com`,
    weCollect: {
      // heading: " Information We Collect",
      // description: "We may collect the following types of information :",
      // collect: [
      //     {
      //         heading: "Identifying Information",
      //         data: ['Full Name', 'Date of Birth', "Government-issued Identification (e.g., Driver’s License, Passport)"]
      //     },
      //     {
      //         heading: " Contact Information",
      //         data: [
      //             "Address",
      //             "Phone Number",
      //             "Email Address",
      //         ]
      //     },
      //     {
      //         heading: "Financial Information",
      //         data: [
      //             "Employment Status & Income Details", "Banking Information", "Credit History", "Loan Purpose"
      //         ]
      //     },
      //     {
      //         heading: "Technical Information",
      //         data: [
      //             "IP Address", "Browser Type", "Device Information", "Cookies and Usage Data"
      //         ]
      //     },
      // ],
      policy: [
        {
          heading: "Information We Collect",
          description: "We may collect the following types of information :",
          points: [
            "Personal Information: Such as your name, email address, phone number, and any other information you provide us when you register or contact us.",
            "Non-Personal Information: Such as IP address, browser type, pages visited, and the time and date of your visit. This information is collected automatically through cookies and other tracking technologies.",
          ],
        },
        {
          heading: "How We Use Your Information",
          description:
            "We collect and use your information for the following purposes:",
          points: [
            "To provide, operate, and maintain our website",
            "To improve, personalize, and expand our website",
            "To understand and analyze how you use our website",
            "To develop new products, services, features",
            "To communicate with you regarding your loan or inquiries",
            "To comply with legal and regulatory obligations",
            "To detect and prevent fraud or security issues",
            "To improve our services and website functionality",
          ],
        },
        {
          heading: "Consent",
          description:
            "By submitting your information through our website or loan application form, you consent to the collection, use, and disclosure of your personal information as outlined in this Privacy Policy. You may withdraw your consent at any time, subject to legal or contractual restrictions.",
          points: [],
        },
        {
          heading: "Sharing of Information",
          description:
            "We do not sell your personal information to third parties. We may share your information with:",
          points: [
            "Credit Bureaus: To assess creditworthiness",
            "Third-party service providers: For identity verification, payment processing, collections, etc.",
            "Regulatory bodies: To comply with legal obligations",
            "Legal authorities: When required by law or court order",
          ],
        },
        {
          heading: "Data Security",
          description:
            "We take appropriate security measures to protect your information from unauthorized access, misuse, loss, or disclosure. These include:",
          points: [
            "SSL encryption for data transmission",
            "Secure servers and databases",
            "Access controls and authentication",
            "Regular security reviews",
          ],
        },
        {
          heading: "Retention of Information",
          description:
            "When no longer required, your data will be securely deleted or anonymized. We retain your personal information for as long as necessary to:",
          points: [
            "Fulfill the purposes outlined in this policy",
            "Meet legal, regulatory, and reporting obligations",
            "Resolve disputes and enforce our agreements",
          ],
        },
        {
          heading: "Cookies and Tracking Technologies",
          description:
            "You can adjust your browser settings to reject or remove cookies, but doing so may limit some functionality of our site. We may use cookies and similar technologies to:",
          points: [
            "Enhance website functionality and user experience",
            "Analyze website traffic and usage patterns",
            "Provide relevant advertising (if applicable)",
          ],
        },
        {
          heading: "Your Rights",
          description: "Under US privacy laws, you have the right to:",
          points: [
            "Access your personal information",
            "Request correction of inaccurate or incomplete data",
            "Withdraw consent (subject to legal limitations)",
            "File a complaint with the Office of the Privacy Commissioner of US",
          ],
        },
        {
          heading: "Third-Party Links",
          description:
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies before sharing personal information.",
          points: [],
        },
        {
          heading: "Children’s Privacy",
          description:
            "Our services are not intended for individuals under the age of 18. We do not knowingly collect information from minors. If we become aware of such data collection, we will delete the information promptly.",
          points: [],
        },
        {
          heading: "Changes to This Privacy Policy",
          description:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date. Your continued use of our services after any changes constitutes your acceptance of the revised policy.",
          points: [],
        },
      ],
    },
  },

  refund: {
    heading: "Our Refund Policy",
    description: `At MPower Funds LLC, we are committed to providing exceptional financial services to our clients. We strive to ensure that our clients are satisfied with the services we provide. However, we understand that sometimes things may not go as expected. This Refund Policy outlines the circumstances under which a refund may be requested, as well as the process involved.`,
    policy: [
      {
        heading: "Refund Eligibility",
        description:
          "Refunds are offered under specific circumstances. As our services are rendered based on professional advice and expertise, refunds may be issued only in the following cases :",
        points: [
          "Overpayment: If an overpayment was made for services, a refund for the excess amount will be issued.",
          "Service Cancellation: If services are cancelled before they have been rendered (and the cancellation occurs within the specified timeframe), a partial or full refund may be issued, depending on the terms of the service agreement.",
          "Errors in Service: If an error occurred on our part. We may offer a refund or compensation for the services rendered, depending on the circumstances.",
        ],
      },
      {
        heading: "Refund Process",
        description: "To request a refund, please follow these steps:",
        points: [
          "Contact Us: Notify us within 15 days of the payment or issue by emailing  support@mpowerfunds.com or calling +1-877-3863-006. Provide details of the service, payment, and reason for requesting the refund.",
          "Evaluation: We will evaluate your request and confirm whether it meets our refund eligibility criteria. We may ask for additional documentation or clarification as needed.",
          "Approval/Denial: After evaluation, we will notify you of our decision. If your refund request is approved, it will be processed within 15 business days. If denied, we will provide an explanation of why the request does not meet the criteria.",
        ],
      },
      {
        heading: "Non-Refundable Services",
        description:
          "Certain services are non-refundable once initiated, as they involve personalized, one-on-one advice, or time-sensitive processes that cannot be undone. These include:",
        points: [
          "Services that have already been completed.",
          "Consulting services where significant time and resources have been invested",
          "Services under retainer or subscription models where fees are pre-paid for ongoing support",
        ],
      },
      {
        heading: "Partial Refunds",
        description:
          "If services have been partially completed and the client requests a refund, we may issue a partial refund based on the work completed up to that point. The refund amount will be determined based on the services rendered and the time spent.",
        points: [],
      },
      {
        heading: "Refund Method",
        description:
          "Refunds will be processed using the same method of payment used for the original transaction, unless otherwise agreed upon. Refunds may take 7 to 10 business days to be reflected in your account, depending on the payment provider.",
        points: [],
      },
      {
        heading: "Dispute Resolution",
        description:
          "If you are dissatisfied with the refund process or decision, you may escalate your concerns to our senior management team. We aim to resolve all concerns promptly and fairly.",
        points: [],
      },
      {
        heading: "Policy Review",
        description:
          "This Refund Policy is reviewed periodically and may be updated as necessary. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly.",
        points: [],
      },
    ],
  },

  partner: {
    banner: {
      heading: "Partner With MPowerFunds",
      description: [
        "Partnering with MpowerFunds is a smart way to help American small businesses thrive. Small businesses are the backbone of the American economy — and we make it easier for them to access fast, fair funding when they need it most.",
        "At MpowerFunds, we collaborate with a wide network of brokers, agents, consultants, and business advisors to deliver simple, flexible financing solutions to local businesses. We offer Working Capital Loans, Business Cash Advances, Lines of Credit, and more — along with competitive commissions, a variety of funding options, and dedicated support every step of the way.",
        "Together with our Partners, we empower small businesses across the United States to grow and succeed.",
        "As part of the Mpower Funds Partner Program, you’ll also get access to our Partner Portal, giving you clear visibility into your client referrals, deals in progress, and commissions earned — so you stay in control and confident as you grow.",
      ],
      btnText: " Click here to get started",
    },
    getStartBox: {
      heading: "Get Started!",
      steps: [
        "Fill out the quick form to tell us about you and your business.",
        "One of our managers will reach out within 1 business day.",
        "We’ll schedule a short call to get to know you, answer your questions, and activate your Partner Portal if it’s a good fit.",
        "Start sharing your link and referring clients—and earn as they get funded!",
      ],
    },
    partnerUsBox: {
      heading: "Why Partner With Us?",
      description: [
        {
          label: "Fast, Hassle-Free Funding",
          text: "We help businesses secure funding up to $500,000 — with a 90-second AI-driven pre-approval, no paperwork, and no credit impact.",
        },
        {
          label: "Flexible Options For Every Client",
          text: "From working capital to equipment upgrades, we have solutions that suit businesses across industries — contractors, wellness clinics, trades, retail, and more.",
        },
        {
          label: "Dedicated Partner Support",
          text: "Our experienced team backs you up at every step — from application to funding. You stay in the loop and get paid quickly.",
        },
        {
          label: "Generous Commission Structure",
          text: "Earn attractive commissions for every funded client you refer — with no limits on your earning potential.",
        },
        {
          label: "Grow with Link & Lead Events",
          text: "We actively promote our best affiliate partners through co-branded Link & Lead Events, giving you opportunities to generate more warm leads and grow your network faster.",
        },
      ],
    },
    partnerValues: {
      heading: "Our Value Proposition to Our Partners",
      values: [
        {
          icon: icons.attr,
          text: "Attractive commissions & bonuses for top performers.",
        },
        {
          icon: icons.fund,
          text: "Fast funding up to $500K for your clients.",
        },
        {
          icon: icons.success4,
          text: "90-second AI pre-approval — no paperwork, no credit hit.",
        },
        {
          icon: icons.solution,
          text: "Flexible solutions for all industries.",
        },
        { icon: icons.support, text: "Dedicated Partner Manager support." },
        { icon: icons.payout, text: "Quick turnaround and fast payouts." },
        {
          icon: icons.track,
          text: "Clear Partner Portal & real-time tracking.",
        },
        {
          icon: icons.referral,
          text: "Link & Lead Events to grow your referrals.",
        },
      ],
    },
    heading: "Let's be partners!",
    subheading:
      "Ready to become a partner or want to learn more? Just fill out the form below and we’ll be in touch!",
    form: [
      {
        label: "First Name",
        name: "entry.1331798011",
        type: "text",
      },
      {
        label: "Last Name",
        name: "entry.972332404",
        type: "text",
      },
      {
        label: "Email",
        name: "entry.81257958",
        type: "email",
      },
      {
        label: "Phone Number",
        name: "entry.1576219865",
        type: "number",
      },
      {
        label: "Company name",
        name: "entry.860926857",
        type: "text",
      },
      {
        label: "Website URL",
        name: "entry.1295608179",
        type: "text",
      },
      {
        label: "State",
        name: "entry.94106362",
        type: "text",
      },
      {
        label: "Are you an ISO?",
        name: "entry.93405797",
        type: "radio",
        options: ["yes", "no"],
      },
      // { label: "Which industries sectors do you serve? (Top 3)", name: "industries", type: "text" },
      // { label: "Main financial products your company specializes in?", name: "products", type: "text" },
      // { label: "Approximate current annual origination volume in USA?", name: "volume", type: "text" },
      // { label: "Which alternative funders in USA are you currently working with?", name: "alternative_funds", type: "text" },
      {
        label: "Which industry best describes your business?",
        name: "entry.1390298564",
        type: "select",
        options: [
          "Real Estate",
          "Mortgage Broker",
          "Accounting / Tax Services",
          "Insurance",
          "Other",
        ],
      },
      {
        label: "Please specify your industry",
        name: "entry.256148822",
        type: "text",
        conditional: "entry.1390298564",
        showIfValue: "Other",
      },
      {
        label: "Tell us a bit about your business?",
        name: "entry.1826520425",
        type: "textarea",
      },
    ],
    formApi:
      "https://docs.google.com/forms/d/e/1FAIpQLScy1cq7TLJQLTzuOGUNvKkin7k1ZgMvSOI92EmUv_GxAmrEVw/formResponse",

    buttonText: "Submit",
  },

  register: {
    navigation: {
      navbarIcon: icons.navLogo,
      navbarText: "Contact us",
    },
    btnText: "Start Funding",
    heading: "Get Instant Business Funding in Just One Click",
    subTitle:
      "Tell us your funding amount and get matched with the right loan or working capital solution — fast, secure, and hassle-free.",
    description1:
      "You’re only one step away from securing the business funding you need.",
    description2:
      "Complete our quick online form, share the amount you’re looking for, and our funding specialists will connect you with flexible options tailored to your needs.",
    registerBox: {
      heading: "Your Funding is One Click Away",
      description:
        " Fill out the form now and take the next step toward growing your business today.",
      formPart: [
        {
          label: "First Name",
          name: "first_name",
          type: "text",
          placeholder: "John",
          required: true,
        },
        {
          label: "Last Name",
          name: "last_name",
          type: "text",
          placeholder: "Doe",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "example@yourmail.com",
          required: true,
        },
        {
          label: "Contact No",
          name: "phone",
          type: "tel",
          placeholder: "+1 (780)-123-4567",
          required: true,
        },
        {
          label: "Funding Amount",
          name: "funding_amount",
          type: "number",
          placeholder: "Enter amount",
          required: true,
          // min: 1000,
          // max: 50000,
        },
        {
          label: "Purpose of Funding",
          name: "funding_purpose",
          type: "select",
          options: [
            "Business Expansion",
            "Payroll",
            "Inventory",
            "Marketing",
            "Equipment Purchase",
            "Others",
          ],
          required: true,
        },
        {
          label: "Please specify (if others)",
          name: "funding_purpose_other",
          type: "text",
          placeholder: "Describe your funding need",
          conditionalField: "funding_purpose",
          conditionalValue: "Others",
          required: true,
        },
      ],
    },
    formApi:
      "https://services.leadconnectorhq.com/hooks/bd6KnSJLtqxtVU0Pxy6I/webhook-trigger/BV6hcD30NPbRADFZE8Sl",
  },

  smarterLoan: {
    navigation: {
      navbarIcon: icons.navLogoInc,
      navbarText: "Contact us",
    },
    btnText: "Start Funding",
    heading: "Get Instant Business Funding in Just One Click",
    subTitle:
      "Tell us your funding amount and get matched with the right loan or working capital solution — fast, secure, and hassle-free.",
    description1:
      "You’re only one step away from securing the business funding you need.",
    description2:
      "Complete our quick online form, share the amount you’re looking for, and our funding specialists will connect you with flexible options tailored to your needs.",
    registerBox: {
      heading: "Your Funding is One Click Away",
      description:
        " Fill out the form now and take the next step toward growing your business today.",
      formPart: [
        {
          label: "First Name",
          name: "first_name",
          type: "text",
          placeholder: "John",
          required: true,
        },
        {
          label: "Last Name",
          name: "last_name",
          type: "text",
          placeholder: "Doe",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "example@yourmail.com",
          required: true,
        },
        {
          label: "Contact No",
          name: "phone",
          type: "tel",
          placeholder: "+1 (780)-123-4567",
          required: true,
        },
        {
          label: "What is your residency status in Canada?",
          name: "residency_status",
          type: "select",
          options: [
            "Canadian Citizen",
            "Permanent Resident",
            "Temporary Resident",
          ],
          required: true,
        },
        {
          label: "What is your business's annual revenue?",
          name: "annual_revenue",
          type: "select",
          options: [
            "$0 - $119,999",
            "$120,000 - $499,999",
            "$500,000 - $999,999",
            "$1,000,000 - $1,999,999",
            ">$2,000,000",
          ],
          required: true,
        },
        {
          label: "How long has your business been operating?",
          name: "business_operating",
          type: "select",
          options: [
            "< 6 Months",
            "6 Months - 1 Year",
            "1 Year - 5 Years",
            "5 Years - 10 Years",
            "10 Years - 15 Years",
            "15 Years - 20 Years",
            "> 20 Years",
          ],
          required: true,
        },
        {
          label: "Funding Amount",
          name: "funding_amount",
          type: "number",
          placeholder: "Enter amount",
          required: true,
          // min: 1000,
          // max: 50000,
        },
        {
          label: "Purpose of Funding",
          name: "funding_purpose",
          type: "select",
          options: [
            "Business Expansion",
            "Payroll",
            "Inventory",
            "Marketing",
            "Equipment Purchase",
            "Others",
          ],
          required: true,
        },
        {
          label: "Please specify (if others)",
          name: "funding_purpose_other",
          type: "text",
          placeholder: "Describe your funding need",
          conditionalField: "funding_purpose",
          conditionalValue: "Others",
          required: true,
        },
      ],
    },
    formApi:
      "https://services.leadconnectorhq.com/hooks/H8IiiebU1Da0epvedovb/webhook-trigger/lcYmQdIMMcZT7EfDazyu",
  },

  landing: {
    navigation: {
      navbarIcon: icons.navLogoInc,
      navbarText: "Contact us",
    },
    btnText: "Start Funding",
    heading: "Get Instant Business Funding in Just One Click",
    subTitle:
      "Tell us your funding amount and get matched with the right loan or working capital solution — fast, secure, and hassle-free.",
    description1:
      "You’re only one step away from securing the business funding you need.",
    description2:
      "Complete our quick online form, share the amount you’re looking for, and our funding specialists will connect you with flexible options tailored to your needs.",
    registerBox: {
      heading: "Your Funding is One Click Away",
      description:
        " Fill out the form now and take the next step toward growing your business today.",
      formPart: [
        {
          label: "First Name",
          name: "first_name",
          type: "text",
          placeholder: "John",
          required: true,
        },
        {
          label: "Last Name",
          name: "last_name",
          type: "text",
          placeholder: "Doe",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "example@yourmail.com",
          required: true,
        },
        {
          label: "Contact No",
          name: "phone",
          type: "tel",
          placeholder: "+1 (780)-123-4567",
          required: true,
        },
        {
          label: "Funding Amount",
          name: "funding_amount",
          type: "number",
          placeholder: "Enter amount",
          required: true,
          // min: 1000,
          // max: 50000,
        },
        {
          label: "Your approx credit score",
          name: "credit_score",
          type: "number",
          placeholder: "Enter amount",
          required: true,
        },
        {
          label: "Purpose of Funding",
          name: "funding_purpose",
          type: "select",
          options: [
            "Business Expansion",
            "Payroll",
            "Inventory",
            "Marketing",
            "Equipment Purchase",
            "Others",
          ],
          required: true,
        },
        {
          label: "Please specify (if others)",
          name: "funding_purpose_other",
          type: "text",
          placeholder: "Describe your funding need",
          conditionalField: "funding_purpose",
          conditionalValue: "Others",
          required: true,
        },
      ],
    },

    googleApi:
      "https://services.leadconnectorhq.com/hooks/H8IiiebU1Da0epvedovb/webhook-trigger/xnrG5OCbXDD83yNRcHik",

    fbApi:
      "https://services.leadconnectorhq.com/hooks/H8IiiebU1Da0epvedovb/webhook-trigger/BtcyU3cIn4T7Q2KLNZnT",
  },
};

// annual_revenue:""
// business_operating:""
// email:""
// first_name:""
// funding_amount:""
// funding_purpose:""
// last_name:""
// phone :""
// residency_status: ""

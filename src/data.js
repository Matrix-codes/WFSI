// World Technical Institute (WTI) Data Store

export const instituteInfo = {
  name: "WORLD TECHNICAL INSTITUTE",
  shortName: "WTI / WFSI",
  tagline: "Learn • Prepare • Protect | Empowering Technical & Safety Professionals",
  regAddress: "First Floor, Sanjeevani Eye Hospital, Raghav Nagar, Deoria, Uttar Pradesh",
  contactNumber: "8528372209",
  whatsappNumber: "8528372209",
  email: "info@wtideoria.com",
  website: "www.wtideoria.com",
  affiliations: [
    { name: "BSS", fullName: "Bharat Sevak Samaj", badge: "Recognized BSS Centre" },
    { name: "NCVTE", fullName: "National Council for Vocational Training & Education", badge: "NCVTE Approved" },
    { name: "MSBTE", fullName: "Maharashtra State Board of Technical Education (ADIS, FR)", badge: "MSBTE Affiliated" },
    { name: "DigiLocker", fullName: "Government of India DigiLocker Portal", badge: "DigiLocker Approved Certificate" },
    { name: "Govt Approvals", fullName: "Approved by Govt of India & Gulf Countries", badge: "India & Gulf Valid" }
  ],
  stats: {
    totalStudents: "12,450+",
    placementRate: "100%",
    coursesCount: "35+",
    gulfPlacements: "4,800+"
  }
};

export const courseCategories = [
  {
    id: "fire-safety",
    title: "Fire & Safety Courses",
    icon: "🔥",
    image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=800",
    color: "#e65100",
    badge: "Most Popular",
    description: "Comprehensive Industrial Safety, Fire Fighting & HSE Certification Programs for India & Gulf Careers.",
    courses: [
      { code: "ADIS", name: "Advanced Diploma in Industrial Safety", duration: "1 Year", eligibility: "Graduate / Diploma in Engg", image: "https://images.unsplash.com/photo-1513828583688-c52600e749e5?auto=format&fit=crop&q=80&w=600" },
      { code: "PGDIS", name: "Post Graduate Diploma in Industrial Safety", duration: "1 Year", eligibility: "Degree in Science / Engineering", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" },
      { code: "DIS", name: "Diploma in Industrial Safety", duration: "1 Year", eligibility: "10+2 / ITI", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600" },
      { code: "DFSM", name: "Diploma in Fire & Safety Management", duration: "1 Year", eligibility: "10th / 12th", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600" },
      { code: "ADFIS", name: "Advance Diploma in Fire & Industrial Safety", duration: "1 Year", eligibility: "12th Science / ITI", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600" },
      { code: "PGD-FS", name: "PGD Fire & Safety", duration: "1 Year", eligibility: "Graduation", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600" },
      { code: "D-FS", name: "Diploma in Fire & Safety", duration: "6 Months - 1 Year", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600" },
      { code: "HSE-M", name: "HSE / Health Safety & Environment Management", duration: "6 Months", eligibility: "10+2 / Diploma", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" },
      { code: "FF-CERT", name: "Certificate Course in Fire Fighting", duration: "3 Months", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=600" },
      { code: "IND-SAFE", name: "Industrial Safety Technician Course", duration: "6 Months", eligibility: "10th / ITI", image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "iti-technical",
    title: "ITI / Technical Trades",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    color: "#0277bd",
    badge: "Official Trade Affiliations",
    description: "Industry-aligned vocational trade training with hands-on practical lab experience.",
    courses: [
      { code: "ITI-ELEC", name: "Electrician Trade", duration: "2 Years", eligibility: "10th Pass (Science & Math)", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600" },
      { code: "ITI-FIT", name: "Fitter Trade", duration: "2 Years", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600" },
      { code: "ITI-WELD", name: "Welder Trade (ARC & TIG/MIG)", duration: "1 Year", eligibility: "8th / 10th Pass", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" },
      { code: "ITI-COPA", name: "Computer Operator & Programming Assistant (COPA)", duration: "1 Year", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" },
      { code: "ITI-MECH", name: "Mechanic Trade (Motor Vehicle / Diesel)", duration: "1-2 Years", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600" },
      { code: "ITI-DRAFT", name: "Draughtsman (Civil / Mechanical)", duration: "2 Years", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "diploma-engg",
    title: "Diploma Courses",
    icon: "🛠️",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=800",
    color: "#2e7d32",
    badge: "Government Valid",
    description: "Technical diploma qualifications tailored for industrial, engineering & safety operations.",
    courses: [
      { code: "DIP-FS", name: "Diploma in Fire & Safety", duration: "1 Year", eligibility: "10th / 12th", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" },
      { code: "DIP-IS", name: "Diploma in Industrial Safety", duration: "1 Year", eligibility: "10th / 12th / ITI", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" },
      { code: "DIP-ELE", name: "Diploma in Electrical Engineering (Skills)", duration: "1-2 Years", eligibility: "10th / ITI", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
      { code: "DIP-MEC", name: "Diploma in Mechanical Engineering (Skills)", duration: "1-2 Years", eligibility: "10th / ITI", image: "https://images.unsplash.com/photo-1565793298-41d2ff87e2a6?auto=format&fit=crop&q=80&w=600" },
      { code: "DIP-CIV", name: "Diploma in Civil Construction & Safety", duration: "1 Year", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "computer",
    title: "Computer Courses",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    color: "#6a1b9a",
    badge: "ISO Certified",
    description: "From basic computer literacy to advanced accounting & office automation.",
    courses: [
      { code: "ADCA", name: "Advance Diploma in Computer Applications", duration: "1 Year", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600" },
      { code: "DCA", name: "Diploma in Computer Applications", duration: "6 Months", eligibility: "10th Pass", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" },
      { code: "CCC", name: "Course on Computer Concepts", duration: "3 Months", eligibility: "Open", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" },
      { code: "TALLY-PR", name: "Tally Prime with GST & E-Way Bill", duration: "3 Months", eligibility: "10+2 / Commerce", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" },
      { code: "ADV-EXCEL", name: "Advanced Excel & Data Analytics", duration: "2 Months", eligibility: "10+2 / Basic Computer", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" },
      { code: "OFFICE-AUTO", name: "MS Office & Office Automation", duration: "3 Months", eligibility: "Open", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "short-skills",
    title: "Short-Term / Skill Courses",
    icon: "📜",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    color: "#c2185b",
    badge: "Job-Ready Skill Certs",
    description: "Intensive 1-day to 1-month safety certifications required by top EPC & Gulf contractors.",
    courses: [
      { code: "FIRST-AID", name: "First Aid & CPR Training Certificate", duration: "3 Days", eligibility: "Open", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" },
      { code: "FF-PRACT", name: "Fire Fighting & Hose Handling Practical", duration: "5 Days", eligibility: "Open", image: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=600" },
      { code: "SCAF-SAFE", name: "Scaffolding Inspector & Erector Safety", duration: "1 Week", eligibility: "Open", image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=600" },
      { code: "WAH-SAFE", name: "Work at Height & Fall Protection Safety", duration: "3 Days", eligibility: "Open", image: "https://images.unsplash.com/photo-1590935217281-8f102120d683?auto=format&fit=crop&q=80&w=600" },
      { code: "LOTO-CERT", name: "Lockout / Tagout (LOTO) Energy Isolation", duration: "2 Days", eligibility: "Technical / HSE", image: "https://images.unsplash.com/photo-1545259742-b4fd8fba41c3?auto=format&fit=crop&q=80&w=600" },
      { code: "HIRA-JSA", name: "HIRA & Risk Assessment / JSA Specialist", duration: "1 Week", eligibility: "HSE Aspirants", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" },
      { code: "PPE-TRAIN", name: "PPE Compliance & Inspection Training", duration: "1 Day", eligibility: "Open", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600" },
      { code: "CRANE-RIG", name: "Crane & Rigging Heavy Equipment Safety", duration: "1 Week", eligibility: "Operators / Safety", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" },
      { code: "ELEC-SAFE", name: "Electrical Safety & Arc Flash Prevention", duration: "3 Days", eligibility: "Electricians / HSE", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600" },
      { code: "CONF-SPACE", name: "Confined Space Entry & Rescue Training", duration: "5 Days", eligibility: "Safety Personnel", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" },
      { code: "HOT-WORK", name: "Hot Work Permit & Fire Watcher Certificate", duration: "3 Days", eligibility: "Open", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600" },
      { code: "MAN-HAND", name: "Manual Handling & Ergonomics", duration: "2 Days", eligibility: "Open", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" }
    ]
  }
];

export const sampleStudents = [
  {
    id: "STU-2026-01",
    enrollmentNo: "WTI/2026/0891",
    studentId: "WTI-STU-1001",
    name: "Rahul Sharma",
    fatherName: "Mahendra Sharma",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    courseId: "DFSM",
    courseName: "Diploma in Fire & Safety Management",
    category: "Fire & Safety",
    batch: "2025-2026",
    duration: "1 Year",
    joiningDate: "2025-08-15",
    validTill: "2026-08-14",
    phone: "9876543210",
    email: "rahul.sharma@example.com",
    address: "Deoria, Uttar Pradesh",
    attendance: { total: 100, present: 94, absent: 6, percentage: 94 },
    fees: { total: 25000, paid: 20000, remaining: 5000, dueDate: "2026-09-01" },
    marksheet: {
      examTitle: "Annual Fire & Safety Board Exam 2026",
      resultDate: "10-Aug-2026",
      grade: "A+",
      totalMarks: 500,
      obtainedMarks: 445,
      percentage: "89%",
      status: "PASS",
      subjects: [
        { subject: "Fundamentals of Safety", maxMarks: 100, obtained: 92 },
        { subject: "Fire Fighting & Suppression", maxMarks: 100, obtained: 88 },
        { subject: "Industrial Risk & HIRA/JSA", maxMarks: 100, obtained: 90 },
        { subject: "Construction Safety & Scaffolding", maxMarks: 100, obtained: 85 },
        { subject: "Practical Hose & First Aid Test", maxMarks: 100, obtained: 90 }
      ]
    }
  },
  {
    id: "STU-2026-02",
    enrollmentNo: "WTI/2026/0892",
    studentId: "WTI-STU-1002",
    name: "Amit Kumar Singh",
    fatherName: "Rameshwar Singh",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    courseId: "ADIS",
    courseName: "Advanced Diploma in Industrial Safety",
    category: "Fire & Safety",
    batch: "2025-2026",
    duration: "1 Year",
    joiningDate: "2025-07-10",
    validTill: "2026-07-09",
    phone: "9123456780",
    email: "amit.singh@example.com",
    address: "Gorakhpur, Uttar Pradesh",
    attendance: { total: 100, present: 96, absent: 4, percentage: 96 },
    fees: { total: 32000, paid: 32000, remaining: 0, dueDate: "PAID IN FULL" },
    marksheet: {
      examTitle: "Advanced Industrial Safety Final Examination",
      resultDate: "05-Aug-2026",
      grade: "O (Outstanding)",
      totalMarks: 500,
      obtainedMarks: 472,
      percentage: "94.4%",
      status: "PASS",
      subjects: [
        { subject: "Safety Legislation & Factory Act", maxMarks: 100, obtained: 95 },
        { subject: "Chemical & Industrial Hazards", maxMarks: 100, obtained: 94 },
        { subject: "Occupational Health & Hygiene", maxMarks: 100, obtained: 92 },
        { subject: "EHS Audit & Incident Investigation", maxMarks: 100, obtained: 96 },
        { subject: "Viva & On-Site Project Work", maxMarks: 100, obtained: 95 }
      ]
    }
  },
  {
    id: "STU-2026-03",
    enrollmentNo: "WTI/2026/0893",
    studentId: "WTI-STU-1003",
    name: "Vikram Yadav",
    fatherName: "Subhash Chandra Yadav",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    courseId: "ITI-ELEC",
    courseName: "Electrician Trade (ITI)",
    category: "ITI / Technical Trades",
    batch: "2024-2026",
    duration: "2 Years",
    joiningDate: "2024-09-01",
    validTill: "2026-08-31",
    phone: "9798123456",
    email: "vikram.yadav@example.com",
    address: "Deoria, UP",
    attendance: { total: 100, present: 90, absent: 10, percentage: 90 },
    fees: { total: 28000, paid: 22000, remaining: 6000, dueDate: "2026-09-15" },
    marksheet: {
      examTitle: "National Trade Certificate Final Assessment",
      resultDate: "02-Aug-2026",
      grade: "A",
      totalMarks: 500,
      obtainedMarks: 420,
      percentage: "84%",
      status: "PASS",
      subjects: [
        { subject: "Trade Theory", maxMarks: 100, obtained: 86 },
        { subject: "Trade Practical & Circuit Wiring", maxMarks: 100, obtained: 90 },
        { subject: "Workshop Calculation & Science", maxMarks: 100, obtained: 78 },
        { subject: "Engineering Drawing", maxMarks: 100, obtained: 82 },
        { subject: "Employability Skills", maxMarks: 100, obtained: 84 }
      ]
    }
  }
];

export const sampleCertificates = [
  {
    certificateNo: "WTI/FS/2026/000125",
    type: "Diploma Certificate",
    studentId: "WTI-STU-1001",
    studentName: "Rahul Sharma",
    fatherName: "Mahendra Sharma",
    courseName: "Diploma in Fire & Safety Management",
    duration: "1 Year (Batch 2025-2026)",
    issueDate: "10-08-2026",
    grade: "Grade A+ (89%)",
    status: "VALID",
    verificationUrl: "WTI Certificate Verification",
    qrData: "WTI-VERIFY-WTI/FS/2026/000125-RAHUL-SHARMA",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    certificateNo: "WTI/ADIS/2026/000126",
    type: "Course Completion Certificate",
    studentId: "WTI-STU-1002",
    studentName: "Amit Kumar Singh",
    fatherName: "Rameshwar Singh",
    courseName: "Advanced Diploma in Industrial Safety",
    duration: "1 Year (Batch 2025-2026)",
    issueDate: "05-08-2026",
    grade: "Grade O (94.4%)",
    status: "VALID",
    verificationUrl: "WTI Certificate Verification",
    qrData: "WTI-VERIFY-WTI/ADIS/2026/000126-AMIT-SINGH",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    certificateNo: "WTI/SAFE/2026/000199",
    type: "Safety Skill Certificate",
    studentId: "WTI-STU-1001",
    studentName: "Rahul Sharma",
    fatherName: "Mahendra Sharma",
    courseName: "Work at Height & Fall Protection Safety",
    duration: "3 Days Intensive Practical Training",
    issueDate: "28-07-2026",
    grade: "CERTIFIED PRACTITIONER",
    status: "VALID",
    verificationUrl: "WTI Certificate Verification",
    qrData: "WTI-VERIFY-WTI/SAFE/2026/000199-RAHUL-WAH",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  }
];

export const studyMaterials = [
  {
    id: "SM-01",
    category: "Fire & Safety",
    topic: "Fundamentals of Fire Safety & Chemistry of Fire",
    courseCode: "DFSM",
    type: "PDF",
    fileSize: "4.2 MB",
    downloadUrl: "#",
    description: "Complete guide covering Triangle of Fire, Extinguishing Agents (Water, Foam, CO2, DCP), Fire Classes A to F.",
    icon: "📄"
  },
  {
    id: "SM-02",
    category: "Fire & Safety",
    topic: "HIRA & Job Safety Analysis (JSA) Practical Handbook",
    courseCode: "ADIS",
    type: "PDF",
    fileSize: "6.8 MB",
    downloadUrl: "#",
    description: "Step-by-step risk matrix assessment, hazard identification methods, and risk control hierarchy.",
    icon: "📄"
  },
  {
    id: "SM-03",
    category: "Fire & Safety",
    topic: "Video Demonstration: Fire Hydrant & Breathing Apparatus Setup",
    courseCode: "DFSM",
    type: "Video",
    fileSize: "45 Mins Lecture",
    downloadUrl: "#",
    description: "HD practical video demonstrating SCBA wearing procedure, cylinder pressure test, and emergency evacuation.",
    icon: "🎥"
  },
  {
    id: "SM-04",
    category: "Short Safety Skills",
    topic: "Work at Height & Scaffolding Inspection Manual",
    courseCode: "WAH-SAFE",
    type: "PDF",
    fileSize: "3.5 MB",
    downloadUrl: "#",
    description: "OSHA standard safety harness inspection, scaffolding tag system (Red/Green), lifeline anchor setup.",
    icon: "📄"
  },
  {
    id: "SM-05",
    category: "ITI Electrician",
    topic: "3-Phase Induction Motor Wiring & Panel Diagrams",
    courseCode: "ITI-ELEC",
    type: "PDF",
    fileSize: "8.1 MB",
    downloadUrl: "#",
    description: "Star-Delta starter control circuit diagrams, relay testing, and earth resistance measurement methods.",
    icon: "⚡"
  },
  {
    id: "SM-06",
    category: "Computer Courses",
    topic: "Tally Prime with GST Practice Worksheets & Voucher Entries",
    courseCode: "TALLY-PR",
    type: "Notes",
    fileSize: "2.9 MB",
    downloadUrl: "#",
    description: "Includes real industry sample invoices, CGST/SGST/IGST voucher creation, and E-Way bill generation.",
    icon: "💻"
  }
];

export const sampleExams = [
  {
    id: "EXAM-101",
    title: "Fire Safety & Extinguisher Operation Certification Exam 2026",
    courseName: "Diploma in Fire & Safety Management",
    subject: "Fire Engineering Fundamentals",
    durationMins: 15,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: "Q1",
        question: "Which type of fire extinguisher is recommended for Electrical Equipment Fires (Class C / E)?",
        options: ["Water Extinguisher", "Carbon Dioxide (CO2)", "Foam Extinguisher", "Wet Chemical"],
        correct: 1
      },
      {
        id: "Q2",
        question: "What does the acronym PASS stand for in fire extinguisher operation?",
        options: [
          "Pull, Aim, Squeeze, Sweep",
          "Push, Align, Spray, Stop",
          "Press, Activate, Smother, Save",
          "Point, Apply, Shut, Secure"
        ],
        correct: 0
      },
      {
        id: "Q3",
        question: "In the Fire Triangle, what three components are required to sustain a fire?",
        options: [
          "Fuel, Heat, Oxygen",
          "Smoke, Gas, Ignition",
          "Carbon, Water, Spark",
          "Nitrogen, Electricity, Fuel"
        ],
        correct: 0
      },
      {
        id: "Q4",
        question: "Which safety document outlines hazard identification prior to starting a high-risk job?",
        options: ["Invoice", "Job Safety Analysis (JSA)", "Attendance Sheet", "Purchase Order"],
        correct: 1
      },
      {
        id: "Q5",
        question: "What color scaffolding tag indicates that the scaffold is safe for use?",
        options: ["Red Tag", "Yellow Tag", "Green Tag", "Blue Tag"],
        correct: 2
      }
    ]
  }
];

export const jobPlacements = [
  {
    id: "JOB-901",
    title: "HSE Safety Inspector",
    company: "Saudi Aramco Sub-Contractor (Gulf)",
    location: "Dhahran, Saudi Arabia",
    salary: "SAR 4,500 - 6,000 / Month + Accommodation + Flight",
    type: "Gulf Jobs",
    category: "Safety Jobs",
    requirements: "ADIS / Diploma in Fire & Safety + 2 Yrs Exp. NEBOSH preferred.",
    postedDate: "08-Aug-2026",
    status: "URGENT HIRING"
  },
  {
    id: "JOB-902",
    title: "Industrial Fire Officer",
    company: "Larsen & Toubro (L&T) Construction",
    location: "Ahmedabad, Gujarat, India",
    salary: "₹35,000 - ₹48,000 / Month",
    type: "India Jobs",
    category: "Safety Jobs",
    requirements: "Diploma in Fire & Safety / DFSM passouts. Freshers / 1 Year Exp.",
    postedDate: "05-Aug-2026",
    status: "OPEN"
  },
  {
    id: "JOB-903",
    title: "Senior Electrical Maintenance Technician",
    company: "Tata Steel Plant Project",
    location: "Jamshedpur, Jharkhand",
    salary: "₹28,000 - ₹38,000 / Month",
    type: "India Jobs",
    category: "ITI Jobs",
    requirements: "ITI Electrician / Diploma Electrical with wireman permit.",
    postedDate: "02-Aug-2026",
    status: "OPEN"
  },
  {
    id: "JOB-904",
    title: "Scaffolding Safety Supervisor",
    company: "Descon Engineering LLC (UAE)",
    location: "Abu Dhabi, UAE",
    salary: "AED 3,800 - 5,200 / Month",
    type: "Gulf Jobs",
    category: "Safety Jobs",
    requirements: "WTI Scaffolding Certificate + 1 Yr Industrial Experience.",
    postedDate: "01-Aug-2026",
    status: "INTERVIEW SHORTLY"
  }
];

export const notices = [
  {
    id: "NOT-01",
    title: "📢 Urgent Notice: New Practical Fire Fighting Batch Starting Next Monday",
    date: "10-Aug-2026",
    category: "New Batch & Practical Training",
    body: "All DFSM & ADIS students of 2025-2026 batch are requested to report at WTI Deoria Ground for live hose line and SCBA practicals at 9:00 AM."
  },
  {
    id: "NOT-02",
    title: "✈️ Gulf Placement Interview Drive in Deoria Campus",
    date: "06-Aug-2026",
    category: "Placement & Interview",
    body: "Delegates from UAE & Saudi Arabia oil & gas project contractors will be conducting client interviews on 18th August 2026 at WTI Deoria First Floor, Sanjeevani Hospital."
  },
  {
    id: "NOT-03",
    title: "📜 Special Verification Drive for WTI Certificates",
    date: "01-Aug-2026",
    category: "Certificate & Verification",
    body: "Employers can now instantly verify WTI Fire & Safety, ITI, and Computer certificates live via QR scanner or entering Certificate ID on the WTI online portal."
  }
];

export const facultyMembers = [
  {
    name: "Er. K. P. Singh",
    designation: "Head of Safety & HSE Department",
    qualifications: "B.Tech Mech, ADIS (MSBTE), NEBOSH IGC Certified",
    experience: "16+ Years Experience in Oil & Gas & Refinery Safety (India & Oman)",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Mr. Anand V. Verma",
    designation: "Senior Fire Fighting & Drill Master",
    qualifications: "Ex-Chief Fire Officer, Diploma in Fire Engineering",
    experience: "20+ Years Practical Fire Fighting & Disaster Management",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Er. Sunita Tripathi",
    designation: "Senior ITI & Electrical Instructor",
    qualifications: "Diploma Electrical, CITS Certified Trainer",
    experience: "10+ Years Vocational Trade Training & Panel Design",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  },
  {
    name: "Mr. Dharmendra Mishra",
    designation: "Director - Computer & Software Department",
    qualifications: "MCA, Tally Master Professional, ISO Auditor",
    experience: "12+ Years Computer Applications & Corporate Training",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
  }
];

export const achievements = [
  {
    title: "100% Placement Record in India & Gulf",
    count: "4,800+ Placed",
    desc: "Our alumni are working in top MNCs, Aramco, Sabic, L&T, Tata Steel, Reliance Infra, and Adani Projects.",
    icon: "🏆"
  },
  {
    title: "State-of-the-Art Fire Hose & SCBA Lab",
    count: "100% Practical",
    desc: "Hands-on training with fire hydrants, foam monitors, smoke chamber, scaffolding rigs, and gas detectors.",
    icon: "🔥"
  },
  {
    title: "DigiLocker & QR Code Verified Certificates",
    count: "100% Tamper Proof",
    desc: "Every certificate issued comes with anti-forge QR verification valid across global employers.",
    icon: "🛡️"
  }
];

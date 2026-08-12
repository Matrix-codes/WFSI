// Standalone WTI Application & Data Bundle
(function() {
'use strict';
// World Technical Institute (WTI) Data Store

const instituteInfo = {
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

const courseCategories = [
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

const sampleStudents = [
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

const sampleCertificates = [
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

const studyMaterials = [
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

const sampleExams = [
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

const jobPlacements = [
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

const notices = [
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

const facultyMembers = [
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

const achievements = [
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


// World Technical Institute (WTI) Main Application Engine


function safeJSONParse(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    if (!val || val === 'undefined' || val === 'null') return fallback;
    return JSON.parse(val);
  } catch (err) {
    console.warn(`Failed to parse localStorage item "${key}", using fallback.`, err);
    return fallback;
  }
}

// Application State Store (Persisted in localStorage for demo interactivity)
class WTIStore {
  constructor() {
    this.students = safeJSONParse('wti_students', sampleStudents);
    this.certificates = safeJSONParse('wti_certificates', sampleCertificates);
    this.exams = safeJSONParse('wti_exams', sampleExams);
    this.jobs = safeJSONParse('wti_jobs', jobPlacements);
    this.noticesList = safeJSONParse('wti_notices', notices);
    this.materials = studyMaterials;
    // Load categories and sync unique course images from data.js
    const savedCats = safeJSONParse('wti_categories', null);
    if (savedCats && Array.isArray(savedCats)) {
      this.categories = savedCats.map(cat => {
        const freshCat = courseCategories.find(c => c.id === cat.id);
        if (freshCat && cat.courses) {
          cat.courses = cat.courses.map(c => {
            const freshCourse = freshCat.courses.find(fc => fc.code === c.code);
            return {
              ...c,
              image: (freshCourse && freshCourse.image) ? freshCourse.image : (c.image || cat.image)
            };
          });
        }
        return cat;
      });
    } else {
      this.categories = courseCategories;
    }
    this.save();
    this.activeStudent = (this.students && this.students.length > 0) ? this.students[0] : sampleStudents[0];
    this.activeSessions = safeJSONParse('wti_active_sessions', 18);
  }

  save() {
    try {
      if (this.students) localStorage.setItem('wti_students', JSON.stringify(this.students));
      if (this.certificates) localStorage.setItem('wti_certificates', JSON.stringify(this.certificates));
      if (this.exams) localStorage.setItem('wti_exams', JSON.stringify(this.exams));
      if (this.jobs) localStorage.setItem('wti_jobs', JSON.stringify(this.jobs));
      if (this.noticesList) localStorage.setItem('wti_notices', JSON.stringify(this.noticesList));
      if (this.categories) localStorage.setItem('wti_categories', JSON.stringify(this.categories));
      if (this.activeSessions !== undefined) localStorage.setItem('wti_active_sessions', JSON.stringify(this.activeSessions));
    } catch (e) {
      console.warn('localStorage save failed', e);
    }
  }

  addStudent(student) {
    this.students.unshift(student);
    this.activeSessions += 1;
    this.save();
  }

  addCourse(categoryId, courseObj) {
    const cat = this.categories.find(c => c.id === categoryId);
    if (cat) {
      if (!cat.courses) cat.courses = [];
      cat.courses.unshift(courseObj);
      this.save();
    }
  }

  getTotalCoursesCount() {
    return this.categories.reduce((acc, cat) => acc + (cat.courses ? cat.courses.length : 0), 0);
  }

  addCertificate(cert) {
    this.certificates.unshift(cert);
    this.save();
  }

  addJob(job) {
    this.jobs.unshift(job);
    this.save();
  }

  addNotice(notice) {
    this.noticesList.unshift(notice);
    this.save();
  }

  verifyCertificate(certNo) {
    const cleanNo = certNo.trim().toUpperCase();
    return this.certificates.find(c => c.certificateNo.toUpperCase() === cleanNo);
  }
}

const store = new WTIStore();

// Navigation Controller
let appInitialized = false;
function initApp() {
  if (appInitialized) return;
  appInitialized = true;

  setupNavigation();
  setupAdminAuth();
  setupAuthModal();
  renderPublicHome();
  renderStudentPortal();
  renderAdminPanel();
  setupVerificationEngine();
  setupGlobalModals();
}

function setupAdminAuth() {
  const loginForm = document.getElementById('form-admin-login');
  const loginScreen = document.getElementById('admin-login-screen');
  const dashScreen = document.getElementById('admin-dashboard-screen');
  const errorMsg = document.getElementById('admin-login-error');
  const logoutBtn = document.getElementById('btn-admin-logout');

  function checkAdminState() {
    const isAuthed = sessionStorage.getItem('wti_admin_auth') === 'true';
    if (isAuthed) {
      if (loginScreen) loginScreen.style.display = 'none';
      if (dashScreen) dashScreen.style.display = 'block';
      document.body.classList.add('admin-mode-active');
    } else {
      if (loginScreen) loginScreen.style.display = 'block';
      if (dashScreen) dashScreen.style.display = 'none';
      document.body.classList.remove('admin-mode-active');
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('admin-input-user').value.trim();
      const p = document.getElementById('admin-input-pass').value.trim();

      if ((u === 'admin' || u === 'admin@wti.com') && (p === 'admin' || p === 'wti2026' || p === '123456')) {
        if (errorMsg) errorMsg.style.display = 'none';
        sessionStorage.setItem('wti_admin_auth', 'true');
        checkAdminState();
      } else {
        if (errorMsg) errorMsg.style.display = 'block';
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.setItem('wti_admin_auth', 'false');
      checkAdminState();
    });
  }

  checkAdminState();
}

function setupAuthModal() {
  const authModal = document.getElementById('modal-auth-view');
  const openBtn = document.getElementById('btn-open-auth-modal');
  const closeBtn = authModal ? authModal.querySelector('.modal-close-btn') : null;

  const tabAdmin = document.getElementById('auth-tab-admin');
  const tabStudent = document.getElementById('auth-tab-student');
  const tabRegister = document.getElementById('auth-tab-register');

  const formAdmin = document.getElementById('modal-form-admin-login');
  const formStudent = document.getElementById('modal-form-student-login');
  const formRegister = document.getElementById('modal-form-student-register');

  const errorAdmin = document.getElementById('modal-admin-error');
  const errorStudent = document.getElementById('modal-stu-error');

  if (openBtn && authModal) {
    openBtn.addEventListener('click', () => {
      authModal.classList.add('active');
    });
  }

  if (closeBtn && authModal) {
    closeBtn.addEventListener('click', () => {
      authModal.classList.remove('active');
    });
  }

  function activateAuthTab(target) {
    [tabAdmin, tabStudent, tabRegister].forEach(t => {
      if (t) {
        t.style.background = 'transparent';
        t.style.color = '#FFF';
        t.classList.remove('active');
      }
    });
    [formAdmin, formStudent, formRegister].forEach(f => {
      if (f) f.style.display = 'none';
    });

    if (target === 'admin') {
      if (tabAdmin) {
        tabAdmin.style.background = 'linear-gradient(135deg, #12DCEF 0%, #5DFFD9 100%)';
        tabAdmin.style.color = '#070707';
        tabAdmin.classList.add('active');
      }
      if (formAdmin) formAdmin.style.display = 'block';
    } else if (target === 'student') {
      if (tabStudent) {
        tabStudent.style.background = 'var(--primary-gradient)';
        tabStudent.style.color = '#070707';
        tabStudent.classList.add('active');
      }
      if (formStudent) formStudent.style.display = 'block';
    } else if (target === 'register') {
      if (tabRegister) {
        tabRegister.style.background = 'var(--primary-gradient)';
        tabRegister.style.color = '#070707';
        tabRegister.classList.add('active');
      }
      if (formRegister) formRegister.style.display = 'block';
    }
  }

  if (tabAdmin) tabAdmin.addEventListener('click', () => activateAuthTab('admin'));
  if (tabStudent) tabStudent.addEventListener('click', () => activateAuthTab('student'));
  if (tabRegister) tabRegister.addEventListener('click', () => activateAuthTab('register'));

  // Admin Login Handler (Username: admin, Password: admin123 / admin)
  if (formAdmin) {
    formAdmin.addEventListener('submit', (e) => {
      e.preventDefault();
      const u = document.getElementById('modal-admin-user').value.trim();
      const p = document.getElementById('modal-admin-pass').value.trim();

      if ((u === 'admin' || u === 'admin@wti.com') && (p === 'admin123' || p === 'admin' || p === 'wti2026')) {
        if (errorAdmin) errorAdmin.style.display = 'none';
        sessionStorage.setItem('wti_admin_auth', 'true');
        if (authModal) authModal.classList.remove('active');

        setupAdminAuth();
        switchPortalView('admin-portal');
        renderAdminPanel();
        alert('🎉 Welcome Admin! Master Control Panel Unlocked.');
      } else {
        if (errorAdmin) errorAdmin.style.display = 'block';
      }
    });
  }

  // Student Login Handler
  if (formStudent) {
    formStudent.addEventListener('submit', (e) => {
      e.preventDefault();
      const idInput = document.getElementById('modal-stu-login-id').value.trim().toUpperCase();
      const student = store.students.find(s =>
        s.enrollmentNo.toUpperCase() === idInput ||
        s.phone === idInput ||
        s.name.toUpperCase().includes(idInput)
      ) || store.students[0];

      if (student) {
        if (errorStudent) errorStudent.style.display = 'none';
        store.activeStudent = student;
        store.activeSessions += 1;
        store.save();
        if (authModal) authModal.classList.remove('active');
        switchPortalView('student-portal');
        renderStudentPortal();
        alert(`🎓 Welcome Back, ${student.name}! Logged into Student Dashboard.`);
      } else {
        if (errorStudent) errorStudent.style.display = 'block';
      }
    });
  }

  // Student Register Handler
  if (formRegister) {
    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-input-name').value.trim();
      const father = document.getElementById('reg-input-father').value.trim();
      const course = document.getElementById('reg-input-course').value;
      const phone = document.getElementById('reg-input-phone').value.trim();
      const address = document.getElementById('reg-input-address').value.trim();

      const seq = Math.floor(100 + Math.random() * 900);
      const newStu = {
        id: `STU-2026-${seq}`,
        enrollmentNo: `WTI/2026/0${seq}`,
        studentId: `WTI-STU-${1000 + seq}`,
        name: name,
        fatherName: father,
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
        courseId: "GEN",
        courseName: course,
        category: "Safety & Technical",
        batch: "2026-2027",
        duration: "1 Year",
        joiningDate: new Date().toISOString().split('T')[0],
        validTill: "2027-08-31",
        phone: phone,
        email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
        address: address,
        attendance: { total: 30, present: 30, absent: 0, percentage: 100 },
        fees: { total: 25000, paid: 10000, remaining: 15000, dueDate: "2026-10-01" },
        marksheet: {
          examTitle: "Initial Assessment Exam 2026",
          resultDate: "Pending",
          grade: "A",
          totalMarks: 500,
          obtainedMarks: 410,
          percentage: "82%",
          status: "PASS",
          subjects: [
            { subject: "General Safety Rules", maxMarks: 100, obtained: 85 },
            { subject: "Hazard Identification", maxMarks: 100, obtained: 80 }
          ]
        }
      };

      store.addStudent(newStu);
      store.activeStudent = newStu;
      if (authModal) authModal.classList.remove('active');
      switchPortalView('student-portal');
      renderStudentPortal();
      alert(`🎉 Registration Successful!\nStudent: ${name}\nEnrollment No: ${newStu.enrollmentNo}\nWelcome to WTI!`);
    });
  }
}

function setupNavigation() {
  const leftSidebar = document.getElementById('left-app-sidebar');
  const sidebarToggleBtn = document.getElementById('btn-toggle-left-menu');
  const sidebarCloseBtn = document.getElementById('btn-close-left-sidebar');

  // Toggle Left Sidebar Drawer (Mobile & Desktop)
  if (sidebarToggleBtn && leftSidebar) {
    sidebarToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      leftSidebar.classList.toggle('open');
    });
  }

  if (sidebarCloseBtn && leftSidebar) {
    sidebarCloseBtn.addEventListener('click', () => {
      leftSidebar.classList.remove('open');
    });
  }

  // Close drawer when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (leftSidebar && leftSidebar.classList.contains('open')) {
      if (!leftSidebar.contains(e.target) && sidebarToggleBtn && !sidebarToggleBtn.contains(e.target)) {
        leftSidebar.classList.remove('open');
      }
    }
  });

  function switchPortalView(targetView) {
    const viewContainers = document.querySelectorAll('.view-container');
    const leftMenuItems = document.querySelectorAll('.left-menu-item');
    const portalBtns = document.querySelectorAll('.portal-btn');

    viewContainers.forEach(v => {
      v.classList.remove('active');
      v.style.display = 'none';
    });

    const activeEl = document.getElementById(targetView);
    if (activeEl) {
      activeEl.classList.add('active');
      activeEl.style.display = 'block';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Sync active state in left menu
    leftMenuItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-view') === targetView) {
        item.classList.add('active');
      }
    });

    // Sync active state in header portal tabs
    portalBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.remove('active-admin');
      if (btn.getAttribute('data-view') === targetView) {
        if (targetView === 'admin-portal') {
          btn.classList.add('active-admin');
        } else {
          btn.classList.add('active');
        }
      }
    });
  }

  window.switchPortalView = switchPortalView;

  window.handleLeftMenuClick = function (element, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const view = element.getAttribute('data-view');
    const action = element.getAttribute('data-action');
    const section = element.getAttribute('data-section');
    const cat = element.getAttribute('data-cat');
    const sidebar = document.getElementById('left-app-sidebar');

    // Update active class
    document.querySelectorAll('.left-menu-item').forEach(i => i.classList.remove('active'));
    element.classList.add('active');

    if (view) {
      window.switchPortalView(view);
    } else if (action === 'open-id-modal') {
      openIdCardModal(store.activeStudent);
    } else if (action && action.startsWith('switch-student-')) {
      window.switchPortalView('student-portal');
      const tabKey = action.replace('switch-student-', '');
      setTimeout(() => {
        const dashTabBtn = document.querySelector(`.dash-menu-item[data-tab="${tabKey}"]`);
        if (dashTabBtn) dashTabBtn.click();
      }, 50);
    } else if (cat) {
      window.switchPortalView('home-portal');
      setTimeout(() => {
        const catEl = document.getElementById(`cat-${cat}`) || document.getElementById(section);
        if (catEl) {
          catEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          catEl.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
          catEl.style.borderColor = '#5DFFD9';
          catEl.style.boxShadow = '0 0 40px rgba(93, 255, 217, 0.7)';
          setTimeout(() => {
            catEl.style.boxShadow = '';
          }, 2500);
        }
      }, 100);
    } else if (section) {
      window.switchPortalView('home-portal');
      setTimeout(() => {
        const secEl = document.getElementById(section);
        if (secEl) secEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Auto-close drawer on mobile
    if (window.innerWidth < 1024 && sidebar) {
      sidebar.classList.remove('open');
    }
  };

  // Quick verification button in navbar
  const verifyQuickBtn = document.getElementById('btn-verify-quick-nav');
  if (verifyQuickBtn) {
    verifyQuickBtn.addEventListener('click', () => {
      window.switchPortalView('verification-portal');
    });
  }
}

/* -------------------------------------------------------------
   1. PUBLIC HOME PAGE RENDERING
------------------------------------------------------------- */
function renderPublicHome() {
  // Render 14 Core Home Cards
  const cardsGrid = document.getElementById('home-cards-grid');
  if (!cardsGrid) return;

  const coreCards = [
    { num: "01", icon: "🎓", title: "Student Categories", desc: "Fire & Safety, ITI Trades, Engineering Diplomas, Computer & Short Skills", view: "cat-section" },
    { num: "02", icon: "📚", title: "Courses Offered", desc: "ADIS, PGDIS, DFSM, Electrician, Fitter, ADCA, Tally, Safety Skills", view: "cat-section" },
    { num: "03", icon: "🪪", title: "Digital ID Card", desc: "Instant official student verification profile with QR Code", action: "open-id-modal" },
    { num: "04", icon: "📜", title: "Certificate Verification", desc: "Live online anti-forge certificate lookup & employer validation", action: "open-verify" },
    { num: "05", icon: "📄", title: "My Certificates", desc: "Download high-resolution course & safety training certificates", action: "switch-student-certs" },
    { num: "06", icon: "📖", title: "Study Material", desc: "Course-wise PDFs, HD Practical Videos, Audio & Quizzes", action: "switch-student-materials" },
    { num: "07", icon: "📝", title: "Online Exam", desc: "Interactive computer-based assessment & certificate eligibility", action: "switch-student-exam" },
    { num: "08", icon: "📊", title: "Result & Marksheets", desc: "Subject-wise marks breakdown, total grade & PDF marksheet download", action: "switch-student-result" },
    { num: "09", icon: "📅", title: "Attendance Log", desc: "Track overall attendance percentage, present & absent logs", action: "switch-student-attendance" },
    { num: "10", icon: "💰", title: "Fees & Receipts", desc: "Fee status, remaining dues, online payments & digital receipts", action: "switch-student-fees" },
    { num: "11", icon: "💼", title: "Placement & Jobs", desc: "100% placement assistance for India & Gulf Oil/Gas contracts", action: "switch-student-jobs" },
    { num: "12", icon: "📢", title: "Notice Board", desc: "Latest exam schedules, batch announcements & interview alerts", action: "switch-student-notices" },
    { num: "13", icon: "🏆", title: "Achievements", desc: "WTI industry awards, Gulf placements & practical training lab", view: "achievements-section" },
    { num: "14", icon: "📞", title: "Contact Institute", desc: "Deoria UP address, Helpline: 8528372209, Google Maps", view: "contact-section" }
  ];

  cardsGrid.innerHTML = coreCards.map(c => `
    <div class="home-card" data-action="${c.action || ''}" data-target="${c.view || ''}">
      <span class="home-card-num">${c.num}</span>
      <div class="home-card-icon">${c.icon}</div>
      <div>
        <h3 class="home-card-title">${c.title}</h3>
        <p class="home-card-desc">${c.desc}</p>
      </div>
      <div class="home-card-action">Explore Section →</div>
    </div>
  `).join('');

  // Add click handlers for home cards
  document.querySelectorAll('.home-card').forEach(card => {
    card.addEventListener('click', () => {
      const action = card.getAttribute('data-action');
      const target = card.getAttribute('data-target');

      if (action === 'open-id-modal') {
        openIdCardModal(store.activeStudent);
      } else if (action === 'open-verify') {
        document.querySelector('[data-view="verification-portal"]').click();
      } else if (action && action.startsWith('switch-student-')) {
        document.querySelector('[data-view="student-portal"]').click();
        const subTab = action.replace('switch-student-', '');
        const btn = document.querySelector(`.dash-menu-item[data-tab="${subTab}"]`);
        if (btn) btn.click();
      } else if (target) {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Render Categories Accordion Section
  renderCategoryExplorer();
  renderAffiliationsBar();
  renderFacultyGrid();
}

function renderCategoryExplorer() {
  const container = document.getElementById('categories-explorer');
  if (!container) return;

  container.innerHTML = store.categories.map(cat => `
    <div class="cat-box" id="cat-${cat.id}" style="overflow:hidden; border-radius:18px; margin-bottom:28px; background:rgba(10, 24, 18, 0.85); border:1px solid rgba(93, 255, 217, 0.25); box-shadow:0 12px 30px rgba(0,0,0,0.6);">
      <div style="position:relative; height:200px; overflow:hidden; border-bottom:2px solid #33BC65;">
        <img src="${cat.image || 'course-fire-safety.png'}" alt="${cat.title}" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.75);" />
        <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.4) 60%, transparent 100%);"></div>
        <div style="position:absolute; bottom:16px; left:20px; right:20px; display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:10px;">
          <div>
            <span class="cat-icon-badge" style="margin-bottom:6px; display:inline-block; font-size:1.6rem;">${cat.icon}</span>
            <h3 class="cat-name" style="font-size:1.45rem; color:#FFFFFF; margin:0; text-shadow:0 2px 10px rgba(0,0,0,0.8); font-weight:800;">${cat.title}</h3>
            <p class="cat-desc" style="font-size:0.85rem; color:#5DFFD9; margin:4px 0 0 0; font-weight:600;">${cat.description}</p>
          </div>
          <span class="badge-status badge-valid" style="padding:6px 14px; font-size:0.8rem; box-shadow:0 4px 12px rgba(0,0,0,0.5);">${cat.badge}</span>
        </div>
      </div>

      <div class="courses-pills-grid" style="padding:20px; display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
        ${cat.courses.map(c => `
          <div class="course-pill-card" style="background:rgba(13, 28, 22, 0.85); border:1px solid rgba(93, 255, 217, 0.2); border-radius:14px; overflow:hidden; transition:var(--transition); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:130px; width:100%; overflow:hidden; position:relative;">
                <img src="${c.image || cat.image || 'course-fire-safety.png'}" alt="${c.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
                <span class="course-code-tag" style="position:absolute; top:10px; left:10px; background:rgba(7, 7, 7, 0.9); color:#5DFFD9; border:1px solid #5DFFD9; padding:4px 10px; border-radius:6px; font-weight:800; font-size:0.75rem; box-shadow:0 2px 8px rgba(0,0,0,0.6);">${c.code}</span>
              </div>
              <div style="padding:14px;">
                <h4 style="font-size:0.98rem; font-weight:800; color:#FFFFFF; margin-bottom:8px; line-height:1.35;">${c.name}</h4>
                <div class="course-meta" style="font-size:0.78rem; color:var(--text-muted); line-height:1.5;">
                  <div style="margin-bottom:2px;">⏱️ Duration: <strong style="color:#5DFFD9;">${c.duration}</strong></div>
                  <div>🎓 Eligibility: <strong>${c.eligibility}</strong></div>
                </div>
              </div>
            </div>
            <div style="padding:0 14px 14px 14px;">
              <button class="btn-primary" onclick="window.switchPortalView('student-portal')" style="width:100%; justify-content:center; padding:8px 12px; font-size:0.8rem;">🚀 Enroll & Study Course</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderAffiliationsBar() {
  const container = document.getElementById('affiliations-container');
  if (!container) return;

  container.innerHTML = instituteInfo.affiliations.map(a => `
    <div class="affil-card">
      <div class="affil-name">${a.name}</div>
      <div style="font-size:0.75rem; color:#475569; margin-top:2px;">${a.fullName}</div>
      <div class="affil-badge">✓ ${a.badge}</div>
    </div>
  `).join('');
}

function renderFacultyGrid() {
  const container = document.getElementById('faculty-grid');
  if (!container) return;

  container.innerHTML = facultyMembers.map(f => `
    <div class="home-card" style="cursor:default;">
      <img src="${f.photo}" alt="${f.name}" style="width:100%; height:180px; object-fit:cover; border-radius:10px; margin-bottom:12px;">
      <h3 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${f.name}</h3>
      <div style="color:var(--orange-bright); font-size:0.8rem; font-weight:700; margin-bottom:6px;">${f.designation}</div>
      <div style="font-size:0.78rem; color:var(--text-muted);">🎓 ${f.qualifications}</div>
      <div style="font-size:0.78rem; color:var(--navy-blue); font-weight:600; margin-top:4px;">💼 ${f.experience}</div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
   2. STUDENT PORTAL RENDERING
------------------------------------------------------------- */
function renderStudentPortal() {
  const student = store.activeStudent;
  if (!student) return;

  // Set Profile Sidebar Data
  const profileAvatar = document.getElementById('stu-profile-avatar');
  const profileName = document.getElementById('stu-profile-name');
  const profileCourse = document.getElementById('stu-profile-course');

  if (profileAvatar) profileAvatar.src = student.photo;
  if (profileName) profileName.textContent = student.name;
  if (profileCourse) profileCourse.textContent = `${student.courseName} (${student.batch})`;

  // Setup Dashboard Sidebar Tabs
  const menuItems = document.querySelectorAll('.dash-menu-item[data-tab]');
  const tabPanes = document.querySelectorAll('.dash-tab-pane');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      menuItems.forEach(i => i.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const targetPane = document.getElementById(`tab-${tabId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Render Student Dashboard Sections
  renderStudentOverview(student);
  renderStudentCertificates(student);
  renderStudentStudyMaterials();
  renderStudentExamSection(student);
  renderStudentResultSection(student);
  renderStudentAttendanceSection(student);
  renderStudentFeesSection(student);
  renderStudentJobsSection();
  renderStudentNoticesSection();
}

function renderStudentOverview(student) {
  const container = document.getElementById('tab-overview');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="font-family:'Outfit'; font-size:1.6rem; color:var(--navy-dark);">Welcome Back, ${student.name}! 👋</h2>
        <p style="color:var(--text-muted); font-size:0.88rem;">Enrollment No: <strong>${student.enrollmentNo}</strong> | Course: <strong>${student.courseName}</strong></p>
      </div>
      <button class="btn-primary" id="btn-open-my-id-card">🪪 Open Digital ID Card</button>
    </div>

    <!-- Quick Stats Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:16px; margin-bottom:30px;">
      <div style="background:linear-gradient(135deg, #0b2545, #134074); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">ATTENDANCE RATE</div>
        <div style="font-size:2rem; font-weight:800; color:#4ade80;">${student.attendance.percentage}%</div>
        <div style="font-size:0.75rem; opacity:0.9;">Present: ${student.attendance.present} / ${student.attendance.total} Days</div>
      </div>
      <div style="background:linear-gradient(135deg, #e65100, #ff6b00); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">FEE BALANCE</div>
        <div style="font-size:2rem; font-weight:800;">₹${student.fees.remaining}</div>
        <div style="font-size:0.75rem; opacity:0.9;">Total Paid: ₹${student.fees.paid}</div>
      </div>
      <div style="background:linear-gradient(135deg, #059669, #10b981); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">ACADEMIC RESULT</div>
        <div style="font-size:2rem; font-weight:800;">${student.marksheet ? student.marksheet.percentage : '89%'}</div>
        <div style="font-size:0.75rem; opacity:0.9;">Grade: ${student.marksheet ? student.marksheet.grade : 'A+'} (${student.marksheet ? student.marksheet.status : 'PASS'})</div>
      </div>
    </div>

    <!-- Enrolled Course Summary & QR Banner -->
    <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:14px; padding:20px; display:flex; justify-content:space-between; align-items:center; gap:20px;">
      <div>
        <h4 style="color:var(--navy-dark); font-weight:800; font-size:1.1rem; margin-bottom:4px;">Official WTI Registered Profile</h4>
        <p style="font-size:0.85rem; color:var(--text-muted);">Father's Name: ${student.fatherName} | Batch: ${student.batch} | Contact: ${student.phone}</p>
        <p style="font-size:0.85rem; color:var(--orange-bright); font-weight:700; margin-top:4px;">Address: ${student.address}</p>
      </div>
      <div style="text-align:center;">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=WTI-VERIFY-${student.enrollmentNo}" style="border:1px solid #ccc; padding:4px; background:#fff; border-radius:6px;" />
        <div style="font-size:0.65rem; color:var(--text-muted); font-weight:700; margin-top:2px;">Scan Profile QR</div>
      </div>
    </div>
  `;

  const idBtn = document.getElementById('btn-open-my-id-card');
  if (idBtn) {
    idBtn.addEventListener('click', () => openIdCardModal(student));
  }
}

function renderStudentCertificates(student) {
  const container = document.getElementById('tab-certificates');
  if (!container) return;

  const studentCerts = store.certificates.filter(c => c.studentId === student.studentId || c.studentName === student.name);

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📜 My Verified Certificates</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Official DigiLocker & WTI QR Code verified certificates issued to you.</p>
    </div>

    ${studentCerts.length === 0 ? '<p>No certificates issued yet.</p>' : `
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:20px;">
        ${studentCerts.map(c => `
          <div class="home-card" style="cursor:default;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
              <span class="badge-status badge-valid">✓ ${c.status}</span>
              <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Issue Date: ${c.issueDate}</span>
            </div>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${c.courseName}</h4>
            <div style="font-size:0.82rem; color:var(--orange-bright); font-weight:700; margin:4px 0 10px 0;">Cert No: ${c.certificateNo}</div>
            <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;">Grade/Rating: <strong>${c.grade}</strong> | Type: ${c.type}</div>
            <button class="btn-primary btn-view-cert" data-cert="${c.certificateNo}" style="width:100%; justify-content:center; padding:10px; font-size:0.85rem;">🖨️ View & Print Certificate</button>
          </div>
        `).join('')}
      </div>
    `}
  `;

  document.querySelectorAll('.btn-view-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const certNo = btn.getAttribute('data-cert');
      const cert = store.verifyCertificate(certNo);
      if (cert) openCertificateModal(cert);
    });
  });
}

function renderStudentStudyMaterials() {
  const container = document.getElementById('tab-study-material');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📖 Course Study Materials & Video Lessons</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Download course handbooks, watch practical videos, and review notes.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:18px;">
      ${store.materials.map(m => `
        <div class="home-card" style="cursor:default;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:1.8rem;">${m.icon}</span>
            <span class="course-code-tag">${m.courseCode}</span>
          </div>
          <h4 style="font-size:1rem; font-weight:800; color:var(--navy-dark);">${m.topic}</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin:8px 0 14px 0;">${m.description}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--orange-bright);">${m.type} (${m.fileSize})</span>
            <button class="btn-secondary" style="padding:6px 14px; font-size:0.78rem; background:var(--navy-main);" onclick="alert('Downloading ${m.topic}...')">📥 Download</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderStudentExamSection(student) {
  const container = document.getElementById('tab-exam');
  if (!container) return;

  const exam = store.exams[0];

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📝 Online Computer-Based Examination</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Take automated online assessments for instant result grading & certification eligibility.</p>
    </div>

    <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:14px; padding:24px; max-width:650px;">
      <span class="badge-status badge-valid" style="margin-bottom:10px;">STATUS: READY TO TAKE</span>
      <h4 style="font-size:1.2rem; font-weight:800; color:var(--navy-dark); margin-bottom:6px;">${exam.title}</h4>
      <p style="font-size:0.85rem; color:var(--text-muted);">Subject: <strong>${exam.subject}</strong> | Target: ${exam.courseName}</p>
      
      <div class="grid-stats-3" style="margin:18px 0; background:#fff; padding:14px; border-radius:10px; border:1px solid var(--border-color); text-align:center;">
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Questions</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--navy-dark);">${exam.totalQuestions} MCQs</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Time Limit</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--orange-bright);">${exam.durationMins} Mins</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Passing Score</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--green-success);">${exam.passingScore}%</div>
        </div>
      </div>

      <button class="btn-primary" id="btn-start-exam-now" style="width:100%; justify-content:center;">✍️ Start Online Exam Now</button>
    </div>
  `;

  const examBtn = document.getElementById('btn-start-exam-now');
  if (examBtn) {
    examBtn.addEventListener('click', () => openExamModal(exam, student));
  }
}

function renderStudentResultSection(student) {
  const container = document.getElementById('tab-result');
  if (!container) return;

  const ms = student.marksheet;

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📊 Official Examination Result & Marksheet</h3>
        <p style="font-size:0.85rem; color:var(--text-muted);">Subject-wise marks distribution and overall academic grade.</p>
      </div>
      <button class="btn-primary" id="btn-print-marksheet">📄 Download Marksheet PDF</button>
    </div>

    ${!ms ? '<p>Result not published yet.</p>' : `
      <div style="background:#fff; border:2px solid var(--navy-main); border-radius:14px; padding:24px; max-width:800px;">
        <div style="display:flex; justify-content:space-between; border-bottom:2px solid var(--orange-bright); padding-bottom:12px; margin-bottom:16px;">
          <div>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${ms.examTitle}</h4>
            <div style="font-size:0.8rem; color:var(--text-muted);">Result Published: ${ms.resultDate}</div>
          </div>
          <div style="text-align:right;">
            <span class="badge-status badge-valid" style="font-size:0.9rem; padding:6px 14px;">${ms.status}</span>
            <div style="font-size:0.8rem; font-weight:800; color:var(--navy-main); margin-top:4px;">Grade: ${ms.grade}</div>
          </div>
        </div>

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Subject / Module</th>
                <th>Maximum Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage Score</th>
              </tr>
            </thead>
            <tbody>
              ${ms.subjects.map(s => `
                <tr>
                  <td style="font-weight:700;">${s.subject}</td>
                  <td>${s.maxMarks}</td>
                  <td style="color:var(--navy-main); font-weight:800;">${s.obtained}</td>
                  <td>${Math.round((s.obtained / s.maxMarks) * 100)}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:20px; background:var(--bg-light); padding:16px; border-radius:10px; font-weight:800;">
          <div>TOTAL OBTAINED: <span style="color:var(--navy-main);">${ms.obtainedMarks} / ${ms.totalMarks}</span></div>
          <div>OVERALL PERCENTAGE: <span style="color:var(--orange-bright);">${ms.percentage}</span></div>
        </div>
      </div>
    `}
  `;

  const printBtn = document.getElementById('btn-print-marksheet');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}

function renderStudentAttendanceSection(student) {
  const container = document.getElementById('tab-attendance');
  if (!container) return;

  const att = student.attendance;

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📅 Student Attendance Log</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Real-time classroom and practical drill attendance record.</p>
    </div>

    <div class="grid-att-summary">
      <div style="background:var(--navy-dark); color:#fff; border-radius:14px; padding:24px; text-align:center;">
        <div style="font-size:0.85rem; opacity:0.8;">OVERALL PERCENTAGE</div>
        <div style="font-size:3.2rem; font-weight:900; color:#4ade80; margin:10px 0;">${att.percentage}%</div>
        <div style="font-size:0.85rem;">Status: <span style="color:#4ade80; font-weight:700;">GOOD STANDING</span></div>
      </div>

      <div style="background:#fff; border:1px solid var(--border-color); border-radius:14px; padding:20px;">
        <h4 style="font-size:1.05rem; font-weight:800; color:var(--navy-dark); margin-bottom:14px;">Summary Breakdown</h4>
        <div class="grid-stats-3" style="text-align:center;">
          <div style="background:#f8fafc; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Total Classes</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--navy-dark);">${att.total}</div>
          </div>
          <div style="background:#d1fae5; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:#065f46;">Present</div>
            <div style="font-size:1.4rem; font-weight:800; color:#065f46;">${att.present}</div>
          </div>
          <div style="background:#fee2e2; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:#991b1b;">Absent</div>
            <div style="font-size:1.4rem; font-weight:800; color:#991b1b;">${att.absent}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStudentFeesSection(student) {
  const container = document.getElementById('tab-fees');
  if (!container) return;

  const f = student.fees;

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">💰 Fees Management & Payment Receipts</h3>
        <p style="font-size:0.85rem; color:var(--text-muted);">Track total course fees, payments made, remaining dues, and download fee receipts.</p>
      </div>
      <button class="btn-primary" id="btn-pay-online">💳 Online Fee Payment</button>
    </div>

    <div class="grid-stats-3" style="margin-bottom:24px;">
      <div style="background:#fff; border:1px solid var(--border-color); border-radius:12px; padding:18px;">
        <div style="font-size:0.78rem; color:var(--text-muted);">TOTAL COURSE FEE</div>
        <div style="font-size:1.5rem; font-weight:800; color:var(--navy-dark);">₹${f.total}</div>
      </div>
      <div style="background:#d1fae5; border:1px solid #a7f3d0; border-radius:12px; padding:18px;">
        <div style="font-size:0.78rem; color:#065f46;">TOTAL PAID AMOUNT</div>
        <div style="font-size:1.5rem; font-weight:800; color:#065f46;">₹${f.paid}</div>
      </div>
      <div style="background:#fff3e0; border:1px solid #ffe0b2; border-radius:12px; padding:18px;">
        <div style="font-size:0.78rem; color:#e65100;">REMAINING DUES</div>
        <div style="font-size:1.5rem; font-weight:800; color:#e65100;">₹${f.remaining}</div>
        <div style="font-size:0.7rem; color:#b45309; font-weight:700; margin-top:2px;">Due Date: ${f.dueDate}</div>
      </div>
    </div>

    <h4 style="font-size:1.05rem; font-weight:800; color:var(--navy-dark); margin-bottom:10px;">Payment History & Digital Receipts</h4>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Receipt No</th>
            <th>Date</th>
            <th>Amount Paid</th>
            <th>Payment Mode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-weight:700;">WTI-REC-2025/441</td>
            <td>15-Aug-2025</td>
            <td>₹10,000</td>
            <td>UPI / Bank Transfer</td>
            <td><span class="badge-status badge-valid">CONFIRMED</span></td>
            <td><button class="btn-secondary btn-receipt-print" style="padding:4px 10px; font-size:0.75rem;" data-amt="10000" data-date="15-Aug-2025" data-rec="WTI-REC-2025/441">📄 Receipt</button></td>
          </tr>
          <tr>
            <td style="font-weight:700;">WTI-REC-2026/892</td>
            <td>10-Jan-2026</td>
            <td>₹10,000</td>
            <td>Cash Deposit</td>
            <td><span class="badge-status badge-valid">CONFIRMED</span></td>
            <td><button class="btn-secondary btn-receipt-print" style="padding:4px 10px; font-size:0.75rem;" data-amt="10000" data-date="10-Jan-2026" data-rec="WTI-REC-2026/892">📄 Receipt</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  document.querySelectorAll('.btn-receipt-print').forEach(btn => {
    btn.addEventListener('click', () => {
      const rec = btn.getAttribute('data-rec');
      const amt = btn.getAttribute('data-amt');
      const date = btn.getAttribute('data-date');
      openFeeReceiptModal(student, rec, amt, date);
    });
  });

  const payBtn = document.getElementById('btn-pay-online');
  if (payBtn) {
    payBtn.addEventListener('click', () => {
      const amount = prompt("Enter amount to pay (₹):", student.fees.remaining);
      if (amount && !isNaN(amount)) {
        alert(`Payment of ₹${amount} successful via WTI Gateway! Digital receipt generated.`);
        student.fees.paid += parseInt(amount);
        student.fees.remaining = Math.max(0, student.fees.total - student.fees.paid);
        store.save();
        renderStudentFeesSection(student);
      }
    });
  }
}

function renderStudentJobsSection() {
  const container = document.getElementById('tab-placement-jobs');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">💼 Placement & Job Opportunities (India & Gulf)</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Exclusive job vacancies for WTI Fire & Safety, ITI, and Diploma graduates.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:20px;">
      ${store.jobs.map(j => `
        <div class="home-card" style="cursor:default;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="badge-status badge-urgent">${j.type}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${j.postedDate}</span>
          </div>
          <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${j.title}</h4>
          <div style="font-size:0.85rem; font-weight:700; color:var(--orange-bright); margin:2px 0 6px 0;">🏢 ${j.company}</div>
          <div style="font-size:0.8rem; color:var(--text-dark); margin-bottom:8px;">📍 ${j.location}</div>
          <div style="font-size:0.85rem; font-weight:800; color:var(--green-success); margin-bottom:10px;">💰 ${j.salary}</div>
          <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;"><strong>Req:</strong> ${j.requirements}</p>
          <button class="btn-primary" style="width:100%; justify-content:center; padding:10px; font-size:0.85rem;" onclick="alert('Application submitted to ${j.company}! WTI placement cell will contact you.')">🚀 Apply Now</button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderStudentNoticesSection() {
  const container = document.getElementById('tab-notices');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📢 Institute Notice Board & Announcements</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Important alerts regarding exams, practical drills, holidays, and campus interviews.</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:16px;">
      ${store.noticesList.map(n => `
        <div style="background:#fff; border:1px solid var(--border-color); border-left:5px solid var(--orange-bright); border-radius:10px; padding:18px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--navy-main);">${n.category.toUpperCase()}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">🗓️ ${n.date}</span>
          </div>
          <h4 style="font-size:1.05rem; font-weight:800; color:var(--navy-dark); margin-bottom:6px;">${n.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">${n.body}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/* -------------------------------------------------------------
   3. ADMIN DASHBOARD RENDERING & DYNAMIC CERTIFICATE GENERATOR
------------------------------------------------------------- */
function renderAdminPanel() {
  const container = document.getElementById('admin-portal');
  if (!container) return;

  // Setup Admin Menu Navigation
  const adminMenuItems = document.querySelectorAll('.dash-menu-item[data-admin-tab]');
  const adminTabPanes = document.querySelectorAll('.admin-tab-pane');

  adminMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-admin-tab');
      adminMenuItems.forEach(i => i.classList.remove('admin-active'));
      adminTabPanes.forEach(p => p.classList.remove('active'));

      item.classList.add('admin-active');
      const targetPane = document.getElementById(`admin-tab-${tabId}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  renderAdminOverview();
  renderAdminStudents();
  renderAdminCertificateGenerator();
}

function renderAdminOverview() {
  const container = document.getElementById('admin-tab-overview');
  if (!container) return;

  const totalRegistered = store.students.length + 12400;
  const activeLogins = store.activeSessions;
  const totalCourses = store.getTotalCoursesCount();
  const certsCount = store.certificates.length + 8500;

  container.innerHTML = `
    <h3 style="font-family:'Outfit'; font-size:1.5rem; color:#FFFFFF; margin-bottom:20px;">👨‍💼 WTI Master Executive Control Panel</h3>

    <!-- Dynamic Metrics Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:18px; margin-bottom:30px;">
      <div style="background:#0b2545; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">REGISTERED STUDENTS</div>
        <div style="font-size:2.2rem; font-weight:800; color:#38bdf8;">${totalRegistered.toLocaleString()}</div>
        <div style="font-size:0.75rem; opacity:0.8;">🎓 Student Accounts</div>
      </div>
      <div style="background:#059669; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">LOGGED IN SESSIONS</div>
        <div style="font-size:2.2rem; font-weight:800; color:#a7f3d0;">${activeLogins} Active</div>
        <div style="font-size:0.75rem; opacity:0.8;">🟢 Live Active Logins</div>
      </div>
      <div style="background:#6a1b9a; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">TOTAL COURSES</div>
        <div style="font-size:2.2rem; font-weight:800; color:#e9d5ff;">${totalCourses} Courses</div>
        <div style="font-size:0.75rem; opacity:0.8;">📚 Across 5 Divisions</div>
      </div>
      <div style="background:#e65100; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">CERTIFICATES ISSUED</div>
        <div style="font-size:2.2rem; font-weight:800; color:#ffb74d;">${certsCount.toLocaleString()}</div>
        <div style="font-size:0.75rem; opacity:0.8;">📜 QR Verified</div>
      </div>
    </div>

    <!-- COURSE CREATION TOOL -->
    <div style="background:rgba(10, 24, 18, 0.85); border:2px solid #33BC65; border-radius:16px; padding:24px; margin-bottom:30px;">
      <h4 style="font-family:'Outfit'; font-size:1.25rem; font-weight:800; color:#5DFFD9; margin-bottom:6px;">📚 Add New Course to Website Catalog</h4>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:18px;">Enter details below to publish a new course directly into WTI course divisions.</p>

      <form id="form-admin-add-course" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Course Division / Category</label>
          <select id="new-course-category" class="form-select" required>
            <option value="fire-safety">🔥 Fire & Safety Courses</option>
            <option value="iti-technical">⚙️ ITI / Technical Trades</option>
            <option value="diploma-engg">🛠️ Diploma Courses</option>
            <option value="computer">💻 Computer Courses</option>
            <option value="short-skills">📜 Short-Term Safety Skills</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Course Code Tag</label>
          <input type="text" id="new-course-code" class="form-input" placeholder="e.g. NEBOSH-IGC" required />
        </div>

        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Course Title Name</label>
          <input type="text" id="new-course-name" class="form-input" placeholder="e.g. NEBOSH International General Cert" required />
        </div>

        <div class="form-group" style="margin-bottom:0;">
          <label class="form-label">Duration</label>
          <input type="text" id="new-course-duration" class="form-input" placeholder="e.g. 1 Month / 1 Year" value="1 Year" required />
        </div>

        <div class="form-group" style="margin-bottom:0; grid-column: 1 / -1;">
          <label class="form-label">Eligibility Requirement</label>
          <input type="text" id="new-course-eligibility" class="form-input" placeholder="e.g. 10th Pass / Safety Officers" value="10th / 12th Pass" required />
        </div>

        <div style="grid-column: 1 / -1; margin-top:6px;">
          <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:12px; font-size:0.95rem;">⚡ Publish New Course to Website</button>
        </div>
      </form>
    </div>

    <h4 style="font-size:1.1rem; font-weight:800; color:#FFFFFF; margin-bottom:12px;">Quick Action Shortcuts</h4>
    <div style="display:flex; gap:14px; flex-wrap:wrap;">
      <button class="btn-primary" id="btn-quick-gen-cert">📜 Generate New Certificate</button>
      <button class="btn-secondary" style="background:var(--navy-main);" id="btn-quick-add-student">👨‍🎓 Register New Student</button>
      <button class="btn-secondary" style="background:var(--orange-bright);" id="btn-quick-post-job">💼 Post Job Vacancy</button>
    </div>
  `;

  document.getElementById('form-admin-add-course')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const catId = document.getElementById('new-course-category').value;
    const code = document.getElementById('new-course-code').value.trim().toUpperCase();
    const name = document.getElementById('new-course-name').value.trim();
    const duration = document.getElementById('new-course-duration').value.trim();
    const eligibility = document.getElementById('new-course-eligibility').value.trim();

    store.addCourse(catId, { code, name, duration, eligibility });
    alert(`🎉 New Course Published Successfully!\nCourse: ${name} (${code})\nDuration: ${duration}`);
    renderCategoryExplorer();
    renderAdminOverview();
  });

  document.getElementById('btn-quick-gen-cert')?.addEventListener('click', () => {
    document.querySelector('[data-admin-tab="cert-generator"]').click();
  });
  document.getElementById('btn-quick-add-student')?.addEventListener('click', () => {
    openAddStudentModal();
  });
  document.getElementById('btn-quick-post-job')?.addEventListener('click', () => {
    openAddJobModal();
  });
}

function renderAdminStudents() {
  const container = document.getElementById('admin-tab-students');
  if (!container) return;

  container.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">👨‍🎓 Student Management Directory</h3>
      <button class="btn-primary" id="btn-admin-add-stu-modal">+ Add New Student</button>
    </div>

    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Enrollment No</th>
            <th>Student Name</th>
            <th>Father's Name</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${store.students.map(s => `
            <tr>
              <td style="font-weight:700; color:var(--orange-amber);">${s.enrollmentNo}</td>
              <td style="font-weight:700;">${s.name}</td>
              <td>${s.fatherName}</td>
              <td>${s.courseName}</td>
              <td>${s.batch}</td>
              <td>${s.phone}</td>
              <td>
                <button class="btn-secondary btn-admin-view-id" style="padding:4px 8px; font-size:0.75rem;" data-id="${s.id}">🪪 ID Card</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('btn-admin-add-stu-modal')?.addEventListener('click', openAddStudentModal);

  document.querySelectorAll('.btn-admin-view-id').forEach(btn => {
    btn.addEventListener('click', () => {
      const sId = btn.getAttribute('data-id');
      const stu = store.students.find(s => s.id === sId);
      if (stu) openIdCardModal(stu);
    });
  });
}

function renderAdminCertificateGenerator() {
  const container = document.getElementById('admin-tab-cert-generator');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📜 Dynamic Template-Based Certificate Generator</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Step-by-step workflow: Select Type → Select Course → Select Student → Auto Generate Certificate with QR Code & Digital Signature.</p>
    </div>

    <div style="background:#f8fafc; border:2px solid var(--navy-main); border-radius:14px; padding:24px; max-width:750px;">
      <form id="form-cert-generator">
        <div class="form-group">
          <label class="form-label">Step 1: Certificate Type</label>
          <select class="form-select" id="cert-type-select" required>
            <option value="Diploma Certificate">A. Course Completion / Diploma Certificate</option>
            <option value="Safety Skill Certificate">B. Safety Certificates (Fire Fighting, First Aid, Scaffolding, LOTO, Work at Height, HIRA/JSA)</option>
            <option value="Technical Trade Certificate">C. Academic / Technical ITI Skill Certificate</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Step 2: Select Student</label>
          <select class="form-select" id="cert-student-select" required>
            ${store.students.map(s => `
              <option value="${s.id}">${s.name} (${s.enrollmentNo}) - ${s.courseName}</option>
            `).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Step 3: Grade / Rating / Marks</label>
          <input type="text" class="form-input" id="cert-grade-input" value="Grade A+ (Outstanding Performance)" required />
        </div>

        <div class="form-group">
          <label class="form-label">Step 4: Issue Date</label>
          <input type="date" class="form-input" id="cert-date-input" value="2026-08-10" required />
        </div>

        <button type="submit" class="btn-primary" style="width:100%; justify-content:center; padding:12px; margin-top:10px;">⚡ Auto-Generate Certificate & Create QR Code</button>
      </form>
    </div>

    <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark); margin:30px 0 12px 0;">Issued Certificates Registry</h4>
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Certificate No</th>
            <th>Student Name</th>
            <th>Course / Skill</th>
            <th>Type</th>
            <th>Issue Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="cert-registry-tbody">
          ${store.certificates.map(c => `
            <tr>
              <td style="font-weight:700; color:var(--orange-bright);">${c.certificateNo}</td>
              <td style="font-weight:700;">${c.studentName}</td>
              <td>${c.courseName}</td>
              <td>${c.type}</td>
              <td>${c.issueDate}</td>
              <td><span class="badge-status badge-valid">${c.status}</span></td>
              <td>
                <button class="btn-secondary btn-preview-admin-cert" data-cert="${c.certificateNo}" style="padding:4px 8px; font-size:0.75rem;">🖨️ View/Print</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  const certForm = document.getElementById('form-cert-generator');
  if (certForm) {
    certForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const studentId = document.getElementById('cert-student-select').value;
      const certType = document.getElementById('cert-type-select').value;
      const grade = document.getElementById('cert-grade-input').value;
      const dateVal = document.getElementById('cert-date-input').value;

      const student = store.students.find(s => s.id === studentId);
      if (!student) return;

      const certNoSeq = Math.floor(100000 + Math.random() * 900000);
      const newCert = {
        certificateNo: `WTI/FS/2026/${certNoSeq}`,
        type: certType,
        studentId: student.studentId,
        studentName: student.name,
        fatherName: student.fatherName,
        courseName: student.courseName,
        duration: `${student.duration} (Batch ${student.batch})`,
        issueDate: dateVal,
        grade: grade,
        status: "VALID",
        verificationUrl: "WTI Certificate Verification",
        qrData: `WTI-VERIFY-WTI/FS/2026/${certNoSeq}-${student.name.replace(/\s+/g, '-')}`,
        photo: student.photo
      };

      store.addCertificate(newCert);
      alert(`Certificate Generated Successfully!\nCertificate No: ${newCert.certificateNo}\nQR Code Linked to Verification Engine.`);
      renderAdminCertificateGenerator();
      openCertificateModal(newCert);
    });
  }

  document.querySelectorAll('.btn-preview-admin-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const cNo = btn.getAttribute('data-cert');
      const cert = store.verifyCertificate(cNo);
      if (cert) openCertificateModal(cert);
    });
  });
}

/* -------------------------------------------------------------
   4. LIVE QR CERTIFICATE VERIFICATION SYSTEM
------------------------------------------------------------- */
function setupVerificationEngine() {
  const form = document.getElementById('form-cert-verify-search');
  const resultBox = document.getElementById('verify-result-container');

  if (!form || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('input-cert-search').value;
    const cert = store.verifyCertificate(query);

    if (cert) {
      resultBox.innerHTML = `
        <div style="background:#fff; border:3px solid var(--green-success); border-radius:16px; padding:30px; max-width:650px; margin:0 auto; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
          <div style="text-align:center; border-bottom:2px solid var(--border-color); padding-bottom:16px; margin-bottom:20px;">
            <span class="badge-status badge-valid" style="font-size:1.1rem; padding:8px 20px;">✅ OFFICIAL VALID WTI CERTIFICATE</span>
            <h3 style="font-family:'Outfit'; font-size:1.5rem; color:var(--navy-dark); margin-top:12px;">WTI Online Verification Portal</h3>
          </div>

          <div class="grid-verify-person" style="margin-bottom:20px;">
            <img src="${cert.photo}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; border:3px solid var(--orange-bright);" />
            <div>
              <h4 style="font-size:1.2rem; font-weight:800; color:var(--navy-dark);">${cert.studentName}</h4>
              <div style="font-size:0.85rem; color:var(--text-muted);">Father's Name: ${cert.fatherName}</div>
              <div style="font-size:0.9rem; font-weight:800; color:var(--orange-bright); margin-top:4px;">Course: ${cert.courseName}</div>
            </div>
          </div>

          <div style="background:var(--bg-light); border-radius:10px; padding:16px; font-size:0.85rem; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Certificate No:</span>
              <strong style="color:var(--navy-main);">${cert.certificateNo}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Issue Date:</span>
              <strong>${cert.issueDate}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Grade / Rating:</span>
              <strong>${cert.grade}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Affiliation / Approval:</span>
              <strong style="color:var(--orange-amber);">BSS, NCVTE & DigiLocker Approved</strong>
            </div>
          </div>

          <button class="btn-primary" style="width:100%; justify-content:center;" onclick="window.print()">🖨️ Download Verified Verification Copy</button>
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <div style="background:#fff; border:3px solid var(--red-error); border-radius:16px; padding:30px; max-width:600px; margin:0 auto; text-align:center;">
          <span class="badge-status badge-urgent" style="font-size:1.1rem; padding:8px 20px; margin-bottom:14px;">❌ CERTIFICATE NOT FOUND / INVALID</span>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-top:12px;">No certificate matches ID "${query}". Please check the Certificate Number or scan QR code directly.</p>
        </div>
      `;
    }
  });
}

/* -------------------------------------------------------------
   5. GLOBAL MODAL CONTROLLERS & PRINT PREVIEWS
------------------------------------------------------------- */
function setupGlobalModals() {
  const closeBtns = document.querySelectorAll('.modal-close-btn');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });
}

function openCertificateModal(cert) {
  const modal = document.getElementById('modal-certificate-view');
  const frame = document.getElementById('certificate-render-frame');
  if (!modal || !frame) return;

  frame.innerHTML = `
    <div class="certificate-frame printable-area">
      <div class="cert-corner-ornament cert-tl"></div>
      <div class="cert-corner-ornament cert-tr"></div>
      <div class="cert-corner-ornament cert-bl"></div>
      <div class="cert-corner-ornament cert-br"></div>

      <div class="cert-header">
        <img src="wti-logo.png" alt="WTI Official Logo" style="height:70px; margin-bottom:8px; display:inline-block;" />
        <div style="font-size:0.8rem; font-weight:800; color:var(--navy-main); letter-spacing:2px;">WORLD TECHNICAL INSTITUTE (WTI)</div>
        <h1 class="cert-inst-name">${instituteInfo.name}</h1>
        <p class="cert-inst-sub">Regd Addr: ${instituteInfo.regAddress} | Call: ${instituteInfo.contactNumber}</p>
        <div style="font-size:0.75rem; color:#475569; margin-top:4px;">Affiliated & Approved: BSS | NCVTE | MSBTE | DigiLocker Approved Certificate</div>
      </div>

      <div class="cert-title-badge">${cert.type}</div>

      <div class="cert-body-text">
        This is to certify that Mr./Ms. <br />
        <span class="cert-student-highlight">${cert.studentName}</span> <br />
        Son / Daughter of <strong>${cert.fatherName}</strong> <br />
        has successfully completed the prescribed course in <br />
        <span class="cert-course-highlight">${cert.courseName}</span> <br />
        with duration <strong>${cert.duration}</strong> and has secured <strong>${cert.grade}</strong>.
      </div>

      <div class="cert-footer-grid">
        <div class="cert-qr-box">
          <img class="cert-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${encodeURIComponent(cert.qrData)}" />
          <div style="font-size:0.65rem; font-weight:700; margin-top:4px;">Verify: ${cert.certificateNo}</div>
        </div>

        <div style="text-align:center;">
          <div style="width:70px; height:70px; border:2px solid var(--gold-accent); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 4px auto; color:var(--gold-accent); font-weight:800; font-size:0.7rem;">WTI SEAL</div>
          <div style="font-size:0.7rem; font-weight:700;">OFFICIAL EMBOSSED SEAL</div>
        </div>

        <div class="cert-signature-box">
          <div style="font-family:'Cinzel', serif; font-weight:700; color:var(--navy-main);">Director / Examination Controller</div>
          <div class="cert-sig-line">AUTHORIZED SIGNATURE</div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function openIdCardModal(student) {
  const modal = document.getElementById('modal-idcard-view');
  const frame = document.getElementById('idcard-render-frame');
  if (!modal || !frame) return;

  frame.innerHTML = `
    <div class="id-card-wrap printable-area">
      <div class="id-card-header" style="display:flex; align-items:center; justify-content:center; gap:10px;">
        <img src="wti-logo.png" alt="WTI Logo" style="height:42px; background:#ffffff; padding:2px; border-radius:6px;" />
        <div>
          <div style="font-size:0.75rem; color:#ffb74d; font-weight:800; letter-spacing:0.5px;">WORLD TECHNICAL INSTITUTE</div>
          <div class="id-card-logo-title" style="font-size:0.95rem;">STUDENT DIGITAL ID</div>
        </div>
      </div>

      <div class="id-photo-container">
        <img class="id-photo" src="${student.photo}" />
      </div>

      <div class="id-name">${student.name}</div>
      <div class="id-course">${student.courseName}</div>

      <div class="id-details-list">
        <div class="id-detail-row">
          <span>Enrollment No:</span>
          <strong>${student.enrollmentNo}</strong>
        </div>
        <div class="id-detail-row">
          <span>Father's Name:</span>
          <strong>${student.fatherName}</strong>
        </div>
        <div class="id-detail-row">
          <span>Batch Session:</span>
          <strong>${student.batch}</strong>
        </div>
        <div class="id-detail-row">
          <span>Contact:</span>
          <strong>${student.phone}</strong>
        </div>
      </div>

      <div class="id-qr-footer">
        <img class="id-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=WTI-STUDENT-${student.enrollmentNo}" />
        <div style="font-size:0.65rem; text-align:right;">
          <div style="color:#ffb74d; font-weight:800;">WTI DEORIA CAMPUS</div>
          <div>Call: 8528372209</div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function openFeeReceiptModal(student, receiptNo, amount, date) {
  const modal = document.getElementById('modal-generic');
  const content = document.getElementById('generic-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="padding:20px; border:2px solid var(--navy-main); border-radius:12px;" class="printable-area">
      <div style="text-align:center; border-bottom:2px solid var(--orange-bright); padding-bottom:10px; margin-bottom:16px;">
        <img src="wti-logo.png" alt="WTI Official Logo" style="height:55px; margin-bottom:6px; display:inline-block;" />
        <h2 style="font-family:'Outfit'; color:var(--navy-dark); font-size:1.4rem;">WORLD TECHNICAL INSTITUTE</h2>
        <p style="font-size:0.8rem; color:var(--text-muted);">${instituteInfo.regAddress} | Call: 8528372209</p>
        <h3 style="color:var(--orange-amber); margin-top:6px; font-size:1.1rem;">DIGITAL FEE RECEIPT</h3>
      </div>

      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:14px;">
        <div>Receipt No: <strong>${receiptNo}</strong></div>
        <div>Date: <strong>${date}</strong></div>
      </div>

      <div style="background:var(--bg-light); padding:14px; border-radius:8px; font-size:0.85rem; margin-bottom:16px;">
        <div>Student Name: <strong>${student.name}</strong></div>
        <div>Enrollment No: <strong>${student.enrollmentNo}</strong></div>
        <div>Course: <strong>${student.courseName}</strong></div>
      </div>

      <div style="font-size:1.2rem; font-weight:800; color:var(--green-success); margin-bottom:20px; text-align:center;">
        AMOUNT PAID: ₹${amount} (SUCCESSFUL)
      </div>

      <button class="btn-primary" style="width:100%; justify-content:center;" onclick="window.print()">🖨️ Print Receipt PDF</button>
    </div>
  `;

  modal.classList.add('active');
}

function openExamModal(exam, student) {
  const modal = document.getElementById('modal-generic');
  const content = document.getElementById('generic-modal-content');
  if (!modal || !content) return;

  let currentIdx = 0;
  let userAnswers = {};

  function renderQuestion() {
    const q = exam.questions[currentIdx];
    content.innerHTML = `
      <div style="padding:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h3 style="font-family:'Outfit'; font-size:1.2rem; color:var(--navy-dark);">${exam.title}</h3>
          <span class="badge-status badge-valid">Q ${currentIdx + 1} of ${exam.totalQuestions}</span>
        </div>

        <div style="background:var(--bg-light); border-radius:10px; padding:18px; margin-bottom:18px;">
          <h4 style="font-size:1rem; font-weight:800; color:var(--navy-dark); margin-bottom:14px;">${q.question}</h4>
          ${q.options.map((opt, optIdx) => `
            <label style="display:block; padding:10px 14px; background:#fff; border:1px solid var(--border-color); border-radius:8px; margin-bottom:8px; cursor:pointer;">
              <input type="radio" name="opt" value="${optIdx}" ${userAnswers[currentIdx] === optIdx ? 'checked' : ''} />
              <span style="font-weight:600; font-size:0.9rem; margin-left:8px;">${opt}</span>
            </label>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:space-between;">
          <button class="btn-secondary" id="exam-prev-q" ${currentIdx === 0 ? 'disabled' : ''}>← Previous</button>
          ${currentIdx === exam.totalQuestions - 1
        ? '<button class="btn-primary" id="exam-submit-all">Submit Exam Now</button>'
        : '<button class="btn-primary" id="exam-next-q">Next Question →</button>'}
        </div>
      </div>
    `;

    document.querySelectorAll('input[name="opt"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        userAnswers[currentIdx] = parseInt(e.target.value);
      });
    });

    document.getElementById('exam-prev-q')?.addEventListener('click', () => {
      if (currentIdx > 0) { currentIdx--; renderQuestion(); }
    });

    document.getElementById('exam-next-q')?.addEventListener('click', () => {
      if (currentIdx < exam.totalQuestions - 1) { currentIdx++; renderQuestion(); }
    });

    document.getElementById('exam-submit-all')?.addEventListener('click', () => {
      let score = 0;
      exam.questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) score++;
      });
      const pct = Math.round((score / exam.totalQuestions) * 100);
      const passed = pct >= exam.passingScore;

      content.innerHTML = `
        <div style="text-align:center; padding:20px;">
          <div style="font-size:3rem; margin-bottom:10px;">${passed ? '🎉' : '❌'}</div>
          <h2 style="font-family:'Outfit'; font-size:1.6rem; color:var(--navy-dark);">${passed ? 'EXAM PASSED!' : 'RE-ATTEMPT NEEDED'}</h2>
          <div style="font-size:2rem; font-weight:900; color:${passed ? 'var(--green-success)' : 'var(--red-error)'}; margin:10px 0;">${pct}% SCORE</div>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px;">Correct: ${score} / ${exam.totalQuestions} Questions</p>
          <button class="btn-primary" style="margin:0 auto;" onclick="document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('active'))">Close Exam</button>
        </div>
      `;
    });
  }

  renderQuestion();
  modal.classList.add('active');
}

function openAddStudentModal() {
  const modal = document.getElementById('modal-generic');
  const content = document.getElementById('generic-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark); margin-bottom:16px;">👨‍🎓 Register New Student in WTI</h3>
    <form id="form-new-student">
      <div class="form-group">
        <label class="form-label">Full Name</label>
        <input type="text" class="form-input" id="stu-add-name" required />
      </div>
      <div class="form-group">
        <label class="form-label">Father's Name</label>
        <input type="text" class="form-input" id="stu-add-father" required />
      </div>
      <div class="form-group">
        <label class="form-label">Course</label>
        <select class="form-select" id="stu-add-course">
          <option value="Diploma in Fire & Safety Management">Diploma in Fire & Safety Management</option>
          <option value="Advanced Diploma in Industrial Safety">Advanced Diploma in Industrial Safety</option>
          <option value="Electrician Trade (ITI)">Electrician Trade (ITI)</option>
          <option value="Advance Diploma in Computer Applications">Advance Diploma in Computer Applications</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Phone Number</label>
        <input type="text" class="form-input" id="stu-add-phone" value="9876543210" required />
      </div>
      <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">Register Student Now</button>
    </form>
  `;

  document.getElementById('form-new-student')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('stu-add-name').value;
    const father = document.getElementById('stu-add-father').value;
    const course = document.getElementById('stu-add-course').value;
    const phone = document.getElementById('stu-add-phone').value;

    const seq = Math.floor(1000 + Math.random() * 9000);
    const newStu = {
      id: `STU-2026-${seq}`,
      enrollmentNo: `WTI/2026/${seq}`,
      studentId: `WTI-STU-${seq}`,
      name: name,
      fatherName: father,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      courseId: "DFSM",
      courseName: course,
      category: "Fire & Safety",
      batch: "2025-2026",
      duration: "1 Year",
      joiningDate: "2026-08-10",
      validTill: "2027-08-09",
      phone: phone,
      email: `${name.toLowerCase().replace(/\s+/g, '')}@example.com`,
      address: "Deoria, UP",
      attendance: { total: 100, present: 100, absent: 0, percentage: 100 },
      fees: { total: 25000, paid: 10000, remaining: 15000, dueDate: "2026-09-30" }
    };

    store.addStudent(newStu);
    alert(`Student Registered!\nEnrollment No: ${newStu.enrollmentNo}`);
    modal.classList.remove('active');
    renderAdminStudents();
  });

  modal.classList.add('active');
}

function openAddJobModal() {
  const modal = document.getElementById('modal-generic');
  const content = document.getElementById('generic-modal-content');
  if (!modal || !content) return;

  content.innerHTML = `
    <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark); margin-bottom:16px;">💼 Post New Placement Job</h3>
    <form id="form-new-job">
      <div class="form-group">
        <label class="form-label">Job Title</label>
        <input type="text" class="form-input" id="job-add-title" value="Safety Supervisor (Gulf Project)" required />
      </div>
      <div class="form-group">
        <label class="form-label">Company Name</label>
        <input type="text" class="form-input" id="job-add-company" value="Consolidated Contractors Company (CCC)" required />
      </div>
      <div class="form-group">
        <label class="form-label">Location</label>
        <input type="text" class="form-input" id="job-add-loc" value="Doha, Qatar" required />
      </div>
      <div class="form-group">
        <label class="form-label">Salary Package</label>
        <input type="text" class="form-input" id="job-add-sal" value="QAR 4,000 / Month + Accommodation" required />
      </div>
      <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">Publish Job Vacancy</button>
    </form>
  `;

  document.getElementById('form-new-job')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('job-add-title').value;
    const comp = document.getElementById('job-add-company').value;
    const loc = document.getElementById('job-add-loc').value;
    const sal = document.getElementById('job-add-sal').value;

    const newJ = {
      id: `JOB-${Math.floor(100 + Math.random() * 900)}`,
      title: title,
      company: comp,
      location: loc,
      salary: sal,
      type: "Gulf Jobs",
      category: "Safety Jobs",
      requirements: "WTI Safety Diploma / ADIS + 1 Year Experience.",
      postedDate: "10-Aug-2026",
      status: "OPEN"
    };

    store.addJob(newJ);
    alert("New Job Vacancy Published!");
    modal.classList.remove('active');
    renderStudentJobsSection();
  });

  modal.classList.add('active');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

})();

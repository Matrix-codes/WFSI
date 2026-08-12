(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const h={name:"WORLD TECHNICAL INSTITUTE",regAddress:"First Floor, Sanjeevani Eye Hospital, Raghav Nagar, Deoria, Uttar Pradesh",contactNumber:"8528372209",affiliations:[{name:"BSS",fullName:"Bharat Sevak Samaj",badge:"Recognized BSS Centre"},{name:"NCVTE",fullName:"National Council for Vocational Training & Education",badge:"NCVTE Approved"},{name:"MSBTE",fullName:"Maharashtra State Board of Technical Education (ADIS, FR)",badge:"MSBTE Affiliated"},{name:"DigiLocker",fullName:"Government of India DigiLocker Portal",badge:"DigiLocker Approved Certificate"},{name:"Govt Approvals",fullName:"Approved by Govt of India & Gulf Countries",badge:"India & Gulf Valid"}]},T=[{id:"fire-safety",title:"Fire & Safety Courses",icon:"🔥",image:"course-fire-safety.png",color:"#e65100",badge:"Most Popular",description:"Comprehensive Industrial Safety, Fire Fighting & HSE Certification Programs for India & Gulf Careers.",courses:[{code:"ADIS",name:"Advanced Diploma in Industrial Safety",duration:"1 Year",eligibility:"Graduate / Diploma in Engg",image:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600"},{code:"PGDIS",name:"Post Graduate Diploma in Industrial Safety",duration:"1 Year",eligibility:"Degree in Science / Engineering",image:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"},{code:"DIS",name:"Diploma in Industrial Safety",duration:"1 Year",eligibility:"10+2 / ITI",image:"https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=600"},{code:"DFSM",name:"Diploma in Fire & Safety Management",duration:"1 Year",eligibility:"10th / 12th",image:"https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600"},{code:"ADFIS",name:"Advance Diploma in Fire & Industrial Safety",duration:"1 Year",eligibility:"12th Science / ITI",image:"https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"},{code:"PGD-FS",name:"PGD Fire & Safety",duration:"1 Year",eligibility:"Graduation",image:"https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600"},{code:"D-FS",name:"Diploma in Fire & Safety",duration:"6 Months - 1 Year",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600"},{code:"HSE-M",name:"HSE / Health Safety & Environment Management",duration:"6 Months",eligibility:"10+2 / Diploma",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"},{code:"FF-CERT",name:"Certificate Course in Fire Fighting",duration:"3 Months",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=600"},{code:"IND-SAFE",name:"Industrial Safety Technician Course",duration:"6 Months",eligibility:"10th / ITI",image:"https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600"}]},{id:"iti-technical",title:"ITI / Technical Trades",icon:"⚙️",image:"course-iti-trade.png",color:"#0277bd",badge:"Official Trade Affiliations",description:"Industry-aligned vocational trade training with hands-on practical lab experience.",courses:[{code:"ITI-ELEC",name:"Electrician Trade",duration:"2 Years",eligibility:"10th Pass (Science & Math)",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"},{code:"ITI-FIT",name:"Fitter Trade",duration:"2 Years",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600"},{code:"ITI-WELD",name:"Welder Trade (ARC & TIG/MIG)",duration:"1 Year",eligibility:"8th / 10th Pass",image:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"},{code:"ITI-COPA",name:"Computer Operator & Programming Assistant (COPA)",duration:"1 Year",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600"},{code:"ITI-MECH",name:"Mechanic Trade (Motor Vehicle / Diesel)",duration:"1-2 Years",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"},{code:"ITI-DRAFT",name:"Draughtsman (Civil / Mechanical)",duration:"2 Years",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"}]},{id:"diploma-engg",title:"Diploma Courses",icon:"🛠️",image:"course-diploma.png",color:"#2e7d32",badge:"Government Valid",description:"Technical diploma qualifications tailored for industrial, engineering & safety operations.",courses:[{code:"DIP-FS",name:"Diploma in Fire & Safety",duration:"1 Year",eligibility:"10th / 12th",image:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"},{code:"DIP-IS",name:"Diploma in Industrial Safety",duration:"1 Year",eligibility:"10th / 12th / ITI",image:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600"},{code:"DIP-ELE",name:"Diploma in Electrical Engineering (Skills)",duration:"1-2 Years",eligibility:"10th / ITI",image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600"},{code:"DIP-MEC",name:"Diploma in Mechanical Engineering (Skills)",duration:"1-2 Years",eligibility:"10th / ITI",image:"https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600"},{code:"DIP-CIV",name:"Diploma in Civil Construction & Safety",duration:"1 Year",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=600"}]},{id:"computer",title:"Computer Courses",icon:"💻",image:"course-computer.png",color:"#6a1b9a",badge:"ISO Certified",description:"From basic computer literacy to advanced accounting & office automation.",courses:[{code:"ADCA",name:"Advance Diploma in Computer Applications",duration:"1 Year",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600"},{code:"DCA",name:"Diploma in Computer Applications",duration:"6 Months",eligibility:"10th Pass",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"},{code:"CCC",name:"Course on Computer Concepts",duration:"3 Months",eligibility:"Open",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"},{code:"TALLY-PR",name:"Tally Prime with GST & E-Way Bill",duration:"3 Months",eligibility:"10+2 / Commerce",image:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"},{code:"ADV-EXCEL",name:"Advanced Excel & Data Analytics",duration:"2 Months",eligibility:"10+2 / Basic Computer",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"},{code:"OFFICE-AUTO",name:"MS Office & Office Automation",duration:"3 Months",eligibility:"Open",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"}]},{id:"short-skills",title:"Short-Term / Skill Courses",icon:"📜",image:"course-skills.png",color:"#c2185b",badge:"Job-Ready Skill Certs",description:"Intensive 1-day to 1-month safety certifications required by top EPC & Gulf contractors.",courses:[{code:"FIRST-AID",name:"First Aid & CPR Training Certificate",duration:"3 Days",eligibility:"Open",image:"https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"},{code:"FF-PRACT",name:"Fire Fighting & Hose Handling Practical",duration:"5 Days",eligibility:"Open",image:"https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600"},{code:"SCAF-SAFE",name:"Scaffolding Inspector & Erector Safety",duration:"1 Week",eligibility:"Open",image:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"},{code:"WAH-SAFE",name:"Work at Height & Fall Protection Safety",duration:"3 Days",eligibility:"Open",image:"https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=600"},{code:"LOTO-CERT",name:"Lockout / Tagout (LOTO) Energy Isolation",duration:"2 Days",eligibility:"Technical / HSE",image:"https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600"},{code:"HIRA-JSA",name:"HIRA & Risk Assessment / JSA Specialist",duration:"1 Week",eligibility:"HSE Aspirants",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"},{code:"PPE-TRAIN",name:"PPE Compliance & Inspection Training",duration:"1 Day",eligibility:"Open",image:"https://images.unsplash.com/photo-1581092160707-ee22621dd758?auto=format&fit=crop&q=80&w=600"},{code:"CRANE-RIG",name:"Crane & Rigging Heavy Equipment Safety",duration:"1 Week",eligibility:"Operators / Safety",image:"https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600"},{code:"ELEC-SAFE",name:"Electrical Safety & Arc Flash Prevention",duration:"3 Days",eligibility:"Electricians / HSE",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600"},{code:"CONF-SPACE",name:"Confined Space Entry & Rescue Training",duration:"5 Days",eligibility:"Safety Personnel",image:"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600"},{code:"HOT-WORK",name:"Hot Work Permit & Fire Watcher Certificate",duration:"3 Days",eligibility:"Open",image:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600"},{code:"MAN-HAND",name:"Manual Handling & Ergonomics",duration:"2 Days",eligibility:"Open",image:"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"}]}],C=[{id:"STU-2026-01",enrollmentNo:"WTI/2026/0891",studentId:"WTI-STU-1001",name:"Rahul Sharma",fatherName:"Mahendra Sharma",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",courseId:"DFSM",courseName:"Diploma in Fire & Safety Management",category:"Fire & Safety",batch:"2025-2026",duration:"1 Year",joiningDate:"2025-08-15",validTill:"2026-08-14",phone:"9876543210",email:"rahul.sharma@example.com",address:"Deoria, Uttar Pradesh",attendance:{total:100,present:94,absent:6,percentage:94},fees:{total:25e3,paid:2e4,remaining:5e3,dueDate:"2026-09-01"},marksheet:{examTitle:"Annual Fire & Safety Board Exam 2026",resultDate:"10-Aug-2026",grade:"A+",totalMarks:500,obtainedMarks:445,percentage:"89%",status:"PASS",subjects:[{subject:"Fundamentals of Safety",maxMarks:100,obtained:92},{subject:"Fire Fighting & Suppression",maxMarks:100,obtained:88},{subject:"Industrial Risk & HIRA/JSA",maxMarks:100,obtained:90},{subject:"Construction Safety & Scaffolding",maxMarks:100,obtained:85},{subject:"Practical Hose & First Aid Test",maxMarks:100,obtained:90}]}},{id:"STU-2026-02",enrollmentNo:"WTI/2026/0892",studentId:"WTI-STU-1002",name:"Amit Kumar Singh",fatherName:"Rameshwar Singh",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",courseId:"ADIS",courseName:"Advanced Diploma in Industrial Safety",category:"Fire & Safety",batch:"2025-2026",duration:"1 Year",joiningDate:"2025-07-10",validTill:"2026-07-09",phone:"9123456780",email:"amit.singh@example.com",address:"Gorakhpur, Uttar Pradesh",attendance:{total:100,present:96,absent:4,percentage:96},fees:{total:32e3,paid:32e3,remaining:0,dueDate:"PAID IN FULL"},marksheet:{examTitle:"Advanced Industrial Safety Final Examination",resultDate:"05-Aug-2026",grade:"O (Outstanding)",totalMarks:500,obtainedMarks:472,percentage:"94.4%",status:"PASS",subjects:[{subject:"Safety Legislation & Factory Act",maxMarks:100,obtained:95},{subject:"Chemical & Industrial Hazards",maxMarks:100,obtained:94},{subject:"Occupational Health & Hygiene",maxMarks:100,obtained:92},{subject:"EHS Audit & Incident Investigation",maxMarks:100,obtained:96},{subject:"Viva & On-Site Project Work",maxMarks:100,obtained:95}]}},{id:"STU-2026-03",enrollmentNo:"WTI/2026/0893",studentId:"WTI-STU-1003",name:"Vikram Yadav",fatherName:"Subhash Chandra Yadav",photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",courseId:"ITI-ELEC",courseName:"Electrician Trade (ITI)",category:"ITI / Technical Trades",batch:"2024-2026",duration:"2 Years",joiningDate:"2024-09-01",validTill:"2026-08-31",phone:"9798123456",email:"vikram.yadav@example.com",address:"Deoria, UP",attendance:{total:100,present:90,absent:10,percentage:90},fees:{total:28e3,paid:22e3,remaining:6e3,dueDate:"2026-09-15"},marksheet:{examTitle:"National Trade Certificate Final Assessment",resultDate:"02-Aug-2026",grade:"A",totalMarks:500,obtainedMarks:420,percentage:"84%",status:"PASS",subjects:[{subject:"Trade Theory",maxMarks:100,obtained:86},{subject:"Trade Practical & Circuit Wiring",maxMarks:100,obtained:90},{subject:"Workshop Calculation & Science",maxMarks:100,obtained:78},{subject:"Engineering Drawing",maxMarks:100,obtained:82},{subject:"Employability Skills",maxMarks:100,obtained:84}]}}],O=[{certificateNo:"WTI/FS/2026/000125",type:"Diploma Certificate",studentId:"WTI-STU-1001",studentName:"Rahul Sharma",fatherName:"Mahendra Sharma",courseName:"Diploma in Fire & Safety Management",duration:"1 Year (Batch 2025-2026)",issueDate:"10-08-2026",grade:"Grade A+ (89%)",status:"VALID",verificationUrl:"WTI Certificate Verification",qrData:"WTI-VERIFY-WTI/FS/2026/000125-RAHUL-SHARMA",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"},{certificateNo:"WTI/ADIS/2026/000126",type:"Course Completion Certificate",studentId:"WTI-STU-1002",studentName:"Amit Kumar Singh",fatherName:"Rameshwar Singh",courseName:"Advanced Diploma in Industrial Safety",duration:"1 Year (Batch 2025-2026)",issueDate:"05-08-2026",grade:"Grade O (94.4%)",status:"VALID",verificationUrl:"WTI Certificate Verification",qrData:"WTI-VERIFY-WTI/ADIS/2026/000126-AMIT-SINGH",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"},{certificateNo:"WTI/SAFE/2026/000199",type:"Safety Skill Certificate",studentId:"WTI-STU-1001",studentName:"Rahul Sharma",fatherName:"Mahendra Sharma",courseName:"Work at Height & Fall Protection Safety",duration:"3 Days Intensive Practical Training",issueDate:"28-07-2026",grade:"CERTIFIED PRACTITIONER",status:"VALID",verificationUrl:"WTI Certificate Verification",qrData:"WTI-VERIFY-WTI/SAFE/2026/000199-RAHUL-WAH",photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"}],R=[{id:"SM-01",category:"Fire & Safety",topic:"Fundamentals of Fire Safety & Chemistry of Fire",courseCode:"DFSM",type:"PDF",fileSize:"4.2 MB",downloadUrl:"#",description:"Complete guide covering Triangle of Fire, Extinguishing Agents (Water, Foam, CO2, DCP), Fire Classes A to F.",icon:"📄"},{id:"SM-02",category:"Fire & Safety",topic:"HIRA & Job Safety Analysis (JSA) Practical Handbook",courseCode:"ADIS",type:"PDF",fileSize:"6.8 MB",downloadUrl:"#",description:"Step-by-step risk matrix assessment, hazard identification methods, and risk control hierarchy.",icon:"📄"},{id:"SM-03",category:"Fire & Safety",topic:"Video Demonstration: Fire Hydrant & Breathing Apparatus Setup",courseCode:"DFSM",type:"Video",fileSize:"45 Mins Lecture",downloadUrl:"#",description:"HD practical video demonstrating SCBA wearing procedure, cylinder pressure test, and emergency evacuation.",icon:"🎥"},{id:"SM-04",category:"Short Safety Skills",topic:"Work at Height & Scaffolding Inspection Manual",courseCode:"WAH-SAFE",type:"PDF",fileSize:"3.5 MB",downloadUrl:"#",description:"OSHA standard safety harness inspection, scaffolding tag system (Red/Green), lifeline anchor setup.",icon:"📄"},{id:"SM-05",category:"ITI Electrician",topic:"3-Phase Induction Motor Wiring & Panel Diagrams",courseCode:"ITI-ELEC",type:"PDF",fileSize:"8.1 MB",downloadUrl:"#",description:"Star-Delta starter control circuit diagrams, relay testing, and earth resistance measurement methods.",icon:"⚡"},{id:"SM-06",category:"Computer Courses",topic:"Tally Prime with GST Practice Worksheets & Voucher Entries",courseCode:"TALLY-PR",type:"Notes",fileSize:"2.9 MB",downloadUrl:"#",description:"Includes real industry sample invoices, CGST/SGST/IGST voucher creation, and E-Way bill generation.",icon:"💻"}],j=[{id:"EXAM-101",title:"Fire Safety & Extinguisher Operation Certification Exam 2026",courseName:"Diploma in Fire & Safety Management",subject:"Fire Engineering Fundamentals",durationMins:15,totalQuestions:5,passingScore:60,questions:[{id:"Q1",question:"Which type of fire extinguisher is recommended for Electrical Equipment Fires (Class C / E)?",options:["Water Extinguisher","Carbon Dioxide (CO2)","Foam Extinguisher","Wet Chemical"],correct:1},{id:"Q2",question:"What does the acronym PASS stand for in fire extinguisher operation?",options:["Pull, Aim, Squeeze, Sweep","Push, Align, Spray, Stop","Press, Activate, Smother, Save","Point, Apply, Shut, Secure"],correct:0},{id:"Q3",question:"In the Fire Triangle, what three components are required to sustain a fire?",options:["Fuel, Heat, Oxygen","Smoke, Gas, Ignition","Carbon, Water, Spark","Nitrogen, Electricity, Fuel"],correct:0},{id:"Q4",question:"Which safety document outlines hazard identification prior to starting a high-risk job?",options:["Invoice","Job Safety Analysis (JSA)","Attendance Sheet","Purchase Order"],correct:1},{id:"Q5",question:"What color scaffolding tag indicates that the scaffold is safe for use?",options:["Red Tag","Yellow Tag","Green Tag","Blue Tag"],correct:2}]}],W=[{id:"JOB-901",title:"HSE Safety Inspector",company:"Saudi Aramco Sub-Contractor (Gulf)",location:"Dhahran, Saudi Arabia",salary:"SAR 4,500 - 6,000 / Month + Accommodation + Flight",type:"Gulf Jobs",category:"Safety Jobs",requirements:"ADIS / Diploma in Fire & Safety + 2 Yrs Exp. NEBOSH preferred.",postedDate:"08-Aug-2026",status:"URGENT HIRING"},{id:"JOB-902",title:"Industrial Fire Officer",company:"Larsen & Toubro (L&T) Construction",location:"Ahmedabad, Gujarat, India",salary:"₹35,000 - ₹48,000 / Month",type:"India Jobs",category:"Safety Jobs",requirements:"Diploma in Fire & Safety / DFSM passouts. Freshers / 1 Year Exp.",postedDate:"05-Aug-2026",status:"OPEN"},{id:"JOB-903",title:"Senior Electrical Maintenance Technician",company:"Tata Steel Plant Project",location:"Jamshedpur, Jharkhand",salary:"₹28,000 - ₹38,000 / Month",type:"India Jobs",category:"ITI Jobs",requirements:"ITI Electrician / Diploma Electrical with wireman permit.",postedDate:"02-Aug-2026",status:"OPEN"},{id:"JOB-904",title:"Scaffolding Safety Supervisor",company:"Descon Engineering LLC (UAE)",location:"Abu Dhabi, UAE",salary:"AED 3,800 - 5,200 / Month",type:"Gulf Jobs",category:"Safety Jobs",requirements:"WTI Scaffolding Certificate + 1 Yr Industrial Experience.",postedDate:"01-Aug-2026",status:"INTERVIEW SHORTLY"}],H=[{id:"NOT-01",title:"📢 Urgent Notice: New Practical Fire Fighting Batch Starting Next Monday",date:"10-Aug-2026",category:"New Batch & Practical Training",body:"All DFSM & ADIS students of 2025-2026 batch are requested to report at WTI Deoria Ground for live hose line and SCBA practicals at 9:00 AM."},{id:"NOT-02",title:"✈️ Gulf Placement Interview Drive in Deoria Campus",date:"06-Aug-2026",category:"Placement & Interview",body:"Delegates from UAE & Saudi Arabia oil & gas project contractors will be conducting client interviews on 18th August 2026 at WTI Deoria First Floor, Sanjeevani Hospital."},{id:"NOT-03",title:"📜 Special Verification Drive for WTI Certificates",date:"01-Aug-2026",category:"Certificate & Verification",body:"Employers can now instantly verify WTI Fire & Safety, ITI, and Computer certificates live via QR scanner or entering Certificate ID on the WTI online portal."}],G=[{name:"Er. K. P. Singh",designation:"Head of Safety & HSE Department",qualifications:"B.Tech Mech, ADIS (MSBTE), NEBOSH IGC Certified",experience:"16+ Years Experience in Oil & Gas & Refinery Safety (India & Oman)",photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300"},{name:"Mr. Anand V. Verma",designation:"Senior Fire Fighting & Drill Master",qualifications:"Ex-Chief Fire Officer, Diploma in Fire Engineering",experience:"20+ Years Practical Fire Fighting & Disaster Management",photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300"},{name:"Er. Sunita Tripathi",designation:"Senior ITI & Electrical Instructor",qualifications:"Diploma Electrical, CITS Certified Trainer",experience:"10+ Years Vocational Trade Training & Panel Design",photo:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"},{name:"Mr. Dharmendra Mishra",designation:"Director - Computer & Software Department",qualifications:"MCA, Tally Master Professional, ISO Auditor",experience:"12+ Years Computer Applications & Corporate Training",photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"}];function v(e,i){try{const t=localStorage.getItem(e);return!t||t==="undefined"||t==="null"?i:JSON.parse(t)}catch(t){return console.warn(`Failed to parse localStorage item "${e}", using fallback.`,t),i}}class U{constructor(){this.students=v("wti_students",C),this.certificates=v("wti_certificates",O),this.exams=v("wti_exams",j),this.jobs=v("wti_jobs",W),this.noticesList=v("wti_notices",H),this.materials=R;const i=v("wti_categories",null);i&&Array.isArray(i)?this.categories=i.map(t=>{const o=T.find(a=>a.id===t.id);return o&&t.courses&&(t.courses=t.courses.map(a=>{const n=o.courses.find(r=>r.code===a.code);return{...a,image:n&&n.image?n.image:a.image||t.image}})),t}):this.categories=T,this.save(),this.activeStudent=this.students&&this.students.length>0?this.students[0]:C[0],this.activeSessions=v("wti_active_sessions",18)}save(){try{this.students&&localStorage.setItem("wti_students",JSON.stringify(this.students)),this.certificates&&localStorage.setItem("wti_certificates",JSON.stringify(this.certificates)),this.exams&&localStorage.setItem("wti_exams",JSON.stringify(this.exams)),this.jobs&&localStorage.setItem("wti_jobs",JSON.stringify(this.jobs)),this.noticesList&&localStorage.setItem("wti_notices",JSON.stringify(this.noticesList)),this.categories&&localStorage.setItem("wti_categories",JSON.stringify(this.categories)),this.activeSessions!==void 0&&localStorage.setItem("wti_active_sessions",JSON.stringify(this.activeSessions))}catch(i){console.warn("localStorage save failed",i)}}addStudent(i){this.students.unshift(i),this.activeSessions+=1,this.save()}addCourse(i,t){const o=this.categories.find(a=>a.id===i);o&&(o.courses||(o.courses=[]),o.courses.unshift(t),this.save())}getTotalCoursesCount(){return this.categories.reduce((i,t)=>i+(t.courses?t.courses.length:0),0)}addCertificate(i){this.certificates.unshift(i),this.save()}addJob(i){this.jobs.unshift(i),this.save()}addNotice(i){this.noticesList.unshift(i),this.save()}verifyCertificate(i){const t=i.trim().toUpperCase();return this.certificates.find(o=>o.certificateNo.toUpperCase()===t)}}const l=new U;let A=!1;function b(){A||(A=!0,J(),D(),V(),Y(),E(),L(),oe(),ne())}function D(){const e=document.getElementById("form-admin-login"),i=document.getElementById("admin-login-screen"),t=document.getElementById("admin-dashboard-screen"),o=document.getElementById("admin-login-error"),a=document.getElementById("btn-admin-logout");function n(){sessionStorage.getItem("wti_admin_auth")==="true"?(i&&(i.style.display="none"),t&&(t.style.display="block")):(i&&(i.style.display="block"),t&&(t.style.display="none"))}e&&e.addEventListener("submit",r=>{r.preventDefault();const s=document.getElementById("admin-input-user").value.trim(),d=document.getElementById("admin-input-pass").value.trim();(s==="admin"||s==="admin@wti.com")&&(d==="admin"||d==="wti2026"||d==="123456")?(o&&(o.style.display="none"),sessionStorage.setItem("wti_admin_auth","true"),n()):o&&(o.style.display="block")}),a&&a.addEventListener("click",()=>{sessionStorage.setItem("wti_admin_auth","false"),n()}),n()}function V(){const e=document.getElementById("modal-auth-view"),i=document.getElementById("btn-open-auth-modal"),t=e?e.querySelector(".modal-close-btn"):null,o=document.getElementById("auth-tab-admin"),a=document.getElementById("auth-tab-student"),n=document.getElementById("auth-tab-register"),r=document.getElementById("modal-form-admin-login"),s=document.getElementById("modal-form-student-login"),d=document.getElementById("modal-form-student-register"),m=document.getElementById("modal-admin-error"),p=document.getElementById("modal-stu-error");i&&e&&i.addEventListener("click",()=>{e.classList.add("active")}),t&&e&&t.addEventListener("click",()=>{e.classList.remove("active")});function f(c){[o,a,n].forEach(u=>{u&&(u.style.background="transparent",u.style.color="#FFF",u.classList.remove("active"))}),[r,s,d].forEach(u=>{u&&(u.style.display="none")}),c==="admin"?(o&&(o.style.background="linear-gradient(135deg, #12DCEF 0%, #5DFFD9 100%)",o.style.color="#070707",o.classList.add("active")),r&&(r.style.display="block")):c==="student"?(a&&(a.style.background="var(--primary-gradient)",a.style.color="#070707",a.classList.add("active")),s&&(s.style.display="block")):c==="register"&&(n&&(n.style.background="var(--primary-gradient)",n.style.color="#070707",n.classList.add("active")),d&&(d.style.display="block"))}o&&o.addEventListener("click",()=>f("admin")),a&&a.addEventListener("click",()=>f("student")),n&&n.addEventListener("click",()=>f("register")),r&&r.addEventListener("submit",c=>{c.preventDefault();const u=document.getElementById("modal-admin-user").value.trim(),g=document.getElementById("modal-admin-pass").value.trim();(u==="admin"||u==="admin@wti.com")&&(g==="admin123"||g==="admin"||g==="wti2026")?(m&&(m.style.display="none"),sessionStorage.setItem("wti_admin_auth","true"),e&&e.classList.remove("active"),D(),switchPortalView("admin-portal"),L(),alert("🎉 Welcome Admin! Master Control Panel Unlocked.")):m&&(m.style.display="block")}),s&&s.addEventListener("submit",c=>{c.preventDefault();const u=document.getElementById("modal-stu-login-id").value.trim().toUpperCase(),g=l.students.find(y=>y.enrollmentNo.toUpperCase()===u||y.phone===u||y.name.toUpperCase().includes(u))||l.students[0];g?(p&&(p.style.display="none"),l.activeStudent=g,l.activeSessions+=1,l.save(),e&&e.classList.remove("active"),switchPortalView("student-portal"),E(),alert(`🎓 Welcome Back, ${g.name}! Logged into Student Dashboard.`)):p&&(p.style.display="block")}),d&&d.addEventListener("submit",c=>{c.preventDefault();const u=document.getElementById("reg-input-name").value.trim(),g=document.getElementById("reg-input-father").value.trim(),y=document.getElementById("reg-input-course").value,P=document.getElementById("reg-input-phone").value.trim(),q=document.getElementById("reg-input-address").value.trim(),S=Math.floor(100+Math.random()*900),I={id:`STU-2026-${S}`,enrollmentNo:`WTI/2026/0${S}`,studentId:`WTI-STU-${1e3+S}`,name:u,fatherName:g,photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",courseId:"GEN",courseName:y,category:"Safety & Technical",batch:"2026-2027",duration:"1 Year",joiningDate:new Date().toISOString().split("T")[0],validTill:"2027-08-31",phone:P,email:`${u.toLowerCase().replace(/\s+/g,".")}@example.com`,address:q,attendance:{total:30,present:30,absent:0,percentage:100},fees:{total:25e3,paid:1e4,remaining:15e3,dueDate:"2026-10-01"},marksheet:{examTitle:"Initial Assessment Exam 2026",resultDate:"Pending",grade:"A",totalMarks:500,obtainedMarks:410,percentage:"82%",status:"PASS",subjects:[{subject:"General Safety Rules",maxMarks:100,obtained:85},{subject:"Hazard Identification",maxMarks:100,obtained:80}]}};l.addStudent(I),l.activeStudent=I,e&&e.classList.remove("active"),switchPortalView("student-portal"),E(),alert(`🎉 Registration Successful!
Student: ${u}
Enrollment No: ${I.enrollmentNo}
Welcome to WTI!`)})}function J(){const e=document.getElementById("left-app-sidebar"),i=document.getElementById("btn-toggle-left-menu"),t=document.getElementById("btn-close-left-sidebar");i&&e&&i.addEventListener("click",n=>{n.stopPropagation(),e.classList.toggle("open")}),t&&e&&t.addEventListener("click",()=>{e.classList.remove("open")}),document.addEventListener("click",n=>{e&&e.classList.contains("open")&&!e.contains(n.target)&&i&&!i.contains(n.target)&&e.classList.remove("open")});function o(n){const r=document.querySelectorAll(".view-container"),s=document.querySelectorAll(".left-menu-item"),d=document.querySelectorAll(".portal-btn");r.forEach(p=>{p.classList.remove("active"),p.style.display="none"});const m=document.getElementById(n);m&&(m.classList.add("active"),m.style.display="block"),window.scrollTo({top:0,behavior:"smooth"}),s.forEach(p=>{p.classList.remove("active"),p.getAttribute("data-view")===n&&p.classList.add("active")}),d.forEach(p=>{p.classList.remove("active"),p.classList.remove("active-admin"),p.getAttribute("data-view")===n&&(n==="admin-portal"?p.classList.add("active-admin"):p.classList.add("active"))})}window.switchPortalView=o,window.handleLeftMenuClick=function(n,r){r&&(r.preventDefault(),r.stopPropagation());const s=n.getAttribute("data-view"),d=n.getAttribute("data-action"),m=n.getAttribute("data-section"),p=n.getAttribute("data-cat"),f=document.getElementById("left-app-sidebar");if(document.querySelectorAll(".left-menu-item").forEach(c=>c.classList.remove("active")),n.classList.add("active"),s)window.switchPortalView(s);else if(d==="open-id-modal")x(l.activeStudent);else if(d&&d.startsWith("switch-student-")){window.switchPortalView("student-portal");const c=d.replace("switch-student-","");setTimeout(()=>{const u=document.querySelector(`.dash-menu-item[data-tab="${c}"]`);u&&u.click()},50)}else p?(window.switchPortalView("home-portal"),setTimeout(()=>{const c=document.getElementById(`cat-${p}`)||document.getElementById(m);c&&(c.scrollIntoView({behavior:"smooth",block:"center"}),c.style.transition="box-shadow 0.4s ease, border-color 0.4s ease",c.style.borderColor="#5DFFD9",c.style.boxShadow="0 0 40px rgba(93, 255, 217, 0.7)",setTimeout(()=>{c.style.boxShadow=""},2500))},100)):m&&(window.switchPortalView("home-portal"),setTimeout(()=>{const c=document.getElementById(m);c&&c.scrollIntoView({behavior:"smooth"})},100));window.innerWidth<1024&&f&&f.classList.remove("open")};const a=document.getElementById("btn-verify-quick-nav");a&&a.addEventListener("click",()=>{window.switchPortalView("verification-portal")})}function Y(){const e=document.getElementById("home-cards-grid");if(!e)return;const i=[{num:"01",icon:"🎓",title:"Student Categories",desc:"Fire & Safety, ITI Trades, Engineering Diplomas, Computer & Short Skills",view:"cat-section"},{num:"02",icon:"📚",title:"Courses Offered",desc:"ADIS, PGDIS, DFSM, Electrician, Fitter, ADCA, Tally, Safety Skills",view:"cat-section"},{num:"03",icon:"🪪",title:"Digital ID Card",desc:"Instant official student verification profile with QR Code",action:"open-id-modal"},{num:"04",icon:"📜",title:"Certificate Verification",desc:"Live online anti-forge certificate lookup & employer validation",action:"open-verify"},{num:"05",icon:"📄",title:"My Certificates",desc:"Download high-resolution course & safety training certificates",action:"switch-student-certs"},{num:"06",icon:"📖",title:"Study Material",desc:"Course-wise PDFs, HD Practical Videos, Audio & Quizzes",action:"switch-student-materials"},{num:"07",icon:"📝",title:"Online Exam",desc:"Interactive computer-based assessment & certificate eligibility",action:"switch-student-exam"},{num:"08",icon:"📊",title:"Result & Marksheets",desc:"Subject-wise marks breakdown, total grade & PDF marksheet download",action:"switch-student-result"},{num:"09",icon:"📅",title:"Attendance Log",desc:"Track overall attendance percentage, present & absent logs",action:"switch-student-attendance"},{num:"10",icon:"💰",title:"Fees & Receipts",desc:"Fee status, remaining dues, online payments & digital receipts",action:"switch-student-fees"},{num:"11",icon:"💼",title:"Placement & Jobs",desc:"100% placement assistance for India & Gulf Oil/Gas contracts",action:"switch-student-jobs"},{num:"12",icon:"📢",title:"Notice Board",desc:"Latest exam schedules, batch announcements & interview alerts",action:"switch-student-notices"},{num:"13",icon:"🏆",title:"Achievements",desc:"WTI industry awards, Gulf placements & practical training lab",view:"achievements-section"},{num:"14",icon:"📞",title:"Contact Institute",desc:"Deoria UP address, Helpline: 8528372209, Google Maps",view:"contact-section"}];e.innerHTML=i.map(t=>`
    <div class="home-card" data-action="${t.action||""}" data-target="${t.view||""}">
      <span class="home-card-num">${t.num}</span>
      <div class="home-card-icon">${t.icon}</div>
      <div>
        <h3 class="home-card-title">${t.title}</h3>
        <p class="home-card-desc">${t.desc}</p>
      </div>
      <div class="home-card-action">Explore Section →</div>
    </div>
  `).join(""),document.querySelectorAll(".home-card").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-action"),a=t.getAttribute("data-target");if(o==="open-id-modal")x(l.activeStudent);else if(o==="open-verify")document.querySelector('[data-view="verification-portal"]').click();else if(o&&o.startsWith("switch-student-")){document.querySelector('[data-view="student-portal"]').click();const n=o.replace("switch-student-",""),r=document.querySelector(`.dash-menu-item[data-tab="${n}"]`);r&&r.click()}else if(a){const n=document.getElementById(a);n&&n.scrollIntoView({behavior:"smooth"})}})}),k(),Q(),_()}function k(){const e=document.getElementById("categories-explorer");e&&(e.innerHTML=l.categories.map(i=>`
    <div class="cat-box" id="cat-${i.id}" style="overflow:hidden; border-radius:18px; margin-bottom:28px; background:rgba(10, 24, 18, 0.85); border:1px solid rgba(93, 255, 217, 0.25); box-shadow:0 12px 30px rgba(0,0,0,0.6);">
      <div style="position:relative; height:200px; overflow:hidden; border-bottom:2px solid #33BC65;">
        <img src="${i.image||"course-fire-safety.png"}" alt="${i.title}" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.75);" />
        <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.4) 60%, transparent 100%);"></div>
        <div style="position:absolute; bottom:16px; left:20px; right:20px; display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:10px;">
          <div>
            <span class="cat-icon-badge" style="margin-bottom:6px; display:inline-block; font-size:1.6rem;">${i.icon}</span>
            <h3 class="cat-name" style="font-size:1.45rem; color:#FFFFFF; margin:0; text-shadow:0 2px 10px rgba(0,0,0,0.8); font-weight:800;">${i.title}</h3>
            <p class="cat-desc" style="font-size:0.85rem; color:#5DFFD9; margin:4px 0 0 0; font-weight:600;">${i.description}</p>
          </div>
          <span class="badge-status badge-valid" style="padding:6px 14px; font-size:0.8rem; box-shadow:0 4px 12px rgba(0,0,0,0.5);">${i.badge}</span>
        </div>
      </div>

      <div class="courses-pills-grid" style="padding:20px; display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
        ${i.courses.map(t=>`
          <div class="course-pill-card" style="background:rgba(13, 28, 22, 0.85); border:1px solid rgba(93, 255, 217, 0.2); border-radius:14px; overflow:hidden; transition:var(--transition); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <div style="height:130px; width:100%; overflow:hidden; position:relative;">
                <img src="${t.image||i.image||"course-fire-safety.png"}" alt="${t.name}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s ease;" />
                <span class="course-code-tag" style="position:absolute; top:10px; left:10px; background:rgba(7, 7, 7, 0.9); color:#5DFFD9; border:1px solid #5DFFD9; padding:4px 10px; border-radius:6px; font-weight:800; font-size:0.75rem; box-shadow:0 2px 8px rgba(0,0,0,0.6);">${t.code}</span>
              </div>
              <div style="padding:14px;">
                <h4 style="font-size:0.98rem; font-weight:800; color:#FFFFFF; margin-bottom:8px; line-height:1.35;">${t.name}</h4>
                <div class="course-meta" style="font-size:0.78rem; color:var(--text-muted); line-height:1.5;">
                  <div style="margin-bottom:2px;">⏱️ Duration: <strong style="color:#5DFFD9;">${t.duration}</strong></div>
                  <div>🎓 Eligibility: <strong>${t.eligibility}</strong></div>
                </div>
              </div>
            </div>
            <div style="padding:0 14px 14px 14px;">
              <button class="btn-primary" onclick="window.switchPortalView('student-portal')" style="width:100%; justify-content:center; padding:8px 12px; font-size:0.8rem;">🚀 Enroll & Study Course</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join(""))}function Q(){const e=document.getElementById("affiliations-container");e&&(e.innerHTML=h.affiliations.map(i=>`
    <div class="affil-card">
      <div class="affil-name">${i.name}</div>
      <div style="font-size:0.75rem; color:#475569; margin-top:2px;">${i.fullName}</div>
      <div class="affil-badge">✓ ${i.badge}</div>
    </div>
  `).join(""))}function _(){const e=document.getElementById("faculty-grid");e&&(e.innerHTML=G.map(i=>`
    <div class="home-card" style="cursor:default;">
      <img src="${i.photo}" alt="${i.name}" style="width:100%; height:180px; object-fit:cover; border-radius:10px; margin-bottom:12px;">
      <h3 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${i.name}</h3>
      <div style="color:var(--orange-bright); font-size:0.8rem; font-weight:700; margin-bottom:6px;">${i.designation}</div>
      <div style="font-size:0.78rem; color:var(--text-muted);">🎓 ${i.qualifications}</div>
      <div style="font-size:0.78rem; color:var(--navy-blue); font-weight:600; margin-top:4px;">💼 ${i.experience}</div>
    </div>
  `).join(""))}function E(){const e=l.activeStudent;if(!e)return;const i=document.getElementById("stu-profile-avatar"),t=document.getElementById("stu-profile-name"),o=document.getElementById("stu-profile-course");i&&(i.src=e.photo),t&&(t.textContent=e.name),o&&(o.textContent=`${e.courseName} (${e.batch})`);const a=document.querySelectorAll(".dash-menu-item[data-tab]"),n=document.querySelectorAll(".dash-tab-pane");a.forEach(r=>{r.addEventListener("click",()=>{const s=r.getAttribute("data-tab");a.forEach(m=>m.classList.remove("active")),n.forEach(m=>m.classList.remove("active")),r.classList.add("active");const d=document.getElementById(`tab-${s}`);d&&d.classList.add("active")})}),K(e),X(e),Z(),ee(),te(e),ie(e),N(e),$(),ae()}function K(e){const i=document.getElementById("tab-overview");if(!i)return;i.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h2 style="font-family:'Outfit'; font-size:1.6rem; color:var(--navy-dark);">Welcome Back, ${e.name}! 👋</h2>
        <p style="color:var(--text-muted); font-size:0.88rem;">Enrollment No: <strong>${e.enrollmentNo}</strong> | Course: <strong>${e.courseName}</strong></p>
      </div>
      <button class="btn-primary" id="btn-open-my-id-card">🪪 Open Digital ID Card</button>
    </div>

    <!-- Quick Stats Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:16px; margin-bottom:30px;">
      <div style="background:linear-gradient(135deg, #0b2545, #134074); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">ATTENDANCE RATE</div>
        <div style="font-size:2rem; font-weight:800; color:#4ade80;">${e.attendance.percentage}%</div>
        <div style="font-size:0.75rem; opacity:0.9;">Present: ${e.attendance.present} / ${e.attendance.total} Days</div>
      </div>
      <div style="background:linear-gradient(135deg, #e65100, #ff6b00); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">FEE BALANCE</div>
        <div style="font-size:2rem; font-weight:800;">₹${e.fees.remaining}</div>
        <div style="font-size:0.75rem; opacity:0.9;">Total Paid: ₹${e.fees.paid}</div>
      </div>
      <div style="background:linear-gradient(135deg, #059669, #10b981); color:#fff; padding:20px; border-radius:14px;">
        <div style="font-size:0.8rem; opacity:0.8;">ACADEMIC RESULT</div>
        <div style="font-size:2rem; font-weight:800;">${e.marksheet?e.marksheet.percentage:"89%"}</div>
        <div style="font-size:0.75rem; opacity:0.9;">Grade: ${e.marksheet?e.marksheet.grade:"A+"} (${e.marksheet?e.marksheet.status:"PASS"})</div>
      </div>
    </div>

    <!-- Enrolled Course Summary & QR Banner -->
    <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:14px; padding:20px; display:flex; justify-content:space-between; align-items:center; gap:20px;">
      <div>
        <h4 style="color:var(--navy-dark); font-weight:800; font-size:1.1rem; margin-bottom:4px;">Official WTI Registered Profile</h4>
        <p style="font-size:0.85rem; color:var(--text-muted);">Father's Name: ${e.fatherName} | Batch: ${e.batch} | Contact: ${e.phone}</p>
        <p style="font-size:0.85rem; color:var(--orange-bright); font-weight:700; margin-top:4px;">Address: ${e.address}</p>
      </div>
      <div style="text-align:center;">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=WTI-VERIFY-${e.enrollmentNo}" style="border:1px solid #ccc; padding:4px; background:#fff; border-radius:6px;" />
        <div style="font-size:0.65rem; color:var(--text-muted); font-weight:700; margin-top:2px;">Scan Profile QR</div>
      </div>
    </div>
  `;const t=document.getElementById("btn-open-my-id-card");t&&t.addEventListener("click",()=>x(e))}function X(e){const i=document.getElementById("tab-certificates");if(!i)return;const t=l.certificates.filter(o=>o.studentId===e.studentId||o.studentName===e.name);i.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📜 My Verified Certificates</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Official DigiLocker & WTI QR Code verified certificates issued to you.</p>
    </div>

    ${t.length===0?"<p>No certificates issued yet.</p>":`
      <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:20px;">
        ${t.map(o=>`
          <div class="home-card" style="cursor:default;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
              <span class="badge-status badge-valid">✓ ${o.status}</span>
              <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Issue Date: ${o.issueDate}</span>
            </div>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${o.courseName}</h4>
            <div style="font-size:0.82rem; color:var(--orange-bright); font-weight:700; margin:4px 0 10px 0;">Cert No: ${o.certificateNo}</div>
            <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;">Grade/Rating: <strong>${o.grade}</strong> | Type: ${o.type}</div>
            <button class="btn-primary btn-view-cert" data-cert="${o.certificateNo}" style="width:100%; justify-content:center; padding:10px; font-size:0.85rem;">🖨️ View & Print Certificate</button>
          </div>
        `).join("")}
      </div>
    `}
  `,document.querySelectorAll(".btn-view-cert").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-cert"),n=l.verifyCertificate(a);n&&w(n)})})}function Z(){const e=document.getElementById("tab-study-material");e&&(e.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📖 Course Study Materials & Video Lessons</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Download course handbooks, watch practical videos, and review notes.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:18px;">
      ${l.materials.map(i=>`
        <div class="home-card" style="cursor:default;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-size:1.8rem;">${i.icon}</span>
            <span class="course-code-tag">${i.courseCode}</span>
          </div>
          <h4 style="font-size:1rem; font-weight:800; color:var(--navy-dark);">${i.topic}</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin:8px 0 14px 0;">${i.description}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.75rem; font-weight:700; color:var(--orange-bright);">${i.type} (${i.fileSize})</span>
            <button class="btn-secondary" style="padding:6px 14px; font-size:0.78rem; background:var(--navy-main);" onclick="alert('Downloading ${i.topic}...')">📥 Download</button>
          </div>
        </div>
      `).join("")}
    </div>
  `)}function ee(e){const i=document.getElementById("tab-exam");if(!i)return;const t=l.exams[0];i.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📝 Online Computer-Based Examination</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Take automated online assessments for instant result grading & certification eligibility.</p>
    </div>

    <div style="background:#f8fafc; border:1px solid var(--border-color); border-radius:14px; padding:24px; max-width:650px;">
      <span class="badge-status badge-valid" style="margin-bottom:10px;">STATUS: READY TO TAKE</span>
      <h4 style="font-size:1.2rem; font-weight:800; color:var(--navy-dark); margin-bottom:6px;">${t.title}</h4>
      <p style="font-size:0.85rem; color:var(--text-muted);">Subject: <strong>${t.subject}</strong> | Target: ${t.courseName}</p>
      
      <div class="grid-stats-3" style="margin:18px 0; background:#fff; padding:14px; border-radius:10px; border:1px solid var(--border-color); text-align:center;">
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Questions</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--navy-dark);">${t.totalQuestions} MCQs</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Time Limit</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--orange-bright);">${t.durationMins} Mins</div>
        </div>
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Passing Score</div>
          <div style="font-weight:800; font-size:1.1rem; color:var(--green-success);">${t.passingScore}%</div>
        </div>
      </div>

      <button class="btn-primary" id="btn-start-exam-now" style="width:100%; justify-content:center;">✍️ Start Online Exam Now</button>
    </div>
  `;const o=document.getElementById("btn-start-exam-now");o&&o.addEventListener("click",()=>se(t))}function te(e){const i=document.getElementById("tab-result");if(!i)return;const t=e.marksheet;i.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <div>
        <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📊 Official Examination Result & Marksheet</h3>
        <p style="font-size:0.85rem; color:var(--text-muted);">Subject-wise marks distribution and overall academic grade.</p>
      </div>
      <button class="btn-primary" id="btn-print-marksheet">📄 Download Marksheet PDF</button>
    </div>

    ${t?`
      <div style="background:#fff; border:2px solid var(--navy-main); border-radius:14px; padding:24px; max-width:800px;">
        <div style="display:flex; justify-content:space-between; border-bottom:2px solid var(--orange-bright); padding-bottom:12px; margin-bottom:16px;">
          <div>
            <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${t.examTitle}</h4>
            <div style="font-size:0.8rem; color:var(--text-muted);">Result Published: ${t.resultDate}</div>
          </div>
          <div style="text-align:right;">
            <span class="badge-status badge-valid" style="font-size:0.9rem; padding:6px 14px;">${t.status}</span>
            <div style="font-size:0.8rem; font-weight:800; color:var(--navy-main); margin-top:4px;">Grade: ${t.grade}</div>
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
              ${t.subjects.map(a=>`
                <tr>
                  <td style="font-weight:700;">${a.subject}</td>
                  <td>${a.maxMarks}</td>
                  <td style="color:var(--navy-main); font-weight:800;">${a.obtained}</td>
                  <td>${Math.round(a.obtained/a.maxMarks*100)}%</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div style="display:flex; justify-content:space-between; margin-top:20px; background:var(--bg-light); padding:16px; border-radius:10px; font-weight:800;">
          <div>TOTAL OBTAINED: <span style="color:var(--navy-main);">${t.obtainedMarks} / ${t.totalMarks}</span></div>
          <div>OVERALL PERCENTAGE: <span style="color:var(--orange-bright);">${t.percentage}</span></div>
        </div>
      </div>
    `:"<p>Result not published yet.</p>"}
  `;const o=document.getElementById("btn-print-marksheet");o&&o.addEventListener("click",()=>window.print())}function ie(e){const i=document.getElementById("tab-attendance");if(!i)return;const t=e.attendance;i.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📅 Student Attendance Log</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Real-time classroom and practical drill attendance record.</p>
    </div>

    <div class="grid-att-summary">
      <div style="background:var(--navy-dark); color:#fff; border-radius:14px; padding:24px; text-align:center;">
        <div style="font-size:0.85rem; opacity:0.8;">OVERALL PERCENTAGE</div>
        <div style="font-size:3.2rem; font-weight:900; color:#4ade80; margin:10px 0;">${t.percentage}%</div>
        <div style="font-size:0.85rem;">Status: <span style="color:#4ade80; font-weight:700;">GOOD STANDING</span></div>
      </div>

      <div style="background:#fff; border:1px solid var(--border-color); border-radius:14px; padding:20px;">
        <h4 style="font-size:1.05rem; font-weight:800; color:var(--navy-dark); margin-bottom:14px;">Summary Breakdown</h4>
        <div class="grid-stats-3" style="text-align:center;">
          <div style="background:#f8fafc; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Total Classes</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--navy-dark);">${t.total}</div>
          </div>
          <div style="background:#d1fae5; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:#065f46;">Present</div>
            <div style="font-size:1.4rem; font-weight:800; color:#065f46;">${t.present}</div>
          </div>
          <div style="background:#fee2e2; padding:14px; border-radius:10px;">
            <div style="font-size:0.75rem; color:#991b1b;">Absent</div>
            <div style="font-size:1.4rem; font-weight:800; color:#991b1b;">${t.absent}</div>
          </div>
        </div>
      </div>
    </div>
  `}function N(e){const i=document.getElementById("tab-fees");if(!i)return;const t=e.fees;i.innerHTML=`
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
        <div style="font-size:1.5rem; font-weight:800; color:var(--navy-dark);">₹${t.total}</div>
      </div>
      <div style="background:#d1fae5; border:1px solid #a7f3d0; border-radius:12px; padding:18px;">
        <div style="font-size:0.78rem; color:#065f46;">TOTAL PAID AMOUNT</div>
        <div style="font-size:1.5rem; font-weight:800; color:#065f46;">₹${t.paid}</div>
      </div>
      <div style="background:#fff3e0; border:1px solid #ffe0b2; border-radius:12px; padding:18px;">
        <div style="font-size:0.78rem; color:#e65100;">REMAINING DUES</div>
        <div style="font-size:1.5rem; font-weight:800; color:#e65100;">₹${t.remaining}</div>
        <div style="font-size:0.7rem; color:#b45309; font-weight:700; margin-top:2px;">Due Date: ${t.dueDate}</div>
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
  `,document.querySelectorAll(".btn-receipt-print").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-rec"),r=a.getAttribute("data-amt"),s=a.getAttribute("data-date");re(e,n,r,s)})});const o=document.getElementById("btn-pay-online");o&&o.addEventListener("click",()=>{const a=prompt("Enter amount to pay (₹):",e.fees.remaining);a&&!isNaN(a)&&(alert(`Payment of ₹${a} successful via WTI Gateway! Digital receipt generated.`),e.fees.paid+=parseInt(a),e.fees.remaining=Math.max(0,e.fees.total-e.fees.paid),l.save(),N(e))})}function $(){const e=document.getElementById("tab-placement-jobs");e&&(e.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">💼 Placement & Job Opportunities (India & Gulf)</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Exclusive job vacancies for WTI Fire & Safety, ITI, and Diploma graduates.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:20px;">
      ${l.jobs.map(i=>`
        <div class="home-card" style="cursor:default;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="badge-status badge-urgent">${i.type}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">${i.postedDate}</span>
          </div>
          <h4 style="font-size:1.1rem; font-weight:800; color:var(--navy-dark);">${i.title}</h4>
          <div style="font-size:0.85rem; font-weight:700; color:var(--orange-bright); margin:2px 0 6px 0;">🏢 ${i.company}</div>
          <div style="font-size:0.8rem; color:var(--text-dark); margin-bottom:8px;">📍 ${i.location}</div>
          <div style="font-size:0.85rem; font-weight:800; color:var(--green-success); margin-bottom:10px;">💰 ${i.salary}</div>
          <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:14px;"><strong>Req:</strong> ${i.requirements}</p>
          <button class="btn-primary" style="width:100%; justify-content:center; padding:10px; font-size:0.85rem;" onclick="alert('Application submitted to ${i.company}! WTI placement cell will contact you.')">🚀 Apply Now</button>
        </div>
      `).join("")}
    </div>
  `)}function ae(){const e=document.getElementById("tab-notices");e&&(e.innerHTML=`
    <div style="margin-bottom:20px;">
      <h3 style="font-family:'Outfit'; font-size:1.4rem; color:var(--navy-dark);">📢 Institute Notice Board & Announcements</h3>
      <p style="font-size:0.85rem; color:var(--text-muted);">Important alerts regarding exams, practical drills, holidays, and campus interviews.</p>
    </div>

    <div style="display:flex; flex-direction:column; gap:16px;">
      ${l.noticesList.map(i=>`
        <div style="background:#fff; border:1px solid var(--border-color); border-left:5px solid var(--orange-bright); border-radius:10px; padding:18px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span style="font-size:0.75rem; font-weight:800; color:var(--navy-main);">${i.category.toUpperCase()}</span>
            <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">🗓️ ${i.date}</span>
          </div>
          <h4 style="font-size:1.05rem; font-weight:800; color:var(--navy-dark); margin-bottom:6px;">${i.title}</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">${i.body}</p>
        </div>
      `).join("")}
    </div>
  `)}function L(){if(!document.getElementById("admin-portal"))return;const i=document.querySelectorAll(".dash-menu-item[data-admin-tab]"),t=document.querySelectorAll(".admin-tab-pane");i.forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-admin-tab");i.forEach(r=>r.classList.remove("admin-active")),t.forEach(r=>r.classList.remove("active")),o.classList.add("admin-active");const n=document.getElementById(`admin-tab-${a}`);n&&n.classList.add("active")})}),F(),M(),B()}function F(){var n,r,s,d;const e=document.getElementById("admin-tab-overview");if(!e)return;const i=l.students.length+12400,t=l.activeSessions,o=l.getTotalCoursesCount(),a=l.certificates.length+8500;e.innerHTML=`
    <h3 style="font-family:'Outfit'; font-size:1.5rem; color:#FFFFFF; margin-bottom:20px;">👨‍💼 WTI Master Executive Control Panel</h3>

    <!-- Dynamic Metrics Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:18px; margin-bottom:30px;">
      <div style="background:#0b2545; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">REGISTERED STUDENTS</div>
        <div style="font-size:2.2rem; font-weight:800; color:#38bdf8;">${i.toLocaleString()}</div>
        <div style="font-size:0.75rem; opacity:0.8;">🎓 Student Accounts</div>
      </div>
      <div style="background:#059669; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">LOGGED IN SESSIONS</div>
        <div style="font-size:2.2rem; font-weight:800; color:#a7f3d0;">${t} Active</div>
        <div style="font-size:0.75rem; opacity:0.8;">🟢 Live Active Logins</div>
      </div>
      <div style="background:#6a1b9a; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">TOTAL COURSES</div>
        <div style="font-size:2.2rem; font-weight:800; color:#e9d5ff;">${o} Courses</div>
        <div style="font-size:0.75rem; opacity:0.8;">📚 Across 5 Divisions</div>
      </div>
      <div style="background:#e65100; color:#fff; padding:20px; border-radius:14px; border:1px solid rgba(93,255,217,0.3);">
        <div style="font-size:0.8rem; opacity:0.8;">CERTIFICATES ISSUED</div>
        <div style="font-size:2.2rem; font-weight:800; color:#ffb74d;">${a.toLocaleString()}</div>
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
  `,(n=document.getElementById("form-admin-add-course"))==null||n.addEventListener("submit",m=>{m.preventDefault();const p=document.getElementById("new-course-category").value,f=document.getElementById("new-course-code").value.trim().toUpperCase(),c=document.getElementById("new-course-name").value.trim(),u=document.getElementById("new-course-duration").value.trim(),g=document.getElementById("new-course-eligibility").value.trim();l.addCourse(p,{code:f,name:c,duration:u,eligibility:g}),alert(`🎉 New Course Published Successfully!
Course: ${c} (${f})
Duration: ${u}`),k(),F()}),(r=document.getElementById("btn-quick-gen-cert"))==null||r.addEventListener("click",()=>{document.querySelector('[data-admin-tab="cert-generator"]').click()}),(s=document.getElementById("btn-quick-add-student"))==null||s.addEventListener("click",()=>{z()}),(d=document.getElementById("btn-quick-post-job"))==null||d.addEventListener("click",()=>{de()})}function M(){var i;const e=document.getElementById("admin-tab-students");e&&(e.innerHTML=`
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
          ${l.students.map(t=>`
            <tr>
              <td style="font-weight:700; color:var(--orange-amber);">${t.enrollmentNo}</td>
              <td style="font-weight:700;">${t.name}</td>
              <td>${t.fatherName}</td>
              <td>${t.courseName}</td>
              <td>${t.batch}</td>
              <td>${t.phone}</td>
              <td>
                <button class="btn-secondary btn-admin-view-id" style="padding:4px 8px; font-size:0.75rem;" data-id="${t.id}">🪪 ID Card</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `,(i=document.getElementById("btn-admin-add-stu-modal"))==null||i.addEventListener("click",z),document.querySelectorAll(".btn-admin-view-id").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-id"),a=l.students.find(n=>n.id===o);a&&x(a)})}))}function B(){const e=document.getElementById("admin-tab-cert-generator");if(!e)return;e.innerHTML=`
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
            ${l.students.map(t=>`
              <option value="${t.id}">${t.name} (${t.enrollmentNo}) - ${t.courseName}</option>
            `).join("")}
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
          ${l.certificates.map(t=>`
            <tr>
              <td style="font-weight:700; color:var(--orange-bright);">${t.certificateNo}</td>
              <td style="font-weight:700;">${t.studentName}</td>
              <td>${t.courseName}</td>
              <td>${t.type}</td>
              <td>${t.issueDate}</td>
              <td><span class="badge-status badge-valid">${t.status}</span></td>
              <td>
                <button class="btn-secondary btn-preview-admin-cert" data-cert="${t.certificateNo}" style="padding:4px 8px; font-size:0.75rem;">🖨️ View/Print</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;const i=document.getElementById("form-cert-generator");i&&i.addEventListener("submit",t=>{t.preventDefault();const o=document.getElementById("cert-student-select").value,a=document.getElementById("cert-type-select").value,n=document.getElementById("cert-grade-input").value,r=document.getElementById("cert-date-input").value,s=l.students.find(p=>p.id===o);if(!s)return;const d=Math.floor(1e5+Math.random()*9e5),m={certificateNo:`WTI/FS/2026/${d}`,type:a,studentId:s.studentId,studentName:s.name,fatherName:s.fatherName,courseName:s.courseName,duration:`${s.duration} (Batch ${s.batch})`,issueDate:r,grade:n,status:"VALID",verificationUrl:"WTI Certificate Verification",qrData:`WTI-VERIFY-WTI/FS/2026/${d}-${s.name.replace(/\s+/g,"-")}`,photo:s.photo};l.addCertificate(m),alert(`Certificate Generated Successfully!
Certificate No: ${m.certificateNo}
QR Code Linked to Verification Engine.`),B(),w(m)}),document.querySelectorAll(".btn-preview-admin-cert").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-cert"),a=l.verifyCertificate(o);a&&w(a)})})}function oe(){const e=document.getElementById("form-cert-verify-search"),i=document.getElementById("verify-result-container");!e||!i||e.addEventListener("submit",t=>{t.preventDefault();const o=document.getElementById("input-cert-search").value,a=l.verifyCertificate(o);a?i.innerHTML=`
        <div style="background:#fff; border:3px solid var(--green-success); border-radius:16px; padding:30px; max-width:650px; margin:0 auto; box-shadow:0 10px 25px rgba(16,185,129,0.2);">
          <div style="text-align:center; border-bottom:2px solid var(--border-color); padding-bottom:16px; margin-bottom:20px;">
            <span class="badge-status badge-valid" style="font-size:1.1rem; padding:8px 20px;">✅ OFFICIAL VALID WTI CERTIFICATE</span>
            <h3 style="font-family:'Outfit'; font-size:1.5rem; color:var(--navy-dark); margin-top:12px;">WTI Online Verification Portal</h3>
          </div>

          <div class="grid-verify-person" style="margin-bottom:20px;">
            <img src="${a.photo}" style="width:100px; height:100px; border-radius:50%; object-fit:cover; border:3px solid var(--orange-bright);" />
            <div>
              <h4 style="font-size:1.2rem; font-weight:800; color:var(--navy-dark);">${a.studentName}</h4>
              <div style="font-size:0.85rem; color:var(--text-muted);">Father's Name: ${a.fatherName}</div>
              <div style="font-size:0.9rem; font-weight:800; color:var(--orange-bright); margin-top:4px;">Course: ${a.courseName}</div>
            </div>
          </div>

          <div style="background:var(--bg-light); border-radius:10px; padding:16px; font-size:0.85rem; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Certificate No:</span>
              <strong style="color:var(--navy-main);">${a.certificateNo}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Issue Date:</span>
              <strong>${a.issueDate}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span>Grade / Rating:</span>
              <strong>${a.grade}</strong>
            </div>
            <div style="display:flex; justify-content:space-between;">
              <span>Affiliation / Approval:</span>
              <strong style="color:var(--orange-amber);">BSS, NCVTE & DigiLocker Approved</strong>
            </div>
          </div>

          <button class="btn-primary" style="width:100%; justify-content:center;" onclick="window.print()">🖨️ Download Verified Verification Copy</button>
        </div>
      `:i.innerHTML=`
        <div style="background:#fff; border:3px solid var(--red-error); border-radius:16px; padding:30px; max-width:600px; margin:0 auto; text-align:center;">
          <span class="badge-status badge-urgent" style="font-size:1.1rem; padding:8px 20px; margin-bottom:14px;">❌ CERTIFICATE NOT FOUND / INVALID</span>
          <p style="color:var(--text-muted); font-size:0.9rem; margin-top:12px;">No certificate matches ID "${o}". Please check the Certificate Number or scan QR code directly.</p>
        </div>
      `})}function ne(){document.querySelectorAll(".modal-close-btn").forEach(i=>{i.addEventListener("click",()=>{document.querySelectorAll(".modal-overlay").forEach(t=>t.classList.remove("active"))})})}function w(e){const i=document.getElementById("modal-certificate-view"),t=document.getElementById("certificate-render-frame");!i||!t||(t.innerHTML=`
    <div class="certificate-frame printable-area">
      <div class="cert-corner-ornament cert-tl"></div>
      <div class="cert-corner-ornament cert-tr"></div>
      <div class="cert-corner-ornament cert-bl"></div>
      <div class="cert-corner-ornament cert-br"></div>

      <div class="cert-header">
        <img src="wti-logo.png" alt="WTI Official Logo" style="height:70px; margin-bottom:8px; display:inline-block;" />
        <div style="font-size:0.8rem; font-weight:800; color:var(--navy-main); letter-spacing:2px;">WORLD TECHNICAL INSTITUTE (WTI)</div>
        <h1 class="cert-inst-name">${h.name}</h1>
        <p class="cert-inst-sub">Regd Addr: ${h.regAddress} | Call: ${h.contactNumber}</p>
        <div style="font-size:0.75rem; color:#475569; margin-top:4px;">Affiliated & Approved: BSS | NCVTE | MSBTE | DigiLocker Approved Certificate</div>
      </div>

      <div class="cert-title-badge">${e.type}</div>

      <div class="cert-body-text">
        This is to certify that Mr./Ms. <br />
        <span class="cert-student-highlight">${e.studentName}</span> <br />
        Son / Daughter of <strong>${e.fatherName}</strong> <br />
        has successfully completed the prescribed course in <br />
        <span class="cert-course-highlight">${e.courseName}</span> <br />
        with duration <strong>${e.duration}</strong> and has secured <strong>${e.grade}</strong>.
      </div>

      <div class="cert-footer-grid">
        <div class="cert-qr-box">
          <img class="cert-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${encodeURIComponent(e.qrData)}" />
          <div style="font-size:0.65rem; font-weight:700; margin-top:4px;">Verify: ${e.certificateNo}</div>
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
  `,i.classList.add("active"))}function x(e){const i=document.getElementById("modal-idcard-view"),t=document.getElementById("idcard-render-frame");!i||!t||(t.innerHTML=`
    <div class="id-card-wrap printable-area">
      <div class="id-card-header" style="display:flex; align-items:center; justify-content:center; gap:10px;">
        <img src="wti-logo.png" alt="WTI Logo" style="height:42px; background:#ffffff; padding:2px; border-radius:6px;" />
        <div>
          <div style="font-size:0.75rem; color:#ffb74d; font-weight:800; letter-spacing:0.5px;">WORLD TECHNICAL INSTITUTE</div>
          <div class="id-card-logo-title" style="font-size:0.95rem;">STUDENT DIGITAL ID</div>
        </div>
      </div>

      <div class="id-photo-container">
        <img class="id-photo" src="${e.photo}" />
      </div>

      <div class="id-name">${e.name}</div>
      <div class="id-course">${e.courseName}</div>

      <div class="id-details-list">
        <div class="id-detail-row">
          <span>Enrollment No:</span>
          <strong>${e.enrollmentNo}</strong>
        </div>
        <div class="id-detail-row">
          <span>Father's Name:</span>
          <strong>${e.fatherName}</strong>
        </div>
        <div class="id-detail-row">
          <span>Batch Session:</span>
          <strong>${e.batch}</strong>
        </div>
        <div class="id-detail-row">
          <span>Contact:</span>
          <strong>${e.phone}</strong>
        </div>
      </div>

      <div class="id-qr-footer">
        <img class="id-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=WTI-STUDENT-${e.enrollmentNo}" />
        <div style="font-size:0.65rem; text-align:right;">
          <div style="color:#ffb74d; font-weight:800;">WTI DEORIA CAMPUS</div>
          <div>Call: 8528372209</div>
        </div>
      </div>
    </div>
  `,i.classList.add("active"))}function re(e,i,t,o){const a=document.getElementById("modal-generic"),n=document.getElementById("generic-modal-content");!a||!n||(n.innerHTML=`
    <div style="padding:20px; border:2px solid var(--navy-main); border-radius:12px;" class="printable-area">
      <div style="text-align:center; border-bottom:2px solid var(--orange-bright); padding-bottom:10px; margin-bottom:16px;">
        <img src="wti-logo.png" alt="WTI Official Logo" style="height:55px; margin-bottom:6px; display:inline-block;" />
        <h2 style="font-family:'Outfit'; color:var(--navy-dark); font-size:1.4rem;">WORLD TECHNICAL INSTITUTE</h2>
        <p style="font-size:0.8rem; color:var(--text-muted);">${h.regAddress} | Call: 8528372209</p>
        <h3 style="color:var(--orange-amber); margin-top:6px; font-size:1.1rem;">DIGITAL FEE RECEIPT</h3>
      </div>

      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:14px;">
        <div>Receipt No: <strong>${i}</strong></div>
        <div>Date: <strong>${o}</strong></div>
      </div>

      <div style="background:var(--bg-light); padding:14px; border-radius:8px; font-size:0.85rem; margin-bottom:16px;">
        <div>Student Name: <strong>${e.name}</strong></div>
        <div>Enrollment No: <strong>${e.enrollmentNo}</strong></div>
        <div>Course: <strong>${e.courseName}</strong></div>
      </div>

      <div style="font-size:1.2rem; font-weight:800; color:var(--green-success); margin-bottom:20px; text-align:center;">
        AMOUNT PAID: ₹${t} (SUCCESSFUL)
      </div>

      <button class="btn-primary" style="width:100%; justify-content:center;" onclick="window.print()">🖨️ Print Receipt PDF</button>
    </div>
  `,a.classList.add("active"))}function se(e,i){const t=document.getElementById("modal-generic"),o=document.getElementById("generic-modal-content");if(!t||!o)return;let a=0,n={};function r(){var d,m,p;const s=e.questions[a];o.innerHTML=`
      <div style="padding:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <h3 style="font-family:'Outfit'; font-size:1.2rem; color:var(--navy-dark);">${e.title}</h3>
          <span class="badge-status badge-valid">Q ${a+1} of ${e.totalQuestions}</span>
        </div>

        <div style="background:var(--bg-light); border-radius:10px; padding:18px; margin-bottom:18px;">
          <h4 style="font-size:1rem; font-weight:800; color:var(--navy-dark); margin-bottom:14px;">${s.question}</h4>
          ${s.options.map((f,c)=>`
            <label style="display:block; padding:10px 14px; background:#fff; border:1px solid var(--border-color); border-radius:8px; margin-bottom:8px; cursor:pointer;">
              <input type="radio" name="opt" value="${c}" ${n[a]===c?"checked":""} />
              <span style="font-weight:600; font-size:0.9rem; margin-left:8px;">${f}</span>
            </label>
          `).join("")}
        </div>

        <div style="display:flex; justify-content:space-between;">
          <button class="btn-secondary" id="exam-prev-q" ${a===0?"disabled":""}>← Previous</button>
          ${a===e.totalQuestions-1?'<button class="btn-primary" id="exam-submit-all">Submit Exam Now</button>':'<button class="btn-primary" id="exam-next-q">Next Question →</button>'}
        </div>
      </div>
    `,document.querySelectorAll('input[name="opt"]').forEach(f=>{f.addEventListener("change",c=>{n[a]=parseInt(c.target.value)})}),(d=document.getElementById("exam-prev-q"))==null||d.addEventListener("click",()=>{a>0&&(a--,r())}),(m=document.getElementById("exam-next-q"))==null||m.addEventListener("click",()=>{a<e.totalQuestions-1&&(a++,r())}),(p=document.getElementById("exam-submit-all"))==null||p.addEventListener("click",()=>{let f=0;e.questions.forEach((g,y)=>{n[y]===g.correct&&f++});const c=Math.round(f/e.totalQuestions*100),u=c>=e.passingScore;o.innerHTML=`
        <div style="text-align:center; padding:20px;">
          <div style="font-size:3rem; margin-bottom:10px;">${u?"🎉":"❌"}</div>
          <h2 style="font-family:'Outfit'; font-size:1.6rem; color:var(--navy-dark);">${u?"EXAM PASSED!":"RE-ATTEMPT NEEDED"}</h2>
          <div style="font-size:2rem; font-weight:900; color:${u?"var(--green-success)":"var(--red-error)"}; margin:10px 0;">${c}% SCORE</div>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:20px;">Correct: ${f} / ${e.totalQuestions} Questions</p>
          <button class="btn-primary" style="margin:0 auto;" onclick="document.querySelectorAll('.modal-overlay').forEach(m=>m.classList.remove('active'))">Close Exam</button>
        </div>
      `})}r(),t.classList.add("active")}function z(){var t;const e=document.getElementById("modal-generic"),i=document.getElementById("generic-modal-content");!e||!i||(i.innerHTML=`
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
  `,(t=document.getElementById("form-new-student"))==null||t.addEventListener("submit",o=>{o.preventDefault();const a=document.getElementById("stu-add-name").value,n=document.getElementById("stu-add-father").value,r=document.getElementById("stu-add-course").value,s=document.getElementById("stu-add-phone").value,d=Math.floor(1e3+Math.random()*9e3),m={id:`STU-2026-${d}`,enrollmentNo:`WTI/2026/${d}`,studentId:`WTI-STU-${d}`,name:a,fatherName:n,photo:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",courseId:"DFSM",courseName:r,category:"Fire & Safety",batch:"2025-2026",duration:"1 Year",joiningDate:"2026-08-10",validTill:"2027-08-09",phone:s,email:`${a.toLowerCase().replace(/\s+/g,"")}@example.com`,address:"Deoria, UP",attendance:{total:100,present:100,absent:0,percentage:100},fees:{total:25e3,paid:1e4,remaining:15e3,dueDate:"2026-09-30"}};l.addStudent(m),alert(`Student Registered!
Enrollment No: ${m.enrollmentNo}`),e.classList.remove("active"),M()}),e.classList.add("active"))}function de(){var t;const e=document.getElementById("modal-generic"),i=document.getElementById("generic-modal-content");!e||!i||(i.innerHTML=`
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
  `,(t=document.getElementById("form-new-job"))==null||t.addEventListener("submit",o=>{o.preventDefault();const a=document.getElementById("job-add-title").value,n=document.getElementById("job-add-company").value,r=document.getElementById("job-add-loc").value,s=document.getElementById("job-add-sal").value,d={id:`JOB-${Math.floor(100+Math.random()*900)}`,title:a,company:n,location:r,salary:s,type:"Gulf Jobs",category:"Safety Jobs",requirements:"WTI Safety Diploma / ADIS + 1 Year Experience.",postedDate:"10-Aug-2026",status:"OPEN"};l.addJob(d),alert("New Job Vacancy Published!"),e.classList.remove("active"),$()}),e.classList.add("active"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();

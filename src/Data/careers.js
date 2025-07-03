export const careersTabs = [
  { id: 'careers', title: 'Career Opportunities' },
  { id: 'about', title: 'Why Join Us?' },
  { id: 'apply', title: 'Current Openings' }
];

export const careersContent = {
  careers: {
    title: "Build Your Career With Us",
    content: [
      {
        type: 'paragraph',
        text: "Faiz-ur-Rehman & Company, a PEC-licensed construction firm (C3/4227), offers rewarding career opportunities in Islamabad and across Pakistan for professionals specializing in civil engineering, solar energy systems, and building construction."
      },
      {
        type: 'paragraph',
        text: "With our diverse PEC specializations including irrigation systems, solar installations, and general civil works, we provide a dynamic work environment for engineering professionals."
      },
      {
        type: 'highlight',
        title: "Why Join Our Team?",
        items: [
          "Work on diverse projects across 24 PEC specializations",
          "PEC-certified engineering environment",
          "Hands-on experience with solar energy systems (EE11 categories)",
          "Opportunities in civil engineering (CE categories)",
          "Professional development and certification support",
          "Competitive compensation packages"
        ]
      }
    ]
  },
  about: {
    title: "Employee Benefits & Culture",
    content: [
      {
        type: 'section',
        title: "Our Benefits Package",
        items: [
          "PEC-standard competitive salaries",
          "Health insurance coverage",
          "Project completion bonuses",
          "Professional certification reimbursement",
          "Continuing education opportunities"
        ]
      },
      {
        type: 'section',
        title: "Work Culture",
        items: [
          "Safety-first approach on all sites",
          "Collaborative engineering teams",
          "Modern construction technologies",
          "ISO-compliant work standards",
          "Employee recognition programs"
        ]
      },
      {
        type: 'process',
        title: "Our Hiring Process",
        steps: [
          "PEC credential verification",
          "Technical skills assessment",
          "Engineering competency evaluation",
          "Management interview",
          "Project-specific orientation"
        ]
      }
    ]
  },
  apply: {
    title: "Current Job Openings",
    content: [
      {
        type: 'positions',
        jobs: [
          {
            title: "Civil Engineer (PEC Registered)",
            location: "Islamabad",
            department: "Civil Engineering",
            specialization: "CE04/CE10 - Irrigation & General Civil Works"
          },
          {
            title: "Solar Energy Technician",
            location: "Multiple Sites",
            department: "Electrical Engineering",
            specialization: "EE11 - Solar Power Systems"
          },
          {
            title: "Construction Supervisor",
            location: "G-10, Islamabad",
            department: "Building Construction",
            specialization: "BC01/BC02 - Building Construction & Restoration"
          },
          {
            title: "Electrical Engineer",
            location: "Islamabad",
            department: "Electrical Engineering",
            specialization: "EE04 - Low Voltage Installations"
          }
        ]
      },
      {
        type: 'general',
        text: "Don't see your specialty listed? We're always interested in connecting with qualified PEC professionals across all our specializations."
      }
    ]
  }
};
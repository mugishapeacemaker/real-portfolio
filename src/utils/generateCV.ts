import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Colors
  const primaryColor: [number, number, number] = [23, 128, 117]; // Teal
  const textColor: [number, number, number] = [30, 41, 59];
  const mutedColor: [number, number, number] = [100, 116, 139];

  // Header Background
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, 210, 50, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('NIYONSHUTI MUGISHA ALLAIN PEACE MAKER', 20, 22);



  // Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Software Developer', 20, 38);

  // Contact Info in Header
  doc.setFontSize(9);
  doc.text('mugishapeacemaker23@gmail.com | +250 79 895 9888 | Bugesera, Nyamata, Rwanda', 20, 46);

  let yPos = 60;

  // Helper function to add section
  const addSection = (title: string) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFillColor(...primaryColor);
    doc.rect(20, yPos - 5, 170, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), 25, yPos);
    yPos += 10;
    doc.setTextColor(...textColor);
  };

  // Helper to check page break
  const checkPageBreak = (neededSpace: number) => {
    if (yPos + neededSpace > 280) {
      doc.addPage();
      yPos = 20;
    }
  };

  // Profile
  addSection('Profile');
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const profile = 'Motivated and passionate Software Developer with strong foundations in full-stack development, databases, and modern development tools. Experienced in building real-world systems and working in Linux environments. Enthusiastic about learning new technologies and solving real-life problems through code.';
  const profileLines = doc.splitTextToSize(profile, 165);
  doc.text(profileLines, 25, yPos);
  yPos += profileLines.length * 5 + 8;

  // Technical Skills
  addSection('Technical Skills');
  doc.setFontSize(10);
  
  const skills = [
    { category: 'Programming Languages:', items: 'Java, JavaScript, TypeScript, Python, PHP,' },
    { category: 'Frontend Development:', items: 'React.js, HTML5, CSS3, Tailwind CSS' },
    { category: 'Backend & Databases:', items: 'Node.js, PostgreSQL, MongoDB,SQL DB' },
    { category: 'DevOps & Cloud:', items: 'Docker, AWS (basic knowledge)' },
    { category: 'Tools & Platforms:', items: 'Git, GitHub, Postman, Figma, Linux' },
    { category: 'Productivity & Office:', items: 'Microsoft Word, Excel, PowerPoint, WPS Office' },
  ];

  skills.forEach(skill => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.text(skill.category, 25, yPos);
    doc.setFont('helvetica', 'normal');
    const categoryWidth = doc.getTextWidth(skill.category) + 3;
    doc.text(skill.items, 25 + categoryWidth, yPos);
    yPos += 6;
  });
  yPos += 6;

  // Academic Background
  checkPageBreak(35);
  addSection('Academic Background');
  
  const education = [
    { period: '2024 – 2027', school: 'Lycée de Nyanza', level: "Advanced  Level (Current)" },
    { period: '2020 – 2024', school: 'ES Rukozo', level: "OrdinaryLevel" },
    { period: '2014 – 2019', school: 'Nyamata High School', level: 'Primary School' },
    { period: '2012 – 2014', school: 'Nyamata High School', level: 'Nursery' },
  ];

  education.forEach(edu => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.text(edu.level, 25, yPos);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...mutedColor);
    doc.text(`${edu.school} (${edu.period})`, 25, yPos + 5);
    doc.setTextColor(...textColor);
    yPos += 12;
  });
  yPos += 4;

  // Internship Experience
  checkPageBreak(40);
  addSection('Internship Experience');
  doc.setFont('helvetica', 'bold');
  doc.text('Software Development Intern – KNAX-250 (April/2025)', 25, yPos);
  yPos += 7;
  
  doc.setFont('helvetica', 'normal');
  const internshipTasks = [
    '• Assisted in software development, testing, and debugging',
    '• Used Git/GitHub for version control',
    '• Worked with development tools and basic deployment workflows',
    '• Strengthened teamwork and problem-solving skills',
  ];
  
  internshipTasks.forEach(task => {
    checkPageBreak(6);
    doc.text(task, 28, yPos);
    yPos += 5;
  });
  yPos += 6;

  // Projects
  checkPageBreak(30);
  addSection('Projects');
  
  const projects = [
    { name: 'Community Lost & Found System', tech: 'PHP, Node.js, HTML, CSS, SQL Database' },
    { name: 'Student Tracking System', tech: 'Python, Tailwind, MongoDB (NoSQL)' },
    { name: 'Developer Portfolio Website', tech: 'React, TypeScript, Tailwind CSS' },
  ];

  projects.forEach(project => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.text(`• ${project.name}`, 25, yPos);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(...mutedColor);
    doc.text(` – ${project.tech}`, 25 + doc.getTextWidth(`• ${project.name}`), yPos);
    doc.setTextColor(...textColor);
    yPos += 6;
  });
  yPos += 6;

  // Hobbies & Interests
  checkPageBreak(25);
  addSection('Hobbies & Interests');
  doc.setFont('helvetica', 'normal');
  const hobbies = [
    '• Coding and learning new technologies',
    '• Playing football',
    '• Exploring tech trends',
    '• Problem-solving and logical games',
  ];
  
  hobbies.forEach(hobby => {
    doc.text(hobby, 25, yPos);
    yPos += 5;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(...mutedColor);
  doc.text('Generated by Peace Maker  | github.com/mugishapeacemaker', 105, 290, { align: 'center' });

  // Save the PDF
  doc.save('peace-maker_CV.pdf');
};

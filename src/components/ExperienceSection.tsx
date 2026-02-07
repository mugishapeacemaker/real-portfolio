import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  titleFr: string;
  titleRw: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  descriptionFr: string;
  descriptionRw: string;
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Internership',
    titleFr: 'Développeur Full Stack',
    titleRw: 'Umuhanga mu Frontend na Backend',
    organization: 'Knax-250 Rwanda',
    location: 'Kigali, Rwanda',
    period: '2024',
    description: 'Developing modern web applications using React, Node.js, and cloud technologies. Leading frontend development and implementing responsive designs.',
    descriptionFr: 'Développement d\'applications web modernes avec React, Node.js et technologies cloud. Direction du développement frontend et implémentation de designs responsifs.',
    descriptionRw: 'Gukora porogaramu za web zigezweho nkoresheje React, Node.js, n\'ikoranabuhanga rya cloud. Kuyobora iterambere rya frontend no gushyira mu bikorwa imiterere ihindagurika.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    id: 2,
    type: 'work',
    title: 'Frontend Developer',
    titleFr: 'Développeur Frontend',
    titleRw: 'Umuhanga mu Frontend',
    organization: '',
    location: '',
    period: '2022 - 2023',
    description: 'Built responsive user interfaces and implemented interactive features for client projects. Collaborated with design teams to create pixel-perfect implementations.',
    descriptionFr: 'Construction d\'interfaces utilisateur responsives et implémentation de fonctionnalités interactives. Collaboration avec les équipes de design.',
    descriptionRw: 'Gukora interface z\'abakoresha zihindagurika no gushyira mu bikorwa ibiranga bya interactif ku mishinga y\'abakiriya. Gukorana n\'amatsinda y\'imiterere.',
    skills: ['React', 'JavaScript', 'CSS', 'Figma'],
  },
  {
    id: 3,
    type: 'education',
    title: "A'Level (Current)",
    titleFr: "A'Level (actuellement)",
    titleRw: "A'Level (Ubu)",
    organization: 'Lycée de Nyanza',
    location: 'Nyanza, Rwanda',
    period: '2024 - 2027',
    description: 'Currently pursuing advanced level secondary education with focus on web and mobile development.',
    descriptionFr: "Poursuite de l'enseignement secondaire de niveau avancé avec une spécialisation en sciences et technologie.",
    descriptionRw: "Nkurikirana amashuri yisumbuye y'urwego rwo hejuru nshingiye ku bumenyi n'ikoranabuhanga.",
    skills: ['Programming', 'Technology', 'Web & Mobile development' ] },
  {
    id: 4,
    type: 'education',
    title: "O'Level",
    titleFr: "O'Level",
    titleRw: "O'Level",
    organization: 'GS Rukozo',
    location: 'Rwanda',
    period: '2020 - 2023',
    description: 'Completed ordinary level secondary education with strong performance. ',
    descriptionFr: "Enseignement secondaire ordinaire terminé avec de bonnes performances.",
    descriptionRw: "Narangije amashuri yisumbuye y'ibanze neza cyane.",
    skills: ['ICT', 'Mathematics', 'Sciences'],
  },
  {
    id: 5,
    type: 'education',
    title: 'Primary School',
    titleFr: 'École Primaire',
    titleRw: 'Amashuri Abanza',
    organization: 'Nyamata High School',
    location: 'Nyamata, Rwanda',
    period: '2013 - 2019',
    description: 'Completed primary education with foundational knowledge in various subjects.',
    descriptionFr: "Éducation primaire terminée avec des connaissances de base dans diverses matières.",
    descriptionRw: "Narangije amashuri abanza n'ubumenyi bw'ibanze mu masomo atandukanye.",
    skills: ['Social Studies', 'Languages', 'Mathematics'],
  },
];

const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const translations = {
    en: {
      title: 'Experience & Education',
      subtitle: 'My professional journey and academic background',
      work: 'Work Experience',
      education: 'Education',
    },
    fr: {
      title: 'Expérience & Formation',
      subtitle: 'Mon parcours professionnel et académique',
      work: 'Expérience Professionnelle',
      education: 'Formation',
    },
    rw: {
      title: 'Uburambe n\'Amashuri',
      subtitle: 'Urugendo rwanjye mu kazi n\'amashuri',
      work: 'Uburambe mu Kazi',
      education: 'Amashuri',
    },
  };

  const t = translations[language as keyof typeof translations];

  return (
    <section id="experience" className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t.title}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6 z-10" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="glass-card rounded-xl p-6"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg ${item.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                      {item.type === 'work' ? (
                        <Briefcase className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.type === 'work' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {item.type === 'work' ? t.work : t.education}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {language === 'en' ? item.title : language === 'fr' ? item.titleFr : item.titleRw}
                  </h3>
                  <p className="text-primary font-medium mb-2">{item.organization}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === 'en' ? item.description : language === 'fr' ? item.descriptionFr : item.descriptionRw}
                  </p>

                  {/* Skills */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import projectLostFound from '@/assets/project-lost-found.jpg';
import projectStudentTracking from '@/assets/project-student-tracking.jpg';
import projectPortfolio from '@/assets/project-portfolio.jpg';

const projects = [
  {
    id: 1,
    title: 'Community Lost & Found System',
    description: 'A comprehensive platform helping communities report, track, and recover lost items. Features include item categorization, search functionality, and user notifications.',
    image: projectLostFound,
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    liveUrl: 'src/components/page/page.html',
    githubUrl: 'src/components/page/page.html',
  },
  {
    id: 2,
    title: 'Student Tracking System',
    description: 'A robust student management application built with NoSQL database for tracking student records, attendance, performance metrics, and academic progress.',
    image: projectStudentTracking,
    technologies: ['JavaScript', 'MongoDB', 'Node.js', 'Express'],
    liveUrl: 'src/components/page/page.html',
    githubUrl: 'src/components/page/page.html',
  },
  {
    id: 3,
    title: 'Developer Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and skills. Built with cutting-edge frontend technologies and featuring smooth animations.',
    image: projectPortfolio,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'src/components/page/page.html',
    githubUrl: 'src/components/page/page.html',
  },
];

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.viewProject}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      {t.projects.viewCode}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;

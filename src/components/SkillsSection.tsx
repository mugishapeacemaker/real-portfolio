import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 70 },
  ],
  tools: [
    'Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Postman', 'Linux', 'AWS'
  ],
};

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-container bg-secondary/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Frontend</h3>
            <div className="space-y-5">
              {skills.frontend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'var(--gradient-primary)' }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Backend</h3>
            <div className="space-y-5">
              {skills.backend.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'var(--gradient-accent)' }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools & Technologies */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((tool, index) => (
              <motion.span
                key={tool}
                className="skill-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05 + 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;

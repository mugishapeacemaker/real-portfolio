import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { generateCV } from '@/utils/generateCV';
import profileImage from '@/assets/profile.jpg';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCV = () => {
    generateCV();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Niyonshuti Mugisha Allain"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            {t.about.description.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-4 pt-4"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Bugesera, Nyamata, Rwanda</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">mugishapeacemaker23@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+250 79 895 9888</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Available for work</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <Button
                onClick={handleDownloadCV}
                className="btn-gradient px-8 py-6 text-lg rounded-full"
              >
                <Download className="w-5 h-5 mr-2" />
                {t.about.downloadCV}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

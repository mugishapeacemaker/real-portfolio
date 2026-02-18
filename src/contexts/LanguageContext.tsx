import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'rw';

interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    downloadCV: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    downloadCV: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Peace Maker',
      title: 'Full Stack Developer',
      subtitle: 'I build modern, responsive web applications with clean code and beautiful user experiences.',
      cta: 'Get in Touch',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      description: [
        'I am a passionate Full Stack Developer based in Bugesera, Nyamata, Rwanda. With a strong foundation in modern web technologies, I specialize in creating elegant, efficient, and user-friendly applications.',
        'My journey in software development has equipped me with expertise in both frontend and backend technologies. I believe in writing clean, maintainable code and continuously learning new technologies to stay ahead in this ever-evolving field.',
        'When I\'m coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. I\'m always open to new opportunities and collaborations.',
      ],
      downloadCV: 'Download My CV',
    },
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies I work with',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together',
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with ❤️ by Peace Maker',
    },
  },
  fr: {
    nav: {
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Peace Maker',
      title: 'Développeur Full Stack',
      subtitle: 'Je crée des applications web modernes et réactives avec un code propre et de belles expériences utilisateur.',
      cta: 'Me Contacter',
      downloadCV: 'Télécharger CV',
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Apprenez à mieux me connaître',
      description: [
        'Je suis un développeur Full Stack passionné basé à Bugesera, Nyamata, au Rwanda. Avec une solide base dans les technologies web modernes, je me spécialise dans la création d\'applications élégantes, efficaces et conviviales.',
        'Mon parcours dans le développement logiciel m\'a permis d\'acquérir une expertise dans les technologies frontend et backend. Je crois en l\'écriture de code propre et maintenable et j\'apprends continuellement de nouvelles technologies pour rester en avance dans ce domaine en constante évolution.',
        'Quand je ne code pas, j\'aime explorer de nouvelles technologies, contribuer à des projets source ouverte et partager des connaissances avec la communauté des développeurs. Je suis toujours ouvert aux nouvelles opportunités et collaborations.',
      ],
      downloadCV: 'Télécharger Mon CV',
    },
    skills: {
      title: 'Mes Compétences',
      subtitle: 'Technologies avec lesquelles je travaille',
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Quelques-uns de mes travaux récents',
      viewProject: 'Voir le Projet',
      viewCode: 'Voir le Code',
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Travaillons ensemble',
      name: 'Votre Nom',
      email: 'Votre Email',
      message: 'Votre Message',
      send: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès!',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
    },
    footer: {
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec ❤️ par Peace Maker',
    },
  },
  rw: {
    nav: {
      about: 'Ibyanjye',
      skills: 'Ubumenyi',
      projects: 'Imishinga',
      contact: 'Twandikire',
    },
    hero: {
      greeting: 'Muraho, nitwa',
      name: 'Peace Maker',
      title: 'Umuhanga mu ikoranabuhanga',
      subtitle: 'Nkora porogaramu  zigezweho, zinoze kandi zigaragara neza mu buryo bwikoranabuhanga.',
      cta: 'Twandikire',
      downloadCV: 'Reba CV yange(umwirondoro)',
    },
    about: {
      title: 'Ibyanjye',
      subtitle: 'Menya byinshi kuri njye',
      description: [
        'Ndi umuhanga mu ikoranabuhanga utuye i Bugesera, Nyamata, mu Rwanda. Mfite ubumenyi bwinshi mu ikoranabuhanga no kubak porogaramu, nkunda gukora porogaramu zinoze, zikora neza kandi zoroshye gukoresha.',
        'Urugendo rwanjye mu gukora porogaramu rwamfashije kugira ubumenyi mu mwikoranabuhanga. Nkunda ko kwandika kode zisobanutse kandi zoroshye, kandi nkomeza kwiga ikoranabuhanga rishya kugira ngo ngumane n\'igihe.',
        'Iyo ntari gukora porogaramu, nkunda gushakisha ikoranabuhanga rishya, gutanga umusanzu mu mishinga, no gusangira ubumenyi n\'abandi bahanga. Nkunda gufungura amarembo ku mahirwe mashya n\'ubufatanye.',
      ],
    downloadCV: 'Reba umwirindoro wange (CV)',
    },
    skills: {
      title: 'Ubumenyi Bwanjye',
      subtitle: 'Ikoranabuhanga nkorana naryo',
    },
    projects: {
      title: 'Imishinga Yanjye',
      subtitle: 'Imwe mu mishinga yanjye ya vuba',
      viewProject: 'Reba Umushinga',
      viewCode: 'Reba kode ziwugize',
    },
    contact: {
      title: 'Twandikire',
      subtitle: 'Dukorane hamwe',
      name: 'Izina Ryawe',
      email: 'Imeli Yawe',
      message: 'Ubutumwa Bwawe',
      send: 'Ohereza Ubutumwa',
      sending: 'Birimo koherezwa...',
      success: 'Ubutumwa bwoherejwe neza!',
      error: 'Kohereza ubutumwa byanze. Ongera ugerageze.',
    },
    footer: {
      rights: 'Uburenganzira bwose burabitswe.',
      madeWith: 'Byakozwe na Peace Maker',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      return saved || 'en';
    }
    return 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

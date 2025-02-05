import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private formations = [
    {
      image: '/img/offre/1.avif',
      name: 'Pack Cuisinier + Pâtissier',
      shortDescription: 'Apprenez à la fois à cuisiner et à réaliser des pâtisseries.',
      fullDescription:
        'Formation combinée de 8 mois pour apprendre à la fois les techniques de cuisine et de pâtisserie professionnelles.',
      duration: '8 mois',
      price: '500',
      freq: '2 séances par semaine',
      cert: 'Oui',
      images: ['/img/cuisine-patisserie1.jpg', '/img/cuisine-patisserie2.jpg'],
      goals: [
        'Maîtriser les bases de la cuisine et de la pâtisserie.',
        'Savoir créer des plats principaux et des desserts.',
        'Apprendre la gestion d\'une cuisine et d\'une pâtisserie.',
      ],
      content: [
        'Techniques de cuisson et pâtisserie.',
        'Création de plats et desserts.',
        'Gestion d\'une cuisine et pâtisserie.',
        'Hygiène et sécurité alimentaire.',
      ],
      benefits: [
        'Formation complète avec des chefs professionnels.',
        'Stage possible dans des restaurants et pâtisseries.',
        'Certificat en cuisine et pâtisserie.',
      ],
      faq: [
        {
          question: 'Combien de temps dure cette formation ?',
          answer: 'La formation dure 8 mois.',
        },
        {
          question: 'Est-ce que je vais être certifié ?',
          answer: 'Oui, vous recevrez un certificat en cuisine et pâtisserie.',
        },
      ],
    },
    {
      image: '/img/cuis/main.jpg',
      name: 'Formation Cuisinier',
      shortDescription: 'Apprenez les bases de la cuisine professionnelle.',
      fullDescription:
        'Formation de 3 mois pour devenir un cuisinier professionnel capable de préparer des repas de qualité.',
      duration: '3 mois',
      price: '500',
      freq: '2 séances par semaine',
      cert: 'Oui',
      images: [ '/img/cuis/6.jpg',  '/img/cuis/4.jpg', '/img/cuis/2.jpg', '/img/cuis/1.jpg', '/img/cuis/5.jpg', '/img/cuis/7.jpg', '/img/cuis/3.jpg',],
      goals: [
        'Apprendre les techniques de base de la cuisine.',
        'Maîtriser les différents types de cuisson.',
        'Savoir gérer une cuisine professionnelle.',
      ],
      content: [
        'Les techniques de cuisson (griller, frire, cuire à la vapeur).',
        'Présentation des aliments et dressage des assiettes.',
        'La gestion d\'une cuisine professionnelle.',
        'Sécurité et hygiène alimentaire.',
      ],
      benefits: [
        'Formation pratique avec des chefs professionnels.',
        'Possibilité de stage dans des restaurants.',
        'Certificat de cuisinier.',
      ],
      faq: [
        {
          question: 'Faut-il des connaissances préalables ?',
          answer: 'Non, cette formation est ouverte aux débutants.',
        },
        {
          question: 'Quel type de diplôme vais-je obtenir ?',
          answer: 'Vous recevrez un certificat de fin de formation en cuisine.',
        },
      ],
    },
    {
      image: '/img/pat/main.jpg',
      name: 'Formation Pâtissier',
      shortDescription: 'Apprenez à réaliser des desserts et pâtisseries professionnelles.',
      fullDescription:
        'Formation de 5 mois pour apprendre à créer des pâtisseries de qualité professionnelle.',
      duration: '5 mois',
      price: '500',
      freq: '2 séances par semaine',
      cert: 'Oui',
      images: ['/img/pat/1.jpg', '/img/pat/2.jpg','/img/pat/3.jpg','/img/pat/5.jpg','/img/pat/4.jpg','/img/pat/6.jpg','/img/pat/7.jpg','/img/pat/9.jpg','/img/pat/8.jpg',],
      goals: [
        'Maîtriser les techniques de base de la pâtisserie.',
        'Apprendre à réaliser des desserts classiques et modernes.',
        'Savoir présenter et décorer des pâtisseries.',
      ],
      content: [
        'Introduction à la pâtisserie.',
        'Les bases des pâtes et crèmes.',
        'Création de desserts et gâteaux.',
        'Décoration et finition des pâtisseries.',
        'Techniques de mise en valeur des desserts.',
      ],
      benefits: [
        'Formation pratique avec des ateliers en cuisine.',
        'Accès à des produits professionnels.',
        'Certificat en pâtisserie.',
      ],
      faq: [
        {
          question: 'Faut-il des connaissances préalables ?',
          answer: 'Non, la formation est adaptée aux débutants.',
        },
        {
          question: 'Quels outils vais-je utiliser ?',
          answer: 'Tous les outils nécessaires sont fournis pendant la formation.',
        },
      ],
    },
    
    {
      image: '/img/plomb/main.jpg',
      name: 'Formation Chaud Froid et Plomberie',
      shortDescription: 'Formation complète sur les installations de systèmes de chauffage, climatisation et plomberie.',
      fullDescription:
        'Apprenez les bases du chaud-froid, du chauffage, de la climatisation et de la plomberie en 5 mois, avec une formation théorique et des exercices pratiques.',
      duration: '5 mois',
      price: '500',
      freq: '2 séances par semaine',
      cert: 'Oui',
      images: ['/img/plomb/1.jpg', '/img/plomb/5.jpg','/img/plomb/4.jpg','/img/plomb/3.jpg','/img/plomb/2.jpg','/img/plomb/6.jpg',],
      goals: [
        'Comprendre les principes de base des systèmes de chauffage et de climatisation.',
        'Apprendre l\'installation, la maintenance et la réparation des équipements.',
        'Maîtriser les techniques de plomberie pour installer et entretenir les réseaux d\'eau et de gaz.',
      ],
      content: [
        'Introduction au chaud-froid et à la plomberie.',
        'Les différents types de systèmes de chauffage et climatisation.',
        'Installation et maintenance des équipements de chauffage et climatisation.',
        'Réseaux d\'eau, de gaz et leurs réparations.',
        'Sécurité et réglementation en plomberie.',
      ],
      benefits: [
        'Formation avec des cas pratiques en entreprise.',
        'Accès à des certifications professionnelles reconnues.',
        'Possibilité de travailler dans différents secteurs (construction, rénovation).',
      ],
      faq: [
        {
          question: 'Est-ce que je vais recevoir un diplôme ?',
          answer: 'Oui, un certificat reconnu est délivré à la fin de la formation.',
        },
        {
          question: 'Puis-je commencer sans aucune expérience ?',
          answer: 'Oui, cette formation est accessible à tous.',
        },
      ],
    },
    
     
      {
        image: '/img/mec/main.jpg',
        name: 'Formation Mécanique et Diagnostic',
        shortDescription: 'Apprenez les bases de la mécanique automobile et le diagnostic des pannes.',
        fullDescription:
          'Formation de 4 mois pour apprendre les bases de la mécanique automobile et le diagnostic des pannes, avec des séances théoriques et pratiques.',
        duration: '4 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/mec/2.jpg','/img/mec/3.jpg','/img/mec/5.jpg','/img/mec/4.jpg',],
        goals: [
          'Maîtriser les principes de la mécanique automobile.',
          'Apprendre à diagnostiquer les pannes mécaniques.',
          'Savoir effectuer des réparations de base sur les véhicules.',
        ],
        content: [
          'Introduction à la mécanique automobile.',
          'Les outils et équipements utilisés en mécanique.',
          'Diagnostic des pannes courantes.',
          'Réparation des moteurs et des systèmes de transmission.',
          'Entretien des véhicules et sécurité.',
        ],
        benefits: [
          'Formation pratique avec des véhicules réels.',
          'Possibilité de stage en garage pour une expérience sur le terrain.',
          'Accompagnement par des experts en mécanique.',
        ],
        faq: [
          {
            question: 'Cette formation nécessite-t-elle des connaissances préalables ?',
            answer: 'Non, elle est accessible à tous les niveaux.',
          },
          {
            question: 'Quelles sont les modalités d\'inscription ?',
            answer: 'Inscription en ligne ou directement dans nos bureaux.',
          },
        ],
      },
      {
        image: '/img/pack.jpg',
        name: 'Pack Formation Chaud Froid et Plomberie + Électricité Bâtiment et Industrielle',
        shortDescription: 'Formation complète sur les systèmes de chauffage, climatisation, plomberie, et électricité en bâtiment et industrielle.',
        fullDescription:
          'Ce pack de 8 mois combine les formations Chaud Froid et Plomberie avec Électricité Bâtiment et Industrielle. Vous apprendrez à installer, entretenir et réparer les systèmes de chauffage, climatisation, plomberie, ainsi que les réseaux électriques dans des contextes résidentiels et industriels.',
        duration: '8 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: [
          '/img/plomb/3.jpg',
          '/img/plomb/2.jpg',
          '/img/elec/3.jpg',
          '/img/elec/1.jpg',
          '/img/plomb/1.jpg',
        ],
        goals: [
          // Objectifs des deux formations combinés
          'Comprendre les principes des systèmes de chauffage, climatisation, et plomberie.',
          'Apprendre l\'installation, la maintenance et la réparation des équipements de chaud-froid et plomberie.',
          'Maîtriser les bases de l\'électricité et savoir diagnostiquer des pannes électriques.',
          'Apprendre à installer et entretenir des réseaux électriques résidentiels et industriels.',
          'Maîtriser les règles de sécurité et les réglementations liées aux métiers du bâtiment.',
        ],
        content: [
          // Contenu combiné des deux formations
          'Introduction au chaud-froid, à la plomberie et à l\'électricité.',
          'Les différents types de systèmes de chauffage et climatisation.',
          'Installation et maintenance des équipements de plomberie et de chauffage.',
          'Les principes de base de l\'électricité et du câblage.',
          'Installation de systèmes électriques résidentiels et industriels.',
          'Maintenance préventive et dépannage pour les réseaux électriques et de plomberie.',
          'Sécurité et normes réglementaires en plomberie et électricité.',
        ],
        benefits: [
          // Avantages combinés des deux formations
          'Formation pratique et théorique pour une meilleure maîtrise des compétences.',
          'Accès à des équipements professionnels et exercices en entreprise.',
          'Obtention d\'un certificat reconnu dans les secteurs de la plomberie et de l\'électricité.',
          'Possibilité de travailler dans divers secteurs : construction, rénovation, maintenance industrielle.',
        ],
        faq: [
          // FAQ combinée
          {
            question: 'Est-ce que je vais recevoir un diplôme après cette formation ?',
            answer: 'Oui, un certificat reconnu est délivré à la fin du pack formation.',
          },
          {
            question: 'Ai-je besoin d\'une expérience préalable pour suivre ce pack ?',
            answer: 'Non, ce pack est conçu pour être accessible à tous, même sans expérience préalable.',
          },
          {
            question: 'Quels métiers puis-je exercer après cette formation ?',
            answer:
              'Vous pourrez travailler comme technicien en plomberie, électricité, climatisation, ou encore dans la maintenance industrielle et le bâtiment.',
          },
          {
            question: 'Ce pack formation inclut-il des exercices pratiques ?',
            answer: 'Oui, de nombreuses sessions pratiques sont prévues pour une maîtrise optimale des compétences.',
          },
        ],
      },
      {
        image: '/img/repr/main.jpg',
        name: 'Formation Réparation Électronique (Smartphone/Ordinateur/Tablette)',
        shortDescription: 'Apprenez à réparer des appareils électroniques.',
        fullDescription:
          'Cette formation vous permettra de maîtriser la réparation des smartphones, ordinateurs et tablettes. 2 séances par semaine pendant 2 mois.',
        duration: '2 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/repr/1.jpg', '/img/repr/2.jpg', '/img/repr/3.jpg'],
        goals: [
          'Maîtriser les bases de la réparation électronique.',
          'Savoir diagnostiquer des pannes sur différents appareils.',
          'Apprendre à réparer des smartphones, tablettes et ordinateurs.',
        ],
        content: [
          'Introduction à la réparation électronique.',
          'Les outils et techniques de réparation.',
          'Diagnostic des pannes courantes.',
          'Réparation des composants électroniques.',
          'Maintenance préventive des appareils.',
        ],
        benefits: [
          'Formation pratique avec des appareils réels.',
          'Accompagnement personnalisé pendant la formation.',
          'Accès à des ressources pédagogiques en ligne.',
          'Possibilité d\'effectuer un stage pour renforcer les compétences.',
        ],
        faq: [
          {
            question: 'Quels sont les prérequis ?',
            answer: 'Aucun prérequis n\'est nécessaire. Cette formation est accessible à tous.',
          },
          {
            question: 'Quelles sont les modalités d\'inscription ?',
            answer: 'Inscription en ligne via notre site ou en contactant directement notre équipe.',
          },
        ],
      },
      {
        image: '/img/cofh/main.jpg',
        name: 'Formation Coiffure Homme',
        shortDescription: 'Devenez un expert en coiffure pour hommes.',
        fullDescription:
          'Formation de 10 mois pour maîtriser les techniques de coiffure pour hommes, y compris les coupes classiques et modernes.',
        duration: '10 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/cofh/1.jpg', '/img/cofh/2.jpg','/img/cofh/3.jpg',],
        goals: [
          'Maîtriser les bases des coupes de cheveux pour hommes.',
          'Apprendre à travailler avec des outils professionnels.',
          'Savoir réaliser des coupes tendance et modernes.',
        ],
        content: [
          'Les bases de la coiffure masculine.',
          'Les différents types de coupes pour hommes.',
          'Utilisation des outils (rasoirs, tondeuses, ciseaux).',
          'Soins capillaires et traitements.',
          'Techniques avancées de coiffure et mise en forme.',
        ],
        benefits: [
          'Formation avec des coiffures en salon et clients réels.',
          'Stage inclus pour acquérir de l\'expérience.',
          'Accès à des produits professionnels de coiffure.',
        ],
        faq: [
          {
            question: 'A-t-on besoin de matériel personnel ?',
            answer: 'Non, le matériel est fourni pendant la formation.',
          },
          {
            question: 'Est-ce que la formation est certifiante ?',
            answer: 'Oui, vous obtiendrez un certificat de compétence en coiffure masculine.',
          },
        ],
      },
      {
        image: '/img/coff/main.jpg',
        name: 'Formation Coiffure Femme et Esthétique',
        shortDescription: 'Formation complète pour devenir un professionnel de la coiffure et de l\'esthétique.',
        fullDescription:
          'Formation de 10 mois incluant les cours de coiffure pour femme, esthétique, faux ongles et maquillage.',
        duration: '10 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/coff/1.jpg', '/img/coff/3.jpg','/img/coff/2.jpg','/img/coff/4.jpg',],
        goals: [
          'Maîtriser les techniques de coiffure pour femmes.',
          'Apprendre les bases de l\'esthétique (maquillage, soins de la peau).',
          'Savoir réaliser des faux ongles et des poses de vernis.',
          'Apprendre à travailler avec des outils professionnels de coiffure et d\'esthétique.',
        ],
        content: [
          'Techniques de coiffure pour femmes.',
          'Soins du visage et du corps.',
          'Maquillage et techniques de mise en beauté.',
          'Faux ongles et manucure.',
          'Introduction à la cosmétique et à la relaxation.',
        ],
        benefits: [
          'Formation pratique avec des modèles réels.',
          'Accès à des produits professionnels de coiffure et d\'esthétique.',
          'Possibilité de stage dans des salons de beauté.',
        ],
        faq: [
          {
            question: 'Est-ce que cette formation nécessite des connaissances préalables ?',
            answer: 'Non, la formation est ouverte à tous.',
          },
          {
            question: 'Quels sont les outils nécessaires ?',
            answer: 'Tous les outils sont fournis pendant la formation.',
          },
        ],
      },
      {
        image: '/img/des/main.jpg',
        name: 'Formation Couture et Design',
        shortDescription: 'Devenez créateur de mode en apprenant la couture et le design textile.',
        fullDescription:
          'Formation de 10 mois pour apprendre la couture, le design de mode, et les techniques de création de vêtements.',
        duration: '10 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/des/1.jpg', '/img/des/2.jpg','/img/des/3.jpg',],
        goals: [
          'Apprendre les bases de la couture.',
          'Maîtriser les techniques de création de vêtements.',
          'Développer des compétences en design de mode.',
        ],
        content: [
          'Introduction à la couture et aux tissus.',
          'Utilisation des machines à coudre.',
          'Conception et création de vêtements.',
          'Les tendances de la mode et le design textile.',
          'Techniques de finition et de personnalisation.',
        ],
        benefits: [
          'Formation avec des projets pratiques.',
          'Accès à des outils et machines professionnels.',
          'Possibilité de créer une ligne de vêtements.',
        ],
        faq: [
          {
            question: 'Dois-je avoir des compétences préalables en couture ?',
            answer: 'Non, la formation est accessible à tous.',
          },
          {
            question: 'Cette formation est-elle certifiée ?',
            answer: 'Oui, vous recevrez un certificat de fin de formation.',
          },
        ],
      },
      {
        image: '/img/elec/main.jpg',
        name: 'Formation Électricité Bâtiment et Industrielle',
        shortDescription: 'Formation sur les systèmes électriques en bâtiment et dans l\'industrie.',
        fullDescription:
          'Apprenez à installer, entretenir et réparer les systèmes électriques en bâtiment et en milieu industriel en 4 mois.',
        duration: '4 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/elec/1.jpg', '/img/elec/2.jpg','/img/elec/3.jpg',],
        goals: [
          'Maîtriser les bases de l\'électricité.',
          'Savoir installer et entretenir des systèmes électriques.',
          'Apprendre à diagnostiquer et réparer des pannes électriques.',
        ],
        content: [
          'Les principes de base de l\'électricité.',
          'Installation de câblages et de prises.',
          'Systèmes électriques industriels.',
          'Maintenance préventive et dépannage.',
          'Sécurité électrique et réglementation.',
        ],
        benefits: [
          'Formation avec des exercices pratiques.',
          'Accès à des équipements professionnels.',
          'Certificat reconnu dans le domaine de l\'électricité.',
        ],
        faq: [
          {
            question: 'Dois-je avoir des connaissances préalables ?',
            answer: 'Non, cette formation est ouverte à tous.',
          },
          {
            question: 'Puis-je travailler après la formation ?',
            answer: 'Oui, vous serez prêt à travailler dans l\'industrie ou le bâtiment.',
          },
        ],
      },
     
      
      {
        image: '/img/lang/main.png',
        name: 'Formation Langues (Français, Anglais, Allemand)',
        shortDescription: 'Apprenez à parler couramment plusieurs langues.',
        fullDescription:
          'Formation de 10 mois pour apprendre le français, l\'anglais et l\'allemand.',
        duration: '10 mois',
        price: '500',
        freq: '2 séances par semaine',
        cert: 'Oui',
        images: ['/img/lang/3.jpg ','/img/lang/4.jpg ','/img/lang/5.jpg '],
        goals: [
          'Améliorer vos compétences en français, anglais et allemand.',
          'Maîtriser la grammaire et la syntaxe des langues.',
          'Apprendre à converser couramment dans ces trois langues.',
        ],
        content: [
          'Les bases de la grammaire et du vocabulaire.',
          'Les techniques de conversation.',
          'Pratique orale et écrite.',
          'Culture et civilisation des pays francophones, anglophones et germanophones.',
        ],
        benefits: [
          'Formation pratique avec des enseignants natifs.',
          'Accès à des ressources pédagogiques interactives.',
          'Certificat de compétence en langues.',
        ],
        faq: [
          {
            question: 'Est-ce qu\'il faut des connaissances préalables ?',
            answer: 'Non, nous proposons des niveaux débutant, intermédiaire et avancé.',
          },
          {
            question: 'Quels sont les avantages de cette formation ?',
            answer: 'Vous pourrez parler couramment trois langues et améliorer vos opportunités professionnelles.',
          },
        ],
      },
     
      
    ];
  

  getFormations() {
    return this.formations;
  }

  getFormationByName(name: string) {
    return this.formations.find((formation) => formation.name === name);
  }
}

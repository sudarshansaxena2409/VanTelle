import React from 'react';
import { Compass, BookOpen, Sparkles, Network, Eye, Heart } from 'lucide-react';

export const siteConfig = {
  brandName: 'VanTelle',
  brandTagline: 'A Reflection of Individuality',
  
  // Corporate & Legal Information (Document Section 6)
  companyName: 'VANTELLE TECH SOLUTIONS PRIVATE LIMITED',
  operatingPresence: 'Operating in India & Italy',
  corporateEmail: 'vantelle.contact@gmail.com',
  website: 'www.vantelle.com',
  websiteStatus: '(under development)',
  founder: 'Bhoomi Sejwal',
  phones: {
    india: '+91 8860005256',
    italy: '+39 3510289649'
  },
  
  // Brand Statements
  heroHeadline: 'VanTelle — A Reflection of Individuality.',
  heroSupportingText: 'An exploration of personal expression through thoughtfully curated fashion, jewellery, and home décor. Where craftsmanship, creativity, and individuality come together.',
  brandStatement: 'Luxury is not simply what we own, but how we choose to express ourselves.',
  
  // Navigation Layout Configuration (Collaborations kept flexible as requested)
  navbarLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'collections', label: 'Collections' },
    { id: 'stories', label: 'Stories' },
    { id: 'vip', label: 'VIP Membership' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'contact', label: 'Contact' }
  ],

  // Collaborators Curation Database (Scalable Array - Hovo Faber as featured strategic partner)
  collaborators: [
    {
      id: 'hovo-faber',
      name: 'Hovo Faber',
      subtitle: 'Featured Strategic Partner',
      roleTag: 'Strategic Cultural & Creative Partner',
      quote: '"Celebrating craftsmanship, culture, storytelling, and meaningful luxury experiences."',
      aboutTitle: 'Culture. Heritage. Storytelling.',
      aboutDesc: 'Hovo Faber is a cultural curator and creative studio dedicated to preserving heritage, supporting artisan workshops, and crafting stories that transcend time. United by a vision of slow luxury, VanTelle and Hovo Faber collaborate to bridge tactile heritage with intelligent contemporary design.',
      imgMain: 'assets/hovofaber_collab.png',
      imgExtra: 'assets/collection_jewellery.png',
      roles: [
        {
          title: 'Cultural Curator',
          icon: <Compass size={22} />,
          desc: 'Curating artisan partnerships and historical narratives that root collections in authentic cultural hubs.'
        },
        {
          title: 'Storytelling & Heritage',
          icon: <BookOpen size={22} />,
          desc: 'Documenting the histories, human experiences, and generational techniques behind regional craftsmanship.'
        },
        {
          title: 'Experience Design',
          icon: <Sparkles size={22} />,
          desc: 'Developing sensory physical salons, private viewing spaces, and thoughtful digital environments.'
        },
        {
          title: 'Artisan Network',
          icon: <Network size={22} />,
          desc: 'Fostering direct relationships with generational workshops in Tuscany, Como, and the UK countryside.'
        },
        {
          title: 'Creative Direction',
          icon: <Eye size={22} />,
          desc: 'Shaping cohesive editorial visuals, material palettes, and timeless structural aesthetics.'
        },
        {
          title: 'Strategic Partnerships',
          icon: <Heart size={22} />,
          desc: 'Forging bridges between global design visionaries, local guilds, and modern creators.'
        }
      ]
    }
  ]
};

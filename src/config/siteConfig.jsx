import React from 'react';
import { Compass, BookOpen, Sparkles, Network, Eye, Heart } from 'lucide-react';

export const siteConfig = {
  brandName: 'VanTelle',
  
  // Navigation Layout Configuration
  navbarLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'collections', label: 'Collections' },
    { id: 'stories', label: 'Stories' },
    { id: 'vip', label: 'VIP Membership' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'contact', label: 'Contact' }
  ],

  // Collaborators Curation Database (Scalable Array)
  collaborators: [
    {
      id: 'hovo-faber',
      name: 'Hovo Faber',
      subtitle: 'A Collaborative Partnership',
      roleTag: 'Founding Cultural & Creative Partner',
      quote: '"Celebrating craftsmanship, culture, storytelling, and meaningful luxury experiences."',
      aboutTitle: 'Culture. Heritage. Storytelling.',
      aboutDesc: 'Hovo Faber is a cultural curator and creative studio dedicated to preserving heritage, supporting artisans, and crafting stories that transcend time. United by a vision of slow luxury, VanTelle and Hovo Faber collaborate to bridge tactile heritage with intelligent contemporary design.',
      imgMain: 'assets/hovofaber_collab.png', // Resolves via dynamic base URL utility
      imgExtra: 'assets/collection_jewellery.png',
      roles: [
        {
          title: 'Cultural Curator',
          icon: <Compass size={22} />,
          desc: 'Curating artisan partnerships and historical narratives that root collections in genuine cultural hubs.'
        },
        {
          title: 'Storytelling & Heritage',
          icon: <BookOpen size={22} />,
          desc: 'Documenting the histories and human experiences behind regional craftsmanship through immersive media.'
        },
        {
          title: 'Experience Design',
          icon: <Sparkles size={22} />,
          desc: 'Developing sensory physical events, private VIP viewing salon spaces, and tactile digital platforms.'
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
          desc: 'Forging bridges between global design visionaries, local guilds, and modern software creators.'
        }
      ]
    }
  ]
};

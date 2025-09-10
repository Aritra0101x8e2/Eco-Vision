import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      expertise: "Environmental Science & Policy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in environmental policy and urban sustainability. Former advisor to Ministry of Environment & Climate Change.",
      linkedin: "priya-sharma-eco",
      achievements: ["PhD Environmental Science", "Policy Advisor MoEF", "TEDx Speaker"]
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "CTO & Co-founder",
      expertise: "IoT & Smart City Technology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former lead engineer at Bangalore Smart City Mission. Expert in IoT infrastructure and real-time data systems.",
      linkedin: "arjun-patel-tech",
      achievements: ["IIT Delhi Alumni", "Smart City Expert", "IoT Innovation Award"]
    },
    {
      id: 3,
      name: "Meera Krishnan",
      role: "Head of Community Engagement",
      expertise: "Social Impact & Community Organizing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Community organizer with 12+ years building grassroots environmental movements across South India.",
      linkedin: "meera-krishnan-community",
      achievements: ["Community Leader Award", "Environmental Activist", "Social Impact Expert"]
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Head of Municipal Partnerships",
      expertise: "Government Relations & Policy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former municipal commissioner with deep understanding of urban governance and waste management systems.",
      linkedin: "rajesh-kumar-gov",
      achievements: ["Municipal Leadership", "Policy Implementation", "Urban Planning Expert"]
    },
    {
      id: 5,
      name: "Dr. Anita Desai",
      role: "Head of Data Science",
      expertise: "Environmental Analytics & AI",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Data scientist specializing in environmental modeling and predictive analytics for urban sustainability.",
      linkedin: "anita-desai-data",
      achievements: ["PhD Data Science", "AI Research", "Environmental Modeling"]
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "Head of Product Design",
      expertise: "UX Design & Accessibility",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      bio: "Product designer focused on creating inclusive, accessible interfaces for diverse urban communities.",
      linkedin: "vikram-singh-design",
      achievements: ["Design Excellence Award", "Accessibility Advocate", "UX Innovation"]
    }
  ];

  // return (
  //   <section className="py-16 lg:py-24 bg-background">
  //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="text-center space-y-4 mb-16">
  //         <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full">
  //           <Icon name="Users" size={16} className="text-secondary" />
  //           <span className="text-sm font-medium text-secondary">Our Team</span>
  //         </div>
          
  //         <h2 className="text-3xl lg:text-4xl font-environmental-heading text-foreground">
  //           Diverse Expertise, Shared Vision
  //         </h2>
          
  //         <p className="text-lg text-muted-foreground font-environmental-body max-w-3xl mx-auto">
  //           Our team combines environmental science, civic technology, and community organizing expertise to build comprehensive solutions for India's urban environmental challenges.
  //         </p>
  //       </div>

  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {teamMembers?.map((member) => (
  //           <div 
  //             key={member?.id}
  //             className="data-card space-y-6 interactive-hover"
  //           >
           
  //             <div className="relative">
  //               <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden">
  //                 <Image
  //                   src={member?.image}
  //                   alt={`${member?.name} - ${member?.role}`}
  //                   className="w-full h-full object-cover"
  //                 />
  //               </div>
                
  //               <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
  //                 <Icon name="CheckCircle" size={16} className="text-primary-foreground" />
  //               </div>
  //             </div>

  //             <div className="text-center space-y-2">
  //               <h3 className="text-xl font-environmental-heading text-foreground">
  //                 {member?.name}
  //               </h3>
                
  //               <p className="text-primary font-medium">
  //                 {member?.role}
  //               </p>
                
  //               <p className="text-sm text-muted-foreground">
  //                 {member?.expertise}
  //               </p>
  //             </div>

  //             <p className="text-sm text-muted-foreground font-environmental-body text-center">
  //               {member?.bio}
  //             </p>

       
  //             <div className="space-y-2">
  //               <h4 className="text-sm font-medium text-foreground text-center">Key Achievements</h4>
  //               <div className="flex flex-wrap gap-2 justify-center">
  //                 {member?.achievements?.map((achievement, index) => (
  //                   <span 
  //                     key={index}
  //                     className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-md"
  //                   >
  //                     {achievement}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>

  //             <div className="text-center">
  //               <button className="inline-flex items-center space-x-2 text-sm text-secondary hover:text-secondary/80 transition-environmental">
  //                 <Icon name="Linkedin" size={16} />
  //                 <span>Connect on LinkedIn</span>
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="mt-16 bg-gradient-to-r from-environmental-good/5 to-primary/5 rounded-2xl p-8 lg:p-12">
  //         <div className="text-center space-y-8">
  //           <h3 className="text-2xl lg:text-3xl font-environmental-heading text-foreground">
  //             Our Team Values
  //           </h3>
            
  //           <div className="grid md:grid-cols-3 gap-8">
  //             <div className="space-y-3">
  //               <div className="w-12 h-12 bg-environmental-good/10 rounded-xl flex items-center justify-center mx-auto">
  //                 <Icon name="Heart" size={20} className="text-environmental-good" />
  //               </div>
  //               <h4 className="font-environmental-heading text-foreground">Environmental Passion</h4>
  //               <p className="text-sm text-muted-foreground">
  //                 Deep commitment to environmental stewardship and sustainable urban development.
  //               </p>
  //             </div>
              
  //             <div className="space-y-3">
  //               <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
  //                 <Icon name="Lightbulb" size={20} className="text-secondary" />
  //               </div>
  //               <h4 className="font-environmental-heading text-foreground">Innovation Focus</h4>
  //               <p className="text-sm text-muted-foreground">
  //                 Leveraging technology to create practical solutions for complex environmental challenges.
  //               </p>
  //             </div>
              
  //             <div className="space-y-3">
  //               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
  //                 <Icon name="Users" size={20} className="text-primary" />
  //               </div>
  //               <h4 className="font-environmental-heading text-foreground">Community First</h4>
  //               <p className="text-sm text-muted-foreground">
  //                 Prioritizing community needs and ensuring inclusive access to environmental solutions.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default TeamSection;
/**
 * Projects Page - Portfolio & Case Studies
 * Magnitude Power Sdn Bhd
 * Design: Kinetic Futurism with portfolio focus
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowLeft,
  MapPin,
  Zap,
  Wrench,
  CheckCircle,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Projects() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "Kuala Lumpur Metropolitan Substation Upgrade",
      category: "Transmission",
      location: "Kuala Lumpur, Malaysia",
      year: 2024,
      client: "Tenaga Nasional Berhad (TNB)",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Complete installation and commissioning of 275kV gas-insulated switchgear (GIS) system for major urban substation.",
      services: ["High Voltage Switchgear", "Installation & Commissioning", "Testing"],
      specs: {
        voltage: "275kV",
        equipment: "GIS System",
        timeline: "6 months",
        investment: "MYR 8.5M"
      },
      highlights: [
        "Advanced GIS technology for compact urban installation",
        "Zero-downtime deployment with parallel system operation",
        "Real-time monitoring system integration",
        "Exceeded performance targets by 15%"
      ],
      testimonial: {
        name: "Dato' Ahmad Rashid",
        role: "Operations Director, TNB",
        quote: "Magnitude Power delivered exceptional quality and professionalism. Their expertise in GIS technology was instrumental in modernizing our critical infrastructure.",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Industrial Power Plant Transformer Replacement",
      category: "Industrial",
      location: "Selangor, Malaysia",
      year: 2023,
      client: "Petronas Chemicals Group",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Supply and installation of 500kV oil-immersed power transformer for major petrochemical facility.",
      services: ["Power Transformers", "Installation & Commissioning", "Testing"],
      specs: {
        voltage: "500kV",
        equipment: "Oil-Immersed Power Transformer",
        timeline: "4 months",
        investment: "MYR 12.3M"
      },
      highlights: [
        "Custom-designed transformer for specific facility requirements",
        "Comprehensive load testing and performance validation",
        "Minimal operational disruption during installation",
        "24/7 technical support during commissioning phase"
      ],
      testimonial: {
        name: "Ir. Mohd Karim Hassan",
        role: "Engineering Manager, Petronas",
        quote: "The team's technical knowledge and attention to detail ensured a seamless installation. Their commitment to safety and quality is commendable.",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Renewable Energy Integration Project",
      category: "Renewable Energy",
      location: "Johor, Malaysia",
      year: 2023,
      client: "Solartech Energy Solutions",
      image: "https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=800&q=80",
      description: "Supply of distribution transformers and switchgear for large-scale solar farm integration with national grid.",
      services: ["Distribution Transformers", "Switchgear Solutions", "Installation & Commissioning"],
      specs: {
        voltage: "33kV",
        equipment: "Distribution Transformers & VCB",
        timeline: "5 months",
        investment: "MYR 4.8M"
      },
      highlights: [
        "Efficient power conversion for 50MW solar installation",
        "Grid-synchronization testing and validation",
        "Environmental compliance and sustainable design",
        "Improved overall system efficiency by 12%"
      ],
      testimonial: {
        name: "Dr. Lim Wei Chen",
        role: "Project Director, Solartech",
        quote: "Magnitude Power's expertise in renewable energy integration was crucial. They provided innovative solutions that optimized our system performance.",
        rating: 5
      }
    },
    {
      id: 4,
      title: "Commercial Building Power Distribution Upgrade",
      category: "Commercial",
      location: "Kuala Lumpur, Malaysia",
      year: 2022,
      client: "Menara Pinnacle Development",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      description: "Complete power distribution system upgrade including distribution transformers and switchgear for 40-storey commercial complex.",
      services: ["Distribution Transformers", "Switchgear Solutions", "Installation & Testing"],
      specs: {
        voltage: "22kV to 400V",
        equipment: "Multiple Distribution Transformers",
        timeline: "8 months",
        investment: "MYR 3.2M"
      },
      highlights: [
        "Phased installation to maintain building operations",
        "Smart metering system integration",
        "Energy efficiency improvements of 18%",
        "Redundant system design for high reliability"
      ],
      testimonial: {
        name: "Chua Boon Huat",
        role: "Facilities Manager, Menara Pinnacle",
        quote: "The team's professionalism and ability to work within our operational constraints was impressive. The new system is highly reliable and efficient.",
        rating: 5
      }
    },
    {
      id: 5,
      title: "Transformer Refurbishment Program",
      category: "Maintenance",
      location: "Selangor, Malaysia",
      year: 2022,
      client: "Tenaga Nasional Berhad (TNB)",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Comprehensive refurbishment of 15 aging power transformers across multiple substations.",
      services: ["Transformer Repair & Refurbishment", "Testing"],
      specs: {
        voltage: "132kV - 275kV",
        equipment: "15 Power Transformers",
        timeline: "12 months",
        investment: "MYR 6.5M"
      },
      highlights: [
        "Extended transformer lifespan by 15+ years",
        "Complete winding and core restoration",
        "Oil analysis and purification",
        "100% performance restoration with warranty"
      ],
      testimonial: {
        name: "Encik Zainal Abidin",
        role: "Asset Management, TNB",
        quote: "The refurbishment program was executed flawlessly. Our aging assets are now performing like new, with significant cost savings compared to replacement.",
        rating: 5
      }
    },
    {
      id: 6,
      title: "Manufacturing Facility Power System Overhaul",
      category: "Industrial",
      location: "Penang, Malaysia",
      year: 2021,
      client: "Semiconductor Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Complete power system overhaul including transformers, switchgear, and distribution for high-precision manufacturing facility.",
      services: ["Distribution Transformers", "Switchgear Solutions", "Installation & Commissioning"],
      specs: {
        voltage: "11kV to 400V",
        equipment: "Multiple Transformers & Switchgear",
        timeline: "10 months",
        investment: "MYR 5.1M"
      },
      highlights: [
        "Zero-tolerance power quality standards achieved",
        "Harmonic filtering and power factor correction",
        "Uninterruptible power supply integration",
        "Production uptime improved to 99.8%"
      ],
      testimonial: {
        name: "Dr. Tan Kian Seng",
        role: "Operations Director, SMC",
        quote: "Magnitude Power's understanding of precision manufacturing requirements was exceptional. Our production reliability has never been better.",
        rating: 5
      }
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "transmission", label: "Transmission" },
    { id: "industrial", label: "Industrial" },
    { id: "renewable-energy", label: "Renewable Energy" },
    { id: "commercial", label: "Commercial" },
    { id: "maintenance", label: "Maintenance" }
  ];

  const filteredProjects = selectedCategory && selectedCategory !== "all"
    ? projects.filter(p => p.category.toLowerCase().replace(" ", "-") === selectedCategory)
    : projects;

  const stats = [
    { label: "Projects Completed", value: "50+" },
    { label: "Total Investment Value", value: "MYR 100M+" },
    { label: "Client Satisfaction", value: "99.2%" },
    { label: "Years of Excellence", value: "14+" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <motion.button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-2xl font-bold gradient-text">MAGNITUDE POWER</span>
          </motion.button>
          
          <Button 
            variant="outline" 
            onClick={() => setLocation("/")}
          >
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Showcasing excellence in electrical infrastructure and transformer solutions across Malaysia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 relative bg-gradient-to-r from-primary/5 via-background to-primary/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id === "all" ? null : category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  (selectedCategory === null && category.id === "all") || selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                    : "glass-card text-muted-foreground hover:text-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 relative">
        <div className="container">
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-20"
              >
                <Card className="glass-card overflow-hidden shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div 
                      className="h-80 lg:h-auto bg-cover bg-center"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />

                    {/* Project Details */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                            {project.category}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </span>
                        </div>

                        <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                        
                        <div className="flex items-center gap-2 mb-6 text-muted-foreground">
                          <MapPin className="h-5 w-5" />
                          <span>{project.location}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                        {/* Services */}
                        <div className="mb-6">
                          <p className="text-sm font-semibold mb-3 text-foreground">Services Provided:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service, idx) => (
                              <span key={idx} className="px-3 py-1 bg-background/50 rounded-lg text-sm text-muted-foreground">
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-background/50 rounded-lg">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Voltage</p>
                            <p className="font-semibold">{project.specs.voltage}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Equipment</p>
                            <p className="font-semibold text-sm">{project.specs.equipment}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                            <p className="font-semibold">{project.specs.timeline}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Investment</p>
                            <p className="font-semibold">{project.specs.investment}</p>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <p className="text-sm font-semibold mb-3 text-foreground">Key Highlights:</p>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-8 pt-8 border-t border-border/50">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(project.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-4">"{project.testimonial.quote}"</p>
                        <div>
                          <p className="font-semibold text-foreground">{project.testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-gradient-to-r from-primary/10 via-background to-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team to discuss your electrical infrastructure needs and discover how we can deliver excellence for your organization.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/50"
                onClick={() => setLocation("/#contact")}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => setLocation("/services")}
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © 2025 Magnitude Power Sdn Bhd (938838-M). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

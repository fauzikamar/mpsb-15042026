/**
 * Services Page - Detailed Technical Specifications
 * Magnitude Power Sdn Bhd
 * Design: Kinetic Futurism with technical focus
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Zap,
  Wrench,
  CheckCircle,
  Download,
  ArrowLeft,
  AlertCircle,
  BarChart3,
  Shield,
  Lightbulb,
  Gauge,
  Award
} from "lucide-react";
import { useLocation } from "wouter";

export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      id: "power-transformers",
      icon: Zap,
      title: "Oil Immersed Power Transformers",
      subtitle: "High-Capacity Transmission Solutions",
      description: "Premium oil-immersed power transformers designed for high-voltage transmission and distribution networks.",
      specs: [
        { label: "Voltage Range", value: "Up to 500kV" },
        { label: "Power Rating", value: "Up to 1000+ MVA" },
        { label: "Cooling Type", value: "ONAN, ONAF, OFAF" },
        { label: "Standards", value: "IEC 60076, MS 1247" },
        { label: "Insulation", value: "Mineral Oil + Paper" },
        { label: "Temperature Rise", value: "55°C (Class A)" }
      ],
      features: [
        "Advanced cooling systems for optimal thermal management",
        "Low noise operation with acoustic enclosures",
        "Comprehensive monitoring and diagnostic systems",
        "Compliant with international safety standards",
        "Extended lifespan with proper maintenance",
        "Efficient energy transmission with minimal losses"
      ],
      applications: [
        "Power generation plants",
        "High-voltage transmission networks",
        "Industrial power distribution",
        "Utility substations",
        "Renewable energy integration"
      ],
      certifications: ["IEC 60076", "MS 1247", "MOF Registered", "TNB Authorized"]
    },
    {
      id: "distribution-transformers",
      icon: Wrench,
      title: "Distribution Transformers",
      subtitle: "Oil & Dry-Type Solutions",
      description: "Versatile distribution transformers available in oil-immersed and dry-type configurations for medium and low voltage applications.",
      specs: [
        { label: "Voltage Range", value: "Up to 36kV" },
        { label: "Power Rating", value: "50kVA - 2500kVA" },
        { label: "Types Available", value: "Oil & Dry-type" },
        { label: "Standards", value: "IEC 60076, MS 1247" },
        { label: "Efficiency", value: "Up to 99.5%" },
        { label: "Temperature Rise", value: "55°C (Oil), 80°C (Dry)" }
      ],
      features: [
        "Compact design for space-constrained installations",
        "Low maintenance requirements",
        "Excellent overload capability",
        "Wide range of tap settings",
        "Environmentally friendly options (dry-type)",
        "Cost-effective solutions for various applications"
      ],
      applications: [
        "Municipal distribution networks",
        "Industrial facilities",
        "Commercial buildings",
        "Residential areas",
        "Renewable energy projects",
        "Smart grid implementations"
      ],
      certifications: ["IEC 60076", "MS 1247", "MOF Registered", "CIDB Certified"]
    },
    {
      id: "switchgear",
      icon: Gauge,
      title: "High Voltage Switchgear",
      subtitle: "VCB & GIS Solutions",
      description: "Advanced high-voltage switchgear systems for reliable power switching, protection, and control in electrical networks.",
      specs: [
        { label: "Voltage Range", value: "Up to 275kV" },
        { label: "Types", value: "VCB (Vacuum), GIS (Gas-Insulated)" },
        { label: "Rated Current", value: "Up to 4000A" },
        { label: "Short Circuit Rating", value: "Up to 63kA" },
        { label: "Operating Mechanism", value: "Spring-charged, Motor-driven" },
        { label: "Standards", value: "IEC 62271-1, MS 1247" }
      ],
      features: [
        "Vacuum circuit breakers (VCB) for reliability",
        "Gas-insulated switchgear (GIS) for compact installations",
        "Advanced protection relays and monitoring",
        "Remote operation capabilities",
        "Minimal maintenance requirements",
        "High breaking capacity and reliability"
      ],
      applications: [
        "Utility substations",
        "Industrial power plants",
        "Renewable energy facilities",
        "Urban substations (GIS)",
        "Transmission networks",
        "Power distribution centers"
      ],
      certifications: ["IEC 62271-1", "MS 1247", "TNB Approved", "SIRIM Certified"]
    },
    {
      id: "accessories",
      icon: Shield,
      title: "Transformer Accessories",
      subtitle: "Components & Support Equipment",
      description: "High-quality accessories and components for power and distribution transformers, ensuring optimal performance and longevity.",
      specs: [
        { label: "Product Range", value: "20+ Component Types" },
        { label: "Radiators", value: "Tube, Bar, Plate types" },
        { label: "Bushings", value: "Porcelain & Composite" },
        { label: "Cooling Fans", value: "EC & AC Motors" },
        { label: "Pumps", value: "Oil Circulation Systems" },
        { label: "Standards", value: "IEC 60076, MS 1247" }
      ],
      features: [
        "Premium quality components from trusted manufacturers",
        "Radiators for efficient heat dissipation",
        "High-voltage bushings for safe connections",
        "Cooling fans for temperature management",
        "Oil circulation pumps for maintenance",
        "Transformer guards and protection devices"
      ],
      applications: [
        "Power transformer upgrades",
        "Distribution transformer maintenance",
        "Cooling system enhancements",
        "Replacement parts supply",
        "System modernization",
        "Performance optimization"
      ],
      certifications: ["IEC 60076", "MS 1247", "OEM Compatible", "Quality Assured"]
    },
    {
      id: "repair-refurbishment",
      icon: Wrench,
      title: "Transformer Repair & Refurbishment",
      subtitle: "Professional Maintenance Services",
      description: "Comprehensive repair and refurbishment services to restore transformers to original specifications and extend operational life.",
      specs: [
        { label: "Service Type", value: "Full Overhaul & Refurbishment" },
        { label: "Voltage Capacity", value: "All Ratings" },
        { label: "Power Rating", value: "Up to 1000+ MVA" },
        { label: "Turnaround Time", value: "4-12 weeks" },
        { label: "Warranty", value: "12-24 months" },
        { label: "Quality Assurance", value: "100% Testing" }
      ],
      features: [
        "Complete transformer disassembly and inspection",
        "Winding resistance and insulation testing",
        "Oil analysis and purification",
        "Core and tank restoration",
        "Tap changer refurbishment",
        "Full reassembly with quality control"
      ],
      applications: [
        "Aged transformer restoration",
        "Damaged unit rehabilitation",
        "Performance enhancement",
        "Life extension programs",
        "Preventive maintenance",
        "Emergency repairs"
      ],
      certifications: ["ISO 9001", "Technical Expertise", "MOF Registered", "TNB Authorized"]
    },
    {
      id: "installation-testing",
      icon: CheckCircle,
      title: "Installation, Testing & Commissioning",
      subtitle: "Complete Project Execution",
      description: "End-to-end installation, testing, and commissioning services ensuring transformers operate at peak performance and safety standards.",
      specs: [
        { label: "Service Scope", value: "Full Project Delivery" },
        { label: "Voltage Range", value: "LV to HV (500kV)" },
        { label: "Testing Methods", value: "Comprehensive Test Suite" },
        { label: "Documentation", value: "Complete Reports" },
        { label: "Compliance", value: "International Standards" },
        { label: "Project Management", value: "Dedicated Teams" }
      ],
      features: [
        "Site preparation and foundation work",
        "Transformer positioning and alignment",
        "Connection and wiring installation",
        "Oil filling and degassing",
        "Insulation resistance testing",
        "Voltage withstand testing",
        "Load testing and performance verification",
        "Commissioning and handover"
      ],
      applications: [
        "New substation installations",
        "Transformer replacements",
        "System upgrades",
        "Capacity expansions",
        "Maintenance shutdowns",
        "Emergency installations"
      ],
      certifications: ["CIDB Certified", "TNB Authorized", "ISO 9001", "Safety Compliant"]
    }
  ];

  const certifications = [
    {
      name: "Ministry of Finance (MOF)",
      regNo: "357-02171732",
      description: "Registered as electrical equipment supplier and distributor",
      icon: Shield
    },
    {
      name: "CIDB Registration",
      regNo: "0120121206-SL147346",
      description: "Construction Industry Development Board certification",
      icon: CheckCircle
    },
    {
      name: "TNB Authorization",
      regNo: "3041449",
      description: "Authorized contractor for Malaysia Transformer Manufacturing",
      icon: Zap
    },
    {
      name: "ISO 9001",
      regNo: "Quality Management",
      description: "International quality management system certification",
      icon: Award
    }
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Comprehensive electrical solutions with technical excellence and professional expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-20"
                id={service.id}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1">
                    <Card className="glass-card p-8 h-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 sticky top-24">
                      <service.icon className="h-16 w-16 text-primary mb-4" />
                      <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                      <p className="text-primary font-semibold mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground mb-3">Certifications:</p>
                        {service.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Right Column - Detailed Information */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Technical Specifications */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <Card className="glass-card p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <Gauge className="text-primary" />
                          Technical Specifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {service.specs.map((spec, idx) => (
                            <div key={idx} className="border-l-2 border-primary pl-4">
                              <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                              <p className="text-lg font-semibold text-foreground">{spec.value}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Card className="glass-card p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <Lightbulb className="text-primary" />
                          Key Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>

                    {/* Applications */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Card className="glass-card p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                          <BarChart3 className="text-primary" />
                          Applications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {service.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-background/50 rounded-lg">
                              <div className="h-2 w-2 rounded-full bg-primary" />
                              <p className="text-muted-foreground">{app}</p>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 relative bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-muted-foreground">
              Authorized and certified by leading regulatory bodies in Malaysia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card p-6 shadow-2xl hover:shadow-primary/30 transition-all duration-300 h-full">
                    <Icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{cert.regNo}</p>
                    <p className="text-muted-foreground text-sm">{cert.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass-card p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                <Shield className="text-primary" />
                International Standards & Compliance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Product Standards</h3>
                  <ul className="space-y-3">
                    {[
                      "IEC 60076 - Power Transformers",
                      "IEC 62271-1 - High Voltage Switchgear",
                      "MS 1247 - Malaysian Standards",
                      "IEEE C57.12.00 - General Requirements"
                    ].map((standard, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Quality & Safety</h3>
                  <ul className="space-y-3">
                    {[
                      "ISO 9001 - Quality Management",
                      "ISO 14001 - Environmental Management",
                      "OHSAS 18001 - Occupational Health & Safety",
                      "100% Factory Testing & Inspection"
                    ].map((standard, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team for technical consultations, quotations, or project inquiries
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/50"
                onClick={() => setLocation("/#contact")}
              >
                Get in Touch
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => setLocation("/")}
              >
                Back to Home
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

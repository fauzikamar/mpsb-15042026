/**
 * Design Philosophy: Kinetic Futurism with Dimensional Depth
 * - Layered depth through shadows, blurs, and glass-morphism
 * - Dynamic gradient backgrounds with animations
 * - 3D interactive elements with spring physics
 * - Typography: Outfit (headings), DM Sans (body)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Code, 
  TrendingUp, 
  HeadphonesIcon,
  ArrowRight,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-1_1770535604000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTFfMTc3MDUzNTYwNDAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CO1-0njpe8tEZcey5e~CSzgMzWTKbg7yCbFdG3RuZH-sArTzzIhYv9qWuNLuE9fs9NdmVAgIZKvqqfLMHq7okxpyD1QzwWLbnECw96GwtIzbyJDxehAXVYpRY858dzRLY6ZAdD0PL1-KsHwFn2SrV5k~-9A31SbvyLOJfV5F-WoF3kdN937yDaklkrmBgFuqQYcIC7PSRDyzkXKjs0D0viBFvpNnJC6efHToyZ5o0Cb4LmeoPH~GwxiZ8VMT3vaBwCsK-0Uhz8~PHNPkCB3td3DjX923bDDY8NwRhKVte-uSH62EQXSPdiSQpJVcoiddX5bQw4LQ4HJuQ6YHdZEg4Q__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering Your Business Growth
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We deliver innovative solutions for modern enterprises.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">About Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a forward-thinking company committed to excellence and innovation. 
              Our team of experts brings decades of combined experience to help businesses 
              navigate the complexities of the modern digital landscape. We believe in 
              creating lasting partnerships built on trust, transparency, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions tailored to your needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Business Consulting",
                description: "Strategic guidance to transform your business operations and drive growth.",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-2_1770535602000_na1fn_c2VydmljZXMtY29uc3VsdGluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTJfMTc3MDUzNTYwMjAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZMjl1YzNWc2RHbHVady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UTxjKDcwCX32v0SoTh74GJvdkYsXcaUQFrSRJBfgSN2ZvGRt8a6Kg7nOJLMyaARlPpAW2KpvvqMgy9acS95J4OgvSSrmyYrp0maoVYeQ9OTi0SufRqwOZzoOGTKU0XS~RKR42hV8vYP75JLAtcEoviEaf6Ep9N~cS-skTVbt3KUKB5MF8aqulRvcFvyLPjIhdv11iVyLcQwiA7zv0-qm84AIisoql01ZFO88AyE4biiiWbCjpDlg7e1znukgDCN0F2uhW3fvuE~CAgRgqimg1hEMGB1K6aCFLxEMk67EI7H6uc2obGcKjMbO0WqxLgYCisLajaY7xQHBIMSvLdXF5g__"
              },
              {
                icon: Code,
                title: "Technology Solutions",
                description: "Cutting-edge technology implementations that scale with your business.",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-3_1770535601000_na1fn_c2VydmljZXMtdGVjaG5vbG9neQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTNfMTc3MDUzNTYwMTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRkR1ZqYUc1dmJHOW5lUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BmFqj3ZlDsbxNuVRtbW4LQtT7-Rs4loBojkwVIMbdjNZihglSSadUVaEPSZrFIDlYUg5Y~vxRM14an82IwfrQL881fQw-JIyaiwl-MZafaariNqDZQBU6MoRV9Gy011lBaKJ4-cl~Lv8C5j6o7YBMF5K47XCjMDh6nO8FQFsxz8DS~sIrE9I0WH9v6Qy-Xhww8L2RjyjJUIEI4P-BgWfbwxE0aNjAuR8SwWxT-bdVAGU~hI7byx~XyeEFLaAbDT3k2TPlQ5YJODIPXNiOvs-Jv2QpLMGIT7Zt8xHlf51RcHkYfiM5E7nAwJx1Jj0PxiLz1Py3TBQ1LRZUBDfBrWyOg__"
              },
              {
                icon: TrendingUp,
                title: "Market Analysis",
                description: "Data-driven insights to help you make informed strategic decisions.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              },
              {
                icon: HeadphonesIcon,
                title: "Customer Support",
                description: "24/7 dedicated support to ensure your success every step of the way.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card h-full overflow-hidden group shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Our Work</h2>
            <p className="text-lg text-muted-foreground">Showcasing excellence in every project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Enterprise Digital Transformation",
                category: "Technology",
                image: "https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-4_1770535602000_na1fn_cG9ydGZvbGlvLWFic3RyYWN0LTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTRfMTc3MDUzNTYwMjAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMV0ZpYzNSeVlXTjBMVEUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KuoKs0ZvACKKQDN7nw5oX0dK~7mUoHVo6EQ5wvB75gxHsHAKoHjMiQfEZIKbqSt1vteXh-SIhXyklfBeQwYry1XKCwVZmY5KdRO89KiqxJyMsiWp-OZQj-KKpd7pq2uTTU3ce~hz7ZliNYuvvoStQLqhF~ApyjJq9VzsdE~ic9ODfXhz9SNr3Ep3X8RmQexrAOxRrSkEysDxq95SfalMKlXckaBVGydMphlP8woq2os3O91CkUoioNjmvc6z1YiTD3F4knZlOamIvsPfKDzoY4zieRMRHGPbQlI7b2p0Ra0VKp67Jo8gHj5W9g4PijG8C97wTuT6J8-jmCR7fyNL9Q__"
              },
              {
                title: "Global Market Expansion",
                category: "Strategy",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              },
              {
                title: "Cloud Infrastructure Modernization",
                category: "Technology",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card overflow-hidden group cursor-pointer shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <div 
                    className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <CardContent className="p-6">
                    <p className="text-sm text-primary mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">What Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by industry leaders worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Jane Doe",
                role: "CEO, Tech Innovations Inc.",
                feedback: "Their solutions transformed our business. The team's expertise and dedication are unmatched. We've seen a 300% increase in efficiency since partnering with them.",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
              },
              {
                name: "John Smith",
                role: "CTO, Global Enterprises",
                feedback: "Professional, reliable, and innovative. They delivered beyond our expectations and continue to provide exceptional support. A true partner in our digital journey.",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="glass-card p-8 shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 relative"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/K9eX1rskNcJOiwQ0JQHEZ6/sandbox/w6HaRMQOMnow1zMQ7lcY0E-img-5_1770535637000_na1fn_Y29udGFjdC1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSzllWDFyc2tOY0pPaXdRMEpRSEVaNi9zYW5kYm94L3c2SGFSTVFPTW5vdzF6TVE3bGNZMEUtaW1nLTVfMTc3MDUzNTYzNzAwMF9uYTFmbl9ZMjl1ZEdGamRDMWlZV05yWjNKdmRXNWsucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bGaMz2cIBGGsDh6dbRfWEbhLJx9kZiWnc1Cz0gqmmMNi0K3MaZEfpMga~RBaP~OsvFc12PZQz4x1t5Ziyizk3y9WB4u~uAxh801rjVSkLjKdL8sFNbggBh9FIx4Fz3AypwvXdjB41aKzDjMLjEmIdzGllVkGz7Utv0I3i~5cBfEh1sCCFp5fwO-C-lBndQtXQYkHUsVSuCAofe1AofOMfbKpug29AvO~TaQomDhoPil3ETgUWQTn4UK7XF-0t1EitsNmZWgIhqbBTzGjpTm0Ml-qjYQdHu-E8zGS~8dJCmb6wQX-8FSlfoOdQvLk1QNNOxZyIIGTXEK0u-FkUtBJFg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Let's discuss how we can help your business thrive</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-card p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 border-border min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg shadow-xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2026 Corporate Inc. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

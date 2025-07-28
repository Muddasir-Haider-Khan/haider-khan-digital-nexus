
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, Users, Menu, X, Award, Download, Play, TrendingUp, Globe, Star, BookOpen, Briefcase, GraduationCap, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Artificial Intelligence": ["Python", "LangChain", "OpenAI", "Machine Learning", "Neural Networks"],
    "Frontend Development": ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Modern Web APIs"],
    "Backend & Systems": ["Flask", "Node.js", "RESTful APIs", "Database Design", "Cloud Architecture"],
    "Design & Creative": ["Adobe Creative Suite", "UI/UX Design", "Brand Identity", "Visual Communication"]
  };

  const projects = [
    {
      title: "Zillex AI Assistant",
      description: "An intelligent chat assistant with advanced conversational capabilities, featuring seamless Instagram & WhatsApp integration for automated business communications and customer engagement.",
      technologies: ["Artificial Intelligence", "Natural Language Processing", "API Integration", "Real-time Communication"],
      icon: <Brain className="w-6 h-6" />,
      status: "Active",
      completion: 95
    },
    {
      title: "Smart Inventory System",
      description: "Modern inventory management solution with predictive analytics and intelligent forecasting, featuring real-time Excel synchronization and comprehensive business intelligence dashboard.",
      technologies: ["Predictive Analytics", "Data Visualization", "Business Intelligence", "System Integration"],
      icon: <Briefcase className="w-6 h-6" />,
      status: "Optimizing",
      completion: 87
    },
    {
      title: "Digital Academy Platform",
      description: "Comprehensive virtual learning institute with interactive course delivery, progress tracking, and advanced learning analytics for next-generation education technology.",
      technologies: ["Educational Technology", "Learning Management", "Analytics Dashboard", "Progressive Web App"],
      icon: <GraduationCap className="w-6 h-6" />,
      status: "Deploying",
      completion: 92
    },
    {
      title: "Financial Trading Analytics",
      description: "Advanced financial analysis platform with market prediction algorithms, comprehensive data visualization, and automated trading insights for informed investment decisions.",
      technologies: ["Financial Modeling", "Data Analytics", "Market Research", "Algorithm Development"],
      icon: <TrendingUp className="w-6 h-6" />,
      status: "Testing",
      completion: 78
    }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence Solutions",
      description: "Developing intelligent systems using cutting-edge machine learning algorithms, natural language processing, and advanced AI frameworks for business automation.",
      accent: "classic-gold"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Creating robust, scalable web applications with modern technologies, responsive design principles, and optimal user experience across all platforms.",
      accent: "classic-navy"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design Services",
      description: "Crafting elegant visual identities, sophisticated brand experiences, and compelling digital narratives that resonate with target audiences.",
      accent: "classic-accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Consulting",
      description: "Providing strategic technology consulting, digital transformation guidance, and innovative solutions to optimize business operations and growth.",
      accent: "classic-gold"
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Projects Completed", color: "text-amber-700" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Satisfied Clients", color: "text-blue-800" },
    { icon: <BookOpen className="w-6 h-6" />, value: "3+", label: "Years Experience", color: "text-green-700" },
    { icon: <Globe className="w-6 h-6" />, value: "∞", label: "Innovation Potential", color: "text-purple-700" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Director",
      company: "TechVision Labs",
      content: "Muddasir's AI solutions transformed our data processing capabilities. His technical expertise and professional approach delivered exceptional results beyond our expectations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Executive Officer",
      company: "Digital Innovations Inc",
      content: "The web development and design services provided were of the highest caliber. Muddasir consistently delivers professional, elegant solutions that exceed industry standards.",
      rating: 5
    },
    {
      name: "Elena Kowalski",
      role: "Technology Director",
      company: "Future Systems Corp",
      content: "Working with Muddasir was a pleasure. His AI engineering skills and attention to detail resulted in sophisticated solutions that perfectly met our business requirements.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 vintage-paper">
      {/* Elegant Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 nav-classic ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl md:text-3xl font-serif font-bold elegant-title">
                Muddasir Haider Khan
              </h1>
              
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-sans">Available for Projects</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "#about", label: "About", icon: <BookOpen className="w-4 h-4" /> },
                { href: "#services", label: "Services", icon: <Briefcase className="w-4 h-4" /> },
                { href: "#projects", label: "Portfolio", icon: <Award className="w-4 h-4" /> },
                { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-700 hover:text-amber-700 transition-all duration-300 font-serif tracking-wide px-4 py-2 rounded-lg hover:bg-amber-50"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="classic-button p-2"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            <button 
              className="md:hidden classic-button p-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-gray-200 fade-in-elegant">
              <div className="flex flex-col space-y-4 pt-6">
                {[
                  { href: "#about", label: "About", icon: <BookOpen className="w-4 h-4" /> },
                  { href: "#services", label: "Services", icon: <Briefcase className="w-4 h-4" /> },
                  { href: "#projects", label: "Portfolio", icon: <Award className="w-4 h-4" /> },
                  { href: "#contact", label: "Contact", icon: <Mail className="w-4 h-4" /> }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center space-x-3 text-gray-700 hover:text-amber-700 transition-all duration-300 font-serif px-4 py-3 rounded-lg hover:bg-amber-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-amber-700">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="classic-button p-2 mx-4"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="fade-in-elegant">
            <div className="mb-8 font-sans text-amber-700 text-sm tracking-wider uppercase">
              Professional Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight elegant-title">
              Welcome to Excellence
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-600 mb-8 font-serif font-light">
              Muddasir Haider Khan
            </h2>
            <div className="text-lg text-amber-700 mb-4 font-serif tracking-wide">
              AI Engineer • Web Developer • Creative Designer
            </div>
            <div className="section-divider"></div>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
              Crafting intelligent solutions where technology meets artistry. Specializing in artificial intelligence, 
              full-stack development, and sophisticated design systems that drive business success.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Button size="lg" className="classic-button">
                <Play className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
              <Button size="lg" className="classic-button">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="classic-card p-6 text-center classic-hover">
                  <div className={`${stat.color} mb-3 flex justify-center`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-2 font-serif">{stat.value}</div>
                  <div className="text-sm font-sans text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-classic">
              <h3 className="text-4xl font-serif font-bold mb-6 elegant-title decorative-line">
                Professional Background
              </h3>
              <div className="mb-6 classic-card p-6">
                <div className="text-amber-700 text-sm font-serif mb-3 font-semibold">Current Focus:</div>
                <p className="text-gray-700 leading-relaxed mb-4 font-sans">
                  Currently pursuing advanced studies in AI Engineering while building innovative solutions 
                  that bridge the gap between cutting-edge technology and practical business applications. 
                  My background in creative design using Adobe Creative Suite provides a unique perspective on user experience.
                </p>
                <div className="text-amber-700 text-sm font-serif mb-3 font-semibold">Professional Evolution:</div>
                <p className="text-gray-700 leading-relaxed font-sans">
                  Evolved from traditional design and visual communication into artificial intelligence, 
                  software engineering, and modern web technologies. This diverse background enables me to 
                  create solutions that are both technically robust and aesthetically sophisticated.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 classic-card rounded-2xl flex items-center justify-center relative overflow-hidden floating-gentle">
                <div className="text-8xl">👨‍💻</div>
                <div className="absolute top-4 right-4 text-xs font-serif text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  Professional Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold mb-4 elegant-title decorative-line">
              Professional Services
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
              Combining technical expertise with creative vision to deliver exceptional results 
              that drive business growth and user engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="classic-card classic-hover group">
                <CardHeader className="text-center">
                  <div className={`flex justify-center mb-4 text-amber-700 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-800 font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed font-sans">{service.description}</p>
                  <div className="mt-4 text-xs font-serif text-amber-700 font-semibold">
                    Professional Excellence
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding relative bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold mb-4 elegant-title decorative-line">
              Technical Expertise
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="classic-card classic-hover">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-gray-800 font-serif">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-300 font-sans text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 text-xs font-serif text-green-700 font-semibold">
                    Advanced Proficiency
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold mb-4 elegant-title decorative-line">
              Portfolio Showcase
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
              A curated selection of projects demonstrating technical innovation and creative excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="classic-card classic-hover group">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-800 font-serif">
                    <div className="flex items-center space-x-3">
                      <div className="text-amber-700 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <span>{project.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs font-serif ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' :
                        project.status === 'Optimizing' ? 'bg-yellow-100 text-yellow-800' :
                        project.status === 'Deploying' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {project.status}
                      </Badge>
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-amber-700 transition-colors cursor-pointer" />
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 font-sans">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-300 font-sans text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-serif text-gray-600 mb-2">
                      <span>Project Completion</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-600 to-amber-700 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs font-serif text-green-700 font-semibold">
                    Professional Quality Assured
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding relative bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold mb-4 elegant-title decorative-line">
              Client Testimonials
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-sans leading-relaxed">
              Professional feedback from satisfied clients and collaborators.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="classic-card classic-hover group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold font-serif">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-serif font-semibold mb-1">{testimonial.name}</h4>
                      <p className="text-amber-700 text-sm font-serif">{testimonial.role}</p>
                      <p className="text-gray-600 text-xs font-sans">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic font-sans">"{testimonial.content}"</p>
                  <div className="mt-4 text-xs font-serif text-green-700 font-semibold">
                    Verified Review
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding relative">
        <div className="container mx-auto text-center">
          <div className="classic-card p-12 max-w-5xl mx-auto">
            <h3 className="text-4xl font-serif font-bold mb-6 elegant-title decorative-line">
              Professional Vision
            </h3>
            <p className="text-xl leading-relaxed text-gray-700 font-sans mb-8">
              Bridging the gap between innovative technology and elegant design — where every solution 
              carries purpose and every implementation reflects excellence. My mission is to create 
              technology that enhances human potential, streamlines business operations, and delivers 
              exceptional user experiences that stand the test of time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group scale-hover">
                <div className="text-amber-700 mb-4">
                  <Award className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-serif text-lg font-semibold">Excellence</div>
                  <div className="text-sm text-gray-600 mt-2 font-sans">Commitment to the highest standards</div>
                </div>
              </div>
              <div className="group scale-hover">
                <div className="text-blue-800 mb-4">
                  <Brain className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-serif text-lg font-semibold">Innovation</div>
                  <div className="text-sm text-gray-600 mt-2 font-sans">Forward-thinking solutions</div>
                </div>
              </div>
              <div className="group scale-hover">
                <div className="text-green-700 mb-4">
                  <Users className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-serif text-lg font-semibold">Collaboration</div>
                  <div className="text-sm text-gray-600 mt-2 font-sans">Partnership for mutual success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-serif font-bold mb-6 elegant-title decorative-line">
            Let's Connect
          </h3>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
            Whether you're seeking innovative solutions, creative collaboration, or professional consultation — 
            I'm here to help bring your vision to life with excellence and precision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="classic-card p-6 group scale-hover">
              <Mail className="w-8 h-8 mx-auto mb-4 text-amber-700" />
              <h4 className="text-gray-800 font-serif font-semibold mb-2">Email</h4>
              <p className="text-gray-600 text-sm font-sans">muddasirhaider048@gmail.com</p>
            </div>
            <div className="classic-card p-6 group scale-hover">
              <Github className="w-8 h-8 mx-auto mb-4 text-gray-800" />
              <h4 className="text-gray-800 font-serif font-semibold mb-2">GitHub</h4>
              <p className="text-gray-600 text-sm font-sans">Portfolio Repository</p>
            </div>
            <div className="classic-card p-6 group scale-hover">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-700" />
              <h4 className="text-gray-800 font-serif font-semibold mb-2">LinkedIn</h4>
              <p className="text-gray-600 text-sm font-sans">Professional Network</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="classic-button"
              onClick={() => window.open('mailto:muddasirhaider048@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="classic-button"
              onClick={() => window.open('https://github.com/Muddasir-Haider-Khan', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View Code
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="classic-button"
              onClick={() => window.open('https://www.linkedin.com/in/muddasir-haider-khan-281515299/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="section-divider"></div>
          <p className="text-gray-600 font-serif text-sm mb-2">
            © 2024 Muddasir Haider Khan. Professional Portfolio & Services.
          </p>
          <div className="mt-2 text-xs text-amber-700 font-sans">
            Crafted with Excellence • Designed for Impact
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

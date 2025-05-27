import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, Zap, Menu, X, Cpu, Database, Terminal, Rocket, CircuitBoard, Monitor, Star, Download, Play, TrendingUp, Users, Award, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    "AI & Machine Learning": ["Python", "LangChain", "OpenAI", "Neural Networks", "Deep Learning"],
    "Frontend Technologies": ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"],
    "Backend & APIs": ["Flask", "Node.js", "RESTful APIs", "GraphQL", "Microservices"],
    "Data & Analytics": ["Alpha Vantage", "Data Visualization", "Real-time Processing", "Big Data"]
  };

  const projects = [
    {
      title: "Zillex AI Assistant",
      description: "A quantum-enhanced AI chat assistant with multi-dimensional communication protocols, featuring Instagram & WhatsApp neural integration for autonomous business operations.",
      technologies: ["Quantum AI", "Neural Networks", "Multi-Protocol", "Real-time Processing"],
      icon: <Brain className="w-6 h-6" />,
      status: "ACTIVE",
      completion: 95
    },
    {
      title: "Neural Inventory System",
      description: "Next-generation inventory management powered by predictive algorithms and holographic interface design, featuring quantum authentication and real-time Excel synchronization.",
      technologies: ["Predictive AI", "Quantum Auth", "Holographic UI", "Real-time Sync"],
      icon: <Database className="w-6 h-6" />,
      status: "OPTIMIZING",
      completion: 87
    },
    {
      title: "Cyber Academy Portal",
      description: "Immersive virtual institute with neural-responsive animations, quantum course delivery, and AI-powered learning acceleration for next-generation developers.",
      technologies: ["Virtual Reality", "Neural UI", "Quantum Learning", "AI Acceleration"],
      icon: <Monitor className="w-6 h-6" />,
      status: "DEPLOYING",
      completion: 92
    },
    {
      title: "Quantum Trading Bot",
      description: "Advanced financial AI utilizing quantum computing principles for market prediction, featuring multi-dimensional data analysis and autonomous trading protocols.",
      technologies: ["Quantum Computing", "Predictive Analytics", "Autonomous Trading", "Multi-dimensional"],
      icon: <CircuitBoard className="w-6 h-6" />,
      status: "TESTING",
      completion: 78
    }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum AI Engineering",
      description: "Building next-generation intelligent systems using quantum-enhanced algorithms, neural networks, and advanced machine learning paradigms.",
      glow: "glow-primary"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Neural Frontend Development",
      description: "Creating immersive, responsive interfaces with quantum animations, holographic elements, and neural-responsive user experiences.",
      glow: "glow-secondary"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Holographic Design Systems",
      description: "Crafting futuristic visual identities with quantum aesthetics, neural branding, and multi-dimensional storytelling approaches.",
      glow: "glow-accent"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cyber Interface Engineering",
      description: "Developing quantum-enhanced UX/UI systems with neural precision, holographic interactions, and predictive user behavior algorithms.",
      glow: "glow-primary"
    }
  ];

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, value: "50+", label: "Projects Completed", color: "text-cyan-400" },
    { icon: <Users className="w-6 h-6" />, value: "25+", label: "Happy Clients", color: "text-purple-400" },
    { icon: <Award className="w-6 h-6" />, value: "3+", label: "Years Experience", color: "text-green-400" },
    { icon: <Globe className="w-6 h-6" />, value: "∞", label: "Quantum Possibilities", color: "text-blue-400" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "TechFuture Labs",
      content: "Muddasir's quantum-enhanced solutions revolutionized our data processing capabilities. His neural network implementations are simply extraordinary.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "DigitalVortex Inc",
      content: "The holographic interface designs delivered by Muddasir exceeded all expectations. True quantum-level innovation in every pixel.",
      rating: 5
    },
    {
      name: "Elena Kowalski",
      role: "CTO",
      company: "NeuralSync Corp",
      content: "Working with Muddasir was like collaborating with the future itself. His AI engineering skills are decades ahead of the curve.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 matrix-rain relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Mouse Follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      {/* Enhanced Futuristic Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
          : 'bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20'
      } hologram`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Enhanced Logo */}
              <div className="relative group">
                <h1 className="text-2xl md:text-3xl font-bold neon-glow bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-500 cursor-pointer">
                  <span className="inline-block animate-pulse">◊</span> MHK.QUANTUM <span className="inline-block animate-pulse">◊</span>
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
              </div>
              
              {/* Enhanced Status Display */}
              <div className="hidden md:flex items-center space-x-4 text-xs">
                <div className="flex items-center text-blue-400 font-mono bg-blue-950/30 px-3 py-1 rounded-full border border-blue-500/30">
                  <Terminal className="w-4 h-4 mr-2 animate-pulse" />
                  {currentTime.toISOString().split('T')[1].split('.')[0]} UTC
                </div>
                <div className="flex items-center text-green-400 font-mono bg-green-950/30 px-3 py-1 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                  SYSTEMS ONLINE
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {[
                { href: "#about", label: "ABOUT", icon: <Brain className="w-4 h-4" /> },
                { href: "#services", label: "SERVICES", icon: <Code className="w-4 h-4" /> },
                { href: "#projects", label: "PROJECTS", icon: <Rocket className="w-4 h-4" /> },
                { href: "#contact", label: "CONTACT", icon: <Zap className="w-4 h-4" /> }
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-all duration-300 font-mono tracking-wider px-4 py-2 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="group-hover:animate-pulse transition-all duration-300">{item.icon}</span>
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button 
              className="md:hidden relative group cyber-button p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-600 hover:border-cyan-500/50 rounded-lg transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-cyan-400 animate-pulse" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-cyan-500/30 scan-line animate-fade-in">
              <div className="flex flex-col space-y-4 pt-6">
                {[
                  { href: "#about", label: "ABOUT", icon: <Brain className="w-4 h-4" /> },
                  { href: "#services", label: "SERVICES", icon: <Code className="w-4 h-4" /> },
                  { href: "#projects", label: "PROJECTS", icon: <Rocket className="w-4 h-4" /> },
                  { href: "#contact", label: "CONTACT", icon: <Zap className="w-4 h-4" /> }
                ].map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 font-mono px-4 py-3 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="group-hover:animate-pulse text-cyan-400">{item.icon}</span>
                    <span className="relative">
                      ▶ {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <div className="flex items-center justify-center text-xs text-cyan-400 font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></div>
                    QUANTUM_INTERFACE_ACTIVE
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section with Floating Elements */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8 font-mono text-cyan-400 text-sm tracking-wider">
              [QUANTUM_INTERFACE_INITIALIZED]
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="wave inline-block text-4xl">◊</span> WELCOME TO{" "}
              <span className="neon-glow bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                THE FUTURE
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-slate-400 mb-8 font-light font-mono">
              {">>"} MUDDASIR HAIDER KHAN {"<<"}
            </h2>
            <div className="text-lg text-cyan-400 mb-4 font-mono tracking-wider">
              [QUANTUM AI ENGINEER | NEURAL ARCHITECT | CYBER DESIGNER]
            </div>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Interfacing between dimensions where quantum computation meets neural aesthetics. 
              Engineering the impossible, one algorithm at a time.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <Button size="lg" className="cyber-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 font-mono tracking-wider">
                <Play className="w-5 h-5 mr-2" />
                [INITIALIZE_PORTFOLIO]
              </Button>
              <Button variant="outline" size="lg" className="cyber-button border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono tracking-wider">
                <Download className="w-5 h-5 mr-2" />
                [DOWNLOAD_RESUME]
              </Button>
              <Button variant="outline" size="lg" className="cyber-button border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300 font-mono tracking-wider">
                <Mail className="w-5 h-5 mr-2" />
                [ESTABLISH_CONNECTION]
              </Button>
            </div>
            
            {/* Enhanced Status Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="holographic-card p-4 text-center group hover:scale-105 transition-all duration-300">
                  <div className={`${stat.color} mb-2 flex justify-center group-hover:neon-glow transition-all duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-mono text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center space-x-8 text-sm text-slate-500 font-mono">
              <div className="flex items-center">
                <Cpu className="w-4 h-4 mr-2 text-blue-400" />
                QUANTUM_CORE: ACTIVE
              </div>
              <div className="flex items-center">
                <CircuitBoard className="w-4 h-4 mr-2 text-purple-400" />
                NEURAL_NET: OPTIMIZED
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                SYSTEMS: ONLINE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-white font-mono tracking-wider">
                [NEURAL_PROFILE_DATA]
              </h3>
              <div className="mb-6 p-4 holographic-card">
                <div className="text-cyan-400 text-sm font-mono mb-2">{">>"} INITIALIZATION_LOG:</div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Currently interfacing with quantum educational protocols in AI Engineering. 
                  Background systems optimized through years of neural design processes using 
                  Adobe Illustrator, Photoshop, and CorelDRAW quantum enhancers.
                </p>
                <div className="text-cyan-400 text-sm font-mono mb-2">{">>"} EVOLUTION_PROTOCOL:</div>
                <p className="text-slate-300 leading-relaxed">
                  Transitioned from traditional design matrices into quantum artificial intelligence, 
                  software engineering, and web technology architectures. Current projects demonstrate 
                  seamless integration of technical precision with aesthetic neural networks.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 holographic-card rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl neon-glow">🤖</div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400">
                  [HOLOGRAM_ACTIVE]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white font-mono tracking-wider neon-glow">
              [QUANTUM_CAPABILITIES]
            </h3>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto font-mono">
              Where logic interfaces with aesthetics — every algorithm carries purpose, 
              every visual element processes meaning through quantum networks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="holographic-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group scan-line">
                <CardHeader className="text-center">
                  <div className={`flex justify-center mb-4 text-cyan-400 group-hover:neon-glow transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white font-mono tracking-wide">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                  <div className="mt-4 text-xs font-mono text-cyan-400">
                    [STATUS: OPERATIONAL]
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white font-mono tracking-wider neon-glow">
              [NEURAL_SKILL_MATRIX]
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="holographic-card scan-line">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-white font-mono tracking-wider">
                    {category.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="cyber-button bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 border-blue-700/50 font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 text-xs font-mono text-green-400">
                    [PROFICIENCY: ADVANCED]
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white font-mono tracking-wider neon-glow">
              [QUANTUM_PROJECT_ARCHIVE]
            </h3>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto font-mono">
              Neural network implementations that demonstrate quantum-enhanced technology integration.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="holographic-card hover:shadow-2xl transition-all duration-500 group matrix-rain">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white font-mono tracking-wide">
                    <div className="flex items-center space-x-3">
                      <div className="text-cyan-400 group-hover:neon-glow transition-all duration-300">
                        {project.icon}
                      </div>
                      <span>{project.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`text-xs ${
                        project.status === 'ACTIVE' ? 'bg-green-900/30 text-green-400' :
                        project.status === 'OPTIMIZING' ? 'bg-yellow-900/30 text-yellow-400' :
                        project.status === 'DEPLOYING' ? 'bg-blue-900/30 text-blue-400' :
                        'bg-purple-900/30 text-purple-400'
                      }`}>
                        {project.status}
                      </Badge>
                      <ExternalLink className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
                    </div>
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="cyber-button bg-purple-900/30 text-purple-300 hover:bg-purple-800/40 border-purple-700/50 font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                      <span>COMPLETION_RATE</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs font-mono text-green-400">
                    [PROJECT_STATUS: QUANTUM_ENHANCED]
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white font-mono tracking-wider neon-glow">
              [CLIENT_TESTIMONIAL_DATABASE]
            </h3>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto font-mono">
              Quantum feedback from satisfied neural network collaborators.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="holographic-card hover:shadow-2xl transition-all duration-500 group">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-white font-mono mb-2">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm font-mono">{testimonial.role}</p>
                      <p className="text-slate-400 text-xs font-mono">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="mt-4 text-xs font-mono text-green-400">
                    [VALIDATION: AUTHENTICATED]
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="holographic-card p-12 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-white font-mono tracking-wider neon-glow">
              [QUANTUM_VISION_PROTOCOL]
            </h3>
            <p className="text-xl leading-relaxed text-slate-300 font-mono mb-8">
              Engineering convergence between quantum logic and neural aesthetics — where every algorithm 
              carries dimensional purpose and every visual element processes meaning through quantum networks. 
              Mission parameters: Build technology that transcends dimensions, optimize business quantum workflows, 
              enhance educational neural systems, and enable designers to interface with AI consciousness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  <Rocket className="w-12 h-12 mx-auto mb-2 neon-glow group-hover:animate-pulse" />
                  <div className="font-mono text-lg">INNOVATION</div>
                  <div className="text-xs text-slate-400 mt-2">Pushing boundaries beyond conventional limits</div>
                </div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  <Brain className="w-12 h-12 mx-auto mb-2 neon-glow group-hover:animate-pulse" />
                  <div className="font-mono text-lg">INTELLIGENCE</div>
                  <div className="text-xs text-slate-400 mt-2">Neural networks that think beyond algorithms</div>
                </div>
              </div>
              <div className="group hover:scale-105 transition-all duration-300">
                <div className="text-green-400 mb-4">
                  <Zap className="w-12 h-12 mx-auto mb-2 neon-glow group-hover:animate-pulse" />
                  <div className="font-mono text-lg">EVOLUTION</div>
                  <div className="text-xs text-slate-400 mt-2">Continuous advancement through quantum learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white font-mono tracking-wider neon-glow">
            [ESTABLISH_QUANTUM_LINK]
          </h3>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto font-mono">
            Whether you seek collaborative neural networks, require freelance quantum implementations, 
            or wish to exchange data about technology and design — quantum communication channels are open.
          </p>
          
          {/* Interactive Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:neon-glow" />
              <h4 className="text-white font-mono mb-2">EMAIL_PROTOCOL</h4>
              <p className="text-slate-400 text-sm font-mono">muddasirhaider048@gmail.com</p>
            </div>
            <div className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
              <Github className="w-8 h-8 mx-auto mb-4 text-purple-400 group-hover:neon-glow" />
              <h4 className="text-white font-mono mb-2">CODE_REPOSITORY</h4>
              <p className="text-slate-400 text-sm font-mono">github.com/Muddasir-Haider-Khan</p>
            </div>
            <div className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:neon-glow" />
              <h4 className="text-white font-mono mb-2">NEURAL_NETWORK</h4>
              <p className="text-slate-400 text-sm font-mono">Professional Connections</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="cyber-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 font-mono tracking-wider"
              onClick={() => window.open('mailto:muddasirhaider048@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              [SEND_TRANSMISSION]
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="cyber-button border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono tracking-wider"
              onClick={() => window.open('https://github.com/Muddasir-Haider-Khan', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              [ACCESS_REPOSITORY]
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="cyber-button border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 font-mono tracking-wider"
              onClick={() => window.open('https://www.linkedin.com/in/muddasir-haider-khan-281515299/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              [NEURAL_NETWORK]
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20 hologram">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          <p className="text-slate-400 font-mono text-sm">
            © 2024 MUDDASIR.HAIDER.KHAN | QUANTUM_ARCHITECTURE_INITIALIZED | NEURAL_PRECISION_ACTIVE
          </p>
          <div className="mt-2 text-xs text-cyan-400 font-mono">
            [SYSTEM_STATUS: ALL_NETWORKS_OPERATIONAL] | [UPTIME: {Math.floor(Date.now() / 1000)}s]
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

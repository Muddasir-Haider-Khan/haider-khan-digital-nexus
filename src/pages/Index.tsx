
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, Zap, Menu, X, Cpu, Database, Terminal, Rocket, CircuitBoard, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
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
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Neural Inventory System",
      description: "Next-generation inventory management powered by predictive algorithms and holographic interface design, featuring quantum authentication and real-time Excel synchronization.",
      technologies: ["Predictive AI", "Quantum Auth", "Holographic UI", "Real-time Sync"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Cyber Academy Portal",
      description: "Immersive virtual institute with neural-responsive animations, quantum course delivery, and AI-powered learning acceleration for next-generation developers.",
      technologies: ["Virtual Reality", "Neural UI", "Quantum Learning", "AI Acceleration"],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Quantum Trading Bot",
      description: "Advanced financial AI utilizing quantum computing principles for market prediction, featuring multi-dimensional data analysis and autonomous trading protocols.",
      technologies: ["Quantum Computing", "Predictive Analytics", "Autonomous Trading", "Multi-dimensional"],
      icon: <CircuitBoard className="w-6 h-6" />
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 matrix-rain">
      {/* Futuristic Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-blue-500/20 hologram">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold neon-glow bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ◊ MHK.QUANTUM ◊
              </h1>
              <div className="hidden md:flex items-center text-xs text-blue-400 font-mono">
                <Terminal className="w-4 h-4 mr-2" />
                {currentTime.toISOString().split('T')[1].split('.')[0]} UTC
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group">
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group">
                PROJECTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group">
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <button 
              className="md:hidden text-slate-300 hover:text-cyan-400 cyber-button p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20 scan-line">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">▶ ABOUT</a>
                <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">▶ SERVICES</a>
                <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">▶ PROJECTS</a>
                <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">▶ CONTACT</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Futuristic Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto text-center">
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
              >> MUDDASIR HAIDER KHAN <<
            </h2>
            <div className="text-lg text-cyan-400 mb-4 font-mono tracking-wider">
              [QUANTUM AI ENGINEER | NEURAL ARCHITECT | CYBER DESIGNER]
            </div>
            <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Interfacing between dimensions where quantum computation meets neural aesthetics. 
              Engineering the impossible, one algorithm at a time.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="cyber-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 font-mono tracking-wider">
                [INITIALIZE_PORTFOLIO]
              </Button>
              <Button variant="outline" size="lg" className="cyber-button border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono tracking-wider">
                [ESTABLISH_CONNECTION]
              </Button>
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
                <div className="text-cyan-400 text-sm font-mono mb-2">>> INITIALIZATION_LOG:</div>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Currently interfacing with quantum educational protocols in AI Engineering. 
                  Background systems optimized through years of neural design processes using 
                  Adobe Illustrator, Photoshop, and CorelDRAW quantum enhancers.
                </p>
                <div className="text-cyan-400 text-sm font-mono mb-2">>> EVOLUTION_PROTOCOL:</div>
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

      {/* Projects Section */}
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
                    <ExternalLink className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
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
                  <div className="text-xs font-mono text-green-400">
                    [PROJECT_STATUS: QUANTUM_ENHANCED]
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="holographic-card p-12 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 text-white font-mono tracking-wider neon-glow">
              [QUANTUM_VISION_PROTOCOL]
            </h3>
            <p className="text-xl leading-relaxed text-slate-300 font-mono">
              Engineering convergence between quantum logic and neural aesthetics — where every algorithm 
              carries dimensional purpose and every visual element processes meaning through quantum networks. 
              Mission parameters: Build technology that transcends dimensions, optimize business quantum workflows, 
              enhance educational neural systems, and enable designers to interface with AI consciousness.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-8 text-center">
              <div className="text-cyan-400">
                <Rocket className="w-8 h-8 mx-auto mb-2 neon-glow" />
                <div className="font-mono text-sm">INNOVATION</div>
              </div>
              <div className="text-purple-400">
                <Brain className="w-8 h-8 mx-auto mb-2 neon-glow" />
                <div className="font-mono text-sm">INTELLIGENCE</div>
              </div>
              <div className="text-green-400">
                <Zap className="w-8 h-8 mx-auto mb-2 neon-glow" />
                <div className="font-mono text-sm">EVOLUTION</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white font-mono tracking-wider neon-glow">
            [ESTABLISH_QUANTUM_LINK]
          </h3>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto font-mono">
            Whether you seek collaborative neural networks, require freelance quantum implementations, 
            or wish to exchange data about technology and design — quantum communication channels are open.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="cyber-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 font-mono tracking-wider">
              <Mail className="w-5 h-5 mr-2" />
              [SEND_TRANSMISSION]
            </Button>
            <Button variant="outline" size="lg" className="cyber-button border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-mono tracking-wider">
              <Github className="w-5 h-5 mr-2" />
              [ACCESS_REPOSITORY]
            </Button>
            <Button variant="outline" size="lg" className="cyber-button border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 font-mono tracking-wider">
              <Linkedin className="w-5 h-5 mr-2" />
              [NEURAL_NETWORK]
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20 hologram">
        <div className="container mx-auto text-center">
          <p className="text-slate-400 font-mono text-sm">
            © 2024 MUDDASIR.HAIDER.KHAN | QUANTUM_ARCHITECTURE_INITIALIZED | NEURAL_PRECISION_ACTIVE
          </p>
          <div className="mt-2 text-xs text-cyan-400 font-mono">
            [SYSTEM_STATUS: ALL_NETWORKS_OPERATIONAL]
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

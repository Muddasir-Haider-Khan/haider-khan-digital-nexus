
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    "Languages & Frameworks": ["Python", "HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Flask"],
    "Libraries & APIs": ["LangChain", "OpenAI", "Alpha Vantage", "Google Gemini"],
    "Design Tools": ["Adobe Illustrator", "Photoshop", "CorelDRAW", "Figma"],
    "Development Tools": ["VSCode", "Docker", "Git", "GitHub", "WSL"]
  };

  const projects = [
    {
      title: "Zillex AI Assistant",
      description: "A smart, context-aware AI chat assistant with Instagram & WhatsApp integration, capable of business and personal chat handling.",
      technologies: ["AI", "LangChain", "Python", "API Integration"]
    },
    {
      title: "Inventory Management System",
      description: "A complete Python+HTML based solution with role-based login, product tracking, and Excel logging — designed with a modern POS look.",
      technologies: ["Python", "HTML", "Excel Integration", "Authentication"]
    },
    {
      title: "Virtual Institute Portal",
      description: "A futuristic web app built for Code Phantom, designed for web development and Python training — complete with animations, course management, and smooth scroll effects.",
      technologies: ["React", "Animations", "Course Management", "UI/UX"]
    },
    {
      title: "Stock Market AI Bot",
      description: "A financial assistant that analyzes market trends and gives smart stock predictions using AI models and financial APIs.",
      technologies: ["AI", "Financial APIs", "Data Analysis", "Python"]
    }
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Applications",
      description: "From intelligent assistants like Zillex to stock market bots and education tools, I love designing smart systems with real-world impact."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "I build fast, responsive web UIs using React.js, TypeScript, Tailwind CSS, and Shadcn UI, ensuring elegant design with smooth user experiences."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design & Branding",
      description: "As a seasoned designer, I create striking visuals, brand identities, and promotional content, always focusing on storytelling and visual impact."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Engineering",
      description: "From login pages to dashboards, I craft intuitive interfaces that combine form with function, always using pixel-perfect precision."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MHK
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
                <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="wave inline-block">👋</span> Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Muddasir Haider Khan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
              AI Engineer & Creative Technologist
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Welcome to my digital portfolio — a space where creativity meets computation.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6 text-white">🎓 About Me</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm currently pursuing my degree in AI Engineering, and I come from a strong background in graphic design, 
                with years of experience using tools like Adobe Illustrator, Photoshop, and CorelDRAW. I'm passionate about 
                building smart, intuitive, and aesthetically pleasing digital solutions that bridge the gap between art and technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Over time, I've transitioned from working as a professional designer into the world of artificial intelligence, 
                software development, and web technologies. My academic projects, freelance experiences, and collaborative efforts 
                reflect a unique blend of technical precision and artistic intuition.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">💼 What I Do</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I merge logic with aesthetics — where every line of code carries purpose and every visual element speaks for itself.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800 border-gray-700 hover:border-blue-500/50">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 text-blue-400">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">🧠 Skills & Tools</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-white">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 border-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">🚀 Projects That Define Me</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of projects that demonstrate my passion for building tech that matters.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-purple-500/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400" />
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 border-purple-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">🎯 My Vision</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-gray-200">
            I believe in merging logic with aesthetics — where every line of code carries purpose and every visual element speaks for itself. 
            I'm on a mission to build tech that matters, whether it's improving business workflows, making education smarter, 
            or enabling designers to do more with AI.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-white">📬 Let's Connect</h3>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a collaborator, want to hire for a freelance project, or just want to geek out over tech and design — I'd love to hear from you!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Muddasir Haider Khan. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

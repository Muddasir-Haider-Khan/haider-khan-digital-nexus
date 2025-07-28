import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Brain, Users, Menu, X, Award, Download, Play, TrendingUp, Globe, Star, BookOpen, Briefcase, GraduationCap, Sun, Moon, MessageSquare, Instagram, Twitter } from "lucide-react";
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

  const projects = [
    {
      title: "Zillex AI Assistant",
      description: "A web app for visualizing personalized Spotify data. View your most-listened artists, tracks, and detailed analytics about each track. Create and save new playlists of recommendations tracks based on your existing playlists and more.",
      technologies: ["AI", "NLP", "Integration"],
      status: "Active",
      completion: 95
    },
    {
      title: "Smart Inventory System", 
      description: "A web app for visualizing personalized Spotify data. View your most-listened artists, tracks, and detailed analytics about each track. Create and save new playlists of recommendations tracks based on your existing playlists and more.",
      technologies: ["Analytics", "Dashboard", "Integration"],
      status: "Optimizing",
      completion: 87
    },
    {
      title: "Digital Academy Platform",
      description: "A web app for visualizing personalized Spotify data. View your most-listened artists, tracks, and detailed analytics about each track. Create and save new playlists of recommendations tracks based on your existing playlists and more.", 
      technologies: ["EdTech", "Analytics", "PWA"],
      status: "Deploying",
      completion: 92
    },
    {
      title: "Financial Trading Analytics",
      description: "A web app for visualizing personalized Spotify data. View your most-listened artists, tracks, and detailed analytics about each track. Create and save new playlists of recommendations tracks based on your existing playlists and more.",
      technologies: ["Finance", "Analytics", "Algorithms"],
      status: "Testing", 
      completion: 78
    }
  ];

  const workExperience = [
    {
      company: "CIB on the Mobile",
      role: "Senior Developer",
      period: "2023 - Present",
      description: "Leading AI integration projects"
    },
    {
      company: "CIB on the Mobile", 
      role: "Full Stack Developer",
      period: "2022 - 2023",
      description: "Built scalable web applications"
    },
    {
      company: "CIB on the Mobile",
      role: "Frontend Developer", 
      period: "2021 - 2022",
      description: "Created responsive user interfaces"
    },
    {
      company: "CIB on the Mobile",
      role: "Junior Developer",
      period: "2020 - 2021", 
      description: "Developed mobile applications"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Modern Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 nav-modern ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}>
        <div className="container-modern px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl md:text-3xl font-bold glow-text">
                Muddasir Haider Khan
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Lab" },  
                { href: "#projects", label: "Work" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="modern-button p-2"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>

            <button 
              className="md:hidden modern-button p-3"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-6 pb-6 border-t border-border/20 fade-in-up">
              <div className="flex flex-col space-y-4 pt-6">
                {[
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Lab" },
                  { href: "#projects", label: "Work" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium px-4 py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleTheme}
                  className="modern-button p-2 mx-4"
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
        <div className="container-modern">
          <div className="max-w-4xl fade-in-up">
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl">
                  👨‍💻
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Hello! I am</div>
                  <div className="text-primary font-medium">Software Engineer</div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-muted-foreground mb-2">A designer who</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Judges a book <br />
                by its <span className="text-primary glow-text">Cover</span>...
              </h1>
              <div className="text-muted-foreground text-lg">
                Because if the cover does not impress you what else can?
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                I'm a Software Engineer.
              </h2>
              <div className="text-primary font-medium mb-4">
                Currently, I'm a Software Engineer at <span className="underline">Facebook</span>.
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                A self-taught UI/UX designer, functioning in the industry for 3+ years now. 
                I make meaningful and delightful digital products that create an equilibrium 
                between user needs and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-modern">
          <h3 className="text-3xl font-bold mb-12">Work Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="modern-card scale-hover">
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{job.company}</CardTitle>
                    <CardDescription>{job.role}</CardDescription>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {job.period}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="section-padding relative">
        <div className="container-modern text-center">
          <div className="mb-12">
            <div className="text-muted-foreground mb-4">
              I'm currently looking to join a <span className="text-primary underline">cross-functional</span> team
            </div>
            <div className="text-sm text-muted-foreground">
              that values improving people's lives through accessible design
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="social-behance scale-hover">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Palette className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="social-dribbble scale-hover">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="social-twitter scale-hover">
              <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center">
                <Twitter className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="social-instagram scale-hover">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="social-linkedin scale-hover">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>
            <a href="#" className="social-discord scale-hover">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
            </a>
          </div>

          {/* Glowing Logo */}
          <div className="relative mb-20">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center glow-purple floating-gentle">
              <div className="text-4xl font-bold text-white">MH</div>
            </div>
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-modern">
          <div className="text-center mb-16">
            <div className="text-muted-foreground mb-4">Recent Projects</div>
            <h3 className="text-3xl font-bold">Example Project</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="modern-card scale-hover group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge className={`
                      ${project.status === 'Active' ? 'status-active' : ''}
                      ${project.status === 'Optimizing' ? 'status-optimizing' : ''}
                      ${project.status === 'Deploying' ? 'status-deploying' : ''}
                      ${project.status === 'Testing' ? 'status-testing' : ''}
                      px-3 py-1 rounded-full text-xs
                    `}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" className="modern-button">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm">
                      <Code className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-border/20">
        <div className="container-modern text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Muddasir Haider Khan. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Button variant="outline" size="sm" className="modern-button">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="modern-button">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="modern-button">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Portfolio = () => {
    const scrollToNext = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Common section title class for consistency
    const sectionTitleClass = "text-3xl md:text-4xl font-bold text-center mb-16 text-white";

    return (
        <main className="bg-black text-gray-100">

            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center">
                <div className="container mx-auto max-w-4xl text-center space-y-8 px-4">
                    <h1 className="text-6xl md:text-8xl font-bold">
                        <span className="bg-gradient-to-r from-metallic-200 via-metallic-400 to-metallic-200 bg-clip-text text-transparent">
                            Hi, I'm Darren!
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-metallic-400 font-light">
                        I do like some code and stuff
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <button
                            className="w-48 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
                            onClick={() => window.open('/assets/resume.pdf', '_blank')}
                        >
                            <Download size={20} />
                            Download CV
                        </button>
                        <button
                            className="w-48 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
                            onClick={() => window.location.href = 'mailto:darren.lim.off@gmail.com'}
                        >
                            <Mail size={20} />
                            Contact Me
                        </button>
                    </div>
                </div>
                <button
                    onClick={scrollToNext}
                    className="absolute bottom-8 animate-bounce cursor-pointer z-10"
                >
                    <ChevronDown size={32} className="text-metallic-400 hover:text-metallic-200 transition-colors" />
                </button>
            </section>

            {/* About Section */}
            <section id="about" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>About Me</h2>
                    <div className="max-w-3xl mx-auto text-metallic-300 space-y-6">
                        <div className="flex justify-center items-center">
                            <p className="text-lg" data-aos="fade-up" style={{ textAlign: 'center', width: '100%' }}>
                                I'm a Software Engineer based in <span className="text-metallic-200">Singapore</span>. Here's my journey so far.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>Experience</h2>

                    <div className="space-y-12">
                        {/* Golden Island */}
                        <div className="p-6 rounded-lg border border-metallic-800 bg-gray-900/30" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4">Software Engineer Intern | Golden Island</h3>
                            <ul className="space-y-3 text-metallic-300 mb-6">
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Developed a Fleet Tracker with <span className="text-metallic-200">Pandas</span> to track locations of <span className="text-metallic-200">1000 ships with 320,000 lines of data daily</span></span>
                                </li>
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Implemented the algorithm to track when ships are near each other using the Haversine Formula, and fine tuned the parameters to accurately determine when ships are docking with over <span className="text-metallic-200">90% accuracy</span></span>
                                </li>
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Developed a Fleet Simulation System to simulate realistic movement of <span className="text-metallic-200">1000 ships</span></span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'Node.js', 'Supabase', 'RESTful API'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full text-sm bg-metallic-800/50 border border-metallic-700/20 text-metallic-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Sheares Web */}
                        <div className="p-6 rounded-lg border border-metallic-800 bg-gray-900/30" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4">Software Developer | Sheares Web</h3>
                            <ul className="space-y-3 text-metallic-300 mb-6">
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Developed a Full-Stack Hostel Management Web Application with <span className="text-metallic-200">468 users</span></span>
                                </li>
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Developing a Mobile Hostel Application that will serve up to <span className="text-metallic-200">500 users</span> at a time</span>
                                </li>
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Implemented the Newsletter Feature and Authentication with different access levels, allowing Access Control to the Post-Newsletter functionality</span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Firebase', 'React Native', 'Tailwind CSS'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 rounded-full text-sm bg-metallic-800/50 border border-metallic-700/20 text-metallic-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Biz IQ Academy */}
                        <div className="p-6 rounded-lg border border-metallic-800 bg-gray-900/30" data-aos="fade-up">
                            <h3 className="text-xl font-bold mb-4">Finance Executive Intern | Biz IQ Academy</h3>
                            <ul className="space-y-3 text-metallic-300 mb-6">
                                <li className="pl-6 relative">
                                    <span className="absolute left-0">•</span>
                                    <span className="block pl-2">Automated financial payment receipt processing, increasing efficiency by up to <span className="text-metallic-200">8 times</span></span>
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-sm bg-metallic-800/50 border border-metallic-700/20 text-metallic-300">
                                    VBA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="featured-projects" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Jobu",
                                description: "A full-stack application designed to help users organize and track their job applications. With categorization, progress tracking, and event logging, Jobu simplifies job hunting for users.",
                                image: "/assets/Jobu.png",
                                link: "https://jobu-jat.netlify.app/",
                                tech: ["React", "Firebase", "JavaScript", "Tailwind CSS"]
                            },
                            {
                                title: "Spotifyou",
                                description: "A full-stack spotify companion application built with React, Supabase, Spotify API and Google Gemini AI, featuring song and artist listening statistics, and recommendations based on your top tracks.",
                                image: "/assets/Spotifyou.png",
                                link: "https://spotifyou.vercel.app/",
                                tech: ["React", "Supabase", "Gemini AI", "JavaScript", "Spotify API"]
                            },
                            {
                                title: "FeinAlpha",
                                description: "A full-stack portfolio manager application built with MongoDB, Express, Node.js and React with Firebase authentication, designed to provide a secure portfolio management experience",
                                image: "/assets/Fein.png",
                                link: "https://feinalpha.vercel.app/",
                                tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"]
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-900/30 rounded-lg border border-metallic-800 overflow-hidden hover:border-metallic-600/50 transition-all hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </a>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-metallic-200 group-hover:text-metallic-100 transition-colors">{project.title}</h3>
                                    <p className="text-metallic-400 mb-4 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs rounded-full bg-metallic-800/50 border border-metallic-700/20 text-metallic-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pet Projects Section */}
            <section id="pet-projects" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>Pet Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "HowTheFeels",
                                description: "A natural language processing application built with React, Tailwind CSS, and Hugging Face AI, designed to provide seamless performance and hosted on Vercel.",
                                image: "/assets/HowTheFeels.png",
                                link: "https://how-the-feels.vercel.app/",
                                tech: ["React", "JavaScript", "Tailwind CSS", "Hugging Face API"]
                            },
                            {
                                title: "DarrnyDotCom",
                                description: "A portfolio website that showcases my story, knowledge, projects and experience, all in one place. It features a reactive design and smooth UI transitions.",
                                image: "/assets/DarrnyDotCom.png",
                                link: "https://darrny.netlify.app/",
                                tech: ["CSS", "HTML"]
                            },
                            {
                                title: "QuerySense",
                                description: "A data analysis application built with React, Tailwind CSS, and Google Gemini AI, featuring natural language processing capabilities and intuitive visual data representation.",
                                image: "/assets/QuerySense.png",
                                link: "https://querysense.vercel.app/",
                                tech: ["React", "JavaScript", "Tailwind CSS", "Google Generative AI"]
                            },
                            {
                                title: "Imageination",
                                description: "A web application for AI image generation using the FLUX.1-dev model, built with Next.js and Vercel, offering a simple and intuitive interface for creating images from text.",
                                image: "/assets/Imageination.png",
                                link: "https://imageination.netlify.app",
                                tech: ["CSS", "React", "JavaScript", "Hugging Face API"]
                            },
                            {
                                title: "Gymmy",
                                description: "A gym motivational companion built using React and CSS, designed to help users plan workouts based on goals and motivate them to complete their sessions effectively.",
                                image: "/assets/Gymmy.png",
                                link: "https://gymmythegymbuddy.netlify.app/",
                                tech: ["CSS", "React", "JavaScript"]
                            },
                            {
                                title: "TheResumeGriller",
                                description: "A fun and interactive web application that roasts resumes with sharp feedback—upload a PDF, choose your field, and watch your resume get analyzed, grilled, and roasted to perfection!",
                                image: "/assets/TheResumeGriller.png",
                                link: "https://the-resume-griller.vercel.app/",
                                tech: ["React", "JavaScript", "Tailwind CSS", "Hugging Face API"]
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-900/30 rounded-lg border border-metallic-800 overflow-hidden hover:border-metallic-600/50 transition-all hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </a>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-metallic-200 group-hover:text-metallic-100 transition-colors">{project.title}</h3>
                                    <p className="text-metallic-400 mb-4 text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs rounded-full bg-metallic-800/50 border border-metallic-700/20 text-metallic-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
                        <a
                            href="https://github.com/darrny"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-metallic-700 to-metallic-800 hover:from-metallic-600 hover:to-metallic-700 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                        >
                            <Github size={20} />
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>


            {/* Education Section */}
            <section id="education" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>Education</h2>

                    {/* University */}
                    <div className="mb-16 text-center" data-aos="fade-up">
                        <h3 className="text-2xl font-bold text-metallic-200 mb-2">National University of Singapore</h3>
                        <p className="text-metallic-400">Computer Science • Year 2</p>
                    </div>

                    {/* Coursework */}
                    <div className="mb-12" data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-6 text-metallic-300">Coursework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { name: 'Programming Methodology', link: 'https://nusmods.com/courses/CS1101S/programming-methodology' },
                                { name: 'Programming Methodology II', link: 'https://nusmods.com/courses/CS2030S/programming-methodology-ii' },
                                { name: 'Discrete Structures', link: 'https://nusmods.com/courses/CS1231S/discrete-structures' },
                                { name: 'Data Structures and Algorithms', link: 'https://nusmods.com/courses/CS2040S/data-structures-and-algorithms' },
                                { name: 'Computer Organisation', link: 'https://nusmods.com/courses/CS2100/computer-organisation' },
                                { name: 'Introduction to Computer Networks', link: 'https://nusmods.com/courses/CS2105/introduction-to-computer-networks' },
                                { name: 'Introduction to Information Security', link: 'https://nusmods.com/courses/CS2107/introduction-to-information-security' },
                                { name: 'Linear Algebra for Computing', link: 'https://nusmods.com/courses/MA1522/linear-algebra-for-computing' },
                                { name: 'Calculus for Computing', link: 'https://nusmods.com/courses/MA1521/calculus-for-computing' },
                            ].map((course, index) => (
                                <a
                                    key={index}
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-lg border border-metallic-800 bg-gray-900/30 hover:border-metallic-600/50 transition-all hover:bg-gray-800/50 hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {course.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-12" data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-6 text-metallic-300">Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    name: 'Introduction to Structured Query Language (SQL)',
                                    link: 'https://www.coursera.org/account/accomplishments/verify/O416L1SSDRPD'
                                },
                                {
                                    name: "Platform Thinking: what's beyond Uber?",
                                    link: 'https://www.coursera.org/account/accomplishments/verify/5GY6RHTSE4XQ'
                                },
                            ].map((cert, index) => (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-lg border border-metallic-800 bg-gray-900/30 hover:border-metallic-600/50 transition-all hover:bg-gray-800/50 hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {cert.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hackathons */}
                    <div data-aos="fade-up">
                        <h3 className="text-xl font-semibold mb-6 text-metallic-300">Hackathons</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg border border-metallic-800 bg-gray-900/30 hover:border-metallic-600/50 transition-all">
                                <span className="font-semibold">CatalystX</span>
                                <span className="text-metallic-300 ml-2">Finalist</span>
                            </div>
                            <div className="p-4 rounded-lg border border-metallic-800 bg-gray-900/30 hover:border-metallic-600/50 transition-all">
                                <span className="font-semibold">PSA Codesprint</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32" data-aos="fade-up">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className={sectionTitleClass}>Let's Connect</h2>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Mail size={24} />,
                                    title: "Email",
                                    link: "mailto:darren.lim.off@gmail.com",
                                    text: "darren.lim.off@gmail.com"
                                },
                                {
                                    icon: <Github size={24} />,
                                    title: "GitHub",
                                    link: "https://github.com/darrny",
                                    text: "github.com/darrny"
                                },
                                {
                                    icon: <Linkedin size={24} />,
                                    title: "LinkedIn",
                                    link: "https://linkedin.com/in/darrny",
                                    text: "linkedin.com/in/darrny"
                                }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center p-6 rounded-lg border border-metallic-800 bg-gray-900/30 hover:border-metallic-600/50 transition-all hover:bg-gray-800/50 hover:shadow-[0_0_15px_rgba(203,208,217,0.1)]"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="p-4 rounded-full bg-metallic-800/50 text-metallic-300 group-hover:bg-metallic-700/50 group-hover:text-metallic-200 transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="mt-4 font-semibold text-lg text-metallic-200">{item.title}</h3>
                                    <p className="mt-2 text-sm text-metallic-400 group-hover:text-metallic-300 transition-colors">
                                        {item.text}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-metallic-800">
                <div className="container mx-auto max-w-6xl text-center">
                    <p className="text-metallic-400 text-sm">
                        © 2024 Darren Lim. All rights reserved, hehe :)
                    </p>
                </div>
            </footer>
        </main>
    );
};

export default Portfolio;
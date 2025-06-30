import React from 'react'
// import { projects } from '../constants';
import Project from '../components/Project';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useState } from 'react';

// Sample data for ProjectDetails component
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A modern, responsive e-commerce platform built with React and Node.js featuring real-time inventory management and secure payment processing.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
        subDescription: [
            "Implemented advanced search and filtering capabilities with Elasticsearch integration.",
            "Built comprehensive admin dashboard for inventory and order management.",
            "Integrated multiple payment gateways including Stripe and PayPal for seamless transactions.",
            "Optimized for mobile devices with responsive design principles."
        ],
        tags: [
            {
                id: 1,
                name: "React",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                id: 2,
                name: "Node.js",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            },
            {
                id: 3,
                name: "MongoDB",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            },
            {
                id: 4,
                name: "Tailwind CSS",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            }
        ],
        href: "https://github.com/username/ecommerce-platform"
    },
    {
        id: 2,
        title: "AI-Powered Chat Application",
        description: "Real-time messaging application with AI-powered chatbots, voice messages, and advanced encryption for secure communication.",
        image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
        subDescription: [
            "Integrated OpenAI GPT for intelligent chat responses and conversation assistance.",
            "Implemented end-to-end encryption using WebRTC for secure peer-to-peer communication.",
            "Built voice message functionality with real-time audio processing.",
            "Created custom emoji reactions and message threading features."
        ],
        tags: [
            {
                id: 1,
                name: "React",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                id: 2,
                name: "Socket.io",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
            },
            {
                id: 3,
                name: "Python",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                id: 4,
                name: "PostgreSQL",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            }
        ],
        href: "https://github.com/username/ai-chat-app"
    },
    {
        id: 3,
        title: "Task Management Dashboard",
        description: "Comprehensive project management tool with Kanban boards, time tracking, and team collaboration features for enhanced productivity.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
        subDescription: [
            "Designed intuitive drag-and-drop Kanban boards for visual task organization.",
            "Built advanced time tracking with detailed analytics and reporting features.",
            "Implemented real-time collaboration with live updates and notifications.",
            "Created customizable workflows and automated task assignment rules."
        ],
        tags: [
            {
                id: 1,
                name: "Vue.js",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            },
            {
                id: 2,
                name: "Express",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            },
            {
                id: 3,
                name: "MySQL",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            },
            {
                id: 4,
                name: "Docker",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            }
        ],
        href: "https://github.com/username/task-management"
    },
    {
        id: 4,
        title: "Weather Analytics Platform",
        description: "Advanced weather monitoring system with predictive analytics, interactive maps, and real-time alerts for weather-sensitive industries.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
        subDescription: [
            "Integrated multiple weather APIs for comprehensive data aggregation and analysis.",
            "Built machine learning models for accurate weather prediction and pattern recognition.",
            "Created interactive maps with real-time weather visualization and historical data.",
            "Developed alert system for severe weather conditions with SMS and email notifications."
        ],
        tags: [
            {
                id: 1,
                name: "JavaScript",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
                id: 2,
                name: "Python",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                id: 3,
                name: "Redis",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            },
            {
                id: 4,
                name: "AWS",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
            }
        ],
        href: "https://github.com/username/weather-analytics"
    },
    {
        id: 5,
        title: "Fitness Tracking Mobile App",
        description: "Cross-platform fitness application with workout planning, nutrition tracking, and social features to motivate users in their fitness journey.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
        subDescription: [
            "Developed comprehensive workout library with video demonstrations and progress tracking.",
            "Implemented nutrition database with barcode scanning and meal planning features.",
            "Built social platform for sharing achievements and connecting with fitness communities.",
            "Integrated wearable device APIs for automatic activity and health data synchronization."
        ],
        tags: [
            {
                id: 1,
                name: "React Native",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
                id: 2,
                name: "Firebase",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            },
            {
                id: 3,
                name: "TypeScript",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            },
            {
                id: 4,
                name: "GraphQL",
                path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
            }
        ],
        href: "https://github.com/username/fitness-tracker"
    }
];


const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });

    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    const [preview, setPreview] = useState(false);

    return (
        <section onMouseMove={handleMouseMove} className="relative c-space section-spacing">
            <h2 className="text-heading">My Selected Projects</h2>

            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full'>
                {
                    projects.map((project, index) => (
                        <Project key={project.id || index} project={project} setPreview={setPreview} />
                    ))
                }
                {
                    preview && (
                        <motion.img className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80' src={preview} alt=""
                            style={{
                                x: springX, y: springY
                            }}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default Projects;
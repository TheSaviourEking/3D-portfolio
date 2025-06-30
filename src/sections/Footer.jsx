// Sample social media data for Footer component
const mySocials = [
    {
        name: "GitHub",
        href: "https://github.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/yourprofile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
        name: "Twitter",
        href: "https://twitter.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
    },
    {
        name: "Instagram",
        href: "https://instagram.com/yourusername",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
    },
    {
        name: "YouTube",
        href: "https://youtube.com/@yourchannel",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
    },
    {
        name: "Discord",
        href: "https://discord.gg/yourinvite",
        icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
    }
];

// Alternative with different social platforms
const mySocialsAlternative = [
    {
        name: "GitHub",
        href: "https://github.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/yourprofile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
        name: "Behance",
        href: "https://behance.net/yourprofile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg"
    },
    {
        name: "Dribbble",
        href: "https://dribbble.com/yourusername",
        icon: "https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-logo-png-transparent.png"
    },
    {
        name: "Medium",
        href: "https://medium.com/@yourusername",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg"
    }
];

// Minimalist version with just the essentials
const mySocialsMinimal = [
    {
        name: "GitHub",
        href: "https://github.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/yourprofile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
        name: "Twitter",
        href: "https://twitter.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
    }
];

// For developers/designers portfolio
const mySocialsPortfolio = [
    {
        name: "GitHub",
        href: "https://github.com/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/yourprofile",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
        name: "Figma",
        href: "https://figma.com/@yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
        name: "CodePen",
        href: "https://codepen.io/yourusername",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg"
    },
    {
        name: "Stack Overflow",
        href: "https://stackoverflow.com/users/yourprofile",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
    }
];

// Export the main one (you can choose which one to use)

// Usage in your component:
// Simply import this data file and use it directly in your Footer component
// The icons are all hosted on reliable CDNs and will display properly

const Footer = () => {
    return (
        <section className='flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space'>
            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full'>
                <div className="flex gap-2">
                    <p>Terms & Conditions</p>
                    <p>|</p>
                    <p>Privacy Policy</p>
                </div>

                <div className="flex gap-3">
                    {
                        mySocialsPortfolio.map((social, index) => (
                            <a href={social.href} key={index}>
                                <img src={social.icon} alt={social.name} className='w-5 h-5' />
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Footer
import { OrbitingCircles } from "./ui/OrbitingCircles";

export function Frameworks() {
    const skills = [
        'auth0', 'blazor', 'cplusplus', 'csharp', 'css3', 'dotnet', 'dotnetcore', 'git', 'html5', 'javascript', 'microsoft', 'react', 'sqlite', 'tailwindcss', 'vite.js', 'wordpress'
    ];

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
                {
                    skills.map((skill, index) => (
                        <Icon key={index} src={`assets/logos/${skill}.svg`} />
                    ))
                }
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {
                    skills.reverse().map((skill, index) => (
                        <Icon key={index} src={`assets/logos/${skill}.svg`} />
                    ))
                }
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="duretion-200 rounded-sm hover:scale-110" alt="" />
);

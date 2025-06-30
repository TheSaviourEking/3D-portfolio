import { useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = ({ project, setPreview }) => {
    const { title, description, subDescription, href, image, tags, } = project;

    const [isHidden, setIsHidden] = useState(false)
    return (
        <>
            <div onMouseEnter={() => setPreview(image)} onMouseLeave={() => setPreview(null)} className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0">
                <p className='text-2xl'>{title}</p>
                <div className="flex gap-5 mt-2 text-sand">
                    {tags.map((tag) => (
                        <span key={tag.id}>{tag.name}</span>
                    ))}
                </div>
                <button onClick={() => setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
                    Read More
                    <img src="assets/arrow-right.svg" alt="" className='w-5' />
                </button>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full">
                {isHidden && (
                    <ProjectDetails closeModal={() => setIsHidden(false)} title={name} description={description} subDescription={subDescription} image={image} tags={tags} href={href} />
                )}
            </div>
        </>
    )
}

export default Project;
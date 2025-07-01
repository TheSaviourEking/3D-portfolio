import { motion } from 'motion/react';
import { FlipWords } from "./ui/FlipWords";

const HeroText = () => {
    const words = ["Unstoppable", "Cutting-Edge", "Bulletproof"]; // Changed words
    const variants = {
        hidden: {
            opacity: 0, x: -50
        },
        visible: {
            opacity: 1, x: 0
        },
    }
    return (
        <div className="z-10 mt-20 text-center md:mt-0 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    variants={variants}
                    initial='hidden'
                    transition={{ delay: 1 }}
                    animate='visible'
                    className="text-4xl font-medium">I'm Saviour.</motion.h1> {/* Simplified */}
                <div className="flex flex-col items-start">
                    <motion.p
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.2 }}
                        className="text-5xl mt-4 font-medium text-neutral-300">The Architect of Your Vision. <br /> I Don't Just Code, I Engineer</motion.p> {/* More assertive */}
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords duration={5000} words={words} className={'font-black text-white text-8xl'} />
                    </motion.div>
                    <motion.p
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.8 }}
                        className="text-4xl font-medium text-neutral-300">
                        Digital Dominance.
                    </motion.p>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col spacy-y-6 md:hidden">
                <motion.p
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    transition={{ delay: 1 }}
                    className="text-4xl font-medium">I'm Saviour.</motion.p>
                <div>
                    <motion.p
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.2 }}
                        className="text-5xl font-black text-neutral-300">Forging</motion.p> {/* Changed */}
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} duration={5000} className={'font-bold tex-white text-7xl'} />
                    </motion.div>
                    <motion.p
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        transition={{ delay: 1.8 }}
                        className="text-4xl font-black text-neutral-400">Digital Powerhouses.</motion.p> {/* Changed */}
                </div>
            </div>
        </div>
    )
}

export default HeroText;
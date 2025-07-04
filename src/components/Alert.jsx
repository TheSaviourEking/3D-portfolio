import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/utils'

const Alert = ({ type, text }) => {
    const variants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -50, scale: 0.8 }
    }
    return (
        <AnimatePresence>
            <motion.div
                className='fixed z-50 flex items-center justify-center bottom-5 right-5'
                variants={variants}
                initial='hidden'
                animate="visible"
                exit={'exit'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <div className={cn('p-2', {
                    'bg-red-800': type === 'danger',
                    'bg-royal': !type === 'danger',
                },
                    'items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5'
                )}>
                    <p className={cn('flex rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3', {
                        "bg-red-500": type === 'danger',
                        "bg-lavender": !type === 'danger',
                    })}>
                        {
                            type === 'danger' ? "Failed" : "Success"
                        }
                    </p>
                    <p className='mr-2 text-left'>{text}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Alert
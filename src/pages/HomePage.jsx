import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import state from '../store';
import CustomButton from '../components/CustomButton';

export default function HomePage() {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src='./logo.png' alt='logo'  className='w-8 h-8 object-contain'/> 
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.h1 className='head-text' {...headTextAnimation}>
                            LET'S <br className='xl:block hidden' /> DO IT.
                        </motion.h1>
                        <motion.div className='flex flex-col gap-5' {...headTextAnimation}>
                            <p className='max-w-md font-normal text-gray-600 text-base'>
                                Create your unique and exclusive shirt with our brand-new 3D customization tool.
                                <strong> Unleash your imagination</strong>{" "} and define your own style.
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={() => state.intro = false}
                                customStyle="w-fit px-4 py-2.5 font-bold text-sm" />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

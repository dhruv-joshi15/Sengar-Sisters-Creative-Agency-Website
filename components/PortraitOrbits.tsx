'use client';
import {motion} from 'framer-motion';
import {useMotionPreference} from '@/hooks/useMotionPreference';
export function PortraitOrbits({index}:{index:number}){const reduced=useMotionPreference();return <div className={`portrait-orbits orbit-${index}`} aria-hidden="true"><div className="portrait-orbit-ring ring-one"/><div className="portrait-orbit-ring ring-two"/><div className="portrait-orbit-ring ring-three"/><motion.div className="portrait-satellite" animate={reduced?undefined:{rotate:360}} transition={{duration:index?32:26,repeat:Infinity,ease:'linear'}}><span/></motion.div><span className="portrait-star">✧</span><span className="portrait-coordinate">{index?'02 / VISUAL INSTINCT':'01 / STORY & SOUL'}</span></div>}

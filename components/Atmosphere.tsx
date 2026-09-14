'use client';
import {useMotionPreference} from '@/hooks/useMotionPreference';
import {useEffect} from 'react';
import {motion,useMotionValue,useSpring} from 'framer-motion';
export function Atmosphere(){const reduced=useMotionPreference();const px=useMotionValue(0),py=useMotionValue(0);const x=useSpring(px,{stiffness:35,damping:25}),y=useSpring(py,{stiffness:35,damping:25});useEffect(()=>{const move=(e:PointerEvent)=>{if(reduced||e.pointerType!=='mouse')return;px.set((e.clientX/innerWidth-.5)*10);py.set((e.clientY/innerHeight-.5)*8)};window.addEventListener('pointermove',move,{passive:true});return()=>window.removeEventListener('pointermove',move)},[reduced,px,py]);return <div className="atmosphere" aria-hidden="true"><motion.div className="atmosphere-art" style={reduced?undefined:{x,y}}/><div className="atmosphere-grain"/></div>}

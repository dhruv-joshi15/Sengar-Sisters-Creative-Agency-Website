'use client';
import {motion,useTransform,type MotionValue} from 'framer-motion';
import type {ReactNode} from 'react';
export function HingedPhone({kind,opening,reduced,children}:{kind:'flip'|'fold';opening:MotionValue<number>;reduced:boolean;children:ReactNode}){
 const angle=useTransform(opening,[0,1],[-180,0]);
 const screenOpacity=useTransform(opening,[0,.72,.96,1],[0,0,1,1]);
 const screenBlur=useTransform(opening,[0,.72,1],['blur(6px)','blur(6px)','blur(0px)']);
 return <div className={`hinged-phone hinged-${kind}`} data-device={kind}>
  <div className="hardware-half hardware-base" aria-hidden="true"><div className="hardware-inner"><span className="inner-glass-reflection"/></div></div>
  <motion.div className="hardware-half hardware-flap" style={reduced?undefined:kind==='flip'?{rotateX:angle}:{rotateY:angle}} aria-hidden="true">
   <div className="hardware-inner"><span className="inner-glass-reflection"/><div className="inner-screen-suggestion"><i/><i/><i/></div></div>
   <div className="hardware-outer"><div className="device-camera-lenses"><i/><i/></div><span className="cover-display"><small>SENGAR SISTERS</small><strong>{kind==='flip'?'4.4M':'21.3K'}</strong><em>{kind==='flip'?'Stories worth opening.':'A bigger world inside.'}</em></span><span className="device-metal-glint"/></div>
  </motion.div>
  <motion.div className="unfolded-display" style={reduced?undefined:{opacity:screenOpacity,filter:screenBlur}}>{children}</motion.div>
  <div className="device-hinge" aria-hidden="true"/><span className="device-kind-label">{kind==='flip'?'THE FLIP / REEL PLAYS':'THE FOLD / FOLLOWERS'}</span>
 </div>
}

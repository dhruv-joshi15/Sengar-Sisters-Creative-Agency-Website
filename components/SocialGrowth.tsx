'use client';
import {useRef} from 'react';
import {motion,useScroll,useTransform,transform,cubicBezier} from 'framer-motion';
import {Heart,ArrowUpRight} from 'lucide-react';
import {Art} from './Art';
import {BrandSymbol} from './BrandMark';
import {caseStudy,contact} from '@/data/siteData';
import {ContactLink} from './ContactFlight';
import {useMotionPreference} from '@/hooks/useMotionPreference';
const tiles=['coffee','bottle','fashion','jewel','sculpture','botanical','bottle','jewel','coffee'];
const ease=cubicBezier(.42,0,.58,1);
export function SocialGrowth(){const ref=useRef<HTMLDivElement>(null);const reduced=useMotionPreference();const {scrollYProgress:p}=useScroll({target:ref,offset:['start end','end start']});const left=useTransform(p,transform([0,1],[60,-70],{ease})),middle=useTransform(p,transform([0,1],[-70,65],{ease})),right=useTransform(p,transform([0,1],[95,-85],{ease}));const rotate=useTransform(p,transform([0,.5,1],[-5,0,4],{ease}));return <div ref={ref} className="social-growth"><div className="social-growth-head"><BrandSymbol/><div><strong>A feed with a feeling.</strong><span>CONCEPT CONTENT / REAL CREATIVE ENERGY</span></div><span className="social-growth-dot"/></div><motion.div className="social-grid-stage" style={reduced?undefined:{rotate}}><div className="social-grid-window">{[left,middle,right].map((y,col)=><motion.div key={col} className="social-grid-column" style={reduced?undefined:{y}}>{tiles.slice(col*3,col*3+3).map((art,i)=><div key={`${art}-${i}`} className="social-grid-tile"><Art kind={art}/><span><Heart size={11}/> A LITTLE MORE FEELING</span></div>)}</motion.div>)}</div><div className="social-growth-sticker"><span>FROM FOLLOWERS</span><strong>to a <em>community.</em></strong><Heart size={18}/></div></motion.div><div className="social-growth-footer"><div><span>ILLUSTRATIVE TRANSFORMATION</span><strong>{caseStudy.before}<i>↗</i>{caseStudy.after}</strong></div><ContactLink channel="instagram" aria-label={`Visit ${contact.instagramHandle} on Instagram`}>{contact.instagramHandle}<ArrowUpRight size={17}/></ContactLink></div></div>}

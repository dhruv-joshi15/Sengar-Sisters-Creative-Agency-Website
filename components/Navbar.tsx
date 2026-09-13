'use client';
import {useEffect,useState,useCallback} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {Menu,ArrowUpRight} from 'lucide-react';
import {navigation} from '@/data/siteData';
import {ThemeToggle} from './ThemeToggle';
import {ContactLink} from './ContactFlight';
import {ChapterGuide} from './ChapterGuide';
import {useChapters} from '@/hooks/useChapters';
import {Modal} from './UI';
export function Navbar(){const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);const {active}=useChapters();const close=useCallback(()=>setOpen(false),[]);useEffect(()=>{const scroll=()=>setScrolled(window.scrollY>40);scroll();window.addEventListener('scroll',scroll,{passive:true});return()=>window.removeEventListener('scroll',scroll)},[]);return <><a href="#main" className="skip-link">Skip to content</a><header className={`navbar ${scrolled?'scrolled':''}`}><a className="wordmark" href="#home" aria-label="Sengar Sisters home">sengar sisters<span>CREATIVE STUDIO</span></a><nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n=><a href={`#${n.toLowerCase()}`} className={active===n.toLowerCase()?'active':''} key={n} aria-current={active===n.toLowerCase()?'location':undefined}>{n}</a>)}</nav><div className="nav-actions"><ThemeToggle/><ContactLink channel="whatsapp" className="nav-cta">Let’s talk <ArrowUpRight size={15}/></ContactLink><button className="icon-button menu-button" onClick={()=>setOpen(true)} aria-label="Open navigation" aria-expanded={open}><Menu size={22}/></button></div></header><ChapterGuide scrolled={scrolled}/><AnimatePresence>{open&&<Modal label="Navigation" onClose={close}><div className="mobile-menu"><span className="eyebrow">A LITTLE CREATIVE EXPLORATION</span>{navigation.map((n,i)=><motion.a key={n} href={`#${n.toLowerCase()}`} onClick={close} aria-current={active===n.toLowerCase()?'location':undefined} initial={{opacity:0,x:15}} animate={{opacity:1,x:0}} transition={{delay:i*.04}}><small>0{i+1}</small>{n}<ArrowUpRight/></motion.a>)}<span className="serif">Two sisters. Endless possibilities.</span></div></Modal>}</AnimatePresence></>}

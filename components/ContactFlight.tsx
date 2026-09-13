'use client';
import {createContext,useCallback,useContext,useEffect,useRef,useState,type AnchorHTMLAttributes,type MouseEvent,type ReactNode} from 'react';
import {AnimatePresence,motion,animate,useMotionValue} from 'framer-motion';
import {useMotionPreference} from '@/hooks/useMotionPreference';
import {contactHref,contactLabels,type ContactChannel} from '@/lib/contact';
type Flight={href:string;label:string;x:number;y:number;width:number;height:number};
type Launch=(event:MouseEvent<HTMLAnchorElement>,href:string,label:string)=>void;
const FlightContext=createContext<Launch|null>(null);
export function ContactFlightProvider({children}:{children:ReactNode}){
 const [flight,setFlight]=useState<Flight|null>(null);const busy=useRef(false);const reduced=useMotionPreference();
 const launch=useCallback<Launch>((event,href,label)=>{if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();if(busy.current)return;busy.current=true;const rect=event.currentTarget.getBoundingClientRect();setFlight({href,label,x:event.detail?event.clientX:rect.left+rect.width/2,y:event.detail?event.clientY:rect.top+rect.height/2,width:innerWidth,height:innerHeight})},[]);
 const finish=useCallback(()=>{if(!flight)return;const destination=flight.href;busy.current=false;setFlight(null);window.location.assign(destination)},[flight]);
 return <FlightContext.Provider value={launch}>{children}<AnimatePresence>{flight&&<PlaneJourney flight={flight} reduced={reduced} finish={finish}/>}</AnimatePresence></FlightContext.Provider>
}
function PlaneJourney({flight,reduced,finish}:{flight:Flight;reduced:boolean;finish:()=>void}){
 const path=useRef<SVGPathElement>(null);const plane=useRef<HTMLDivElement>(null);const drawing=useMotionValue(0);const [phase,setPhase]=useState(false);
 const {x,y,width:w,height:h}=flight;const ex=w+110,ey=h*.2;
 // A short swoop and a loop, fitted to the actual viewport and click position.
 const route=`M${x} ${y} C${w*.12} ${Math.min(h-40,y+h*.15)} ${w*.15} ${h*.17} ${w*.48} ${h*.28} C${w*.84} ${h*.42} ${w*.68} ${h*.76} ${w*.43} ${h*.52} C${w*.28} ${h*.25} ${w*.83} ${h*.1} ${ex} ${ey}`;
 useEffect(()=>{const curve=path.current;const element=plane.current;if(!curve||!element)return;const length=curve.getTotalLength();const controls=animate(0,1,{duration:reduced?.22:1.65,ease:[.42,0,.2,1],onUpdate:t=>{drawing.set(t);if(reduced){element.style.transform=`translate(${w*.5}px,${h*.42}px)`;element.style.opacity=String(Math.sin(t*Math.PI));return}const p=curve.getPointAtLength(t*length);const q=curve.getPointAtLength(Math.min(length,t*length+2));const angle=Math.atan2(q.y-p.y,q.x-p.x)*180/Math.PI;const scale=.65+Math.sin(t*Math.PI)*.55;element.style.transform=`translate(${p.x}px,${p.y}px) rotate(${angle}deg) scale(${scale})`;element.style.opacity=t>.93?String((1-t)/.07):'1'},onComplete:()=>setPhase(true)});return()=>controls.stop()},[route,reduced,drawing,w,h]);
 useEffect(()=>{if(!phase)return;const timer=setTimeout(finish,reduced?0:80);return()=>clearTimeout(timer)},[phase,finish,reduced]);
 return <motion.div className="contact-flight" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}><div className="flight-light"/><svg className="flight-route" viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true"><motion.path ref={path} d={route} style={{pathLength:reduced?0:drawing}} stroke="var(--flight-trail)" strokeWidth="1.5" strokeDasharray="5 8"/><path d={route} stroke="var(--flight-trail)" strokeWidth="20" opacity=".06"/></svg><div ref={plane} className="paper-plane" aria-hidden="true"><svg width="72" height="56" viewBox="0 0 72 56" fill="none"><path d="M3 3L69 28L3 53L15 29L3 3Z" fill="#f7ecdc"/><path d="M15 29L69 28L3 53L15 29Z" fill="#d8bdaa"/><path d="M3 3L69 28L15 29L3 3Z" fill="#fff9ed"/><path d="M15 29L69 28L22 36L15 29Z" fill="#a87975"/><path d="M15 29L22 36L19 44L15 29Z" fill="#e7cfc0"/></svg></div><motion.div className="flight-caption" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.3}} role="status"><span>A LITTLE HELLO, ON ITS WAY</span><p>Taking you to {flight.label}<i>↗</i></p></motion.div></motion.div>
}
export function ContactLink({channel,href:override,children,className='',...props}:Omit<AnchorHTMLAttributes<HTMLAnchorElement>,'href'|'target'|'onClick'>&{channel:ContactChannel;href?:string;children:ReactNode}){
 const launch=useContext(FlightContext);const href=contactHref(channel,override);
 return <a {...props} className={`contact-link ${className}`} href={href} data-flight={channel} onClick={e=>launch?.(e,href,contactLabels[channel])}>{children}</a>
}

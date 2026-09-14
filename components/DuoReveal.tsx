'use client';
import type {ReactNode} from 'react';
export function DuoReveal({open,children,vertical=false}:{open:boolean;reduced:boolean;children:ReactNode;vertical?:boolean}){return <div className={`duo-reveal ${vertical?'duo-vertical':''}`} data-open={open}><div className="duo-screen-content" inert={!open}>{children}</div></div>}

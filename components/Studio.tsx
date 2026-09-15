'use client';
import {PressEffects} from './PressEffects';
import {ContactFlightProvider} from './ContactFlight';
import {ChapterProvider} from '@/hooks/useChapters';

import {MotionConfig} from 'framer-motion';
import {Atmosphere} from './Atmosphere';

import {Navbar} from './Navbar';
import {Hero} from './Hero';
import {About,Services,Results,Process} from './Sections';
import {Portfolio} from './Portfolio';
import {InstagramWorlds} from './InstagramWorlds';
import {Contact} from './Contact';
export function Studio(){return <MotionConfig reducedMotion="user"><ContactFlightProvider><PressEffects/><ChapterProvider><Atmosphere/><Navbar/><main id="main"><Hero/><InstagramWorlds/><div className="chapter-flow chapter-flow-about"><About/></div><Services/><div id="work"><Portfolio/></div><Results/><div className="chapter-flow chapter-flow-process"><Process/></div><Contact/></main></ChapterProvider></ContactFlightProvider></MotionConfig>}

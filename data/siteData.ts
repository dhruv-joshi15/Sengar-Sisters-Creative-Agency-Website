export const navigation = ['Home', 'About', 'Services', 'Work', 'Results', 'Process', 'Contact'];
export const contact = { instagram: 'https://www.instagram.com/', email: 'hello@example.com', phone: '+910000000000', whatsapp: 'https://wa.me/910000000000' };
export const sisters: {name:string;role:string;bio:string;art:string;image?:string;instagram?:string}[] = [
 {name:'Aditi Sengar',role:'Co-founder · Strategy & storytelling',bio:'The bigger picture, the little details. Aditi brings a thoughtful eye to brand strategy and finds the story at the heart of every idea.',art:'portrait-one',image:'/images/aditi-sengar.jpg'},
 {name:'Apoorva Sengar',role:'Co-founder · Visuals & creative direction',bio:'An instinct for the unexpected. Apoorva turns that story into a visual world, from the first moodboard to the final frame.',art:'portrait-two'}
];
export const services = [
 ['Social Media Management','A considered presence, every day. We plan, publish and nurture a community around your brand.'],
 ['Content Strategy','A clear point of view. Audience insight, content pillars and a plan that gives every post a purpose.'],
 ['Reels & Short-form Content','Small films. Lasting impressions. Concepts, scripts and scroll-stopping edits made for the moment.'],
 ['Photography','Light, composition and feeling. Images that make people pause and look a little closer.'],
 ['Videography','Your story, in motion. Thoughtfully shot films that bring the texture of your brand to life.'],
 ['Photoshoots','From moodboard to magic. Art direction, styling and shoot planning with a cohesive vision.'],
 ['Branding & Logo Design','An identity that feels like you. Distinctive marks, palettes and visual systems built to belong together.'],
 ['Graphic Design','Good ideas, beautifully arranged. Expressive design across digital and print.'],
 ['Social Media Creatives','A feed with a feeling. Platform-ready graphics that balance consistency with fresh ideas.'],
 ['Editing & Post Production','The finishing touch. Colour, rhythm, sound and detail that make the final cut sing.']
];
export type Project = {id:number;name:string;client:string;category:string;art:string;format:'landscape'|'portrait'|'square';tags:string[];overview:string;result:string;image?:string;video?:string};
export const projects:Project[] = [
 {id:1,name:'A slower kind of living',client:'Maison Forma',category:'Branding & art direction',art:'sculpture',format:'landscape',tags:['Identity','Creative direction'],overview:'A quiet, tactile visual identity for a lifestyle label. We explored organic forms, warm materials and an unhurried approach to everyday rituals.',result:'A complete visual world, from identity to launch content.'},
 {id:2,name:'Golden hour, bottled',client:'Olea Beauty',category:'Product films & reels',art:'bottle',format:'portrait',tags:['Reels','Product shoot'],overview:'A sunlit series of short films that turns a simple skincare ritual into a sensory experience.',result:'A cohesive collection of product images and short films.'},
 {id:3,name:'Good mornings, reimagined',client:'Sunday Coffee',category:'Social strategy & content',art:'coffee',format:'square',tags:['Social media','Photography'],overview:'An inviting content direction for a neighbourhood coffee brand, built around slow mornings and small moments of connection.',result:'A refreshed social presence and a considered monthly content plan.'},
 {id:4,name:'Less ordinary. More you.',client:'Studio Muse',category:'Fashion campaign',art:'fashion',format:'landscape',tags:['Campaign','Videography'],overview:'A fashion story told through sculptural silhouettes, movement and a softly cinematic palette.',result:'An editorial campaign across stills, reels and social creatives.'},
 {id:5,name:'Little things, beautifully',client:'Lune Jewellery',category:'Photography & storytelling',art:'jewel',format:'portrait',tags:['Photography','Reels'],overview:'An intimate study of delicate details. We brought a jewellery collection to life through textures, light and close-up storytelling.',result:'A distinctive library of launch photography and reels.'},
 {id:6,name:'A fresh perspective',client:'Botanica',category:'Identity & social design',art:'botanical',format:'square',tags:['Branding','Graphic design'],overview:'An expressive yet restrained identity for a botanical brand, bringing a natural point of view into every touchpoint.',result:'Brand identity, packaging concepts and a flexible social design system.'}
];
export const results = [{value:12,suffix:'K',prefix:'0 → ',label:'Followers grown'},{value:340,suffix:'%',prefix:'+',label:'Engagement uplift'},{value:1.2,suffix:'M',prefix:'',label:'Reel views'},{value:3,suffix:'×',prefix:'',label:'Monthly reach'}];
export const caseStudy = {client:'Sunday Collective',handle:'sunday.collective',before:'1,200',after:'18K',description:'We gave a lifestyle brand a clearer voice, a warmer visual world and a reason for people to come back. Consistent storytelling. Thoughtful reels. A community that grew with the brand.'};
export const process = [{title:'Discover',copy:'We get curious. About your brand, your people and where you want to go.'},{title:'Create',copy:'We connect the dots. Strategy becomes concepts, shoots and a world of content.'},{title:'Publish',copy:'We find the right moment. Every piece, prepared for its platform and audience.'},{title:'Grow',copy:'We listen to what works. Learn, refine and keep building momentum.'}];
export const testimonials = [{quote:'They understood the feeling we wanted before we had the words for it. Every detail felt so considered.',name:'Lifestyle brand founder'},{quote:'Our content finally feels like us. A thoughtful creative partnership from the very first conversation.',name:'Independent beauty brand'},{quote:'Fresh ideas, a beautiful eye, and so much care. They made the whole creative process feel effortless.',name:'Café & hospitality team'}];

export const showreel: {video?:string;image?:string} = {};

export const chapters = [
 {id:'home',label:'Home'}, {id:'about',label:'About'},
 {id:'services',label:'Services'}, {id:'work',label:'Work'},
 {id:'results',label:'Results'}, {id:'showreel',label:'Showreel'},
 {id:'process',label:'Process'}, {id:'testimonials',label:'Testimonials'},
 {id:'contact',label:'Contact'}
] as const;
export const disciplines = ['stories','content','identities','films','connection'] as const;

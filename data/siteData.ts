export const navigation = ['Home', 'Worlds', 'About', 'Services', 'Work', 'Results', 'Process', 'Contact'];
export const contact = { instagram: 'https://www.instagram.com/_sengarsisters/', instagramHandle:'@_sengarsisters', email: 'aditisengar1411@gmail.com', phone: '+918839689424', whatsapp: 'https://wa.me/918839689424' };
export const sisters: {name:string;role:string;bio:string;art:string;image?:string;instagram?:string}[] = [
 {name:'Apoorva Sengar',role:'Founder · Visuals & creative direction',bio:'An instinct for the unexpected. Apoorva turns ideas into a visual world, from the first moodboard to the final frame.',art:'portrait-two',image:'/images/apoorva-sengar.jpeg'},
 {name:'Aditi Sengar',role:'Co-founder · Strategy & storytelling',bio:'The bigger picture, the little details. Aditi brings a thoughtful eye to brand strategy and finds the story at the heart of every idea.',art:'portrait-one',image:'/images/aditi-sengar.jpg'}
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
export const process = [{title:'Discover',copy:'We get curious. About your brand, your people and where you want to go.'},{title:'Create',copy:'We connect the dots. Strategy becomes concepts, shoots and a world of content.'},{title:'Publish',copy:'We find the right moment. Every piece, prepared for its platform and audience.'},{title:'Grow',copy:'We listen to what works. Learn, refine and keep building momentum.'}];
export const chapters = [
 {id:'home',label:'Home'}, {id:'worlds',label:'Worlds'}, {id:'about',label:'About'},
 {id:'services',label:'Services'}, {id:'work',label:'Work'},
 {id:'results',label:'Results'},
 {id:'process',label:'Process'},
 {id:'contact',label:'Contact'}
] as const;
export const disciplines = ['stories','content','identities','films','connection'] as const;

export const heroStory={eyebrow:'INDEPENDENT MINDS. SHARED IMAGINATION.',description:'We’re Apoorva & Aditi. A creative studio turning brand stories, good taste and life’s beautiful moments into something you can feel.'};

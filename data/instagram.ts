/** Public portfolio selections checked on 14 September 2026.
 * Covers are stored locally; original post URLs preserve collaborator attribution.
 * Engagement is a dated public snapshot, not a reach or viral-performance claim.
 */
export type InstagramPost = {
 id:string; title:string; kind:'reel'|'photo'; url:string; image:string; alt:string;
 credit:string; likes?:number; comments?:number;
};
export type InstagramWorld = {
 id:'studio'|'food'|'weddings'|'crispy'; name:string; handle:string; url:string; avatar:string;
 eyebrow:string; title:string; emphasis:string; description:string; note:string;
 services:string[]; posts:InstagramPost[];
 comments:{handle:string;quote:string;url:string}[];
};
export const instagramChecked='14–15 Sep 2026';
export const instagramWorlds:InstagramWorld[]=[
{
  id:'crispy',name:'The crispy edit',handle:'@foodby_crispygirl',url:'https://www.instagram.com/foodby_crispygirl/',avatar:'/images/instagram/crispy-avatar.jpg',
  eyebrow:'A NEW PLACE. A NEW FEELING.',title:'Good places.',emphasis:'Even better stories.',
  description:'Apoorva’s food channel is a little invitation to step out, look closer and find somewhere lovely. Café discoveries, dinner moods and dessert stops, told through atmospheric reels.',
  note:'Apoorva Sengar’s food account, managed by @_sengarsisters. A personal eye on cafés, dining and new places around Raipur.',
  services:['Café discoveries','Dining reels','Food & atmosphere'],
  posts:[
   {id:'maira',title:'A little wilderness after dark',kind:'reel',url:'https://www.instagram.com/reel/DT4fjKQiMaB/',image:'/images/instagram/crispy-DT4fjKQiMaB.jpg',alt:'Warm-lit resort architecture and a pool at Maira Serai, Kanha',credit:'@thatcrispygirl · Apoorva’s resort reel'},
   {id:'javer',title:'An invitation to look closer',kind:'reel',url:'https://www.instagram.com/reel/DUNO5nHAGfe/',image:'/images/instagram/crispy-DUNO5nHAGfe.jpg',alt:'Warm café pendant lights above a dessert display in the Javer India reel',credit:'@foodby_crispygirl · Javer India',likes:320,comments:24},
   {id:'dessert-stops',title:'A little something sweet',kind:'reel',url:'https://www.instagram.com/foodby_crispygirl/reel/DX_Se63MY0s/',image:'/images/instagram/crispy-desserts-hd.jpg',alt:'Sculptural ivory ceiling pieces above the illuminated Rasvi restaurant sign',credit:'@foodby_crispygirl · Dessert-place hopping',likes:226,comments:0}
  ],
  comments:[{handle:'@lifewithlovelee',quote:'This place knows how to serve happiness',url:'https://www.instagram.com/reel/DUNO5nHAGfe/'},{handle:'@wajo.kafe',quote:'Looks good, would definitely try them out..',url:'https://www.instagram.com/reel/DZCLac9sDlV/'},{handle:'@your_redwine',quote:'One of the best property 🧚🤍',url:'https://www.instagram.com/reel/DT4fjKQiMaB/'}]
 },

 {
  id:'studio',name:'The studio',handle:'@_sengarsisters',url:'https://www.instagram.com/_sengarsisters/',avatar:'/images/instagram/studio-avatar.jpg',
  eyebrow:'BRANDS WITH A POINT OF VIEW',title:'A little detail.',emphasis:'A lasting impression.',
  description:'Brand stories, product discoveries and creator-led reels. An eye for the details that make a business feel distinctive—and a story people want to follow.',
  note:'Social media · Media production · Product photography · Influencer marketing. Based on the studio’s public profile; working across India.',
  services:['Brand storytelling','Product shoots','Creator-led reels'],
  posts:[
   {id:'bags',title:'A bag for every occasion',kind:'reel',url:'https://www.instagram.com/thatcrispygirl/reel/DZC7CndtFUQ/',image:'/images/instagram/studio-bags-hd.jpg',alt:'Apoorva presenting a collection of occasion bags in a boutique',credit:'@thatcrispygirl · Studio collaboration',likes:402,comments:8},
   {id:'jewellery',title:'Jewellery with a personal touch',kind:'reel',url:'https://www.instagram.com/arham_imitation_raipur/reel/DWUCwHfMB8O/',image:'/images/instagram/studio-jewellery-hd.jpg',alt:'A jewellery retailer presenting the handcrafted carnival collection',credit:'@arham_imitation_raipur × @_sengarsisters',likes:789,comments:155},
   {id:'emotions',title:'An everyday kind of luxury',kind:'reel',url:'https://www.instagram.com/emotionsbydarshanofficial/reel/DYxMbonJWjR/',image:'/images/instagram/studio-emotions-hd.jpg',alt:'Apoorva introducing imitation jewellery at Emotions by Darshan',credit:'@emotionsbydarshanofficial · Studio collaboration',likes:148,comments:19}
  ],
  comments:[{handle:'@_tushar_dewangan',quote:'Apoorva day by day 📈 ⬆️ Editing, bgm, voice 🔥🔥 Keep growing yrr ❤️',url:'https://www.instagram.com/reel/DZC7CndtFUQ/'},{handle:'@explorewithsparsh',quote:'Kya baat hai 👏👏',url:'https://www.instagram.com/reel/DZC7CndtFUQ/'},{handle:'@_officialpriyamandal',quote:'Wwwwoooww😮🔥',url:'https://www.instagram.com/reel/DYxMbonJWjR/'}]
 },
 {
  id:'food',name:'The food edit',handle:'@your_foodieredwine',url:'https://www.instagram.com/your_foodieredwine/',avatar:'/images/instagram/food-avatar.jpg',
  eyebrow:'GOOD TASTE. IN EVERY FRAME.',title:'For the places',emphasis:'you want to linger.',
  description:'Coffee rituals, beautifully plated food and spaces with a feeling. Aditi’s food journal turns a café visit or a dinner into a small, sensory story.',
  note:'Food aesthetics through Aditi’s lens. Café discoveries, dining experiences and favourite frames from Raipur and beyond.',
  services:['Food photography','Café atmospheres','Hospitality reels'],
  posts:[
   {id:'pause',title:'A moment at Pause',kind:'reel',url:'https://www.instagram.com/your_foodieredwine/reel/DSZQ2TQjD-b/',image:'/images/instagram/food-pause-hd.jpg',alt:'A drink on a café table outside Pause, a modern coffee place',credit:'@your_foodieredwine · Pause',likes:37,comments:0},
   {id:'underdoggs',title:'An atmosphere worth discovering',kind:'reel',url:'https://www.instagram.com/foodby_crispygirl/reel/DUbCvtFDAl_/',image:'/images/instagram/food-underdoggs-hd.jpg',alt:'An atmospheric restaurant lounge with dark interiors, warm lighting and yellow seating',credit:'@foodby_crispygirl · Food-channel collaboration',likes:1341,comments:12},
   {id:'koya',title:'A table worth coming back to',kind:'photo',url:'https://www.instagram.com/your_foodieredwine/p/DIThsQTsil6/',image:'/images/instagram/food-koya-hd.jpg',alt:'Green dumplings in a bamboo steamer with dipping sauces at Koya',credit:'@your_foodieredwine · Koya, Raipur',likes:11,comments:2}
  ],
  comments:[{handle:'@_yukti_ydv',quote:'The ambience yrr😍😍',url:'https://www.instagram.com/reel/DUbCvtFDAl_/'},{handle:'@lifewithlovelee',quote:"It's beautiful 😍😍😍",url:'https://www.instagram.com/reel/DUbCvtFDAl_/'},{handle:'@neeraj.salam',quote:'Yummy 😋',url:'https://www.instagram.com/p/DIThsQTsil6/'}]
 },
 {
  id:'weddings',name:'The wedding diary',handle:'@shaadireelriwaz',url:'https://www.instagram.com/shaadireelriwaz/',avatar:'/images/instagram/weddings-avatar.jpg',
  eyebrow:'THE BIG DAY. THE LITTLE MOMENTS.',title:'Not just a wedding.',emphasis:'A whole feeling.',
  description:'The anticipation, the friendships, the family and the beautiful in-between. Wedding reels and behind-the-scenes stories that keep the feeling of the day close.',
  note:'Wedding aesthetic reels, shot on iPhone and managed by Sengar Sisters. Candid moments, bridal details and celebrations, made for a beautifully personal diary.',
  services:['Wedding reels','Candid BTS','Bridal details'],
  posts:[
   {id:'wedding-day',title:'The feeling before forever',kind:'reel',url:'https://www.instagram.com/_suri_la_rishta_/reel/DaXtIE6JR5M/',image:'/images/instagram/wedding-day-hd.jpg',alt:'A bride in a floral outfit and a groom in ivory sharing a moment in a garden',credit:'@_suri_la_rishta_ · Shot by @shaadireelriwaz',likes:144,comments:0},
   {id:'brotherhood',title:'The people who make the day',kind:'reel',url:'https://www.instagram.com/shaadireelriwaz/reel/DaqaeFyiCs3/',image:'/images/instagram/wedding-brotherhood-hd.jpg',alt:'Two wedding guests in burgundy and black suits sharing a playful moment',credit:'@shaadireelriwaz · Wedding BTS',likes:139,comments:13},
   {id:'bridal-details',title:'The details before “I do”',kind:'reel',url:'https://www.instagram.com/_suri_la_rishta_/reel/DaaClEetKuf/',image:'/images/instagram/wedding-details-hd.jpg',alt:'Bridal jewellery arranged on a vivid pink outfit beside a golden Buddha sculpture',credit:'@_suri_la_rishta_ · Shot by @shaadireelriwaz',likes:160,comments:7}
  ],
  comments:[{handle:'@shritikakochar',quote:'Prettiest Bride🧿❤️',url:'https://www.instagram.com/reel/DaaClEetKuf/'},{handle:'@_priyal_luniya_',quote:'gorgeous bride 👰🫠',url:'https://www.instagram.com/reel/DaaClEetKuf/'},{handle:'@jain.bhavna',quote:'Cuties 😍',url:'https://www.instagram.com/reel/DaqaeFyiCs3/'}]
 }

];
export const defaultInstagramWorld='crispy';

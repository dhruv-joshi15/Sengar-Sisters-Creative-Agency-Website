/** Public portfolio selections checked on 14 September 2026.
 * Covers are stored locally; original post URLs preserve collaborator attribution.
 * Engagement is a dated public snapshot, not a reach or viral-performance claim.
 */
export type InstagramPost = {
 id:string; title:string; kind:'reel'|'photo'; url:string; image:string; alt:string;
 credit:string; likes?:number; comments?:number;
};
export type InstagramWorld = {
 id:'studio'|'food'|'weddings'; name:string; handle:string; url:string; avatar:string;
 eyebrow:string; title:string; emphasis:string; description:string; note:string;
 services:string[]; posts:InstagramPost[];
 reaction:{handle:string;quote:string;postId:string};
};
export const instagramChecked='14 Sep 2026';
export const instagramWorlds:InstagramWorld[]=[
 {
  id:'studio',name:'The studio',handle:'@_sengarsisters',url:'https://www.instagram.com/_sengarsisters/',avatar:'/images/instagram/studio-avatar.jpg',
  eyebrow:'BRANDS WITH A POINT OF VIEW',title:'A little detail.',emphasis:'A lasting impression.',
  description:'Brand stories, product discoveries and creator-led reels. An eye for the details that make a business feel distinctive—and a story people want to follow.',
  note:'Social media · Media production · Product photography · Influencer marketing. Based on the studio’s public profile; working across India.',
  services:['Brand storytelling','Product shoots','Creator-led reels'],
  posts:[
   {id:'bags',title:'A bag for every occasion',kind:'reel',url:'https://www.instagram.com/thatcrispygirl/reel/DZC7CndtFUQ/',image:'/images/instagram/studio-bags.jpg',alt:'Apoorva presenting a collection of occasion bags in a boutique',credit:'@thatcrispygirl · Studio collaboration',likes:401,comments:8},
   {id:'jewellery',title:'Jewellery with a personal touch',kind:'reel',url:'https://www.instagram.com/arham_imitation_raipur/reel/DWUCwHfMB8O/',image:'/images/instagram/studio-jewellery.jpg',alt:'A jewellery retailer presenting the handcrafted carnival collection',credit:'@arham_imitation_raipur × @_sengarsisters',likes:789,comments:155},
   {id:'emotions',title:'An everyday kind of luxury',kind:'reel',url:'https://www.instagram.com/emotionsbydarshanofficial/reel/DYxMbonJWjR/',image:'/images/instagram/studio-emotions.jpg',alt:'Apoorva introducing imitation jewellery at Emotions by Darshan',credit:'@emotionsbydarshanofficial · Studio collaboration',likes:148,comments:19}
  ],
  reaction:{handle:'@_tushar_dewangan',quote:'Apoorva day by day 📈 ⬆️\nEditing, bgm, voice 🔥🔥 Keep growing yrr ❤️',postId:'bags'}
 },
 {
  id:'food',name:'The food edit',handle:'@your_foodieredwine',url:'https://www.instagram.com/your_foodieredwine/',avatar:'/images/instagram/food-avatar.jpg',
  eyebrow:'GOOD TASTE. IN EVERY FRAME.',title:'For the places',emphasis:'you want to linger.',
  description:'Coffee rituals, beautifully plated food and spaces with a feeling. Aditi’s food journal turns a café visit or a dinner into a small, sensory story.',
  note:'Food aesthetics through Aditi’s lens. Café discoveries, dining experiences and favourite frames from Raipur and beyond.',
  services:['Food photography','Café atmospheres','Hospitality reels'],
  posts:[
   {id:'pause',title:'A moment at Pause',kind:'reel',url:'https://www.instagram.com/your_foodieredwine/reel/DSZQ2TQjD-b/',image:'/images/instagram/food-pause.jpg',alt:'A drink on a café table outside Pause, a modern coffee place',credit:'@your_foodieredwine · Pause',likes:37,comments:0},
   {id:'underdoggs',title:'An atmosphere worth discovering',kind:'reel',url:'https://www.instagram.com/foodby_crispygirl/reel/DUbCvtFDAl_/',image:'/images/instagram/food-underdoggs.jpg',alt:'An atmospheric restaurant lounge with dark interiors, warm lighting and yellow seating',credit:'@foodby_crispygirl · Food-channel collaboration',likes:1341,comments:12},
   {id:'koya',title:'A table worth coming back to',kind:'photo',url:'https://www.instagram.com/your_foodieredwine/p/DIThsQTsil6/',image:'/images/instagram/food-koya.jpg',alt:'Green dumplings in a bamboo steamer with dipping sauces at Koya',credit:'@your_foodieredwine · Koya, Raipur',likes:11,comments:2}
  ],
  reaction:{handle:'@_yukti_ydv',quote:'The ambience yrr😍😍',postId:'underdoggs'}
 },
 {
  id:'weddings',name:'The wedding diary',handle:'@shaadireelriwaz',url:'https://www.instagram.com/shaadireelriwaz/',avatar:'/images/instagram/weddings-avatar.jpg',
  eyebrow:'THE BIG DAY. THE LITTLE MOMENTS.',title:'Not just a wedding.',emphasis:'A whole feeling.',
  description:'The anticipation, the friendships, the family and the beautiful in-between. Wedding reels and behind-the-scenes stories that keep the feeling of the day close.',
  note:'Wedding aesthetic reels, shot on iPhone and managed by Sengar Sisters. Candid moments, bridal details and celebrations, made for a beautifully personal diary.',
  services:['Wedding reels','Candid BTS','Bridal details'],
  posts:[
   {id:'wedding-day',title:'The feeling before forever',kind:'reel',url:'https://www.instagram.com/_suri_la_rishta_/reel/DaXtIE6JR5M/',image:'/images/instagram/wedding-day.jpg',alt:'A bride in a floral outfit and a groom in ivory sharing a moment in a garden',credit:'@_suri_la_rishta_ · Shot by @shaadireelriwaz',likes:144,comments:0},
   {id:'brotherhood',title:'The people who make the day',kind:'reel',url:'https://www.instagram.com/shaadireelriwaz/reel/DaqaeFyiCs3/',image:'/images/instagram/wedding-brotherhood.jpg',alt:'Two wedding guests in burgundy and black suits sharing a playful moment',credit:'@shaadireelriwaz · Wedding BTS',likes:139,comments:13},
   {id:'bridal-details',title:'The details before “I do”',kind:'reel',url:'https://www.instagram.com/_suri_la_rishta_/reel/DaaClEetKuf/',image:'/images/instagram/wedding-details.jpg',alt:'Bridal jewellery arranged on a vivid pink outfit beside a golden Buddha sculpture',credit:'@_suri_la_rishta_ · Shot by @shaadireelriwaz',likes:160,comments:7}
  ],
  reaction:{handle:'@shritikakochar',quote:'Prettiest Bride🧿❤️',postId:'bridal-details'}
 }
];

import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'mexico',
  title: 'Mountains and Mole in Mexico',
  date: new Date(2019, 5 /* 0 is January. */, 20 /* 0 is the first of the month. */),
  description: 'Running out of water into waterfalls',
  categories: [CATEGORIES.NORTH_AMERICA],
  previousPostUrl: 'baja',
  thumbnailUrl: 'https://imgur.com/aF3Okp8.jpg',
  content: [
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'I think that I have spent the most condensed with Rhys than I have with practically anyone in the world in these last two and a half months. After a week of surfing, ',
    },
    {
      type: CONTENT_TYPES.INTERNAL_LINK,
      text: 'tacos',
      url: '/baja',
      inline: true,
      target: '_blank'
    },
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: ' and margaritas in Mazatlan, it was time for Rhadam to once again be Rhys and Adam. So off we went on our separate journeys.',
    },

    // [_MG_5599.CR2][_MG_5600.CR2]

    'Leaving Mazatlan I biked solo towards Durango and into the Sierra Madre Occidental mountain range, my first REAL mountain range. And when I say mountain range I mean that, without hyperbole, I biked uphill for straight days. As In I did not go down. At all. For two days. I went from 0ft elevation to 9,500 over 90 miles.',

    // https://i.imgur.com/ijtTZfG.jpg
    // https://i.imgur.com/p9gINNf.jpg

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Epic Mountains!',
        url: 'https://i.imgur.com/ijtTZfG.jpg',
        thumbnailUrl: 'https://i.imgur.com/ijtTZfGt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A mountain train bridge',
        url: 'https://i.imgur.com/p9gINNf.jpg',
        thumbnailUrl: 'https://i.imgur.com/p9gINNft.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Before I even started climbing however, I had a classic Adam moment: My tire sidewall tore hugely. A man tried to help me by booting (covering up hole so tube doesn’t peak out) my tire with a literal boot. A couple miles later my tube exploded. On a multi-modal adventure I walked the two miles back to the truck stop, rode of those nifty motorized bikes to a bike shop, then hitchhiked with a car back my bike. I get back and my new motorcycle friend Luis, who was watching my bike, was lounging on a full sized inflatable couch in front of the convenience store. Motorcycle travelling is definitely the glamping of two wheeled travel.',

    'Honestly, I’m still not sure what to make of the relationship between bikes and bikes. I mean we both have two wheels, helmets, and a hatred for cars, the only discernible difference being the badass leather jackets with skulls on them to our skin-tight spandex. A group of cyclists is also called a peloton instead of a biker gang which I guess is also uncool. There is no moral to the story, I just want to be included.',

    'Anyways, I bike straight uphill, which is actually challenging unlike motorcycling, and pass through an insane amount of tunnels. It had to have been over 50, the most memorable being a 3 km pedestrian with failing lighting. Only every tenth light actually worked. I felt like I was biking through an optical illusion, sometimes simply unable to see.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Tunnel illusion 1',
        url: 'https://i.imgur.com/nRuvvyQ.jpg',
        thumbnailUrl: 'https://i.imgur.com/nRuvvyQt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Tunnel illusion 2',
        url: 'https://i.imgur.com/z2jaQtC.jpg',
        thumbnailUrl: 'https://i.imgur.com/z2jaQtCt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    // https://i.imgur.com/nRuvvyQ.jpg
    // https://i.imgur.com/z2jaQtC.jpg
    //[_MG_5665.CR2] or this 1 with a rotation [_MG_5654.CR2]

    'Getting to the top of the climb I was dead tired. The previous morning I took 3 hours getting ready, spending 10 minutes between doing anything to stare straight ahead at the hill. When I finally reached the top though, I was able to find a reminiscent happiness of crisp mountain pines and a small breeze reminding me of biking through the Rockies years ago. ',

    // https://i.imgur.com/aF3Okp8.jpg
    // https://i.imgur.com/uN8dWa2.jpg
    // https://i.imgur.com/9596MLG.jpg

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Nice mountains',
        url: 'https://imgur.com/aF3Okp8.jpg',
        thumbnailUrl: 'https://imgur.com/aF3Okp8t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mountains',
        url: 'https://i.imgur.com/uN8dWa2.jpg',
        thumbnailUrl: 'https://i.imgur.com/uN8dWa2.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mountainss',
        url: 'https://i.imgur.com/9596MLG.jpg',
        thumbnailUrl: 'https://i.imgur.com/9596MLG.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    //[_MG_5704.CR2][_MG_5723.CR2][_MG_5743.CR2]

    'I reached Durango and was greeted by my friend Adria who I had met in Mazatlan. She is the perfect tour guide, having worked in every building in the city and is even friends with the governor and mayor. I spent two nights in Durango before heading to my next host, a Mexican family of Jonathan and his Mother.',

    'On the way to Zacatecas I saved a baby horse. It’s rear legs were trapped in barbed wire in a way that attempting to free itself only gauged it more. I tried first helping her calm down with food but she would only try to jump away in fear, entrapping herself further in the fence. Her mom was staring at me, nostrils flaring, as I got closer. Eventually I just had to go for it so I grabbed both her legs and pulled them up and back to get them unbarbed, almost getting them over before she kicked out of my hands which were now covered in blood. The mom had gotten inches from my face to protect her daughter. I grabbed them again and shoved them up through the get as she kicked again and finally made it through. She hobbled to the rest of her string (horse family) who were waiting for her. I found myself wanting the horse to turn around a neigh at me like in the movies but instead I was graced with the beauty of watching the string of horses walking into the forest.',

    // https://i.imgur.com/dsolUBA.jpg
    // https://i.imgur.com/m04UOTQ.jpg

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Horses 1',
        url: 'https://i.imgur.com/dsolUBA.jpg',
        thumbnailUrl: 'https://i.imgur.com/dsolUBAt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Horses 2',
        url: 'https://i.imgur.com/m04UOTQ.jpg',
        thumbnailUrl: 'https://i.imgur.com/m04UOTQt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    // https://i.imgur.com/eG4vhR0.jpg

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'The wilds of Mexico',
      url: 'https://i.imgur.com/eG4vhR0.jpg',
      thumbnailUrl: 'https://i.imgur.com/eG4vhR0t.jpg',
      // grid: 'col-sm-6', // This is out of 12 how much space it takes up.
    },

    // [_MG_5755.CR2][_MG_5754.CR2]
    // [_MG_5759.CR2] [phone vid?] w

    'Reaching Zacatecas I was immediately welcomed as son and brother into Jonathan’s home and treated to delicious food paired with smoothies from Jonathan’s mom’s cute garage restaurant. After meeting me and another couple doing Seattle to Patagonia Jonathan has actually decided to start his own bike tour to Argentina! After leaving Zacatecas I ended up meeting the inflatable lounger, Luis, on the road who invited me to stay with him in the next city, Aguas Calientes. The vulnerability of cycling alone has been met with such great hospitality in Mexico. In Morelia I was taken in by Renato, Gloria, and Shawn, Mexico City - Mike, and Alixco - Tere, all making me feel at home the moment I step into their house.',

    // https://i.imgur.com/2DxJhzi.jpg
    // [_MG_5768.CR2]
    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Mexican family',
      url: 'https://i.imgur.com/2DxJhzi.jpg',
      thumbnailUrl: 'https://i.imgur.com/2DxJhzit.jpg',
      // grid: 'col-sm-6', // This is out of 12 how much space it takes up.
    },

    'The ride into Mexico City was an especially eventful day, biking through forest fires and the even wilder streets of CDMX (Cuidad Mexico). To get to the city I biked through a mountain pass and could make out clouds of white smoke billowing out of the forest up ahead. I thought it was just burning trash and I didn’t think I would head that direction anyways but an hour later I was face to face with a smoldering forest. I could hear people fighting the fire up the mountainside as rocks careened down to the road. I kept biking past and at the top of the pass I saw a massive group of about 50 cyclists who had also just reached the top. Being the one group of people that hold people like me in high esteem we took about 40 selfies and then they headed down as I went for a swim in a nearby river.',

    // https://i.imgur.com/NlT6Gwk.jpg
    // https://i.imgur.com/hc0XHTf.jpg

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Fires 1',
        url: 'https://i.imgur.com/NlT6Gwk.jpg',
        thumbnailUrl: 'https://i.imgur.com/NlT6Gwkt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Fires 2',
        url: 'https://i.imgur.com/hc0XHTf.jpg',
        thumbnailUrl: 'https://i.imgur.com/hc0XHTft.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    // https://i.imgur.com/uprQPqE.jpg
    // https://i.imgur.com/miglfld.jpg
    // https://i.imgur.com/Hyo4XzW.jpg

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Beautiful landscapes of Mexico',
        url: 'https://imgur.com/uprQPqE.jpg',
        thumbnailUrl: 'https://imgur.com/uprQPqEt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Town',
        url: 'https://i.imgur.com/miglfld.jpg',
        thumbnailUrl: 'https://i.imgur.com/miglfld.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Houses lining a hill vertically',
        url: 'https://i.imgur.com/Hyo4XzW.jpg',
        thumbnailUrl: 'https://i.imgur.com/Hyo4XzW.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    // [_MG_5838.CR2][_MG_5841.CR2]
    // [_MG_5821.CR2][_MG_5849.CR2][_MG_5854.CR2]

    'By the time I got to the city it was almost dark but I had made it, right? I plug my exact address and I have 25 miles left to bike…. What kind of monstrosity is this city. I was extremely lucky though and met the cyclists from the top at the edge of the city. They ended up caravaning with me all the way to Mike’s home with a van in front and back, blaring lights and horns on nighttime highways. I have no clue how I would have made it without them. My few CDMX days were wonderful, highlighted by late night stoned babbling with Mike and his friends.',

    'My next destination was, similar to the prior, a fiery mountain ride. This time, however, it was a volcano. I spent two days heading towards the volcano Iztaccihuatl from CDMX. I was shaken awake on the second night with the most extraordinary alarm, the neighboring volcano erupting. I woke to a boom and watched a huge mass of smoke billow out of the top. After biking the last bit of volcano to 13,000 ft I hid my bike and bags in the tall grass. Equipped with spandex shorts a t-shirt and no shoes (I only have flip flops and bike shoes and I LOVE being barefoot) I started my trek up Iztaccihuatl. I saw a baby rattlesnake in the first mile which made me stop and consider whether this was a stupid idea but I decided maybe and kept on. The volcano was stunning in its grandeur. Cliffs scattered about haphazardly, a sign of the strength of this fiery giant. The crest of the volcano was obscured by a storm raging around the summit. I couldn’t go any higher than the refuge hut where I could hear the hail and rain battering the ground. I also tried to fly my drone but the elevation was so high that the controls simply did not work and I crashed it into a cliff. I am very embarrassed. Returning to the base I recovered all of my things and biked to yet another fiery destination, Atlixco and my host Tere.',
    //[volcano smoke vid][phone pic (idk if 1 or both)] camera was momentarily broken

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/WrCztvgMLnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    'I spent the next few days touring rose gardens and being paraded around by the spunky Atlixco bike club. I was even lured into singing in front of an entire bar. A bright three days of dancing, singing, and laughing flew by but I was late for my flight, so I continued South.',

    'I was actually very late for my flight from Oaxaca to San Francisco so I had to take a bus (cheating? Is there such a thing?). I headed home to celebrate my brother’s graduation and visit with extended family. I have almost made it to Guatemala and when I return in two weeks hopefully my tire woes will cease, as I will be equipped with a new off-pavement bike ready to take on the volcanoes of Central America.',

    'Love',
    'Adam'
  ]
};

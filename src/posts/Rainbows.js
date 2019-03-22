import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'Rainbows',
  title: 'Tacos at the end of the rainbow',
  date: new Date(2019, 2 /* 0 is January. */, 19 /* 0 is the first of the month. */),
  description: 'Clothing optional',
  categories: [CATEGORIES.NORTH_AMERICA],
  previousPostUrl: 'Redwoods',
  content: [

    
    'We finally made it North to South through the entire US, yet instead of the enlightenment we thought we were guaranteed, we are burdened with even more unexplained mysteries. Countless rainbows dissipating before we can find their end, archaic symbols spray painted on the side of the road, unable to find where one pedal stroke ends and another begins, and still no conclusion as to whether the earth is actually round. Our one solace is that we have finally found a town with more feet than feet.',

    // [Rhys rainbow] [USA spray-paint] [Harmony USA pic(feet)]
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rhys infront of the rainbow',
        url: 'https://imgur.com/XD6BqA5.jpg',
        thumbnailUrl: 'https://imgur.com/XD6BqA5t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'USA',
        url: 'https://imgur.com/zGo6uwC.jpg',
        thumbnailUrl: 'https://imgur.com/zGo6uwC.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Harmony village sign - more feet than feet',
        url: 'https://imgur.com/2MxWOij.jpg?1',
        thumbnailUrl: 'https://imgur.com/2MxWOij.jpg?1',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },
    
    'Like a good rainbow, born of rain and sun, our ride from San Francisco has been a beautiful dichotomy. The rainy serenity of Big Sur to the sprawling urban desert of bustling LA. The luxury of resorts like Esalen and Rancho La Puerta to the roguish freedom of camping in roadside cutouts. The pious fields of soft hearted artichokes to the hedonistic flamboyance of strawberries. Adam when he is hungry to Adam after four tacos.',
    
    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Adam biking in misty trees',
      url: 'https://imgur.com/rCnKThC.jpg',
      thumbnailUrl: 'https://imgur.com/rCnKThC.jpg',
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam sitting in Big Sur',
        url: 'https://imgur.com/BAo9aBm.jpg',
        thumbnailUrl: 'https://imgur.com/BAo9aBm.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
    },/*, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking in misty trees',
        url: 'https://imgur.com/rCnKThC.jpg',
        thumbnailUrl: 'https://imgur.com/rCnKThC.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }*/, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'LA River',
        url: 'https://imgur.com/yaqka8Z.jpg?2',
        thumbnailUrl: 'https://imgur.com/yaqka8Z.jpg?2',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },
    
    'We spent a week in Oakland with Adam’s family, repairing bikes, meeting friends, going to shows, and almost forgetting our southbound nature. We also bought a drone and are not sure if it is an issue that we have more cameras than underwear. After a week, feeling rested yet restless, we again mounted our metal steeds towards our next majestic destination: Big Sur.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Lizard with strawberries in background',
        url: 'https://imgur.com/QjjwPmz.jpg',
        thumbnailUrl: 'https://imgur.com/QjjwPmzt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'RV from back with rainbow',
        url: 'https://imgur.com/4z6Lvr9.jpg',
        thumbnailUrl: 'https://imgur.com/4z6Lvr9t.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Big Sur was phenomenal, and it wasn’t just the clothing optional hot springs. The cliffs jut out of turquoise water as you ride feet from 1000 foot drops. The Big Sur ‘towns’ listed on Google Maps were no more than a lone store. Google Maps also hinted at hot springs along Highway 1 but there ended up being no access except through the reservation only Esalen Institute. Previously unknown to us, the Esalen institute is a world famous new-age retreat center that hosted Gorbachev and helped thaw the Cold War (apparently it wasn’t bikes on ferries). We spent some time at the entrance pondering mischievous ways to get into the hot springs when a battered pick up truck filled with plants pulled up. The driver, Chris, has a soft spot for travellers and invited us to visit the next day.',
    
    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Big Sur camp',
      url: 'https://i.imgur.com/rW4HpqE.jpg',
      thumbnailUrl: 'https://i.imgur.com/rW4HpqE.jpg',
    },
    
    'We spent the night camping and in the morning speed packed our tent and beelined it to the hot springs for a morning soak. The springs are clothing optional which in reality means nakie only and, perched on the cliffs, have spectacular views of the waves crashing on Big Sur. We spent the day eating wonderful food, soaking, reading, and writing while other guests took classes on improv, the art of divination, loving-kindness meditation, and the like.',
    
    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Esalen',
      url: 'https://imgur.com/l6l8eXf.jpg',
      thumbnailUrl: 'https://imgur.com/l6l8eXf.jpg',
    },
    
    'The next day, skin supple and glowing, we rode the rest of Big Sur into the land of zebras, cows, and elephant seals (so big, smelly, and cute with their dangly snouts). One of the most telltale signs that we had entered SoCal is that everyone suddenly had 10 recommendations of surf spots in Mexico. It was all rolling green hills and prancing cows the rest of the way to LA. As we got closer we also started to see many charred remains of trees and swathes of houses under repair. Remnants of the brutal fires from the past year. Climate change is fun. Thank God for LA and its 500 sq miles of car centric bliss (we are not huge fans of LA). We did have wonderful hosts in LA - Rhys’ Mom’s friend’s Joe and Christine - but we weren’t sad to leave the city.',
    
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Cows windows screensaver',
        url: 'https://imgur.com/jg7D1E5.jpg',
        thumbnailUrl: 'https://imgur.com/jg7D1E5.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam and Cows',
        url: 'https://imgur.com/iVh4jQc.jpg',
        thumbnailUrl: 'https://imgur.com/iVh4jQc.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Elephant Seal',
        url: 'https://imgur.com/s9Md5dr.jpg?1',
        thumbnailUrl: 'https://imgur.com/s9Md5dr.jpg?1',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Oil Tanker',
        url: 'https://imgur.com/Ru2dClh.jpg',
        thumbnailUrl: 'https://imgur.com/Ru2dClh.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Leaves Sun',
        url: 'https://imgur.com/C6GHDsX.jpg',
        thumbnailUrl: 'https://imgur.com/C6GHDsX.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Biking into LA" src="https://www.youtube.com/embed/enV2quzfkTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    
    'We rode the next two days inland to Deer Park Monastery nestled in the boulder strewn hills of Escondido past. On the way we camped on the beach and in a forest at the base of the mountains. The second night we were kept up for an hour thinking we were going to be attacked by what turned out to be a deer. Fearsome beasts, deer. Those beady eyes and razor hooves.',
    
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Sunset Bike',
        url: 'https://imgur.com/ZeVQdzr.jpg',
        thumbnailUrl: 'https://imgur.com/ZeVQdzr.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Beach camp',
        url: 'https://imgur.com/htg5EDw.jpg',
        thumbnailUrl: 'https://imgur.com/htg5EDw.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },
    
    'We were at the monastery for their day of mindfulness. Our favorite activity ended up being deep relaxation meditation which is adult naptime and culminates in a monk with a booming yet soothing monk voice singing. That night we rode into San Diego to stay with Rhys’ friend Nick. Only one day from the border!',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.HTML,
        html: '<iframe width="335" height="245" style="margin-right: 5px;" title="Biking into Mexico" src="https://www.youtube.com/embed/N__y6w6MISk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rhys Border',
        url: 'https://i.imgur.com/bVQG1C8.jpg?3',
        thumbnailUrl: 'https://i.imgur.com/bVQG1C8.jpg?3',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }/*, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mama Taco',
        url: 'https://imgur.com/4Punk2T.jpg',
        thumbnailUrl: 'https://imgur.com/4Punk2T.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }*/]
    },
    
    'Our final day in USA was uneventful and crossing the border into Tecate was too easy except for almost being trapped in limbo getting our bikes stuck in the USA -> Mexico turnstile. Crossing was so easy in fact that we didn’t get the stamp and visa we were supposed to get and had to return the next day to get it. We also had the wild surprise of Rhys’ mom also being in Tecate - we swear we did not plan this at all. We met up with her the next day at a spa called Rancho La Puerta and were graciously invited to stay the night by its owner. Our taco counter is already at 20 and fumbling spanish has become mildly less fumbling. Today we are starting down Baja towards Spring Break in Cabo (chistes).'  
  ]
};

// First paragraph
// _MG_4197 - Rainbow pic
// _MG_4200 - Rhys in Monterey
// _MG_4153 - Deer looking at camera
// _MG_4154 - Adam biking by some redwoods

// _MG_4180.jpg - RV in the dirt with rainbow
// _MG_4178.jpg - cute ground squirrel
// _MG_4185.jpg - RV in the dirt from front

// _MG_4176.jpg - A flowering succulent
// _MG_4170.jpg - Lizard sillouette with strawberry in the background

// _MG_4211.jpg - Not Art

// https://imgur.com/PDhNfH8 - rainbow before monterey
// https://imgur.com/XD6BqA5 - Rhys holding up helmet in monterey
// https://imgur.com/q9NnbF1 - Rhys smiling at Monterey

// https://imgur.com/a/mGMjdGX - biking past artichoke fields

// https://imgur.com/3XuJ7Q3 - RV in sand from back

// http://imgur.com/a/rzrzz4O - big sur camp
// https://imgur.com/RjreDDn - adam pensive on rock with view

// http://imgur.com/a/fOyq0T6 - elephant seals
// https://imgur.com/2MxWOij - more feet than feet Harmony

// https://imgur.com/DNOQFt0 - biking in the night

// https://imgur.com/LhcWTua - adam in morning with sunrise
// https://imgur.com/cNQv4Fo - sunrise gradient

// https://imgur.com/vi8XKyU - people working on boat

// http://imgur.com/a/9RNU0R3 - crossing the border
// http://imgur.com/gallery/9DbGMw6 - with mum in Tecate

// https://imgur.com/EzbSscV.gifv - drone in mexico

// https://imgur.com/a/rS1cBUc

// https://youtu.be/enV2quzfkTE - biking into LA
// https://youtu.be/pFkT82cwQf8 - Video of the rainbow camp

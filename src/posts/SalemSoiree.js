import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'Salem',
  title: 'Short Term Goals to Salem',
  date: new Date(2019, 1 /* 0 is January. */, 11 /* 0 is the first of the month. */),
  description: 'Just in time for a party in Salem',
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    // https://imgur.com/a/uqmI7Oy
    'While it\'s wonderful witnessing volcano vistas and mooing at cows, we need something bigger to push us up those hills. Biking to Argentina is a good long term goal - but it\'s easy to get lost in the instant gratification of nutter butters dipped in peanut butter. Luckily we have our carrot on a stick, a lovers soiree valentines party in Salem, OR hosted by the illustrious L.',
    // https://imgur.com/NEeLWy1 - DSC00171.JPG - Leaving the snow next to the lake - adam
    // https://imgur.com/Fuy7pZO - DSC00190.JPG - A cold marsh
    // https://imgur.com/9EyvAti - _MG_3626.CR2 - Photo of snow mountain
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking next to Hood Canal',
        url: 'https://imgur.com/NEeLWy1.jpg',
        thumbnailUrl: 'https://imgur.com/NEeLWy1t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A cold marsh',
        url: 'https://imgur.com/Fuy7pZO.jpg',
        thumbnailUrl: 'https://imgur.com/Fuy7pZOt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A cold marsh',
        url: 'https://imgur.com/9EyvAti.jpg',
        thumbnailUrl: 'https://imgur.com/9EyvAtit.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },
    'Our first day of driven, goal oriented biking was from Dosewallips to Olympia where we momentarily escaped the snow. That night we stayed in our first warmshowers (couch surfing for bikers) at Beth and Pete’s home and got to hear some of their epic stories biking 28,000 miles around the world in addition to a belly warming lentil soup. We had another warmshowers the next night with Joel in Kelso, WA who treated us to another fantastic meal and amazing stories about fighting fires and walking the Spanish Caminos. Next we made our way to Portland where Rhys’ friend Zoe hosted us for 2 nights in a wonderful college house that felt just like home. We’ve already received so much care and compassion from so many strangers on the road and we are learning how to accept it knowing we can’t immediately give back.',
    // https://www.youtube.com/watch?v=G_7rPbJCC9A - Raven dragging toy
    // https://imgur.com/3OA9hFk - DSC00221.JPG - Past Olympia
    // https://imgur.com/aDReiO4 - DSC00242.JPG - Past Mt Saint Helens
    // https://imgur.com/ALbXZEs - DSC00245.JPG - Tractor line
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking past the capital in Olympia, WA',
        url: 'https://imgur.com/3OA9hFk.jpg',
        thumbnailUrl: 'https://imgur.com/3OA9hFkt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking on a road with a view of Mt. Saint Helens',
        url: 'https://imgur.com/aDReiO4.jpg',
        thumbnailUrl: 'https://imgur.com/aDReiO4t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A line of old tractors in the country',
        url: 'https://imgur.com/ALbXZEs.jpg',
        thumbnailUrl: 'https://imgur.com/ALbXZEst.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking past the capital in Olympia, WA',
        url: 'https://imgur.com/tmTQ0AN.jpg',
        thumbnailUrl: 'https://imgur.com/tmTQ0ANt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Cranes moving wood onto boats',
        url: 'https://imgur.com/vWxnG4m.jpg',
        thumbnailUrl: 'https://imgur.com/vWxnG4mt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A boat on the Columbia river infront of a spewing factory',
        url: 'https://imgur.com/KRMoGrj.jpg',
        thumbnailUrl: 'https://imgur.com/KRMoGrjt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },
    // https://imgur.com/tmTQ0AN - MG_3412.CR2 - Bridge and wood - photo through fence
    // https://imgur.com/vWxnG4m - _MG_3413.CR2 - Lifts moving wood onto boats
    // https://imgur.com/KRMoGrj - _MG_3428.CR2 - A boat on the river infront of a factory
    'These 3 days of biking were punctuated by the towering elegance of the volcanoes of the Pacific Northwest. It was easy to tell that Mt. Saint Helens was in love because what else could have caused something to blow its top like that, and there is definitely some tension between Mt. Hood and Adams in the way that Hood is straining its peak. I mean what is love if not a volcano.',
    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Adam looking out at a mountain near sunset',
      url: 'https://imgur.com/XAmgT8P.jpg',
      thumbnailUrl: 'https://imgur.com/XAmgT8Pt.jpg',
    },
    // https://imgur.com/XAmgT8P - Adam looking out at a mountain
    'Our final day of biking into Salem felt like an introductory meteorology class. We got sunned on then hailed on then rained on then hailed on then snowed on and happily we kept biking on. We also visited a world renowned pumpkin patch/bakery with a penchant for history. Finally, after a swath of snow, the clouds gave way to Oregon’s pristine state capitol, Salem.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking next to chopper',
        url: 'https://imgur.com/eTwwa6r.jpg',
        thumbnailUrl: 'https://imgur.com/eTwwa6rt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Shed on fire in the country',
        url: 'https://imgur.com/0YkuGXA.jpg',
        thumbnailUrl: 'https://imgur.com/0YkuGXAt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Big flock of birds',
        url: 'https://imgur.com/Y8QpAD6.jpg',
        thumbnailUrl: 'https://imgur.com/Y8QpAD6t.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rhys in the rain',
        url: 'https://imgur.com/CX1N84u.jpg',
        thumbnailUrl: 'https://imgur.com/CX1N84ut.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }]
    },
    // https://imgur.com/eTwwa6r - _MG_3528.CR2 - Adam biking next to chopper
    // https://imgur.com/0YkuGXA - _MG_3568.CR2 - Shed on fire in the country
    // https://imgur.com/Y8QpAD6 - _MG_3564.CR2 - Big flock of birds
    // https://imgur.com/CX1N84u - _MG_3578.CR2 - Rhys in the rain
    'All that can be said of the lover’s soiree - for the sake of future professional prospects - is that there was a love letter station and that Mt. Saint Helens would have loved to be there. In the end, however, we are Southbound souls, so in the morning we set off towards the blistering winds of Oregon’s rugged coast.'
  ]
};

/*



DSC00204.JPG - Lots of mailboxes



_MG_3605.CR2 - House out in the country




_MG_3636.CR2 - Adam biking down road in light

*/
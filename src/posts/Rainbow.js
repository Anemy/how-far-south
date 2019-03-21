import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'Rainbow',
  title: 'Rainbow',
  date: new Date(2019, 2 /* 0 is January. */, 19 /* 0 is the first of the month. */),
  description: '"That\'s where they\'re going to be building the wall"',
  categories: [CATEGORIES.NORTH_AMERICA],
  previousPostUrl: 'Redwoods',
  content: [
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'Some nice text to start it off ',
    },
    {
      type: CONTENT_TYPES.INTERNAL_LINK,
      inline: true,
      text: 'Redwoods',
      url: '/Redwoods'
    },
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: ', some more text.',
    },
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking on a wet road with some snow',
        url: 'https://imgur.com/jmWHY6r.jpg',
        thumbnailUrl: 'https://imgur.com/jmWHY6rt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Sheep',
        url: 'https://imgur.com/IBieN73.jpg',
        thumbnailUrl: 'https://imgur.com/IBieN73t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Hobbit trail sign',
        url: 'https://imgur.com/3IBticz.jpg',
        thumbnailUrl: 'https://imgur.com/3IBticzt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    }
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
// https://imgur.com/q9NnbF1 - Rhys at Monterey

// https://imgur.com/3XuJ7Q3 - RV in sand from back

// https://imgur.com/RjreDDn - adam pensive on rock with view

// https://imgur.com/DNOQFt0 - biking in the night

// https://imgur.com/LhcWTua - adam in morning with sunrise
// https://imgur.com/cNQv4Fo - sunrise gradient

// https://imgur.com/vi8XKyU - people working on boat

// https://imgur.com/a/rS1cBUc

// https://youtu.be/enV2quzfkTE
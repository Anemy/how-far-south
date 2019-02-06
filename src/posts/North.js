import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'North',
  title: 'How Far North?',
  date: new Date(2019, 1 /* 0 is January. */, 3 /* 0 is the first of the month. */),
  description: '"This is the first time it\'s snowed this year"', // N̶o̶r̶t̶h̶ S̶o̶u̶t̶h̶
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    'Seattle -> Edmunds -> Ferry -> Kingston -> The Detour/Snow -> Yurt -> Dosewallips State Park',
    'Yesterday, Jan. 2, Rhys and I pedaled off into the clouds after a special "bye bye bagel brunch" with many old friends and new friends.',
    'The past week was a roller coaster of saying goodbyes to ',
    '',
    , {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'bike',
        url: 'bike.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'bike',
        url: 'bike.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
        // description: 'A unkown bike we took off of unsplash'
      }]
    }/*, {
    //   type: CONTENT_TYPES.HTML,
    //   html: 'This is some html with <strong>strong</strong> and then a link: <a href="/mailing">nice</a>. ok we done'
    }*/
    /* , {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Rhys\'s website',
      url: 'https://rhyshowell.com',
      target: '_blank'
    }*/
  ]
};


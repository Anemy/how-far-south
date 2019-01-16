import { CONTENT_TYPES } from './constants';

export default {
  url: 'route',
  title: 'Our Route',
  date: new Date(2019, 0 /* 0 is January. */, 30 /* 0 is the first of the month. */),
  description: 'How we\'re going from Seattle -> Argentina',
  content: [
    'Through deserts, over mountains, around volcanoes - this post is all about the route we\'ve taken so far, and our plan for places we have not yet reached. Bear in mind if we plan to go somewhere a ways out we might not make it there. Adventures arise, detours pop up, and there are more than enough roads to choose from to connect our start with our destination.',
    'Our route takes us through a number of countries:',
    {
      type: CONTENT_TYPES.LIST,
      content: [
        'USA',
        'Mexico',
        'Guatemala',
        'El Salvador',
        'Honduras?',
        'Nicaragua',
        'Costa Rica',
        'Panama',
        'Columbia',
        'Ecuador',
        'Peru',
        'Bolivia',
        'Chile',
        'Argentina'
      ]
    }, {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.GEO,
        country_code: 'USA',
        url: 'bike.jpg',
        grid: 'col-sm-8', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.HEADING,
        text: 'USA',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    }
  ]
};

/**

We leave ourselves open to detours.


How we can do this:

Countries
USA
Mexico
Guatemala
El Salvador
Honduras?
Nicaragua
Costa Rica
Panama
Columbia
Ecuador
Peru
Bolivia
Chile
Argentina

*/

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
https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast/

Central America
http://travellingtwo.com/resources/10questions/centralamerica
http://nicholasgault.com/known-hotspots-in-latin-america/
http://www.rideforclimate.com/LA.php

Mexico
https://bajadivide.com/route-details/
https://www.davestravelpages.com/cycling-mexico-bike-ride/
https://www.tales-on-tyres.com/blog/category/Mexico
https://www.headed-south.com/home/2018/11/14/baja-tiempo
Maybe avoid Michoacán
Caution in Chiapas - 2 cyclists killed kilometer 158 of the road between Ocosingo and San Cristóbal de Las Casas


Guatemala
https://maggiemwoo.wordpress.com/2014/03/22/reflection-on-guatemala-dangers-of-travelling-and-not-travelling/
http://www.contoursofacountry.com/2014/10/30/the-bit-in-the-middle/


El Salvador
Honduras?

https://maggiemwoo.wordpress.com/2014/04/07/reflection-on-honduras-the-four-cs-in-conversations-in-honduras/

Nicaragua
Costa Rica
Panama
Columbia
Ecuador
Peru
Bolivia
Chile
Argentina
Probably wont hit it but avoid Mendoza (Ruta 40)

*/

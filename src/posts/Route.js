import { CONTENT_TYPES } from './constants';

export default {
  url: 'route',
  title: 'Our Route',
  date: new Date(2019, 0 /* 0 is January. */, 30 /* 0 is the first of the month. */),
  description: 'How we\'re going from Seattle -> Argentina',
  content: [
    // 'Through deserts, over mountains, around volcanoes - this post is all about the route we\'ve taken so far, and our plan for places we have not yet reached. Adventures arise, plans change, and there are more than enough roads to choose from to connect our start with our destination - the future route is not set, it is only guessed at.',
    // 'Our route takes us through a number of countries:',
    'Here are the countries we\'re planning to cycle through:',
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
        countryCode: 'US',
        grid: 'col-sm-7'
      }, {
        type: CONTENT_TYPES.HEADING,
        text: 'The United States (West Coast)',
        grid: 'col-sm-5'
      }]
    }, {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.HEADING,
        text: 'Mexico',
        grid: 'col-sm-5'
      }, {
        type: CONTENT_TYPES.GEO,
        countryCode: 'MX',
        grid: 'col-sm-7'
      }]
    }, {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.GEO,
        countryCode: 'MX',
        grid: 'col-sm-7'
      }, {
        type: CONTENT_TYPES.HEADING,
        text: 'Mexico',
        grid: 'col-sm-5'
      }]
    }
  ]
};

/**

We leave ourselves open to detours.

Full maps:
http://www.welostthemap.com/map.html



How we can do this:

Countries
USA
https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast/

Central America
http://travellingtwo.com/resources/10questions/centralamerica
http://nicholasgault.com/known-hotspots-in-latin-america/
http://www.rideforclimate.com/LA.php
https://www.crazyguyonabike.com/doc/locales/?o=1mr&locale_id=7160710&doctype=journal
http://www.bikepacking.com/tag/bike-touring-central-america/

Mexico
https://bajadivide.com/route-details/ - https://theredheadednomad.com/category/baja-divide/
https://www.davestravelpages.com/cycling-mexico-bike-ride/
http://www.whileoutriding.com/category/central-america-2/mexico/page/2
https://www.tales-on-tyres.com/blog/category/Mexico
https://www.headed-south.com/home/2018/11/14/baja-tiempo
https://theredheadednomad.com/category/mexico/
Fly La Paz to Guadalajara
Guadalajara to Valle de Bravo to Taxco, to Oaxaca, to Chiapas, to Lago Atitlan
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

Miles (Approx.):
1400 - West Coast USA -> Seattle to San Diego
1600 - Baja Divide, Mexico - 3000
1400 - Guadalara Mexico -> Lago Atitlan - 4400
800 - Lago Atitlan -> Nicaragua - 5200
900 - Nicaragua -> Panama City - 6100
900 - Medellín -> Quito - 7000
1800 - Quito -> Cusco - 8800
900 - Cusco -> Sucre - 9700
900 - Sucro -> Copiapó - 10600
2600 Copiapó -> Ushuaia - 13200

*/


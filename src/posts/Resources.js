import { CONTENT_TYPES, CATEGORIES } from './constants';

const plain_blog_links = [
  'https://www.highlux.co.nz/alaska-to-argentina-route/',
  'https://tales-on-tyres.com',
  'https://www.bikehikesafari.com/cycle-touring/cycling-from-alaska-to-argentina/',
  'https://www.headed-south.com/',
  'https://maggiemwoo.wordpress.com/category/cycle-from-vancouver-to-patagonia/',
  'https://tomsbiketrip.com',
  'https://www.davestravelpages.com/biking-the-pacific-coast-highway/',
  'http://www.contoursofacountry.com/the-americas/',
  'http://www.rideforclimate.com/LA.php',
  'http://www.ribbonofroad.com/route.html',
  'http://elpedalero.com/',
  'https://pedalingtheglobe.com',
  'http://www.roughchop.net/',
  'https://www.cyclingabout.com/get-started-on-cyclingabout-com/',
  'https://www.crazyguyonabike.com/',
  'https://bluewaterbicycles.com/blog/',
  'http://www.bikewanderer.com/'
];

/*
To add:
https://www.rivardrides.com
http://onlyamazingdays.com/
*/

function prettyLinkForPrint(link) {
  let prettyLink = link;

  if (link.indexOf('https://') === 0) {
    prettyLink = link.substring('https://'.length);
  } else if (link.indexOf('http://') === 0) {
    prettyLink = link.substring('http://'.length);
  }

  if (prettyLink.indexOf('www.') === 0) {
    prettyLink = prettyLink.substring('www.'.length);
  }

  return prettyLink;
}

const blog_links = plain_blog_links.map(link => ({
  url: link,
  text: prettyLinkForPrint(link)
}));

const video_links = [{
  url: 'https://www.youtube.com/channel/UCqiYX6cqxQI9CqhH_kvHeOw',
  text: 'Iohan is biking Alaska -> Argentina and makes great videos - https://www.youtube.com/channel/UCqiYX6cqxQI9CqhH_kvHeOw'
}, {
  url: 'https://www.youtube.com/user/CyclingAboutOfficial',
  text: 'Cycling About - Cycling Argentina -> North -  https://www.youtube.com/user/CyclingAboutOfficial'
}, {
  url: 'https://www.youtube.com/watch?v=WXiSo3yIfP8',
  text: 'A great video about cycling the Baja Divide by https://tales-on-tyres.com - https://www.youtube.com/watch?v=WXiSo3yIfP8'
}, {
  url: 'https://www.youtube.com/watch?v=hZ6kBuchYDg',
  text: 'Alaska -> Argentina https://www.youtube.com/watch?v=hZ6kBuchYDg'
}, {
  url: 'https://vimeo.com/303378531',
  text: 'Cycling the Peru Divide: https://vimeo.com/303378531'
}]

export default {
  url: 'resources',
  title: 'Resources',
  date: new Date(2019, 0 /* 0 is January. */, 18 /* 0 is the first of the month. */),
  description: 'Related blogs and information sources for bike touring.',
  categories: [CATEGORIES.NORTH_AMERICA],
  content: [
    'Here are some of the resources we used to get information for our bike trip, as well as some fun reads, and inspiration. This post is a sort of a pasted list.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Detailed route information',
    }, {
      type: CONTENT_TYPES.LIST,
      content: [{
        type: CONTENT_TYPES.HTML,
        html: 'bikepacking.com - This site is awesome! It contains a number of gear reviews, trip stories, and very detailed routes people have done and recomend with some great analysis: <a data-title="http://www.bikepacking.com/bikepacking-routes/" href="http://www.bikepacking.com/bikepacking-routes/" rel="noopener noreferrer">http://www.bikepacking.com/bikepacking-routes/</a>'
      }, {
        type: CONTENT_TYPES.HTML,
        html: 'Pacific Coast (Maps): <a data-title="https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast" href="https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast/" rel="noopener noreferrer">https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast/</a>'
      }, {
        type: CONTENT_TYPES.HTML,
        html: 'The Baja Divide is a tough route through Baja California, Mexico, which we are going to do bits and parts of. The site has lots of information you need for it: <a data-title="https://bajadivide.com/route-details/" href="https://bajadivide.com/route-details/" rel="noopener noreferrer">https://bajadivide.com/route-details/</a>'
      }]
    }, {
      type: CONTENT_TYPES.HEADING,
      text: 'Good Blog Links (In no particular order)',
    }, {
      type: CONTENT_TYPES.LIST,
      content: blog_links.map(blogItem => ({
        type: CONTENT_TYPES.EXTERNAL_LINK,
        text: blogItem.text,
        url: blogItem.url
      }))
    }, {
      type: CONTENT_TYPES.HEADING,
      text: 'Video & video channel links',
    }, {
      type: CONTENT_TYPES.LIST,
      content: video_links.map(videoItem => ({
        type: CONTENT_TYPES.EXTERNAL_LINK,
        text: videoItem.text,
        url: videoItem.url
      }))
    }, {
      type: CONTENT_TYPES.HEADING,
      text: 'Books',
    }, {
      type: CONTENT_TYPES.LIST,
      content: [
        {
          type: CONTENT_TYPES.HTML,
          html: 'I have read the Adventure Cycle Touring Handbook cover to cover. It\'s a great resources for choosing your route, gear, and general information about bike touring (beginner friendly): <a data-title="https://www.amazon.com/Adventure-Cycle-Touring-Handbook-Worldwide-Trailblazer/dp/190586468X" href="https://www.amazon.com/Adventure-Cycle-Touring-Handbook-Worldwide-Trailblazer/dp/190586468X" rel="noopener noreferrer">https://www.amazon.com/Adventure-Cycle-Touring-Handbook-Worldwide-Trailblazer/dp/190586468X</a>'
        },
        '* Looking for some suggestions.'
      ]
    }, {
      type: CONTENT_TYPES.HEADING,
      text: 'Miscellaneous',
    }, {
      type: CONTENT_TYPES.LIST,
      content: [{
        type: CONTENT_TYPES.EXTERNAL_LINK,
        text: 'Facebook group for bike touring',
        url: 'https://www.facebook.com/groups/BicycleTouringBikepacking'
      }]
    },
    'That\'s all folks!',
    'Have a link you would like to add to the list? Leave a comment! Thanks!'
  ]
};


/*

Here are some of the resources we used to get information for our bike trip, as well as some fun reads, and inspiration. This post is more of just a pasted list.

Detailed route information resources:
This site is awesome! It contains a number of gear reviews, trip stories, and very detailed routes people have done and recomend with some great analysis:
http://www.bikepacking.com/bikepacking-routes/
Pacific Coast (Maps):
https://www.adventurecycling.org/routes-and-maps/adventure-cycling-route-network/pacific-coast/
The Baja Divide is a route through Baja California, Mexico, which we are going to do bits and parts of. The site has lots of information you need for it.
https://bajadivide.com/route-details/


Facebook group for bike touring:
https://www.facebook.com/groups/BicycleTouringBikepacking

Books:
I read the Adventure Cycle Touring Handbook cover to cover. It's a great resources for choosing your route, gear, and general information about bike touring.
https://www.amazon.com/Adventure-Cycle-Touring-Handbook-Worldwide-Trailblazer/

{
  type: CONTENT_TYPES.EXTERNAL_LINK,
  url: 'https://www.highlux.co.nz/alaska-to-argentina-route/',
  text: 'https://www.highlux.co.nz/alaska-to-argentina-route/'
}

Blog links (in no particular order):
https://www.highlux.co.nz/alaska-to-argentina-route/
https://tales-on-tyres.com
https://www.bikehikesafari.com/cycle-touring/cycling-from-alaska-to-argentina/
https://www.headed-south.com/
https://maggiemwoo.wordpress.com/category/cycle-from-vancouver-to-patagonia/
https://tomsbiketrip.com
https://www.davestravelpages.com/biking-the-pacific-coast-highway/
http://www.contoursofacountry.com/the-americas/
http://www.rideforclimate.com/LA.php
http://www.ribbonofroad.com/route.html
http://elpedalero.com/
https://pedalingtheglobe.com
http://www.roughchop.net/
http://www.pro8000.com/
https://www.cyclingabout.com/get-started-on-cyclingabout-com/
https://www.crazyguyonabike.com/
http://www.bikewanderer.com/

Videos:
http://www.bikewanderer.com/ - https://www.youtube.com/channel/UCqiYX6cqxQI9CqhH_kvHeOw
https://www.cyclingabout.com -  https://www.youtube.com/user/CyclingAboutOfficial
Baja Divide: https://www.youtube.com/watch?v=WXiSo3yIfP8 by https://tales-on-tyres.com 
Peru Divide: https://vimeo.com/303378531
Alaska -> Argentina https://www.youtube.com/watch?v=hZ6kBuchYDg

That's all folks!
Have a link to add? Leave a comment!

*/
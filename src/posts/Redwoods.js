import { CONTENT_TYPES, CATEGORIES } from './constants';

export default {
  url: 'Redwoods',
  title: 'Redwoods 101',
  date: new Date(2019, 1 /* 0 is January. */, 25 /* 0 is the first of the month. */),
  description: 'We biked past the road closed sign',
  categories: [CATEGORIES.NORTH_AMERICA],
  thumbnailUrl: 'https://imgur.com/cXRGtUhm.jpg',
  previousPostUrl: 'Salem',
  nextPostUrl: 'Rainbows',
  content: [
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'Hands frozen and covered in crab guts - we had to question the life decisions that led to this moment. It started with a morning ',
    },
    {
      type: CONTENT_TYPES.INTERNAL_LINK,
      inline: true,
      text: 'break-up with Salem',
      url: '/Salem'
    },
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: ', stomach queasy and heads throbbing, we ate a quick burrito at Tony’s Taco Shop and started pedalling for the coast. By the night we made it 10 miles from the coast and stealth camped for the first time, nervously whispering with the pitter patter of the rain. The next day was slated to be the start of a new storm; a 7 day rain deluge in theme with our trip.',
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
    },
    'We soppingly stopped by a diner in the morning for coffee, water and pancakes where a local warned us of 50mph headwinds on the coast. Luckily Oregon Coast’s winds blow predominantly from the north and the 50mph seemed excessive. It had to be the fear mongering modern media. It was not the fear mongering media. The wind was 50mph and was blowing in our faces. Adam was only blown off his bike once and  pedalling 1mph into the wind felt more like a Soulcycle session than bike touring. Windy, winding, and wet we made our way down the beautiful Oregon Coast past fern laden cliffs, sepulchral bogs of skeletal trees, and beaches that almost made you want to swim.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam reaching the ocean',
        url: 'https://imgur.com/lvhq9AA.jpg',
        thumbnailUrl: 'https://imgur.com/lvhq9AAt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Wind blowing on the coast',
        url: 'https://imgur.com/ZWwdSbN.jpg',
        thumbnailUrl: 'https://imgur.com/ZWwdSbNt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Spectral tree',
        url: 'https://imgur.com/WIs9cwW.jpg',
        thumbnailUrl: 'https://imgur.com/WIs9cwWt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam looking out at an empty beach',
        url: 'https://imgur.com/CZAETDa.jpg',
        thumbnailUrl: 'https://imgur.com/CZAETDat.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }]
    },
    'After several days biking along the coast we ran headlong into our next adventure, testing the power of trust and meaning of hospitality. It started with us looking for a dry warm place to rest our heads after a few days of wet biking. We messaged Brian on WarmShowers, the only host for miles, and he responded with the strangest messages we have received. We could stay with him with the stipulation that we stay the entire weekend and help out with the town’s annual Gorse Blossom Festival (allow our labor to be exploited). At first it was funny but he also had no reviews while supposedly hosting over 500 cyclists which was disconcerting. We showed up to his house after doing a bike-by to check for bloody axes. Against our expectations we were graciously greeted by his 10 year-old daughter who immediately showed us around, getting us towels and making us feel at home.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Message from Brian',
        url: 'https://imgur.com/Mo99vSm.jpg',
        thumbnailUrl: 'https://imgur.com/Mo99vSmt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Texts with Brian',
        url: 'https://imgur.com/3GX8Tpk.jpg',
        thumbnailUrl: 'https://imgur.com/3GX8Tpkt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking past road closed',
        url: 'https://imgur.com/7I3HF9t.jpg',
        thumbnailUrl: 'https://imgur.com/7I3HF9tt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },
    'The entire weekend ended up being an odd experience. We were woken at the break of dawn to be shuttled to Port Orford to eviscerate a couple hundreds of crabs, breaking them in half and removing their lungs and guts to be sold at the Gorse Blossom festival. The Gorse festival is an absurd event celebrating an invasive plant that is essentially one giant thorn and whose oily spines led to the town burning down in the early 1900s. Our next task was to man a table at the festival advocating for recreational access to a river we had never seen. If Adam’s urban planning degree had taught him anything it is to sound convincing while knowing nothing about the policy he’s advocating for. With a “Brian for port commissioner” button pinned to his shirt and coffee in hand, Adam schmoozed the Bandonians.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Evicerating crab',
        url: 'https://imgur.com/Tp5jwg8.jpg',
        thumbnailUrl: 'https://imgur.com/Tp5jwg8t.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam representing the qoeuille river water trails project',
        url: 'https://imgur.com/vYY3fTY.jpg',
        thumbnailUrl: 'https://imgur.com/vYY3fTYt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    }, // https://youtu.be/qfnhELRsnOs

    'After surviving our weekend of servitude we continued our journey down the Oregon Coast and Adam got to meet the preeminent sage Sarge. Amazingly we heard about Sarge days earlier from Brian and Mike while eviscerating crabs. They told us about a character who only travels by bike and was awed that music was coming out of Mike’s phone. Sarge is one of those people that almost lives in a different universe. We met him in Gold Beach after he had biked three days to go to the bank which was closed for Presidents Day. He spent the winter sailing to Finland from Oregon and when stateside lives in treehouses in the redwoods. He preaches kindness and in the words of Adam, has that magic twinkle in his eye reserved for those who have truly learned how to live. Bike touring gives you a glimpse into the world of nomads; we wander day by day, place by place.',

    // https://imgur.com/4J762CM
    // https://imgur.com/DW8y9y9
    // https://imgur.com/lvaVOZ6
    // https://imgur.com/gK6ygTQ
    // https://imgur.com/1zfZ0l0
    // https://imgur.com/6RSIajK

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Oregon coast',
        url: 'https://imgur.com/lvaVOZ6.jpg',
        thumbnailUrl: 'https://imgur.com/lvaVOZ6t.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking infront of the Oregon coast',
        url: 'https://imgur.com/6RSIajK.jpg',
        thumbnailUrl: 'https://imgur.com/6RSIajKt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Sunset on the Oregon coast',
        url: 'https://imgur.com/1zfZ0l0.jpg',
        thumbnailUrl: 'https://imgur.com/1zfZ0l0t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A fishing boat off the coast',
        url: 'https://imgur.com/DW8y9y9.jpg',
        thumbnailUrl: 'https://imgur.com/DW8y9y9t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Another nice shot of the coast',
        url: 'https://imgur.com/4J762CM.jpg',
        thumbnailUrl: 'https://imgur.com/4J762CMt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'Tidal islands and outcroppings came and went as we crept over the hilly, craggly coastline of Oregon. After a couple more days of southerly biking we crossed the state line into California. While the state line is only marked by dispensaries like ‘Blazed on the Border’, the rapidly changing biome makes the two states unmistakably distinct.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam with ocean and cliffs in background',
        url: 'https://imgur.com/0lSr6kR.jpg',
        thumbnailUrl: 'https://imgur.com/0lSr6kRt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking with ocean in background',
        url: 'https://imgur.com/l6l983k.jpg',
        thumbnailUrl: 'https://imgur.com/l6l983kt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking next to beach',
        url: 'https://imgur.com/ED41B1t.jpg',
        thumbnailUrl: 'https://imgur.com/ED41B1tt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'A few hours into California we came to an obstacle in the road - a closed sign. If your path ever crosses a road closed sign sometimes the only thing you can do is bike around it. You’ll satisfy a deep curiosity knowing the secret of the closed road and - when luck is on your side - your wheels will be the only rubber on the track.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam standing next to the road closed blocker',
        url: 'https://imgur.com/3N32Zir.jpg',
        thumbnailUrl: 'https://imgur.com/3N32Zirt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Redwoods',
        url: 'https://imgur.com/vrzG3Iq.jpg',
        thumbnailUrl: 'https://imgur.com/vrzG3Iqt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Our bikes have carried us through countless landscapes transformed by logging. The old growth redwood forest gave a tantalizing glimpse into a landscape unmarred by human progress. 10 miles of hushed, carless, winding road lightly coated with the winter season’s tree detritus became my favorite stretch of the trip so far. There was a serene calmness that comes with biking under the towering canopy. The ancient, immense complexity of these forests led us to question the relationships that we have with cities and other human environments.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Redwoods',
        url: 'https://imgur.com/ECaMh8L.jpg',
        thumbnailUrl: 'https://imgur.com/ECaMh8Lt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Redwoods',
        url: 'https://imgur.com/rgmvDLM.jpg',
        thumbnailUrl: 'https://imgur.com/rgmvDLMt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Redwoods',
        url: 'https://imgur.com/VMsUTQ4.jpg',
        thumbnailUrl: 'https://imgur.com/VMsUTQ4t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'I unzipped the side of the tent in the morning to a light drizzle which retreated into a mist that blew overhead before unleashing the sun.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam looking at fog',
        url: 'https://imgur.com/iFzlyQF.jpg',
        thumbnailUrl: 'https://imgur.com/iFzlyQFt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam turning in fog',
        url: 'https://imgur.com/cXRGtUh.jpg',
        thumbnailUrl: 'https://imgur.com/cXRGtUht.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Foggy field',
        url: 'https://imgur.com/rEKNHuV.jpg',
        thumbnailUrl: 'https://imgur.com/rEKNHuVt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Sun breaking through the fog',
        url: 'https://imgur.com/C1EJABr.jpg',
        thumbnailUrl: 'https://imgur.com/C1EJABrt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }]
    },

    'A few days into California we biked on the Avenue of the Giants, a quiet 31 mile section of road that twists through old growth redwoods, swerving to avoid the occasional three thousand year old behemoth. That evening we camped under huge redwoods next to a numbing stream I took a quick bath in.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.HTML,
        html: '<iframe width="215" height="143" style="margin-right: 5px;" title="video of dog playing" src="https://www.youtube.com/embed/tTYvvm_tclY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Biking on a road with a view of Mt. Saint Helens',
        url: 'https://imgur.com/xS2lnwf.jpg',
        thumbnailUrl: 'https://imgur.com/xS2lnwft.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'A line of old tractors in the country',
        url: 'https://imgur.com/ndbGgEM.jpg',
        thumbnailUrl: 'https://imgur.com/ndbGgEMt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    'We initially planned to take Highway 1 down the coast into San Francisco, but when we reached the fork for highway 128 we decided to swoop inland towards wine country and a chili potluck. We were surprised by a brief section of younger redwoods which sheltered large old stumps before we ascended into the land of the grapes. I found my vineyard! Wine country in many ways parallels the beach life with subtle differences in wall art: ‘a little sand between your toes takes away all of your woes’ replaced with ‘wine improves with age, I improve with wine’.',

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Rhys next to his vineyard',
      url: 'https://imgur.com/WBQ0lju.jpg',
      thumbnailUrl: 'https://imgur.com/WBQ0ljut.jpg',
    },

    'We stealth camped again and the next day rolled into Sonoma where Adam’s long time friends, Jim, Anne, & Malia offered us the fluffiest bed and invited us to join them and their neighbors in a big chili feast (New Mexico green chili!!!).',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rhys biking through vineyards',
        url: 'https://imgur.com/Le2ppXv.jpg',
        thumbnailUrl: 'https://imgur.com/Le2ppXvt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Oakland dock',
        url: 'https://imgur.com/60qcfoK.jpg',
        thumbnailUrl: 'https://imgur.com/60qcfoKt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'From Sonoma we rode through a last bit of wine country and caught the ferry to SF. We’ll be spending the week here at Adam’s parent’s place in Oakland before we hop back on our bikes to continue on South. There are tales of gold out West. We haven’t yet managed to get our hands on any - instead we discovered golden sunsets, scenic vistas, crab guts, rolling vineyards, and towering, fantastical redwoods and sequoias.',
    'Thank you to the kind people who hosted and helped us on this leg of the trip:',
    {
      type: CONTENT_TYPES.LIST,
      content: [
        'Harper, Nick, & Airlee',
        'Brian & Nicole',
        'Dick & Cathy',
        'Ze’ev & Maddie',
        'Ankit',
        'Anne & Jim & Meleia',
        'Zach, Claudia, & David',
        'And thanks to the various state parks and secret turnouts & groves that make for great camping along the coast. '
      ]
    }
  ]
};

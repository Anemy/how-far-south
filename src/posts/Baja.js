import { CONTENT_TYPES, CATEGORIES } from './constants';

// https://imgur.com/a/7bkkh32
// flowers https://imgur.com/a/W8maCah
// rattlesnakes 
// https://imgur.com/VG8SYka
// https://imgur.com/9XZrQ1l
// https://imgur.com/gMBGgIL
// https://imgur.com/bQA7Ova
// https://imgur.com/POwQUke
// https://imgur.com/UVS3KGD

// Flowers video https://youtu.be/OBUYhlJQCR8
// Biking over dried lakebeds https://www.youtube.com/watch?v=l4SNHllqRpw

export default {
  url: 'baja',
  title: 'Biking Baja',
  date: new Date(2019, 3 /* 0 is January. */, 14 /* 0 is the first of the month. */),
  description: 'Running out of water into waterfalls',
  categories: [CATEGORIES.NORTH_AMERICA],
  previousPostUrl: 'Rainbows',
  nextPostUrl: 'mexico',
  thumbnailUrl: 'https://imgur.com/RcMfgHI.jpg',
  content: [
    'Biking Baja has been our first big taste of wild adventure on the trip, making us feel alive in the proximity to the opposite. In school we learned of the four necessities for life; water, food, shelter, and not getting bit by rattlesnakes - and here we are wishing we paid attention. Spending so much time in a world parsed down to the necessities brings out the joy in a sip of water, the joy of stumbling on a palm tree oasis, the joy of being present with non-human life emanating from thorn laden desert.',
    // https://imgur.com/2yUMVb4
    // https://imgur.com/FWHCYWW
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'River crossing',
        url: 'https://imgur.com/RcMfgHI.jpg',
        thumbnailUrl: 'https://imgur.com/RcMfgHIt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Camping next to a big cactus',
        url: 'https://i.imgur.com/I14w4TJ.jpg?1',
        thumbnailUrl: 'https://i.imgur.com/I14w4TJ.jpg?1',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }/*, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking into the mist',
        url: 'https://imgur.com/5zcDIIu.jpg',
        thumbnailUrl: 'https://imgur.com/5zcDIIut.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }*/, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam walking his bike up a hill',
        url: 'https://i.imgur.com/5zcDIIu.jpg',
        thumbnailUrl: 'https://i.imgur.com/5zcDIIu.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
      // items: [{
      //   type: CONTENT_TYPES.IMAGE,
      //   alt: 'Nice green mountains',
      //   url: 'https://imgur.com/FWHCYWW.jpg',
      //   thumbnailUrl: 'https://imgur.com/FWHCYWWt.jpg',
      //   grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      // }, {
      //   type: CONTENT_TYPES.IMAGE,
      //   alt: 'Adam biking towards the coast',
      //   url: 'https://imgur.com/EINnpYN.jpg',
      //   thumbnailUrl: 'https://imgur.com/EINnpYNt.jpg',
      //   grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      // }, {
      //   type: CONTENT_TYPES.IMAGE,
      //   alt: 'Mountains in the distance',
      //   url: 'https://imgur.com/8VZsP6D.jpg?1',
      //   thumbnailUrl: 'https://imgur.com/8VZsP6Dt.jpg?1',
      //   grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      // }]
    },

    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: 'This was Rhys’ first time in Mexico, Adam’s first time biking in a real cactus desert, and both our first times trekking with our bikes off the paved way and onto the ensemble of gravel, sand, and rocks. Our route down the peninsula was a mix of the Mexican Highway 1 and the ',
    },
    {
      type: CONTENT_TYPES.EXTERNAL_LINK,
      text: 'Baja Divide',
      url: 'https://bajadivide.com',
      inline: true,
      target: '_blank'
    },
    {
      type: CONTENT_TYPES.TEXT,
      inline: true,
      text: ', a 1,700 mile bikepacking route devised 4 years ago by some crazy bikepackers. Baja had us walking up mountains, cruising past waterfalls, crunching on salt flats, and plowing through sand.',
    },

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Future',
        url: 'https://imgur.com/dEFkHhz.jpg',
        thumbnailUrl: 'https://imgur.com/dEFkHhzt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Adam biking through mountains',
        url: 'https://imgur.com/FWHCYWW.jpg',
        thumbnailUrl: 'https://imgur.com/FWHCYWWt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Our first day into Mexico, biking from Tecate to Ensenada, we were daydreaming and gazing at billowing clouds rolling over green mountains, debating whether these tacos were the best tacos ever when two men walked up and asked, “Where are you biking to today?”. “To Ensenada”, Rhys replied. “I live in Ensenada man! Come stay at my place!” And so we stayed in Thomas’ beautiful home on the coast for the night, setting a precedent for the kindness we would receive across the peninsula.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mountains in the distance',
        url: 'https://imgur.com/fIoacOO.jpg',
        thumbnailUrl: 'https://imgur.com/fIoacOOt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Church',
        url: 'https://i.imgur.com/v9MKS9c.jpg',
        thumbnailUrl: 'https://i.imgur.com/v9MKS9c.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'We left Ensenada the next morning to ride our first Baja Divide section. It turns out our last 2 months being subject to rainy deluges payed off and we were graced by a desert bursting with color. Flowers blooming in every pigment across rolling hills. The riding was challenging, especially with our tires an inch smaller than the recommended tire width, making it impossible to navigate sand. We ended the day at a cliffside campsite overlooking the pacific. Even after only a day we knew that the divide was the adventure we imagined when dreaming up the trip.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        // https://imgur.com/FoFLRun
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/bLJy9IK.jpg',
        thumbnailUrl: 'https://imgur.com/bLJy9IKt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/u98N4qN.jpg',
        thumbnailUrl: 'https://imgur.com/u98N4qNt.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/YPJBidf.jpg',
        thumbnailUrl: 'https://imgur.com/YPJBidft.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/J3ZfkVh.jpg',
        thumbnailUrl: 'https://imgur.com/J3ZfkVht.jpg',
        grid: 'col-sm-3', // This is out of 12 how much space it takes up.
      }]
    },
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/FoFLRun.jpg',
        thumbnailUrl: 'https://imgur.com/FoFLRunt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/bXOeTSn.jpg',
        thumbnailUrl: 'https://imgur.com/bXOeTSnt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://imgur.com/gC3UOW9.jpg',
        thumbnailUrl: 'https://imgur.com/gC3UOW9t.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Setting up our tent next to the beach at sunset',
      url: 'https://imgur.com/82RvkBM.jpg',
      thumbnailUrl: 'https://imgur.com/82RvkBMt.jpg',
    },

    'We rode for a few days on the Mex 1 eyeing our next divide section, 90 miles through the mountains from San Quintin. We filled up every container we could with water totalling about 20L and set out into a desert seemingly devoid of life. But as we climbed, the cactuses multiplied and we caught glimpses of lizards dashing under rocks. We crested the first pass and the desert came alive in a sandy ensemble. Bird song echoing off red rocks, harmonizing with coyotes baying in the valley, met with hummingbirds buzzing flower to flower, and supported by the aggressive percussion of rattlesnakes, with the constant melody of bike tires bouncing rock to rock. The entire day was tinged with magic, especially our campsite in a sea of yellow flowers. It will not be a day we soon forget.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Snake',
        url: 'https://i.imgur.com/lpp6DwX.jpg',
        thumbnailUrl: 'https://i.imgur.com/lpp6DwXt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Bunny',
        url: 'https://i.imgur.com/ahUSaQu.jpg',
        thumbnailUrl: 'https://i.imgur.com/ahUSaQut.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Flowers',
        url: 'https://i.imgur.com/bvFYMhv.jpg',
        thumbnailUrl: 'https://i.imgur.com/bvFYMhvt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },
    'A magic day yet still we only made it ⅓ of the way and our water was rapidly diminishing. The next morning we were down to 9L and felt compelled to start rationing water. Constant headaches made it hard to appreciate the towering saguaros and whimsical Dr. Sues trees lining the trails. The bouncing of our bikes also led to screws coming loose. My saddle clamp would no longer tighten with the seat pointed sky high, a challenge for my XX chromosome self, and crucial pannier screws had fallen out leaving it awkwardly dangling until we remedied it with zip ties and a carrabiner. We made good distance trekking all day through uninhabited mountains, pushing bikes through rocks and sand and biking when we could, but by sunset we were down to 4L of water.',
    
    'Waking up in the starlight to avoid the heat we set out towards the highway, hoping to make it that day. By the time the sun started beating down we only had .5L of water left with unabated headaches. Suddenly, turning a bend, we saw palm trees peaking above saguaros and pushed our bikes a final stretch to a stream trickling through the sand. We have never been happier to see water, parched lips cracking into smiles to meet the cool sweetness of the stream. We filtered water into our bottles and layed in the water feeling a calm joy returning to our bruised brains.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Dr. Sues',
        url: 'https://i.imgur.com/0A5d4ia.jpg',
        thumbnailUrl: 'https://i.imgur.com/0A5d4iat.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'cute cactus',
        url: 'https://i.imgur.com/0MnImnz.jpg',
        thumbnailUrl: 'https://i.imgur.com/0MnImnzt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Finally arriving at the highway Rhys and I shared a glance and smile feeling proud of ourselves. The highway took us past martian expanses and miles of rockfields. It also led us to our first encounter with another long distance biker, Charlie. Charlie is a unique bike tourer because he tours not for the biking but the surfing. He is on a trip around the world starting in Brazil and has biked North for 6 months hauling his bright yellow surfboard/dog shield.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Vulture Sunset',
        url: 'https://i.imgur.com/GxuX75w.jpg',
        thumbnailUrl: 'https://i.imgur.com/GxuX75wt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Charlie',
        url: 'https://i.imgur.com/zdggvur.jpg',
        thumbnailUrl: 'https://i.imgur.com/zdggvurt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'We ran into our next group of bike tourers a couple days later. The group is from right outside Seattle and are biking all 1,700 miles of the divide route. Josh, Jackie, Paul, and Kaisa became our new adventure partners for the next section of divide from San Ignacio to Mulegé. As much as I love Rhys, after 2 months of his mean mug it is amazing having new faces to look at and talk to. In San Ignacio we also met another divide rider, Alex, bringing our squad from 2 to 7.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Josh walking infront of the Church',
        url: 'https://i.imgur.com/cMPxTUa.jpg',
        thumbnailUrl: 'https://i.imgur.com/cMPxTUat.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Cute Cat',
        url: 'https://i.imgur.com/TpQrlCj.jpg',
        thumbnailUrl: 'https://i.imgur.com/TpQrlCjt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'From San Ignacio we all biked to the coast along salt flats and pools of many colors; lime green, rusty brown, bright blue, and iridescent yellow. Then on the coast we pedalled through dried lake beds packed tight into a pavement quality surface but with more character. We passed fishing villages and biked into mirages stretching to the horizon. The next day we filled our waters to the brim and packed our bags with as many bimbo donuts as we could fit for our crossing of the peninsula to Mulegé.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Crew',
        url: 'https://i.imgur.com/RCVszPz.jpg',
        thumbnailUrl: 'https://i.imgur.com/GxuX75w.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Salt',
        url: 'https://i.imgur.com/RKc6t0U.jpg',
        thumbnailUrl: 'https://i.imgur.com/RKc6t0Ut.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rhys flat',
        url: 'https://i.imgur.com/sUqtz6U.jpg',
        thumbnailUrl: 'https://i.imgur.com/sUqtz6Ut.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    }, {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'Mirage',
        url: 'https://i.imgur.com/V4odHwr.jpg',
        thumbnailUrl: 'https://i.imgur.com/V4odHwrt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Gull Pirates',
        url: 'https://i.imgur.com/wAANLns.jpg',
        thumbnailUrl: 'https://i.imgur.com/wAANLnst.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'The almost 100 mile section has the worst conditions on the divide, baby head sized rocks scattered through most of it. We set out riding with the crew but quickly fell behind, having to walk our bikes through the sand as they rode. It was grueling riding with our heads being constantly bobbled by rocks. We were making it though, slow and steady, until a loud “pop!” right at sunset. I look back and see that my rear tire is flat with the tube bulging from the seam. I spent 2 hours that night trying to boot the tire, putting wrappers and dollars on the inside of the tear to keep the tube from bulging, while also managing our dysfunctional pump. In the morning I thought I found a temporary solution but after less than a mile another “bang!” I looked to see the tear almost doubled in size. At that point I could no longer bike and we were caught awkwardly equidistant from civilization on both sides. After some discussion we decided we would split the rations and that I would start walking the 3 days out as we hadn’t seen any vehicles. I had sufficient food and stream crossings to fill up water. Rhys would bike ahead to buy a tire from Mulegé and bring it back to me.',
    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'River in canyon',
        url: 'https://imgur.com/ePGuEhf.jpg',
        thumbnailUrl: 'https://i.imgur.com/ePGuEhft.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rattle',
        url: 'https://i.imgur.com/UVS3KGD.jpg',
        thumbnailUrl: 'https://i.imgur.com/UVS3KGDt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Vulture spreading its wings',
        url: 'https://i.imgur.com/6JDxDdw.jpg',
        thumbnailUrl: 'https://i.imgur.com/6JDxDdwt.jpg',
        grid: 'col-sm-4', // This is out of 12 how much space it takes up.
      }]
    },

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Setting up our tent next to the beach at sunset',
      url: 'https://i.imgur.com/VG8SYka.jpg',
      thumbnailUrl: 'https://i.imgur.com/VG8SYkat.jpg',
    },

    'I walked for about 5 hours before I stopped for lunch and to rest in the shade during peak sun. I was napping with the cactuses when a truck came ratting up the road and I ran out to see a pickup truck with three 1,000kg cattle in the back. The ranchero, Bruno, was surprised to see me but was heading to Mulegé and could give me a ride into town. We roped my bike to the back of the truck, seat precariously situated below a cow’s butt, and started a bumpy drive down the rocky road minutely faster than a bike.',

    'It was a beautiful drive: prehistoric cliffs lined the river-bed road with rabbits zipping about, but crammed in the back of the truck the cows were being uncontrollably jostled, horns lashed to the truck so they couldn’t lift their heads.    *** The rest of this paragraph is a gruesome story about a cow - skip if needed. ***    The road got steeper the jostling became more violent and one of the cows, a bull with black and white speckled fur, collapsed onto the truck bed. Bruno kept driving for a bit which caused another cow to be tossed onto it, hoove planted on the front of the fallen cow’s neck. We got out to help the cow stand and Bruno viscously pulled its tail to spur it into motion. After yanking, hitting, and pinching the cow jerked into motion, pushing the other cow off and propelling itself into a standing position. We kept driving, every bump causing crashing in the back, and an hour later the cow collapsed again, trapped in the same position. I could see the fear in its large cow eyes, lashes fluttering tiredly. Bruno kept yanking and yanking its tail to the point all the fur had shed off to expose its raw, red flesh below. Eventually it managed to stand again and and we kept driving but it was only 30 minutes until again it was down, now only responding to brutal pulls with shallow breath and softly closing eyes. Bruno was exhausted, I’m sure both physically and emotionally, having not been able to lift this huge animal that is his entire livelihood. I am on the verge of tears having no way to help this cow or speak up against a man graciously helping me and doing the job that he and his community have done for generations. And regardless they are being driven to their slaughter so how much does it matter. But looking into its eyes and empathizing with its pain I thought of the playful cows I have spent many rides mooing alongside. We road the rest of the 6 hour drive in a tense silence only breaking solemn air to halfheartedly point out roadside rabbits. I am still processing what happened and how I feel about it but I often find myself shuddering thinking about its fading cow eyes.',

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Ranchero Truck',
      url: 'https://i.imgur.com/Mvki9Db.jpg',
      thumbnailUrl: 'https://i.imgur.com/Mvki9Dbt.jpg'
    },

    'At the same time I was experiencing that Rhys was also having a challenging time in a physical rather than emotional way, biking the hardest section of road yet. We took a day to rest and collect ourselves in Mulegé. I sewed my bike tire with a needle and thread given to me by Jackie but also bought a replacement tire incase my handiwork failed. Meanwhile, my panniers were held together almost exclusively by zip ties with only one out of 6 screws left and my newly lost brake barrel adjuster was refashioned with electrical tape.',

    {
      type: CONTENT_TYPES.GRID,
      items: [{
        type: CONTENT_TYPES.IMAGE,
        alt: 'River in canyon',
        url: 'https://i.imgur.com/4AlSQIF.jpg',
        thumbnailUrl: 'https://i.imgur.com/4AlSQIFt.jpg',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }, {
        type: CONTENT_TYPES.IMAGE,
        alt: 'Rattle',
        url: 'https://i.imgur.com/EUxkBwT.jpg?2',
        thumbnailUrl: 'https://i.imgur.com/EUxkBwTt.jpg?2',
        grid: 'col-sm-6', // This is out of 12 how much space it takes up.
      }]
    },

    'Our next days of biking we were both deeply tired, struggling on the Google Maps recommended bike route across the mountains which were often impossible to bike. We ended up having to turn back to the main road after half a day of biking because we weren’t sure about water and it was much more challenging than expected. It wasn’t until we stumbled upon a surreal waterfall in the middle of a canyon that we felt the bliss of bike touring return.',

    {
      type: CONTENT_TYPES.IMAGE,
      alt: 'Spotting a splash',
      url: 'https://i.imgur.com/9zMxz0g.jpg',
      thumbnailUrl: 'https://i.imgur.com/9zMxz0gt.jpg'
    },
    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Climbing a waterfall" src="https://www.youtube.com/embed/Z9qfUx7n6gw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    'The last three days we rode towards La Paz, our first major city after almost a month of biking in Baja. My other original tire also blew in this section and I caught a ride into the next town with two nice surfers to get a new one. An extremely kind man, José Perfecto, saw me working on my bike and invited me into his home. He drove me to the store and kept feeding me loads of snacks before sending me off with oranges and grapefruit. He insisted I come stay whenever I’m back in town.',


    'We are getting ready to take the ferry to Mazatlan and say goodbye to Baja. Who knew that the desert, with all its hostility, would show us so much about life. All of our vulnerability biking through the desert has been met with so much kindness by the Mexican people. I will always dream of camping with cactuses under the Milky Way but now it is onto the jungle and mountains of mainland Mexico. We went swimming with whale sharks on our last day in Baja and Rhys drifted a bit close and must have gotten swallowed - I haven\'t seen him since. I\'ll be on my own now for I am a Southbound soul; no time to wait on whale shark digestion. In all seriousness Baja has been Rhys’ last few weeks of biking as he\'s preparing to head home to the US back to a life of creation and coding with significantly less pedalling. I\'ll miss him dearly!',

    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/2-yUitPvXjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    '',
    {
      type: CONTENT_TYPES.HTML,
      html: '<iframe style="padding-right: 5px; min-width: 320px; width: 100%; height: 20%; max-height: 600px; min-height: 200px; margin-right: auto;margin-left: auto; display: block;" title="Desert" src="https://www.youtube.com/embed/l4SNHllqRpw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    'Thank you to the kind people who hosted and helped us on this leg of the trip:',
    {
      type: CONTENT_TYPES.LIST,
      content: [
        'Hervé',
        'Ganzalo',
        'Thomas & Carmen',
        'Dilon, Jaime, & their family',
        'Jaun & Jesús',
        'Bruno',
        'Charlie',
        'Walt & Virginia',
        'José Perfecto',
        'Josh, Jackie, Kayza, & Paul',
        'Alex',
        'All those nice oases that make this hot desert hospitable.'
      ],
    }
  ]
};

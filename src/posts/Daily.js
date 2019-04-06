import { CONTENT_TYPES } from './constants';

const STAY_KINDS = {
  CAMPING: 'CAMPINGS',
  LODGE: 'LODGE',
  WARM_SHOWERS: 'WARM_SHOWERS',
  RANDOM_NEW_FRIENDS: 'RANDOM_NEW_FRIENDS',
  STEALTH_CAMPING: 'STEALTH_CAMPING',
  LEGAL_CAMPING: 'LEGAL_CAMPING',
  PERMISSION_CAMPING: 'PERMISSION_CAMPING',
  FRIENDS_FAMILY: 'FRIENDS_FAMILY'
}

const Daily = {
  url: 'daily',
  title: 'The Daily',
  date: new Date(2019, 0 /* 0 is January. */, 30 /* 0 is the first of the month. */),
  description: 'Daily updates - what we see - what we do - less fluff more reality.',
  content: [
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 1 - Gas Works Park, Seattle, WA -> Kingston WA',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 14
    },
    '14 to ferry - Edmunds -> Kingston. 8.3 Miles Kingston -> Anna\'s parent\'s watertower',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 2 - Kingston WA, WA -> The Detour',
      stay: STAY_KINDS.RANDOM_NEW_FRIENDS,
      miles: 32
    },
    '32 miles - 2 going wrong way. Snow storm after bridge when we say dolphins.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 3 - Kingston WA -> Dosewallips State Park, WA',
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 26
    },
    '26 miles - Some nice snow biking in the morning - bye to nick - later in the day over a nice wintery pass',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 4 - Dosewallips State Park, WA -> Olympia, WA',
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 65
    },
    '65 miles - Nice bike ride next to Hood Canal. Night at warmshowers - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 5 - Olympia, WA -> Kelso, WA',
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 77
    },
    '77 miles - Nice back country roads through good trees. Night at warmshowers - Joel\'s.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 6 - Kelso, WA -> Portland, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 58
    },
    '58 miles - Cool bridge into Oregon, PST trail, then chill oregon highway - didn\'t feel very remote, neat bridge and mountains around Portland, and biking around Portland.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 7 - Portland, OR',
      restDay: true,
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0
    },
    'Hanging out at Zoe\'s - Thanks for hosting!',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 8 - Portland, OR -> Salem, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 55
    },
    '55 miles - Party time at L\'s! Some American midwest vibes on the way there.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 9 - Salem, OR -> Otis, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 49
    },
    '49 miles - Over a pass before the rains starts back up tonight/tomorrow. About to be a 7 day storm with snow on the road/pass we\'re taking. Camped next to river.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 10 - Otis, OR -> Newport, OR', // Feb 11
      stay: STAY_KINDS.LODGE,
      miles: 36
    },
    '36 miles - Into highway 101. Went on the beautiful otter crest loop. Some big sur nice. Nice wind rain. Stayed in econolodge lol',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 11 - Newport, OR -> Waldport, OR',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 17,
      notRealBikeDay: true
    },
    '17 miles - Worked on blogpost in coffee shop for the morning, rainy bike along 101. nice coastline. got gopro working. Stayed at Harper & Nick & Airee?\'s place.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 12 - Waldport, OR -> Winchester Bay, OR',
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 63
    },
    '63 miles - Beautiful Oregon coastline. Over nice hills. Through a tunnel after a lighthouse. Camped in Umpqua state park on some dunes.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 13 - Winchester Bay, OR -> Bandon, OR',
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 48
    },
    '48 miles - Staying at Brian\'s. He leads Coosboattours. We\'ll be helping out with the Gorse Blossom Festival. Cold rain in, but Seven devils road was a nice bike ride. Reminded me of Misty Mountains.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 14 - Bandon, OR',
      stay: STAY_KINDS.WARM_SHOWERS,
      restDay: true,
      miles: 0
    },
    'Evicerated crab for the Gorse Blossom Festival with Mike - Marine Biologist from Georgia.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 15 - Bandon, OR',
      stay: STAY_KINDS.WARM_SHOWERS,
      restDay: true,
      miles: 0
    },
    'Adam went to a basketball game and we tuned up the bikes a bit. Hung around Gorse festival a bit and advocated for a water channel.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 16 - Bandon, OR -> Humbug Mountain, OR',
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 37
    },
    '37 miles - Helped Brian at the docks with his ship the Fun Sway, and the Bloody Mary walk where we handed out crab legs. Then biked down beautiful coast to Humbug mountain state park campground. Cool tunnel to campsite under road. Got a shower at the hike bike.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 17 - Humbug Mountain, OR -> Crissey Field State Recreation Site, OR',
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 57
    },
    '57 miles - Beautiful Oregon coast line. Lots of nice 101. Stealth camped in a grove next to a stream/river. Beautiful driftwood and full moon.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 18 - Crissey Field State Recreation Site, OR -> Elk Prairie Campground, CA',
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 55
    },
    '55 miles - Into California! At the start of the day. Some nice country roads to start the day. New vegitation. Soon into the Redwoods. Beautiful. A bit of a wild 101 section to start, but then 10? miles of CLOSED beautiful road through the elk prairee park. Got a shower at the hike bike.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 19 - Elk Prairie Campground, CA -> Eureka, CA',
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 54
    },
    '54 miles - Misty/Rainy morning. Took nice photos next to the elk prairee. More gorgeous redwoods. Opening up into huge California coast vistas. Now in more California feeling places with redwoods surrounding this warm showers - at Dick & Cathy\'s.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 20 - Eureka, CA -> Fish Creek, CA',
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 68
    },
    '68 miles - Great oatmeal breakfast at Dick\'s in the morning. He dried the fruit for the oatmeal himself from his farm. Biked through Eureka on the water, and then down into the Avenue of the Giants. Really beautiful, not many cars, rode side by side and chatted. Chatted about if money matters and what bigger life goals are. Bathed naked in a cold stream. Camped under huge redwoods at Fish Creek, near Miranda, CA.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 21 - Fish Creek, CA -> Westport, CA',
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 64
    },
    '64 miles - More awesome Redwoods on the Avenue of the Giants. Nice big pass after Leggett once we were on the 1, leading down to the coast and beautiful California coastline. Had a nice dinner with fantastic fish and chips in an inn in town. Stealth camped in an RV park lol - super hot coin operated showers.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 22 - Westport, CA -> Boonville, CA',
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 66
    },
    '66 miles - On the California coast for the morning. Nice blue waters on the coast and the streams, bays, and rivers. Spent a while thinking about Highway 1 vs 128 at a junction where we saw a nice seal. We decided we would go the way the next RV did not go. Still talked about it and went the way the RV went. Ended up in nice Redwoods, these ones were logged at some point which was an interesting contrast to the old growth in Elk Creek. Eventually ended up in Bouegie wine country. Saw Rhys vineyard. Had nice bread and cheese and tomato and lettuce dinner with a lot of crumbs. Stealth camped in a bend in the road that was nested under a big tree with a creek next to it and a deer track leading into it.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 23 - Boonville, CA -> Sonoma, CA',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 88
    },
    '88 miles - Nice climb to start the morning. Into the mist in wine country. Then a big descent into more wine country, followed by more wine country. Got nice lunch at a taco truck and brushed up on some Spanish. Adam picked an orange from a tree that was super delicious. Ending the day was busy roads and a bit tough. But we made it to Jim & Anne\'s in Sonoma where they had a bunch of neighbors over for a delicious chili dinner. It was a blast and we might have found a cool place to stay/visit in Mexico.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 24 - Sonoma, CA -> San Francisco',
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 36
    },
    '36 miles - Biked out of Sonoma, over some nice countryish feeling vineyards. donum. Sped through Napa - busy roads and cars and then took the Vallejo ferry to SF and SF ferry to Oakland. Now at Adam\'s parents house - Dave & Claudia. Awesome dinner and great chats with a view. Excited to spend a bit of time here.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 25 - San Francisco, CA', // Feb 25
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 26 - San Francisco, CA', // Feb 26
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 27 - San Francisco, CA', // Feb 27
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 28 - San Francisco, CA', // Feb 28
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 29 - San Francisco, CA', // March 1
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 30 - San Francisco, CA', // March 2
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 31 - San Francisco, CA', // March 3
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 32 - San Francisco, CA', // March 4
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in SF. Things that happened in SF: Dinner w/ Ze\'ev & Maddie. Dinner w/ Jacob & Holden. Dinner w/ Zach & Alex & his two minerva friends Tyler & Lucian. dinner w/ Becky?. Ate a big edible. Lunch w/ Ankit, Usmann, & Kedar. Worked on Wearwiki a bit with Ben and Jason. Poker at Evan\'s.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 33 - San Francisco, CA -> Santa Cruz, CA', // March 5
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 68,
      restDay: true
    },
    '68 miles - Kind of uneventful biking, have driven a similair route. Some redwoods, and nice misty fog. Mud next to the lake was fun to bike through. Rained a bunch in the morning, took the subway to Millbrae to start the day. Nice dinner at Amy & David\'s w/ their dog Toby. First time having a big artichoke.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 34 - Santa Cruz, CA -> Monterey, CA', // March 6
      stay: STAY_KINDS.LODGE,
      miles: 50,
      restDay: true
    },
    '50 miles - Rainy morning with winds from the South west. Biking past strawberry, artichoke, brusselsprout, & carrot fields on farm roads. Later really nice biking next to the water on a trail into Monterey. Bought a drone. Saw a nice rainbow. RV lodged in sand. The trail ended where Bike & Build hit the water - brought up some memories. Had a nice dinner by a guy from Lebanon. Stayed in a hotel when it was getting dark and rainy - the hostel was more expensive?!',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 35 - Monterey -> Esalon Retreat, Big Sur', // March 7
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 45,
    },
    '45 miles - Beautiful Big Sur. Large cliffs. Saw a bunch of people taking pics at some iconic bridge, in a way it felt like we earned the view. Met Oscar Lee who said come to his place for a steak dinner in LA. That evening Chris said to come to Esalon Retreat in the morning. Smoked a nice j and watched the sunset with a dinner of mac n cheese. Talked what makes waves occur & why they are perpendicular to the shore.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 36 - Rest day in Esalen Institute', // March 8
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in Esalen Institute/Retreat. Chris put us on the guest list. Morning met with a big rainbow, it was windy and some rain in the night. $25 - breakfast, lunch, & dinner. Hot springs on the Big Sur cliffs, clothing optional. NICE - although I feel like I have to be busy.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 36 - Esalon Retreat, Big Sur, CA -> San Simeon, CA', // March 9
      stay: STAY_KINDS.LODGE,
      miles: 49
    },
    '49 miles - Woke up at same camp site as last night - nice home. Last of Big Sur, huge scenic views with a nice big climb. We met other tourers! David was riding from Monterey to Ventura, Chen was driving and day tripping, and the others were doing most of California. Big rain in the afternoon, saw the storm roll in over the elephant seals. Stayed at days inn because cold in haily rain lol.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 37 - San Simeon, CA -> Pismo Beach, CA', // March 10
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 53
    },
    '53 miles - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 38 - Pismo Beach, CA -> Goleta, CA', // March 11
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 88
    },
    '88 miles - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 39 - Goleta, CA -> Syracuse Canyon Campground, CA', // March 12
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 66
    },
    '66 miles - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 40 - Syracuse Canyon Campground, CA -> West Hollywood, LA, CA', // March 13
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 44
    },
    '44 miles - Staying at Christine and Joe\'s',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 41 - West Holywood, LA, CA', // March 14
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in LA',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 42 - West Hollywood, LA, CA -> Crystal Cove Campground, CA', // March 15
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 59
    },
    '59 miles - Slept on the beach when the sun set.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 44 - Crystal Cove Campground, CA -> Deer Park Monestary, CA', // March 16
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 70
    },
    '70 miles - Rest day in LA',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 45 - Deer Park Monestary, CA -> San Diego, CA', // March 17
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 32,
      notRealBikeDay: true
    },
    '32 miles - I was feeling sick af - dehydration and I think the monk food was too wholesome for me. Stayed at Nick & Carl\'s',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 46 - San Diego, CA -> Tecate', // March 18
      stay: STAY_KINDS.LODGE,
      miles: 58
    },
    '58 miles - Out of San Diego, Adam got some bigger tires. San Diego seemed nice. Big climb into Mountainy rocky deserty shrubby hills. 400 Pesos for a night. GREAT TACOS WOOO WE IN MEXICO. Just went through a turnstile to get into Mexico. About $20 for the room for the night.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 47 - Tecate, Baja, Mexico', // March 19
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Stayed with mum at Rancho la Puerta for the evening! Thanks Herve?(sp) Got Mexican Visa. Beers in the town square/park while we had beers and listened to mariachi band.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 48 - Tecate, Baja, Mexico -> Ensenada, Baja, Mexico', // March 20
      stay: STAY_KINDS.RANDOM_NEW_FRIENDS,
      miles: 70
    },
    '70 miles - Rocky green hills and occasional mountains rule the landscape. Ensalo biked with us a bit in the morning and invited us to stay with him next time we\'re in Tecate. Had great big coconuts. Fantastic lunch tacos where someone named Thomas walke dup to us and invited us to stay at his place in Ensenada. He hosts a bunch of warm showers - our friends Tyler and Reese have stayed here before!!! Had a nice local beer (not Tecate) and some tacos at a restraunte on the water. Thomas and Carmen have a nice house with a big courtyard and a dog named JT.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 49 - Ensenada, Baja, Mexico', // March 21
      stay: STAY_KINDS.LODGE,
      miles: 0,
      restDay: true
    },
    '0 miles - In the morning we filled up on water from down the street - each bottle is ~ 1 peso. Rate of excahnge is about 18:1 (quick maths 20:1). And had barrio and nopal (cactus) tacos at a tasty sit down on stools on the road spot. Wrote rainbows blog post in a Starbuclks in a strip mall that felt out of place and American.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 50 - Ensenada, Baja, Mexico -> Somewhere on the Baja divide near Santo Tomas?', // March 22
      stay: STAY_KINDS.CAMPING,
      miles: 60
    },
    '60 miles - Biked through a swarm of bees - and saw another big one when we were about to grab lunch. Then got on the divide. Baja divide is beautiful. Nice hard biking over remote stretches with rocky hill mountains surrounding. We made our way to the beach where we camped with an awesome view. Went skinny dipping.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 51 - Somewhere on the Baja divide near Santo Tomas? -> Punta Colonet', // March 23
      stay: STAY_KINDS.LODGE,
      miles: 50
    },
    '50 miles - Finished up the baja. We went North for a bit thinking we were in a different town and then took the highway south. Tasty quesadillas. Stayed at a hotel on the road when it started getting dark - not the best road, a lot of cars and no shoulder.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 52 - Punta Colonet -> Lazaro Cardainas / Baja Divide', // March 24
      stay: STAY_KINDS.LODGE,
      miles: 52
    },
    '52 miles - Biked through some cool Mexican towns. Got back on the divide - a lot of pushing through the sand. Camped on sandy flats on the divide with a cool sunset view of a cemetery. Lots of small plants with small water beads on them that pop when you roll your bike over them.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 53 - Lazaro Cardainas / Baja Divide -> Baja Divide East of Neuva Odisea', // March 25
      stay: STAY_KINDS.LODGE,
      miles: 40
    },
    '40 miles - Finished up beachy part of the divide, headed into an inland section. The inland section quickly climbed up into the hills with cactuses all around and eventually into rocky hills. Beautiful landscapes carved into the sandy rock by water over many years. Saw a big freaking rattle snake. Didn\'t see a soul the second part of the day. Camped in a field of yellow flowers with a fire next to a rocky hill.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 54 - Baja Divide East of Neuva Odisea -> Baja Divide East of Neuva Odisea', // March 26
      stay: STAY_KINDS.LODGE,
      miles: 35
    },
    '35 miles - Mountain biking on the divide. We pretty much ran out of water hah. The heat and dehydration makes me an angry person xD. The rocky hills were in color with flowers blooming all around with the rains from the past month. Yellows, reds, oranges, purples, & violets. Got into Saguaro country. Some firt bikers flew past us and chatted a bit. 2 more rattle snakes. Late in the day when we were almost out of water we came accross a cool stream with flowing water. I remember the feeling of sand in my tired feet in the cool water was straight orgasmic. Later we past a military checkpoint in the middle of nowhere, when asked what was in the bags of our bikes I said ropa y comida. We chatted and mentioned the rattlesnakes and they wondered if we killed them - I think it\'s expected. Camped with a nice fire under a big saguaro.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 55 - Baja Divide East of Neuva Odisea -> Cataviña, Baja California', // March 27
      stay: STAY_KINDS.LODGE,
      miles: 60
    },
    '60 miles - Sandy morning out of the divide. Got back on the road and had some nice tacos. Road riding for the rest of the day. Later met a surfer bike tourer named Charlie and had dinner and stayed in a hotel where the wifi and electricity didn\'t work. The stores are in peoples homes now. Charlie told us of an app called I overlander.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 56 - Cataviña, Baja California -> A bit after Punta Prieta', // March 28
      stay: STAY_KINDS.LODGE,
      miles: 76
    },
    '76 miles - Really cool plateau we biking up onto at the start of the day. Piles of rocks looking like a fantastical giant\'s bone pile. Not really many plants around at this point. Road biking, no shoulders. Hot and dehydrated I get angry - I almost got ran over by a car because I was just being an idiot and crossed the road to get a nice shot of a horse and totally didnt see the car. Ended up spooking the horse and didn\'t even get the shot. Put in music and felt better. Expansive landscape views once we were off the plateau. Flat saguaro desert with mountains lining. We camped surounded by cacti. Adam uked into the night. He\'s learning over the rainbow and a couple others.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 57 - A bit after Punta Prieta -> Guerrero Negro', // March 29
      stay: STAY_KINDS.LODGE,
      miles: 71
    },
    '71 miles - In the morning we biked through more expansive seguaros. Straight road stretching on. Had lunch with a nice caravan of people from Santa Barbara on their way back up North. One of them is bike touring this summer. They bought us lunch xD. Tasty tacos in Geurrero Negro and we were able to stop at an atm to get some more Pesos for the rest of Baja.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 58 - Guerrero Negro', // March 30
      stay: STAY_KINDS.LODGE,
      miles: 0,
      restDay: true
    },
    '0 miles - Did laundry, Adam lost his wallet so we spent sometime looking for it and them working out logistics.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 59 - Guerrero Negro -> San Ignacio', // March 31
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 93
    },
    '93 miles - Long day - super flat road. I turned on the podcasts for this part. We met Josh & Jackie. Stayed in San Ignacio at the Cyclist camp. Had such tasty hot dogs & Tortas. The only other person staying at the place was a motorcyclist whose motorcycle broke. He reminded me of Joel.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 60 - San Ignacio -> 10 miles South of San Ignacio', // April 1
      stay: STAY_KINDS.CAMPING,
      miles: 10
    },
    '10 miles - Had breakfast at the Cassa de Cicletas. Road their tandem bycicle. Hung out in San Ignacio and read a book in the town center infrotn of a big church. Even nodded off for a bit. Met the other two cyclists with Josh & Jackie, Paul & Kayza. Had lunch with some random people who run a site called la bicikleta and do SEO as their main job. Another cyclist doing the divide, Alex, rolled up and also joined us. Camped South of the town in a gravel area.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 61 - 10 miles South of San Ignacio -> Near a fishing town Los Castros in Baja, MX', // April 2
      stay: STAY_KINDS.CAMPING,
      miles: 50
    },
    '? miles - Misty morning. By whale watching towns, nice colored salt flats. Got first flat since usa. By fishing town. Biking on sand and dried beds. Ended up catching the crew again and we all camped on some sand kind of close to the beach.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 62 - Near a fishing town Los Castros in Baja, MX -> On Baja Divide near river on ranch road', // April 3
      stay: STAY_KINDS.CAMPING,
      miles: 50
    },
    '? miles - Hot day into the mountains, uphill, but mostly gradual. Many river crossings and fille dup water. Big nice dog named Oso and farmer showed us his goats. Later Adam\'s tired got a hole in the rim and we spent a while trying to boot it.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 63 - On Baja Divide near river on ranch road -> On Baja Divide in Mountains in Canyon', // April 4
      stay: STAY_KINDS.CAMPING,
      miles: 50
    },
    '? miles - Saw a nice chill rattlesnake in the morning. We saw a rancher last night and in the morning and he said the next ranch might have a spare tire. Jesus & Juan didn\'t but invited us in for coffee and then proceededd to radio all the other ranches in the area asking for a tire. We found one but it was 15 miles away. Our plan was split the gear and then I would bike ahead and check it out while Adam walked. If they didn\'t have a tire I\'d bike the remaining 60 ish miles over the next two days and bring back a tire from there while Adam kept walking. Luckily about 3 or 4 hours after we split there was a rancher Bruno taking cows into Mulegé and Adam was able to strap his bike onto the pickup and catch a ride. (The first car we\'d seen on that road). Over the next two days I biked through the beautiful river gorge up into the mountains and camped there for the night.', // Radio tv
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 62 - Near a fishing town Los Castros in Baja, MX -> On Baja Divide near river on ranch road', // April 3
      stay: STAY_KINDS.LODGE,
      miles: 50,
      notRealBikeDay: true
    },
    '? miles - Through the mountain pass to the other side. Bone rattling steep descents, some making me have to get off my bike and just walk down hah. I\'m suprised the pickup made it. In Mulegé, which is a quaint town on the Sea of Cortez with a good bit of tourist influence I met up with the other cyclists who were going to catch a boat to the next portion of the divide. The fish tacos here were on point and Adam and I each had a chalice of a margerita when we met up.',
  ]
};

let milesBikedOnBikeDays = 0; // Total without the half days ti get real average.
let totalMilesBiked = 0;
let totalBikeDays = 0;
let totalDays = 0;

for (let i = 0; i < Daily.content.length; i++) {
  const item = Daily.content[i];

  if (item.miles && item.miles > 0) {
    totalMilesBiked += item.miles;

    if (item.notRealBikeDay) {
      milesBikedOnBikeDays += item.miles;
    } else {
      totalBikeDays++;
    }
  }
  totalDays++;
}

console.log('Total miles biked:', totalMilesBiked);
console.log('Total days biked (not including rest & half days):', totalBikeDays);
console.log('Total days on the road:', totalDays);
console.log('Average miles biked/day:', (milesBikedOnBikeDays / totalBikeDays))

/**

Metrics we could track:
Days on the road
Floors we sleep on / Days Camping / Surfaces
Flats
Miles Bikes
Tacos eaten
Beers

Film things:
A minute of footage in each place. Each day.
Drone footage
As much footage as possible

The midwestern american dream - is it a recurring theme

Adam's phone wifi: ghrt1135

**/


export default Daily;

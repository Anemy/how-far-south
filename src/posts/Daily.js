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
      miles: 17
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
    '????? miles - Kind of uneventful biking, have driven a similair route. Some redwoods, and nice misty fog. Mud enxt to the lake was fun to bike through. Rained a bunch in the morning, took the subway to Millbrae to start the day. Nice dinner at Amy & David\'s w/ their dog Toby. First time having a big artichoke.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 34 - Santa Cruz, CA -> Monterey, CA', // March 6
      stay: STAY_KINDS.LODGE,
      miles: 50,
      restDay: true
    },
    '????? miles - Rainy morning with winds from the South west. Biking past strawberry, artichoke, brusselsprout, & carrot fields on farm roads. Later really nice biking next to the water on a trail into Monterey. Bought a drone. Saw a nice rainbow. RV lodged in sand. The trail ended where Bike & Build hit the water - brought up some memories. Had a nice dinner by a guy from Lebanon. Stayed in a hotel when it was getting dark and rainy - the hostel was more expensive?!',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 35 - Monterey -> Esalon Retreat, Big Sur', // March 7
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 45,
    },
    '50 miles - Beautiful Big Sur. Large cliffs. Saw a bunch of people taking pics at some iconic bridge, in a way it felt like we earned the view. Met Oscar Lee who said come to his place for a steak dinner in LA. That evening Chris said to come to Esalon Retreat in the morning. Smoked a nice j and watched the sunset with a dinner of mac n cheese. Talked what makes waves occur & why they are perpendicular to the shore.',
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
      text: 'Day 38 - Pismo Beach, CA -> Goleta, CA', // March 12
      stay: STAY_KINDS.WARM_SHOWERS,
      miles: 88
    },
    '88 miles - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 39 - Goleta, CA -> Syracuse Canyon Campground, CA', // March 13
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 66
    },
    '66 miles - ',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 40 - Syracuse Canyon Campground, CA -> West Hollywood, LA, CA', // March 14
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 44
    },
    '44 miles - Staying at Christine and Joe\'s',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 41 - West Holywood, LA, CA', // March 15
      stay: STAY_KINDS.FRIENDS_FAMILY,
      miles: 0,
      restDay: true
    },
    '0 miles - Rest day in LA',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 42 - West Hollywood, LA, CA -> Crystal Cove Campground, CA', // March 16
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 59
    },
    '0 miles - Slept on the beach when the sun set.',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 43 - Crystal Cove Campground, CA -> Deer Park Monestary, CA', // March 16
      stay: STAY_KINDS.STEALTH_CAMPING,
      miles: 70
    },
    '70 miles - Rest day in LA',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 43 - Deer Park Monestary, CA -> San Diego, CA', // March 16
      stay: STAY_KINDS.LEGAL_CAMPING,
      miles: 32
    },
    '32 miles - I was feeling sick af - dehydration and I think the monk food was too wholesome for me. Stayed at Nick & Carl\'s',
    {
      type: CONTENT_TYPES.HEADING,
      text: 'Day 43 - San Diego, CA -> Tecate', // March 16
      stay: STAY_KINDS.LODGE,
      miles: 58
    },
    '58 miles - Big climb into Mountainy rocky deserty shrubby hills. 400 Pesos for a night. GREAT TACOS WOOO WE IN MEXICO'
    
  ]
};

let totalMilesBiked = 0;
let totalBikeDays = 0;

for (let i = 0; i < Daily.content.length; i++) {
  const item = Daily.content[i];

  if (item.miles && item.miles > 0) {
    totalBikeDays++;
    totalMilesBiked += item.miles;
  }
}

console.log('Total miles biked:', totalMilesBiked);
console.log('Total days biked (not including rest):', totalBikeDays);
console.log('Average miles biked/day:', (totalMilesBiked / totalBikeDays))

/**

Miles
1 - 14 
2 - 32 
3 - 26 
4 - 65 
5 - 77 
6 - 58 
7 - 0 
8 - 55 
9 - 49 
10 - 36 
11 - 17 
12 - 63 
13 - 48 
14 - 0 
15 - 0 
16 - 37 
17 - 57 
18 - 55 
19 - 54 
20 - 68 
21 - 64 
22 - 66 
23 - 88 
24 - 36 

Total: 1065
Biking Days: 21
Average miles per bike day - 50

Metrics to track:
Days on the road
Floors we sleep on / Days Camping / Surfaces
Cry counter
Bathroom stops
Flats
Miles Bikes
Tacos eaten
Beers

Film things:
A minute of footage in each place. Each day.
Drone footage
As much footage as possible
Facecams - like caleb on youtube - try it.

The midwestern american dream - is it a recurring theme

**/

export default Daily;

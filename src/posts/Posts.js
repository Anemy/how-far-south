import Baja from './Baja';
import Beginnings from './Beginnings';
import Daily from './Daily';
import Gear from './Gear';
import Guatemala from './Guatemala';
import North from './North';
import Medellin from './Medellin';
import Mexico from './Mexico';
import SalemSoiree from './SalemSoiree';
import Resources from './Resources';
import Route from './Route';
import Redwoods from './Redwoods';
import Rainbows from './Rainbows';
import Videos from './Videos';

// console.log('North', North);

const posts = {
  // [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  [Medellin.url]: Medellin,
  [Guatemala.url]: Guatemala,
  [Mexico.url]: Mexico,
  [Baja.url]: Baja,
  [Rainbows.url]: Rainbows,
  [Redwoods.url]: Redwoods,
  [SalemSoiree.url]: SalemSoiree,
  [North.url]: North,
  [Resources.url]: Resources,
  [Videos.url]: Videos
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Medellin.url;

export default posts;
export { Medellin, Guatemala, Mexico, Baja, Beginnings, SalemSoiree, Resources, North, Redwoods, Rainbows, Gear, Route, Daily, Videos };

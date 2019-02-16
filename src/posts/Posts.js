import Beginnings from './Beginnings';
import Daily from './Daily';
import Gear from './Gear';
import North from './North';
import SalemSoiree from './SalemSoiree';
import Resources from './Resources';
import Route from './Route';

// console.log('North', North);

const posts = {
  // [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  [North.url]: North,
  [SalemSoiree.url]: SalemSoiree,
  [Resources.url]: Resources,
  // [Route.url]: Route,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = SalemSoiree.url;

export default posts;
export { Beginnings, SalemSoiree, Resources, North, Gear, Route, Daily };

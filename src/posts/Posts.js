import Beginnings from './Beginnings';
import Daily from './Daily';
import Gear from './Gear';
import North from './North';
import Resources from './Resources';
import Route from './Route';

// console.log('North', North);

const posts = {
  [Beginnings.url]: Beginnings,
  // [Gear.url]: Gear,
  // [North.url]: North,
  [Resources.url]: Resources,
  // [Route.url]: Route,
  // [Daily.url]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Resources.url;

export default posts;
export { Beginnings, Resources, North, Gear, Route, Daily };

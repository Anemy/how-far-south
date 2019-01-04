import Beginnings from './Beginnings';
import Gear from './Gear';
import Daily from './Daily';
import Route from './Route';

const posts = {
  [Beginnings.link]: Beginnings,
  [Gear.link]: Gear,
  [Route.link]: Route,
  [Daily.link]: Daily
};

posts.keys = Object.keys(posts);
posts.mostRecent = Beginnings.link;

export default posts;
export { Beginnings, Gear, Route, Daily };

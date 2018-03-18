import Curve from '../elements/curve';
import Wall from '../elements/wall';
import Floor from '../elements/floor';
import ArrayUtils from './array_utils';

class ElementUtils {
  static getCurvesFromPoints (points) {
    let length = points.length;
    if (length < 2) return [];
    return ArrayUtils.range(length-1).map(idx => new Curve(points[idx], points[idx+1]));
  };

  static generateWallsFromPoints (points) {
    let length = points.length;
    if (length < 2) return [];
    return ElementUtils.getCurvesFromPoints(points).map(curve => new Wall(curve));
  };

  static generateFloorsFromPoints (points) {
    let length = points.length;
    if (length < 3) return [];
    let first = points[0];
    return [new Floor(ElementUtils.getCurvesFromPoints(points.concat([first])))];
  };
};

export default ElementUtils;

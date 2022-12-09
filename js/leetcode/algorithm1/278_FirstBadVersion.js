/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lt = 1;
    let rt = n;
    let lastGood = 0;
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      console.log({ mid, lastGood, lt, rt, calc: isBadVersion(mid) });
      if (isBadVersion(mid)) {
        if (lastGood === mid - 1) return mid;
        rt = mid - 1;
      } else {
        lastGood = mid;
        lt = mid + 1;
        firstBad = mid;
      }
    }
    // lastGood이 1인 경우, lt === rt 상태에서 반복문 나옴
    return lt;
  };
};

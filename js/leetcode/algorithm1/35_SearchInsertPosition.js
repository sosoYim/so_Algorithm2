/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let lt = 0;
  let rt = nums.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  // 타겟과 같은 수가 nums 안에 없을 경우
  // 발견된 제일 가까운 수가 target보다 작으면 -> 발견된 인덱스 다음
  // 아니면 -> 발견된 인덱스 자리 차지
  return nums[lt] < target ? lt + 1 : lt;
};

console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1, 3, 5, 6], 5)); // 2

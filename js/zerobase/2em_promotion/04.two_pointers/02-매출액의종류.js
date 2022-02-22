/**
 * 현수의 아빠는 제과점을 운영합니다. 현수아빠는 현수에게 N일 동안의 매출기록을 주고 연속
된 K일 동안의 매출액의 종류를 각 구간별로 구하라고 했습니다.
만약 N=7이고 7일 간의 매출기록이 아래와 같고, 이때 K=4이면 
20 12 20 10 23 17 10
각 연속 4일간의 구간의 매출종류는 
첫 번째 구간은 [20, 12, 20, 10]는 매출액의 종류가 20, 12, 10으로 3이다.
두 번째 구간은 [12, 20, 10, 23]는 매출액의 종류가 4이다.
세 번째 구간은 [20, 10, 23, 17]는 매출액의 종류가 4이다.
네 번째 구간은 [10, 23, 17, 10]는 매출액의 종류가 3이다.
N일간의 매출기록과 연속구간의 길이 K가 주어지면 첫 번째 구간부터 각 구간별 매출액의 종
류를 출력하는 프로그램을 작성하세요.
▣ 입력설명
매개변수 nums에 N(5<=N<=100,000)일 동안의 매출기록이 주어집니다.
매개변수 k에 K(2<=K<=N)가 주어집니다.
각 매출액은 500이하의 음이 아닌 정수입니다.
▣ 출력설명
첫 줄에 각 구간의 매출액 종류를 순서대로 반환합니다.
 */

function solution(nums, k) {
  const answer = [];
  const types = new Map();
  for (let i = 0; i < k; i++) {
    types.set(nums[i], types.get(nums[i]) ? types.get(nums[i]) + 1 : 1);
  }
  answer.push(types.size);
  for (let i = k; i < nums.length; i++) {
    const valOutOfRange = nums[i - k];
    types.set(valOutOfRange, types.get(valOutOfRange) - 1);
    types.get(valOutOfRange) === 0 && types.delete(valOutOfRange);
    types.set(nums[i], types.get(nums[i]) ? types.get(nums[i]) + 1 : 1);
    answer.push(types.size);
  }
  return answer;
}

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4)); // [3,4,4,3]

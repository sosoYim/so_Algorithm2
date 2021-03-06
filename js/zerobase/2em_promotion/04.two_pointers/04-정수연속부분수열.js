/**
 * N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 
작성하세요.
만약 주어진 수열이 [1, 2, 3, -3, 1, 2]이고, M값이 3이라면
합이 3이 되는 연속부분수열은 [1, 2], [1, 2, 3, -3], [2, 3, -3, 1], [3], [3, -3, 1, 2], 
[1, 2]로 총 6가지입니다.
▣ 입력설명
매개변수 nums에 길이 N인 수열이 주어집니다. 매개변수 m에 M(-100,000,000≤M≤
100,000,000)이 주어집니다. 
수열의 원소값은 -1000부터 1,000까지의 정수입니다.
▣ 출력설명
모든 경우의 수를 반환합니다.
 */

function solution(nums, m) {
  let answer = 0;
  const nMap = new Map();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === m) answer += 1;
    answer += nMap.get(sum - m) || 0;
    nMap.set(sum, nMap.get(sum) ? nMap.get(sum) + 1 : 1);
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
console.log(solution([-1, 0, 1], 0)); // 2
console.log(solution([-1, -1, -1, 1], 0)); // 1

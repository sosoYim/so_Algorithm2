/**
 * N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 
작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
1 2 1 3 1 1 1 2 
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
▣ 입력설명
매개변수 nums에 길이 N인 수열이 주어집니다. 매개변수 m에 M(1≤M≤100,000,000)이 주어
진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
▣ 출력설명
모든 경우의 수를 반환합니다.
 */

function solution(nums, m) {
  let lt = 0;
  let sum = 0;
  let answer = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    if (sum === m) answer += 1;
    while (sum > m) {
      sum -= nums[lt];
      lt += 1;
      if (sum === m) answer += 1;
    }
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 4
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3)); // 6

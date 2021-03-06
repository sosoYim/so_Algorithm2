/**
 * N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그
램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
1 3 1 2 3
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, 
{1, 3, 1}로 총 10가지입니다.
▣ 입력설명
매개변수 nums에 N(1≤N≤100,000)길이의 수열이 주어집니다.
매개변수 m에 M(1≤M≤100,000,000)이 주어집니다. 
수열의 원소값은 1,000을 넘지 않는 자연수입니다.
▣ 출력설명
경우의 수를 반환합니다.
 */

function solution(nums, m) {
  let sum = 0;
  let answer = 0;
  let lt = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum > m) {
      sum -= nums[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5)); // 10
console.log(solution([1, 1, 1, 1, 1, 1], 3)); // 15
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); // 22

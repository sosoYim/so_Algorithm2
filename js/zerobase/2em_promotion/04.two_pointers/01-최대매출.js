/**
 * 최대 매출
현수의 아빠는 제과점을 운영합니다. 현수아빠는 현수에게 N일 동안의 매출기록을 주고 연속
된 K일 동안의 매출액의 합 중에서 최대값이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.
▣ 입력설명
매개변수 nums에 N(5<=N<=100,000)일 동안의 매출액이 주어집니다. 매개변수 k에 
K(2<=K<=N)가 주어집니다. 매출액의 500이하의 자연수입니다.
▣ 출력설명
최대 매출액을 반환합니다.
*/
function solution(nums, k) {
  let answer = 0;
  let comp = 0;
  for (let i = 0; i < k; i++) {
    comp += nums[i];
  }
  answer = comp;

  for (let i = k; i < nums.length; i++) {
    comp -= nums[i - k];
    comp += nums[i];
    answer = Math.max(comp, answer);
  }

  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); // 342

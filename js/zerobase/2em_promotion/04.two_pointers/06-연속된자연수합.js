/**
 * N입력으로 양의 정수 N이 입력되면 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 
방법의 가짓수를 출력하는 프로그램을 작성하세요.
만약 N=15이면 
7+8=15
4+5+6=15
1+2+3+4+5=15
와 같이 총 3가지의 경우가 존재한다.
▣ 입력설명
매개변수 n에 양의 정수 N(7<=N<100,000)이 주어집니다.
▣ 출력설명
총 경우수를 반환합니다.
 */

function solution(n) {
  const nums = Array.from({ length: Math.ceil(n / 2) }, (_, i) => i + 1);
  let lt = 0;
  let sum = 0;
  let answer = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum > n) {
      sum -= nums[lt++];
    }
    if (sum === n) answer++;
  }
  return answer;
}

console.log(solution(15)); // 3
console.log(solution(45678)); // 7
console.log(solution(98765)); // 3

/*
빈도수 정렬
한 개의 문자열이 주어지면 문자열의 각 문자의 빈도수를 계산하여 빈도수가 가장 큰 문자부
터 차례대로 출력하는 프로그램을 작성하세요.
단 대소문자를 구분합니다.
▣ 입력설명
첫째 줄에 길이가 10,000을 넘지 않는 문자열이 주어집니다.
▣ 출력설명
첫 번째 줄에 빈도수를 기준으로 내림차순한 문자열을 출력합니다. 만약 빈도수가 같은 문자
가 존재하면 대문자가 소문자보다 우선하게 하고, 대문자끼리는 알파벳순으로 합니다.(소문자
도 마찬가지입니다.) 다른 말로 표현하면 빈도수가 같을 경우 아스키번호 순으로 오름차순하라
는 말입니다. 아스키번호 : 대문자 65~90, 소문자 97~122
▣ 입력예제 1 
aaAAcccbbbBB
▣ 출력예제 1
bbbcccAABBaa
▣ 입력예제 2 
kdkDKKGkdkgks
▣ 출력예제 2
kkkkkKKddDGgs

*/

function solution(s) {
  let answer = '';
  let sH = new Map();
  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let tmp = [...sH].sort((a, b) => {
    if (a[1] === b[1]) return a[0].charCodeAt() - b[0].charCodeAt();
    return b[1] - a[1];
  });
  for (let [key, val] of tmp) {
    answer += key.repeat(val);
  }
  return answer;
}
console.log(solution('aaAAcccbbbBB')); //bbbcccAABBaa
//console.log(solution("kdkDKKGkdkgks")); //kkkkkKKddDGgs
//console.log(solution("ckdowiskjgwigAGD")); //ggiikkwwADGcdjos
//console.log(solution("dkjgkdkjglkdjg")); //kkkkdddgggjjjl
//console.log(solution("dkjgskjgkDKJGSKGKSG")); //GGGKKKkkkSSggjjDJds
//console.log(solution("STUDENTteacher")); //TTeeDENSUachrt
//console.log(solution("dkkgsg")); //ggkkds
//console.log(solution("akgAgkdAgkskAgkjg")); //gggggkkkkkAAAadjs
//console.log(solution("aaAAcccbbbBB")); //bbbcccAABBaa
//console.log(solution("KDKGKSGKJLSDJGLJS")); //KKKKGGGJJJSSSDDLL

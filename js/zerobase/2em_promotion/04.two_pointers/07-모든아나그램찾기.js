/**
 * 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하
세요. 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
▣ 입력설명
매개변수 s에 S문자열이 입력되고, 매개변수 t에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.
▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 반환합니다.
▣ 매개변수 형식 1
bacacbcba, abc
▣ 반환값 형식 1
3
출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
▣ 매개변수 형식 2
bacaAacba, abc
▣ 반환값 형식 2
3
 */

function isSameMap(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let x of map1) {
    if (map1.get(x) !== map2.get(x)) return false;
  }
  return true;
}

function solution(s, t) {
  let lt = 0;
  let answer = 0;
  const tMap = new Map(); // 기준
  let sMap = new Map();
  for (let x of t) {
    tMap.set(x, (tMap.get(t) || 0) + 1);
  }

  for (let rt = 0; rt < s.length; rt++) {
    sMap.set(s[rt], (sMap.get(s[rt]) || 0) + 1);
    // 새로운 값은 포함될 수 없는 경우 lt 건너뛰기
    if (!tMap.has(s[rt])) {
      lt = rt + 1;
      sMap = new Map();
    } else {
      // 새로운 값으로 인해 필요한 글자의 수보다 초과한다면
      while (sMap.get(s[rt]) > tMap.get(s[rt])) {
        sMap.set(s[lt], sMap.get(s[lt]) - 1);
        sMap.get(s[lt]) === 0 && sMap.delete(s[lt]);
        lt++;
      }
      if (isSameMap(sMap, tMap)) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution('bacacbcba', 'abc')); // 3
console.log(solution('bacaAacba', 'abc')); // 3

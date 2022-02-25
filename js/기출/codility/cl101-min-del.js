/**
 * What is the minimum total cost of deletions to achieve such a string?
 * You are given a string S. Deletion of the K-th letter of S costs C[K]. After deleting a letter, the costs of deleting other letters do not change. For example, for S = “ab” and C = [1, 3], after deleting ‘a’, deletion of ‘b’ will still cost 3.

You want to delete some letters from S to obtain a string without two identical letters next to each other. What is the minimum total cost of deletions to achieve such a string?

Write a function:

```jsx
function solution(s, c);
```

that, given string S and array C of integers, both of length N, returns the minimum cost of all necessary deletions.

1. Given S = “abccbd” and C = [0, 1, 2, 3, 4, 5], the function should return 2. You can delete the first occurrence of ‘c’ to achieve “abcbd”.
2. Given S = “aabbcc” and C = [1, 2, 1, 2, 1, 2], the function should return 3. By deleting all letters with a cost of 1, you can achieve string “abc”.
3. Given S = “aaaa” and C = [3, 4, 5, 6], the function should return 12. You need to delete all but one letter ‘a’, and the lowest cost of deletions is 3+4+5=12.
4. Given S = “ababa” and C = [10, 5, 10, 5, 10], the function should return 0. There is no need to delete any letter.

Write an efficient algorithm for the following assumptions:

- string S and array C have length equal to N;
- N is an integer within the range [1 ... 100,000];
- string S consists only of lowercase letters (’a’-’z’);
- each element of array C is an integer within the range [0 ... 1,000].
 */

function solution(s, c) {
  const stack = [s[0]];
  let answer = 0;

  for (let i = 1; i < s.length; i++) {
    const comp = s[i];
    if (stack.length && stack[stack.length - 1] === comp) {
      answer += Math.min(c[i - 1], c[i]);
    } else {
      stack.push(s[i]);
    }
  }
  return answer;
}

console.log(solution('abccbd', [0, 1, 2, 3, 4, 5])); // 2
console.log(solution('aabbcc', [1, 2, 1, 2, 1, 2])); // 3
console.log(solution('aaaa', [3, 4, 5, 6])); // 12
console.log(solution('ababa', [10, 5, 10, 5, 10])); // 0

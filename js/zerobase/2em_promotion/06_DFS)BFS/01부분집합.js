function subset(arr) {
  const part = [];
  const answer = [];

  function DFS(L) {
    if (L === arr.length) {
      if (part.length > 0) answer.push([...part]);
    } else {
      part.push(arr[L]);
      DFS(L + 1);
      part.pop(arr[L]);
      DFS(L + 1);
    }
  }
  DFS(0);
  return answer;
}

console.log(subset([1, 2, 3]));

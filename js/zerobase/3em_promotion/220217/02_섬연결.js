/**
 * 
 * 섬연결
N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 아일랜드에는 두 개의 섬이 있습니다. 섬은 1로 표시되어 상하좌우 연결되어 있으며, 0은 바다입니다.
아일랜드 대통령은 바다를 메워서 두 섬을 연결하려고 합니다. 지도상에서 최소 몇 개의 0(바다)을 1(육지)로 바꾸면 두 섬이 연결되는지를 구하는 프로그램을 작성하세요.
Image1.jpg

만약 아일랜드 지도가 위와 같다면 두 섬을 연결하는데는 2개의 0을 1로 바꾸면 됩니다.

▣ 입력설명
매개변수 board에 격자판 정보가 주어진다.

▣ 출력설명
0을 1로 바꾸는 최소 횟수를 반환하세요.

▣ 매개변수 형식
[[1, 1, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 1]]

▣ 반환값
2
 */

// 1. 처음 1을 발견하면 DFS로 돌며 모두 큐에 집어 넣기, -1로 바꾸기
// 2. 큐에 들어있는 요소들로 레벨 탐색

function solution(board) {
  var answer = Number.MAX_SAFE_INTEGER;

  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, 0, -1];
  const q = [];

  function DFS(x, y) {
    q.push([x, y]);
    board[x][y] = -1;
    //주위에 연결된 육지가 있는지 살펴본다
    for (let i = 0; i < 8; i++) {
      const nX = x + dx[i];
      const nY = y + dy[i];
      if (nX >= 0 && nY >= 0 && nX < board.length && nY < board[0].length && board[nX][nY] === 1) {
        DFS(nX, nY);
      }
    }
  }

  let flag = true;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        if (flag) {
          DFS(i, j);
          flag = false;
        }
      }
    }
  }

  let L = 0;
  while (q.length) {
    console.log(q);
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = q.pop();
      for (let i = 0; i < dx.length; i++) {
        const nX = x + dx[i];
        const nY = y + dy[i];
        if (nX >= 0 && nY >= 0 && nX < board.length && nY < board[0].length) {
          console.log({ nX, nY });
          if (board[nX][nY] === 1) return L;
          else if (board[nX][nY] === 0) {
            board[nX][nY] = -1;
            q.push([nX, nY]);
          }
        }
      }
    }
    L++;
  }
}

// 2
console.log(
  solution([
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1],
  ])
);

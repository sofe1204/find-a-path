function isSafe(i: number, j: number, matrix: string[][]): boolean
{
  if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length && matrix[i][j] !== ' ') 
  {
    return true;
  }
  return false;
}

function isPath(matrix: string[][], n: number): void 
{
 
  let visited: boolean[][] = new Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = new Array(n).fill(false);
  }

  let path: string = '';

  function findPath(matrix: string[][], i: number, j: number, visited: boolean[][], currentPath: string): string | null {
  
    if (!isSafe(i, j, matrix) || matrix[i][j] === ' ' || visited[i][j])
    {
      return null;
    }

    visited[i][j] = true; 
      
    currentPath += matrix[i][j];

    if (matrix[i][j] === 's') 
    {
      return currentPath; 
    }
      
    let up = findPath(matrix, i - 1, j, visited, currentPath );
    let left = findPath(matrix, i, j - 1, visited, currentPath );
    let down = findPath(matrix, i + 1, j, visited, currentPath );
    let right = findPath(matrix, i, j + 1, visited, currentPath);

    return up || left || down || right;
  }

  path = findPath(matrix, 0, 0, visited, '');

  if (path) 
  {
      const uppercaseLetters = path.match(/[A-Z]/g);
      console.log('-Path ', path);
      
    if (uppercaseLetters)
    {
      const extractedLetters = uppercaseLetters.join('');
      console.log(`-Letters ${extractedLetters}`);
        
    } else 
    {
      console.log('No uppercase letters found');
    }
  } 
}

const input: string[][] = [
  ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|'],
  ['+', '-', 'U', '-', '+', ' ', ' ', ' ', 'C'],
  ['|', ' ', ' ', ' ', '|', ' ', ' ', ' ', '|'],
  ['s', ' ', ' ', ' ', 'C', '-', '-', '-', '+'],
];

isPath(input, input.length);

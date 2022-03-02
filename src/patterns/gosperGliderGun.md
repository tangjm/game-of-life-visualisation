// 9x36 Gosper Glider Gun

/*
top left corner of a 2x2 square: 
1. <0, 4>
2. <2, 34>

top left corner of a smoke:
<2, 10>

top left corner of a queenBee:
<0, 20>

*/

// Assume <n, m> is the top left coordinate

/* 2x2 square
if <n, m> is the top-left corner:
then <n, m>, <n, m + 1>, <n + 1, m>, <n + 1, m + 1>
together make a 2x2 square.
*/

/* 7x8 smoke 
from top to bottom, row by row

<n, m + 2>
<n, m + 3>
<n + 1, m + 1>
<n + 1, m + 5>
<n + 2, m>
<n + 2, m + 6>
<n + 3, m>
<n + 3, m + 4>
<n + 3, m + 6>
<n + 3, m + 7>
<n + 4, m>
<n + 4, m + 6>
<n + 5, m + 1>
<n + 5, m + 5>
<n + 6, m + 2>
<n + 6, m + 3>

*/

/* 7x5 queenBee

from top to bottom, row by row

<n, m + 4>
<n + 1, m + 2>
<n + 1, m + 4>
<n + 2, m>
<n + 2, m + 1>
<n + 3, m>
<n + 3, m + 1>
<n + 4, m>
<n + 4, m + 1>
<n + 5, m + 2>
<n + 5, m + 4>
<n + 6, m + 4>

*/


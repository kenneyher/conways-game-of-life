# Conway's Game of Life

### Rules
Every *"cell"* has two possibles states: *live/populated* or *death/unpopulated*. Each cell interacts with its neighbours (cells that are horizontal, vertical or diagonally adjacent). At each step in time, the following transitions occur:
1. Any live cell with fewer than two neighbours **dies**, by underpopulation.
2. Any live cell with two or three neighbours **lives** on the next generation.
3. Any live cell with more than three neighbours **dies**, by overpopulation.
4. Any death cell with exactly three neighbours becomes a **live cell**, by reproduction.
These rules can be condensed into these three:
1. Any live cell with two or three neighbours *survives*.
2. Any death cell with three neighbours *revives*.
3. All other cells *die* in the next generation and all the other death cells stay *death*

/**
 * Steps for splitting sliders into different linear dependencies.
 * Each element of the array has the form [percent, value]
 *
 * Thus, to set a field from 50,000 to 30,000,000 in steps:
 * 1) From 50 000 to 200 000 by 5000 per step (30 steps)
 * 2) From 200 000 to 1 000 000 by 50 000 per step (16 steps)
 * 3) From 1 000 000 to 30 000 000 by 500 000 per step (58 steps)
 *
 * You need to pass the following keyStep (where 104 = 30 + 16 + 58 is the total number of steps):
 *  [
 *      [0, 50_000],
 *      [100 / 104 * 30, 200_000],
 *      [100 / 104 * (30 + 16), 1_000_000],
 *      [100, 30_000_000],
 *  ];
 *
 */
export type TuiKeySteps = [[0, number], ...Array<[number, number]>, [100, number]];

/**
 * Steps for splitting sliders into different linear dependencies.
 * Each element of the array has the form [percent, value]
 *
 * Thus, to set a field from 50,000 to 30,000,000 in steps:
 * 1) От 50 000 до 200 000 по 5000 (30 steps)
 * 2) От 200 000 до 1 000 000 по 50 000 (16 steps)
 * 3) От 1 000 000 до 30 000 000 по 500 000 (58 steps)
 *
 * You need to pass the following keyStep (where 104 = 30 + 16 + 58 is the total number of steps):
 *  [
 *      [100 / 104 * 30, 200000],
 *      [100 / 104 * (30 + 16), 1000000]
 *  ];
 *
 */
export type TuiKeySteps = Array<[number, number]>;

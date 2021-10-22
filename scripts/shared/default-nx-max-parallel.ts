/**
 * @note(splincode):
 * I tried to pick up other values with:
 * Math.ceil(require('os').cpus().length / 2)
 * However, the result was a decrease in performance.
 *
 * The most optimal value I got is to use 3 parallel processes
 */
export const DEFAULT_NX_MAX_PARALLEL = 3;

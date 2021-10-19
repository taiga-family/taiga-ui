/**
 * @note:
 * 16 core ~ run to 8 parallel tasks
 * 3 core ~ run to 8 parallel tasks
 */
export const DEFAULT_NX_MAX_PARALLEL: number = Math.ceil(require('os').cpus().length / 2);

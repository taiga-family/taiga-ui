export function getExecutionTime(t0: number, t1: number): string {
    const sum = t1 - t0;

    return sum > 1000 ? `${(sum / 1000).toFixed(2)} sec` : `${sum.toFixed(2)} ms`;
}

import {clearLine, cursorTo} from 'readline';

export function printProgress(progressLog: string, isLastLog: boolean = false): void {
    clearLine(process.stdout, 0);
    cursorTo(process.stdout, 0);
    process.stdout.write(progressLog);

    if (isLastLog) {
        process.stdout.write('\n');
    }
}

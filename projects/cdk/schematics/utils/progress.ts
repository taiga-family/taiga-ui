import {clearLine, cursorTo} from 'readline';
import {SMALL_TAB_SYMBOL, SUCCESS_SYMBOL} from './colored-log';

export function setupProgressLogger({
    total,
    prefix = '',
    tabs = 2,
}: {
    total: number;
    prefix?: string;
    tabs?: number;
}) {
    let i = 1;

    return (message: string, incrementIndex = true): void => {
        const isLast = i === total;
        const progressLog = `(${i} / ${total}) ${prefix} ${
            isLast ? SUCCESS_SYMBOL : message
        }`;
        i = incrementIndex ? i + 1 : i;

        clearLine(process.stdout, 0);
        cursorTo(process.stdout, 0);
        process.stdout.write(SMALL_TAB_SYMBOL.repeat(tabs) + progressLog);

        if (isLast && incrementIndex) {
            process.stdout.write('\n');
        }
    };
}

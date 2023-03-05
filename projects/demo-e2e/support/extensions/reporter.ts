import {
    FullConfig,
    FullResult,
    Reporter,
    Suite,
    TestCase,
    TestResult,
    TestStatus,
} from '@playwright/test/reporter';
import {performance} from 'perf_hooks';

import {hasFlag} from '../../../../scripts/shared/argv.utils';
import {
    ERROR_SYMBOL,
    errorLog,
    SUCCESS_SYMBOL,
} from '../../../cdk/schematics/utils/colored-log';
import {getExecutionTime} from '../../../cdk/schematics/utils/get-execution-time';

// noinspection JSUnusedGlobalSymbols
/**
 * @description:
 * https://playwright.dev/docs/api/class-reporter
 */
export default class TuiPlaywrightReporter implements Reporter {
    private start = 0;
    private readonly errors = new Map<string, string>();
    private readonly statuses = new Map<TestStatus, number>([
        [`passed`, 0],
        [`failed`, 0],
    ]);

    onBegin(_config: FullConfig, suite: Suite): void {
        this.start = performance.now();

        console.info(`Starting the run with ${suite.allTests().length} tests`);
    }

    onStdOut(chunk: string): void {
        if (!hasFlag(`--debug`)) {
            return;
        }

        console.info(chunk);
    }

    onTestBegin(_test: TestCase): void {
        // noop
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        this.statuses.set(result.status, (this.statuses.get(result.status) ?? 0) + 1);

        if (result.status !== `passed`) {
            this.errors.set(
                this.getTitleFromPath(test.titlePath()),
                result.error?.message ?? ``,
            );
        }

        console.info(
            `${this.getSmile(result.status)}${this.getTitleFromPath(test.titlePath())}`,
        );
    }

    onEnd(_result: FullResult): void {
        this.outputErrorStd();

        const passed = this.statuses.get(`passed`);
        const failed = this.statuses.get(`failed`);

        console.info(`Finished: ${getExecutionTime(this.start, performance.now())}`);
        console.info(`${this.getSmile(`passed`)}${passed} tests`);

        if (failed) {
            console.info(`${this.getSmile(`failed`)}${failed} tests`);
        }
    }

    private getSmile(status: TestStatus): string {
        return status === `passed` ? `PASS ${SUCCESS_SYMBOL} ` : `FAIL ${ERROR_SYMBOL} `;
    }

    private getTitleFromPath(path: string[]): string {
        return path.filter(Boolean).join(` > `);
    }

    private outputErrorStd(): void {
        if (this.errors.size) {
            Array.from(this.errors).forEach(([title, error]) => {
                console.info(`\n`);
                errorLog(`[ERROR]: ${title}`);
                console.info(error.trim());
                console.info(`\n`);
            });
        }
    }
}

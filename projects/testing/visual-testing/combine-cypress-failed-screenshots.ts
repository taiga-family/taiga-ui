import {readFileSync} from 'node:fs';

import {tuiCombineSnapshots} from './combine-snapshots';

const ROOT_PATH = process.env.ROOT_PATH ?? 'projects/demo-cypress';
const TEST_RESULTS_PATH = process.env.TEST_RESULTS_PATH ?? `${ROOT_PATH}/tests-results`;

interface TestResult {
    status: 'fail' | 'pass';
    name: string;
    baselinePath: string;
    diffPath: string;
    comparisonPath: string;
}

interface Report {
    suites: Array<{tests: TestResult[]}>;
}

// noinspection JSUnusedGlobalSymbols
export function tuiCombineCypressFailedScreenshots(): void {
    const reportSummary = readJSON<Report>(`${TEST_RESULTS_PATH}/report-summary.json`);

    if (!reportSummary) {
        return;
    }

    const failedTestSnapshots = reportSummary.suites
        .map((x) => x.tests)
        .flat()
        .filter((x) => x.status === 'fail' && x.diffPath);

    for (const {baselinePath, diffPath, comparisonPath, name} of failedTestSnapshots) {
        const output = `${TEST_RESULTS_PATH}/${name}.diff.png`;
        const inputs = [baselinePath, diffPath, comparisonPath].map(
            (x) => `${ROOT_PATH}/${x}`,
        );

        tuiCombineSnapshots(inputs, output).then(() =>
            console.info(` ✅ Async saved merged image: ${output}`),
        );
    }
}

function readJSON<T>(path: string): T | null {
    try {
        return JSON.parse(readFileSync(path, 'utf-8'));
    } catch {
        return null;
    }
}

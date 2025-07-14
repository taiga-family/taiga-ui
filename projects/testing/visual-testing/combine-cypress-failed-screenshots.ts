import {readFileSync, writeFileSync} from 'node:fs';

import {tuiCombineSnapshots} from './combine-snapshots';

const ROOT_PATH = 'projects/demo-cypress';
const TEST_RESULTS_PATH = `${ROOT_PATH}/tests-results`;

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

export async function tuiCombineCypressFailedScreenshots(): Promise<void> {
    const reportSummary = readJSON<Report>(`${TEST_RESULTS_PATH}/report-summary.json`);

    if (!reportSummary) {
        return;
    }

    const failedTestSnapshots = reportSummary.suites
        .map((x) => x.tests)
        .flat()
        .filter((x) => x.status === 'fail' && x.diffPath);

    for (const {baselinePath, diffPath, comparisonPath, name} of failedTestSnapshots) {
        const buffer = await tuiCombineSnapshots(
            [baselinePath, diffPath, comparisonPath].map((x) => `${ROOT_PATH}/${x}`),
        );

        writeFileSync(`${TEST_RESULTS_PATH}/${name}.diff.png`, buffer);
    }
}

function readJSON<T>(path: string): T | null {
    try {
        return JSON.parse(readFileSync(path, 'utf-8'));
    } catch {
        return null;
    }
}

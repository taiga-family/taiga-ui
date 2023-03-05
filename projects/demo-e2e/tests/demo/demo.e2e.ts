import {expect} from '@playwright/test';

import {DEMO_PATHS} from '../../../demo-integrations/cypress/support/helpers/demo-paths';
import {tuiPlaywrightNoFailOnSnapshotDiff} from '../../support/errors/no-fail-on-snapshot-diff';
import {describe, it} from '../../support/extensions/migrate';
import {tuiPlaywrightVisit} from '../../support/extensions/visit';
import {tuiPlaywrightExcludeSomeExamples} from '../../support/utils/exclude-some-example';
import {tuiPlaywrightGetTuiDocExample} from '../../support/utils/has-tui-doc-example';

describe(`Demo`, () => {
    for (const path of DEMO_PATHS) {
        it(path, async ({page}) => {
            await tuiPlaywrightVisit(page, path);

            const elements = await tuiPlaywrightGetTuiDocExample(page);

            for (const [index, element] of elements.entries()) {
                if (tuiPlaywrightExcludeSomeExamples(path, index + 1)) {
                    continue;
                }

                await element.scrollIntoViewIfNeeded();

                await tuiPlaywrightNoFailOnSnapshotDiff(async () =>
                    expect(await element.screenshot()).toMatchSnapshot(),
                );
            }
        });
    }
});

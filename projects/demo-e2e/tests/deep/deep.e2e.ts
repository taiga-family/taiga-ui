import {describe, it} from '../../support/extensions/migrate';
import {tuiPlaywrightVisit} from '../../support/extensions/visit';
import {tuiPlaywrightSelectEveryOption} from '../../support/utils/select-every-option';
import {tuiPlaywrightTapEveryToggle} from '../../support/utils/tap-every-toggle';

describe(`Deep`, () => {
    const deep = [
        /* CORE */
        `components/button`,
        `components/calendar`,
        `components/group`,
        `components/link`,
        `components/notification`,
        /* KIT */
        `components/avatar`,
        `components/badge`,
        `components/badged-content`,
        `components/calendar-month`,
        `components/filter`,
        `components/island`,
        `components/marker-icon`,
        `navigation/stepper`,
        `components/toggle`,
    ];

    for (const path of deep) {
        it(path, async ({page}) => {
            await tuiPlaywrightVisit(page, `${path}/API`);

            const controls = await page.locator(`.t-table .t-cell_value`).all();

            for (const control of controls) {
                const selects = await control.locator(`tui-select`).all();
                const toggles = await control.locator(`tui-toggle`).all();

                if (selects.length) {
                    await tuiPlaywrightSelectEveryOption(path, page, selects);
                } else if (toggles.length) {
                    await tuiPlaywrightTapEveryToggle(path, page, toggles);
                }
            }
        });
    }
});

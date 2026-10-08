import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, test} from '@playwright/test';

async function getSettledBackground(element: Locator): Promise<string> {
    return element.evaluate(async (node) => {
        await Promise.all(node.getAnimations().map(async ({finished}) => finished));

        return getComputedStyle(node).backgroundColor;
    });
}

test.describe('CardLarge', () => {
    test('interactive cell keeps floating appearance background on hover', async ({
        page,
    }) => {
        await tuiGoto(page, DemoRoute.CardLarge);

        const card = new TuiDocumentationPagePO(page)
            .getExample('#single-item')
            .locator('button[tuiCardLarge][tuiCell]');

        await card.scrollIntoViewIfNeeded();

        const background = await getSettledBackground(card);

        await card.hover();

        expect(await getSettledBackground(card)).toBe(background);
    });
});

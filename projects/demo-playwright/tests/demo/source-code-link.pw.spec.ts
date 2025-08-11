import {pages} from '@demo/modules/app/pages';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

import {tuiGetDemoPathsForE2E} from '../../utils/get-demo-paths';

test.describe('Source code button', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);
    const PUBLIC_DEMO = tuiGetDemoPathsForE2E(pages).length === demoPaths.length;

    (PUBLIC_DEMO ? demoPaths : []).forEach((path) => {
        test(`${path}`, async ({page, request}) => {
            const sourceCodeLink = new TuiDocumentationPagePO(page).sourceCodeLink;

            await tuiGoto(page, path);

            // eslint-disable-next-line playwright/no-skipped-test
            test.skip(
                !(await sourceCodeLink.all()).length,
                'Page does not contain source code button',
            );

            await expect(sourceCodeLink).toHaveAttribute(
                'href',
                /^https:\/\/github.com\/taiga-family\/taiga-ui/,
            );

            const href = await sourceCodeLink.getAttribute('href');
            const response = await request.get(href ?? '', {maxRetries: 3});

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (!response.ok()) {
                const docPageRoute = `https://taiga-ui.dev/next${path}`;

                await page.goto(docPageRoute);

                // eslint-disable-next-line playwright/no-skipped-test
                test.skip(page.url() !== docPageRoute, 'New documentation page');
            }

            expect(response.status()).not.toBe(404);
        });
    });

    test('ensure GitHub still returns 404 for invalid path', async ({request}) => {
        // eslint-disable-next-line playwright/no-skipped-test
        test.skip(!PUBLIC_DEMO);

        const response = await request.get(
            'https://github.com/taiga-family/taiga-ui/tree/main/projects/kit/components/invalid-component-name',
        );

        expect(response.status()).toBe(404);
    });
});

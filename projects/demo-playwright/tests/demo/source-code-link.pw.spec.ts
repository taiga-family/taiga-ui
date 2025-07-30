import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Source code button', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    demoPaths.forEach((path) => {
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
            const response = await request.get(href ?? '');

            expect(response.ok).toBeTruthy();
            expect(response.status()).not.toBe(404);
        });
    });

    test('ensure GitHub still returns 404 for invalid path', async ({request}) => {
        const response = await request.get(
            'https://github.com/taiga-family/taiga-ui/tree/main/projects/kit/components/invalid-component-name',
        );

        expect(response.status()).toBe(404);
    });
});

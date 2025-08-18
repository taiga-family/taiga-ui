import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Source code button', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);
    const proprietary = process.env['PROPRIETARY'] === 'true';
    const currentBranch =
        process.env['GITHUB_HEAD_REF'] || process.env['GITHUB_REF_NAME'] || 'main';

    (proprietary ? [] : demoPaths).forEach((path) => {
        test(`${path}`, async ({page, request}) => {
            const sourceCodeLink = new TuiDocumentationPagePO(page).sourceCodeLink;

            await tuiGoto(page, path);

            test.skip(
                !(await sourceCodeLink.all()).length,
                'Page does not contain source code button',
            );

            await expect(sourceCodeLink).toHaveAttribute(
                'href',
                /^https:\/\/github.com\/taiga-family\/taiga-ui/,
            );

            const href = await sourceCodeLink.getAttribute('href');
            // Replace 'main' branch with current branch in the GitHub URL
            const adjustedHref =
                href?.replace('/tree/main/', `/tree/${currentBranch}/`) ?? '';
            const response = await request.get(adjustedHref, {maxRetries: 3});

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (!response.ok()) {
                const docPageRoute = `https://taiga-ui.dev/next${path}`;

                await page.goto(docPageRoute);

                test.skip(page.url() !== docPageRoute, 'New documentation page');
            }

            expect(response.status()).not.toBe(404);
        });
    });

    test('ensure GitHub still returns 404 for invalid path', async ({request}) => {
        test.skip(proprietary);

        const response = await request.get(
            `https://github.com/taiga-family/taiga-ui/tree/${currentBranch}/projects/kit/components/invalid-component-name`,
        );

        expect(response.status()).toBe(404);
    });
});

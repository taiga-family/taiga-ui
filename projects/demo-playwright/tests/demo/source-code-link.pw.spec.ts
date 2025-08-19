import {
    PerformanceCollector,
    TuiDocumentationPagePO,
    tuiGoto,
} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

test.describe('Source code button', () => {
    test.beforeEach(async ({page}, testInfo) => {
        await PerformanceCollector.startTestCollection(
            page,
            testInfo.titlePath.join(' › '),
            testInfo.file,
        );
    });

    test.afterEach(async ({page}, testInfo) => {
        await PerformanceCollector.stopTestCollection(
            page,
            testInfo.titlePath.join(' › '),
        );
    });

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

            const href = await sourceCodeLink
                .getAttribute('href')
                .then((href) => href?.replace('/tree/main/', `/tree/${currentBranch}/`));

            const response = await request.get(href ?? '', {maxRetries: 3});

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (!response.ok()) {
                const docPageRoute = `https://taiga-ui.dev/next${path}`;

                await page.goto(docPageRoute);

                test.skip(page.url() !== docPageRoute, 'New documentation page');
            }

            expect(
                response.status(),
                `Source code link is broken (404). The component at "${href}" does not exist on branch "${currentBranch}". ` +
                    'This usually means the component was renamed, moved, or deleted. ' +
                    `Please ensure the component exists at the correct path or update the demo route "${path}". ` +
                    'If the component exists but the path is wrong, add the correct path parameter to tui-doc-page: ' +
                    '<tui-doc-page path="correct/component/path" ...>',
            ).not.toBe(404);
        });
    });

    test('ensure GitHub still returns 404 for invalid path', async ({request}) => {
        test.skip(proprietary);

        const response = await request.get(
            'https://github.com/taiga-family/taiga-ui/tree/main/projects/kit/components/invalid-component-name',
        );

        expect(response.status()).toBe(404);
    });
});

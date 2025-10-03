import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, test} from '@playwright/test';

interface GitHubEvent {
    pull_request?: {
        head?: {
            repo?: {
                full_name?: string;
            };
            ref?: string;
        };
    };
}

function getRepositoryInfo(): {repositoryUrl: string; targetBranch: string} {
    const currentBranch =
        process.env['GITHUB_HEAD_REF'] || process.env['GITHUB_REF_NAME'] || 'main';
    let repositoryUrl = 'https://github.com/taiga-family/taiga-ui';
    let targetBranch = currentBranch;

    const eventPath = process.env['GITHUB_EVENT_PATH'];

    if (eventPath) {
        try {
            const {readFileSync} = require('fs');
            const event: GitHubEvent = JSON.parse(readFileSync(eventPath, 'utf8'));
            const headRepo = event.pull_request?.head?.repo?.full_name;
            const headBranch = event.pull_request?.head?.ref;

            if (headRepo) {
                repositoryUrl = `https://github.com/${headRepo}`;
                targetBranch = headBranch || currentBranch;
            }
        } catch (error) {
            // Fallback to defaults if GitHub event data is unavailable
            console.warn('Could not read GitHub event data, using defaults:', error);
        }
    }

    return {repositoryUrl, targetBranch};
}

test.describe('Source code button', () => {
    const demoPaths: string[] = JSON.parse(process.env['DEMO_PATHS']!);

    const proprietary = process.env['PROPRIETARY'] === 'true';
    const {repositoryUrl, targetBranch} = getRepositoryInfo();

    (proprietary ? [] : demoPaths).forEach((path) => {
        test(`${path}`, async ({page, request}) => {
            const sourceCodeLink = new TuiDocumentationPagePO(page).sourceCodeLink;

            await tuiGoto(page, path);

            test.skip(
                !(await sourceCodeLink.all()).length,
                'Page does not contain source code button',
            );

            const href = await sourceCodeLink
                .getAttribute('href')
                .then((href) =>
                    href
                        ?.replace(
                            'https://github.com/taiga-family/taiga-ui',
                            repositoryUrl,
                        )
                        ?.replace('/tree/main/', `/tree/${targetBranch}/`),
                );

            const response = await request.get(href ?? '', {maxRetries: 3});

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (!response.ok()) {
                const docPageRoute = `https://taiga-ui.dev/next${path}`;

                await page.goto(docPageRoute);

                test.skip(page.url() !== docPageRoute, 'New documentation page');
            }

            expect(
                response.status(),
                `Source code link is broken (404). The component at "${href}" does not exist on branch "${targetBranch}" in repository "${repositoryUrl}". ` +
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

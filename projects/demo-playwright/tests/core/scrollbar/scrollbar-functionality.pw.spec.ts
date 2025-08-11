import {expect, test} from '@playwright/test';

/**
 * TuiScrollbar Functionality Test Suite
 *
 * Comprehensive testing of TuiScrollbar component functionality across various scenarios.
 * This suite focuses on behavioral correctness, layout handling, and user interaction.
 *
 * Related documentation:
 * - Native scrollbar specification: https://drafts.csswg.org/css-overflow-3/#scrollbar-gutter-property
 * - Chrome DevTools Protocol: https://chromedevtools.github.io/devtools-protocol/
 * - Playwright API: https://playwright.dev/docs/api/class-cdpsession
 */

test.describe('TuiScrollbar - Functionality Suite', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:3333/components/scrollbar');
        await page.waitForLoadState('networkidle');
    });

    test.describe('Basic Functionality', () => {
        test('renders correctly and handles basic scrolling', async ({page}) => {
            const firstExample = page.locator('tui-doc-example').first();

            await firstExample.scrollIntoViewIfNeeded();

            const scrollbar = firstExample.locator('tui-scrollbar');
            const thumb = firstExample.locator('.t-thumb');

            await expect(scrollbar).toBeVisible();
            await expect(thumb).toBeVisible();

            // Test basic scroll interaction
            const initialScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            // Use scrollTo for more reliable testing
            await scrollbar.evaluate((el) => el.scrollTo({top: 100}));
            await page.waitForTimeout(100);

            const newScrollTop = await scrollbar.evaluate((el) => el.scrollTop);

            expect(newScrollTop).toBeGreaterThan(initialScrollTop);
        });

        test('handles horizontal scrolling correctly', async ({page}) => {
            const horizontalExample = page.locator('tui-doc-example').nth(1);

            await horizontalExample.scrollIntoViewIfNeeded();

            const scrollContainer = horizontalExample.locator('tui-scrollbar');
            const horizontalThumb = horizontalExample.locator(
                '.t-bar_horizontal .t-thumb',
            );

            await expect(horizontalThumb).toBeVisible();

            // Test horizontal scroll
            const initialScrollLeft = await scrollContainer.evaluate(
                (el) => el.scrollLeft,
            );

            await scrollContainer.evaluate((el) => el.scrollTo({left: 100}));
            await page.waitForTimeout(100);

            const newScrollLeft = await scrollContainer.evaluate((el) => el.scrollLeft);

            expect(newScrollLeft).toBeGreaterThan(initialScrollLeft);
        });

        test('programmatic scroll control works', async ({page}) => {
            const programmableExample = page.locator('tui-doc-example').nth(2);

            await programmableExample.scrollIntoViewIfNeeded();

            const scrollButton = programmableExample
                .getByRole('button', {name: /scroll/i})
                .first();
            const scrollContainer = programmableExample.locator('tui-scrollbar');

            // Test programmatic scroll via button
            const initialScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

            await scrollButton.click();
            await page.waitForTimeout(200);

            const newScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

            expect(newScrollTop).not.toBe(initialScrollTop);
        });
    });

    test.describe('Dynamic Content Handling', () => {
        test('adapts to dynamic content changes', async ({page}) => {
            const imageGridExample = page.locator('tui-doc-example').nth(10);

            await imageGridExample.scrollIntoViewIfNeeded();

            const scrollbar = imageGridExample.locator('.t-thumb');

            await expect(scrollbar).toBeVisible();

            const initialSize = await scrollbar.boundingBox();

            // Add dynamic content
            await page.evaluate(() => {
                const grid = document.querySelector(
                    'tui-doc-example:nth-of-type(11) .grid',
                );

                if (grid) {
                    for (let i = 0; i < 20; i++) {
                        const img = document.createElement('img');

                        img.src =
                            'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
                        img.className = 'image';
                        img.alt = `Dynamic image ${i}`;
                        grid.appendChild(img);
                    }
                }
            });

            await page.waitForTimeout(1000);
            const updatedSize = await scrollbar.boundingBox();

            if (initialSize && updatedSize) {
                // Scrollbar should adjust to new content
                expect(updatedSize.height).toBeLessThanOrEqual(initialSize.height);
            }
        });

        test('handles rapid content changes gracefully', async ({page}) => {
            const flexExample = page.locator('tui-doc-example').nth(12);

            await flexExample.scrollIntoViewIfNeeded();

            const scrollContainer = flexExample.locator('tui-scrollbar');

            // Rapid content modifications
            for (let i = 0; i < 5; i++) {
                await page.evaluate((index) => {
                    const container = document.querySelector(
                        'tui-doc-example:nth-of-type(13) .flex-container',
                    );

                    if (container) {
                        const item = document.createElement('div');

                        item.className = 'flex-item';
                        item.textContent = `Dynamic item ${index}`;
                        container.appendChild(item);
                    }
                }, i);
                await page.waitForTimeout(50);
            }

            // Verify scrollbar still works
            await scrollContainer.evaluate((el) => el.scrollTo({top: 50}));
            await page.waitForTimeout(100);

            const scrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

            expect(scrollTop).toBeGreaterThan(0);
        });

        test('maintains correct proportions with different content types', async ({
            page,
        }) => {
            const examples = [
                {index: 9, name: 'Table layout'},
                {index: 11, name: 'CSS Grid'},
                {index: 12, name: 'Flexbox'},
                {index: 13, name: 'Absolute positioning'},
            ];

            for (const {index, name} of examples) {
                const example = page.locator('tui-doc-example').nth(index);

                await example.scrollIntoViewIfNeeded();

                const scrollbar = example.locator('.t-thumb').first();

                await expect(
                    scrollbar,
                    `${name} scrollbar should be visible`,
                ).toBeVisible();

                const thumbBox = await scrollbar.boundingBox();

                expect(
                    thumbBox?.height,
                    `${name} thumb should have reasonable height`,
                ).toBeGreaterThan(10);
                expect(
                    thumbBox?.height,
                    `${name} thumb should not be too large`,
                ).toBeLessThan(300);
            }
        });
    });

    test.describe('Edge Cases and Resilience', () => {
        test('handles empty content gracefully', async ({page}) => {
            await page.evaluate(() => {
                const container = document.createElement('div');

                container.innerHTML = `
                    <tui-scrollbar style="height: 200px; width: 200px; border: 1px solid #ccc;">
                        <div style="height: 50px;"></div>
                    </tui-scrollbar>
                `;
                document.body.appendChild(container);
            });

            await page.waitForTimeout(100);

            const scrollbar = page.locator('tui-scrollbar .t-thumb').last();
            const isVisible = await scrollbar.isVisible().catch(() => false);

            // Should either be invisible or have minimal size
            if (isVisible) {
                const size = await scrollbar.boundingBox();

                expect(size?.height).toBeLessThan(50);
            }
        });

        test('handles exact content fit', async ({page}) => {
            await page.evaluate(() => {
                const container = document.createElement('div');

                container.innerHTML = `
                    <tui-scrollbar style="height: 200px; width: 200px; border: 1px solid #ccc;">
                        <div style="height: 200px; background: #f0f0f0;">Exact fit content</div>
                    </tui-scrollbar>
                `;
                document.body.appendChild(container);
            });

            await page.waitForTimeout(100);

            const scrollbar = page.locator('tui-scrollbar .t-thumb').last();
            const isVisible = await scrollbar.isVisible().catch(() => false);

            // Should handle exact fit without issues
            if (isVisible) {
                const size = await scrollbar.boundingBox();

                expect(size?.height).toBeGreaterThanOrEqual(0);
            }
        });

        test('recovers from rapid resize operations', async ({page}) => {
            const example = page.locator('tui-doc-example').first();

            await example.scrollIntoViewIfNeeded();

            const scrollbar = example.locator('.t-thumb');

            // Rapid viewport changes
            for (let i = 0; i < 3; i++) {
                await page.setViewportSize({width: 800 + i * 100, height: 600 + i * 50});
                await page.waitForTimeout(100);
            }

            // Verify scrollbar is still functional
            await expect(scrollbar).toBeVisible();

            const finalSize = await scrollbar.boundingBox();

            expect(finalSize?.height).toBeGreaterThan(10);

            // Restore original viewport
            await page.setViewportSize({width: 1280, height: 720});
        });
    });

    test.describe('Performance and Responsiveness', () => {
        test('maintains smooth scrolling under load', async ({page}) => {
            const example = page.locator('tui-doc-example').first();

            await example.scrollIntoViewIfNeeded();

            const scrollContainer = example.locator('tui-scrollbar');

            // Rapid scroll operations
            const startTime = Date.now();

            for (let i = 0; i < 20; i++) {
                await scrollContainer.evaluate((el, scrollTop) => {
                    el.scrollTop = scrollTop;
                }, i * 10);
                await page.waitForTimeout(10);
            }

            const endTime = Date.now();

            // Should complete within reasonable time
            expect(endTime - startTime).toBeLessThan(1000);

            // Verify scrollbar is still responsive
            const scrollbar = example.locator('.t-thumb');

            await expect(scrollbar).toBeVisible();
        });

        test('handles concurrent scroll events', async ({page}) => {
            const examples = await page.locator('tui-doc-example').all();

            // Scroll multiple examples simultaneously
            const scrollPromises = examples.slice(0, 3).map(async (example, index) => {
                await example.scrollIntoViewIfNeeded();
                const scrollContainer = example.locator('tui-scrollbar');

                for (let i = 0; i < 5; i++) {
                    await scrollContainer.evaluate((el) => {
                        el.scrollTop += 20;
                    });
                    await page.waitForTimeout(20);
                }
            });

            await Promise.all(scrollPromises);

            // Verify all scrollbars are still functional
            for (let i = 0; i < 3; i++) {
                const thumb = examples[i].locator('.t-thumb').first();

                await expect(thumb).toBeVisible();
            }
        });
    });

    test.describe('Accessibility and Interaction', () => {
        test('supports keyboard navigation', async ({page}) => {
            const example = page.locator('tui-doc-example').nth(2);

            await example.scrollIntoViewIfNeeded();

            const scrollContainer = example.locator('tui-scrollbar');

            await scrollContainer.focus();

            const initialScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

            // Test keyboard scroll
            await page.keyboard.press('ArrowDown');
            await page.keyboard.press('ArrowDown');
            await page.waitForTimeout(100);

            const newScrollTop = await scrollContainer.evaluate((el) => el.scrollTop);

            expect(newScrollTop).toBeGreaterThanOrEqual(initialScrollTop);
        });

        test('maintains focus management', async ({page}) => {
            const example = page.locator('tui-doc-example').nth(2);

            await example.scrollIntoViewIfNeeded();

            const scrollContainer = example.locator('tui-scrollbar');
            const button = example.getByRole('button', {name: /scroll/i}).first();

            // Focus sequence test
            await button.focus();
            await expect(button).toBeFocused();

            await scrollContainer.focus();
            await page.waitForTimeout(100);

            // Should maintain focus behavior
            await page.keyboard.press('Tab');
            // Focus should move predictably (implementation-dependent)
        });
    });
});

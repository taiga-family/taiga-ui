import {DemoRoute} from '@demo/routes';
import {TuiDocumentationPagePO, tuiGoto} from '@demo-playwright/utils';
import {expect, type Locator, type Page, test} from '@playwright/test';

const PYTHONS = [
    'John Cleese',
    'Eric Idle',
    'Michael Palin',
    'Graham Chapman',
    'Terry Gilliam',
    'Terry Jones',
];

/**
 * Reordering goes through CSS `order`, so the visual sequence
 * is only available from the layout, not from the DOM order.
 */
async function visualOrder(tiles: Locator): Promise<string[]> {
    return tiles.evaluateAll((nodes) =>
        nodes
            .map((node) => {
                const {top, left} = node.getBoundingClientRect();

                return {text: (node.textContent ?? '').trim(), top, left};
            })
            .sort((a, b) => a.top - b.top || a.left - b.left)
            .map(({text}) => text),
    );
}

/**
 * Smooth scrolling after a fragment navigation moves the tiles under the
 * cursor between measuring and pressing, which drags the wrong tile
 */
async function stopScrolling(page: Page): Promise<void> {
    await page.addStyleTag({content: 'html, body { scroll-behavior: auto !important; }'});

    await page.evaluate(
        async () =>
            new Promise<void>((resolve) => {
                let previous = Number.NaN;

                const check = (): void => {
                    if (previous === window.scrollY) {
                        resolve();

                        return;
                    }

                    previous = window.scrollY;
                    requestAnimationFrame(check);
                };

                check();
            }),
    );
}

/**
 * A real pointer never teleports: the first small move starts the drag,
 * so the dragged tile is known before the jump. Without it the browser
 * fires `pointerenter` of the target before `pointermove` and the jump is
 * discarded, because the drag has not started yet.
 */
async function jumpTo(page: Page, from: Locator, to: Locator): Promise<void> {
    const source = await from.boundingBox();
    const target = await to.boundingBox();
    const center = (box: {
        x: number;
        y: number;
        width: number;
        height: number;
    }): [number, number] => [box.x + box.width / 2, box.y + box.height / 2];

    const [x, y] = center(source!);

    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + 1, y + 1);

    await page.mouse.move(...center(target!));
    await page.mouse.up();
}

test.describe('Tiles', () => {
    test('correctly loose box shadow after dragged', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Tiles}#vertical`);

        const example = new TuiDocumentationPagePO(page).getExample('#vertical');
        const drag = example.locator('tui-tile').first();
        const drop = example.locator('tui-tile').last();

        await expect.soft(example).toHaveScreenshot('01-tiles-drag-and-drop.png');

        // Dragging manually (dragTo is flaky method)
        await drag.hover();
        await page.mouse.down();
        await drop.hover();
        await page.mouse.up();

        await page.mouse.click(100, 100); // clear focus

        await expect.soft(example).toHaveScreenshot('02-tiles-drag-and-drop.png');
    });

    test('shifts skipped tiles when dragged over them in one jump', async ({page}) => {
        await tuiGoto(page, `${DemoRoute.Tiles}#vertical`);

        const example = new TuiDocumentationPagePO(page).getExample('#vertical');
        const tiles = example.locator('tui-tile');

        await example.scrollIntoViewIfNeeded();
        await stopScrolling(page);
        expect(await visualOrder(tiles)).toEqual(PYTHONS);

        await jumpTo(page, tiles.first(), tiles.last());
        await page.mouse.click(0, 0); // clear focus

        // v4 emits the new order through `timer(0)`, so it settles a tick later
        await expect
            .poll(async () => visualOrder(tiles), {message: 'skipped tiles should shift'})
            .toEqual([
                'Eric Idle',
                'Michael Palin',
                'Graham Chapman',
                'Terry Gilliam',
                'Terry Jones',
                'John Cleese',
            ]);
    });
});

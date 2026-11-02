import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiItemsWithMore} from '@taiga-ui/kit';

describe('ItemsWithMore', () => {
    @Component({
        imports: [TuiItem, TuiItemsWithMore],
        template: `
            <tui-items-with-more [linesLimit]="2">
                @for (item of items; track item) {
                    <span *tuiItem>{{ item }}</span>
                }
                <ng-template tuiMore>more</ng-template>
            </tui-items-with-more>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected readonly items = ['one', 'two', 'three'];
    }

    async function getReservedWidth(hostWidth: number): Promise<string> {
        jest.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockImplementation(
            function (this: HTMLElement) {
                if (this.tagName === 'TUI-ITEMS-WITH-MORE') {
                    return hostWidth;
                }

                return this.classList.contains('t-item_more') ? 58 : 164;
            },
        );

        const fixture = TestBed.createComponent(Test);

        fixture.detectChanges();
        await fixture.whenStable();
        await new Promise((resolve) => setTimeout(resolve));

        const host: HTMLElement =
            fixture.nativeElement.querySelector('tui-items-with-more');

        return host.style.getPropertyValue('--t-min-width');
    }

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('reserves the widest item width for "more" when parent is OnPush', async () => {
        await expect(getReservedWidth(300)).resolves.toBe('165px');
    });

    it('does not reserve more than the host width', async () => {
        await expect(getReservedWidth(164)).resolves.toBe('164px');
    });
});

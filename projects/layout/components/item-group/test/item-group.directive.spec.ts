import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

describe('ItemGroup', () => {
    @Component({
        imports: [TuiItem, TuiItemGroup, TuiItemsWithMore],
        template: `
            <div tuiItemGroup>
                <tui-items-with-more [linesLimit]="2">
                    <button
                        *tuiItem
                        id="item"
                        type="button"
                    >
                        item
                    </button>
                    <button
                        *tuiItem
                        type="button"
                    >
                        item
                    </button>
                    <ng-template tuiMore>
                        <button
                            id="more"
                            type="button"
                        >
                            more
                        </button>
                    </ng-template>
                </tui-items-with-more>
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;

    function isAnimated(): boolean {
        return !!fixture.nativeElement.querySelector('[tuiItemGroup]._animated');
    }

    function click(selector: string): void {
        fixture.nativeElement.querySelector(selector).click();
        fixture.detectChanges();
    }

    beforeEach(() => {
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('does not animate items initially', () => {
        expect(isAnimated()).toBe(false);
    });

    it('does not animate items after a click on an item', () => {
        click('#item');

        expect(isAnimated()).toBe(false);
    });

    it('animates items after a click on "more"', () => {
        click('#more');

        expect(isAnimated()).toBe(true);
    });
});

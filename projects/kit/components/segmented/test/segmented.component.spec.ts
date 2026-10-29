import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideRouter, RouterLink, RouterLinkActive} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiItemsWithMore, TuiSegmented} from '@taiga-ui/kit';

describe('Segmented', () => {
    describe('with ItemsWithMore', () => {
        @Component({
            imports: [TuiItemsWithMore, TuiSegmented],
            template: `
                <tui-segmented [(activeItemIndex)]="active">
                    <tui-items-with-more
                        [itemsLimit]="2"
                        [side]="side()"
                        [required]="active()"
                    >
                        @for (item of items(); track item) {
                            <button
                                *tuiItem
                                type="button"
                            >
                                <span>{{ item }}</span>
                            </button>
                        }
                        <ng-template tuiMore>
                            <button type="button">More</button>
                        </ng-template>
                    </tui-items-with-more>
                </tui-segmented>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly segmented = viewChild.required(TuiSegmented);
            public readonly active = signal(0);
            public readonly side = signal<'end' | 'start'>('end');
            public readonly items = signal(['First', 'Second', 'Third']);
        }

        let fixture: ComponentFixture<Test>;

        function getItems(): HTMLButtonElement[] {
            return Array.from(
                fixture.nativeElement.querySelectorAll('div.t-item > button'),
            );
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({providers: [provideTaiga()]});
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
        });

        it('highlights the active segment inside an item wrapper', () => {
            fixture.componentInstance.active.set(1);
            fixture.detectChanges();

            expect(getItems()[1]?.classList.contains('tui-segmented_active')).toBe(true);
            expect(getItems()[0]?.classList.contains('tui-segmented_active')).toBe(false);
        });

        it('resolves clicks on nested segment content', () => {
            getItems()[1]?.querySelector('span')?.click();
            fixture.detectChanges();

            expect(fixture.componentInstance.active()).toBe(1);
            expect(getItems()[1]?.classList.contains('tui-segmented_active')).toBe(true);
        });

        it('does not select the More button', () => {
            fixture.nativeElement.querySelector('.t-item_more button').click();
            fixture.detectChanges();

            expect(fixture.componentInstance.active()).toBe(0);
        });

        it('keeps segment indexes when More is on the start side', () => {
            fixture.componentInstance.side.set('start');
            fixture.detectChanges();
            getItems()[1]?.click();
            fixture.detectChanges();

            expect(fixture.componentInstance.active()).toBe(1);
            expect(getItems()[1]?.classList.contains('tui-segmented_active')).toBe(true);
        });

        it('updates the highlight after replacing the items', () => {
            fixture.componentInstance.items.set(['New first', 'New second']);
            fixture.detectChanges();

            expect(getItems()[0]?.classList.contains('tui-segmented_active')).toBe(true);
        });

        it('measures the active segment relative to the segmented host', () => {
            const host = fixture.debugElement.query(
                By.directive(TuiSegmented),
            ).nativeElement;

            const wrapper = fixture.nativeElement.querySelector('tui-items-with-more');
            const item = getItems()[1]!;

            Object.defineProperties(wrapper, {
                offsetLeft: {value: 12},
                offsetTop: {value: 8},
                offsetParent: {value: host},
            });
            Object.defineProperties(item, {
                offsetWidth: {value: 80},
                offsetLeft: {value: 100},
                offsetTop: {value: 4},
                offsetParent: {value: wrapper},
            });
            fixture.componentInstance.active.set(1);
            fixture.detectChanges();

            expect(host.style.getPropertyValue('--t-left')).toBe('112px');
            expect(host.style.getPropertyValue('--t-top')).toBe('12px');
            expect(host.style.getPropertyValue('--t-width')).toBe('80px');
        });
    });

    describe('Segmented content', () => {
        @Component({
            imports: [TuiSegmented],
            template: `
                <tui-segmented [(activeItemIndex)]="active">
                    <button type="button">First</button>
                    <button type="button">Second</button>
                </tui-segmented>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Buttons {
            public readonly active = signal(0);
        }

        @Component({
            imports: [FormsModule, TuiItemsWithMore, TuiSegmented],
            template: `
                <tui-segmented [(activeItemIndex)]="active">
                    <tui-items-with-more>
                        @for (item of items; track item) {
                            <label *tuiItem>
                                <input
                                    type="radio"
                                    name="segment"
                                    [value]="item"
                                    [(ngModel)]="value"
                                />
                                {{ item }}
                            </label>
                        }
                    </tui-items-with-more>
                </tui-segmented>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Radios {
            public readonly active = signal(0);
            public readonly items = ['First', 'Second', 'Third'];
            public readonly value = signal('Second');
        }

        @Component({template: ''})
        class Page {}

        @Component({
            imports: [RouterLink, RouterLinkActive, TuiItemsWithMore, TuiSegmented],
            template: `
                <tui-segmented [(activeItemIndex)]="active">
                    <tui-items-with-more>
                        @for (item of items; track item) {
                            <a
                                *tuiItem
                                routerLinkActive
                                [routerLink]="item"
                            >
                                {{ item }}
                            </a>
                        }
                    </tui-items-with-more>
                </tui-segmented>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Links {
            public readonly active = signal(0);
            public readonly items = ['/first', '/second', '/third'];
        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    provideTaiga(),
                    provideRouter([
                        {path: 'first', component: Page},
                        {path: 'second', component: Page},
                        {path: 'third', component: Page},
                    ]),
                ],
            });
        });

        async function settle(fixture: ComponentFixture<unknown>): Promise<void> {
            await fixture.whenStable();
            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
        }

        it('preserves direct child button selection', () => {
            const fixture = TestBed.createComponent(Buttons);

            fixture.detectChanges();
            fixture.nativeElement.querySelectorAll('button')[1].click();
            fixture.detectChanges();

            expect(fixture.componentInstance.active()).toBe(1);
            expect(
                fixture.nativeElement.querySelector('.tui-segmented_active').textContent,
            ).toBe('Second');
        });

        it('tracks programmatic radio changes inside item templates', async () => {
            const fixture = TestBed.createComponent(Radios);

            fixture.detectChanges();
            await settle(fixture);
            expect(fixture.componentInstance.active()).toBe(1);

            fixture.componentInstance.value.set('Third');
            fixture.detectChanges();
            await settle(fixture);

            expect(fixture.componentInstance.active()).toBe(2);
            expect(
                fixture.nativeElement.querySelector('.tui-segmented_active').textContent,
            ).toContain('Third');
        });

        it('tracks active router links inside item templates', async () => {
            const harness = await RouterTestingHarness.create('/second');
            const fixture = TestBed.createComponent(Links);

            fixture.detectChanges();
            await settle(fixture);
            expect(fixture.componentInstance.active()).toBe(1);

            await harness.navigateByUrl('/third');
            await settle(fixture);

            expect(fixture.componentInstance.active()).toBe(2);
            expect(
                fixture.nativeElement.querySelector('.tui-segmented_active').textContent,
            ).toContain('/third');
        });
    });
});

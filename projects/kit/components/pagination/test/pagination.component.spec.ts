import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiPaginationComponent, TuiPaginationModule} from '@taiga-ui/kit';
import {TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

interface TuiPaginationParams {
    readonly activePadding?: number;

    readonly index?: number;

    readonly length?: number;

    readonly sidePadding?: number;
}

describe('TuiPaginationComponent', () => {
    @Component({
        template: `
            <tui-pagination
                [activePadding]="activePadding"
                [length]="length"
                [sidePadding]="sidePadding"
                [(index)]="index"
            ></tui-pagination>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPaginationComponent, {static: true})
        public component!: TuiPaginationComponent;

        public index = 0;

        public length = 50;

        public activePadding = 1;

        public sidePadding = 1;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPaginationComponent;
    let pageObject: TuiPageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-pagination__';
        },
    };

    function setParams({
        index,
        length,
        activePadding,
        sidePadding,
    }: TuiPaginationParams): void {
        if (tuiIsPresent<number>(index)) {
            testComponent.index = index;
        }

        if (tuiIsPresent<number>(length)) {
            testComponent.length = length;
        }

        if (tuiIsPresent<number>(activePadding)) {
            testComponent.activePadding = activePadding;
        }

        if (tuiIsPresent<number>(sidePadding)) {
            testComponent.sidePadding = sidePadding;
        }

        fixture.detectChanges();
    }

    function getElements(): readonly number[] {
        return pageObject
            .getAllByAutomationId(`${testContext.prefix}element`)
            .map<number>(({nativeElement}) => {
                const text: string = nativeElement.textContent.trim();

                return text === '…' ? 0 : Number(text);
            });
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TuiPaginationModule],
            declarations: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
    });

    describe('number of points', () => {
        describe('less than length', () => {
            beforeEach(() => {
                setParams({length: 99});
            });

            it('index = 0', () => {
                setParams({index: 0});
                expect(getElements()).toEqual([1, 2, 3, 4, 5, 0, 99]);
            });

            it('index = 2', () => {
                setParams({index: 2});
                expect(getElements()).toEqual([1, 2, 3, 4, 5, 0, 99]);
            });

            it('index = 4', () => {
                setParams({index: 4});
                expect(getElements()).toEqual([1, 0, 4, 5, 6, 0, 99]);
            });

            it('index = 5', () => {
                setParams({index: 5});
                expect(getElements()).toEqual([1, 0, 5, 6, 7, 0, 99]);
            });

            it('index = 97', () => {
                setParams({index: 97});
                expect(getElements()).toEqual([1, 0, 95, 96, 97, 98, 99]);
            });

            it('index = 98', () => {
                setParams({index: 98});
                expect(getElements()).toEqual([1, 0, 95, 96, 97, 98, 99]);
            });
        });

        describe('is equal to length', () => {
            describe('length = 3', () => {
                beforeEach(() => {
                    setParams({length: 3});
                });

                it('index = 0', () => {
                    setParams({index: 0});
                    expect(getElements()).toEqual([1, 2, 3]);
                });

                it('index = 1', () => {
                    setParams({index: 1});
                    expect(getElements()).toEqual([1, 2, 3]);
                });

                it('index = 2', () => {
                    setParams({index: 2});
                    expect(getElements()).toEqual([1, 2, 3]);
                });
            });

            describe('length = 5', () => {
                beforeEach(() => {
                    setParams({length: 5});
                });

                it('index = 0', () => {
                    setParams({index: 0});
                    expect(getElements()).toEqual([1, 2, 3, 4, 5]);
                });

                it('index = 2', () => {
                    setParams({index: 2});
                    expect(getElements()).toEqual([1, 2, 3, 4, 5]);
                });

                it('index = 4', () => {
                    setParams({index: 4});
                    expect(getElements()).toEqual([1, 2, 3, 4, 5]);
                });
            });
        });
    });

    describe('Page switching arrow behavior', () => {
        it('If the first item is selected, the left arrow is disabled, the right arrow is enabled', () => {
            setParams({index: 0});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(true);
            expect(rightArrowDisabledState).toBe(false);
        });

        it('If the second item is selected, the left arrow is on, as well as the right', () => {
            setParams({index: 1});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(false);
        });

        it('If the last item is selected, the right arrow is disabled, the left arrow is enabled', () => {
            setParams({index: 49});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(true);
        });

        it('If the penultimate item is selected, the right arrow is on, as well as the left', () => {
            setParams({index: 48});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(false);
        });
    });
});

import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {isPresent} from '@taiga-ui/cdk';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiPaginationComponent} from '../pagination.component';
import {TuiPaginationModule} from '../pagination.module';

interface TuiPaginationParams {
    readonly index?: number;

    readonly length?: number;

    readonly activePadding?: number;

    readonly sidePadding?: number;
}

describe('TuiPaginationComponent', () => {
    @Component({
        template: `
            <tui-pagination
                [(index)]="index"
                [length]="length"
                [activePadding]="activePadding"
                [sidePadding]="sidePadding"
            ></tui-pagination>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPaginationComponent, {static: true})
        component: TuiPaginationComponent;

        index = 0;

        length = 50;

        activePadding = 1;

        sidePadding = 1;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPaginationComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-pagination__';
        },
    };

    function setParams({index, length, activePadding, sidePadding}: TuiPaginationParams) {
        if (isPresent<number>(index)) {
            testComponent.index = index;
        }

        if (isPresent<number>(length)) {
            testComponent.length = length;
        }

        if (isPresent<number>(activePadding)) {
            testComponent.activePadding = activePadding;
        }

        if (isPresent<number>(sidePadding)) {
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

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPaginationModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
    });

    describe('количество пунктов', () => {
        describe('меньше чем length', () => {
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

        describe('равно length', () => {
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

    describe('Поведение стрелок переключения страниц', () => {
        it('Если выбран первый элемент, стрелка влево отключена, вправо - включена', () => {
            setParams({index: 0});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(true);
            expect(rightArrowDisabledState).toBe(false);
        });

        it('Если выбран второй элемент, стрелка влево включена, также как и вправо', () => {
            setParams({index: 1});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(false);
        });

        it('Если выбран последний элемент, стрелка вправа отключена, влево - включена', () => {
            setParams({index: 49});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(true);
        });

        it('Если выбран предпоследний элемент, стрелка вправа включена, также как и влево', () => {
            setParams({index: 48});

            const leftArrowDisabledState = component.arrowIsDisabledLeft;
            const rightArrowDisabledState = component.arrowIsDisabledRight;

            expect(leftArrowDisabledState).toBe(false);
            expect(rightArrowDisabledState).toBe(false);
        });
    });
});

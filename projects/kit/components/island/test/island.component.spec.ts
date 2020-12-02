import {Component, ViewChild} from '@angular/core';
import {DebugElement} from '@angular/core/src/debug/debug_node';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSizeL} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiTextAlign} from '../../../enums/text-align';
import {TuiIslandComponent} from '../island.component';
import {TuiIslandModule} from '../island.module';

describe('Island', () => {
    @Component({
        template: `
            <tui-island
                automation-id="tui-island__component"
                [hoverable]="hoverable"
                [size]="size"
                [textAlign]="textAlign"
            >
                Контент
            </tui-island>
        `,
    })
    class TestComponent {
        @ViewChild(TuiIslandComponent)
        component: TuiIslandComponent;

        hoverable = false;
        textAlign: TuiTextAlign = TuiTextAlign.Left;
        size: TuiSizeL = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiIslandComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-island__';
        },
    };

    function getIsland(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}component`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiIslandModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('size:', () => {
        it('если значение не задано, размер айленда m', () => {
            const size = component.sizeM;

            expect(size).toBe(true);
        });

        it('если значение l, размер айленда l', () => {
            testComponent.size = 'l';
            fixture.detectChanges();

            const size = component.sizeL;

            expect(size).toBe(true);
        });
    });

    describe('textAlign:', () => {
        it('если значение не задано, текст выровнен по левому краю', () => {
            const textAlign = component.textAlignLeft;

            expect(textAlign).toBe(true);
        });

        it('если передать center, текст будет выровнен по центру', () => {
            testComponent.textAlign = TuiTextAlign.Center;
            fixture.detectChanges();

            const textAlign = component.textAlignCenter;

            expect(textAlign).toBe(true);
        });
    });

    describe('hoverable:', () => {
        it('если false, ховер не работает', () => {
            expect(getIsland().classes['tui-island_hoverable']).toBe(false);
        });

        it('если true, ховер работает', () => {
            testComponent.hoverable = true;
            fixture.detectChanges();

            expect(getIsland().classes['tui-island_hoverable']).toBe(true);
        });
    });
});

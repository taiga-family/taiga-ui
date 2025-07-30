import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {TuiItem} from '@taiga-ui/cdk';
import {
    TuiAccordion,
    TuiAccordionDirective,
} from '@taiga-ui/experimental/components/accordion';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';

@Component({
    standalone: true,
    selector: 'test-child',
    template: 'child-content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestChild {
    public static constructorCallCount = 0;

    constructor() {
        TestChild.constructorCallCount++;
    }
}

@Component({
    standalone: true,
    selector: 'test-accordion-with-tui-item',
    imports: [TestChild, TuiAccordion, TuiAccordionDirective, TuiExpand, TuiItem],
    template: `
        <tui-accordion size="s">
            <button [(tuiAccordion)]="accordionOpen">press</button>
            <tui-expand>
                <ng-container *tuiItem>
                    <test-child />
                </ng-container>
            </tui-expand>
        </tui-accordion>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestAccordionWithTuiItem {
    public accordionOpen = signal<boolean>(false);
}

@Component({
    standalone: true,
    selector: 'test-expand-scenarios',
    imports: [TestChild, TuiExpand, TuiItem],
    template: `
        <tui-expand [expanded]="expandedWithTuiItem()">
            <ng-container *tuiItem>
                <test-child />
                <div>TuiItem content</div>
            </ng-container>
        </tui-expand>

        <tui-expand [expanded]="expandedWithoutTuiItem()">
            <test-child />
            <div>Regular content</div>
        </tui-expand>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestExpandScenarios {
    public expandedWithTuiItem = signal<boolean>(false);
    public expandedWithoutTuiItem = signal<boolean>(false);
}

describe('TuiExpand double projection fix', () => {
    beforeEach(() => {
        TestChild.constructorCallCount = 0;
    });

    describe('Accordion with TuiItem (issue reproduction)', () => {
        let fixture: ComponentFixture<TestAccordionWithTuiItem>;
        let component: TestAccordionWithTuiItem;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestAccordionWithTuiItem],
            }).compileComponents();

            fixture = TestBed.createComponent(TestAccordionWithTuiItem);
            component = fixture.componentInstance;
        });

        it('should create child component only once when accordion opens (issue #11477 fix)', fakeAsync(() => {
            fixture.detectChanges();
            tick();

            const initialCount = TestChild.constructorCallCount;

            component.accordionOpen.set(true);
            fixture.detectChanges();
            tick();

            expect(TestChild.constructorCallCount).toBeLessThanOrEqual(initialCount + 1);
            const afterOpenCount = TestChild.constructorCallCount;

            component.accordionOpen.set(false);
            fixture.detectChanges();
            tick();

            component.accordionOpen.set(true);
            fixture.detectChanges();
            tick();

            expect(TestChild.constructorCallCount).toBeLessThanOrEqual(
                afterOpenCount + 1,
            );
        }));
    });

    describe('TuiExpand behavior verification', () => {
        let fixture: ComponentFixture<TestExpandScenarios>;
        let component: TestExpandScenarios;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [TestExpandScenarios],
            }).compileComponents();

            fixture = TestBed.createComponent(TestExpandScenarios);
            component = fixture.componentInstance;
        });

        it('should handle both TuiItem and regular content correctly', fakeAsync(() => {
            fixture.detectChanges();
            tick();

            expect(TestChild.constructorCallCount).toBe(1);

            component.expandedWithTuiItem.set(true);
            fixture.detectChanges();
            tick();

            expect(TestChild.constructorCallCount).toBe(2);

            component.expandedWithoutTuiItem.set(true);
            fixture.detectChanges();
            tick();

            expect(TestChild.constructorCallCount).toBe(2);
        }));
    });
});

import {AsyncPipe, CommonModule} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, Input, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiTabs, TuiTabsDirective, TuiTabsHorizontal} from '@taiga-ui/kit';

describe('Tabs', () => {
    @Component({
        standalone: true,
        imports: [AsyncPipe, CommonModule, TuiTabs],
        template: `
            <tui-tabs [(activeItemIndex)]="activeItemIndex">
                <button
                    *ngFor="let tab of tabs"
                    tuiTab
                >
                    {{ tab }}
                </button>
            </tui-tabs>
        `,
    })
    class Test {
        @ViewChild(TuiTabsHorizontal, {static: true})
        public tabsHorizontalDirective!: TuiTabsHorizontal;

        @ViewChild(TuiTabsDirective, {static: true})
        public tabsDirective!: TuiTabsDirective;

        @Input()
        public activeItemIndex = 0;

        @Input()
        public tabs = [1, 2, 3];
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    function getTabs(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('[tuiTab]'));
    }

    describe('Tabs component', () => {
        it('Should render all tabs', () => {
            const tabs = [1, 2, 3, 4, 5];

            fixture.componentRef.setInput('tabs', tabs);
            fixture.detectChanges();

            expect(getTabs().length).toBe(tabs.length);
        });

        it('When you click on a tab it changes the active tab', () => {
            const [firstTab, secondTab] = getTabs().map(
                tab => tab.nativeElement as HTMLButtonElement,
            );

            expect(firstTab).toEqual(component.tabsDirective.activeElement);

            secondTab.click();
            fixture.detectChanges();

            expect(firstTab).not.toEqual(component.tabsDirective.activeElement);
            expect(secondTab).toEqual(component.tabsDirective.activeElement);
        });

        it('When a tab is active, it has the class _active', () => {
            const [firstTab, secondTab] = getTabs().map(
                tab => tab.nativeElement as HTMLButtonElement,
            );

            expect(firstTab.classList.contains('_active')).toBeTruthy();
            expect(secondTab.classList.contains('_active')).toBeFalsy();

            secondTab.click();
            fixture.detectChanges();

            expect(firstTab.classList.contains('_active')).toBeFalsy();
            expect(secondTab.classList.contains('_active')).toBeTruthy();
        });
    });
});

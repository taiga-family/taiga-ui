import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiFocusableDirective} from '../focusable.directive';
import {TuiFocusableModule} from '../focusable.module';

describe(`TuiFocusable directive`, () => {
    @Component({
        template: `
            <div [tuiFocusable]="focusable"></div>
        `,
    })
    class TestComponent {
        focusable!: boolean;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiFocusableModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.directive(TuiFocusableDirective));
    });

    it(`when tuiFocusable === false tabindex attribute is "-1"`, () => {
        testComponent.focusable = false;
        fixture.detectChanges();
        expect(testElement.nativeElement.tabIndex).toBe(-1);
    });

    it(`when tuiFocusable === true tabindex attribute is "0"`, () => {
        testComponent.focusable = true;
        fixture.detectChanges();
        expect(testElement.nativeElement.tabIndex).toBe(0);
    });
});

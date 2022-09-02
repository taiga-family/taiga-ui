import type {DebugElement} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiFocusedModule} from '../focused.module';

describe(`TuiFocused directive`, () => {
    @Component({
        template: `
            <div
                tabindex="0"
                class="main"
                (tuiFocusedChange)="onFocusedChange($event)"
            ></div>
            <div
                tabindex="0"
                class="other"
            ></div>
        `,
    })
    class TestComponent {
        focused = false;

        onFocusedChange(focused: boolean): void {
            this.focused = focused;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};
    let otherElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiFocusedModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.css(`.main`));
        otherElement = fixture.debugElement.query(By.css(`.other`));

        fixture.detectChanges();
    });

    it(`emits "true" when receives focus`, () => {
        testElement.nativeElement.focus();
        fixture.detectChanges();

        expect(testComponent.focused).toBe(true);
    });

    it(`emits "false" when loses focus`, () => {
        testElement.nativeElement.focus();
        fixture.detectChanges();
        otherElement.nativeElement.focus();
        fixture.detectChanges();

        expect(testComponent.focused).toBe(false);
    });
});

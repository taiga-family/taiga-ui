import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiInputInlineComponent, TuiInputInlineModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

describe(`InputInline`, () => {
    @Component({
        template: `
            <tui-input-inline [formControl]="control"></tui-input-inline>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputInlineComponent, {static: true})
        component!: TuiInputInlineComponent;

        control = new FormControl(``);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return `tui-input-inline__`;
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputInlineModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`placeholder`, () => {
        it(`displayed if no value`, () => {
            expect(getPlaceholder()).not.toBeNull();
        });

        it(`not displayed if there is a value`, () => {
            testComponent.control.setValue(`123`);
            fixture.detectChanges();
            expect(getPlaceholder()).toBeNull();
        });
    });

    describe(`entry field`, () => {
        it(`editable if not locked`, () => {
            expect(getNative()!.nativeElement.disabled).toBe(false);
        });

        it(`not editable if locked`, async () => {
            testComponent.control.disable();
            fixture.detectChanges();

            await fixture.whenStable();

            expect(getNative()?.nativeElement.disabled).toBe(true);
        });
    });

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getNative(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}native`);
    }
});

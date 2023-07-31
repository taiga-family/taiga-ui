import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiSizeL, TuiSizeS, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiInputPasswordComponent} from '../input-password.component';
import {TuiInputPasswordModule} from '../input-password.module';

describe(`InputPassword`, () => {
    @Component({
        template: `
            <tui-input-password
                [formControl]="control"
                [readOnly]="readOnly"
                [tuiTextfieldSize]="size"
            ></tui-input-password>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPasswordComponent, {static: true})
        component!: TuiInputPasswordComponent;

        control = new FormControl();
        readOnly = false;
        size: TuiSizeL | TuiSizeS = `m`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPasswordComponent;
    let pageObject: TuiPageObject<TestComponent>;

    function getIcon(): DebugElement | null {
        return pageObject.getByAutomationId(`tui-password__icon`);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputPasswordModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;

        fixture.detectChanges();
    });

    describe(`Field visibility`, () => {
        it(`Initially, the field is type = "password", so only dots are visible when entering`, () => {
            const inputType = component.inputType;

            expect(inputType).toBe(`password`);
        });

        it(`When you click on the "Show password" icon, the field becomes type = "text"`, () => {
            getIcon()!.nativeElement.click();

            const inputType = component.inputType;

            expect(inputType).toBe(`text`);
        });

        it(`With readOnly, the type field="password"`, () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe(`password`);
        });

        it(`When the field is disabled type="password"`, () => {
            testComponent.control.disable();
            fixture.detectChanges();

            const inputType = component.inputType;

            expect(inputType).toBe(`password`);
        });
    });
});

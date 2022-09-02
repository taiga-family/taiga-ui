import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputCopyComponent, TuiInputCopyModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

describe(`InputCopy`, () => {
    @Component({
        template: `
            <tui-input-copy
                [formControl]="control"
                [readOnly]="readOnly"
                [tuiTextfieldSize]="size"
            ></tui-input-copy>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCopyComponent, {static: true})
        component!: TuiInputCopyComponent;

        control = new FormControl();
        readOnly = false;
        size: TuiSizeS | TuiSizeL = `m`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputCopyComponent;
    let pageObject: TuiPageObject<TestComponent>;

    function getIcon(): DebugElement | null {
        return pageObject.getByAutomationId(`tui-copy__icon`);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputCopyModule,
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

    describe(`Copy icon visibility`, () => {
        it(`Initially present`, () => {
            const icon = getIcon();
            const iconSrc = component.icon;

            expect(icon).not.toBeNull();
            expect(iconSrc).toBe(`tuiIconCopyLarge`);
        });

        it(`If component is small, icon size is small`, () => {
            testComponent.size = `s`;
            fixture.detectChanges();

            const iconSrc = component.icon;

            expect(iconSrc).toBe(`tuiIconCopy`);
        });

        it(`Icon is still available in readonly mode`, () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getIcon()).not.toBeNull();
        });

        it(`There is no icon in disabled mode`, () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getIcon()).toBeNull();
        });
    });

    describe(`Behavior when clicking on the icon`, () => {
        it(`When you click on the "Copy" icon, copy command is executed`, () => {
            const func = spyOn(document, `execCommand`);

            getIcon()!.nativeElement.click();

            expect(func).toHaveBeenCalledWith(`copy`);
        });
    });
});

import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiAutofilledDirective, TuiAutofilledModule} from '@taiga-ui/cdk/directives';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`TuiAutofillModule`, () => {
    @Component({
        template: `
            <input
                id="cardNumber"
                type="text"
                [(ngModel)]="value"
                (tuiAutofilledChange)="autofilled = $event"
            />
        `,
    })
    class TestComponent {
        value = ``;
        autofilled = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let directiveInstance: TuiAutofilledDirective;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, TuiAutofilledModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        directiveInstance = fixture.debugElement
            .query(By.directive(TuiAutofilledDirective))
            .injector.get(TuiAutofilledDirective);
    });

    it(`correctly works if \`tuiAutofilledChange\` is set to \`input\``, () => {
        expect(testComponent.autofilled).toBeFalse();
        expect(testComponent.value).toBe(``);
        expect(getInputClassList(fixture)).toEqual([`tui-autofill`]);

        /**
         * emulate autofill (focus)
         */
        directiveInstance.transitionStartHandler({
            propertyName: `box-shadow`,
            target: getInput(fixture) as EventTarget,
        } as TransitionEvent);
        getInput(fixture).value = `1111 2222 3333 4444`;
        getInput(fixture).dispatchEvent(
            new InputEvent(`input`, {data: `1111 2222 3333 4444`}),
        );
        fixture.detectChanges();

        expect(getInputClassList(fixture)).toEqual([`tui-autofill`, `_autofilled`]);
        expect(testComponent.autofilled).toBeTrue();
        expect(testComponent.value).toBe(`1111 2222 3333 4444`);

        /**
         * emulate autofill (blur)
         */
        directiveInstance.transitionStartHandler({
            propertyName: `box-shadow`,
            target: getInput(fixture) as EventTarget,
        } as TransitionEvent);
        getInput(fixture).value = ``;
        getInput(fixture).dispatchEvent(new InputEvent(`input`, {data: ``}));
        fixture.detectChanges();

        expect(testComponent.autofilled).toBeFalse();
        expect(testComponent.value).toBe(``);
        expect(getInputClassList(fixture)).toEqual([`tui-autofill`]);
    });
});

function getInput<T>(fixture: ComponentFixture<T>): HTMLInputElement {
    return fixture.nativeElement?.querySelector(`#cardNumber`);
}

function getInputClassList<T>(fixture: ComponentFixture<T>): string[] {
    return Array.from(getInput<T>(fixture)?.classList || []).filter(
        className => !className.includes(`ng-`),
    );
}

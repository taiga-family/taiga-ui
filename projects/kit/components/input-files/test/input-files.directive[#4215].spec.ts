import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TuiIdService } from '@taiga-ui/cdk';
import {
    TUI_INPUT_FILES_DEFAULT_OPTIONS,
    TuiInputFilesComponent,
    TuiInputFilesDirective,
    TuiInputFilesModule,
    TuiInputFilesOptions
} from '@taiga-ui/kit';

describe(`InputFilesDirective (bug 4215) e2e`, () => {
    @Component({
        selector: `test-component`,
        template: `
            <tui-input-files ngModel>
                <input tuiInputFiles/>
            </tui-input-files>
        `
    })
    class TestComponent {
        @ViewChild(TuiInputFilesDirective, {read: ElementRef})
        inputElement: ElementRef<HTMLInputElement>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [FormsModule, TuiInputFilesModule],
    }).compileComponents());

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`should create`, () => {
        expect(component).toBeTruthy();
    });

    it(`should not have 'capture' attribute`, () => {
        expect(component.inputElement.nativeElement.getAttribute(`capture`)).toBeNull();
    });
});

describe(`InputFilesDirective (bug 4215) unit`, () => {
    /**
     * The behavior in the mobile browser is slightly different from the desktop one.
     * In the desktop browser, the property `capture` is not set for `input`
     *   document.createElement('input').capture -> undefined
     * But in mobile browser, the property `capture` always string ('' by default)
     *   document.createElement('input').capture -> ''
     * So, we cant use Nullish Coalescing in this case.
     */

    let directive: TuiInputFilesDirective;
    let options: TuiInputFilesOptions;
    let host: TuiInputFilesComponent;
    let elementRef: ElementRef;
    let idService: TuiIdService;

    beforeEach(() => {
        options = TUI_INPUT_FILES_DEFAULT_OPTIONS;
        host = {} as any;
        elementRef = new ElementRef({});
        idService = {} as any;
    });

    describe(`on mobile browser`, () => {
        beforeEach(() => {
            elementRef.nativeElement.capture = ``;
            directive = new TuiInputFilesDirective(host, elementRef, idService, options);
        });

        it(`capture should return defaultOptions.capture`, () => {
            options.capture = null;
            expect(directive.capture).toBeNull();
            options.capture = `environment`;
            expect(directive.capture).toBe(`environment`);
        });
    });

    describe(`on desktop browser`, () => {
        beforeEach(() => {
            elementRef.nativeElement.capture = undefined;
            directive = new TuiInputFilesDirective(host, elementRef, idService, options);
        });

        it(`capture should return defaultOptions.capture`, () => {
            options.capture = null;
            expect(directive.capture).toBeNull();
            options.capture = `environment`;
            expect(directive.capture).toBe(`environment`);
        });
    });
});

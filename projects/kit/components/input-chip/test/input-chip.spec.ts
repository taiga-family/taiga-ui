import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiInputChip, TuiInputChipDirective} from '@taiga-ui/kit';

describe('TuiInputChipDirective', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputChip],
        template: `
            <tui-textfield multi>
                <input
                    tuiInputChip
                    [clearOnSelect]="clearOnSelect()"
                    [formControl]="control"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<string[]>([]);
        public readonly clearOnSelect = signal(true);
    }

    let fixture: ComponentFixture<Test>;
    let directive: TuiInputChipDirective<unknown>;
    let input: HTMLInputElement;

    function type(value: string): void {
        input.value = value;
        input.dispatchEvent(new Event('input'));
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();

        directive = fixture.debugElement
            .query(By.directive(TuiInputChipDirective))
            .injector.get(TuiInputChipDirective);
        input = directive.el;
    });

    it('does not mutate source value when unique is enabled', () => {
        const value = ['foo', 'bar', 'foo'];

        directive.setValue(value);

        expect(value).toEqual(['foo', 'bar', 'foo']);
    });

    describe('clearOnSelect', () => {
        it('clears search text on selection by default', () => {
            type('py');
            directive.setValue(['python']);

            expect(input.value).toBe('');
        });

        it('keeps search text on selection when disabled', () => {
            fixture.componentInstance.clearOnSelect.set(false);
            fixture.detectChanges();
            type('py');
            directive.setValue(['python']);

            expect(input.value).toBe('py');
            expect(fixture.componentInstance.control.value).toEqual(['python']);
        });

        it('clears typed text turned into a chip even when disabled', () => {
            fixture.componentInstance.clearOnSelect.set(false);
            fixture.detectChanges();
            input.focus();
            type('foo,');

            expect(fixture.componentInstance.control.value).toEqual(['foo']);
            expect(input.value).toBe('');
        });

        it('clears search text when value is cleared even when disabled', () => {
            fixture.componentInstance.clearOnSelect.set(false);
            fixture.detectChanges();
            type('py');
            directive.setValue([]);

            expect(input.value).toBe('');
        });
    });
});

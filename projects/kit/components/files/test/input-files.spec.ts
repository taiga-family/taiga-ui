import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiFiles} from '@taiga-ui/kit';

describe('TuiInputFiles', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiFiles],
        template: `
            <label tuiInputFiles>
                <input
                    multiple
                    tuiInputFiles
                    [formControl]="control"
                />
            </label>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<File[] | null>(null);
    }

    it.each([false, true])('ignores text drops (existing files: %s)', (hasFiles) => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});

        const fixture = TestBed.createComponent(Test);
        const {control} = fixture.componentInstance;
        const initial = hasFiles ? [new File(['example'], 'example.txt')] : null;

        control.setValue(initial);
        fixture.detectChanges();

        const onChange = jest.fn();
        const subscription = control.valueChanges.subscribe(onChange);
        const element: HTMLElement = fixture.nativeElement;
        const drop = new Event('drop', {bubbles: true, cancelable: true});

        Object.defineProperty(drop, 'dataTransfer', {
            value: {files: [], types: ['text/plain']},
        });

        element.querySelector('input')?.dispatchEvent(drop);
        subscription.unsubscribe();

        expect(control.pristine).toBe(true);
        expect(onChange).not.toHaveBeenCalled();
        expect(control.value === initial).toBe(true);
    });
});

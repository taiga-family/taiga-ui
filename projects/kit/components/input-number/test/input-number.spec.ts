import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiInputNumber} from '@taiga-ui/kit';

describe('TuiInputNumberDirective', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputNumber],
        template: `
            <tui-textfield>
                <input
                    tuiInputNumber
                    [formControl]="control"
                    [postfix]="postfix()"
                    [prefix]="prefix()"
                    [readonly]="readonly()"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<number | null>(null);
        public readonly prefix = signal('');
        public readonly postfix = signal('');
        public readonly readonly = signal(false);
    }

    let fixture: ComponentFixture<Test>;
    let component: Test;
    let input: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
        input = fixture.nativeElement.querySelector('input');
    });

    it.each([
        {prefix: '', postfix: '%'},
        {prefix: '', postfix: ' €'},
        {prefix: '$', postfix: ''},
        {prefix: '$', postfix: 'kg'},
    ])('synchronously initializes $prefix/$postfix on focus', ({prefix, postfix}) => {
        component.prefix.set(prefix);
        component.postfix.set(postfix);
        fixture.detectChanges();

        input.focus();

        expect(input.value).toBe(`${prefix}${postfix}`);
        expect(input.selectionStart).toBe(prefix.length);
        expect(input.selectionEnd).toBe(prefix.length);

        fixture.detectChanges();

        expect(input.value).toBe(`${prefix}${postfix}`);
        expect(input.selectionStart).toBe(prefix.length);
        expect(input.selectionEnd).toBe(prefix.length);
        expect(component.control.value).toBeNull();
        expect(component.control.pristine).toBe(true);
    });

    it('does not add affixes to a readonly empty input', () => {
        component.postfix.set('%');
        component.readonly.set(true);
        fixture.detectChanges();

        input.focus();
        fixture.detectChanges();

        expect(input.value).toBe('');
    });

    it('moves caret to the end when an empty focused input receives a value', () => {
        input.focus();
        fixture.detectChanges();

        component.control.setValue(42);
        fixture.detectChanges();

        expect(input.value).toBe('42');
        expect(input.selectionStart).toBe(2);
        expect(input.selectionEnd).toBe(2);
    });
});

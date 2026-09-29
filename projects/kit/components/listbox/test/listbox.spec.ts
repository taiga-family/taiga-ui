import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga} from '@taiga-ui/core';
import {TuiListbox, TuiListboxOption} from '@taiga-ui/kit/components/listbox';

type Value = string | {id: number};

interface Item {
    id: number;
    value: Value;
    disabled?: boolean;
}

@Component({
    imports: [TuiListbox, TuiListboxOption],
    template: `
        <div
            aria-label="Frameworks"
            tuiListbox
            [(value)]="value"
            [disabled]="disabled()"
            [identityMatcher]="identityMatcher"
            [multiple]="multiple()"
        >
            @for (item of items(); track item.id) {
                <button
                    type="button"
                    tuiListboxOption
                    [disabled]="item.disabled || false"
                    [value]="item.value"
                >
                    {{ item.id }}
                </button>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Test {
    public readonly items = signal<Item[]>([
        {id: 1, value: 'angular'},
        {id: 2, value: 'react'},
        {id: 3, value: 'vue'},
    ]);

    public readonly value = signal<Value | readonly Value[] | null>('react');
    public readonly multiple = signal(false);
    public readonly disabled = signal(false);
    public identityMatcher = (a: Value, b: Value): boolean =>
        typeof a === 'object' && typeof b === 'object' ? a.id === b.id : a === b;
}

describe('Listbox', () => {
    let fixture: ComponentFixture<Test>;
    let component: Test;
    const list = (): HTMLElement => fixture.nativeElement.querySelector('[tuiListbox]');
    const options = (): HTMLButtonElement[] =>
        Array.from(fixture.nativeElement.querySelectorAll('[tuiListboxOption]'));

    const key = (target: HTMLElement, name: string): void => {
        target.dispatchEvent(new KeyboardEvent('keydown', {key: name, bubbles: true}));
        fixture.detectChanges();
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test, FormsTest],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('synchronizes a value assigned before projected options and selects one option', () => {
        expect(options().map((option) => option.getAttribute('aria-selected'))).toEqual([
            'false',
            'true',
            'false',
        ]);
        options()[2]!.click();
        fixture.detectChanges();
        expect(component.value()).toBe('vue');
        expect(options().map((option) => option.getAttribute('aria-selected'))).toEqual([
            'false',
            'false',
            'true',
        ]);
    });

    it('toggles multiple selection without changing it during navigation', () => {
        component.multiple.set(true);
        component.value.set(['angular']);
        fixture.detectChanges();
        options()[1]!.focus();
        key(options()[1]!, ' ');
        expect(component.value()).toEqual(['angular', 'react']);
        key(options()[1]!, ' ');
        expect(component.value()).toEqual(['angular']);
        key(options()[1]!, 'ArrowDown');
        expect(document.activeElement).toBe(options()[2]);
        expect(component.value()).toEqual(['angular']);
        expect(list().getAttribute('aria-multiselectable')).toBe('true');
    });

    it('updates from an external value and selects with Enter', () => {
        component.value.set('angular');
        fixture.detectChanges();
        expect(options()[0]!.getAttribute('aria-selected')).toBe('true');

        options()[2]!.focus();
        key(options()[2]!, 'Enter');
        expect(component.value()).toBe('vue');
    });

    it('skips disabled options with arrows, Home and End', () => {
        component.items.set([
            {id: 1, value: 'angular'},
            {id: 2, value: 'react', disabled: true},
            {id: 3, value: 'vue'},
        ]);
        fixture.detectChanges();
        list().focus();
        expect(document.activeElement).toBe(options()[0]);
        key(options()[0]!, 'ArrowDown');
        expect(document.activeElement).toBe(options()[2]);
        key(options()[2]!, 'Home');
        expect(document.activeElement).toBe(options()[0]);
        key(options()[0]!, 'End');
        expect(document.activeElement).toBe(options()[2]);
        key(options()[2]!, 'ArrowUp');
        expect(document.activeElement).toBe(options()[0]);
        options()[1]!.click();
        expect(component.value()).toBe('react');
        expect(options()[1]!.getAttribute('aria-disabled')).toBe('true');
    });

    it('keeps selected disabled options selected and has no target if all are disabled', () => {
        component.items.set([{id: 1, value: 'react', disabled: true}]);
        fixture.detectChanges();
        expect(options()[0]!.getAttribute('aria-selected')).toBe('true');
        list().focus();
        key(list(), 'ArrowDown');
        expect(document.activeElement).toBe(list());
    });

    it('preserves value when selected option is removed and restores it if reinserted', () => {
        component.items.set([{id: 1, value: 'angular'}]);
        fixture.detectChanges();
        expect(component.value()).toBe('react');
        component.items.update((items) => [...items, {id: 2, value: 'react'}]);
        fixture.detectChanges();
        expect(options()[1]!.getAttribute('aria-selected')).toBe('true');
    });

    it('recovers focus after removal and retains the active option through insertions and reorder', async () => {
        options()[1]!.focus();
        component.items.update((items) => [{id: 4, value: 'svelte'}, ...items]);
        fixture.detectChanges();
        expect(document.activeElement).toBe(options()[2]);
        component.items.update((items) => [...items].reverse());
        fixture.detectChanges();
        await Promise.resolve();
        expect(document.activeElement).toBe(options()[1]);
        component.items.update((items) => items.filter((item) => item.id !== 2));
        fixture.detectChanges();
        await Promise.resolve();
        expect(document.activeElement).toBe(options()[1]);
    });

    it('treats duplicate primitive and comparator-equal object values as one identity', () => {
        component.multiple.set(true);
        component.value.set([]);
        component.items.set([
            {id: 1, value: 'same'},
            {id: 2, value: 'same'},
            {id: 3, value: {id: 7}},
            {id: 4, value: {id: 7}},
        ]);
        fixture.detectChanges();
        options()[1]!.click();
        options()[2]!.click();
        fixture.detectChanges();
        expect(options().map((option) => option.getAttribute('aria-selected'))).toEqual([
            'true',
            'true',
            'true',
            'true',
        ]);
        options()[3]!.click();
        fixture.detectChanges();
        expect(component.value()).toEqual(['same']);
    });

    it('exposes ARIA roles and prevents selection when the list becomes disabled', () => {
        options()[0]!.focus();
        component.disabled.set(true);
        fixture.detectChanges();
        key(options()[0]!, 'End');
        options()[2]!.click();
        expect(component.value()).toBe('react');
        expect(list().getAttribute('role')).toBe('listbox');
        expect(list().getAttribute('aria-disabled')).toBe('true');
        expect(options()[0]!.getAttribute('role')).toBe('option');
    });

    @Component({
        imports: [ReactiveFormsModule, TuiListbox, TuiListboxOption],
        template: `
            <div
                aria-label="Choices"
                tuiListbox
                [formControl]="control"
            >
                <button
                    type="button"
                    tuiListboxOption
                    value="one"
                >
                    One
                </button>
                <button
                    type="button"
                    tuiListboxOption
                    value="two"
                >
                    Two
                </button>
            </div>
        `,
    })
    class FormsTest {
        public readonly control = new FormControl('two');
    }

    it('reads and writes a reactive control and respects disabled state', () => {
        const fixture = TestBed.createComponent(FormsTest);

        fixture.detectChanges();
        const buttons: HTMLButtonElement[] = Array.from(
            fixture.nativeElement.querySelectorAll('[tuiListboxOption]'),
        );

        expect(buttons[1]!.getAttribute('aria-selected')).toBe('true');
        buttons[0]!.click();
        expect(fixture.componentInstance.control.value).toBe('one');
        fixture.componentInstance.control.disable();
        fixture.detectChanges();
        buttons[1]!.click();
        expect(fixture.componentInstance.control.value).toBe('one');
    });
});

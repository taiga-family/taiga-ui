import {ChangeDetectionStrategy, Component} from '@angular/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {
    provideTaiga,
    TUI_DROPDOWN_COMPONENT,
    TuiDropdown,
    tuiDropdownHoverOptionsProvider,
    TuiRoot,
} from '@taiga-ui/core';

describe('TuiDropdownHover with a custom dropdown component', () => {
    @Component({
        selector: 'tui-test-dropdown',
        imports: [TuiDropdown],
        template: '<tui-dropdown />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Dropdown {}

    @Component({
        imports: [TuiDropdown, TuiRoot],
        template: `
            <tui-root>
                <button
                    tuiDropdown="Content"
                    tuiDropdownHover
                    type="button"
                >
                    Hover me
                </button>
                <p>Outside</p>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{provide: TUI_DROPDOWN_COMPONENT, useValue: Dropdown}],
    })
    class Test {}

    it('closes when the pointer leaves', fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                tuiDropdownHoverOptionsProvider({showDelay: 0, hideDelay: 0}),
            ],
        });

        const fixture = TestBed.createComponent(Test);
        const root: HTMLElement = fixture.nativeElement;
        const button = root.querySelector('button')!;
        const dropdown = (): Element | null => root.querySelector('tui-dropdown');

        fixture.detectChanges();
        button.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
        tick();
        fixture.detectChanges();

        button.dispatchEvent(
            new MouseEvent('mouseout', {bubbles: true, relatedTarget: dropdown()}),
        );
        tick();
        fixture.detectChanges();

        expect(dropdown()).not.toBeNull();

        dropdown()?.dispatchEvent(
            new MouseEvent('mouseout', {
                bubbles: true,
                relatedTarget: root.querySelector('p'),
            }),
        );
        tick();
        fixture.detectChanges();

        expect(dropdown()).toBeNull();

        fixture.destroy();
    }));
});

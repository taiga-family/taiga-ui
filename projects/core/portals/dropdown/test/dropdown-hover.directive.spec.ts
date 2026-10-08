import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {
    provideTaiga,
    TuiDialogService,
    TuiDropdown,
    TuiDropdownHover,
    tuiDropdownHoverOptionsProvider,
    TuiRoot,
} from '@taiga-ui/core';

describe('TuiDropdownHover', () => {
    @Component({
        imports: [TuiDropdown, TuiRoot],
        template: `
            <tui-root>
                <button
                    class="before"
                    type="button"
                >
                    Before
                </button>
                <button
                    tuiDropdown="Dropdown content"
                    tuiDropdownHover
                    type="button"
                    (click)="dialogs.open('Dialog').subscribe()"
                >
                    Hover me
                </button>
                <button
                    class="after"
                    type="button"
                >
                    After
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly dialogs = inject(TuiDialogService);
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                tuiDropdownHoverOptionsProvider({showDelay: 0, hideDelay: 0}),
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    function getHover(): TuiDropdownHover {
        return fixture.debugElement
            .query(By.directive(TuiDropdownHover))
            .injector.get(TuiDropdownHover);
    }

    function getTrigger(): HTMLButtonElement {
        return fixture.debugElement.query(By.directive(TuiDropdownHover)).nativeElement;
    }

    function getButton(selector: string): HTMLButtonElement {
        return fixture.nativeElement.querySelector(selector);
    }

    function mouseover(element: Element): void {
        element.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
    }

    function openDropdown(): void {
        const button = getTrigger();

        button.focus();
        mouseover(button);
        tick();
        fixture.detectChanges();

        expect(getHover().hovered()).toBe(true);
        expect(fixture.nativeElement.querySelector('tui-dropdown')).not.toBeNull();
    }

    it('is not hovered when the pointer is over a dialog obscuring the dropdown', fakeAsync(() => {
        openDropdown();
        getTrigger().click();
        fixture.detectChanges();
        tick();

        const dialog = fixture.nativeElement.querySelector('tui-dialog');

        expect(dialog).not.toBeNull();

        mouseover(dialog);
        tick();
        fixture.detectChanges();

        expect(getHover().hovered()).toBe(false);

        fixture.destroy();
    }));

    it('closes when focus moves to the next element', fakeAsync(() => {
        openDropdown();
        getButton('.after').focus();
        tick();
        fixture.detectChanges();

        expect(getHover().hovered()).toBe(false);
        expect(fixture.nativeElement.querySelector('tui-dropdown')).toBeNull();
    }));

    it('closes when focus moves to the previous element', fakeAsync(() => {
        openDropdown();
        getButton('.before').focus();
        tick();
        fixture.detectChanges();

        expect(getHover().hovered()).toBe(false);
        expect(fixture.nativeElement.querySelector('tui-dropdown')).toBeNull();
    }));
});

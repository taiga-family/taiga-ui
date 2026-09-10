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
                    tuiDropdown="Dropdown content"
                    tuiDropdownHover
                    type="button"
                    (click)="dialogs.open('Dialog').subscribe()"
                >
                    Hover me
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

    function mouseover(element: Element): void {
        element.dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
    }

    it('is not hovered when the pointer is over a dialog obscuring the dropdown', fakeAsync(() => {
        const button = fixture.debugElement.query(By.css('button')).nativeElement;

        button.focus();
        mouseover(button);
        tick();
        fixture.detectChanges();

        expect(getHover().hovered()).toBe(true);
        expect(fixture.nativeElement.querySelector('tui-dropdown')).not.toBeNull();

        button.click();
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
});

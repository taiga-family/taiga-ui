import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {
    provideTaiga,
    TuiDropdown,
    TuiDropdownHover,
    tuiDropdownHoverOptionsProvider,
    TuiRoot,
} from '@taiga-ui/core';

describe('TuiDropdownSheet', () => {
    @Component({
        imports: [TuiDropdown, TuiDropdownHover, TuiDropdownSheet, TuiRoot],
        template: `
            <tui-root>
                <button
                    tuiDropdown="Content"
                    tuiDropdownHover
                    tuiDropdownSheet
                    type="button"
                >
                    Open
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                {provide: WA_IS_MOBILE, useValue: true},
                tuiDropdownHoverOptionsProvider({showDelay: 0, hideDelay: 0}),
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    function button(): HTMLElement {
        return fixture.debugElement.query(By.css('button')).nativeElement;
    }

    function sheet(): Element | null {
        return fixture.nativeElement.querySelector('tui-sheet-dialog');
    }

    function hover(): void {
        button().dispatchEvent(new MouseEvent('mouseover', {bubbles: true}));
        tick();
        fixture.detectChanges();
        tick();
    }

    it('reopens on the next hover after the sheet is dismissed', fakeAsync(() => {
        hover();
        expect(sheet()).not.toBeNull();

        // Dismiss via the backdrop (click.self on the sheet host) without a
        // hover reset — the case that used to leave the dropdown stuck open.
        sheet()!.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        tick();
        fixture.detectChanges();
        tick();
        expect(sheet()).toBeNull();

        hover();
        expect(sheet()).not.toBeNull();

        fixture.destroy();
    }));
});

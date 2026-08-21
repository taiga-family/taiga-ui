import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Searchbar', () => {
    @Component({
        imports: [TuiButton, TuiPlatform, TuiSearchbar],
        template: `
            <section tuiPlatform="android">
                <tui-searchbar [appearance]="appearance()">
                    <input tuiSearch />
                    <button
                        tuiButton
                        type="button"
                    >
                        Cancel
                    </button>
                </tui-searchbar>
            </section>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly appearance = signal('');
    }

    let fixture: ComponentFixture<Test>;

    const searchbar = (): HTMLElement =>
        fixture.nativeElement.querySelector('tui-searchbar');

    const input = (): HTMLInputElement =>
        fixture.nativeElement.querySelector('tui-searchbar input');

    const cancel = (): HTMLButtonElement =>
        fixture.nativeElement.querySelector('tui-searchbar button');

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideEventPlugins()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('projects the input and the cancel button', () => {
        expect(input()).toBeTruthy();
        expect(cancel().textContent?.trim()).toBe('Cancel');
    });

    it('turns the projected input into a native search field', () => {
        expect(input().type).toBe('search');
    });

    it('reflects the appearance for styling', () => {
        expect(searchbar().getAttribute('data-appearance')).toBe('');

        fixture.componentInstance.appearance.set('floating');
        fixture.detectChanges();

        expect(searchbar().getAttribute('data-appearance')).toBe('floating');
    });

    it('gives the cancel button platform-specific options', () => {
        expect(cancel().getAttribute('data-appearance')).toBe('action');
        expect(cancel().getAttribute('data-size')).toBe('s');
    });
});

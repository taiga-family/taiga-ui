import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiSearchbar} from '@taiga-ui/addon-mobile';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('Searchbar', () => {
    describe('on a search element', () => {
        @Component({
            imports: [TuiButtonX, TuiPlatform, TuiSearchbar],
            template: `
                <section tuiPlatform="android">
                    <search
                        tuiSearchBar
                        [appearance]="appearance()"
                    >
                        <input tuiSearchBar />
                        <button tuiButtonX>Cancel</button>
                    </search>
                </section>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly appearance = signal('');
        }

        let fixture: ComponentFixture<Test>;

        const searchbar = (): HTMLElement =>
            fixture.nativeElement.querySelector('search');

        const input = (): HTMLInputElement =>
            fixture.nativeElement.querySelector('search input');

        const cancel = (): HTMLButtonElement =>
            fixture.nativeElement.querySelector('search button');

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it('lays the input and the cancel button out in a row', () => {
            expect(input().closest('.t-wrapper')).toBeTruthy();
            expect(cancel().parentElement).toBe(
                input().closest('.t-wrapper')?.parentElement,
            );
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

        it('turns the close icon into a back arrow on android', () => {
            expect(cancel().style.getPropertyValue('--t-icon-start')).toContain(
                'arrow-left',
            );
        });
    });

    describe('on a form', () => {
        @Component({
            imports: [FormsModule, TuiButtonX, TuiSearchbar],
            template: `
                <search>
                    <form tuiSearchBar>
                        <input
                            name="query"
                            tuiSearchBar
                            [(ngModel)]="query"
                        />
                        <button
                            tuiButtonX
                            type="reset"
                        >
                            Cancel
                        </button>
                    </form>
                </search>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {
            public readonly query = signal<string | null>('');
        }

        let fixture: ComponentFixture<Test>;

        const input = (): HTMLInputElement =>
            fixture.nativeElement.querySelector('input');

        const cancel = (): HTMLButtonElement =>
            fixture.nativeElement.querySelector('button');

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            fixture.detectChanges();
        });

        it('works on a form, not only on search', () => {
            expect(fixture.nativeElement.querySelector('form > .t-wrapper')).toBeTruthy();
            expect(input().closest('form')).toBeTruthy();
        });

        // `NgForm` listens to the native reset event, so the model follows the field
        it('clears both the field and the model with the reset button', async () => {
            input().value = 'taiga';
            input().dispatchEvent(new Event('input'));
            await fixture.whenStable();

            expect(fixture.componentInstance.query()).toBe('taiga');

            cancel().click();
            await fixture.whenStable();

            expect(input().value).toBe('');
            expect(fixture.componentInstance.query()).toBeNull();
        });
    });
});

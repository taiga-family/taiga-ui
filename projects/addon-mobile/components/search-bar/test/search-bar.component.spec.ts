import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

describe('SearchBar', () => {
    describe('on a search element', () => {
        @Component({
            imports: [TuiButtonX, TuiPlatform, TuiSearchBar],
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

        const searchBar = (): HTMLElement =>
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

        // Android drops the field's magnifier when a button follows it, which is the
        // only thing that tells the two cases apart until `:has()` is supported
        it('leaves the field wrapper followed by the projected button', () => {
            expect(input().closest('.t-wrapper')?.nextElementSibling).toBe(cancel());
        });

        it('turns the projected input into a native search field', () => {
            expect(input().type).toBe('search');
        });

        it('reflects the appearance for styling', () => {
            expect(searchBar().getAttribute('data-appearance')).toBe('');

            fixture.componentInstance.appearance.set('floating');
            fixture.detectChanges();

            expect(searchBar().getAttribute('data-appearance')).toBe('floating');
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

    describe('without a cancel button', () => {
        @Component({
            imports: [TuiSearchBar],
            template: `
                <search tuiSearchBar>
                    <input tuiSearchBar />
                </search>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class Test {}

        it('leaves the field wrapper last, so android keeps the magnifier', async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();

            const fixture = TestBed.createComponent(Test);

            fixture.detectChanges();

            const wrapper = fixture.nativeElement.querySelector('.t-wrapper');

            expect(wrapper).toBeTruthy();
            expect(wrapper?.nextElementSibling).toBeNull();
        });
    });

    describe('on a form', () => {
        @Component({
            imports: [FormsModule, TuiButtonX, TuiSearchBar],
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

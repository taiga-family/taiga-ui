import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {
    type TuiSheetDialogOptions,
    tuiSheetDialogOptionsProvider,
    TuiSheetDialogService,
    TuiThemeColorService,
} from '@taiga-ui/addon-mobile';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';

describe('TuiSheetDialogService theme-color', () => {
    @Component({
        imports: [TuiRoot],
        template: '<tui-root />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let service: TuiSheetDialogService;
    let theme: TuiThemeColorService;

    function themeColor(): string | null {
        return (
            TestBed.inject(DOCUMENT)
                .querySelector('meta[name="theme-color"]')
                ?.getAttribute('content') ?? null
        );
    }

    async function setup(options: Partial<TuiSheetDialogOptions> = {}): Promise<void> {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [tuiSheetDialogOptionsProvider(options), provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        service = TestBed.inject(TuiSheetDialogService);
        theme = TestBed.inject(TuiThemeColorService);
        fixture.detectChanges();
    }

    it('reverts to the color set after construction, not the construction-time value', async () => {
        await setup();
        // App changes theme after the service already exists (e.g. a dark-mode effect).
        theme.color = '#000000';

        const sheet = service.open('content').subscribe();

        fixture.detectChanges();
        expect(themeColor()).toBe('#404040');

        sheet.unsubscribe();
        fixture.detectChanges();
        // Regression: the old code captured `initial` once at construction and
        // reverted to it here, losing the '#000000' write.
        expect(themeColor()).toBe('#000000');
    });

    it('reverts only when the last nested sheet closes, never onto the theme color', async () => {
        await setup();
        theme.color = '#123456';

        const outer = service.open('outer').subscribe();
        const inner = service.open('inner').subscribe();

        fixture.detectChanges();
        expect(themeColor()).toBe('#404040');

        inner.unsubscribe();
        fixture.detectChanges();
        // Outer is still open — must stay on the theme color, not revert early.
        expect(themeColor()).toBe('#404040');

        outer.unsubscribe();
        fixture.detectChanges();
        // Must land on the original color, never get locked onto the theme color.
        expect(themeColor()).toBe('#123456');
    });

    it('honours a custom themeColor from options', async () => {
        await setup({themeColor: '#112233'});
        theme.color = '#000000';

        const sheet = service.open('content').subscribe();

        fixture.detectChanges();
        expect(themeColor()).toBe('#112233');

        sheet.unsubscribe();
        fixture.detectChanges();
        expect(themeColor()).toBe('#000000');
    });

    it('leaves the address bar untouched when themeColor is null', async () => {
        await setup({themeColor: null});
        theme.color = '#000000';

        const sheet = service.open('content').subscribe();

        fixture.detectChanges();
        // Opt-out: the service must not touch the address bar at all.
        expect(themeColor()).toBe('#000000');

        sheet.unsubscribe();
        fixture.detectChanges();
        expect(themeColor()).toBe('#000000');
    });
});

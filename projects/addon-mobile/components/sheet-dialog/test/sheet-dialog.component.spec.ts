import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';

describe('TuiSheetDialog swipe-to-dismiss', () => {
    @Component({
        imports: [TuiRoot],
        template: '<tui-root />',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let service: TuiSheetDialogService;

    function sheet(): HTMLElement {
        return TestBed.inject(DOCUMENT).querySelector('tui-sheet-dialog')!;
    }

    async function setup(): Promise<void> {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        service = TestBed.inject(TuiSheetDialogService);
        fixture.detectChanges();
    }

    it('stays open on a scroll event when no touch gesture preceded it', async () => {
        await setup();

        let closed = false;
        const sub = service.open('content').subscribe({
            complete: () => {
                closed = true;
            },
        });

        fixture.detectChanges();

        // A scripted scroll (scrollTo/scrollIntoView, focus, or Playwright's
        // scrollIntoViewIfNeeded) fires a scroll event at scrollTop <= 0 without any
        // preceding touch — it must not be mistaken for a swipe-to-dismiss.
        sheet().dispatchEvent(new Event('scroll'));
        fixture.detectChanges();

        expect(closed).toBe(false);

        sub.unsubscribe();
    });

    it('closes when the sheet reaches the top after a real touch gesture', async () => {
        await setup();

        let closed = false;
        const sub = service.open('content').subscribe({
            complete: () => {
                closed = true;
            },
        });

        fixture.detectChanges();

        const doc = TestBed.inject(DOCUMENT);

        // Finger down then up while at the top — the actual dismiss gesture.
        doc.dispatchEvent(new Event('touchstart'));
        doc.dispatchEvent(new Event('touchend'));
        fixture.detectChanges();

        expect(closed).toBe(true);

        sub.unsubscribe();
    });
});

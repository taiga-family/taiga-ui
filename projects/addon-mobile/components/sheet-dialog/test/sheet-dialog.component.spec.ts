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

        doc.dispatchEvent(new Event('touchstart'));
        doc.dispatchEvent(new Event('touchend'));
        fixture.detectChanges();

        expect(closed).toBe(true);

        sub.unsubscribe();
    });
});

import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {provideTaiga, TuiDialogService, TuiHint, TuiRoot} from '@taiga-ui/core';

describe('Hint on mobile', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <button
                    id="hint-host"
                    tuiHint="Tooltip text"
                    type="button"
                    [tuiHintShowDelay]="showDelay()"
                    (click)="onClick()"
                >
                    Tooltip host
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly dialogs = inject(TuiDialogService);

        public readonly showDelay = signal(500);
        public openDialog = false;

        protected onClick(): void {
            if (this.openDialog) {
                this.dialogs.open('Dialog').subscribe();
            }
        }
    }

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga(), {provide: WA_IS_MOBILE, useValue: true}],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('waits for the configured show delay after a tap', fakeAsync(() => {
        fixture.componentInstance.showDelay.set(750);
        fixture.detectChanges();

        document.querySelector<HTMLElement>('#hint-host')!.click();
        tick(749);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).toBeNull();

        tick(1);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));

    it('does not show over a dialog opened by the same tap', fakeAsync(() => {
        const host = document.querySelector<HTMLElement>('#hint-host')!;

        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue({
            ...EMPTY_CLIENT_RECT,
            right: 40,
            bottom: 40,
            width: 40,
            height: 40,
        });
        jest.spyOn(document, 'elementFromPoint').mockImplementation(
            () => document.querySelector('tui-modal') || host,
        );
        fixture.componentInstance.openDialog = true;

        host.dispatchEvent(new Event('mouseenter'));
        tick(0);
        host.click();
        fixture.detectChanges();
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-dialog')).not.toBeNull();
        expect(document.querySelector('tui-hint')).toBeNull();
    }));

    it('shows without delay when the configured show delay is zero', fakeAsync(() => {
        fixture.componentInstance.showDelay.set(0);
        fixture.detectChanges();

        document.querySelector<HTMLElement>('#hint-host')!.click();
        tick(0);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));

    it('cancels a pending hint on pointerdown and can show it on the next tap', fakeAsync(() => {
        const host = document.querySelector<HTMLElement>('#hint-host')!;

        host.click();
        tick(250);
        document.body.dispatchEvent(new Event('pointerdown', {bubbles: true}));
        tick(500);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).toBeNull();

        host.click();
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));

    it('hides after the second tap with the mobile hide delay', fakeAsync(() => {
        const host = document.querySelector<HTMLElement>('#hint-host')!;

        host.click();
        tick(500);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).not.toBeNull();

        host.click();
        tick(99);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).not.toBeNull();

        tick(1);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).toBeNull();
    }));

    it('stays open after the first tap which also emulates mouseenter', fakeAsync(() => {
        const host = document.querySelector('#hint-host')!;

        host.dispatchEvent(new Event('mouseenter'));
        tick(0);
        host.dispatchEvent(new Event('click'));
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));
});

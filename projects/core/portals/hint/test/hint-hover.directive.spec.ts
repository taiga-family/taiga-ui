import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    type TemplateRef,
    viewChild,
} from '@angular/core';
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
                <span
                    id="non-interactive-hint-host"
                    tuiHint="Hint on a non-interactive host"
                >
                    Tooltip host without a primary action
                </span>
                <ng-template #dialogContent>
                    <button
                        id="dialog-hint-host"
                        tuiHint="Hint inside dialog"
                        type="button"
                    >
                        Tooltip host inside dialog
                    </button>
                </ng-template>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly dialogs = inject(TuiDialogService);

        public readonly showDelay = signal(500);
        public readonly dialogContent =
            viewChild.required<TemplateRef<unknown>>('dialogContent');

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

    it.each([0, 500, 750])(
        'shows immediately on longtap when tuiHintShowDelay is %i',
        fakeAsync((showDelay: number) => {
            fixture.componentInstance.showDelay.set(showDelay);
            fixture.detectChanges();

            document.querySelector('#hint-host')!.dispatchEvent(new Event('longtap'));
            tick(0);
            fixture.detectChanges();
            discardPeriodicTasks();

            expect(document.querySelector('tui-hint')).not.toBeNull();
        }),
    );

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
        tick(0);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-dialog')).not.toBeNull();
        expect(document.querySelector('tui-hint')).toBeNull();
    }));

    it('hides on outside pointerdown and reopens on longtap', fakeAsync(() => {
        const host = document.querySelector<HTMLElement>('#hint-host')!;

        host.dispatchEvent(new Event('longtap'));
        tick(0);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).not.toBeNull();

        document.body.dispatchEvent(new Event('pointerdown', {bubbles: true}));
        tick(100);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).toBeNull();

        host.dispatchEvent(new Event('longtap'));
        tick(0);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));

    it('shows for a host inside the open dialog', fakeAsync(() => {
        TestBed.inject(TuiDialogService)
            .open(fixture.componentInstance.dialogContent())
            .subscribe();
        fixture.detectChanges();
        tick(0);
        fixture.detectChanges();

        const host = document.querySelector<HTMLElement>('#dialog-hint-host')!;
        const modal = document.querySelector('tui-modal');

        expect(modal).not.toBeNull();

        jest.spyOn(host, 'getBoundingClientRect').mockReturnValue({
            ...EMPTY_CLIENT_RECT,
            right: 40,
            bottom: 40,
            width: 40,
            height: 40,
        });
        jest.spyOn(document, 'elementFromPoint').mockReturnValue(modal);

        host.dispatchEvent(new Event('longtap'));
        tick(0);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')?.textContent?.trim()).toBe(
            'Hint inside dialog',
        );
    }));

    it('hides after the second longtap with the mobile hide delay', fakeAsync(() => {
        const host = document.querySelector<HTMLElement>('#hint-host')!;

        host.dispatchEvent(new Event('longtap'));
        tick(0);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).not.toBeNull();

        host.dispatchEvent(new Event('longtap'));
        tick(99);
        fixture.detectChanges();

        expect(document.querySelector('tui-hint')).not.toBeNull();

        tick(1);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).toBeNull();
    }));

    it('stays open after the first tap which also emulates mouseenter', fakeAsync(() => {
        const host = document.querySelector('#non-interactive-hint-host')!;

        host.dispatchEvent(new Event('mouseenter'));
        tick(0);
        host.dispatchEvent(new Event('click'));
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));
});

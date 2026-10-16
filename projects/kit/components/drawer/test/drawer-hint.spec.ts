import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {EMPTY_CLIENT_RECT, TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {provideTaiga, TuiDialogService, TuiHint, TuiPopup, TuiRoot} from '@taiga-ui/core';
import {TUI_CONFIRM, TuiDrawer} from '@taiga-ui/kit';

describe('Drawer with a hint and a confirmation dialog', () => {
    @Component({
        imports: [TuiActiveZone, TuiDrawer, TuiHint, TuiObscured, TuiPopup, TuiRoot],
        template: `
            <tui-root>
                <button
                    #zone="tuiActiveZone"
                    id="drawer-trigger"
                    tuiActiveZone
                    tuiHint="Open drawer"
                    type="button"
                    [tuiObscuredEnabled]="open()"
                    (click)="open.set(true)"
                    (tuiActiveZoneChange)="onActive($event)"
                    (tuiObscured)="onActive(!$event)"
                >
                    Open drawer
                </button>
                <tui-drawer
                    *tuiPopup="open()"
                    [tuiActiveZoneParent]="zone"
                >
                    <button
                        id="delete-button"
                        tuiHint="Delete this item"
                        type="button"
                        (click)="onDelete()"
                    >
                        Delete
                    </button>
                </tui-drawer>
                <button
                    id="outside-button"
                    type="button"
                >
                    Outside
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        private readonly dialogs = inject(TuiDialogService);

        public readonly open = signal(false);

        protected onActive(active: boolean): void {
            if (!active) {
                this.open.set(false);
            }
        }

        protected onDelete(): void {
            this.dialogs
                .open(TUI_CONFIRM, {
                    label: 'Delete this item?',
                    closable: false,
                })
                .subscribe();
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

    it('keeps the drawer open while its confirmation dialog covers the trigger', fakeAsync(() => {
        const trigger = document.querySelector<HTMLButtonElement>('#drawer-trigger')!;

        jest.spyOn(trigger, 'getBoundingClientRect').mockReturnValue({
            ...EMPTY_CLIENT_RECT,
            right: 40,
            bottom: 40,
            width: 40,
            height: 40,
        });
        jest.spyOn(document, 'elementFromPoint').mockImplementation(
            () =>
                document.querySelector('tui-modal') ||
                document.querySelector('tui-drawer') ||
                trigger,
        );

        trigger.focus();
        trigger.click();
        fixture.detectChanges();
        tick(0);
        fixture.detectChanges();

        const drawer = document.querySelector('tui-drawer');
        const button = document.querySelector<HTMLButtonElement>('#delete-button')!;

        expect(drawer).not.toBeNull();
        expect(document.querySelector('tui-hint')?.textContent?.trim()).toBe(
            'Open drawer',
        );

        jest.spyOn(button, 'getBoundingClientRect').mockReturnValue({
            ...EMPTY_CLIENT_RECT,
            right: 40,
            bottom: 40,
            width: 40,
            height: 40,
        });

        button.focus();
        button.dispatchEvent(new Event('pointerdown', {bubbles: true}));
        button.click();
        fixture.detectChanges();
        tick(100);
        fixture.detectChanges();

        const dialog = document.querySelector('tui-dialog');

        expect(dialog).not.toBeNull();
        expect(document.querySelector('tui-hint')).toBeNull();

        const confirm = dialog!.querySelector<HTMLButtonElement>('button')!;
        const zone = fixture.debugElement
            .query(By.css('#drawer-trigger'))
            .injector.get(TuiActiveZone);

        confirm.focus();
        confirm.dispatchEvent(new Event('pointerdown', {bubbles: true}));
        tick(100);
        fixture.detectChanges();

        expect(zone.contains(confirm)).toBe(true);
        expect(fixture.componentInstance.open()).toBe(true);
        expect(document.querySelector('tui-drawer')).toBe(drawer);
        expect(document.querySelector('tui-dialog')).toBe(dialog);
        expect(document.querySelector('tui-hint')).toBeNull();

        confirm.click();
        tick();
        fixture.detectChanges();

        document.querySelector<HTMLButtonElement>('#outside-button')!.focus();
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(fixture.componentInstance.open()).toBe(false);
        expect(document.querySelector('tui-drawer')).toBeNull();
    }));
});

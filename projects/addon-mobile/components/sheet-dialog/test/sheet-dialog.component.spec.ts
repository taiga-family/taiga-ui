import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {BehaviorSubject} from 'rxjs';
import {TUI_DIALOGS_CLOSE} from '@taiga-ui/core/components/dialog';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {TuiSheetDialog, type TuiSheetDialogOptions, TuiSheetDialogService} from '../index';

describe('TuiSheetDialog TUI_DIALOGS_CLOSE', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot, TuiSheetDialog],
        template: '<tui-root></tui-root>',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let tuiSheetDialogService: TuiSheetDialogService;
    let closeSubject: BehaviorSubject<void>;

    beforeEach(async () => {
        closeSubject = new BehaviorSubject<void>(undefined as any);
        
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                NG_EVENT_PLUGINS,
                {
                    provide: TUI_DIALOGS_CLOSE,
                    useValue: closeSubject.asObservable(),
                },
            ],
        });
        
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        tuiSheetDialogService = TestBed.inject(TuiSheetDialogService);
    });

    it('should close when TUI_DIALOGS_CLOSE emits', (done) => {
        const options: Partial<TuiSheetDialogOptions> = {
            closeable: true,
        };

        // Open dialog
        const subscription = tuiSheetDialogService
            .open('Test content', options)
            .subscribe({
                complete: () => {
                    // Dialog was closed
                    subscription.unsubscribe();
                    done();
                },
                error: done.fail,
            });

        fixture.detectChanges();

        // Trigger TUI_DIALOGS_CLOSE
        closeSubject.next();
    });

    it('should not close when TUI_DIALOGS_CLOSE emits and closeable is false', (done) => {
        const options: Partial<TuiSheetDialogOptions> = {
            closeable: false,
        };

        let completed = false;

        // Open dialog
        const subscription = tuiSheetDialogService
            .open('Test content', options)
            .subscribe({
                complete: () => {
                    completed = true;
                },
                error: done.fail,
            });

        fixture.detectChanges();

        // Trigger TUI_DIALOGS_CLOSE
        closeSubject.next();

        // Wait a bit and verify dialog is still open
        setTimeout(() => {
            expect(completed).toBe(false);
            subscription.unsubscribe();
            done();
        }, 50);
    });
});
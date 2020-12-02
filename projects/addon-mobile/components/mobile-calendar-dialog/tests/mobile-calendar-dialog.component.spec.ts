import {Component, Inject} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiDialogModule, TuiDialogService, TuiRootModule} from '@taiga-ui/core';
import {TUI_CALENDAR_DATA_STREAM, TuiMobileCalendarData} from '@taiga-ui/kit';
import {PageObject} from '@taiga-ui/testing';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';
import {of} from 'rxjs';
import {TuiMobileCalendarDialogComponent} from '../mobile-calendar-dialog.component';
import {TuiMobileCalendarDialogModule} from '../mobile-calendar-dialog.module';

const today = TuiDay.currentLocal();

describe('MobileCalendarDialog', () => {
    @Component({
        template: ` <tui-root></tui-root> `,
        providers: [
            {
                provide: TUI_CALENDAR_DATA_STREAM,
                useValue: of(today),
            },
        ],
    })
    class TestComponent {
        constructor(
            @Inject(TuiDialogService) readonly dialogsService: TuiDialogService,
        ) {}
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const content = new PolymorpheusComponent(TuiMobileCalendarDialogComponent);

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiRootModule,
                TuiDialogModule,
                TuiMobileCalendarDialogModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    function showDialog(data?: TuiMobileCalendarData, observer?: any) {
        testComponent.dialogsService
            .open(content, {
                size: 'fullscreen',
                data: data,
            })
            .subscribe(observer);
    }

    describe('обратная связь', () => {
        it('отмена закрывает попап', () => {
            let result: TuiDay | null = null;
            let complete = false;

            showDialog(undefined, {
                next: (value: TuiDay) => {
                    result = value;
                },
                complete: () => {
                    complete = true;
                },
            });
            fixture.detectChanges();
            pageObject
                .getByAutomationId('tui-mobile-calendar__cancel')!
                .nativeElement.click();

            expect(result).toBeNull();
            expect(complete).toBe(true);
        });

        it('готово возвращает выбор и закрывает попап', () => {
            let result = null;
            let complete = false;

            showDialog(undefined, {
                next: (value: TuiDay) => {
                    result = value;
                },
                complete: () => {
                    complete = true;
                },
            });
            fixture.detectChanges();
            pageObject
                .getByAutomationId('tui-mobile-calendar__confirm')!
                .nativeElement.click();

            expect(result as TuiDay | null).toBe(today);
            expect(complete).toBe(true);
        });
    });

    describe('передаёт данные во вложенный календарь', () => {
        it('single по умолчанию true', () => {
            showDialog();
            fixture.detectChanges();

            expect(
                pageObject
                    .getByAutomationId('tui-mobile-calendar__label')!
                    .nativeElement.textContent.trim(),
            ).toBe('Выберите день');
        });

        it('single === false', () => {
            showDialog({
                single: false,
            });
            fixture.detectChanges();

            expect(
                pageObject
                    .getByAutomationId('tui-mobile-calendar__label')!
                    .nativeElement.textContent.trim(),
            ).toBe('Выберите период');
        });

        it('min по умолчанию не виден', fakeAsync(() => {
            showDialog();
            fixture.autoDetectChanges();
            tick(500);

            expect(
                pageObject.getByAutomationId('tui-primitive-calendar-mobile__cell')!
                    .classes['cell_disabled'],
            ).toBe(false);
        }));

        it('Даты до min заблокированы', fakeAsync(() => {
            showDialog({
                min: today,
            });
            fixture.autoDetectChanges();
            tick(500);

            expect(
                pageObject.getByAutomationId('tui-primitive-calendar-mobile__cell')!
                    .classes['cell_disabled'],
            ).toBe(true);
        }));

        it('max по умолчанию не виден', fakeAsync(() => {
            showDialog();
            fixture.autoDetectChanges();
            tick(500);

            expect(
                pageObject
                    .getAllByAutomationId('tui-primitive-calendar-mobile__cell')
                    .pop()!.classes['cell_disabled'],
            ).toBe(false);
        }));

        it('disabledItemHandler по умолчанию не блокирует даты', fakeAsync(() => {
            showDialog();
            fixture.autoDetectChanges();
            tick(500);

            expect(
                pageObject
                    .getAllByAutomationId('tui-primitive-calendar-mobile__cell')
                    .find(item => item.classes['cell_disabled']),
            ).toBeUndefined();
        }));
    });
});

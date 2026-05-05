import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {provideTaiga, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit/components/input-date';
import {
    TuiInputDateMulti,
    tuiInputDateMultiOptionsProvider,
} from '@taiga-ui/kit/components/input-date-multi';

describe('TuiInputDateMultiDirective', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, TuiInputDateMulti, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield multi>
                    <input
                        tuiInputDateMulti
                        [(ngModel)]="value"
                    />
                    <tui-calendar *tuiTextfieldDropdown />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [
            tuiInputDateOptionsProvider({
                valueTransformer: {
                    fromControlValue: (value: Date | null): TuiDay | null =>
                        value ? TuiDay.fromLocalNativeDate(value) : null,
                    toControlValue: (value: TuiDay | null): Date | null =>
                        value ? value.toLocalNativeDate() : null,
                },
            }),
        ],
    })
    class InheritedProviderTest {
        public value = [new Date(2026, 2, 11), new Date(2026, 2, 12)];
    }

    describe('inherited provider', () => {
        let fixture: ComponentFixture<InheritedProviderTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({
                imports: [InheritedProviderTest],
                providers: [provideTaiga()],
            });

            await TestBed.compileComponents();
            fixture = TestBed.createComponent(InheritedProviderTest);

            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
        });

        it('format with transformer inherited from InputDate', () => {
            expect(fixture.componentInstance.value).toEqual([
                new Date(2026, 2, 11),
                new Date(2026, 2, 12),
            ]);
        });

        it('formatted values in items', () => {
            expect(getItemsText(fixture)).toEqual(['11.03.2026', '12.03.2026']);
        });
    });

    @Component({
        standalone: true,
        imports: [FormsModule, TuiInputDateMulti, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield multi>
                    <input
                        tuiInputDateMulti
                        [(ngModel)]="value"
                    />
                    <tui-calendar *tuiTextfieldDropdown />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [
            tuiInputDateMultiOptionsProvider({
                valueTransformer: {
                    fromControlValue: (value: Date[] | null): TuiDay[] =>
                        value?.map((date) => TuiDay.fromLocalNativeDate(date)) ?? [],
                    toControlValue: (value: TuiDay[]): Date[] =>
                        value.map((day) => day.toLocalNativeDate()),
                },
            }),
        ],
    })
    class CustomProviderTest {
        public value = [new Date(2026, 2, 11), new Date(2026, 2, 12)];
    }

    describe('custom provider', () => {
        let fixture: ComponentFixture<CustomProviderTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({
                imports: [CustomProviderTest],
                providers: [provideTaiga()],
            });

            await TestBed.compileComponents();
            fixture = TestBed.createComponent(CustomProviderTest);

            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
        });

        it('format with custom tuiInputDateMultiOptionsProvider', () => {
            expect(fixture.componentInstance.value).toEqual([
                new Date(2026, 2, 11),
                new Date(2026, 2, 12),
            ]);
        });

        it('renders formatted values in items', () => {
            expect(getItemsText(fixture)).toEqual(['11.03.2026', '12.03.2026']);
        });
    });

    @Component({
        standalone: true,
        imports: [FormsModule, TuiInputDateMulti, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield multi>
                    <input
                        tuiInputDateMulti
                        [(ngModel)]="value"
                    />
                    <tui-calendar *tuiTextfieldDropdown />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class NoProviderTest {
        public value = [new TuiDay(2026, 2, 11), new TuiDay(2026, 2, 12)];
    }

    describe('no provider', () => {
        let fixture: ComponentFixture<NoProviderTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({
                imports: [NoProviderTest],
                providers: [provideTaiga()],
            });

            await TestBed.compileComponents();
            fixture = TestBed.createComponent(NoProviderTest);

            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
        });

        it('format with custom tuiInputDateMultiOptionsProvider', () => {
            expect(fixture.componentInstance.value).toEqual([
                new TuiDay(2026, 2, 11),
                new TuiDay(2026, 2, 12),
            ]);
        });

        it('renders formatted values in items', () => {
            expect(getItemsText(fixture)).toEqual(['11.03.2026', '12.03.2026']);
        });
    });

    function getItemsText(fixture: ComponentFixture<unknown>): string[] {
        return Array.from(
            fixture.nativeElement.querySelectorAll('tui-textfield-item'),
        ).map((item) => (item as Element).textContent?.trim() ?? '');
    }
});

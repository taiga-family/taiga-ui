import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {
    TuiInputDateMulti,
    tuiInputDateMultiOptionsProvider,
} from '@taiga-ui/kit/components/input-date-multi';
import {tuiInputDateOptionsProviderNew} from '@taiga-ui/kit/components/input-date';

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
            tuiInputDateOptionsProviderNew({
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
        public value: Date[] | null = [new Date(2026, 2, 11), new Date(2026, 2, 12)];
    }

    describe('inherited provider', () => {
        let fixture: ComponentFixture<InheritedProviderTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({imports: [InheritedProviderTest]});

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
        public value: Date[] | null = [new Date(2026, 2, 11), new Date(2026, 2, 12)];
    }

    describe('custom provider', () => {
        let fixture: ComponentFixture<CustomProviderTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({imports: [CustomProviderTest]});

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

    function getItemsText(fixture: ComponentFixture<unknown>): string[] {
        return Array.from(
            fixture.nativeElement.querySelectorAll('tui-textfield-item'),
        ).map((item) => (item as Element).textContent?.trim() ?? '');
    }
});

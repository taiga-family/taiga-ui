import {Component, TemplateRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {TuiInputCardGroupedComponent} from '@taiga-ui/addon-commerce';
import {TuiIcon} from '@taiga-ui/core';
import {TuiNativeInputPO} from '@taiga-ui/testing';
import type {Mock} from 'jest-mock';
import {firstValueFrom, timer} from 'rxjs';

describe('InputCardGrouped', () => {
    @Component({
        standalone: true,
        imports: [TuiInputCardGroupedComponent, ReactiveFormsModule, TuiIcon],
        template: `
            <tui-input-card-grouped
                [formControl]="control"
                (binChange)="onBinChange($event)"
            />

            <ng-template #customIconTemplate>
                <tui-icon icon="@tui.visa" />
            </ng-template>
        `,
    })
    class Test {
        @ViewChild(TuiInputCardGroupedComponent, {static: true})
        public component!: TuiInputCardGroupedComponent;

        @ViewChild('customIconTemplate', {read: TemplateRef})
        public customIconTemplate!: TemplateRef<any>;

        public control = new FormControl<Partial<TuiCard>>({card: ''});

        public onBinChange: (event: string | null) => void = jest.fn();
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let inputCardPO: TuiNativeInputPO;
    let inputExpirePO: TuiNativeInputPO;
    let inputCVCPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputCardPO = new TuiNativeInputPO(fixture, 'tui-input-card-grouped__card');
        inputExpirePO = new TuiNativeInputPO(fixture, 'tui-input-card-grouped__expire');
        inputCVCPO = new TuiNativeInputPO(fixture, 'tui-input-card-grouped__cvc');

        fixture.autoDetectChanges();
    });

    it('Clear resets control to null', () => {
        testComponent.control.setValue({
            card: '123',
            expire: '12/12',
            cvc: '321',
        });
        testComponent.component.clear();

        expect(testComponent.control.value).toBeNull();
    });

    describe('Card number', () => {
        describe('binChange', () => {
            it('Less than 6 digits entered', () => {
                setCard('12345');

                expect(testComponent.onBinChange).not.toHaveBeenCalled();
            });

            it('6 and more digits entered', () => {
                setCard('123456789');

                expect(testComponent.onBinChange).toHaveBeenCalledWith('123456');
            });

            it('Value has changed, first 6 digits are the same', () => {
                setCard('123456789');
                (testComponent.onBinChange as Mock).mockClear();
                setCard('123456987');

                expect(testComponent.onBinChange).not.toHaveBeenCalled();
            });

            it('Value has changed, first 6 digits have changed', () => {
                setCard('123456789');
                (testComponent.onBinChange as Mock).mockClear();
                setCard('654321789');

                expect(testComponent.onBinChange).toHaveBeenCalledWith('654321');
            });

            it('Value has changed, now it has less than 6 digits', () => {
                setCard('123456789');
                (testComponent.onBinChange as Mock).mockClear();
                setCard('123');

                expect(testComponent.onBinChange).toHaveBeenCalledWith(null);
            });
        });

        describe('Formatting', () => {
            it('13', () => {
                testFormat('4000000000000', '4000 0000 0000 0');
            });

            it('14', () => {
                testFormat('40000000000000', '4000 0000 0000 00');
            });

            it('15', () => {
                testFormat('400000000000000', '4000 0000 0000 000');
            });

            it('16', () => {
                testFormat('4000000000000000', '4000 0000 0000 0000');
            });

            it('17', () => {
                testFormat('40000000000000000', '4000 0000 0000 0000 0');
            });

            it('18', () => {
                testFormat('400000000000000000', '4000 0000 0000 0000 00');
            });

            it('19', () => {
                testFormat('4000000000000000000', '4000 0000 0000 0000 000');
            });
        });
    });

    describe('Expiration date', () => {
        it('keeps correct value as is', () => {
            inputExpirePO.sendText('12/12');

            expect(getExpire()).toBe('12/12');
            expect(inputExpirePO.value).toBe('12/12');
        });
    });

    describe('Focus', () => {
        it('focus remains in card input when invalid card is entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('8888888888889999');

            expect(inputCardPO.focused).toBe(true);
        });

        it('focuses expire input when valid card is entered', async () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');

            await firstValueFrom(timer(100));

            expect(inputExpirePO.focused).toBe(true);
        });

        it('focus remains in expire input when date is not fully entered', () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');
            inputExpirePO.sendText('12/2');

            expect(inputExpirePO.focused).toBe(true);
        });

        it('focuses cvc input when expiration date is fully entered', async () => {
            inputCardPO.focus();
            inputCardPO.sendText('563693784073');
            inputExpirePO.sendText('12/21');

            await firstValueFrom(timer(100));

            expect(inputCVCPO.focused).toBe(true);
        });
    });

    describe('icon with value', () => {
        beforeEach(() => setCard('4111 1111 1111 1111'));

        it('input-card-grouped have a default icon', () => {
            expect(testComponent.control.valid).toBe(true);
            expect(testComponent.component['content']).toBe('@tui.visa');
            expect(testComponent.control.value?.card).toBe('4111111111111111');
            expect(expectCardOutlet()).toBeTruthy();
        });

        it('input-card-grouped have tuiIconMastercard icon', () => {
            testComponent.component.icon = 'tuiIconMastercard';

            expect(testComponent.control.valid).toBe(true);
            expect(testComponent.component['content']).toBe('tuiIconMastercard');
            expect(testComponent.control.value?.card).toBe('4111111111111111');
            expect(expectCardOutlet()).toBeTruthy();
        });

        it('input-card-grouped have TemplateRef', () => {
            testComponent.component.icon = fixture.componentInstance.customIconTemplate;

            expect(testComponent.control.valid).toBe(true);
            expect(testComponent.component['content']).toBeInstanceOf(TemplateRef);
            expect(testComponent.control.value?.card).toBe('4111111111111111');
            expect(expectCardOutlet()).toBeTruthy();
        });
    });

    function testFormat(value: string, formatted: string): void {
        setCard(value);
        fixture.detectChanges();
        expect(inputCardPO.value).toBe(formatted);
    }

    function expectCardOutlet(): boolean {
        return (
            fixture.componentRef.location?.nativeElement?.querySelectorAll(
                '.t-icon-outlet',
            )?.length === 1 || false
        );
    }

    function setCard(card: string): void {
        inputCardPO.sendText(card);
    }

    function getExpire(): string {
        return testComponent.control.value?.expire ?? '';
    }
});

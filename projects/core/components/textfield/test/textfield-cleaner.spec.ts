import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {
    provideTaiga,
    TuiDataList,
    TuiDropdown,
    TuiInput,
    TuiRoot,
    TuiSelectLike,
} from '@taiga-ui/core';

describe('TuiTextfieldComponent cleaner', () => {
    @Component({
        imports: [
            FormsModule,
            TuiDataList,
            TuiDropdown,
            TuiInput,
            TuiRoot,
            TuiSelectLike,
        ],
        template: `
            <tui-root>
                <tui-textfield
                    id="with-dropdown"
                    [(open)]="openWithDropdown"
                >
                    <input
                        tuiInput
                        [(ngModel)]="value"
                    />
                    <tui-data-list *tuiDropdown>
                        <button
                            tuiOption
                            value="Suggestion"
                        >
                            Suggestion
                        </button>
                    </tui-data-list>
                </tui-textfield>
                <tui-textfield
                    id="select-like"
                    [(open)]="openSelectLike"
                >
                    <input
                        tuiInput
                        tuiSelectLike
                        [(ngModel)]="selectLike"
                    />
                    <tui-data-list *tuiDropdown>
                        <button
                            tuiOption
                            value="Suggestion"
                        >
                            Suggestion
                        </button>
                    </tui-data-list>
                </tui-textfield>
                <tui-textfield
                    id="without-dropdown"
                    [(open)]="openWithoutDropdown"
                >
                    <input
                        tuiInput
                        [(ngModel)]="plain"
                    />
                </tui-textfield>
                <tui-textfield
                    id="readonly"
                    [(open)]="openReadonly"
                >
                    <input
                        tuiInput
                        [readonly]="true"
                        [(ngModel)]="readonlyValue"
                    />
                    <tui-data-list *tuiDropdown>
                        <button
                            tuiOption
                            value="Suggestion"
                        >
                            Suggestion
                        </button>
                    </tui-data-list>
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public value = 'Hello';
        public selectLike = 'Hello';
        public plain = 'Hello';
        public readonlyValue = 'Hello';
        public readonly openWithDropdown = signal(false);
        public readonly openSelectLike = signal(false);
        public readonly openWithoutDropdown = signal(false);
        public readonly openReadonly = signal(false);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('opens an editable dropdown after cleaner click', () => {
        clickCleaner('#with-dropdown');

        expect(testComponent.openWithDropdown()).toBe(true);
        expect(fixture.debugElement.query(By.css('tui-dropdown'))).toBeTruthy();
    });

    it('opens a select-like dropdown after cleaner click', () => {
        clickCleaner('#select-like');

        expect(testComponent.openSelectLike()).toBe(true);
        expect(fixture.debugElement.query(By.css('tui-dropdown'))).toBeTruthy();
    });

    it('does not open when dropdown content is absent', () => {
        clickCleaner('#without-dropdown');

        expect(testComponent.openWithoutDropdown()).toBe(false);
        expect(fixture.debugElement.query(By.css('tui-dropdown'))).toBeNull();
    });

    it('does not open for a readonly textfield', () => {
        clickCleaner('#readonly');

        expect(testComponent.openReadonly()).toBe(false);
        expect(fixture.debugElement.query(By.css('tui-dropdown'))).toBeNull();
    });

    function clickCleaner(host: string): void {
        fixture.debugElement.query(By.css(`${host} [tuiButtonX]`)).nativeElement.click();
        fixture.detectChanges();
    }
});

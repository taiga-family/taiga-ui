import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip, TuiInputChipDirective} from '@taiga-ui/kit';

describe('TuiInputChipDirective', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputChip, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield multi>
                    <input
                        tuiInputChip
                        [formControl]="control"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly control = new FormControl<string[]>([]);
    }

    let fixture: ComponentFixture<Test>;
    let directive: TuiInputChipDirective<unknown>;

    beforeEach(async () => {
        TestBed.configureTestingModule({imports: [Test]});
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();

        directive = fixture.debugElement
            .query(By.directive(TuiInputChipDirective))
            .injector.get(TuiInputChipDirective);
    });

    it('does not mutate source value when unique is enabled', () => {
        const value = ['foo', 'bar', 'foo'];

        directive.setValue(value);

        expect(value).toEqual(['foo', 'bar', 'foo']);
        expect(fixture.componentInstance.control.value).toEqual(['bar', 'foo']);
    });
});

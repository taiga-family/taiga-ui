import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit/components/textarea';

describe('TuiTextarea translation', () => {
    @Component({
        imports: [TuiRoot, TuiTextarea],
        template: `
            <tui-root>
                <tui-textfield>
                    <textarea tuiTextarea>Original text</textarea>
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('excludes the measuring text from translation', () => {
        const host: HTMLElement = fixture.nativeElement;

        expect(
            host
                .querySelector('tui-textarea-content .t-ghost')
                ?.getAttribute('translate'),
        ).toBe('no');
        expect(host.querySelector('textarea')?.hasAttribute('translate')).toBe(false);
    });
});

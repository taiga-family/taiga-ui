import {Clipboard} from '@angular/cdk/clipboard';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiCopyProcessor, type TuiStringHandler} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';
import {TuiCopy} from '@taiga-ui/kit';

describe('Copy', () => {
    @Component({
        imports: [TuiCopy, TuiCopyProcessor],
        template: `
            <tui-copy id="plain">{{ value() }}</tui-copy>
            <tui-copy
                id="processed"
                [tuiCopyProcessor]="processor()"
            >
                {{ value() }}
            </tui-copy>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly value = signal('Taiga UI');
        public readonly processor = signal<TuiStringHandler<string>>((value) =>
            value.trim().toUpperCase(),
        );
    }

    let fixture: ComponentFixture<Test>;
    let clipboard: Clipboard;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        clipboard = TestBed.inject(Clipboard);
        jest.spyOn(clipboard, 'copy').mockReturnValue(true);

        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    describe.each(['.t-content', 'button'])('click on %s', (selector) => {
        function copy(id: string): void {
            const element = fixture.debugElement.query(By.css(`#${id} ${selector}`))
                .nativeElement as HTMLElement;

            element.click();
        }

        it('copies the original text without a processor', () => {
            copy('plain');

            expect(clipboard.copy).toHaveBeenCalledWith('Taiga UI');
        });

        it('copies the processed text', () => {
            copy('processed');

            expect(clipboard.copy).toHaveBeenCalledWith('TAIGA UI');
        });

        it('uses the updated processor', () => {
            fixture.componentInstance.processor.set((value) => ` ${value.trim()} `);
            fixture.detectChanges();
            copy('processed');

            expect(clipboard.copy).toHaveBeenCalledWith(' Taiga UI ');
        });

        it('processes the current projected text', () => {
            fixture.componentInstance.value.set('Updated text');
            fixture.detectChanges();
            copy('processed');

            expect(clipboard.copy).toHaveBeenCalledWith('UPDATED TEXT');
        });

        it('preserves an empty processor result', () => {
            fixture.componentInstance.processor.set(() => '');
            fixture.detectChanges();
            copy('processed');

            expect(clipboard.copy).toHaveBeenCalledWith('');
        });

        it('calls the processor only when copying', () => {
            const processor = jest.fn((value: string) => value.trim());

            fixture.componentInstance.processor.set(processor);
            fixture.detectChanges();

            expect(processor).not.toHaveBeenCalled();

            copy('processed');

            expect(processor).toHaveBeenCalledTimes(1);
            expect(clipboard.copy).toHaveBeenCalledWith('Taiga UI');
        });
    });
});

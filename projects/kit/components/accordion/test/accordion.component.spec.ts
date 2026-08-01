import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

describe('Accordion', () => {
    @Component({
        imports: [TuiAccordion],
        template: `
            <tui-accordion>
                <button tuiAccordion>Direct trigger</button>
                <tui-expand>Direct content</tui-expand>

                <div>
                    <button tuiAccordion>Wrapped trigger</button>
                    <button type="button">Custom action</button>
                </div>
                <tui-expand>Wrapped content</tui-expand>
            </tui-accordion>
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

    function getExpands(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('tui-expand'));
    }

    it('expands the tui-expand for a trigger that is a direct child', () => {
        const trigger = fixture.debugElement.query(By.css('[tuiAccordion]'))
            .nativeElement as HTMLButtonElement;

        trigger.click();
        fixture.detectChanges();

        expect(getExpands()[0]?.nativeElement.classList).toContain('_expanded');
    });

    it('expands the tui-expand for a trigger wrapped in an extra element', () => {
        const triggers = fixture.debugElement.queryAll(By.css('[tuiAccordion]'));
        const wrappedTrigger = triggers[1]?.nativeElement as HTMLButtonElement;

        wrappedTrigger.click();
        fixture.detectChanges();

        expect(getExpands()[1]?.nativeElement.classList).toContain('_expanded');
    });
});

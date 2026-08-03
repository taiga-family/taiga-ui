import {ChangeDetectionStrategy, Component, type DebugElement} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideEventPlugins} from '@taiga-ui/event-plugins';
import {TuiAccordion} from '@taiga-ui/experimental';

describe('Accordion', () => {
    @Component({
        standalone: true,
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
            providers: [provideEventPlugins()],
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

    describe('nested inside another accordion', () => {
        @Component({
            standalone: true,
            imports: [TuiAccordion],
            template: `
                <tui-accordion>
                    <button tuiAccordion>Outer trigger 1</button>
                    <tui-expand>
                        <tui-accordion>
                            <button tuiAccordion>Inner trigger</button>
                            <tui-expand>Inner content</tui-expand>
                        </tui-accordion>
                    </tui-expand>

                    <button tuiAccordion>Outer trigger 2</button>
                    <tui-expand>Outer content 2</tui-expand>
                </tui-accordion>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class NestedTest {}

        let nestedFixture: ComponentFixture<NestedTest>;

        beforeEach(async () => {
            TestBed.resetTestingModule();
            TestBed.configureTestingModule({
                imports: [NestedTest],
                providers: [provideEventPlugins()],
            });
            await TestBed.compileComponents();

            nestedFixture = TestBed.createComponent(NestedTest);
            nestedFixture.detectChanges();
        });

        function getTrigger(text: string): HTMLButtonElement {
            return nestedFixture.debugElement
                .queryAll(By.css('[tuiAccordion]'))
                .find((trigger) => trigger.nativeElement.textContent === text)!
                .nativeElement as HTMLButtonElement;
        }

        function getExpand(text: string): DebugElement {
            return nestedFixture.debugElement
                .queryAll(By.css('tui-expand'))
                .find((expand) => expand.nativeElement.textContent.trim() === text)!;
        }

        it('closing a sibling in the outer accordion does not collapse an unrelated nested accordion', () => {
            getTrigger('Outer trigger 1').click();
            nestedFixture.detectChanges();

            getTrigger('Inner trigger').click();
            nestedFixture.detectChanges();

            expect(getExpand('Inner content').nativeElement.classList).toContain(
                '_expanded',
            );

            getTrigger('Outer trigger 2').click();
            nestedFixture.detectChanges();

            expect(getExpand('Outer content 2').nativeElement.classList).toContain(
                '_expanded',
            );
            expect(getExpand('Inner content').nativeElement.classList).toContain(
                '_expanded',
            );
        });
    });
});

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    type ComponentFixture,
    discardPeriodicTasks,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {provideTaiga, TuiHint, TuiRoot} from '@taiga-ui/core';

describe('Hint on mobile', () => {
    @Component({
        imports: [TuiHint, TuiRoot],
        template: `
            <tui-root>
                <div
                    id="hint-host"
                    tuiHint="Tooltip text"
                >
                    Tooltip host
                </div>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga(), {provide: WA_IS_MOBILE, useValue: true}],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('stays open after the first tap which also emulates mouseenter', fakeAsync(() => {
        const host = document.querySelector('#hint-host')!;

        host.dispatchEvent(new Event('mouseenter'));
        tick(0);
        host.dispatchEvent(new Event('click'));
        tick(500);
        fixture.detectChanges();
        discardPeriodicTasks();

        expect(document.querySelector('tui-hint')).not.toBeNull();
    }));
});

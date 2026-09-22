import {Location} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiChartHint, TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiHintDirective} from '@taiga-ui/core';
import {TuiPageObject} from '@taiga-ui/testing';

describe('PieChart', () => {
    @Component({
        imports: [TuiChartHint, TuiPieChart],
        template: `
            <tui-pie-chart
                tuiHintAppearance="error"
                tuiHintContent="Hint"
                [value]="value"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly value = [1, 2, 3];
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                {
                    provide: Location,
                    useValue: {path: () => ''},
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    it('has segment for each item in value', () => {
        expect(pageObject.getAllByAutomationId('tui-pie-chart__segment').length).toBe(3);
    });

    it('supports custom hint appearance', () => {
        const hint = fixture.debugElement
            .query(By.directive(TuiHintDirective))
            .injector.get(TuiHintDirective);

        expect(hint.appearance()).toBe('error');
    });
  
    it('scales hovered segment via CSS so the transition also works in Safari', () => {
        const [, segment] = pageObject.getAllByAutomationId('tui-pie-chart__segment');

        segment?.nativeElement.dispatchEvent(new Event('pointerenter'));
        fixture.detectChanges();

        expect(segment?.nativeElement.style.transform).toBe('scale(1.15)');
        expect(segment?.nativeElement.hasAttribute('transform')).toBe(false);
      });  
});

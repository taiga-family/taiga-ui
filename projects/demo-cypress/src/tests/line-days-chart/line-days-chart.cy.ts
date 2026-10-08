import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiLineDaysChart, TuiRoot],
    templateUrl: './line-days-chart.template.html',
    styleUrl: './line-days-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestLineDaysChart {
    // Original reproduction: https://stackblitz.com/edit/taiga-charts-double-points
    // Keep its dates and scale, but replace random heights with fixed values.
    public readonly dayPoints: ReadonlyArray<[TuiDay, number]> = [
        31, 72, 9, 19, 26, 45, 97, 54, 4, 97, 85, 87,
    ].map((value, index) => [new TuiDay(2020, 4, 1).append({day: index * 30}), value]);
}

describe('LineDaysChart | Issue #524', () => {
    beforeEach(() => {
        cy.viewport(1152, 432);
        cy.mount(TestLineDaysChart);
    });

    it('does not duplicate sparse points across month boundaries', () => {
        cy.get('tui-line-days-chart .t-dot').should('have.length', 12);
    });

    it('connects the original reproduction points without visible duplicates', () => {
        cy.get('tui-line-chart svg')
            .should('have.attr', 'viewBox')
            .and('not.equal', '0 0 0 0');
        cy.get('tui-line-chart svg path[stroke="currentColor"]')
            .should('have.attr', 'd')
            .and('not.be.empty');
        cy.get('tui-axes').compareSnapshot('line-days-chart-issue-524');
    });
});

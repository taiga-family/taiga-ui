import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiResizableColumnComponent} from '../resizable-column.component';
import {TuiResizableColumnModule} from '../resizable-column.module';

describe(`TuiResizableColumnComponent`, () => {
    @Component({
        template: `
            <table>
                <thead>
                    <tr>
                        <th tuiResizableColumn>Member</th>
                        <th tuiResizableColumn>Nickname</th>
                        <th tuiResizableColumn>Fate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test 1</td>
                        <td>Test 2</td>
                        <td>Test 3</td>
                    </tr>
                </tbody>
            </table>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        @ViewChild(TuiResizableColumnComponent)
        readonly component?: TuiResizableColumnComponent;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiResizableColumnModule],
            declarations: [TestComponent],
        });
    });

    it(`compiles`, () => {
        const fixture = TestBed.createComponent(TestComponent);

        fixture.detectChanges();

        expect(fixture.componentInstance.component).toBeDefined();
    });
});

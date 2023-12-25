import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'test-doc-example-1',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestDocExample1 {
    readonly control = new FormControl(new TuiDay(2023, 4, 17));
    readonly min = new TuiDay(2023, 4, 18);
}

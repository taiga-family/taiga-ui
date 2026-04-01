import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; column-gap: 3rem; justify-content: space-between; flex-wrap: wrap; }',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected liked = false;

    protected likeForm = new FormGroup({liked: new FormControl(false)});

    protected changeValue(): void {
        this.liked = !this.liked;
        this.likeForm.setValue({liked: !this.likeForm.value.liked});
    }
}
`;export{t as default};

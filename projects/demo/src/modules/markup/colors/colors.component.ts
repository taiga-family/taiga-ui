import {default as basicImportsLess} from '!!raw-loader!./examples/import/basic-imports-less.txt';
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {
    BASE,
    BASE_NIGHT,
    STATUS,
    STATUS_NIGHT,
    SUPPORT,
    TEXT,
    TEXT_NIGHT,
} from './colors.constants';

@Component({
    selector: 'colors',
    templateUrl: 'colors.template.html',
    styleUrls: ['colors.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ColorsComponent {
    readonly basicImportsLess = basicImportsLess;

    readonly base = BASE;
    readonly baseNight = BASE_NIGHT;
    readonly support = SUPPORT.map(name => ({name}));
    readonly text = TEXT;
    readonly textNight = TEXT_NIGHT;
    readonly status = STATUS;
    readonly statusNight = STATUS_NIGHT;
}

import {Component, OnInit} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'containers',
    templateUrl: 'containers.template.html',
    styleUrls: ['containers.style.less'],
    changeDetection,
})
export class ContainersComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

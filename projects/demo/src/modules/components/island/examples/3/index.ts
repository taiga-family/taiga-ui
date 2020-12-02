import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-island-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiIslandExample3 {
    bannerImage = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
    expanded = false;
    index = 1;
    testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
    });

    collapsingText =
        'Для участия в розыгрыше нужно в одной из социальных сетей Facebook, Instagram, Twitter, ' +
        'Behance, Flickr, QQ, WeChat, QZone, Tumblr, Google+, Myspace, Snapchat, LinkedIn, Reddit, Taringa, ' +
        'Badoo, Одноклассники, ВКонтакте, ЖивойЖурнал, Мой Круг';

    get linesLimit(): number {
        return this.expanded ? 10 : 3;
    }

    expandText() {
        this.expanded = !this.expanded;
    }

    onIndexChange(index: number) {
        this.index = index;
    }
}

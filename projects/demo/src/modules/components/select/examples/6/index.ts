import {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';
import {Component} from '@angular/core';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const databaseMockData: ReadonlyArray<User> = [
    new User('Роман', 'Седов', 'http://marsibarsi.me/images/1x1small.jpg'),
    new User('Александр', 'Инкин', avatar),
];

@Component({
    selector: 'tui-select-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample6 {
    value = null;

    readonly items$ = of(databaseMockData).pipe(delay(5000));

    readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) => !!avatarUrl;
}

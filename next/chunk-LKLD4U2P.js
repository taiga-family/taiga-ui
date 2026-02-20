import"./chunk-HU6DUUP4.js";var r=`import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputPhone,
} from '@taiga-ui/kit';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phone: string,
        public readonly avatarUrl: string | null = null,
        public readonly disabled = false,
    ) {}

    public toString(): string {
        return \`\${this.firstName} \${this.lastName}\`;
    }
}

const DATA: readonly User[] = [
    new User(
        'Alex',
        'Inkin',
        '+11234567890',
        'https://avatars.githubusercontent.com/u/11832552',
    ),
    new User(
        'Vladimir',
        'Potekhin',
        '+13213213213',
        'https://avatars.githubusercontent.com/u/46284632',
    ),
    new User(
        'Nikita',
        'Barsukov',
        '+18005553535',
        'https://avatars.githubusercontent.com/u/35179038',
    ),
    new User(
        'Roman',
        'Sedov',
        '+18003000600',
        'https://avatars.githubusercontent.com/u/10106368',
    ),
    new User(
        'Yulia',
        'Tsareva',
        '+13332221110',
        'https://avatars.githubusercontent.com/u/8158578',
    ),
];

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiCell,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputPhone,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    public readonly value = signal('');
    public readonly items = DATA;
    public readonly user = computed(() =>
        this.items.find(({phone}) => phone === this.value()),
    );

    protected selectUser(user: User): void {
        this.value.set(user.phone);
    }

    protected onInput(value: string): void {
        const user = this.items.find((user) => this.matcher(user, value));

        if (value === user?.toString() || value === user?.phone) {
            this.value.set(user.phone);
        }
    }

    protected readonly matcher: TuiMatcher<[User, string]> = (item, search) =>
        (search.startsWith('+') &&
            TUI_DEFAULT_MATCHER(item.phone, search.replaceAll(/\\D/g, ''))) ||
        TUI_DEFAULT_MATCHER(item.toString(), search);
}
`;export{r as default};

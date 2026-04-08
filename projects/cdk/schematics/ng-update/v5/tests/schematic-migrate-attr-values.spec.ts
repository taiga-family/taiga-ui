import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update start/end instead of left/right', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces for tuiHintDirection',
        migrate({
            template: /* HTML */ `
                <tui-icon tuiHintDirection="bottom-left" />
                <tui-icon tuiHintDirection="bottom" />
                <tui-icon tuiHintDirection="bottom-right" />
                <tui-icon tuiHintDirection="top-left" />
                <tui-icon tuiHintDirection="top" />
                <tui-icon tuiHintDirection="top-right" />
                <tui-icon tuiHintDirection="left-top" />
                <tui-icon tuiHintDirection="left" />
                <tui-icon tuiHintDirection="left-bottom" />
                <tui-icon tuiHintDirection="right-top" />
                <tui-icon tuiHintDirection="right" />
                <tui-icon tuiHintDirection="right-bottom" />
            `,
        }),
    );

    it(
        'replaces for [tuiHintDirection]',
        migrate({
            template: /* HTML */ `
                <div
                    tuiHint
                    [tuiHintDirection]="'bottom-left'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'bottom'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'bottom-right'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'top-left'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'top'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'top-right'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'left-top'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'left'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'left-bottom'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'right-top'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'right'"
                ></div>
                <div
                    tuiHint
                    [tuiHintDirection]="'right-bottom'"
                ></div>
            `,
        }),
    );

    it(
        'replaces for tuiDropdownAlign',
        migrate({
            template: /* HTML */ `
                <div
                    tuiDropdownAlign="right"
                    [tuiDropdown]="dropdown"
                ></div>
                <div
                    tuiDropdownAlign="center"
                    [tuiDropdown]="dropdown"
                ></div>
                <div
                    tuiDropdownAlign="left"
                    [tuiDropdown]="dropdown"
                ></div>
            `,
        }),
    );

    it(
        'replaces for [tuiDropdownAlign]',
        migrate({
            template: /* HTML */ `
                <div
                    [tuiDropdown]="dropdown"
                    [tuiDropdownAlign]="'right'"
                ></div>
                <div
                    [tuiDropdown]="dropdown"
                    [tuiDropdownAlign]="'center'"
                ></div>
                <div
                    [tuiDropdown]="dropdown"
                    [tuiDropdownAlign]="'left'"
                ></div>
            `,
        }),
    );

    it(
        'replaces for tuiSlot',
        migrate({
            template: /* HTML */ `
                <tui-item tuiSlot="right" />
                <tui-item tuiSlot="left" />
            `,
        }),
    );

    it(
        'replaces for [tuiSlot]',
        migrate({
            template: /* HTML */ `
                <tui-item [tuiSlot]="'right'" />
                <tui-item [tuiSlot]="'left'" />
            `,
        }),
    );

    it(
        'replaces for tuiComment',
        migrate({
            template: /* HTML */ `
                <div tuiComment="right">Right comment</div>
                <div tuiComment="left">Left comment</div>
            `,
        }),
    );

    it(
        'replaces for [tuiComment]',
        migrate({
            template: /* HTML */ `
                <div [tuiComment]="'right'">Right comment</div>
                <div [tuiComment]="'left'">Left comment</div>
            `,
        }),
    );

    it(
        'replaces for direction on tui-avatar-stack',
        migrate({
            template: /* HTML */ `
                <tui-avatar-stack direction="right" />
                <tui-avatar-stack direction="left" />

                <tui-item direction="right" />
                <tui-item direction="left" />
            `,
        }),
    );

    it(
        'replaces for [direction] on tui-avatar-stack',
        migrate({
            template: /* HTML */ `
                <tui-avatar-stack [direction]="'right'" />
                <tui-avatar-stack [direction]="'left'" />

                <tui-item [direction]="'right'" />
                <tui-item [direction]="'left'" />
            `,
        }),
    );

    it(
        'replaces for direction on tui-drawer',
        migrate({
            template: /* HTML */ `
                <tui-drawer direction="right">Right drawer</tui-drawer>
                <tui-drawer direction="left">Left drawer</tui-drawer>

                <tui-item direction="right" />
                <tui-item direction="left" />
            `,
        }),
    );

    it(
        'replaces for [direction] on tui-drawer',
        migrate({
            template: /* HTML */ `
                <tui-drawer [direction]="'right'">Right drawer</tui-drawer>
                <tui-drawer [direction]="'left'">Left drawer</tui-drawer>

                <tui-item [direction]="'right'" />
                <tui-item [direction]="'left'" />
            `,
        }),
    );

    it(
        'replaces for vertical on tui-tabs',
        migrate({
            template: /* HTML */ `
                <tui-tabs vertical="right" />
                <tui-tabs vertical="left" />

                <nav
                    tuiTabs
                    vertical="right"
                />
                <nav
                    tuiTabs
                    vertical="left"
                />

                <tui-item vertical="right" />
                <tui-item vertical="left" />
            `,
        }),
    );

    it(
        'replaces for [vertical] on tui-tabs',
        migrate({
            template: /* HTML */ `
                <tui-tabs [vertical]="'right'" />
                <tui-tabs [vertical]="'left'" />

                <nav
                    tuiTabs
                    [vertical]="'right'"
                />
                <nav
                    tuiTabs
                    [vertical]="'left'"
                />

                <tui-item [vertical]="'right'" />
                <tui-item [vertical]="'left'" />
            `,
        }),
    );

    it(
        'replaces values for tuiHeader',
        migrate({
            template: /* HTML */ `
                <h1 tuiHeader="xxl"></h1>
                <h2 tuiHeader="xl"></h2>
                <h3 tuiHeader="l"></h3>
                <h4 tuiHeader="m"></h4>
                <h5 tuiHeader="s"></h5>
                <h6 tuiHeader="xs"></h6>
                <p tuiHeader="xxs"></p>
                <p tuiHeader="custom"></p>
            `,
        }),
    );

    it(
        'replaces values for [tuiHeader]',
        migrate({
            template: /* HTML */ `
                <h1 [tuiHeader]="'xxl'"></h1>
                <h2 [tuiHeader]="'xl'"></h2>
                <h3 [tuiHeader]="'l'"></h3>
                <h4 [tuiHeader]="'m'"></h4>
                <h5 [tuiHeader]="'s'"></h5>
                <h6 [tuiHeader]="'xs'"></h6>
                <p [tuiHeader]="'xxs'"></p>
                <p [tuiHeader]="headerSize"></p>
            `,
        }),
    );

    it(
        'replaces for align on input with tuiInputColor',
        migrate({
            template: /* HTML */ `
                <input
                    align="right"
                    tuiInputColor
                />
                <input
                    align="left"
                    tuiInputColor
                />
                <input align="right" />
                <input align="left" />
            `,
        }),
    );

    it(
        'replaces for [align] on input with tuiInputColor',
        migrate({
            template: /* HTML */ `
                <input
                    tuiInputColor
                    [align]="'right'"
                />
                <input
                    tuiInputColor
                    [align]="'left'"
                />

                <input [align]="'right'" />
                <input [align]="'left'" />
            `,
        }),
    );

    it(
        'replaces for currencyAlign on tuiAmount pipe',
        migrate({
            template: /* HTML */ `
                <li>{{ -12345.1 | tuiAmount: 'USD' : 'left' }}</li>
                <li>{{ 100 | tuiAmount: '£' : 'right' | somePipe: 'left' }}</li>
            `,
        }),
    );

    it(
        'replaces for currencyAlign on tuiAmountOptionsProvider',
        migrate({
            component: `
                import {tuiAmountOptionsProvider} from '@taiga-ui/addon-commerce';

                tuiAmountOptionsProvider({currencyAlign: 'left'});
                tuiAmountOptionsProvider({
                    sign: 'always',
                    currency: 'USD',
                    currencyAlign: 'right',
                });
            `,
        }),
    );

    it(
        'replaces for align on tuiDropdownOptionsProvider',
        migrate({
            component: `
                import {tuiDropdownOptionsProvider} from '@taiga-ui/core';

                tuiDropdownOptionsProvider({align: 'left'});
                tuiDropdownOptionsProvider({
                    limitWidth: 'fixed',
                    align: 'right',
                });
            `,
        }),
    );

    it(
        'replaces for direction on tuiHintOptionsProvider',
        migrate({
            component: `
                import {tuiHintOptionsProvider} from '@taiga-ui/core';

                tuiHintOptionsProvider({direction: 'bottom-left'});
                tuiHintOptionsProvider({direction: 'bottom'});
                tuiHintOptionsProvider({direction: 'bottom-right'});
                tuiHintOptionsProvider({direction: 'top-left'});
                tuiHintOptionsProvider({direction: 'top'});
                tuiHintOptionsProvider({direction: 'top-right'});
                tuiHintOptionsProvider({direction: 'left-top'});
                tuiHintOptionsProvider({direction: 'left'});
                tuiHintOptionsProvider({direction: 'left-bottom'});
                tuiHintOptionsProvider({direction: 'right-top'});
                tuiHintOptionsProvider({direction: 'right'});
                tuiHintOptionsProvider({direction: 'right-bottom'});
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

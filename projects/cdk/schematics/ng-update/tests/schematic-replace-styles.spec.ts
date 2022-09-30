import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';
import {createAngularJson} from '../../utils/create-angular-json';
import {TUI_WARNING_NORMALIZE} from '../steps/replace-styles';

const collectionPath = join(__dirname, '../../migration.json');

const BEFORE_GLOBAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-fonts';
@import '~@taiga-ui/core/styles/taiga-ui-global';
@import '~@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-v2';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile';
`;

const AFTER_GLOBAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-fonts';
${TUI_WARNING_NORMALIZE}
@import '~@taiga-ui/styles/taiga-ui-global';
@import '~@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-v2';
@import '~@taiga-ui/proprietary-core/styles/theme-tinkoff-mobile';
`;

const BEFORE_LOCAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-local';

.legacy-breakpoints {
    @media @mobile {
        color: red;
    }
    @media @mobile-min {
        color: red;
    }
    @media @mobile-interval {
        color: red;
    }
    @media @tablet-s {
        color: red;
    }
    @media @tablet-s-min {
        color: red;
    }
    @media @tablet-s-interval {
        color: red;
    }
    @media @tablet {
        color: red;
    }
    @media @tablet-min {
        color: red;
    }
    @media @tablet-interval {
        color: red;
    }
    @media @desktop {
        color: red;
    }
    @media @desktop-min {
        color: red;
    }
    @media @desktop-interval {
        color: red;
    }
    @media @desktop-lg-min {
        color: red;
    }
}

.actual-breakpoints {
    @media @mobile-m {
        color: red;
    }
    @media @mobile-m-min {
        color: red;
    }
    @media @mobile-m-interval {
        color: red;
    }
    @media @tablet-lg {
        color: red;
    }
    @media @tablet-lg-min {
        color: red;
    }
    @media @tablet-lg-interval {
        color: red;
    }
    @media @desktop-s {
        color: red;
    }
    @media @desktop-s-min {
        color: red;
    }
    @media @desktop-s-interval {
        color: red;
    }
    @media @desktop-m-min {
        color: red;
    }
}

.negative-media {
    @media not @mobile-m {
        color: green;
    }

    @media not @desktop {
        color: green;
    }
}
`;

const AFTER_LOCAL_STYLE = `
@import '~@taiga-ui/core/styles/taiga-ui-local';

.legacy-breakpoints {
    @media @tui-mobile {
        color: red;
    }
    @media @tui-mobile-min {
        color: red;
    }
    @media @tui-mobile-interval {
        color: red;
    }
    @media @tui-mobile {
        color: red;
    }
    @media @tui-mobile-min {
        color: red;
    }
    @media @tui-mobile-interval {
        color: red;
    }
    @media @tui-tablet {
        color: red;
    }
    @media @tui-tablet-min {
        color: red;
    }
    @media @tui-tablet-interval {
        color: red;
    }
    @media @tui-desktop {
        color: red;
    }
    @media @tui-desktop-min {
        color: red;
    }
    @media @tui-desktop-interval {
        color: red;
    }
    @media @tui-desktop-lg-min {
        color: red;
    }
}

.actual-breakpoints {
    @media @tui-mobile {
        color: red;
    }
    @media @tui-mobile-min {
        color: red;
    }
    @media @tui-mobile-interval {
        color: red;
    }
    @media @tui-tablet {
        color: red;
    }
    @media @tui-tablet-min {
        color: red;
    }
    @media @tui-tablet-interval {
        color: red;
    }
    @media @tui-desktop {
        color: red;
    }
    @media @tui-desktop-min {
        color: red;
    }
    @media @tui-desktop-interval {
        color: red;
    }
    @media @tui-desktop-lg-min {
        color: red;
    }
}

.negative-media {
    @media not @tui-mobile {
        color: green;
    }

    @media not @tui-desktop {
        color: green;
    }
}
`;

describe('replace styles', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host, '/', '**/**'));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace with new global styles', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/style.less')).toBe(AFTER_GLOBAL_STYLE);
        expect(tree.readContent('test/app/app.template.less')).toBe(AFTER_LOCAL_STYLE);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `
@Component({
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.less']
})
export class AppComponent {
}
`,
    );

    createSourceFile('test/app/app.template.html', `<app></app>`);
    createSourceFile('test/style.less', BEFORE_GLOBAL_STYLE);
    createSourceFile('test/app/app.template.less', BEFORE_LOCAL_STYLE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}

import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {findElementsWithAttribute} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

const HEADER_ATTR = '[tuiHeader]'.toLowerCase();

// A value that is exactly one recognized single-quoted literal is auto-migrated by the
// value replacer (ATTR_WITH_VALUES_TO_REPLACE handles single quotes only) or is already
// a v5 token — skip it. A lone double-quoted literal is not auto-migrated, so it falls
// through to the old-token check below and gets a TODO instead.
const SINGLE_LITERAL =
    /^'(?:xxl|xl|[lms]|xs|xxs|h1|h2|h3|h4|h5|h6|body-l|body-m|body-s)'$/;

// A v4 size token used as a quoted literal (single or double quotes) inside a larger
// expression, e.g. `cond ? 'l' : 'm'` or `cond ? "l" : "m"`.
const OLD_TOKEN_LITERAL = /(['"])(?:xxl|xl|[lms]|xs|xxs)\1/;

const DYNAMIC_HEADER_TODO =
    '`tuiHeader` values changed in v5 from size tokens to typography tokens (xxl->h1, xl->h2, l->h3, m->h4, s->h5, xs->h6, xxs->body-l). This dynamic binding still contains old size tokens that cannot be migrated automatically — update them to the v5 tokens manually. See https://taiga-ui.dev/components/header';

export function migrateDynamicHeader({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    findElementsWithAttribute(template, '[tuiHeader]').forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
            return;
        }

        const value = element.attrs
            .find((attr) => attr.name === HEADER_ATTR)
            ?.value.trim();

        if (!value || SINGLE_LITERAL.test(value) || !OLD_TOKEN_LITERAL.test(value)) {
            return;
        }

        recorder.insertLeft(
            templateOffset + loc.startOffset,
            `<!-- ${TODO_MARK} ${DYNAMIC_HEADER_TODO} -->\n`,
        );
    });
}

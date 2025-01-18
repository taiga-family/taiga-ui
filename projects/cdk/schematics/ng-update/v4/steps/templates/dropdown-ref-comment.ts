import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

export function dropdownRefComment({
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

    findElementsByTagName(
        template,
        'tui-hosted-dropdown',
        (element: Element) => !!element.attrs.find((attr) => attr.name.startsWith('#')),
    ).forEach(({sourceCodeLocation, attrs}) => {
        const attr = attrs.find((attr) => attr.name.startsWith('#'));

        recorder.insertLeft(
            (sourceCodeLocation?.startOffset ?? 0) + templateOffset,
            `<!-- TODO: (Taiga UI migration) use <div ... tuiDropdown ${attr?.name}="tuiDropdown"> and (event)="${attr?.name}.toggle(false)" -->\n`,
        );
    });
}

import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {TODO_MARK} from '../../../utils/insert-todo';
import {findElementsWithAttributeOnTag} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {type HtmlComment, type TemplateResource} from '../../interfaces';

export function addHTMLCommentTags({
    resource,
    recorder,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    data: readonly HtmlComment[];
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    data.forEach(({comment, tag, withAttrs}) => {
        const elementStartOffsets = [
            ...findElementsWithAttributeOnTag(template, withAttrs, [tag]),
            ...findElementsWithAttributeOnTag(
                template,
                withAttrs.map(attr => `[${attr}]`),
                [tag],
            ),
        ].map(
            ({sourceCodeLocation}) =>
                (sourceCodeLocation?.startOffset || 0) + templateOffset,
        );

        elementStartOffsets.forEach(offset => {
            recorder.insertRight(offset, `<!-- ${TODO_MARK} ${comment} -->\n`);
        });
    });
}

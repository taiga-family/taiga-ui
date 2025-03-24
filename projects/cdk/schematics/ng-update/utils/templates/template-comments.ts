import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {TODO_MARK} from '../../../utils/insert-todo';
import {findElementsWithAttributeOnTag} from '../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {HtmlComment, TemplateResource} from '../../interfaces';

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

    data.forEach(({comment, tag, withAttrs, pattern, filterFn}) => {
        if (pattern && template.match(pattern)) {
            recorder.insertRight(
                templateOffset && templateOffset + 1,
                `<!-- ${TODO_MARK} ${comment} -->\n`,
            );
        }

        if (!tag || !withAttrs) {
            return;
        }

        const elementStartOffsets = [
            ...findElementsWithAttributeOnTag(template, withAttrs, [tag], filterFn),
            ...(withAttrs.length
                ? findElementsWithAttributeOnTag(
                      template,
                      withAttrs.map((attr) => `[${attr}]`),
                      [tag],
                      filterFn,
                  )
                : []),
        ].map(
            ({sourceCodeLocation}) =>
                (sourceCodeLocation?.startOffset || 0) + templateOffset,
        );

        elementStartOffsets.forEach((offset) => {
            recorder.insertLeft(offset, `<!-- ${TODO_MARK} ${comment} -->\n`);
        });
    });
}

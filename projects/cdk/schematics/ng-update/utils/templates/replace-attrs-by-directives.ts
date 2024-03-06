import type {DevkitFileSystem} from 'ng-morph';

import {replaceInputPropertyByDirective} from '../../../utils/templates/ng-component-input-manipulations';
import type {ReplacementAttributeToDirective, TemplateResource} from '../../interfaces';

export function replaceAttrsByDirective({
    resource,
    fileSystem,
    data,
}: {
    fileSystem: DevkitFileSystem;
    resource: TemplateResource;
    data: ReplacementAttributeToDirective[];
}): void {
    data.forEach(
        ({componentSelector, directiveModule, directive, inputProperty, filterFn}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directiveModule,
                directive,
                inputProperty,
                fileSystem,
                templateResource: resource,
                filterFn,
            });
        },
    );
}

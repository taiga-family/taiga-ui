import type {UpdateRecorder} from '@angular-devkit/schematics';
import {tuiCleanObject} from '@taiga-ui/cdk';
import {addImportToClosestModule} from '@taiga-ui/cdk/schematics';
import type {TemplateResource} from '@taiga-ui/cdk/schematics/ng-update/interfaces';
import {removeAttrs} from '@taiga-ui/cdk/schematics/ng-update/v4/steps/utils/remove-attrs';
import {findElementsByTagName} from '@taiga-ui/cdk/schematics/utils/templates/elements';
import {findAttr, isBinding} from '@taiga-ui/cdk/schematics/utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '@taiga-ui/cdk/schematics/utils/templates/template-resource';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute} from 'parse5';

export function migrateMoney({
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

    const elements = findElementsByTagName(template, 'tui-money');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const valueAttr = findAttr(attrs, 'value');
        const currencyAttr = findAttr(attrs, 'currency');
        const decimalAttr = findAttr(attrs, 'decimal');
        const precisionAttr = findAttr(attrs, 'precision');
        const signAttr = findAttr(attrs, 'sign');

        if (!valueAttr) {
            return;
        }

        const insertTo = sourceCodeLocation?.endTag.startOffset;
        const value = isBinding(valueAttr) ? valueAttr.value : `'${valueAttr.value}'`;
        const currency =
            currencyAttr && isBinding(currencyAttr)
                ? currencyAttr?.value
                : `'${currencyAttr?.value}'`;

        recorder.insertRight(
            templateOffset + insertTo,
            `{{ ${value} | tuiAmount ${currencyAttr ? `: ${currency}` : ': "RUB"'} | async }}`,
        );

        if (decimalAttr || precisionAttr) {
            addImportToClosestModule(
                resource.componentPath,
                'TuiNumberFormatDirective',
                '@taiga-ui/core',
            );

            const format = JSON.stringify(
                tuiCleanObject({
                    decimal: decimalAttr?.value,
                    precision: precisionAttr?.value,
                }),
            );

            const formatPart = `[tuiNumberFormat]='${format}'`;

            const insertTo = (sourceCodeLocation?.startTag.startOffset || 0) + 1;

            recorder.insertRight(templateOffset + insertTo, formatPart);
        }

        const attrsToRemove = [
            valueAttr,
            currencyAttr,
            decimalAttr,
            precisionAttr,
            signAttr,
        ].filter((attr): attr is Attribute => attr !== undefined);

        removeAttrs(attrsToRemove, sourceCodeLocation, recorder, templateOffset);
    });
}

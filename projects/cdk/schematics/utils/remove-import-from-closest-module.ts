import {getNgComponents, Node} from 'ng-morph';

import {type TuiSchema} from '../ng-add/schema';

const importsToRemove = new Map<
    string,
    {
        componentPath: string;
        moduleName: string;
    }
>();

// Drops only the imports[] entry (unused there = NG8113); the now-unused import
// statement is left for organize-imports (harmless TS6133).
export function removeImportFromClosestModule(
    componentPath: string,
    moduleName: string,
): void {
    importsToRemove.set(`${componentPath}_${moduleName}`, {componentPath, moduleName});
}

export function saveRemovedImports(_options: TuiSchema): void {
    importsToRemove.forEach(({componentPath, moduleName}) => {
        const [ngComponent] = getNgComponents(componentPath);

        if (!ngComponent) {
            return;
        }

        const decorator = ngComponent.getDecorator('Component');
        const metadata = decorator?.getArguments()[0];

        if (!Node.isObjectLiteralExpression(metadata)) {
            return;
        }

        const importsProperty = metadata.getProperty('imports');

        if (!Node.isPropertyAssignment(importsProperty)) {
            return;
        }

        const importsArray = importsProperty.getInitializer();

        if (!Node.isArrayLiteralExpression(importsArray)) {
            return;
        }

        const index = importsArray
            .getElements()
            .findIndex((element) => element.getText() === moduleName);

        if (index !== -1) {
            importsArray.removeElement(index);
        }
    });

    importsToRemove.clear();
}

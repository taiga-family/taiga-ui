import {
    getClasses,
    getDecorators,
    infoLog,
    Node,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
import {type TuiSchema} from '../../ng-add/schema';

export function removeDuplicates(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} removing duplicates...`);

    const classes = getClasses(ALL_TS_FILES);
    const modules = getDecorators(classes, {name: 'NgModule'});
    const components = getDecorators(classes, {name: 'Component'});

    [...modules, ...components].forEach((decorator) => {
        const [metadata] = decorator.getArguments();

        if (!metadata || !Node.isObjectLiteralExpression(metadata)) {
            return;
        }

        const property = metadata.getProperty('imports');

        if (!Node.isPropertyAssignment(property)) {
            return;
        }

        const importsInitializer = property.getInitializer();

        if (!importsInitializer || !Node.isArrayLiteralExpression(importsInitializer)) {
            return;
        }

        const indexToRemove: number[] = [];
        const existingImports = new Set();

        importsInitializer.getElements().forEach((el, index) => {
            if (existingImports.has(el.getText())) {
                indexToRemove.push(index);
            } else {
                existingImports.add(el.getText());
            }
        });

        indexToRemove.forEach((index, i) => importsInitializer.removeElement(index - i));
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} duplicates removed \n`);
}

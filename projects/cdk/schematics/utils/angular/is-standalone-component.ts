import {type ClassDeclaration, Node} from 'ng-morph';

// TODO: add to ng-morph
export function isStandaloneComponent(component: ClassDeclaration): boolean {
    const decorator = component.getDecorator('Component');

    if (!decorator) {
        return false;
    }

    const [metadata] = decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return false;
    }

    const property = metadata.getProperty('standalone');

    if (!Node.isPropertyAssignment(property)) {
        return false;
    }

    return property.getInitializer()?.getText() === 'true';
}

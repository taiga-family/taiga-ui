import {type CallExpression, Node, type SourceFile, SyntaxKind} from 'ng-morph';

/**
 * Checks if the given call expression is a method call on the given service.
 */
export function isServiceMethodCall(
    call: CallExpression,
    serviceName: string,
    methodName: string,
): boolean {
    const propAccess = call.getExpressionIfKind(SyntaxKind.PropertyAccessExpression);

    if (propAccess?.getName() !== methodName) {
        return false;
    }

    const expr = propAccess.getExpression();

    // 1) inject(Service).method(...)
    if (Node.isCallExpression(expr) && isInjectCallWithService(expr, serviceName)) {
        return true;
    }

    // 2) this.service.method(...)
    if (Node.isPropertyAccessExpression(expr)) {
        const left = expr.getExpression();

        if (left.getKind() === SyntaxKind.ThisKeyword) {
            const name = expr.getName();

            return isIdentifierDeclaredAsInjectService(
                expr.getSourceFile(),
                name,
                serviceName,
            );
        }

        return false;
    }

    // 3) service.method(...)
    if (Node.isIdentifier(expr)) {
        return isIdentifierDeclaredAsInjectService(
            expr.getSourceFile(),
            expr.getText(),
            serviceName,
        );
    }

    return false;
}

function isInjectCallWithService(call: CallExpression, serviceName: string): boolean {
    const callee = call.getExpression();

    // inject(...)
    if (!Node.isIdentifier(callee) || callee.getText() !== 'inject') {
        return false;
    }

    const args = call.getArguments();

    if (args.length < 1) {
        return false;
    }

    // inject(Service)
    const first = args[0];

    if (Node.isIdentifier(first) && first.getText() === serviceName) {
        return true;
    }

    return false;
}

function isIdentifierDeclaredAsInjectService(
    sourceFile: SourceFile,
    name: string,
    serviceName: string,
): boolean {
    // 1) const name = inject(Service)
    const vars = sourceFile.getVariableDeclarations().filter((v) => v.getName() === name);

    for (const v of vars) {
        const init = v.getInitializer();

        if (
            init &&
            Node.isCallExpression(init) &&
            isInjectCallWithService(init, serviceName)
        ) {
            return true;
        }
    }

    // 2) private name = inject(Service)
    const props = sourceFile
        .getDescendantsOfKind(SyntaxKind.PropertyDeclaration)
        .filter((p) => p.getName() === name);

    for (const p of props) {
        const init = p.getInitializer();

        if (
            init &&
            Node.isCallExpression(init) &&
            isInjectCallWithService(init, serviceName)
        ) {
            return true;
        }
    }

    // 3) constructor(private service: Service) {}
    const ctorParams = sourceFile
        .getDescendantsOfKind(SyntaxKind.Parameter)
        .filter((param) => param.getName() === name);

    for (const p of ctorParams) {
        const typeNode = p.getTypeNode();

        if (typeNode?.getText() === serviceName) {
            return true;
        }
    }

    return false;
}

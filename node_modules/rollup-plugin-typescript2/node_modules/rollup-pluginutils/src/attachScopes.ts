import { Node, walk } from 'estree-walker';

const blockDeclarations = {
	const: true,
	let: true
};

interface Extractors {
	[key: string]: (names: Array<string>, param: Node) => void;
}

const extractors: Extractors = {
	Literal(names: Array<string>, param: Node) {
		names.push(param.value as string);
	},

	Identifier(names: Array<string>, param: Node) {
		names.push(param.name);
	},

	ObjectPattern(names: Array<string>, param: Node) {
		param.properties.forEach((prop: Node) => {
			if (prop.type === 'RestElement') {
				extractors.RestElement(names, prop);
			} else {
				extractors[(prop.value || prop.key).type](names, prop.value || prop.key);
			}
		});
	},

	ArrayPattern(names: Array<string>, param: Node) {
		param.elements.forEach((element: Node) => {
			if (element) extractors[element.type](names, element);
		});
	},

	RestElement(names: Array<string>, param: Node) {
		extractors[param.argument.type](names, param.argument);
	},

	AssignmentPattern(names: Array<string>, param: Node) {
		return extractors[param.left.type](names, param.left);
	}
};

function extractNames(param: Node): Array<string> {
	const names: Array<string> = [];

	extractors[param.type](names, param);
	return names;
}

interface ScopeOptions {
	parent?: Scope;
	block?: boolean;
	params?: Array<Node>;
}

class Scope {
	parent?: Scope;
	isBlockScope: boolean;
	declarations: { [key: string]: boolean };

	constructor(options: ScopeOptions = {}) {
		this.parent = options.parent;
		this.isBlockScope = !!options.block;

		this.declarations = Object.create(null);

		if (options.params) {
			options.params.forEach(param => {
				extractNames(param).forEach(name => {
					this.declarations[name] = true;
				});
			});
		}
	}

	addDeclaration(node: Node, isBlockDeclaration: boolean, isVar: boolean): void {
		if (!isBlockDeclaration && this.isBlockScope) {
			// it's a `var` or function node, and this
			// is a block scope, so we need to go up
			this.parent!.addDeclaration(node, isBlockDeclaration, isVar);
		} else if (node.id) {
			extractNames(node.id).forEach(name => {
				this.declarations[name] = true;
			});
		}
	}

	contains(name: string): boolean {
		return this.declarations[name] || (this.parent ? this.parent.contains(name) : false);
	}
}

export default function attachScopes(ast: Node, propertyName: string = 'scope'): Scope {
	let scope = new Scope();

	walk(ast, {
		enter(node, parent) {
			// function foo () {...}
			// class Foo {...}
			if (/(Function|Class)Declaration/.test(node.type)) {
				scope.addDeclaration(node, false, false);
			}

			// var foo = 1
			if (node.type === 'VariableDeclaration') {
				const kind: keyof typeof blockDeclarations = node.kind;
				const isBlockDeclaration = blockDeclarations[kind];

				node.declarations.forEach((declaration: Node) => {
					scope.addDeclaration(declaration, isBlockDeclaration, true);
				});
			}

			let newScope: Scope | undefined;

			// create new function scope
			if (/Function/.test(node.type)) {
				newScope = new Scope({
					parent: scope,
					block: false,
					params: node.params
				});

				// named function expressions - the name is considered
				// part of the function's scope
				if (node.type === 'FunctionExpression' && node.id) {
					newScope.addDeclaration(node, false, false);
				}
			}

			// create new block scope
			if (node.type === 'BlockStatement' && !/Function/.test(parent!.type)) {
				newScope = new Scope({
					parent: scope,
					block: true
				});
			}

			// catch clause has its own block scope
			if (node.type === 'CatchClause') {
				newScope = new Scope({
					parent: scope,
					params: [node.param],
					block: true
				});
			}

			if (newScope) {
				Object.defineProperty(node, propertyName, {
					value: newScope,
					configurable: true
				});

				scope = newScope;
			}
		},
		leave(node) {
			if (node[propertyName]) scope = scope.parent!;
		}
	});

	return scope;
}

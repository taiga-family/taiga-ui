"use strict";

const traverse = require("@babel/traverse").default;
const t = require("@babel/types");

module.exports = function collectUsageWithinFile(ast, usage) {
  const locationRegExp = /^rxjs(\/|$)/;
  const visitor = {
    CallExpression(path) {
      if (!t.isVariableDeclarator(path.parent)) {
        return;
      }
      const { arguments: args, callee } = path.node;
      if (!t.isIdentifier(callee)) {
        return;
      }
      if (callee.name !== "require" || args.length !== 1) {
        return;
      }
      const [arg] = args;
      if (!t.isStringLiteral(arg)) {
        return;
      }
      const { value: location } = arg;
      if (!locationRegExp.test(location)) {
        return;
      }
      const { id } = path.parent;
      const { bindings } = path.scope;
      if (t.isIdentifier(id)) {
        visitNamespace({ bindings, identifier: id, location, usage });
        return;
      }
      if (t.isObjectPattern(id)) {
        visitDestructured({ bindings, location, pattern: id, usage });
        return;
      }
    },
    ImportDeclaration(path) {
      const { specifiers, source } = path.node;
      const { value: location } = source;
      if (!locationRegExp.test(location)) {
        return;
      }
      const { bindings } = path.scope;
      specifiers.forEach((specifier) => {
        if (t.isImportSpecifier(specifier)) {
          visitNamed({ bindings, location, specifier, usage });
          return;
        }
        if (t.isImportNamespaceSpecifier(specifier)) {
          visitNamespace({
            bindings,
            identifier: specifier.local,
            location,
            usage,
          });
          return;
        }
      });
    },
  };
  traverse(ast, visitor, undefined, {});
};

function visitDestructured({ bindings, location, pattern, usage }) {
  let api = usage.apis[location];
  if (!api) {
    api = usage.apis[location] = {};
  }
  pattern.properties.forEach((property) => {
    const { key, value } = property;
    if (!t.isIdentifier(key) || !t.isIdentifier(value)) {
      return;
    }
    const count = api[key.name] || 0;
    api[key.name] = count + bindings[value.name].referencePaths.length;
  });
}

function visitNamed({ bindings, location, specifier, usage }) {
  const { imported, local } = specifier;
  let api = usage.apis[location];
  if (!api) {
    api = usage.apis[location] = {};
  }
  const count = api[imported.name] || 0;
  api[imported.name] = count + bindings[local.name].referencePaths.length;
}

function visitNamespace({ bindings, identifier, location, usage }) {
  let api = usage.apis[location];
  if (!api) {
    api = usage.apis[location] = {};
  }
  bindings[identifier.name].referencePaths.forEach((path) => {
    const { parent } = path;
    if (!t.isMemberExpression(parent)) {
      return;
    }
    const { property } = parent;
    if (!t.isIdentifier(property)) {
      return;
    }
    const count = api[property.name] || 0;
    api[property.name] = count + 1;
  });
}

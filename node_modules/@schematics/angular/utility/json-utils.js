"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appendPropertyInAstObject(recorder, node, propertyName, value, indent) {
    const indentStr = _buildIndent(indent);
    let index = node.start.offset + 1;
    if (node.properties.length > 0) {
        // Insert comma.
        const last = node.properties[node.properties.length - 1];
        const { text, end } = last;
        const commaIndex = text.endsWith('\n') ? end.offset - 1 : end.offset;
        recorder.insertRight(commaIndex, ',');
        index = end.offset;
    }
    const content = _stringifyContent(value, indentStr);
    recorder.insertRight(index, (node.properties.length === 0 && indent ? '\n' : '')
        + ' '.repeat(indent)
        + `"${propertyName}":${indent ? ' ' : ''}${content}`
        + indentStr.slice(0, -indent));
}
exports.appendPropertyInAstObject = appendPropertyInAstObject;
function insertPropertyInAstObjectInOrder(recorder, node, propertyName, value, indent) {
    if (node.properties.length === 0) {
        appendPropertyInAstObject(recorder, node, propertyName, value, indent);
        return;
    }
    // Find insertion info.
    let insertAfterProp = null;
    let prev = null;
    let isLastProp = false;
    const last = node.properties[node.properties.length - 1];
    for (const prop of node.properties) {
        if (prop.key.value > propertyName) {
            if (prev) {
                insertAfterProp = prev;
            }
            break;
        }
        if (prop === last) {
            isLastProp = true;
            insertAfterProp = last;
        }
        prev = prop;
    }
    if (isLastProp) {
        appendPropertyInAstObject(recorder, node, propertyName, value, indent);
        return;
    }
    const indentStr = _buildIndent(indent);
    const insertIndex = insertAfterProp === null
        ? node.start.offset + 1
        : insertAfterProp.end.offset + 1;
    const content = _stringifyContent(value, indentStr);
    recorder.insertRight(insertIndex, indentStr
        + `"${propertyName}":${indent ? ' ' : ''}${content}`
        + ',');
}
exports.insertPropertyInAstObjectInOrder = insertPropertyInAstObjectInOrder;
function removePropertyInAstObject(recorder, node, propertyName) {
    // Find the property inside the object.
    const propIdx = node.properties.findIndex(prop => prop.key.value === propertyName);
    if (propIdx === -1) {
        // There's nothing to remove.
        return;
    }
    if (node.properties.length === 1) {
        // This is a special case. Everything should be removed, including indentation.
        recorder.remove(node.start.offset, node.end.offset - node.start.offset);
        recorder.insertRight(node.start.offset, '{}');
        return;
    }
    // The AST considers commas and indentation to be part of the preceding property.
    // To get around messy comma and identation management, we can work over the range between
    // two properties instead.
    const previousProp = node.properties[propIdx - 1];
    const targetProp = node.properties[propIdx];
    const nextProp = node.properties[propIdx + 1];
    let start, end;
    if (previousProp) {
        // Given the object below, and intending to remove the `m` property:
        // "{\n  \"a\": \"a\",\n  \"m\": \"m\",\n  \"z\": \"z\"\n}"
        //                        ^---------------^
        // Removing the range above results in:
        // "{\n  \"a\": \"a\",\n  \"z\": \"z\"\n}"
        start = previousProp.end;
        end = targetProp.end;
    }
    else {
        // If there's no previousProp there is a nextProp, since we've specialcased the 1 length case.
        // Given the object below, and intending to remove the `a` property:
        // "{\n  \"a\": \"a\",\n  \"m\": \"m\",\n  \"z\": \"z\"\n}"
        //       ^---------------^
        // Removing the range above results in:
        // "{\n  \"m\": \"m\",\n  \"z\": \"z\"\n}"
        start = targetProp.start;
        end = nextProp.start;
    }
    recorder.remove(start.offset, end.offset - start.offset);
    if (!nextProp) {
        recorder.insertRight(start.offset, '\n');
    }
}
exports.removePropertyInAstObject = removePropertyInAstObject;
function appendValueInAstArray(recorder, node, value, indent = 4) {
    let indentStr = _buildIndent(indent);
    let index = node.start.offset + 1;
    // tslint:disable-next-line: no-any
    let newNodes;
    if (node.elements.length > 0) {
        // Insert comma.
        const { end } = node.elements[node.elements.length - 1];
        const isClosingOnSameLine = node.end.offset - end.offset === 1;
        if (isClosingOnSameLine && indent) {
            // Reformat the entire array
            recorder.remove(node.start.offset, node.end.offset - node.start.offset);
            newNodes = [
                ...node.elements.map(({ value }) => value),
                value,
            ];
            index = node.start.offset;
            // In case we are generating the entire node we need to reduce the spacing as
            // otherwise we'd end up having incorrect double spacing
            indent = indent - 2;
            indentStr = _buildIndent(indent);
        }
        else {
            recorder.insertRight(end.offset, ',');
            index = end.offset;
        }
    }
    recorder.insertRight(index, (newNodes ? '' : indentStr)
        + _stringifyContent(newNodes || value, indentStr)
        + (node.elements.length === 0 && indent ? indentStr.substr(0, -indent) + '\n' : ''));
}
exports.appendValueInAstArray = appendValueInAstArray;
function findPropertyInAstObject(node, propertyName) {
    let maybeNode = null;
    for (const property of node.properties) {
        if (property.key.value == propertyName) {
            maybeNode = property.value;
        }
    }
    return maybeNode;
}
exports.findPropertyInAstObject = findPropertyInAstObject;
function _buildIndent(count) {
    return count ? '\n' + ' '.repeat(count) : '';
}
function _stringifyContent(value, indentStr) {
    // TODO: Add snapshot tests
    // The 'space' value is 2, because we want to add 2 additional
    // indents from the 'key' node.
    // If we use the indent provided we will have double indents:
    // "budgets": [
    //   {
    //     "type": "initial",
    //     "maximumWarning": "2mb",
    //     "maximumError": "5mb"
    //   },
    //   {
    //       "type": "anyComponentStyle",
    //       'maximumWarning": "5kb"
    //   }
    // ]
    return JSON.stringify(value, null, 2).replace(/\n/g, indentStr);
}

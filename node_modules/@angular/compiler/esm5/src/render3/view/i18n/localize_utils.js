import { __extends } from "tslib";
import * as o from '../../../output/output_ast';
import { serializeIcuNode } from './icu_serializer';
import { formatI18nPlaceholderName } from './util';
export function createLocalizeStatements(variable, message, params) {
    var statements = [];
    var _a = serializeI18nMessageForLocalize(message), messageParts = _a.messageParts, placeHolders = _a.placeHolders;
    statements.push(new o.ExpressionStatement(variable.set(o.localizedString(message, messageParts, placeHolders, placeHolders.map(function (ph) { return params[ph]; })))));
    return statements;
}
var MessagePiece = /** @class */ (function () {
    function MessagePiece(text) {
        this.text = text;
    }
    return MessagePiece;
}());
var LiteralPiece = /** @class */ (function (_super) {
    __extends(LiteralPiece, _super);
    function LiteralPiece() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LiteralPiece;
}(MessagePiece));
var PlaceholderPiece = /** @class */ (function (_super) {
    __extends(PlaceholderPiece, _super);
    function PlaceholderPiece(name) {
        return _super.call(this, formatI18nPlaceholderName(name, /* useCamelCase */ false)) || this;
    }
    return PlaceholderPiece;
}(MessagePiece));
/**
 * This visitor walks over an i18n tree, capturing literal strings and placeholders.
 *
 * The result can be used for generating the `$localize` tagged template literals.
 */
var LocalizeSerializerVisitor = /** @class */ (function () {
    function LocalizeSerializerVisitor() {
    }
    LocalizeSerializerVisitor.prototype.visitText = function (text, context) {
        if (context[context.length - 1] instanceof LiteralPiece) {
            // Two literal pieces in a row means that there was some comment node in-between.
            context[context.length - 1].text += text.value;
        }
        else {
            context.push(new LiteralPiece(text.value));
        }
    };
    LocalizeSerializerVisitor.prototype.visitContainer = function (container, context) {
        var _this = this;
        container.children.forEach(function (child) { return child.visit(_this, context); });
    };
    LocalizeSerializerVisitor.prototype.visitIcu = function (icu, context) {
        context.push(new LiteralPiece(serializeIcuNode(icu)));
    };
    LocalizeSerializerVisitor.prototype.visitTagPlaceholder = function (ph, context) {
        var _this = this;
        context.push(new PlaceholderPiece(ph.startName));
        if (!ph.isVoid) {
            ph.children.forEach(function (child) { return child.visit(_this, context); });
            context.push(new PlaceholderPiece(ph.closeName));
        }
    };
    LocalizeSerializerVisitor.prototype.visitPlaceholder = function (ph, context) {
        context.push(new PlaceholderPiece(ph.name));
    };
    LocalizeSerializerVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
        context.push(new PlaceholderPiece(ph.name));
    };
    return LocalizeSerializerVisitor;
}());
var serializerVisitor = new LocalizeSerializerVisitor();
/**
 * Serialize an i18n message into two arrays: messageParts and placeholders.
 *
 * These arrays will be used to generate `$localize` tagged template literals.
 *
 * @param message The message to be serialized.
 * @returns an object containing the messageParts and placeholders.
 */
export function serializeI18nMessageForLocalize(message) {
    var pieces = [];
    message.nodes.forEach(function (node) { return node.visit(serializerVisitor, pieces); });
    return processMessagePieces(pieces);
}
/**
 * Convert the list of serialized MessagePieces into two arrays.
 *
 * One contains the literal string pieces and the other the placeholders that will be replaced by
 * expressions when rendering `$localize` tagged template literals.
 *
 * @param pieces The pieces to process.
 * @returns an object containing the messageParts and placeholders.
 */
function processMessagePieces(pieces) {
    var messageParts = [];
    var placeHolders = [];
    if (pieces[0] instanceof PlaceholderPiece) {
        // The first piece was a placeholder so we need to add an initial empty message part.
        messageParts.push('');
    }
    for (var i = 0; i < pieces.length; i++) {
        var part = pieces[i];
        if (part instanceof LiteralPiece) {
            messageParts.push(part.text);
        }
        else {
            placeHolders.push(part.text);
            if (pieces[i - 1] instanceof PlaceholderPiece) {
                // There were two placeholders in a row, so we need to add an empty message part.
                messageParts.push('');
            }
        }
    }
    if (pieces[pieces.length - 1] instanceof PlaceholderPiece) {
        // The last piece was a placeholder so we need to add a final empty message part.
        messageParts.push('');
    }
    return { messageParts: messageParts, placeHolders: placeHolders };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemVfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy92aWV3L2kxOG4vbG9jYWxpemVfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBLE9BQU8sS0FBSyxDQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFaEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBRWpELE1BQU0sVUFBVSx3QkFBd0IsQ0FDcEMsUUFBdUIsRUFBRSxPQUFxQixFQUM5QyxNQUFzQztJQUN4QyxJQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFFaEIsSUFBQSw2Q0FBdUUsRUFBdEUsOEJBQVksRUFBRSw4QkFBd0QsQ0FBQztJQUM5RSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ2xELENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxHLE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUM7QUFFRDtJQUNFLHNCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFHLENBQUM7SUFDckMsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUNEO0lBQTJCLGdDQUFZO0lBQXZDOztJQUF5QyxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTFDLENBQTJCLFlBQVksR0FBRztBQUMxQztJQUErQixvQ0FBWTtJQUN6QywwQkFB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LENBQUM7SUFFbEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksZ0JBQWdCLEVBQUU7UUFDekMscUZBQXFGO1FBQ3JGLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdkI7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLFlBQVksWUFBWSxFQUFFO1lBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksZ0JBQWdCLEVBQUU7Z0JBQzdDLGlGQUFpRjtnQkFDakYsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7SUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxZQUFZLGdCQUFnQixFQUFFO1FBQ3pELGlGQUFpRjtRQUNqRixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxFQUFDLFlBQVksY0FBQSxFQUFFLFlBQVksY0FBQSxFQUFDLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vLi4vLi4vaTE4bi9pMThuX2FzdCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uLy4uLy4uL291dHB1dC9vdXRwdXRfYXN0JztcblxuaW1wb3J0IHtzZXJpYWxpemVJY3VOb2RlfSBmcm9tICcuL2ljdV9zZXJpYWxpemVyJztcbmltcG9ydCB7Zm9ybWF0STE4blBsYWNlaG9sZGVyTmFtZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsaXplU3RhdGVtZW50cyhcbiAgICB2YXJpYWJsZTogby5SZWFkVmFyRXhwciwgbWVzc2FnZTogaTE4bi5NZXNzYWdlLFxuICAgIHBhcmFtczoge1tuYW1lOiBzdHJpbmddOiBvLkV4cHJlc3Npb259KTogby5TdGF0ZW1lbnRbXSB7XG4gIGNvbnN0IHN0YXRlbWVudHMgPSBbXTtcblxuICBjb25zdCB7bWVzc2FnZVBhcnRzLCBwbGFjZUhvbGRlcnN9ID0gc2VyaWFsaXplSTE4bk1lc3NhZ2VGb3JMb2NhbGl6ZShtZXNzYWdlKTtcbiAgc3RhdGVtZW50cy5wdXNoKG5ldyBvLkV4cHJlc3Npb25TdGF0ZW1lbnQodmFyaWFibGUuc2V0KFxuICAgICAgby5sb2NhbGl6ZWRTdHJpbmcobWVzc2FnZSwgbWVzc2FnZVBhcnRzLCBwbGFjZUhvbGRlcnMsIHBsYWNlSG9sZGVycy5tYXAocGggPT4gcGFyYW1zW3BoXSkpKSkpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5jbGFzcyBNZXNzYWdlUGllY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nKSB7fVxufVxuY2xhc3MgTGl0ZXJhbFBpZWNlIGV4dGVuZHMgTWVzc2FnZVBpZWNlIHt9XG5jbGFzcyBQbGFjZWhvbGRlclBpZWNlIGV4dGVuZHMgTWVzc2FnZVBpZWNlIHtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoZm9ybWF0STE4blBsYWNlaG9sZGVyTmFtZShuYW1lLCAvKiB1c2VDYW1lbENhc2UgKi8gZmFsc2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgdmlzaXRvciB3YWxrcyBvdmVyIGFuIGkxOG4gdHJlZSwgY2FwdHVyaW5nIGxpdGVyYWwgc3RyaW5ncyBhbmQgcGxhY2Vob2xkZXJzLlxuICpcbiAqIFRoZSByZXN1bHQgY2FuIGJlIHVzZWQgZm9yIGdlbmVyYXRpbmcgdGhlIGAkbG9jYWxpemVgIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscy5cbiAqL1xuY2xhc3MgTG9jYWxpemVTZXJpYWxpemVyVmlzaXRvciBpbXBsZW1lbnRzIGkxOG4uVmlzaXRvciB7XG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQsIGNvbnRleHQ6IE1lc3NhZ2VQaWVjZVtdKTogYW55IHtcbiAgICBpZiAoY29udGV4dFtjb250ZXh0Lmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgTGl0ZXJhbFBpZWNlKSB7XG4gICAgICAvLyBUd28gbGl0ZXJhbCBwaWVjZXMgaW4gYSByb3cgbWVhbnMgdGhhdCB0aGVyZSB3YXMgc29tZSBjb21tZW50IG5vZGUgaW4tYmV0d2Vlbi5cbiAgICAgIGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXS50ZXh0ICs9IHRleHQudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQucHVzaChuZXcgTGl0ZXJhbFBpZWNlKHRleHQudmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdENvbnRhaW5lcihjb250YWluZXI6IGkxOG4uQ29udGFpbmVyLCBjb250ZXh0OiBNZXNzYWdlUGllY2VbXSk6IGFueSB7XG4gICAgY29udGFpbmVyLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCkpO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSwgY29udGV4dDogTWVzc2FnZVBpZWNlW10pOiBhbnkge1xuICAgIGNvbnRleHQucHVzaChuZXcgTGl0ZXJhbFBpZWNlKHNlcmlhbGl6ZUljdU5vZGUoaWN1KSkpO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dDogTWVzc2FnZVBpZWNlW10pOiBhbnkge1xuICAgIGNvbnRleHQucHVzaChuZXcgUGxhY2Vob2xkZXJQaWVjZShwaC5zdGFydE5hbWUpKTtcbiAgICBpZiAoIXBoLmlzVm9pZCkge1xuICAgICAgcGguY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC52aXNpdCh0aGlzLCBjb250ZXh0KSk7XG4gICAgICBjb250ZXh0LnB1c2gobmV3IFBsYWNlaG9sZGVyUGllY2UocGguY2xvc2VOYW1lKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dDogTWVzc2FnZVBpZWNlW10pOiBhbnkge1xuICAgIGNvbnRleHQucHVzaChuZXcgUGxhY2Vob2xkZXJQaWVjZShwaC5uYW1lKSk7XG4gIH1cblxuICB2aXNpdEljdVBsYWNlaG9sZGVyKHBoOiBpMThuLkljdVBsYWNlaG9sZGVyLCBjb250ZXh0PzogYW55KTogYW55IHtcbiAgICBjb250ZXh0LnB1c2gobmV3IFBsYWNlaG9sZGVyUGllY2UocGgubmFtZSkpO1xuICB9XG59XG5cbmNvbnN0IHNlcmlhbGl6ZXJWaXNpdG9yID0gbmV3IExvY2FsaXplU2VyaWFsaXplclZpc2l0b3IoKTtcblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gaTE4biBtZXNzYWdlIGludG8gdHdvIGFycmF5czogbWVzc2FnZVBhcnRzIGFuZCBwbGFjZWhvbGRlcnMuXG4gKlxuICogVGhlc2UgYXJyYXlzIHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSBgJGxvY2FsaXplYCB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gYmUgc2VyaWFsaXplZC5cbiAqIEByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtZXNzYWdlUGFydHMgYW5kIHBsYWNlaG9sZGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUkxOG5NZXNzYWdlRm9yTG9jYWxpemUobWVzc2FnZTogaTE4bi5NZXNzYWdlKTpcbiAgICB7bWVzc2FnZVBhcnRzOiBzdHJpbmdbXSwgcGxhY2VIb2xkZXJzOiBzdHJpbmdbXX0ge1xuICBjb25zdCBwaWVjZXM6IE1lc3NhZ2VQaWVjZVtdID0gW107XG4gIG1lc3NhZ2Uubm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQoc2VyaWFsaXplclZpc2l0b3IsIHBpZWNlcykpO1xuICByZXR1cm4gcHJvY2Vzc01lc3NhZ2VQaWVjZXMocGllY2VzKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBsaXN0IG9mIHNlcmlhbGl6ZWQgTWVzc2FnZVBpZWNlcyBpbnRvIHR3byBhcnJheXMuXG4gKlxuICogT25lIGNvbnRhaW5zIHRoZSBsaXRlcmFsIHN0cmluZyBwaWVjZXMgYW5kIHRoZSBvdGhlciB0aGUgcGxhY2Vob2xkZXJzIHRoYXQgd2lsbCBiZSByZXBsYWNlZCBieVxuICogZXhwcmVzc2lvbnMgd2hlbiByZW5kZXJpbmcgYCRsb2NhbGl6ZWAgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzLlxuICpcbiAqIEBwYXJhbSBwaWVjZXMgVGhlIHBpZWNlcyB0byBwcm9jZXNzLlxuICogQHJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1lc3NhZ2VQYXJ0cyBhbmQgcGxhY2Vob2xkZXJzLlxuICovXG5mdW5jdGlvbiBwcm9jZXNzTWVzc2FnZVBpZWNlcyhwaWVjZXM6IE1lc3NhZ2VQaWVjZVtdKTpcbiAgICB7bWVzc2FnZVBhcnRzOiBzdHJpbmdbXSwgcGxhY2VIb2xkZXJzOiBzdHJpbmdbXX0ge1xuICBjb25zdCBtZXNzYWdlUGFydHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHBsYWNlSG9sZGVyczogc3RyaW5nW10gPSBbXTtcblxuICBpZiAocGllY2VzWzBdIGluc3RhbmNlb2YgUGxhY2Vob2xkZXJQaWVjZSkge1xuICAgIC8vIFRoZSBmaXJzdCBwaWVjZSB3YXMgYSBwbGFjZWhvbGRlciBzbyB3ZSBuZWVkIHRvIGFkZCBhbiBpbml0aWFsIGVtcHR5IG1lc3NhZ2UgcGFydC5cbiAgICBtZXNzYWdlUGFydHMucHVzaCgnJyk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhcnQgPSBwaWVjZXNbaV07XG4gICAgaWYgKHBhcnQgaW5zdGFuY2VvZiBMaXRlcmFsUGllY2UpIHtcbiAgICAgIG1lc3NhZ2VQYXJ0cy5wdXNoKHBhcnQudGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlSG9sZGVycy5wdXNoKHBhcnQudGV4dCk7XG4gICAgICBpZiAocGllY2VzW2kgLSAxXSBpbnN0YW5jZW9mIFBsYWNlaG9sZGVyUGllY2UpIHtcbiAgICAgICAgLy8gVGhlcmUgd2VyZSB0d28gcGxhY2Vob2xkZXJzIGluIGEgcm93LCBzbyB3ZSBuZWVkIHRvIGFkZCBhbiBlbXB0eSBtZXNzYWdlIHBhcnQuXG4gICAgICAgIG1lc3NhZ2VQYXJ0cy5wdXNoKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHBpZWNlc1twaWVjZXMubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBQbGFjZWhvbGRlclBpZWNlKSB7XG4gICAgLy8gVGhlIGxhc3QgcGllY2Ugd2FzIGEgcGxhY2Vob2xkZXIgc28gd2UgbmVlZCB0byBhZGQgYSBmaW5hbCBlbXB0eSBtZXNzYWdlIHBhcnQuXG4gICAgbWVzc2FnZVBhcnRzLnB1c2goJycpO1xuICB9XG4gIHJldHVybiB7bWVzc2FnZVBhcnRzLCBwbGFjZUhvbGRlcnN9O1xufVxuIl19
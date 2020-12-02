/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A token representing the a reference to a static type.
 *
 * This token is unique for a filePath and name and can be used as a hash table key.
 */
export class StaticSymbol {
    constructor(filePath, name, members) {
        this.filePath = filePath;
        this.name = name;
        this.members = members;
    }
    assertNoMembers() {
        if (this.members.length) {
            throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
        }
    }
}
/**
 * A cache of static symbol used by the StaticReflector to return the same symbol for the
 * same symbol values.
 */
export class StaticSymbolCache {
    constructor() {
        this.cache = new Map();
    }
    get(declarationFile, name, members) {
        members = members || [];
        const memberSuffix = members.length ? `.${members.join('.')}` : '';
        const key = `"${declarationFile}".${name}${memberSuffix}`;
        let result = this.cache.get(key);
        if (!result) {
            result = new StaticSymbol(declarationFile, name, members);
            this.cache.set(key, result);
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3N5bWJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3Qvc3RhdGljX3N5bWJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFBbUIsUUFBZ0IsRUFBUyxJQUFZLEVBQVMsT0FBaUI7UUFBL0QsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFVO0lBQUcsQ0FBQztJQUV0RixlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUNYLDJEQUEyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6RjtJQUNILENBQUM7Q0FDRjtBQUVEOzs7R0FHRztBQUNILE1BQU0sT0FBTyxpQkFBaUI7SUFBOUI7UUFDVSxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFhbEQsQ0FBQztJQVhDLEdBQUcsQ0FBQyxlQUF1QixFQUFFLElBQVksRUFBRSxPQUFrQjtRQUMzRCxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUN4QixNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25FLE1BQU0sR0FBRyxHQUFHLElBQUksZUFBZSxLQUFLLElBQUksR0FBRyxZQUFZLEVBQUUsQ0FBQztRQUMxRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEEgdG9rZW4gcmVwcmVzZW50aW5nIHRoZSBhIHJlZmVyZW5jZSB0byBhIHN0YXRpYyB0eXBlLlxuICpcbiAqIFRoaXMgdG9rZW4gaXMgdW5pcXVlIGZvciBhIGZpbGVQYXRoIGFuZCBuYW1lIGFuZCBjYW4gYmUgdXNlZCBhcyBhIGhhc2ggdGFibGUga2V5LlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGljU3ltYm9sIHtcbiAgY29uc3RydWN0b3IocHVibGljIGZpbGVQYXRoOiBzdHJpbmcsIHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBtZW1iZXJzOiBzdHJpbmdbXSkge31cblxuICBhc3NlcnROb01lbWJlcnMoKSB7XG4gICAgaWYgKHRoaXMubWVtYmVycy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSWxsZWdhbCBzdGF0ZTogc3ltYm9sIHdpdGhvdXQgbWVtYmVycyBleHBlY3RlZCwgYnV0IGdvdCAke0pTT04uc3RyaW5naWZ5KHRoaXMpfS5gKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNhY2hlIG9mIHN0YXRpYyBzeW1ib2wgdXNlZCBieSB0aGUgU3RhdGljUmVmbGVjdG9yIHRvIHJldHVybiB0aGUgc2FtZSBzeW1ib2wgZm9yIHRoZVxuICogc2FtZSBzeW1ib2wgdmFsdWVzLlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGljU3ltYm9sQ2FjaGUge1xuICBwcml2YXRlIGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFN0YXRpY1N5bWJvbD4oKTtcblxuICBnZXQoZGVjbGFyYXRpb25GaWxlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbWVtYmVycz86IHN0cmluZ1tdKTogU3RhdGljU3ltYm9sIHtcbiAgICBtZW1iZXJzID0gbWVtYmVycyB8fCBbXTtcbiAgICBjb25zdCBtZW1iZXJTdWZmaXggPSBtZW1iZXJzLmxlbmd0aCA/IGAuJHttZW1iZXJzLmpvaW4oJy4nKX1gIDogJyc7XG4gICAgY29uc3Qga2V5ID0gYFwiJHtkZWNsYXJhdGlvbkZpbGV9XCIuJHtuYW1lfSR7bWVtYmVyU3VmZml4fWA7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuY2FjaGUuZ2V0KGtleSk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBTdGF0aWNTeW1ib2woZGVjbGFyYXRpb25GaWxlLCBuYW1lLCBtZW1iZXJzKTtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSJdfQ==
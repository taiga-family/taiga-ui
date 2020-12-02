/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/tsutils-etc
 */
/* tslint:disable:no-console */

import { tsquery } from "@phenomnomnominal/tsquery";
import { readFileSync } from "fs";
import * as ts from "typescript";

export function printMembers(enumName: string, value: number, bitwise = false) {
  const content = readFileSync(
    require.resolve("typescript/lib/typescript.d.ts")
  ).toString();
  const sourceFile = ts.createSourceFile(
    "typescript.d.ts",
    content,
    ts.ScriptTarget.ESNext,
    true,
    ts.ScriptKind.TS
  );

  const [enumDeclaration] = tsquery(
    sourceFile,
    `EnumDeclaration[name.text="${enumName}"]`
  ) as ts.EnumDeclaration[];

  const set: [string, number][] = [];
  for (const member of enumDeclaration.members) {
    if (member.initializer && ts.isNumericLiteral(member.initializer)) {
      const flag = parseInt(member.initializer.text, 10);
      if (bitwise) {
        /* tslint:disable-next-line */
        if ((value & flag) === flag) {
          set.push([member.name.getText(), flag]);
        }
      } else if (value === flag) {
        set.push([member.name.getText(), flag]);
        break;
      }
    }
  }
  set.sort(([, a], [, b]) => a - b);

  console.log(`${enumName} (${value})`);
  for (const [text, flag] of set) {
    console.log(`  ${text} (${flag})`);
  }
}

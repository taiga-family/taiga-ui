/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/tsutils-etc
 */
/* tslint:disable:no-unused-expression */

import * as yargs from "yargs";
import { printMembers } from "./enum";

yargs.command(
  "$0 <value>",
  "lookup a value's flags",
  (yargs) =>
    yargs
      .positional("value", {
        describe: "the numeric value of the combined flags",
        type: "number",
      })
      .option("j", { describe: "JsxFlags", type: "boolean" })
      .option("k", { describe: "TokenFlags", type: "boolean" })
      .option("m", { describe: "ModifierFlags", type: "boolean" })
      .option("n", { describe: "NodeFlags", type: "boolean" })
      .option("o", { describe: "ObjectsFlags", type: "boolean" })
      .option("s", { describe: "SymbolFlags", type: "boolean" })
      .option("t", { describe: "TypeFlags", type: "boolean" }),
  (argv) => printMembers(getEnumName(argv), argv.value!, true)
).argv;

function getEnumName(argv: any) {
  if (argv.j) {
    return "JsxFlags";
  }
  if (argv.k) {
    return "TokenFlags";
  }
  if (argv.m) {
    return "ModifierFlags";
  }
  if (argv.n) {
    return "NodeFlags";
  }
  if (argv.o) {
    return "ObjectFlags";
  }
  if (argv.s) {
    return "SymbolFlags";
  }
  return "TypeFlags";
}

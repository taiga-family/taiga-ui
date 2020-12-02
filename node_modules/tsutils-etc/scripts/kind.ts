/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/tsutils-etc
 */
/* tslint:disable:no-unused-expression */

import * as yargs from "yargs";
import { printMembers } from "./enum";

yargs.command(
  "$0 <kind>",
  "lookup a syntax kind",
  (yargs) =>
    yargs.positional("kind", {
      describe: "the numeric syntax kind value",
      type: "number",
    }),
  (argv) => printMembers("SyntaxKind", argv.kind!)
).argv;

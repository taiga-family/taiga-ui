Adding support for more commands
--------------------------------

If you think we need to support another command, you can either make an issue
requesting support, or just implement it yourself.

Adding new commands is easy.  In [`lib/index.ts`](lib/index.ts), you'll see the
implementation of our current commands.  If your command is already supported by
[`wd`](https://github.com/admc/wd), you should be able to get all the
information you need [from `webdriverio`](
https://github.com/webdriverio/webdriverio/tree/master/lib/protocol). Make sure to add tests
in [`spec/index_spec.ts`](spec/index_spec.ts), and run `npm test` before you
submit.

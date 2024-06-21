```ts
export const routes = [
  {
    path: '',
    component: MyPage,
    children: [
      tuiGenerateDialogableRoute(MyDialog, {
        path: 'path/to/dialog',
      }),
    ],
  },
];
```

```ts
constructor(private readonly sheets: TuiSheetDialogService) {}

// ...

this.sheets
    .open(
        'Content',
        {
            label: 'Heading',
            offset: 48,
        },
    )
    .subscribe();
```

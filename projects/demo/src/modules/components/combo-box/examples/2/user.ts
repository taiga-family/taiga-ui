export class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
        readonly disabled = false,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

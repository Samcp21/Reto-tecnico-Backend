export class User {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly points?: number,
    public readonly level?: number,
    public readonly archievements?: string[],
  ) {}
}

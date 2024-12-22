export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      name: string;
      email: string;
      isSuperAdmin: boolean;
      constructor(name: string, email: string, isSuperAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }
      changesRules(): boolean {
        this.isSuperAdmin = !this.isSuperAdmin;
        return this.isSuperAdmin;
      }
    }
  }
}

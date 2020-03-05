export class UserRepository {

    static get usersTable(): any[] {

        let usersTable: { id: number, first: string, last: string, username: string, phone: string }[] = [
            {"id": 1, "first": "John", "last": "Doe", "username": "john.doe", "phone": "11111"},
            {"id": 2, "first": "Jane", "last": "Braun", "username": "jane,braun", "phone": "2222"},
            {"id": 3, "first": "Mary", "last": "Black", "username": "mary.black", "phone": "33333"},
        ];
        return usersTable;
    }
}


export class UploadCsvHelper {

    static uploadCsvFile(filePath: string): any[] {

        let users: { id: number, first: string, last: string, username: string, phone: string }[] = [
            {"id": 1, "first": "John", "last": "Doe", "username": "john.doe", "phone": "11111"},
            {"id": 2, "first": "Jane", "last": "Braun", "username": "jane,braun", "phone": "2222"},
            {"id": 3, "first": "Mary", "last": "Black", "username": "mary.black", "phone": "55555"},
        ];
        return users;
    }
}



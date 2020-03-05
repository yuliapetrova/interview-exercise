import {StudentsPage} from "../__pages__/students-page";
import {UploadCsvHelper} from "../__stubs__/upload-csv-helper";
import {UserRepository} from "../__stubs__/user-repository";

const sync = require('@wdio/sync').default;
const nodeFetch = require('node-fetch');

var uploadData: any[];

describe('Test featureL adding in system a new users using csv file', () => {
    it('Should go to Students Information page', async () => {
        await StudentsPage.open();
        await StudentsPage.verifyTitle();
    });

    it('Should verify elements “Upload file” form, “Sync data” button and “Users table” ', async () => {
        await StudentsPage.verifyPageElements();
    });

    it('Should Upload .csv file', () => {
        uploadData =
            UploadCsvHelper.uploadCsvFile('__tests__/testdata/testusers1.csv'); // file upload mocked
    });

    it('Should click on "Sync data" button', async () => {
        (await StudentsPage.syncBtn()).click();
    });

    it('Verify file data is synced with database',  () => {
        let databaseUsers = UserRepository.usersTable;
        expect(databaseUsers.sort()).toEqual(expect.arrayContaining(uploadData.sort()));
    });
});

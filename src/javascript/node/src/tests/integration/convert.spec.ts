import { createConnection, getConnection, MigrationExecutor } from 'typeorm';
import { ConvertsService } from '../../services/ConvertsService';

let convertService: ConvertsService;
beforeEach(() => {
    convertService = new ConvertsService();    
})

beforeAll(async () => {
    const connection = await createConnection();

    await connection.dropDatabase();
    await connection.runMigrations();
})

afterAll(async () => {
    const mainConnection = getConnection();

    const migrationExecutor = new MigrationExecutor(mainConnection);
    const migrations = await migrationExecutor.getAllMigrations();

    for (const migration of migrations) {
      await mainConnection.undoLastMigration();
    }

    await mainConnection.close();
})

describe('Convert binary to decimal', () => {
    it('should return correct decimal when convertion completed correct', async () => {
        const binary = "101111101";

        const { decimal } = await convertService.create(binary)

        expect(decimal).toBe(381)
    })

    it('should return success status when convertion completed correct', async () => {
        const binary = "000101";

        const { status } = await convertService.create(binary)

        expect(status).toBe(1)
    })
})
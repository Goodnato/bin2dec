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
    it('should return success status when convertion completed correct', async () => {
        const binary = "000101";

        const { status } = await convertService.create(binary)

        expect(status).toBe(1)
    })
    
    it('should return object when convertion completed correct', async () => {
        const binary = "101111101";

        const result = await convertService.create(binary)

        expect(result).toEqual(expect.objectContaining({
            binary,
            decimal: 381,
            status: 1,
            message: "Success"
        }))
    })
})
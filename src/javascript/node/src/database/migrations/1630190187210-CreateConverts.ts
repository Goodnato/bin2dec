import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateConverts1630190187210 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "converts",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "binary",
                        type: "varchar"
                    },
                    {
                        name: "decimal",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "boolean"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("converts")
    }

}

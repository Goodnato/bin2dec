import { EntityRepository, Repository } from "typeorm";
import { Converts } from "../entities/Converts";

@EntityRepository(Converts)
class ConvertsRepository extends Repository<Converts> {
}

export { ConvertsRepository };
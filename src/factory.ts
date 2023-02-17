import { LendgineCreated as LendgineCreatedEvent } from "../generated/Factory/Factory"
import { Factory } from "../generated/schema";
import { FACTORY_ADDRESS, ONE_BI, ZERO_BI } from "./utils";

export function handleLendgineCreated(_event: LendgineCreatedEvent): void {
  let factory = Factory.load(FACTORY_ADDRESS);
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.lendgineCount = ZERO_BI
  }

  factory.lendgineCount = factory.lendgineCount.plus(ONE_BI)

  factory.save()
}

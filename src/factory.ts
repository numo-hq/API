import { LendgineCreated as LendgineCreatedEvent } from './types/Factory/Factory'
import { Factory } from './types/schema'
import { FACTORY_ADDRESS, ONE_BI, ZERO_BI } from './utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleLendgineCreated(_event: LendgineCreatedEvent): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.lendgineCount = ZERO_BI
  }

  factory.lendgineCount = factory.lendgineCount.plus(ONE_BI)

  factory.save()
}

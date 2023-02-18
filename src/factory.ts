import { LendgineCreated as LendgineCreatedEvent } from './types/Factory/Factory'
import { Factory, Lendgine } from './types/schema'
import { FACTORY_ADDRESS, ONE_BI, ZERO_BI } from './utils'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function handleLendgineCreated(event: LendgineCreatedEvent): void {
  let factory = Factory.load(FACTORY_ADDRESS)
  if (factory === null) {
    factory = new Factory(FACTORY_ADDRESS)
    factory.lendgineCount = ZERO_BI
  }

  // eslint-disable-next-line prefer-const
  let lendgine = new Lendgine(event.params.lendgine.toHexString())
  lendgine.token0 = event.params.token0
  lendgine.token1 = event.params.token1
  lendgine.token0Exp = event.params.token0Exp.toU32()
  lendgine.token1Exp = event.params.token1Exp.toU32()
  lendgine.upperBound = event.params.upperBound

  factory.lendgineCount = factory.lendgineCount.plus(ONE_BI)

  lendgine.save()
  factory.save()
}

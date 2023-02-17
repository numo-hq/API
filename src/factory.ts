import { LendgineCreated as LendgineCreatedEvent } from "../generated/Factory/Factory"
import { LendgineCreated } from "../generated/schema"

export function handleLendgineCreated(event: LendgineCreatedEvent): void {
  let entity = new LendgineCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token0 = event.params.token0
  entity.token1 = event.params.token1
  entity.token0Exp = event.params.token0Exp
  entity.token1Exp = event.params.token1Exp
  entity.upperBound = event.params.upperBound
  entity.lendgine = event.params.lendgine

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

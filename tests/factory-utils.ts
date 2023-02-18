import { newMockEvent } from 'matchstick-as'
import { LendgineCreated } from '../src/types/Factory/Factory'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'

export function createLendgineCreatedEvent(
  token0: Address,
  token1: Address,
  token0Exp: i32,
  token1Exp: i32,
  // eslint-disable-next-line @typescript-eslint/ban-types
  upperBound: BigInt,
  lendgine: Address
): LendgineCreated {
  const lendgineCreatedEvent = changetype<LendgineCreated>(newMockEvent())
  lendgineCreatedEvent.parameters = []

  const token0Param = new ethereum.EventParam('token0', ethereum.Value.fromAddress(token0))
  const token1Param = new ethereum.EventParam('token1', ethereum.Value.fromAddress(token1))
  const token0ExpParam = new ethereum.EventParam('token0Exp', ethereum.Value.fromI32(token0Exp))
  const token1ExpParam = new ethereum.EventParam('token1Exp', ethereum.Value.fromI32(token1Exp))
  const upperBoundParam = new ethereum.EventParam('upperBound', ethereum.Value.fromUnsignedBigInt(upperBound))
  const lendgineParam = new ethereum.EventParam('lendgine', ethereum.Value.fromAddress(lendgine))

  lendgineCreatedEvent.parameters.push(token0Param)
  lendgineCreatedEvent.parameters.push(token1Param)
  lendgineCreatedEvent.parameters.push(token0ExpParam)
  lendgineCreatedEvent.parameters.push(token1ExpParam)
  lendgineCreatedEvent.parameters.push(upperBoundParam)
  lendgineCreatedEvent.parameters.push(lendgineParam)

  return lendgineCreatedEvent
}

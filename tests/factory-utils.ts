import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { LendgineCreated } from "../generated/Factory/Factory"

export function createLendgineCreatedEvent(
  token0: Address,
  token1: Address,
  token0Exp: BigInt,
  token1Exp: BigInt,
  upperBound: BigInt,
  lendgine: Address
): LendgineCreated {
  let lendgineCreatedEvent = changetype<LendgineCreated>(newMockEvent())

  lendgineCreatedEvent.parameters = new Array()

  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "token0Exp",
      ethereum.Value.fromUnsignedBigInt(token0Exp)
    )
  )
  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "token1Exp",
      ethereum.Value.fromUnsignedBigInt(token1Exp)
    )
  )
  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "upperBound",
      ethereum.Value.fromUnsignedBigInt(upperBound)
    )
  )
  lendgineCreatedEvent.parameters.push(
    new ethereum.EventParam("lendgine", ethereum.Value.fromAddress(lendgine))
  )

  return lendgineCreatedEvent
}

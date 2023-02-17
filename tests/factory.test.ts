import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { LendgineCreated } from "../generated/schema"
import { LendgineCreated as LendgineCreatedEvent } from "../generated/Factory/Factory"
import { handleLendgineCreated } from "../src/factory"
import { createLendgineCreatedEvent } from "./factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token0 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token1 = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token0Exp = BigInt.fromI32(234)
    let token1Exp = BigInt.fromI32(234)
    let upperBound = BigInt.fromI32(234)
    let lendgine = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newLendgineCreatedEvent = createLendgineCreatedEvent(
      token0,
      token1,
      token0Exp,
      token1Exp,
      upperBound,
      lendgine
    )
    handleLendgineCreated(newLendgineCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LendgineCreated created and stored", () => {
    assert.entityCount("LendgineCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token0",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token1",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token0Exp",
      "234"
    )
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token1Exp",
      "234"
    )
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "upperBound",
      "234"
    )
    assert.fieldEquals(
      "LendgineCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "lendgine",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

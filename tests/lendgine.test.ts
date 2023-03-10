import { describe, test, clearStore, assert, afterEach, beforeEach } from 'matchstick-as/assembly/index'
import { handleLendgineCreated } from '../src/factory'
import { FACTORY_ADDRESS } from '../src/utils'
import {
  AddressOne,
  AddressThree,
  AddressTwo,
  BurnEntityType,
  createBurnEvent,
  createDepositEvent,
  createLendgineCreatedEvent,
  createMintEvent,
  createWithdrawEvent,
  DepositEntityType,
  FactoryEntityType,
  LendgineEntityType,
  MintEntityType,
  TokenEntityType,
  WithdrawEntityType,
} from './utils'
import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import { handleBurn, handleDeposit, handleMint, handleWithdraw } from '../src/lendgine'
export { handleLendgineCreated }

describe('handleMint()', () => {
  beforeEach(() => {
    const lendgineCreatedEvent = createLendgineCreatedEvent(
      AddressOne,
      AddressTwo,
      18,
      18,
      BigInt.fromString('1000000000000000000'),
      AddressThree
    )

    handleLendgineCreated(lendgineCreatedEvent)
  })

  afterEach(() => {
    clearStore()
  })

  test('Save Mint from event', () => {
    const mintEvent = createMintEvent(
      AddressOne,
      BigInt.fromString('1000000000000000000'),
      BigInt.fromString('2000000000000000000'),
      BigInt.fromString('3000000000000000000'),
      AddressTwo
    )

    mintEvent.address = AddressThree
    mintEvent.transaction.hash = Bytes.empty()
    mintEvent.logIndex = BigInt.fromString('1')

    handleMint(mintEvent)

    assert.fieldEquals(MintEntityType, '0x00000000#1', 'id', '0x00000000#1')
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'lendgine', AddressThree.toHexString())
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'sender', AddressOne.toHexString())
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'recipient', AddressTwo.toHexString())
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'collateral', '1000000000000000000')
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'liquidity', '2000000000000000000')
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'shares', '3000000000000000000')
    assert.fieldEquals(MintEntityType, '0x00000000#1', 'logIndex', '1')

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '1')
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'txCount', '2')

    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'txCount', '2')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'txCount', '2')

    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 1)
    assert.entityCount(TokenEntityType, 2)
    assert.entityCount(MintEntityType, 1)
  })

  test('Save Burn from event', () => {
    const burnEvent = createBurnEvent(
      AddressOne,
      BigInt.fromString('1000000000000000000'),
      BigInt.fromString('2000000000000000000'),
      BigInt.fromString('3000000000000000000'),
      AddressTwo
    )

    burnEvent.address = AddressThree
    burnEvent.transaction.hash = Bytes.empty()
    burnEvent.logIndex = BigInt.fromString('1')

    handleBurn(burnEvent)

    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'id', '0x00000000#1')
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'lendgine', AddressThree.toHexString())
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'sender', AddressOne.toHexString())
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'recipient', AddressTwo.toHexString())
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'collateral', '1000000000000000000')
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'liquidity', '2000000000000000000')
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'shares', '3000000000000000000')
    assert.fieldEquals(BurnEntityType, '0x00000000#1', 'logIndex', '1')

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '1')
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'txCount', '2')

    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'txCount', '2')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'txCount', '2')

    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 1)
    assert.entityCount(TokenEntityType, 2)
    assert.entityCount(BurnEntityType, 1)
  })

  test('Save Deposit from event', () => {
    const depositEvent = createDepositEvent(
      AddressOne,
      BigInt.fromString('1000000000000000000'),
      BigInt.fromString('2000000000000000000'),
      AddressTwo
    )

    depositEvent.address = AddressThree
    depositEvent.transaction.hash = Bytes.empty()
    depositEvent.logIndex = BigInt.fromString('1')

    handleDeposit(depositEvent)

    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'id', '0x00000000#1')
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'lendgine', AddressThree.toHexString())
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'sender', AddressOne.toHexString())
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'recipient', AddressTwo.toHexString())
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'size', '1000000000000000000')
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'liquidity', '2000000000000000000')
    assert.fieldEquals(DepositEntityType, '0x00000000#1', 'logIndex', '1')

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '1')
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'txCount', '2')

    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'txCount', '2')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'txCount', '2')

    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 1)
    assert.entityCount(TokenEntityType, 2)
    assert.entityCount(DepositEntityType, 1)
  })

  test('Save Withdraw from event', () => {
    const withdrawEvent = createWithdrawEvent(
      AddressOne,
      BigInt.fromString('1000000000000000000'),
      BigInt.fromString('2000000000000000000'),
      AddressTwo
    )

    withdrawEvent.address = AddressThree
    withdrawEvent.transaction.hash = Bytes.empty()
    withdrawEvent.logIndex = BigInt.fromString('1')

    handleWithdraw(withdrawEvent)

    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'id', '0x00000000#1')
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'lendgine', AddressThree.toHexString())
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'sender', AddressOne.toHexString())
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'recipient', AddressTwo.toHexString())
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'size', '1000000000000000000')
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'liquidity', '2000000000000000000')
    assert.fieldEquals(WithdrawEntityType, '0x00000000#1', 'logIndex', '1')

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'lendgineCount', '1')
    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'txCount', '2')

    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressOne.toHexString(), 'txCount', '2')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'poolCount', '1')
    assert.fieldEquals(TokenEntityType, AddressTwo.toHexString(), 'txCount', '2')

    assert.entityCount(FactoryEntityType, 1)
    assert.entityCount(LendgineEntityType, 1)
    assert.entityCount(TokenEntityType, 2)
    assert.entityCount(WithdrawEntityType, 1)
  })
})

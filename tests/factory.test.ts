import { describe, test, afterAll, clearStore, assert, createMockedFunction } from 'matchstick-as/assembly/index'
import { ADDRESS_ZERO, FACTORY_ADDRESS } from '../src/utils'
import { handleLendgineCreated } from '../src/factory'
import { createLendgineCreatedEvent } from './factory-utils'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'
import { Factory } from '../src/types/Factory/Factory'

const FactoryEntityType = 'Factory'

export { handleLendgineCreated }

describe('handleLendgineCreated()', () => {
  afterAll(() => {
    clearStore()
  })

  test('Save Factory from event', () => {
    const lendgineCreatedEvent = createLendgineCreatedEvent(
      Address.fromString(ADDRESS_ZERO),
      Address.fromString(ADDRESS_ZERO),
      18,
      18,
      BigInt.fromString('1000000000000000000'),
      Address.fromString(ADDRESS_ZERO)
    )

    handleLendgineCreated(lendgineCreatedEvent)

    assert.fieldEquals(FactoryEntityType, FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    assert.entityCount(FactoryEntityType, 1)
  })

  test('Save Factory from contract call', () => {
    createMockedFunction(
      Address.fromString(FACTORY_ADDRESS),
      'createLendgine',
      'createLendgine(address,address,uint8,uint8,uint256):(address)'
    )
      .withArgs([
        ethereum.Value.fromAddress(Address.fromString(ADDRESS_ZERO)),
        ethereum.Value.fromAddress(Address.fromString(ADDRESS_ZERO)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromU32(18)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromU32(18)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1000000000000000000')),
      ])
      .returns([ethereum.Value.fromAddress(Address.fromString(ADDRESS_ZERO))])

    const factory = Factory.bind(Address.fromString(FACTORY_ADDRESS))
    const result = factory.createLendgine(
      Address.fromString(ADDRESS_ZERO),
      Address.fromString(ADDRESS_ZERO),
      18,
      18,
      BigInt.fromString('1000000000000000000')
    )

    assert.addressEquals(Address.fromString(ADDRESS_ZERO), result)
  })
})

import { describe, test, afterAll, clearStore, assert } from 'matchstick-as/assembly/index'
import { Factory } from '../src/types/schema'
import { FACTORY_ADDRESS } from '../src/utils'

describe('handleLendgineCreated()', () => {
  afterAll(() => {
    clearStore()
  })

  test(
    'Save Factory',
    () => {
      const factory = new Factory(FACTORY_ADDRESS)
      factory.save()

      assert.fieldEquals('Factory', FACTORY_ADDRESS, 'id', FACTORY_ADDRESS)
    },
    true
  )
})

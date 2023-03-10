import { newMockEvent } from 'matchstick-as'
import { LendgineCreated } from '../src/types/Factory/Factory'
import { Burn, Mint, Deposit, Withdraw } from '../src/types/templates/Lendgine/Lendgine'
import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'

export const LendgineEntityType = 'Lendgine'
export const FactoryEntityType = 'Factory'
export const TokenEntityType = 'Token'
export const MintEntityType = 'Mint'
export const BurnEntityType = 'Burn'
export const DepositEntityType = 'Deposit'
export const WithdrawEntityType = 'Withdraw'

export const AddressOne = Address.fromString('0x0000000000000000000000000000000000000001')
export const AddressTwo = Address.fromString('0x0000000000000000000000000000000000000002')
export const AddressThree = Address.fromString('0x0000000000000000000000000000000000000003')
export const AddressFour = Address.fromString('0x0000000000000000000000000000000000000004')

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

export function createMintEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  collateral: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  shares: BigInt,
  to: Address
): Mint {
  const mintEvent = changetype<Mint>(newMockEvent())
  mintEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const collateralParam = new ethereum.EventParam('collateral', ethereum.Value.fromUnsignedBigInt(collateral))
  const sharesParam = new ethereum.EventParam('shares', ethereum.Value.fromUnsignedBigInt(shares))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  mintEvent.parameters.push(senderParam)
  mintEvent.parameters.push(collateralParam)
  mintEvent.parameters.push(sharesParam)
  mintEvent.parameters.push(liquidityParam)
  mintEvent.parameters.push(toParams)

  return mintEvent
}

export function createBurnEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  collateral: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  shares: BigInt,
  to: Address
): Burn {
  const burnEvent = changetype<Burn>(newMockEvent())
  burnEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const collateralParam = new ethereum.EventParam('collateral', ethereum.Value.fromUnsignedBigInt(collateral))
  const sharesParam = new ethereum.EventParam('shares', ethereum.Value.fromUnsignedBigInt(shares))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  burnEvent.parameters.push(senderParam)
  burnEvent.parameters.push(collateralParam)
  burnEvent.parameters.push(sharesParam)
  burnEvent.parameters.push(liquidityParam)
  burnEvent.parameters.push(toParams)

  return burnEvent
}

export function createDepositEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  size: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  to: Address
): Deposit {
  const depositEvent = changetype<Deposit>(newMockEvent())
  depositEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const sizeParam = new ethereum.EventParam('size', ethereum.Value.fromUnsignedBigInt(size))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  depositEvent.parameters.push(senderParam)
  depositEvent.parameters.push(sizeParam)
  depositEvent.parameters.push(liquidityParam)
  depositEvent.parameters.push(toParams)

  return depositEvent
}

export function createWithdrawEvent(
  sender: Address,
  // eslint-disable-next-line @typescript-eslint/ban-types
  size: BigInt,
  // eslint-disable-next-line @typescript-eslint/ban-types
  liquidity: BigInt,
  to: Address
): Withdraw {
  const withdrawEvent = changetype<Withdraw>(newMockEvent())
  withdrawEvent.parameters = []

  const senderParam = new ethereum.EventParam('sender', ethereum.Value.fromAddress(sender))
  const sizeParam = new ethereum.EventParam('size', ethereum.Value.fromUnsignedBigInt(size))
  const liquidityParam = new ethereum.EventParam('liquidity', ethereum.Value.fromUnsignedBigInt(liquidity))
  const toParams = new ethereum.EventParam('sender', ethereum.Value.fromAddress(to))

  withdrawEvent.parameters.push(senderParam)
  withdrawEvent.parameters.push(sizeParam)
  withdrawEvent.parameters.push(liquidityParam)
  withdrawEvent.parameters.push(toParams)

  return withdrawEvent
}

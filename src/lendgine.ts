import { log } from '@graphprotocol/graph-ts'
import {
  Mint as MintEvent,
  Burn as BurnEvent,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
} from './types/templates/Lendgine/Lendgine'
import { Burn, Factory, Lendgine, Mint, Token, Deposit, Withdraw } from './types/schema'
import { FACTORY_ADDRESS, loadTransaction, ONE_BI } from './utils'

export function handleMint(event: MintEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const mint = new Mint(transaction.id.toString() + '#' + lendgine.txCount.toString())
  mint.transaction = transaction.id
  mint.lendgine = lendgine.id

  mint.sender = event.params.sender
  mint.recipient = event.params.to

  mint.collateral = event.params.collateral
  mint.liquidity = event.params.liquidity
  mint.shares = event.params.shares

  mint.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  mint.save()
}

export function handleBurn(event: BurnEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const burn = new Burn(transaction.id.toString() + '#' + lendgine.txCount.toString())
  burn.transaction = transaction.id
  burn.lendgine = lendgine.id

  burn.sender = event.params.sender
  burn.recipient = event.params.to

  burn.collateral = event.params.collateral
  burn.liquidity = event.params.liquidity
  burn.shares = event.params.shares

  burn.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  burn.save()
}

export function handleDeposit(event: DepositEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const deposit = new Deposit(transaction.id.toString() + '#' + lendgine.txCount.toString())
  deposit.transaction = transaction.id
  deposit.lendgine = lendgine.id

  deposit.sender = event.params.sender
  deposit.recipient = event.params.to

  deposit.size = event.params.size
  deposit.liquidity = event.params.liquidity

  deposit.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  deposit.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  const lendgineAddress = event.address.toHexString()
  const lendgine = Lendgine.load(lendgineAddress)
  const factory = Factory.load(FACTORY_ADDRESS)

  if (!lendgine || !factory) {
    log.error('factory or lendgine not found', [lendgineAddress, FACTORY_ADDRESS])
    return
  }
  const token0 = Token.load(lendgine.token0)
  const token1 = Token.load(lendgine.token1)

  if (!token0 || !token1) {
    log.error('token0 or token1 not found', [lendgine.token0, lendgine.token1])
    return
  }

  // update globals
  factory.txCount = factory.txCount.plus(ONE_BI)
  lendgine.txCount = lendgine.txCount.plus(ONE_BI)

  // update token0 data
  token0.txCount = token0.txCount.plus(ONE_BI)

  // update token1 data
  token1.txCount = token1.txCount.plus(ONE_BI)

  const transaction = loadTransaction(event)

  const withdraw = new Withdraw(transaction.id.toString() + '#' + lendgine.txCount.toString())
  withdraw.transaction = transaction.id
  withdraw.lendgine = lendgine.id

  withdraw.sender = event.params.sender
  withdraw.recipient = event.params.to

  withdraw.size = event.params.size
  withdraw.liquidity = event.params.liquidity

  withdraw.logIndex = event.logIndex

  token0.save()
  token1.save()
  lendgine.save()
  factory.save()
  withdraw.save()
}

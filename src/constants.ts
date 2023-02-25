import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC = 56,
  BSCTESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x3E916Afad52b19895a9D1a8fAec7e35C4f5dE3d1'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.BSCTESTNET]: FACTORY_ADDRESS,
  [ChainId.ROPSTEN]: FACTORY_ADDRESS,
  [ChainId.RINKEBY]: FACTORY_ADDRESS,
  [ChainId.GÖRLI]: FACTORY_ADDRESS,
  [ChainId.KOVAN]: FACTORY_ADDRESS,
  [ChainId.BSC]: FACTORY_ADDRESS
}

export const INIT_CODE_HASH = '0x9b68167dea6ce5231b3b4e36e1e6f7b1e945d446ff3a8bdf3a3982bc29188c44'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.BSCTESTNET]: INIT_CODE_HASH,
  [ChainId.ROPSTEN]: INIT_CODE_HASH,
  [ChainId.RINKEBY]: INIT_CODE_HASH,
  [ChainId.GÖRLI]: INIT_CODE_HASH,
  [ChainId.KOVAN]: INIT_CODE_HASH,
  [ChainId.BSC]: INIT_CODE_HASH
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

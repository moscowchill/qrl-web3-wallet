/**
 * Formats a decimal chain ID as the 0x-prefixed hexadecimal quantity that
 * dApps expect from the provider state (for example 1337 -> "0x539").
 */
export function chainIdToHex(chainId: bigint | number | string): string {
  return `0x${BigInt(chainId).toString(16)}`;
}

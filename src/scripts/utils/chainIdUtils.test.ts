import { describe, expect, it } from "vitest";
import { chainIdToHex } from "./chainIdUtils";

describe("chainIdToHex", () => {
  it("converts a decimal chain ID to a hexadecimal quantity", () => {
    expect(chainIdToHex(1337n)).toBe("0x539");
    expect(chainIdToHex(3151909n)).toBe("0x301825");
  });

  it("accepts numbers and decimal strings", () => {
    expect(chainIdToHex(1337)).toBe("0x539");
    expect(chainIdToHex("3151909")).toBe("0x301825");
  });

  it("does not re-read the decimal digits as hexadecimal", () => {
    expect(chainIdToHex(1337n)).not.toBe("0x1337");
  });
});

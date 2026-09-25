import {  test, expect } from "vitest";
import { smallestNumber } from "../questions/smallestNumber";


    test("returns largest number", () => {
        expect(smallestNumber([1, 5, 3])).toBe(1);
    });

    test("handles negative numbers", () => {
        expect(smallestNumber([-5, -2, -8])).toBe(-2);
    });

    test("handles duplicate numbers", () => {
        expect(smallestNumber([4, 4, 2])).toBe(4);
    });

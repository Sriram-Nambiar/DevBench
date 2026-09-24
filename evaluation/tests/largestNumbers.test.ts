import {  test, expect } from "vitest";
import { largestNumber } from "../questions/largestNumber";


    test("returns largest number", () => {
        expect(largestNumber([1, 5, 3])).toBe(5);
    });

    test("handles negative numbers", () => {
        expect(largestNumber([-5, -2, -8])).toBe(-2);
    });

    test("handles duplicate numbers", () => {
        expect(largestNumber([4, 4, 2])).toBe(4);
    });

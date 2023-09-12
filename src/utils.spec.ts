import {sum} from "./utils";

describe('sum()', () => {
    it('should work properly', () => {
        expect(sum()).toBe(0);
        expect(sum(1, 2, 3)).toBe(6);
    })
})
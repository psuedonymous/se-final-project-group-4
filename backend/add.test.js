import { addTwoNumbers } from './add.js'

describe('add function',  () => {
    it('adds two numbers', () => {
        expect(addTwoNumbers(1,6)).toBe(7)
    })
})
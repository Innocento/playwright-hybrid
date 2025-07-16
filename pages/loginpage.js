const {test, expect} = require('@playwright/test')

test('My test1',async function(page) {
    expect(12).toBe(12)
})

test1('My test3',async function(page) {
    expect(13).toBe(15)
})

test2('My test2',async function(page) {
    expect(15).toBe(15)
})
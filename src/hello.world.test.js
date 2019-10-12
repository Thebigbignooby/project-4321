import hello from './hello.world'

it('returns "Hello World!"', () => {
  const expected = 'Hello World!'
  const res = hello()
  expect(res).toBe(expected)
})

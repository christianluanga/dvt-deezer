jest.mock("../api.get.artist-details")
import fetchArtist from "../api.get.artist-details"

test("call to the deezer aristis endpoint with a valid artist name", () => {
  const artist = "Beyoncé"
  expect.assertions(1)
  return fetchArtist(artist).then((data) => expect(data.id).toBe(145))
})

test("call to the deezer aristis endpoint with an invalid artist name", () => {
  const artist = "invalid"
  expect.assertions(1)
  return fetchArtist(artist).catch((response) =>
    expect(response.error).toMatch(`${artist} not found`)
  )
})

test("call to the deezer aristis endpoint with empty string", () => {
  expect.assertions(1)
  return fetchArtist("").catch((response) =>
    expect(response.error).toMatch("not found")
  )
})

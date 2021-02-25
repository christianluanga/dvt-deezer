import React from "react"
import {BrowserRouter} from "react-router-dom"
import {rest} from "msw"
import {setupServer} from "msw/node"
import {render, fireEvent, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import {artistBasicDetails} from "../../mocks data/data"
import Home from "../home"

const server = setupServer(
  rest.get("/artist", (req, res, ctx) => {
    return res(ctx.json(artistBasicDetails))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("Load the artist overview", async () => {
  const fakeHistory = {
    push: jest.fn()
  }
  render(
    <BrowserRouter>
      <Home history={fakeHistory} />
    </BrowserRouter>
  )

  fireEvent.click(screen.getByText("Search"))
  await waitFor(() => expect(server).toHaveBeenCalledTimes(1))
  //expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  //   expect(fakeHistory.push).toHaveBeenCalledWith(
  //     `/artist/overview/${artistBasicDetails.id}`
  //   )
})

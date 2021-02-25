import {artistBasicDetails} from "../../mocks-data/data"

export default function request(artistName) {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      artistBasicDetails.name === artistName
        ? resolve(artistBasicDetails)
        : reject({
            error: `Artist with ${artistName} not found.`
          })
    )
  })
}

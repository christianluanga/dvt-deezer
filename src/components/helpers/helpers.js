/**@param int artistID
 * @returns an array urls
 * @description takes in the artist Deezer id and returns an array of
 * formatted url for each specified resource such as album, top tracks,...
 */
const urlConstructor = (artistID) => {
  return [
    {
      title: "Artist overview",
      url: `https://api.deezer.com/artist/${artistID}`
    },
    {
      title: "Top Songs",
      url: `https://api.deezer.com/artist/${artistID}/top?limit=5`
    },
    {
      title: "Albums",
      url: `https://api.deezer.com/artist/${artistID}/albums`
    },
    {
      title: "Related",
      url: `https://api.deezer.com/artist/${artistID}/related?limit=6`
    }
  ]
}

/**@function
 * @param string search param
 * @returns the formatted param
 * @description takes a string and returns the same string trimmed,with all
 * non-leading or trailing whitespaces replaced with the passed char
 * @example " kanye   west  " => "kanye-west"
 */
const urlFormatter = (str, char) => str.trim().replace(/\s+/g, char)

export {urlConstructor, urlFormatter}

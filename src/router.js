import {Switch, Route, BrowserRouter} from "react-router-dom"
import ArtistDetails from "./components/core/artist-details"
import Home from "./components/screen/home"
import MenuBar from "./components/screen/nav-bar"
import Footer from "./components/screen/footer"
import ArtistOverview from "./components/core/artist-overview"
import Error from "./components/utils/error"
import artistNotFound from "./components/utils/artist-not-found"
import pageNotFound from "./components/utils/page-not-found"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/error-occured" component={Error} />
        <Route  path="/artist-not-found" component={artistNotFound} />
        <Route
          path="/artist/overview/:id"
          render={(props) => <ArtistOverview id={props.match.params.id} />}
        />
        <Route
          path="/artist/details/:id"
          render={(props) => <ArtistDetails id={props.match.params.id} />}
        />
      <Route exact path="*" component={pageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter

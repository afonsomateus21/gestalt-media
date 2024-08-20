import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { MediaOptions } from "./pages/MediaOptions";
import { MoviesAndSeries } from "./pages/MoviesAndSeries";
import { AlbumCovers } from "./pages/AlbumCovers";
import { Games } from "./pages/Games";
import { Advertisings } from "./pages/Advertisings";
import { Credits } from "./pages/Credits";
import { References } from "./pages/References";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/media-options",
        element: <MediaOptions />,
      },
      {
        path: "/media-options/movies-series",
        element: <MoviesAndSeries />,
      },
      {
        path: "/media-options/album-covers",
        element: <AlbumCovers />,
      },
      {
        path: "/media-options/games",
        element: <Games />,
      },
      {
        path: "/media-options/advertisings",
        element: <Advertisings />,
      },
      {
        path: "/credits",
        element: <Credits />
      },
      {
        path: "/references",
        element: <References />
      }
    ]
  }
]);
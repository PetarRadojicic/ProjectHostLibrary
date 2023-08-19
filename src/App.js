import ProjectLibrary from './project_library/projectLibrary'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Ascii from './Ascii/Ascii'
import WeightFinder from './WeightFinder/WeightFinder'
import style from './App.module.css'

const router = createBrowserRouter([
  { path: '/',element: <ProjectLibrary/>},
  { path: '/Ascii',element: <Ascii/>},
  { path: '/WeightFinder',element: <WeightFinder/>}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;

import { AppRoutes } from "./router/AppRoutes"


function App() {
  return (
    <AppRoutes isAuthorized={true} role={'CLIENT'}
    />
  )
}

export default App



import { AppRoutes } from "./router/AppRoutes"


function App() {
  return (
    <AppRoutes isAuthorized={false} role={'CLIENT'}
    />
  )
}

export default App



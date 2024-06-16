import { UserIconSvg } from "./assets/iconCollections"
import { Input } from "./UI/Input"
import { Button } from "./UI/Button"


function App() {
  return (
    <>
      <Button>Click</Button>
      <Input icon={<UserIconSvg />} />
    </>
  )
}

export default App

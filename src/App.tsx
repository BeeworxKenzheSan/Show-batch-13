import { styled } from "@mui/material"
import { SignUpForm } from "./components/SignUpForm"
import { Header } from "./layouts/Heaader"


function App() {
  return (
    <Content>
      <Header />
      <SignUpForm />
    </Content>
  )
}

export default App


const Content = styled('div')`
  margin-right: 120px;
  margin-left: 120px;
  margin-top: 20px;
`

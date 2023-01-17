import { Habit } from './components/Habit'
import './styles/global.css'

const App = (): JSX.Element => {
  return (
    <>
      <Habit completed={13} />
      <Habit completed={22} />
      <Habit completed={44} />
    </>
  )
}

export default App

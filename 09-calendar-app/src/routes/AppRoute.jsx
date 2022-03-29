import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen"
import { CalendarScreen } from "../components/calendar/CalendarScreen"
import { NotMatchScreen } from "../components/errors/NotMatchScreen"

export const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/calendar" element={<CalendarScreen />} />
          <Route exact path="*" element={<NotMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

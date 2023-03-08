import { defaultTheme, Provider } from "@adobe/react-spectrum";
import { DateRangeCalendar } from "./components/DateRangeCalendar";

function App() {
  return (
    <Provider theme={defaultTheme} colorScheme="light">
      <DateRangeCalendar></DateRangeCalendar>
    </Provider>
  );
}

export default App;

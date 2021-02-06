import AutoComplete from './components/TextField/AutoComplete'
import availableHours from './data/operational-hours'

function App() {
  return (
    <div className="App">
      <AutoComplete
        placeholder="Pilih"
        value="Hello"
        options={availableHours.open.map(hour => ({ label: hour, value: hour }))}
      />
    </div>
  );
}

export default App

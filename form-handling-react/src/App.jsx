import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <RegistrationForm />
      </div>
      <hr />
      <div style={{ padding: '20px' }}>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
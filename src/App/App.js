import AppRouting from '../Routes/AppRouting';
import './App.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';



//theme
// import "primereact/resources/themes/saga-blue/theme.css"; //1
// import "primereact/resources/themes/bootstrap4-light-blue/theme.css";// 2
import "primereact/resources/themes/md-light-indigo/theme.css"; //4
// import "primereact/resources/themes/mdc-light-indigo/theme.css";
// import "primereact/resources/themes/lara-light-teal/theme.css"; //5
// import "primereact/resources/themes/lara-dark-blue/theme.css"; //d1


//core
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <div className="ecr-app">
      <AppRouting />
    </div>
  );
}

export default App;

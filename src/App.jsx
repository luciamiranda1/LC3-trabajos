import Table from './components/table/Table';
import './App.css'

const netIncomes = [{
  brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463
}];
const App=()=>{
  return(
    <div>
      <h2>NET INCOME TABLE</h2>
      <Table netIncomes={netIncomes}/>
    </div>
  );
};

export default App;

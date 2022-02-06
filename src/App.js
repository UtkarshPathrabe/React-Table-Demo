import './App.css';
import { BasicTable } from './components/BasicTable';
import { TableWithFooter } from './components/TableWithFooter';
import { GroupedColumnsTable } from './components/GroupedColumnsTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { RowSelection } from './components/RowSelection';
import { ColumnOrder } from './components/ColumnOrder';
import { ColumnHiding } from './components/ColumnHiding';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<BasicTable />} />
        <Route path='/table-footer' element={<TableWithFooter />} />
        <Route path='/grouped-columns' element={<GroupedColumnsTable />} />
        <Route path='/sort' element={<SortingTable />} />
        <Route path='/filter' element={<FilteringTable />} />
        <Route path='/pagination' element={<PaginationTable />} />
        <Route path='/row-selection' element={<RowSelection />} />
        <Route path='/column-order' element={<ColumnOrder />} />
        <Route path='/column-hiding' element={<ColumnHiding />} />
      </Routes>
    </div>
  );
}

export default App;

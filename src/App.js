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

function App() {
  return (
    <div className="App">
      <BasicTable />
      <TableWithFooter />
      <GroupedColumnsTable />
      <SortingTable />
      <FilteringTable />
      <PaginationTable />
      <RowSelection />
      <ColumnOrder />
      <ColumnHiding />
    </div>
  );
}

export default App;

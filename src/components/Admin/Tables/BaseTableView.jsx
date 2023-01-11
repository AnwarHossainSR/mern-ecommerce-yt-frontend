import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import BaseTableHeader from './BaseTableHeader';
import BaseTableRow from './BaseTableRow';

const BaseTableView = ({ headers, rows, cmp }) => {
  return (
    <Table>
      <BaseTableHeader headers={headers} />
      <TableBody>
        {rows.length > 0 ? <BaseTableRow rows={rows} cmp={cmp} /> : 'No Data'}
      </TableBody>
    </Table>
  );
};

export default BaseTableView;

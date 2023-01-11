import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import BaseTableHeader from './BaseTableHeader';
import BaseTableRow from './BaseTableRow';

const BaseTableView = ({ headers, rows }) => {
  return (
    <Table sx={{ width: '100%' }}>
      <BaseTableHeader headers={headers} />
      <TableBody>
        <BaseTableRow rows={rows} />
      </TableBody>
    </Table>
  );
};

export default BaseTableView;

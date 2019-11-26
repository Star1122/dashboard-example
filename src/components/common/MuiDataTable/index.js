import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

function MuiDataTable(props) {
  const {
    title,
    columns,
    data,
    options,
  } = props;

  const newOptions = {
    ...options,
    downloadOptions: {
      filename: `${title}.csv`,
    },
    selectableRows: 'none',
    selectableRowsHeader: false,
  };

  return (
    <MUIDataTable
      title={title}
      columns={columns}
      data={data}
      options={newOptions}
    />
  );
}

MuiDataTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object,
};

MuiDataTable.defaultProps = {
  options: {},
};

export default MuiDataTable;

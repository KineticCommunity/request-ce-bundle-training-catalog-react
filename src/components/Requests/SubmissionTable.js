import React from 'react';
import moment from 'moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import * as constants from '../../constants';

const dateFormatter = cell =>
  moment(cell).format(constants.TIME_FORMAT);

const formFormatter = cell =>
  cell.name;

export const SubmissionTable = ({ submissions }) =>
  <BootstrapTable data={submissions}>
    <TableHeaderColumn dataField="handle" isKey>Confirmation #</TableHeaderColumn>
    <TableHeaderColumn dataField="submittedBy" >Submitted By</TableHeaderColumn>
    <TableHeaderColumn dataField="createdAt" dataFormat={dateFormatter}>Drafted Date</TableHeaderColumn>
    <TableHeaderColumn dataField="submittedAt" dataFormat={dateFormatter}>Submitted Date</TableHeaderColumn>
    <TableHeaderColumn dataField="form" dataFormat={formFormatter}>Form</TableHeaderColumn>
  </BootstrapTable>;

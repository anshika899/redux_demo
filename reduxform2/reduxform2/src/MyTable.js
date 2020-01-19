import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';


const SimpleTable =({values={members:[]}}) =>(

    <TableContainer >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell >Last Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {values.members.map((m,i) => (
            <TableRow key={'${i}-${m.firstName}-${m.lastName}'}>
              <TableCell >{m.firstName}</TableCell>
              <TableCell>{m.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );


  export default connect(state =>({
      values: getFormValues('MyForm')(state)}))(SimpleTable);
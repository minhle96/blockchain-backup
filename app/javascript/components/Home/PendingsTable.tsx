import * as React from 'react';
import { Row, Col, Button, Card, CardText,
         CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import { TransactionInfo } from '../../containers';
         
export interface PendingsTableProps {
  transactions: Array<TransactionInfo>
}

export class PendingsTable extends React.Component< PendingsTableProps ,{}> {
  constructor(props: PendingsTableProps) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-3">Sender</th>
            <th className="col-3">Reciever</th>
            <th className="col-2">Amount</th>
            <th className="col-3">Actions</th>
          </tr>
        </thead>
        <tbody>
        { this.props.transactions.length > 0 ?
          this.props.transactions.map((e, i) => (
            <tr key={i}>
              <th scope="row" className="col-1">{i + 1}</th>
              <td className="col-3">{e.sender.slice(0, 20)}...</td>
              <td className="col-3">{e.receiver.slice(0, 20)}...</td>
              <td className="col-2">{e.value}</td>
              <td className="col-3">
              <Button color="primary" className="btn-me">Confirm</Button>
              <Button color="danger" className="btn-me">Delete</Button>
              </td>
              </tr>
            ))
          : null
        }
        </tbody>
      </Table>
    )
  }
}
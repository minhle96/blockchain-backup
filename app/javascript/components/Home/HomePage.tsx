import * as React from 'react';
import { Row, Col, Button, Card, CardText,
         CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import { connect } from 'react-redux';
import { TransactionInfo } from '../../containers';

interface HomePageProps {
  real_amount: number,
  available_amount: number,
  transactions: Array<TransactionInfo>,
  dispatch: any,
  handleNewest() :void,
  handleMe() :void,
  handlePending() :void,
  is_me: boolean,
  is_newest: boolean,
  is_pending: boolean
}

export class HomePage extends React.Component<HomePageProps, {}> {
  constructor(props: HomePageProps) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col sm="12" md="3">
          <div className="wallet-card">
            <Card className="card-balance">
              <CardTitle>YOUR REAL BALANCE</CardTitle>
              <hr/>
              <CardText>{this.props.real_amount}</CardText>
            </Card>
            <br/>
            <Card className="card-balance">
              <CardTitle>YOUR AVAILABLE BALANCE</CardTitle>
              <hr/>
              <CardText>{this.props.available_amount}</CardText>
            </Card>
          </div>
        </Col>
        <Col sm="12" md="9">
          <div className="wallet-card">
            <Card className="card-transcription">
              <Row>
                <Col lg="6" sm="12">
                  <CardTitle>
                    {`${this.props.is_pending? 'PENDING ' : ''}`}
                    {`${this.props.is_me? 'MY ' : ''}`}
                    {`${this.props.is_newest? 'NEWEST ' : ''}`}
                    TRANSACTIONS
                  </CardTitle>
                </Col>
                <Col lg="6" sm="4" className="d-flex justify-content-end">
                  <Button disabled={!!this.props.is_newest} className="btn-newest" onClick={this.props.handleNewest}>Newest</Button>
                  <Button disabled={!!this.props.is_me} className="btn-me" onClick={this.props.handleMe}>Me</Button>
                  <Button disabled={!!this.props.is_pending} className="btn-pending" onClick={this.props.handlePending}>Pending</Button>
                </Col>
              </Row>
              <div className="card-table">
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      {!this.props.is_pending? <th>Hash</th> : <th></th>}
                      <th>Sender</th>
                      <th>Reciever</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.props.transactions.length > 0 ?
                    this.props.transactions.map((e, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        {!this.props.is_pending? <td>{e.hash.slice(0, 20)}...</td> : <td></td>}
                        <td>{e.sender.slice(0, 25)}...</td>
                        <td>{e.receiver.slice(0, 25)}...</td>
                        <td>{e.value}</td>
                        </tr>
                      ))
                    : null
                  }
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    );
  }
}

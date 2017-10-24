import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const TeamCard = ({ team }) =>
  <Col xs={12} md={4}>
    <div className="team-card">
      <div className="team-icon">
        <span className="fa-stack">
          <span className="fa fa-circle fa-stack-2x" />
          <span className="fa fa-group fa-stack-1x" />
        </span>
      </div>
      <div className="team-name" >
        { team.name }
      </div>
    </div>
  </Col>;

export const Teams = ({ teams }) =>
  <Grid>
    <Row>
      <Col xs={12}>
        <h1>Teams</h1>
      </Col>
    </Row>
    <Row>
      { teams.map(team => <TeamCard team={team} />) }
    </Row>
  </Grid>;

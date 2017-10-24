import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { actions } from '../../redux/modules/teams';

import { Teams } from './Teams';

const mapStateToProps = state => ({
  teams: state.teams.data,
});

const mapDispatchToProps = {
  fetchTeams: actions.fetchTeams,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.fetchTeams();
    },
  }),
);

export const TeamsContainer = enhance(Teams);

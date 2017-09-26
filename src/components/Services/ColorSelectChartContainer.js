import { connect } from 'react-redux';

import { actions as submissionsActions, selectByColor } from '../../redux/modules/submissions';

import { ColorSelectChart } from './ColorSelectChart';

const mapStateToProps = state => ({
  data: selectByColor(state.submissions.data),
});

const mapDispatchToProps = ({
  fetchSubmissions: submissionsActions.fetchSubmissions,
});

export const ColorSelectChartContainer =
  connect(mapStateToProps, mapDispatchToProps)(ColorSelectChart);

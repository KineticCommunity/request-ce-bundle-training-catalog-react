import { watchAlerts } from './sagas/alerts';
import { watchCategories } from './sagas/categories';
import { watchForms } from './sagas/forms';
import { watchMe } from './sagas/me';
import { watchSpace } from './sagas/space';
import { watchSubmissions } from './sagas/submissions';
import { watchSubmission, watchSubmissionPoller } from './sagas/submission';
import { watchSubmissionCounts } from './sagas/submissionCounts';

export default function* () {
  yield [
    watchAlerts(),
    watchCategories(),
    watchForms(),
    watchMe(),
    watchSubmissions(),
    watchSpace(),
    watchSubmission(),
    watchSubmissionPoller(),
    watchSubmissionCounts(),
  ];
}

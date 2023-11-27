import { CounterPage, LoaderPage, ParallelPage } from 'pages';
import { Tab } from 'types';

export const routes: Record<Tab, React.ReactNode> = {
  'counter': <CounterPage />,
  'loader': <LoaderPage />,
  'parallel': <ParallelPage />,
}
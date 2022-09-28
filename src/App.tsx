import { Container } from '@mui/material';
import StoryList from './components/StoryList';
import PageHeader from './components/PageHeader'

const App = () => (
  <Container maxWidth="md">
    <PageHeader title="Hacker News" />
    <StoryList />
  </Container>
);

export default App;

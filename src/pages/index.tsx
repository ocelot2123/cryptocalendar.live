import { Container } from '../components/Container';
import { Event } from '../components/Event';
import events from '../data.json';
import { Header } from '../components/Header';

const Index = () => (
  <Container height="100%" minHeight="100vh">
    <Header />
    <Event events={events} />
  </Container>
);

export default Index;

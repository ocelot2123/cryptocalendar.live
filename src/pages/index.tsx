import { Container } from '../components/Container';
import { Event } from '../components/Event';
import events from '../data.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Index = () => (
  <Container height="100%" minHeight="100vh">
    <Header />
    <Event events={events} />
    <Footer />
  </Container>
);

export default Index;

import { Container } from '../components/Container';
import { Conference } from '../components/Conference';
import conferences from '../data.json';
import { Header } from '../components/Header';

const Index = () => (
  <Container height="100%" minHeight="100vh">
    <Header />
    <Conference conferences={conferences} />
  </Container>
);

export default Index;

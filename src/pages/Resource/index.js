import { Outlet } from 'react-router-dom';

import { Container } from 'components/layouts';
import TypePageTab from 'components/TypePageTab';

export default function Resource() {
  return (
    <>
      <TypePageTab />
      <Container pt="12px" pb={{ base: '20px', lg: '32px' }}>
        <Outlet />
      </Container>
    </>
  );
}

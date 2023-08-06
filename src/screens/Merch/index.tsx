import ContentBlock from '../../components/ContentBlock';
import Heading2 from '../../components/Heading2';
import MerchItems from '../../components/Merch';

function Merch() {
  return (
    <main>
      <ContentBlock>
        <Heading2>
          Merch
        </Heading2>
        <MerchItems />
      </ContentBlock>
    </main>
  );
}

export default Merch;

import Text from '../Text';
import Heading2 from '../Heading2';
import ContentBlock from '../ContentBlock';
import './styles.scss';

function Merch({ className }: { className?: string }) {
  return (
    <ContentBlock className={`merch ${className}`}>
      <Heading2>
        Merch
      </Heading2>
      <div className="merchText">
        <Text variant="body2">Please visit our</Text>
        <Text variant="body2">
          <a href="https://funeralpile.bandcamp.com">Bandcamp Store</a>
        </Text>
        <Text variant="body2">to purchase our merch.</Text>
      </div>
    </ContentBlock>
  );
}

export default Merch;
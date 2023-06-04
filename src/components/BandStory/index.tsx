import Text from '../Text';
import Heading2 from '../Heading2';
import ContentBlock from '../ContentBlock';
import { story } from './info';
import styles from './styles.module.scss';

function BandStory({ className }: { className?: string }) {
  return (
    <ContentBlock className={`${styles.bandStory} ${className}`}>
      <Heading2>
        About
      </Heading2>
      {story.split('|').map((paragraph) => (
        <Text
          key={paragraph.slice(0, 3) + paragraph.slice(-5)}
          variant="body2"
          tag="p"
        >
          {paragraph}
        </Text>
      ))}
    </ContentBlock>
  );
}

export default BandStory;

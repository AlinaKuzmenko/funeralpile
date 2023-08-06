import { IMember, lineup } from './info';
import ContentBlock from '../ContentBlock';
import Text from '../Text';
import Figure from '../Figure';
import Heading2 from '../Heading2';
import styles from './styles.module.scss';

function BandMembers() {
  return (
    <ContentBlock className={styles.bandMembers}>
      <Heading2>
        Lineup
      </Heading2>
      <ul>
        {lineup.map((member: IMember) => (
          <li key={member.name}>
            <Figure
              image={{ src: member.image, alt: `${member.name} on stage` }}
              caption={(
                <figcaption
                  className={styles.figcaption}
                >
                  <Text variant="body2">
                    {member.name}
                  </Text>
                  <Text variant="body3">
                    {member.instruments}
                  </Text>
                </figcaption>
              )}
            />
          </li>
        ))}
      </ul>
    </ContentBlock>
  );
}

export default BandMembers;

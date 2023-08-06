import MerchGroup from './MerchGroup';
import { patches, records, tShirts } from './info';

function Merch() {
  return (
    <>
      <MerchGroup
        name="tShirt"
        merchList={tShirts}
      />
      <MerchGroup
        name="record"
        merchList={records}
      />
      <MerchGroup
        name="patch"
        merchList={patches}
      />
    </>
  );
}

export default Merch;

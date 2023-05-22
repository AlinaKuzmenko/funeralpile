import './styles.scss';

interface ISpinner {
  size?: number;
}

function Spinner({ size = 40 }: ISpinner) {
  return (
    <div className="spinner" style={{ width: size, height: size }} />
  );
}

export default Spinner;

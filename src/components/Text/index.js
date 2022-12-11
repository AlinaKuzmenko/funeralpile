import React from 'react';
import './styles.scss';


function combineClassNames(classNames) {
  return Object.keys(classNames)
    .filter((className) => !!classNames[className])
    .join(' ');
}

const Text = ({
  component,
  children,
  className,
  paragraph = false,
}) => {
  const Tag = component || (paragraph && 'p') || 'span';
  const classNames = {
    [className]: className,
    paragraph: paragraph,
  }
  const combinedClassName = combineClassNames(classNames);
  return (
    <Tag className={combinedClassName}>
      {children}
    </Tag>
  )
};

export default Text;

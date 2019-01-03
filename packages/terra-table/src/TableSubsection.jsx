import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import SubsectionHeader from './TableSubsectionHeader';

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Number of columns the subsection header must span
   */
  colSpan: PropTypes.number.isRequired,
  /**
   * Whether or not the subsection is collapsed.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Whether or not the subsection can be collapsed.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Optionally sets the heading level. One of `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([2, 3, 4, 5, 6]),
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback passthrough for the ref of the section li.
   */
  refCallback: PropTypes.func,
  /**
   * Title text to be placed within the subsection header.
   */
  title: PropTypes.string,
};

const defaultProps = {
  children: [],
  isCollapsed: false,
  isCollapsible: false,
  level: 2,
  title: '',
};

const TableSubsection = ({
  children,
  isCollapsed,
  isCollapsible,
  ...customProps
}) => {
  let sectionItems;
  if (!isCollapsible || !isCollapsed) {
    sectionItems = children;
  }

  return (
    <React.Fragment>
      <SubsectionHeader isCollapsible={isCollapsible} isCollapsed={isCollapsed} {...customProps} />
      {sectionItems}
    </React.Fragment>
  );
};

TableSubsection.propTypes = propTypes;
TableSubsection.defaultProps = defaultProps;

export default TableSubsection;

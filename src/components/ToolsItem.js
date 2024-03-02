import PropTypes from 'prop-types';

export function ToolsItem({ toolItems }) {
  return (
    <h6 className="tools-item" aria-label={`Tool: ${toolItems}`}>
      {toolItems}
    </h6>
  );
}

ToolsItem.propTypes = {
  toolItems: PropTypes.string.isRequired,
};
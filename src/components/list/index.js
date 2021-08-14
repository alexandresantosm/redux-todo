import PropTypes from "prop-types";

export default function List({ todoList }) {
  function renderItemsList(item) {
    const { id, name } = item;
    return <li key={id}>{name}</li>;
  }

  return <ul>{todoList.map((item) => renderItemsList(item))}</ul>;
}

List.propTypes = {
  todoList: PropTypes.array.isRequired,
};

import { useState } from "react";
import { connect } from "react-redux";

import { Button, Input, List } from "../../components";
import { addTodo } from "../redux/store/actions";

function App(props) {
  const [value, setValue] = useState("");
  const { todoList, addTodo } = props;

  function handleOnClick() {
    addTodo(value);
  }

  function handleOnChange(event) {
    event.preventDefault();
    const { value: inputValue } = event.target;

    setValue(inputValue);
  }

  return (
    <div>
      <List todoList={todoList} />
      <Input onChange={(event) => handleOnChange(event)} value={value} />
      <Button onClick={handleOnClick}>Adicionar</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todo.list,
});

export default connect(mapStateToProps, { addTodo })(App);

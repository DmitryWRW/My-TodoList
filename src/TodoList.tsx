import { title } from "process";
import React from "react";
import Header from "./Header/Header";
import List from "./Lists/List";
import Button from "./Buttons/Button";
//
type TodoListProps = {
  title: string;
  arrayData: Array<any>;
  checkboxHandler: (id: number) => void;
};
/*на строках выше резмещены все импорты, типизация всех данных, приходящих
 из пропсов, и обьявлена компонента (функция), принимающая пропсы.*/
function TodoList(props: TodoListProps) {
  return (
    <div>
      <Header title={props.title} />
      {props.arrayData.map((el: any) => {
        return (
          <List
            checkboxHandler={props.checkboxHandler}
            task={el.text}
            isChecked={el.isChecked}
            id={el.id}
          />
        );
      })}
      <Button button="All" />
      <Button button="Active" />
      <Button button="Completed" />
    </div>
  );
}

export default TodoList;

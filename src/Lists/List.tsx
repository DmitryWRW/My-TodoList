import { title } from "process";
import React from "react";
//
const List = (props: {
  task: string;
  isChecked: boolean;
  checkboxHandler: (id: number) => void;
  id: number;
}) => {
  return (
    <div>
      <li>
        <input
          //на строках выше резмещена типи всех данных которая принимает обьявленная компонента List и возращает вместе с кнопкой
          onClick={() => {
            //при нажатии на checkbox, срабатывает функция переданая через props, принимающая в себя параметром id, пришедший из пропсов
            props.checkboxHandler(props.id);
          }}
          checked={props.isChecked}
          type="checkbox"
        />
        <span>{props.task}</span>
      </li>
    </div>
  );
};

export default List;

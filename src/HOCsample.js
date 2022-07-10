import * as React from "react";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const fetchData = () => {
  return { data: TODOS };
};

const HOCSample = () => {
  const { data, isLoading } = fetchData();

  return <TodoList data={data} isLoading={isLoading} />;
};

const withConditionalFeedback = (Component) => (props) => {
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;

  return <Component {...props} />;
};

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
const TodoList = withConditionalFeedback(BaseTodoList);

const TodoItem = ({ item }) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export default HOCSample;

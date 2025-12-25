import useLocalStorage from "./hooks/useLocalStorage";

function Counter() {
  const [count, setCount] = useLocalStorage("myCounter", 0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;

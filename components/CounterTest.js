function CounterTest({ parentCallback }) {
  return (
    <button
      onClick={() => {
        parentCallback((count) => count + 1);
      }}
    >
      INCREMENT BITCH
    </button>
  );
}

export default CounterTest;

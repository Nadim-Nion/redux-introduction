import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  // const { count } = useSelector((state: RootState) => state.counter);

  // console.log("count:", count);

  /* const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
   */

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter With Redux</h1>

      <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

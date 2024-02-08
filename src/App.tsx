
import { decrement, increment, incrementByValue } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const {count} = useAppSelector((state)=> state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex w-full items-center justify-center">
      <div className="flex gap-6 border p-10 bg-gray-200 rounded-md">
        <button onClick={()=> dispatch(incrementByValue(5))} className="px-3 py-2 bg-green-500 text-xl font-semibold text-white">Increment by value</button>
        <button onClick={()=> dispatch(increment())} className="px-3 py-2 bg-green-500 text-xl font-semibold text-white">Increment</button>
        <h1 className="text-3xl">{count}</h1>
        <button onClick={()=> dispatch(decrement())} className="px-3 py-2 bg-red-500 text-xl font-semibold text-white">Decrement</button>
      </div>
    </div>
  )
}

export default App

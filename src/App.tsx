import { useEffect, useState } from "react";
import { Header } from "./Header";

export const App = () => {
  const [name, setName] = useState<string>("松下 拓斗")
  const age: number = 26
  const [hobbys, setHobbys] = useState<string[]>([])

  useEffect(() => {
    const currentHobby = ["筋トレ", "漫画を読むこと", "猫と戯れること","ちいかわ"]
    setHobbys(currentHobby)
  }, [])


  const onChange = (): void => {
    if (name === "マツシタ タクト") {
      return (
        setName("松下 拓斗"))
    }

    return (
      setName("マツシタ タクト")
    )
  }

  return (
    <div className="container mx-auto p-4 font-bold">
      <Header />
      <p>名前： {name}</p>
      <p>年齢： {age}</p>
      <p>趣味：{hobbys.join(", ")}</p>
      <button onClick={onChange} className="border-gray-200 shadow-md rounded-lg p-3 active:translate-y-1 active:shadow-inner hover:bg-blue-300 mt-3">CHANGE</button>
    </div>
  );
};
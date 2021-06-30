import { useState } from "react"
import { useEffect } from "react"

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsButtonInvisible(true);
      }, 3000)
    }, [])

  return (
    <div>
      <div>Hello World</div>
      { !isButtonInvisible && <button>Button</button> }
    </div>
  )
}
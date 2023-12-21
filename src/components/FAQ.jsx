import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

const FAQ = ({question, answer}) => {
    const [IsAnswerShowing, setIsAnswerShowing] = useState(false);


  return (
   <article className="faq" onClick={()=> setIsAnswerShowing(prev => !prev)}>
    <div>
        <h4>{question}</h4>
        <button className="faq__icon">
           { IsAnswerShowing? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>

    </div>
    {IsAnswerShowing && <p>{answer}</p>}
   </article>
  )
}

export default FAQ

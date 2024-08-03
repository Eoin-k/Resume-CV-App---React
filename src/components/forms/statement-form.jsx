import { useState } from "react"
import { createPortal } from "react-dom"
import Statement from "../display/statement"
export default function StatementForm () {
    const [statement, setStatement] = useState("")
    const [loading, setLoading] = useState(true)
    function statementChange(e) {
        setStatement(e.target.value)
    }

    setTimeout(() => {
        setLoading(false)
    }, 5)

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div>
               <label htmlFor="statement" style = {{display:"flex", flexDirection: "column", gap: "1rem", textAlign: "left"}}>
                <span>Statement Info</span>
                   <textarea
                   id="statement-form"
                   value={statement}
                   onChange = {(e) => statementChange(e)}
                    name="statement" />
               </label>
               {createPortal(
           <Statement statement={statement} />, 
            document.getElementById('resume-wrapper')
            )}
            </div>
        </>
    )
}
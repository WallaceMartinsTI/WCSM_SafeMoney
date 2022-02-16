import styles from "./AddCostButton.module.css"
import { useState } from "react"
import AddCost from "./AddCost"

function AddCostButton() {

  const [showForm, setShowForm] = useState(false)

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const openForm = () => {
    setShowForm(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        <button onClick={openForm}>Adicionar Conta</button>
      </div>
      {showForm &&
        <div className={styles.add_form}>
          <AddCost cancel={handleForm} />
        </div>
      }
    </div>
  )
}

export default AddCostButton
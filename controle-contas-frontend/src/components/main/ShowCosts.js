import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { baseURL } from "../../crud.services"
import { useNavigate } from "react-router-dom"
import styles from "./ShowCosts.module.css"
import { FaExchangeAlt } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"

function ShowCosts() {

  const [costs, setCosts] = useState([])
  const [deleted, setDeleted] = useState(false)
  const navigate = useNavigate()
  const countRef = useRef(0)

  useEffect(() => {
    retrieveAllCosts()
  }, [countRef])

  const retrieveAllCosts = () => {
    axios
      .get(`${baseURL}/main/`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCosts(response.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const deleteCost = (id) => {
    axios
      .delete(`${baseURL}/main/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDeleted(true)
        retrieveAllCosts()
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const handleUpdateClick = (id) => {
    navigate(`/main/${id}/update/`)
  }

  const convertValue = (value) => {
    if (typeof (value) === "string") {
      value = parseFloat(value)
    }
    return value.toLocaleString('pt-BR')
  }

  return (
    <div className={styles.cost_container}>
      {costs.map((cost, index) => (
        <div key={index} className={styles.cost}>
          <h4>{cost.name}</h4>
          <p>{cost.description}</p>

          <div className={styles.button_container}>
            <div className={styles.price}>
              <strong>R$ {convertValue(cost.price)}</strong>
            </div>
            <div className={styles.buttons}>
              <button onClick={() => handleUpdateClick(cost.id)}>{<FaExchangeAlt />}</button>
              <button onClick={() => deleteCost(cost.id)}>{<FaTrash />}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}

export default ShowCosts
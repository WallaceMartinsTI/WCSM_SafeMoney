import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { baseURL } from "../../crud.services"
import { useNavigate } from "react-router-dom"

import { FaExchangeAlt } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"

import styles from "./Costs.module.css"

import AddCost from "./AddCost"
import Container from "../layout/Container"

function Costs() {

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
        console.log(deleted)
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

  const [showForm, setShowForm] = useState(false)

  const handleForm = () => {
    setShowForm(!showForm)
  }

  const openForm = () => {
    setShowForm(true)
  }

  return (
    <Container>
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
    </Container>
  )
}

export default Costs
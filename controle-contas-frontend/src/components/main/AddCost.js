import axios from "axios"
import { useState } from "react"
import { baseURL } from "../../crud.services"
import Container from "../layout/Container"
import styles from "./AddCost.module.css"

function AddCost(props) {

  const initialCostState = {
    id: null,
    name: "",
    description: "",
    price: 0,
  };

  const [cost, setCost] = useState(initialCostState)
  const [submitted, setSubmitted] = useState(false)

  const handleCostChange = (e) => {
    const { name, value } = e.target
    setCost({ ...cost, [name]: value })
  }


  const submitCost = () => {

    let data = {
      name: cost.name,
      description: cost.description,
      price: cost.price
    }
    axios
      .post(`${baseURL}/main/`, data, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        setCost({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  const newCost = () => {
    setCost(initialCostState)
    setSubmitted(false)
  }

  return (
    <Container customClass="columnMod">
      <div className="submit-form">
        {submitted ? (
          <div className={styles.added_container}>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              Conta Adicionada
            </div>
            <div className={styles.buttons_message}>
              <button className="btn btn-success" onClick={newCost}>
                Adicionar Outra
              </button>
              <button className="btn btn-danger" onClick={props.cancel}>
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.form_container}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Max. 34 caracteres"
                autoComplete="off"
                required value={cost.name}
                onChange={handleCostChange}
                name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Valor</label>
              <input
                type="number"
                className="form-control"
                min="1"
                autoComplete="off"
                id="price"
                required
                value={cost.price}
                onChange={handleCostChange}
                name="price" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Max. 64 caracteres"
                autoComplete="off"
                required
                value={cost.description}
                onChange={handleCostChange}
                name="description" />
            </div>
            <div className={styles.buttons_container}>
              <button onClick={submitCost} className="btn btn-success">Adicionar</button>
              <button onClick={props.cancel} className="btn btn-danger" >Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default AddCost
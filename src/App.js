import React, { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

function App() {
  const [Value, setValue] = useState("")

  let ToDo = JSON.parse(localStorage.getItem("item"))
    ? JSON.parse(localStorage.getItem("item"))
    : []

  const getValue = () => {
    if (Value.length === 0) {
      return
    } else {
      ToDo.push(Value)
      setData()
      setTimeout(() => {
        window.location.reload()
      }, 10)
    }
  }

  const setData = () => {
    localStorage.setItem("item", JSON.stringify(ToDo));
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }

  const remove = (id) => {
    ToDo.splice(id, 1)
    setData()
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }

  const complate = (id) => {
    console.log(ToDo[id] = "");
    ToDo[id] = "Complate"
    setData()
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }

  const clearItem = () => {
    localStorage.clear()
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }

  return (
    <>
      <main>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="my-card">
                <div className="d-flex justify-content-between mb-1">
                  <h1>To do:</h1>
                  <button className="btn btn-primary clear" onClick={() => clearItem()}>Clear all</button>
                </div>
                <ListGroup>
                  {ToDo?.map((res, index) => {
                    return (
                      <ListGroup.Item>
                        {index + 1}. {res}
                        <div>
                          <button className="v" onClick={() => complate(index)}>✔</button>
                          <button className="x" onClick={() => remove(index)}>❌</button>
                        </div>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
                <hr />
                <input onChange={(e) => setValue(e.target.value.trim())} placeholder="What do you need to do ?" />
                <button onClick={(e) => getValue(e)} className="btn btn-primary save">Save</button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
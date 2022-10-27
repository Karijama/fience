import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../services/book.services";
import {Container} from "react-bootstrap";
import podlogo from '../static/podlogo.svg'

const AddBook = ({ id, setBookId }) => {
  const [title, setTitle] = useState("");
  const [gabarit, setGabarit] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, msg: "Вы не всё заполнили" });
      return;
    }
    const newBook = {
      title,
      author,
      type,
    };
    console.log(newBook);

    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await BookDataService.addBooks(newBook);
        setMessage({ error: false, msg: "Заказ добавлен" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setType(docSnap.data().type);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} className="col-6 mx-auto">
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="dark"
              onClick={(e) => {
                setType("Доки");
                setFlag(true);
              }}
            >
              Малый груз
            </Button>
            <Button
              variant="dark"
              disabled={!flag}
              onClick={(e) => {
                setType("Малая посылка");
                setFlag(false);
              }}
            >
              Большой груз
            </Button>
          </ButtonGroup>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Название заказа"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Цена"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <div className="d-grid gap-2">
            <Button variant="success" type="Submit">
              Добавить заказ
            </Button>
          </div>
        </Form>
      </div>
      <div style={{backgroundColor: '#272A28'}} className="mt-5 pt-5">
          <Container className='pt-10 pb-10'>
              <div><img src={podlogo} className="mx-auto mt-10"/></div>
              <div className='flex mt-8 justify-between'>
                  <div>
                      <div><p className='text-white font-head'>GetLet</p></div>
                      <div><a className='text-white no-underline'>Отзывы</a></div>
                  </div>
                  <div className='ml-32'>
                      <div><p className='text-white font-head'>Условия</p></div>
                      <div><a className='text-white no-underline'>Условия конфидециальности</a></div>
                      <div><a className='text-white no-underline'>Условия использования</a></div>
                  </div>
                  <div className='ml-32'>
                      <div><p className='text-white font-head'>Контакты</p></div>
                      <div><a className='text-white no-underline'>Помощь</a></div>
                      <div><a className='text-white no-underline'>Команда</a></div>
                      <div><a className='text-white no-underline'>Вакансии</a></div>
                  </div>
                  <div className='ml-32'>
                      <div><p className='text-white font-head'>Соц.сети</p></div>
                      <div><a href='https://t.me/getlet' className='text-white no-underline'>Телеграм</a></div>
                      <div><a className='text-white no-underline'>Вконтакте</a></div>
                  </div>
              </div>
          </Container>
      </div>
    </>
  );
};

export default AddBook;

import React, { useEffect, useState } from "react";
import { Table, Button, CardGroup, Card, CardImg, Container } from "react-bootstrap";
import BookDataService from "../services/book.services";
import podlogo from '../static/podlogo.svg'
import salo from "../static/salo.svg";

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>
      <div className="mb-2">
        
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <CardGroup>
        {books.map((doc,index) => {
          return (
            <Card className="ms-4 me-4 rounded-md">
              <CardImg src={salo} variant="top" />
              <Card.Body>
                <Card.Title>{doc.title}</Card.Title>
                <Card.Text>{doc.author},{doc.type}</Card.Text>
                <Card.Footer>YKT/MSK</Card.Footer>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>  
      <div style={{backgroundColor: '#272A28'}} className="mt-8">
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

export default BooksList;

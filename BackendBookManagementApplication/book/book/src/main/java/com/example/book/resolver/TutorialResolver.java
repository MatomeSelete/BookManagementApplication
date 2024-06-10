//package com.example.book.resolver;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import com.example.book.model.Book;
//import com.example.book.repository.BookRepository;
//import graphql.kickstart.tools.GraphQLResolver;
//
//@Component
//public class BookResolver implements GraphQLResolver<Book> {
//    @Autowired
//    private BookRepository bookRepository;
//
//    public BookResolver(BookRepository bookRepository) {
//        this.bookRepository = bookRepository;
//    }

//    public Book getBook(Book book) {
//        return bookRepository.findById(book.getBook().getId()).orElseThrow(null);
//    }
//}
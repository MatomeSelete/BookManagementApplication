package com.example.book.repository;

import com.example.book.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.book.BookApplication;

public interface BookRepository extends JpaRepository<Book, Long> {

}
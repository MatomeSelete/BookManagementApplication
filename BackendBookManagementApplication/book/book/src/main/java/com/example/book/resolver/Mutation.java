package com.example.book.resolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.book.model.Book;
import com.example.book.repository.BookRepository;
import graphql.kickstart.tools.GraphQLMutationResolver;
import jakarta.persistence.EntityNotFoundException;

import java.util.Optional;

@Component
public class Mutation implements GraphQLMutationResolver {
    private BookRepository bookRepository;

    @Autowired
    public Mutation(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book createBook(String title, String author, String description) {
        Book book = new Book();
        book.setTitle(title);
        book.setAuthor(author);
        book.setDescription(description);

        bookRepository.save(book);

        return book;
    }


    public boolean deleteBook(Long id) {
        bookRepository.deleteById(id);
        return true;
    }

    public Book updateBook(Long id, String title, String author, String description) throws EntityNotFoundException {
        Optional<Book> optBook = bookRepository.findById(id);

        if (((Optional<?>) optBook).isPresent()) {
            Book book = optBook.get();

            if (title != null)
                book.setTitle(title);
            if (author != null)
                book.setAuthor(author);
            if (description != null)
                book.setDescription(description);

            bookRepository.save(book);
            return book;
        }

        throw new EntityNotFoundException("Not found Tutorial to update!");
    }

}
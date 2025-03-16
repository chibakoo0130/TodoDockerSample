package com.example.todo.backend;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import java.util.List;

@Mapper
public interface TodoMapper {
    @Select("SELECT * FROM todos")
    List<Todo> getTodos();
}
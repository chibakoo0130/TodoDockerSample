CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO todos (title) VALUES ('Learn Docker');
INSERT INTO todos (title) VALUES ('Build a Todo App');
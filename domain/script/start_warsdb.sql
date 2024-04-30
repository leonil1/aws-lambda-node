use start_warsdb;
CREATE TABLE start_wars (
	id BIGINT UNSIGNED auto_increment NOT NULL,
	name varchar(20) NOT NULL,
    height int NOT null,
    mass int NOT NULL,
    hair_color varchar(20) NOT NULL,
    skin_color varchar(20) NOT NULL,
    eye_color varchar(20) NOT NULL,
    birth_year varchar(20) NOT NULL,
    gender  varchar(20) NOT NULL,
    created dateTime NULL,
    edited dateTime  NULL,
	url varchar(220) NOT NULL,
    CONSTRAINT start_wars_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_spanish2_ci;
DROP TABLE IF EXISTS cards;

CREATE TABLE cards ( 
  id serial NOT NULL, 
  front_word varchar(256),
  back_word varchar(256),
  color varchar(256),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
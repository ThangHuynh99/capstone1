CREATE TABLE IF NOT EXISTS Users(
    email NCHAR(16) PRIMARY KEY NOT NULL,
    users_name VARCHAR(50),
    users_password VARCHAR,
    users_country NCHAR(10),
    users_birthday date,
    users_auth varchar
);
CREATE TABLE IF NOT EXISTS Poll(
    poll_id NCHAR(16) PRIMARY KEY NOT NULL,
    poll_title VARCHAR(50),
    poll_date VARCHAR,
    poll_location NCHAR(10),
    poll_finish date,
	poll_note varchar,
    poll_role varchar
);
CREATE TABLE IF NOT EXISTS Schedule(
    schedule_id NCHAR(16) PRIMARY KEY NOT NULL,
	schedule_date date,
	schedule_startTime time,
	schedule_endTime time
);
CREATE TABLE IF NOT EXISTS Comments(
	Comments_id nchar  PRIMARY KEY NOT NULL,
	Comments_content nchar
);
Insert Into Users (Users_Id,Users_Password) values ('toan','123');
Insert Into Users (Users_Id,Users_Password) values ('thang','123');
Insert Into Users (Users_Id,Users_Password) values ('dong','123');
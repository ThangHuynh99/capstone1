CREATE TABLE IF NOT EXISTS Users(
    users_email NCHAR(16) PRIMARY KEY NOT NULL,
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
CREATE TABLE IF NOT EXISTS Rooms(
    poll_id NCHAR(16) PRIMARY KEY NOT NULL,
    users_email VARCHAR(50) PRIMARY KEY NOT NULL,
    FOREIGN KEY (poll_id) REFERENCES Poll(poll_id),
    FOREIGN KEY (users_email) REFERENCES Users(users_email)

);

CREATE TABLE IF NOT EXISTS Schedule(
    schedule_id NCHAR(16) PRIMARY KEY NOT NULL,
	schedule_date date,
	schedule_startTime time,
	schedule_endTime time,
    poll_id NVarChar(16),
    FOREIGN KEY (poll_id) REFERENCES Poll(poll_id)
);
CREATE TABLE IF NOT EXISTS Vote(
    vote_id NCHAR(16) PRIMARY KEY NOT NULL,
	schedule_id NVarChar(16),
	poll_id NVarChar(16),
	users_email NVarChar(16),
    FOREIGN KEY (schedule_id) REFERENCES Schedule(schedule_id),
    FOREIGN KEY (poll_id) REFERENCES Poll(poll_id),
    FOREIGN KEY (users_email) REFERENCES Users(users_email)
);
CREATE TABLE IF NOT EXISTS Comments(
	Comments_id nchar  PRIMARY KEY NOT NULL,
	Comments_content nchar
);
Insert Into Users (Users_Id,Users_Password) values ('toan','123');
Insert Into Users (Users_Id,Users_Password) values ('thang','123');
Insert Into Users (Users_Id,Users_Password) values ('dong','123');
CREATE TABLE IF NOT EXISTS Users(
    Users_Id NCHAR(16) PRIMARY KEY NOT NULL,
    Users_Password NCHAR(10)
);
Insert Into Users (Users_Id,Users_Password) values ('toan','123');
Insert Into Users (Users_Id,Users_Password) values ('thang','123');
Insert Into Users (Users_Id,Users_Password) values ('dong','123');
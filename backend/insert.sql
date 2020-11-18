CREATE TABLE IF NOT EXISTS Users(
    users_id SERIAL  PRIMARY KEY NOT NULL,
    users_email VARCHAR ,
    users_name VARCHAR,
    users_password VARCHAR,
    users_country VARCHAR,
    users_birthday date,
    users_language varchar
);

CREATE TABLE IF NOT EXISTS Groups(
    group_id SERIAL PRIMARY KEY NOT NULL,
    group_auth Varchar
);

CREATE TABLE IF NOT EXISTS Group_User(
    GU_id SERIAL  PRIMARY KEY NOT NULL,
    group_id BIGINT,
    users_id BIGINT,
    FOREIGN KEY (users_id) REFERENCES Users(users_id),
    FOREIGN KEY (group_id) REFERENCES Groups(group_id)
);

Insert into Group_User (group_id,users_id) values(1,1);
Insert into Group_User (group_id,users_id) values(1,1);
Insert into Group_User (group_id,users_id) values(1,3);
Insert into Group_User (group_id,users_id) values(2,4);

CREATE TABLE IF NOT EXISTS Poll(
    poll_id VARCHAR(16) PRIMARY KEY NOT NULL,
    poll_title NCHAR,
    poll_date date,
    poll_location NCHAR,
    poll_predictDate date,
    poll_beginVoteDate date,
    poll_endVoteDate date,
    poll_status int,
	poll_note varchar,
);

Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('QF5O7THf2al5WbnJ','Cuộc họp tuần 11','4/11/2011','Thư viện ','15/11/2011','4/11/2011','8/11/2011',1,'Đáng chú ý');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('SdODnNEcYCSj2KwC','Cuộc party 15','5/12/2013','Sảnh ','12/12/2013','11/12/2013','12/12/2013',1,'Bữa tiệc rất bự');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnW7f','Đi du lịch Đà Lạt','5/7/2018','Đà Lạt ','12/7/2018','11/7/2018','14/7/2018',1,'Rất vui vẻ và này nọ');
CREATE TABLE IF NOT EXISTS Poll_User(
    PU_id SERIAL PRIMARY KEY NOT NULL ,
    poll_id VARCHAR(16)  ,
    users_id BIGINT,
    PU_Role Varchar,
    Comments NCHAR,
    FOREIGN KEY (poll_id) REFERENCES Poll(poll_id),
    FOREIGN KEY (users_id) REFERENCES Users(users_id)
)
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',1,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',4,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',2,'user');
-- CREATE TABLE IF NOT EXISTS Rooms(
--     poll_id NCHAR(16) PRIMARY KEY NOT NULL,
--     users_email VARCHAR(50) PRIMARY KEY NOT NULL,
--     FOREIGN KEY (poll_id) REFERENCES Poll(poll_id),
--     FOREIGN KEY (users_email) REFERENCES Users(users_email)

-- );

CREATE TABLE IF NOT EXISTS Schedule(
    schedule_id SERIAL  PRIMARY KEY NOT NULL,
	schedule_date date,
	schedule_startTime time,
	schedule_endTime time,
    poll_id VARCHAR(16),
    FOREIGN KEY (poll_id) REFERENCES Poll(poll_id)
);

CREATE TABLE IF NOT EXISTS Vote(
    vote_id SERIAL  PRIMARY KEY NOT NULL,
	schedule_id BIGINT,
	users_id BIGINT,
    vote_status int,
    FOREIGN KEY (schedule_id) REFERENCES Schedule(schedule_id),
    FOREIGN KEY (users_id) REFERENCES Users(users_id)
);
----------------------------------------------------------------------------------------------------------------
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('toan','vinh toan','123','VietNam','07/10/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('thang','Thang Huynh','123','VietNam','02/8/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('dong','dong ky','123','VietNam','05/9/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('phat','Phat Pham','123','VietNam','03/9/1999','Viet Nam');
----------------------------------------------------------------------------------------------------------------
Insert into Groups (group_auth) values ('1');
Insert into Groups (group_auth) values ('2');
----------------------------------------------------------------------------------------------------------------
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('QF5O7THf2al5WbnJ','Cuộc họp tuần 11','4/11/2011','Thư viện ','15/11/2011','4/11/2011','8/11/2011',1,'Đáng chú ý');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('SdODnNEcYCSj2KwC','Cuộc party 15','5/12/2013','Sảnh ','12/12/2013','11/12/2013','12/12/2013',1,'Bữa tiệc rất bự');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnW7f','Đi du lịch Đà Lạt','5/7/2018','Đà Lạt ','12/7/2018','11/7/2018','14/7/2018',1,'Rất vui vẻ và này nọ');
----------------------------------------------------------------------------------------------------------------
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',1,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',2,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',3,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',1,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',4,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',2,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',3,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',4,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',2,'user');
----------------------------------------------------------------------------------------------------------------
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('15/11/2011','7:00','9:00','QF5O7THf2al5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('16/11/2011','9:00','11:00','QF5O7THf2al5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('17/11/2011','13:00','15:00','QF5O7THf2al5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('11/11/2011','7:00','9:00','ZTjDhggXqJTMnW7f');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('13/11/2011','15:00','17:00','ZTjDhggXqJTMnW7f');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('14/11/2011','13:00','15:00','ZTjDhggXqJTMnW7f');
----------------------------------------------------------------------------------------------------------------
Insert into Vote (schedule_id,users_id,vote_status) values('1','1',0);
Insert into Vote (schedule_id,users_id,vote_status) values('1','2',0);
Insert into Vote (schedule_id,users_id,vote_status) values('1','3',0);
Insert into Vote (schedule_id,users_id,vote_status) values('2','1',0);
Insert into Vote (schedule_id,users_id,vote_status) values('2','2',0);
Insert into Vote (schedule_id,users_id,vote_status) values('2','3',0);
Insert into Vote (schedule_id,users_id,vote_status) values('3','1',0);
Insert into Vote (schedule_id,users_id,vote_status) values('3','2',0);
Insert into Vote (schedule_id,users_id,vote_status) values('3','3',0);
---------------------------------------------------------------------------------------------------------------------------
Insert into Vote (schedule_id,users_id,vote_status) values('4','3',0);
Insert into Vote (schedule_id,users_id,vote_status) values('4','4',0);
Insert into Vote (schedule_id,users_id,vote_status) values('4','2',0);
Insert into Vote (schedule_id,users_id,vote_status) values('5','3',0);
Insert into Vote (schedule_id,users_id,vote_status) values('5','4',0);
Insert into Vote (schedule_id,users_id,vote_status) values('5','2',0);
Insert into Vote (schedule_id,users_id,vote_status) values('6','3',0);
Insert into Vote (schedule_id,users_id,vote_status) values('6','4',0);
Insert into Vote (schedule_id,users_id,vote_status) values('6','2',0);


----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

-----------------------------------insert table user(update)
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('nguyenquang@gmail.com','Nguyen Phu Quang','123','VietNam','10/05/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('sangtruong@gmail.com','Truong Sang','123','VietNam','07/02/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('cuteo@gmail.com','Le My Teo','123','VietNam','01/12/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('rickie@gmail.com','Hoang Tran','123','VietNam','15/12/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vantruong@gmail.com','Van Truong','123','VietNam','21/10/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('phuochao@gmail.com','Phuoc Hao','123','VietNam','22/05/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('dinhloi@gmail.com','Dinh Loi','123','VietNam','12/11/1999','Viet Nam');

-----------------------------------insert table group_user(update) tùy theo số lượng user mà tự tăng userID vào.
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(2,);
Insert into Group_User (group_id,users_id) values(1,);
Insert into Group_User (group_id,users_id) values(1,);
Insert into Group_User (group_id,users_id) values(2,);

------------------------------------insert table poll(update) cái poll_date dùng getdate nghe.
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('QF5O7kk1ual5WbnJ','Tiệc giáng sinh','18/12/2011','Nhà hàng for you','24/12/2020','18/12/2020','23/12/2020',1,'Đáng chú ý');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('PP01THf2al5KSnJ','Company trip','20/11/2020','Thư viện ','28/11/2020','20/11/2020','24/11/2020',1,'Đáng chú ý');

------------------------------------insert table Poll_User(update).
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7kk1ual5WbnJ',5,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7kk1ual5WbnJ',6,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7kk1ual5WbnJ',7,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('PP01THf2al5KSnJ',8,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('PP01THf2al5KSnJ',9,'invitee')
Insert into Poll_User(poll_id,users_id,PU_Role) values ('PP01THf2al5KSnJ',10,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('PP01THf2al5KSnJ',11,'invitee');

------------------------------------insert table Schedule
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('24/12/2020','17:00','20:00','QF5O7kk1ual5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('24/12/2020','18:00','21:00','QF5O7kk1ual5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('25/12/2020','17:00','20:00','QF5O7kk1ual5WbnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('26/11/2020','17:00','20:00','PP01THf2al5KSnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('27/11/2020','17:00','20:00','PP01THf2al5KSnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('28/11/2020','17:00','20:00','PP01THf2al5KSnJ');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/11/2020','17:00','20:00','PP01THf2al5KSnJ');

-------------------------------------insert table Vote 7-13
Insert into Vote (schedule_id,users_id,vote_status) values('7','6',0);
Insert into Vote (schedule_id,users_id,vote_status) values('8','6',1);
Insert into Vote (schedule_id,users_id,vote_status) values('9','6',1);
Insert into Vote (schedule_id,users_id,vote_status) values('7','7',1);
Insert into Vote (schedule_id,users_id,vote_status) values('8','7',1);
Insert into Vote (schedule_id,users_id,vote_status) values('9','7',0);

Insert into Vote (schedule_id,users_id,vote_status) values('10','9',1);
Insert into Vote (schedule_id,users_id,vote_status) values('11','9',1);
Insert into Vote (schedule_id,users_id,vote_status) values('12','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('13','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('10','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('11','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('12','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('13','10',0);
Insert into Vote (schedule_id,users_id,vote_status) values('10','11',1);
Insert into Vote (schedule_id,users_id,vote_status) values('11','11',0);
Insert into Vote (schedule_id,users_id,vote_status) values('12','11',0);
Insert into Vote (schedule_id,users_id,vote_status) values('13','11',1);
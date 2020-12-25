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

Insert into Group_User (group_id,users_id) values(1,7);
Insert into Group_User (group_id,users_id) values(1,8);
Insert into Group_User (group_id,users_id) values(1,9);
Insert into Group_User (group_id,users_id) values(1,10);

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
    poll_option varchar
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
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vinhtoan20@gmail.com','vinh toan','202cb962ac59075b964b07152d234b70','VietNam','07/10/1999','Viet Nam');





----------------------------------------------------------------------------------------------------------------
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vinhtoan20@gmail.com','vinh toan','202cb962ac59075b964b07152d234b70','VietNam','07/10/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('thanghuynh20@gmail.com','Thang Huynh','202cb962ac59075b964b07152d234b70','VietNam','02/8/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('kyhuudong@gmail.com','dong ky','202cb962ac59075b964b07152d234b70','VietNam','05/9/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('phatpham@gmail.com','Phat Pham','202cb962ac59075b964b07152d234b70','VietNam','03/9/1999','Viet Nam');
----------------------------------------------------------------------------------------------------------------
Insert into Groups (group_auth) values ('1');
Insert into Groups (group_auth) values ('2');
----------------------------------------------------------------------------------------------------------------
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note,poll_option) 
values('QF5O7THf2al5WbnJ','Cuộc họp tuần 11','4/11/2011','Thư viện ','15/11/2011','4/11/2011','8/11/2011',1,'Đáng chú ý','public');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note,poll_option) 
values('SdODnNEcYCSj2KwC','Cuộc party 15','5/12/2013','Sảnh ','12/12/2013','11/12/2013','12/12/2013',1,'Bữa tiệc rất bự','private');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note,poll_option) 
values('ZTjDhggXqJTMnW7f','Đi du lịch Đà Lạt','5/7/2018','Đà Lạt ','12/7/2018','11/7/2018','14/7/2018',1,'Rất vui vẻ và này nọ','public');
----------------------------------------------------------------------------------------------------------------
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',7,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',8,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('QF5O7THf2al5WbnJ',9,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',7,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',10,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('SdODnNEcYCSj2KwC',8,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',9,'host');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',10,'user');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnW7f',8,'user');
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
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('11/11/2011','7:00','9:00','SdODnNEcYCSj2KwC');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('13/11/2011','15:00','17:00','SdODnNEcYCSj2KwC');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('14/11/2011','13:00','15:00','SdODnNEcYCSj2KwC');
----------------------------------------------------------------------------------------------------------------
Insert into Vote (schedule_id,users_id,vote_status) values('524','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('525','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('526','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('516','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('516','8',0);
Insert into Vote (schedule_id,users_id,vote_status) values('516','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('517','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('517','8',0);
Insert into Vote (schedule_id,users_id,vote_status) values('517','9',0);
---------------------------------------------------------------------------------------------------------------------------
Insert into Vote (schedule_id,users_id,vote_status) values('518','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('518','10',0);
Insert into Vote (schedule_id,users_id,vote_status) values('518','8',0);
Insert into Vote (schedule_id,users_id,vote_status) values('519','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('519','10',0);
Insert into Vote (schedule_id,users_id,vote_status) values('519','8',0);
Insert into Vote (schedule_id,users_id,vote_status) values('520','7',0);
Insert into Vote (schedule_id,users_id,vote_status) values('520','10',0);
Insert into Vote (schedule_id,users_id,vote_status) values('520','8',0);
---------------------------------------------------------------------------------------------------------------------------
Insert into Vote (schedule_id,users_id,vote_status) values('521','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('521','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('521','8',0);
Insert into Vote (schedule_id,users_id,vote_status) values('522','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('522','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('522','8',1);
Insert into Vote (schedule_id,users_id,vote_status) values('523','9',0);
Insert into Vote (schedule_id,users_id,vote_status) values('523','10',1);
Insert into Vote (schedule_id,users_id,vote_status) values('523','8',0);



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
Insert into Group_User (group_id,users_id) values(2,10);
Insert into Group_User (group_id,users_id) values(2,9);
Insert into Group_User (group_id,users_id) values(2,8);
Insert into Group_User (group_id,users_id) values(2,7);
Insert into Group_User (group_id,users_id) values(2,6);
Insert into Group_User (group_id,users_id) values(2,5);
Insert into Group_User (group_id,users_id) values(2,4);
Insert into Group_User (group_id,users_id) values(1,1);
Insert into Group_User (group_id,users_id) values(1,2);
Insert into Group_User (group_id,users_id) values(2,3);


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


-----------------------------------------NEW DATA DATABASE--------------------------- 

--- user table
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('haole@gmail.com','Hao Le','123','VietNam','12/11/1989','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('tuyetnhi@gmail.com','Tuyet Nhi','123','VietNam','01/05/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('hanhi@gmail.com','Ha Nhi','123','VietNam','10/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('quang@gmail.com','Nguyen Quang','123','VietNam','02/01/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vannhi@gmail.com','Van Nhi','123','VietNam','08/10/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('trungkien@gmail.com','Trung Kien','123','VietNam','12/07/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('minhhoang@gmail.com','Minh Hoang','123','VietNam','24/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('@gmail.com','Dinh Loi','123','VietNam','12/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('congtri@gmail.com','Cong Tri','123','VietNam','05/12/1990','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vanminh@gmail.com','Van Minh','123','VietNam','09/09/1986','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('kimngan@gmail.com','Kim Ngan','123','VietNam','16/08/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('nhauyen@gmail.com','Nha Uyen','123','VietNam','19/10/1988','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('kimthinh@gmail.com','Kim Thinh','123','VietNam','10/09/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('giahuy@gmail.com','Dinh Loi','123','VietNam','12/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('hongduyen@gmail.com','Hong Duyen','123','VietNam','07/03/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('thanhhai@gmail.com','Thanh Hai','123','VietNam','02/12/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('quynhnhu@gmail.com','Quynh Nhu','123','VietNam','22/04/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('phuonganhh@gmail.com','Phuong Anh','123','VietNam','22/04/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('duytu@gmail.com','Duy Tu','123','VietNam','22/01/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('hoanglong@gmail.com','Hoang Long','123','VietNam','30/10/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('uyenmy@gmail.com','Uyen My','123','VietNam','12/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vannghia@gmail.com','Van Nghia','123','VietNam','12/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('hoangduy@gmail.com','Hoang Duy','123','VietNam','12/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('dinhphuc@gmail.com','Dinh Phuc','123','VietNam','12/12/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('giavu@gmail.com','Gia Vu','123','VietNam','11/11/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('phutai@gmail.com','Phu Tai','123','VietNam','12/07/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('duyphucc@gmail.com','Duy Phuc','123','VietNam','22/09/1999','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('vankhoa@gmail.com','Van Khoa','123','VietNam','12/11/1996','Viet Nam');
Insert Into Users(users_email,users_name,users_password,users_country,users_birthday,users_language) 
values ('duymanh@gmail.com','Duy Manh','123','VietNam','07/11/1995','Viet Nam');


-------------- poll table
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh11','Team building','01/12/2020','Nha Trang','10/12/2020','05/12/2020','07/12/2020',0,'Rất vui vẻ');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh12','Khai trương chi nhánh mới','01/12/2020','','11/12/2020','06/12/2020','08/12/2020',0,'khai trương chi nhánh thứ 10');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh13','Liên hoan cuối năm','01/12/2020',' ','30/12/2020','25/12/2020','28/12/2020',0,'Rất vui vẻ và này nọ');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh14','Sinh nhật Đức Bo','01/12/2020',' ','29/12/2020','23/12/2020','25/12/2020',0,'Rất vui vẻ và này nọ');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh15','Liên hoan đầu năm','01/12/2020',' ','02/01/2021','25/12/2020','27/12/2020',0,'Rất vui vẻ và này nọ');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh16','Party giáng sinh','01/12/2020',' ','25/12/2020','20/12/2020','22/12/2020',0,'Rất vui vẻ và này nọ');
Insert into Poll (poll_id,poll_title,poll_date,poll_location,poll_predictDate,poll_beginVoteDate,poll_endVoteDate,poll_status,poll_note) 
values('ZTjDhggXqJTMnh17','Phát thưởng cuối năm','01/12/2020',' ','30/12/2020','23/12/2020','25/12/2020',0,'Rất vui vẻ và này nọ');

-------------- poll-user table (id_user dựa theo 7 đứa đầu tiên sẽ làm host, m ngó vô database coi thêm bn user r.)
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh11',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh12',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh13',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh14',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh15',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh16',11,'invitee');
Insert into Poll_User(poll_id,users_id,PU_Role) values ('ZTjDhggXqJTMnh17',11,'invitee');

------------- Schedule table
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('08/12/2020','5:00','8:00','ZTjDhggXqJTMnh11');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('08/12/2020','15:00','18:00','ZTjDhggXqJTMnh11');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('09/12/2020','5:00','8:00','ZTjDhggXqJTMnh11');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('09/12/2020','15:00','18:00','ZTjDhggXqJTMnh11');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('10/12/2020','5:00','8:00','ZTjDhggXqJTMnh11');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('10/12/2020','15:00','18:00','ZTjDhggXqJTMnh11');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('09/12/2020','7:00','9:00','ZTjDhggXqJTMnh12');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('10/12/2020','7:00','9:00','ZTjDhggXqJTMnh12');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('11/12/2020','15:00','17:00','ZTjDhggXqJTMnh12');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('12/12/2020','15:00','17:00','ZTjDhggXqJTMnh12');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','17:00','20:00','ZTjDhggXqJTMnh13');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','19:00','22:00','ZTjDhggXqJTMnh13');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('30/12/2020','17:00','20:00','ZTjDhggXqJTMnh13');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('30/12/2020','19:00','22:00','ZTjDhggXqJTMnh13');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('27/12/2020','17:00','20:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('27/12/2020','19:00','22:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('28/12/2020','13:00','17:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('28/12/2020','18:00','21:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('28/12/2020','19:00','22:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','17:00','21:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','19:00','23:00','ZTjDhggXqJTMnh14');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('30/12/2020','19:00','23:00','ZTjDhggXqJTMnh14');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','17:00','20:00','ZTjDhggXqJTMnh15');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','19:00','23:00','ZTjDhggXqJTMnh15');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('30/12/2020','18:00','21:00','ZTjDhggXqJTMnh15');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('02/01/2021','18:00','21:00','ZTjDhggXqJTMnh15');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('24/12/2020','17:00','21:00','ZTjDhggXqJTMnh16');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('25/12/2020','18:00','22:00','ZTjDhggXqJTMnh16');

Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('28/12/2020','17:00','19:00','ZTjDhggXqJTMnh17');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('29/12/2020','17:00','19:00','ZTjDhggXqJTMnh17');
Insert into Schedule (schedule_date,schedule_endTime,schedule_startTime,poll_id) 
values ('30/12/2020','16:00','18:00','ZTjDhggXqJTMnh17');
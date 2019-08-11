# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

　　groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

   Association
  has_many   :messages
  has_many   :users, through: : users_groups
  has_many   :users_groups
  

    usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false,add_index: true|
|email|string|null: false, unique: true|

   Association
  has_many   :messages
  has_many   :groups, through: :users_groups
  has_many   :groups_users

    messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|
|image|string|

   Association
  belongs :group
  belongs :user

     users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|groups_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
   Association
  belongs_to :user
  belongs_to :group
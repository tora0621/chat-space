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
|name|string|null: false|

   Association
  belongs_to :message
  has_many   :users, through: : users_groups
  

    usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|email|string|null: false|

   Association
  belongs_to :message
  has_many   :groups, through: :users_groups

    messagesテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string|null: false|

   Association
  has_many :groups
  has_many :users

     users_groupsテーブル
|Column|Type|Option|
|------|----|------|
|groups_id|integer|null: false, foreign_key: true|

   Association
  belongs_to :user
  belongs_to :group
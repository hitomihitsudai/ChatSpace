Structure of DataBase

## usersテーブル

|Column|Type|Options|
|---------|----|-------|
|name|varchar|null: false|
|email|varchar|null: false, unique: true|
|encrypted_password|string|null: false|

### association
- has_many :members
- has_many :messages
- has_many :groups, through: :members


## groupsテーブル

|Column|Type|Options|
|---------|----|-------|
|name|text|null: false, add_index :groups, :name|

### association
- has_many :members
- has_many :messages
- has_many :users, through: :members


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index: true|
|group_id|integer|null: false, foreign_key: true, index: true|

### association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|---------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp|null: false|

### association
- belongs_to :group
- belongs_to :user
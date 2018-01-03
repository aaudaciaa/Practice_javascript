class User < ActiveRecord::Base
  has_secure_password #암호화된 비밀번호를 가지고 있다는 것을 표시 / password를 통해 password_digest에 암호화된 비밀번호를 가지고 있습니다.
  has_many :boards
  has_many :comments
  has_many :likes
end

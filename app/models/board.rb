class Board < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :likes

  paginates_per 50

  def require_permission?(user)
    self.user.id == user.id # 이글을 작성한 user의 id(self.user.id)가 파라미터로 넘어온 user의 id와 같습니까? 같으면 true, 다르면 false.
  end
end

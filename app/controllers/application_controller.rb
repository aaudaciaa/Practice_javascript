class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :user_signed_in?

  # 로그인 한 사람만 어플리케이션에 접근이 가능하도록 하기 위한 부분
  def current_user
    # 현재 접속한 유저
    @current_user ||= User.find(session[:user_id])
  end

  def user_signed_in?
    # 유저가 로그인 했는지 여부(boolean) / ?가 있는 친구는 boolean타입으로 리턴하는 것이 약속
    # session[:user_id] 비어있으면 >> 로그인 안한거 >> false 리턴
    # session[:user_id] 채워져있으면 >> 로그인 한거 >> true 리턴
    !session[:user_id].nil? # .nil?이 붙으면 boolean 타입으로 리턴이 된다. / 확실하게 true와 false로 나오게 하고 싶을 때 사용 / sesstion[:user_id]라고 써도 기능은 비슷하지만 session[:user_id]는 값이 있을 경우 그 값을 리턴해준다.
  end

  def authenticate_user!
    # ! = bang => 내용물을 변화시킬 수 있는 메소드에 붙여줌
    # element.upcase! => element 자체가 변화함
    # element.upcase => return 값이 변화함

    # 유저가 로그인 했다면 진행
    # 유저가 로그인 하지 않았다면 로그인 페이지로
    if session[:user_id].nil?
      redirect_to '/signin', notice: "로그인이 필요합니다."
    end
  end
end

class Api::ArticlesController < ApplicationController
  def show
    @article = Article.readable_for(current_member).find(params[:id])
  end
end

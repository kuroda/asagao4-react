class ArticleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    let csrfToken = $('meta[name=csrf-token]').attr('content')
    return (
      <form action='/admin/articles/10' method='post'
        accept-charset='UTF-8'>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={csrfToken} />
        <table className='attr'>
          <tbody>
            <tr>
              <th><label htmlFor='article_title'>タイトル</label></th>
              <td><input size='20' type='text' name='article[title]'
                id='article_title' defaultValue={this.props.title} /></td>
            </tr>
            <tr>
              <th><label htmlFor='article_body'>本文</label></th>
              <td><textarea rows='10' cols='45' name='article[body]'
                id='article_body' defaultValue={this.props.body} /></td>
            </tr>
            <tr>
              <th><label htmlFor='article_released_at_1i'>掲載開始日時</label></th>
              <td>
                <DatetimeSelect objectName='article' attrName='released_at'
                  startYear='2000' defaultValue={this.props.released_at} />
              </td>
            </tr>
            <tr>
              <th><label htmlFor='article_expired_at_1i'>掲載終了日時</label></th>
              <td>
                <input type='hidden' name='article[no_expiration]' value='0' />
                <input type='checkbox' name='article[no_expiration]' value='1'
                  id='article_member_only' checked={this.props.no_expiration} />
                <label htmlFor='article_no_expiration'>掲載終了日を設定しない</label>
                <DatetimeSelect objectName='article' attrName='expired_at'
                  startYear='2000' defaultValue={this.props.expired_at} />
              </td>
            </tr>
            <tr>
              <th><label>会員限定</label></th>
              <td>
                <input type='hidden' name='article[member_only]' value='0' />
                <input type='checkbox' name='article[member_only]' value='1'
                  id='article_member_only' checked={this.props.member_only} />
                <label htmlFor='article_member_only'>会員限定</label>
              </td>
            </tr>
          </tbody>
        </table>
        <p><input type='submit' name='commit' value='更新する' /></p>
      </form>
    )
  }
}

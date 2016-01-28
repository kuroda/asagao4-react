class ArticleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  changeExpiredAt(e) {
    this.setState({ no_expiration: e.target.checked })
  }

  render() {
    let paramName = 'article'
    let object = this.props.object
    let path = object.id ?
      `/admin/articles/${object.id}` : '/admin/articles'
    let httpMethod = object.id ? 'patch' : 'post'
    let submitButtonLabel = object.id ? '更新する' : '登録する'
    return (
      <form action={path} method='post'
        acceptCharset='UTF-8'>
        <input type='hidden' name='_method' value={httpMethod} />
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token'
          value={this.props.csrfToken} />
        <table className='attr'>
          <tbody>
            <TextFieldRow
              object={this.props.object}
              attrName='title'
              labelText='タイトル'
              size='20'
            />
            <tr>
              <th><label htmlFor='article_body'>本文</label></th>
              <td><textarea rows='10' cols='45' name='article[body]'
                id='article_body' defaultValue={object.body} /></td>
            </tr>
            <tr>
              <th><label htmlFor='article_released_at_1i'>掲載開始日時</label></th>
              <td>
                <DatetimeSelect objectName='article' attrName='released_at'
                  startYear='2000' defaultValue={object.released_at} />
              </td>
            </tr>
            <tr>
              <th><label htmlFor='article_expired_at_1i'>掲載終了日時</label></th>
              <td>
                <input type='hidden' name='article[no_expiration]' value='0' />
                <input type='checkbox' name='article[no_expiration]' value='1'
                  id='article_member_only' checked={this.state.no_expiration}
                  onChange={this.changeExpiredAt.bind(this)} />
                <label htmlFor='article_no_expiration'>掲載終了日を設定しない</label>
                {
                  this.state.no_expiration ? null :
                    <DatetimeSelect objectName='article' attrName='expired_at'
                      startYear='2000' defaultValue={object.expired_at} />
                }
              </td>
            </tr>
            <tr>
              <th><label>会員限定</label></th>
              <td>
                <input type='hidden' name='article[member_only]' value='0' />
                <input type='checkbox' name='article[member_only]' value='1'
                  id='article_member_only' defaultChecked={object.member_only} />
                <label htmlFor='article_member_only'>会員限定</label>
              </td>
            </tr>
          </tbody>
        </table>
        <p><input type='submit' name='commit' value={submitButtonLabel} /></p>
      </form>
    )
  }
}

class ArticleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <form>
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
                <DateSelect objectName='article' attrName='released_at'
                  startYear='2000' defaultValue={this.props.released_at} />
              </td>
            </tr>
            <tr>
              <th><label htmlFor='article_expired_at_1i'>掲載終了日時</label></th>
              <td>
                <DateSelect objectName='article' attrName='expired_at'
                  startYear='2000' defaultValue={this.props.expired_at} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

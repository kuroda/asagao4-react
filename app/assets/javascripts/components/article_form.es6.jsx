class ArticleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props
  }

  render() {
    return (
      <form>
        <table className='attr'>
          <tr>
            <th><label htmlFor='article_title'>タイトル</label></th>
            <td><input size='20' type='text' name='article[title]'
              value={this.state.title} /></td>
          </tr>
        </table>
      </form>
    )
  }
}

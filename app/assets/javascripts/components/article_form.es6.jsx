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
                defaultValue={this.props.title} /></td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

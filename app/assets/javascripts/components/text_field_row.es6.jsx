class TextFieldRow extends React.Component {
  labelFor() {
    return <label htmlFor={this.props.htmlFor}>{this.props.text}</label>
  }

  textField() {
    return <input size={this.props.size} type='text'
      name={`${this.props.paramName}[${this.props.attrName}]`}
      id={`${this.props.paramName}_${this.props.attrName}`}
      defaultValue={this.props.object.title} />
  }

  render() {
    if (_.isEmpty(this.props.errors))
      return <tr>
        <th>{ this.labelFor() }</th>
        <td>{ this.textField() }</td>
      </tr>
    else
      return <tr>
        <th>
          <div className='field_with_errors'>
            { this.labelFor() }
          </div>
        </th>
        <td>
          <div className='field_with_errors'>
            { this.textField() }
          </div>
        </td>
      </tr>
  }
}

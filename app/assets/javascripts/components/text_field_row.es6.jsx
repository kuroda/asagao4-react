class TextFieldRow extends React.Component {
  labelFor() {
    let labelText = this.props.labelText || this.props.attrName
    return <label htmlFor={this.elementId()}>{labelText}</label>
  }

  textField() {
    let object = this.props.object
    let attrName = this.props.attrName
    return <input size={this.props.size} type='text'
      name={`${this.prefix()}[${attrName}]`}
      id={this.elementId()}
      defaultValue={object[attrName]} />
  }

  elementId() {
    return `${this.prefix()}_${this.props.attrName}`
  }

  prefix() {
    return this.props.prefix || this.props.object.modelName
  }

  render() {
    if (_.isEmpty(this.props.object.errors))
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

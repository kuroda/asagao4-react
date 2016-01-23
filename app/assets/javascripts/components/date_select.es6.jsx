class DateSelect extends React.Component {
  fieldName(n) {
    `${this.props.objectName}[${this.props.attrName}(${n}i)]`
  }

  render() {
    return (
      <select name={this.fieldName(1)}>
        <option value='2000'>2000</option>
        <option value='2002'>2001</option>
      </select>
    )
  }
}

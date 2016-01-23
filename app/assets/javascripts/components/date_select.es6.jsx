class DateSelect extends React.Component {
  fieldName(n) {
    `${this.props.objectName}[${this.props.attrName}(${n}i)]`
  }

  render() {
    let startYear = this.props.startYear || new Date().getFullYear() - 5
    let endYear = this.props.endYear || new Date().getFullYear() + 5
    let d

    if (this.props.defaultValue)
      d = new Date(this.props.defaultValue)
    else
      d = new Date()

    return (
      <div>
      <select name={this.fieldName(1)} defaultValue={d.getFullYear()}>
        {
          _.range(startYear, endYear).map(i => {
            return <option key={i} value={i}>{i}</option>
          })
        }
      </select>
      {' '}
      <select name={this.fieldName(2)} defaultValue={d.getMonth() + 1}>
        {
          _.range(0, 12).map(i => {
            return <option key={i} value={i + 1}>{i + 1}</option>
          })
        }
      </select>
      {' '}
      <select name={this.fieldName(3)} defaultValue={d.getDate()}>
        {
          _.range(0, 31).map(i => {
            return <option key={i} value={i + 1}>{i + 1}</option>
          })
        }
      </select>
      {' — '}
      <select name={this.fieldName(4)} defaultValue={d.getHours()}>
        {
          _.range(0, 24).map(i => {
            return <option key={i} value={i + 1}>{i + 1}</option>
          })
        }
      </select>
      {' : '}
      <select name={this.fieldName(5)} defaultValue={d.getMinutes()}>
        {
          _.range(0, 60).map(i => {
            return <option key={i} value={i + 1}>{i + 1}</option>
          })
        }
      </select>
      </div>
    )
  }
}

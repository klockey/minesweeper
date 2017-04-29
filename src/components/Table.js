
class Table extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <table>
        <TableRow data={this.props.data} />
      </table>
    )
  }
}

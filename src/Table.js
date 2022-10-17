import "./table.css";
function Table({ data, column }) {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => {
            return <TableHeadItem item={item} />;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return <TableRow item={item} column={column} />;
        })}
      </tbody>
    </table>
  );
}
function TableHeadItem({ item }) {
  return <th>{item.heading}</th>;
}
function TableRow({ item, column }) {
  return (
    <>
      <tr>
        {column.map((columnItem, index) => {
          return <td>{item[`${columnItem.value}`]}</td>;
        })}
      </tr>
    </>
  );
}

export default Table;

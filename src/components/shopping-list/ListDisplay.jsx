const ListDisplay = ({data, remove}) => {
  if (data.length === 0) {
    return (
      <h2>
        Your shopping list is empty
      </h2>
    );
  } else {
    return (
      <>
        <h2>
          Shopping list:
        </h2>
        <ul>
          {
            data.map((entry, index) => {
              return (
                <li>
                  {entry.quantity} X {entry.item}
                  <button type="button" onClick={() => remove(index)}>X</button>
                </li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default ListDisplay;

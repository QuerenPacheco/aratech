const List = ({ data, actions }) => {
    return (
        <table>
            <thead>
                <tr><td>Tareas</td><td>Acciones</td></tr>
            </thead>
            <tbody>
                {data?.map((object, i) => {
                    return (
                        <tr key={i}>
                            <td>{object}</td>
                            <td>
                                {actions.map((action, j) =>
                                    <button key={j} onClick={() => action.onClick(i)}>{action.name}</button>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default List;
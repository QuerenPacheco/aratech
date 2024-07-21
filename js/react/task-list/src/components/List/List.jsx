import styles from './css/List.module.css';

const List = ({ data, actions }) => {
    return (
        <div className={styles.subcontainer}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tareas</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((object, i) => {
                        return (
                            <tr key={i}>
                                <td>{object}</td>
                                <td>
                                    {actions.map((action, j) =>
                                        <button className="btn btn-danger btn-sm" key={j} onClick={() => action.onClick(i)}>{action.name}</button>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default List;
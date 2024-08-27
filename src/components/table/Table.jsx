const Table =({ netIncomes })=> {
    const averageNetIncome = ( 
        netIncomes.reduce((sum, current) => sum + current.income, 0) / netIncomes.length
    );

    return (
        <div>
            <table>
                <thead> 
                    <tr>
                        <th>BRAND</th>
                        <th>NET INCOME</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Average Net Income: {averageNetIncome.toFixed(2)}</p>
        </div>

    );
};
export default Table;
import { TableProps } from "./Table.props";

export const Table = ({ headers, data }: TableProps) => {
    return (
        <div className="overflow-x-auto w-full bg-blackOpacity rounded-md mt-6">
            <table className="min-w-max border-collapse text-gray w-full">
                <thead>
                    <tr className="bg-[#242A4D]">
                        {headers.map((header, index) => (
                            <th key={index} className="p-3 text-left">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length ? (
                        data.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className="border-t border-gray-700"
                            >
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="p-3">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={headers.length}
                                className="p-4 text-center"
                            >
                                Немає даних
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

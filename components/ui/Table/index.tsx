import { cn } from "@/lib/utils";
import { TableProps } from "./Table.props";

export const Table = ({ headers, data, className }: TableProps) => {
    return (
        <div className={cn("overflow-x-auto w-full rounded-md", className)}>
            <table className="min-w-max border-collapse text-gray w-full">
                <thead>
                    <tr className="bg-blackOpacity-light text-white">
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
                                className="border-t border-gray-800"
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

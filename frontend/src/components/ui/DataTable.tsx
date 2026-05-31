import React from 'react';

export interface DataTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  firstColumnIsKey?: boolean;
  className?: string;
  caption?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ headers, rows, firstColumnIsKey = false, className = '', caption }) => {
  return (
    <div className={`overflow-x-auto rounded border border-[#D7E2EC] max-w-full ${className}`} style={{ WebkitOverflowScrolling: 'touch' }}>
      <table className="min-w-full text-left border-collapse w-full m-0 bg-white">
        {caption && (
          <caption className="sr-only">{caption}</caption>
        )}
        {headers && headers.length > 0 && (
          <thead className="bg-[#F5F8FB] border-b border-[#D7E2EC]">
            <tr>
              {headers.map((header, index) => (
                <th 
                  key={index}
                  scope="col"
                  className={`px-4 py-3 text-[13px] font-semibold text-[#162C41] uppercase tracking-[0.04em] ${index !== headers.length - 1 ? 'border-r border-[#D7E2EC]' : ''}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="divide-y divide-[#D7E2EC]">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F8FB]"}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={`px-4 py-3 text-[14px] text-[#4F606F] ${firstColumnIsKey && cellIndex === 0 ? 'font-mono text-[#162C41] text-[13px]' : 'font-sans'} ${cellIndex !== row.length - 1 ? 'border-r border-[#D7E2EC]' : ''}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

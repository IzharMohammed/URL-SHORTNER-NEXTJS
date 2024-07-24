import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  interface TableDemoProps  {
    originalUrl : string,
    shortUrl : string
  }
  
  export function TableDemo({originalUrl , shortUrl} : TableDemoProps) {
    return (
   <>
    <tr>
     <td className="py-2 px-4 border-b border-gray-300">{originalUrl}</td>
     <td className="py-2 px-4 border-b border-gray-300">{shortUrl}</td>
     </tr>
   </>
      
    )
  }
  
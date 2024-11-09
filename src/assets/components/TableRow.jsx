export default function TableRow({ ...props }) {
  return (
    <>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{props.id}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src={props.url}
              width={32}
              height={32}
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{props.name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{props.score}</td>
        <td className="p-5 text-sm md:text-xl text-center">
          {props.percentage}
        </td>
      </tr>
    </>
  );
}

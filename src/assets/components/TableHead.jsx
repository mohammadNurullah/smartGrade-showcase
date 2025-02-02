export default function TableHead({ classValue }) {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan={4}>
          {classValue}
        </td>
      </tr>
    </>
  );
}

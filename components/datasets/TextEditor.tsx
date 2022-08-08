import { EditorProps } from 'react-data-grid';
import { useEffect, useRef } from 'react';

function autoFocusAndSelect(input: HTMLInputElement | null) {
  input?.focus();
  input?.select();
}

export default function TextEditor<TRow, TSummaryRow>({
  row,
  column,
  onRowChange,
  onClose,
}: EditorProps<TRow, TSummaryRow>) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(ref.current?.parentElement);
  }, [ref]);

  return (
    <>
      <div ref={ref}></div>
      <input
        className="absolute h-16 overflow-visible"
        ref={autoFocusAndSelect}
        value={row[column.key as keyof TRow] as unknown as string}
        onClick={() => console.log(ref)}
        onChange={(event) =>
          onRowChange({ ...row, [column.key]: event.target.value })
        }
        onBlur={() => onClose(true)}
      />
    </>
  );
}

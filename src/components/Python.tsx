type PythonProps = {
  first: string;
  last: string;
};

export type PythonT = PythonProps & { id: string };

export function Python({ first, last }: PythonProps) {
  return (
    <h2>
      {first} {last}
    </h2>
  );
}

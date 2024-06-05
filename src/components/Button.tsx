
type ButtonProps = {
    children: string;
  };

export default function Button({children}:ButtonProps) {
  return (
    <button className='px-4 py-2 text-sm text-white bg-black rounded-md'>{children}</button>
  )
}

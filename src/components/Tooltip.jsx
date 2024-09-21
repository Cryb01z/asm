export default function Tooltip({ message, children }) {
  return (
    <div class="group relative flex">
      {children}
      <span class="absolute z-10 top-10 scale-0 transition-all rounded bg-gray-600 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
}

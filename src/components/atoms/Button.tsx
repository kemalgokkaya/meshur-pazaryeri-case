export const Button = ({ children, onClick, active }: any) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded transition-colors ${active ? 'bg-red-500' : 'bg-orange-500'} text-white font-bold`}
    >
        {children}
    </button>
);
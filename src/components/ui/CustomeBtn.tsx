interface CustomeBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomeBtn = ({ children, className, ...props }: CustomeBtnProps) => {
  return (
    <button
      className={`${className}    font-semibold transition-all rounded-sm `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomeBtn;

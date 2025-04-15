import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-6 py-2 rounded-full font-medium transition-colors';
  const variantClasses = {
    primary: 'bg-red-500 hover:bg-red-600 text-white',
    outline: 'border-2 border-red-500 text-red-500 hover:bg-red-50'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'outline']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

const PricingCard = ({ 
  title, 
  price, 
  features = [], 
  highlight = false 
}) => (
  <div className={`bg-white p-8 rounded-xl border-2 ${
    highlight ? 'border-red-500' : 'border-transparent'
  } hover:border-red-500 transition-all cursor-pointer`}>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Icon name="check" />
          <span className="text-gray-700 ml-2">{feature}</span>
        </li>
      ))}
    </ul>
    <p className="text-2xl font-bold text-gray-900 mb-4">{price}</p>
    <Button 
      variant={highlight ? "primary" : "outline"} 
      className="w-full"
    >
      Select
    </Button>
  </div>
);

export default PricingCard;
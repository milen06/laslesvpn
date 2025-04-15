import Icon from '../atoms/Icon';

const FeatureItem = ({ iconName, title, description }) => {
  return (
    <li className="flex items-start space-x-4">
      <Icon name={iconName} className="flex-shrink-0 mt-1" />
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
};

export default FeatureItem;
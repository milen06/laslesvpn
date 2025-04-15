import Icon from '../atoms/Icon';

const TestimonialCard = ({ user, rating, comment }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-100">
            {user.avatar && (
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{user.name}</h3>
            <p className="text-gray-500 text-sm">{user.location}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-1">{rating}</span>
          <Icon name="star" className="text-yellow-400" />
        </div>
      </div>
      <p className="text-gray-700">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;
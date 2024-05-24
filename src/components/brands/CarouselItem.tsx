const CarouselItem: React.FC<{ color: string }> = ({ color }) => {
    return (
      <div className={`h-64 ${color} flex items-center justify-center`}>
        <h2 className="text-white text-2xl">Item</h2>
      </div>
    );
  };
  
  export default CarouselItem;
  
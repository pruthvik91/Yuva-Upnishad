import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
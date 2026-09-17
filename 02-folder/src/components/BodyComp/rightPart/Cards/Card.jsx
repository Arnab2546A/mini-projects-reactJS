import CardContent from './CardContent/CardContent'
const Card = () => {
  return (
    <div
      className="w-1/3 h-full rounded-xl bg-cover bg-center p-5 flex flex-col text-white"
      style={{
        backgroundImage:
          "url('https://imgs.search.brave.com/LzOp9Ulw4OqaJZ8xE1qUHx4AIe4etlsHnHyGgiBk3z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzdk/LzZlL2FiN2Q2ZWNj/OWViMDM1MGY2NDUw/NmE0OWEzN2FjOGFm/LmpwZw')",
      }}
    >
      <CardContent/>
    </div>
  );
};

export default Card;

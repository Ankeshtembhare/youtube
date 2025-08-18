import Button from "./Button";

const ButtonList = () => {

   const buttonNames = [
    "All",
    "Sports",
    "Cricket",
    "Music",
    "Gaming",
    "Movies",
    "News",
    "Live",
    "Fashion",
  "Science",
  "Cars",
  "Travel",
  "Animation",
  "Cooking"
  ];
  return (
         <div className="flex flex-wrap gap-2">
           {buttonNames.map((name, index) => (
             <Button key={index} name={name} />
            ))}
         </div>
  )
};

export default ButtonList;
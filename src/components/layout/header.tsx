export const Header=(props:{title:string})=>{
   return (
      <div className="centered text-3xl font-semibold">
        <h1 className="py-4">{props.title}</h1>         
      </div>
   );
};
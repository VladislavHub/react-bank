import "./index.scss";

export default function Component({ title = "", subTitle = "", className = "" }) {
  return (
    <div className={`block block-${className}`}>

      {className === "big" ? (
        <>
          <h1 className="title-big">{title}</h1>
          <h3 className="subTitle-big">{subTitle}</h3>
        </>
      ) : (
        <>
          <h1 className="title">{title}</h1>
          <h3 className="subTitle">{subTitle}</h3>  
        </>
      )}
      
    </div>
  )
}
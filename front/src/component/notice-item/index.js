import "./index.scss";


export default function Component() {
 
  return (
    <div className="notice">
      <div className="notice_item">

        <div className="notice_image">
          <div className="notice_svg"></div>
        </div>

        <div className="notice_info">
          <h1 className="notice_name">New reward system</h1>
          <p className="notice_time">10 min. ago</p>
        </div>

      </div>
    </div>
  )
}